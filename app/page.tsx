"use client";
import { useState } from "react";
import { BANNER_JSON } from "./helpers/constants";
import BannerImageComp from "./components/BannerImageComp";
import styles from "./page.module.css"

export default function Home() {
  const [bannerData, setBannerData] = useState([...BANNER_JSON]);

  return (
    <div className="container">
      <h1 className={`text-center text-secondary fw-bold mt-5 mb-5 ${styles.header}`}>Ad Banners</h1>
      <div className={styles.banners}>
        {bannerData.map(
          ({
            id,
            title,
            description,
            CTA,
            imageSrc,
            background,
            dataStyle,
          }) => (
            <BannerImageComp
              key={id}
              id={id}
              title={title}
              description={description}
              CTA={CTA}
              imageSrc={imageSrc}
              background={background}
              dataStyle={dataStyle}
              setBannerData={setBannerData}
            />
          )
        )}
      </div>
    </div>
  );
}
