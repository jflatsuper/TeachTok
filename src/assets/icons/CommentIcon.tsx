import { Path, Svg } from "react-native-svg";
import { IconProps } from "../../types/iconTypes";
import React from "react";

const CommentIcon: React.FC = ({
  fill = "white",
  fillOpacity = "1",
}: IconProps) => {
  return (
    <Svg width="28" height="26" viewBox="0 0 28 26" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.5 11.5C27.5 11.9265 27.4727 12.3476 27.4196 12.7621C27.015 17.0905 23.21 22.8553 15.1569 25.7717C14.836 25.8879 14.5 25.6476 14.5 25.3063V22.9922C14.3341 22.9974 14.1674 23 14 23C6.54416 23 0.5 17.8513 0.5 11.5C0.5 5.14874 6.54416 0 14 0C21.4558 0 27.5 5.14874 27.5 11.5ZM8.5 14C9.60458 14 10.5 13.1046 10.5 12C10.5 10.8954 9.60458 10 8.5 10C7.39542 10 6.5 10.8954 6.5 12C6.5 13.1046 7.39542 14 8.5 14ZM14.5 14C15.6046 14 16.5 13.1046 16.5 12C16.5 10.8954 15.6046 10 14.5 10C13.3954 10 12.5 10.8954 12.5 12C12.5 13.1046 13.3954 14 14.5 14ZM22.5 12C22.5 13.1046 21.6046 14 20.5 14C19.3954 14 18.5 13.1046 18.5 12C18.5 10.8954 19.3954 10 20.5 10C21.6046 10 22.5 10.8954 22.5 12Z"
        fill={fill}
        fillOpacity={fillOpacity}
      />
    </Svg>
  );
};
export default CommentIcon;
