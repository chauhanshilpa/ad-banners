import { BANNER_JSON } from "./helpers/constants";

const bannerData = [...BANNER_JSON];

export async function modifyBannerData(
  id: string,
  bannerTitle: string,
  bannerDescription: string,
  buttonText: string,
  bannerImageSrc: string,
  bannerBackground: string
) {
  const toChangeBannerDataIndex = bannerData.findIndex(
    (data) => data.id === id
  );
  bannerData[toChangeBannerDataIndex].title = bannerTitle;
  bannerData[toChangeBannerDataIndex].description = bannerDescription;
  bannerData[toChangeBannerDataIndex].CTA = buttonText;
  bannerData[toChangeBannerDataIndex].imageSrc = bannerImageSrc;
  bannerData[toChangeBannerDataIndex].background = bannerBackground;
}

export async function getBannerData() {
  return bannerData;
}
