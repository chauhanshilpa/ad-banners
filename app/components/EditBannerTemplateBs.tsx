import React from "react";
import Image from "next/image";
import { MdCancel } from "react-icons/md";
import styles from "../editBannerComp.module.css";
import { BANNER_JSON } from "../helpers/constants";
import BannerImageCompCard from "./BannerImageCompCard";
import { v4 as uuidv4 } from "uuid";
interface Props {
  id: string;
  bannerTitle: string;
  bannerDescription: string;
  buttonText: string;
  bannerImageSrc: string;
  bannerBackground: string;
  dataStyle: number;
  setBannerTitle: React.Dispatch<React.SetStateAction<string>>;
  setBannerDescription: React.Dispatch<React.SetStateAction<string>>;
  setButtonText: React.Dispatch<React.SetStateAction<string>>;
  setBannerImageSrc: React.Dispatch<React.SetStateAction<string>>;
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
  dataStyle,
  setButtonText,
  setBannerTitle,
  setBannerDescription,
  setBannerImageSrc,
  setIsEditBannerButtonClicked,
  handleBannerEditing,
}: Props) => {

  return (
    <div className={`rounded p-3 z-1 bg-light ${styles.editBottomSheet}`}>
      <div className="sticky-top bg-light overflow-hidden">
        <MdCancel
          onClick={() => setIsEditBannerButtonClicked(false)}
          className={`position-absolute end-0 fs-4 ${styles.cancelButton}`}
        />
        <h5 className="text-muted">Edit Banner</h5>
      </div>
      <div className={`p-4 ${styles.editCardWrapper}`}>
        <div className="d-flex justify-content-center">
          <BannerImageCompCard
            imageSrc={bannerImageSrc}
            bannerBackground={bannerBackground}
            title={bannerTitle}
            description={bannerDescription}
            CTA={buttonText}
            dataStyle={dataStyle}
            isSmall={true}
          />
        </div>
        <h6 className="mt-5 text-secondary">Images</h6>
        {/* list of images */}
        <div className={`${styles.imagesList}`}>
          {BANNER_JSON.map(({ imageSrc }) => (
            <Image
              key={uuidv4()}
              src={imageSrc}
              height={40}
              width={40}
              alt="banner-image"
              className={`rounded-circle mx-1 ${styles.image}`}
              onClick={() => setBannerImageSrc(imageSrc)}
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
          className={`btn mt-4 w-100 p-2 ${styles.button}`}
          onClick={() => handleBannerEditing(id)}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default EditBannerTemplateBs;
