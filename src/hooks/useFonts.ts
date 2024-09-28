import localFont from "next/font/local";
const circular = localFont({
  src: [
    {
      path: "../../public/assets/fonts/FontsFree-Net-Circular-Std-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
});
export default function useFonts() {
  return {
    circular,
  };
}
