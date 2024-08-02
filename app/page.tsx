"use client";
import { useState } from "react";
import { BANNER_JSON } from "./helpers/constants";
import BannerImageComp from "./components/BannerImageComp";
import styles from "./styles/page.module.css"

export default function Home() {
  const [bannerData, setBannerData] = useState([...BANNER_JSON]);

  return (
    <div className="container">
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
