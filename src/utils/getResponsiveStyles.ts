/**
 * This util is created to cater to both mobile and web applications as requesteed in #TeachTok documentation
 */
type TType = "spacing" | "font" | "dimensions";

/**
 * @param styleToMakeResponsive - The number given on figma design, is also the max value
 * @param type - type of style to make responsive
 */
import { Dimensions } from "react-native";
export const getResponsiveStyle: (
  styleToMakeResponsive: number | undefined,
  type?: TType
) => number = (styleToMakeResponsive, type = "spacing") => {
  if (!styleToMakeResponsive) return 0;
  const width = getWidth();
  const DefaultScreenWidth = getDefaultScreenWidth(width);
  const percentage = getPercentage(type);
  const calculatedMax = getMaxValue(styleToMakeResponsive, percentage);
  const calculatedMin = getMinValue(styleToMakeResponsive, percentage);

  const clampedValue = getClampedValue(
    width,
    styleToMakeResponsive,
    DefaultScreenWidth,
    calculatedMin,
    calculatedMax
  );

  return width >= 1024
    ? getPointSystemValueForDesktop(clampedValue, type)
    : getPointSystemValueForMobile(clampedValue);
};

const getPercentage = (type: TType) => {
  switch (type) {
    case "font":
      return 0.17;
    case "dimensions":
      return 0.07;
    case "spacing":
      return 0.2;
  }
};

const getClampedValue = (
  width: number,
  styleToMakeResponsive: number,
  DefaultScreenWidth: number,
  calculatedMin: number,
  calculatedMax: number
) => {
  return Math.min(
    Math.max(
      width * (styleToMakeResponsive / DefaultScreenWidth),
      calculatedMin
    ),
    calculatedMax
  );
};

const getPointSystemValueForDesktop = (clampedValue: number, type: TType) => {
  if (type === "font") {
    // implements 2pt system for fonts
    return Math.ceil(clampedValue / 2) * 2;
  } else if (type === "spacing") {
    // implements 4pt system for spacing
    return Math.ceil(clampedValue / 4) * 4;
  } else {
    // implements 8pt system for dimensions
    return Math.ceil(clampedValue / 8) * 8;
  }
};

const getPointSystemValueForMobile = (clampedValue: number) => {
  return Math.ceil(clampedValue / 2) * 2;
};

const getMinValue = (styleToMakeResponsive: number, percentage: number) => {
  return styleToMakeResponsive - styleToMakeResponsive * percentage;
};

const getMaxValue = (styleToMakeResponsive: number, percentage: number) => {
  return styleToMakeResponsive * percentage + styleToMakeResponsive;
};

export const getWidth = () => {
  const width = Dimensions.get("screen").width;
  return width;
};

export const getHeight = () => {
  const height = Dimensions.get("screen").height;
  return height;
};
const getDefaultScreenWidth = (width: number) => {
  return width >= 1024 ? 1440 : 400;
};
