import { useLottie } from "lottie-react";
import loadingAnimation from "./loding.json";

const LottieLoading = () => {
  const options = {
    animationData: loadingAnimation,
    loop:true
  }

  const { LoadingWithLottie} = useLottie(options);

  return LoadingWithLottie;
};

export default LottieLoading;