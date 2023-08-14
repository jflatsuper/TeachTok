import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/iconTypes";

const BookMark = ({ fill = "white", fillOpacity = "1" }: IconProps) => {
  return (
    <Svg width="18" height="19" viewBox="0 0 18 19" fill="none">
      <Path
        d="M0.75 1.98884C0.75 1.16657 1.44192 0.5 2.29545 0.5H16.2045C17.0581 0.5 17.75 1.16658 17.75 1.98884V17.7544C17.75 18.3418 17.0768 18.6978 16.5624 18.3824L9.66486 14.1539C9.41174 13.9987 9.08826 13.9987 8.83514 14.1539L1.93759 18.3824C1.42316 18.6978 0.75 18.3418 0.75 17.7544V1.98884Z"
        fill={fill}
        fillOpacity={fillOpacity}
      />
    </Svg>
  );
};
export default BookMark;
