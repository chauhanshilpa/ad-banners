import React from "react";
import Image from "next/image";
import { MdCancel } from "react-icons/md";
import { uuid } from "uuidv4";
import styles from "../editBannerComp.module.css";

interface Props {
  id: string;
  bannerTitle: string;
  bannerDescription: string;
  buttonText: string;
  bannerImageSrc: string;
  bannerBackground: string;
  setBannerTitle: React.Dispatch<React.SetStateAction<string>>;
  setBannerDescription: React.Dispatch<React.SetStateAction<string>>;
  setButtonText: React.Dispatch<React.SetStateAction<string>>;
  setBannerImageSrc: React.Dispatch<React.SetStateAction<string>>;
  setBannerBackground: React.Dispatch<React.SetStateAction<string>>;
  setIsEditBannerButtonClicked: React.Dispatch<React.SetStateAction<boolean>>;
  handleBannerEditing: (id: string) => Promise<void>;
}

const EditBannerTemplateBs = ({
  id,
  bannerTitle,
  bannerDescription,
  buttonText,
  bannerImageSrc,
  bannerBackground,
  setButtonText,
  setBannerTitle,
  setBannerDescription,
  setBannerImageSrc,
  setBannerBackground,
  setIsEditBannerButtonClicked,
  handleBannerEditing,
}: Props) => {
  return (

    <div className={`rounded p-3 z-1 bg-light ${styles.editBottomSheet}`}>
      <MdCancel
        onClick={() => setIsEditBannerButtonClicked(false)}
        className={`position-absolute end-0 fs-4 ${styles.cancelButton}`}
      />
      <h5 className="text-muted mt-4">Edit Banner</h5>
      <div className="d-flex justify-content-center">
        <Image
          width={200}
          height={210}
          src={bannerImageSrc}
          alt="banner-image"
          className="mt-4"
        />
      </div>
      <h6 className="mt-5 text-secondary">Images</h6>
      {/* list of images */}
      <div className={`${styles.imagesList}`}>
        {Array(10)
          .fill(0)
          .map(() => (
            <Image
              key={uuid()}
              src="https://images.unsplash.com/photo-1486428128344-5413e434ad35?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3VwY2FrZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
              height={50}
              width={50}
              alt=""
              className="rounded-circle mx-1"
            />
          ))}
      </div>
      {/* input elements */}
      <div className="mt-4">
        <label htmlFor="title" className="text-secondary">
          Title
        </label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          value={bannerTitle}
          className={styles.input}
          onChange={(event) => setBannerTitle(event.target.value)}
        />
        <br />
        <label htmlFor="description" className="text-secondary mt-3">
          Description
        </label>
        <br />
        <input
          type="text"
          id="description"
          name="description"
          value={bannerDescription}
          className={styles.input}
          onChange={(event) => setBannerDescription(event.target.value)}
        />
        <br />
        <label htmlFor="button-text" className="text-secondary mt-3">
          Button Text
        </label>
        <br />
        <input
          type="text"
          id="button-text"
          name="button-text"
          value={buttonText}
          className={styles.input}
          onChange={(event) => setButtonText(event.target.value)}
        />
        <br />
      </div>
      <button
        className={`btn btn-primary mt-4 w-100 p-2 ${styles.button}`}
        onClick={() => handleBannerEditing(id)}
      >
        Done
      </button>
    </div>

  );
};

export default EditBannerTemplateBs;
