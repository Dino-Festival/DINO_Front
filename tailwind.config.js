/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: { min: "375px", max: "720px" },
        md: { min: "721px", max: "1080px" },
        lg: { min: "1081px", max: "1440px" },
        xl: { min: "1441px", max: "1920px" },
        xxl: { min: "1921px" },
        smartPhoneXs: { min: "320px", max: "389px" },
        smartPhone: { min: "400px", max: "430px" },
        tabletMini: { min: "768px", max: "820px" },
        tablet: { min: "821px", max: "1030px" },
      },
      fontFamily: {
        PretendardBlack: ["Pretendard Black"],
        PretendardBold: ["Pretendard Bold"],
        PretendardExtraBold: ["PretendardExtraBold"],
        PretendardExtraLight: ["PretendardExtraLight"],
        PretendardLight: ["PretendardLight"],
        PretendardMedium: ["Pretendard Medium"],
        PretendardRegular: ["Pretendard Regular"],
        PretendardSemiBold: ["Pretendard SemiBold"],
        PretendardThin: ["Pretendard Thin"],
      },
    },
  },
};
