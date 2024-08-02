import { useState } from "react";
import { BannerElements } from "../helpers/interfaces";
import EditBannerTemplateBs from "./EditBannerTemplateBs";
import { getBannerData, modifyBannerData } from "../helpers/api";
import BannerImageCompCard from "./BannerImageCompCard";
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
  const [isEditBannerButtonClicked, setIsEditBannerButtonClicked] =
    useState(false);

  const handleBannerEditing = async (id: string) => {
    await modifyBannerData(
      id,
      bannerTitle,
      bannerDescription,
      buttonText,
      bannerImageSrc,
      background
    );
    const response = await getBannerData();
    setBannerData([...response]);
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
          bannerBackground={background}
          dataStyle={dataStyle}
          setBannerTitle={setBannerTitle}
          setBannerDescription={setBannerDescription}
          setButtonText={setButtonText}
          setBannerImageSrc={setBannerImageSrc}
          setIsEditBannerButtonClicked={setIsEditBannerButtonClicked}
          handleBannerEditing={handleBannerEditing}
        />
      )}
      <BannerImageCompCard
        imageSrc={imageSrc}
        bannerBackground={background}
        title={title}
        description={description}
        CTA={CTA}
        dataStyle={dataStyle}
        setIsEditBannerButtonClicked={setIsEditBannerButtonClicked}
      />
    </>
  );
};

export default BannerImageComp;
