import { useEffect, useState } from "react";
import { BannerElements } from "../helpers/interfaces";
import { MdEdit } from "react-icons/md";
import EditBannerTemplateBs from "./EditBannerTemplateBs";
import { getBannerData, modifyBannerData } from "../api";
import styles from "../BannerComp.module.css";
import Image from "next/image";
interface Props extends BannerElements {
  setBannerData: React.Dispatch<React.SetStateAction<BannerElements[]>>;
}

const BannerImageComp = ({
  id,
  title,
  description,
  CTA,
  imageSrc,
  background,
  dataStyle,
  setBannerData,
}: Props) => {
  const [bannerTitle, setBannerTitle] = useState(title);
  const [bannerDescription, setBannerDescription] = useState(description);
  const [buttonText, setButtonText] = useState(CTA);
  const [bannerImageSrc, setBannerImageSrc] = useState(imageSrc);
  const [bannerBackground, setBannerBackground] = useState(background);
  const [isEditBannerButtonClicked, setIsEditBannerButtonClicked] =
    useState(false);
  const [dataPosition, setDataPosition] = useState({
    title: "",
    description: "",
    button: "",
    image: "",
  });

  const handleBannerEditing = async (id: string) => {
    await modifyBannerData(
      id,
      bannerTitle,
      bannerDescription,
      buttonText,
      bannerImageSrc,
      bannerBackground
    );
    const response = await getBannerData();
    setBannerData([...response]);
    setIsEditBannerButtonClicked(false);
  };

  const bannerDataStyle = () => {
    if (dataStyle === 1) {
      setDataPosition({
        title: "m-auto text-white text-center w-75",
        description: "m-auto text-white text-center",
        button:
          "position-absolute bg-white text-black border-0 start-50 translate-middle mt-5",
        image: "bottom-0 w-100 start-0 h-25",
      });
      return dataPosition;
    } else if (dataStyle === 2) {
      setDataPosition({
        title: "text-left w-50",
        description: "text-left w-50",
        button: "btn-outline-dark",
        image: "rounded w-50 h-75 end-0  mt-5 bottom-0",
      });
      return dataPosition;
    } else if (dataStyle === 3) {
      setDataPosition({
        title: "w-50",
        description: "w-50",
        button: "text-white bg-black",
        image: "end-0 bottom-0 mb-5",
      });
      return dataPosition;
    } else if (dataStyle === 4) {
      setDataPosition({
        title: "text-center",
        description: "text-center",
        button:
          "position-absolute btn-danger start-50 bottom-0 translate-middle",
        image: "start-50 translate-middle top-50 w-75 h-25 border border-danger rounded-circle mt-5",
      });
      return dataPosition;
    } else if (dataStyle === 5) {
      setDataPosition({
        title: "w-75 text-left",
        description: "w-75 text-left",
        button: "btn-success text-black",
        image: "end-0 bottom-0 rounded-circle",
      });
      return dataPosition;
    }
  };

  useEffect(
    () => {
      bannerDataStyle();
    },
    //eslint-disable-next-line
    []
  );

  return (
    <>
      {isEditBannerButtonClicked && (
        <EditBannerTemplateBs
          id={id}
          bannerTitle={bannerTitle}
          bannerDescription={bannerDescription}
          buttonText={buttonText}
          bannerImageSrc={bannerImageSrc}
          bannerBackground={bannerBackground}
          setBannerTitle={setBannerTitle}
          setBannerDescription={setBannerDescription}
          setButtonText={setButtonText}
          setBannerImageSrc={setBannerImageSrc}
          setBannerBackground={setBannerBackground}
          setIsEditBannerButtonClicked={setIsEditBannerButtonClicked}
          handleBannerEditing={handleBannerEditing}
        />
      )}
      <div className="d-flex justify-content-center">
        <div
          className={`card bg position-relative ${styles.card}`}
          style={{
            minHeight: "23rem",
            backgroundImage: `url(${bannerBackground})`,
            backgroundSize: "cover",
            backgroundRepeat: "repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="card-body">
            <MdEdit
              className={`position-absolute end-0 text-white fs-5 ${styles.editButton}`}
              onClick={() => setIsEditBannerButtonClicked(true)}
            />
            <Image
              width={200}
              height={210}
              src={imageSrc}
              alt="banner-image"
              className={`position-absolute ${dataPosition.image}`}
            />
            <h5
              className={`card-title fs-2 mt-4 ${styles.title} ${dataPosition.title}`}
            >
              {title}
            </h5>
            <p
              className={`card-text mt-3 ${styles.description} ${dataPosition.description}`}
            >
              {description}
            </p>
            <button
              className={`pe-none btn mt-3 ${styles.button} ${dataPosition.button}`}
            >
              {CTA}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerImageComp;
