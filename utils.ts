import { PixelRatio } from "react-native";

// dp(123) converts 123px (px as in your mockup design) to dp.
export const dp = (px: number) => {
    return px / PixelRatio.get();
};

// sp(54) converts 54px (px as in your mockup design) to sp
export const sp = (px: number) => {
    return px / (PixelRatio.getFontScale() * PixelRatio.get());
};
