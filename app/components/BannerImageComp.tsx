import { useState } from "react";
import { BannerElements } from "../helpers/interfaces";
import { MdEdit } from "react-icons/md";
import EditBannerTemplateBs from "./EditBannerTemplateBs";
import { getBannerData, modifyBannerData } from "../api";

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
  setBannerData,
}: Props) => {
  const [bannerTitle, setBannerTitle] = useState(title);
  const [bannerDescription, setBannerDescription] = useState(description);
  const [buttonText, setButtonText] = useState(CTA);
  const [bannerImageSrc, setBannerImageSrc] = useState(imageSrc);
  const [bannerBackground, setBannerBackground] = useState(background);
  const [isEditBannerButtonClicked, setIsEditBannerButtonClicked] =
    useState(false);

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
    setBannerData([ ...response ]);
    setIsEditBannerButtonClicked(false);
  };

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
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <MdEdit onClick={() => setIsEditBannerButtonClicked(true)} />
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <button className="btn btn-primary">{CTA}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerImageComp;
