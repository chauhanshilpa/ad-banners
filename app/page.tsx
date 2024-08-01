"use client";
import { useState } from "react";
import { BANNER_JSON } from "./helpers/constants";
import BannerImageComp from "./components/BannerImageComp";

export default function Home() {
  const [bannerData, setBannerData] = useState([...BANNER_JSON]);

  return (
    <div className="container">
      <div className="row">
        {bannerData.map(
          ({ id, title, description, CTA, imageSrc, background }) => (
            <BannerImageComp
              key={id}
              id={id}
              title={title}
              description={description}
              CTA={CTA}
              imageSrc={imageSrc}
              background={background}
              setBannerData={setBannerData}
            />
          )
        )}
      </div>
    </div>
  );
}
