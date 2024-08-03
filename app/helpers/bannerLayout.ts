export const bannerDataStyle = (dataStyle: number) => {
  if (dataStyle === 1) {
    let style = {
      title: "m-auto text-white text-center w-75",
      description: "m-auto text-white text-center",
      button:
        "position-absolute bg-white text-black border-0 start-50 translate-middle mt-5",
      image: "bottom-0 w-100 start-0 h-25",
    };
    return style;
  } else if (dataStyle === 2) {
    let style = {
      title: "text-left w-50",
      description: "text-left w-50",
      button: "btn-outline-dark",
      image: "rounded w-50 h-50 end-0  mt-5 bottom-0",
    };
    return style;
  } else if (dataStyle === 3) {
    let style = {
      title: "w-50",
      description: "w-50",
      button: "text-white bg-black",
      image: "end-0 bottom-0 mb-5",
    };
    return style;
  } else if (dataStyle === 4) {
    let style = {
      title: "text-center",
      description: "text-center",
      button: "position-absolute btn-danger start-50 bottom-0 translate-middle",
      image:
        "start-50 translate-middle top-50 w-75 h-25 border border-danger rounded-circle mt-5",
    };
    return style;
  } else if (dataStyle === 5) {
    let style = {
      title: "w-75 text-left text-white",
      description: "w-75 text-left text-white",
      button: "btn-success text-black text-white",
      image: "end-0 bottom-0 rounded-circle",
    };
    return style;
  }
};
