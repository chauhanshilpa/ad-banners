import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../bannerComp.module.css";
import { MdEditSquare } from "react-icons/md";
import { bannerDataStyle } from "../helpers/bannerLayout";

interface Props {
  imageSrc: string;
  bannerBackground: string;
  title: string;
  description: string;
  CTA: string;
  dataStyle: number;
  setIsEditBannerButtonClicked?: React.Dispatch<React.SetStateAction<boolean>>;
  isSmall?: boolean;
}

const BannerImageCompCard = ({
  imageSrc,
  bannerBackground,
  title,
  description,
  CTA,
  dataStyle,
  setIsEditBannerButtonClicked,
  isSmall = false,
}: Props) => {
  const [dataPosition, setDataPosition] = useState({
    title: "",
    description: "",
    button: "",
    image: "",
  });



  useEffect(
    () => {
      const styles = bannerDataStyle(dataStyle)!;
      setDataPosition({ ...styles });

    },
    //eslint-disable-next-line
    []
  );
  return (
    <div className={`w-100 d-flex justify-content-center`}>
      <div
        className={`card rounded bg w-100 position-relative ${styles.card}`}
        style={{
          minHeight: "20rem",
          backgroundImage: `url(${bannerBackground})`,
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="card-body">
          {!isSmall && (
            <MdEditSquare
              className={`position-absolute end-0 text-white bg-black fs-5 ${styles.editButton}`}
              onClick={() =>
                setIsEditBannerButtonClicked &&
                setIsEditBannerButtonClicked(true)
              }
            />
          )}
          <Image
            width={100}
            height={110}
            src={imageSrc}
            alt="banner-image"
            className={`position-absolute ${
              dataPosition && dataPosition.image
            } ${isSmall && dataStyle === 3 && "w-50 h-25"}}`}
          />
          <h5
            className={`fs-2 mt-4 ${styles.title} ${
              dataPosition && dataPosition.title
            } ${isSmall && "fs-4"}`}
          >
            {title}
          </h5>
          <p
            className={`mt-3 ${styles.description} ${
              dataPosition && dataPosition.description
            } ${isSmall && styles.showLess}`}
          >
            {description}
          </p>
          <button
            className={`pe-none btn mt-3 ${styles.button} ${
              dataPosition && dataPosition.button
            }`}
          >
            {CTA}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerImageCompCard;
