import React from "react";
import { Path, Svg } from "react-native-svg";
import { IconProps } from "../../types/iconTypes";

const ChevronRight: React.FC = ({
  fill = "white",
  fillOpacity = "1",
}: IconProps) => {
  return (
    <Svg width="8" height="13" viewBox="0 0 8 13" fill="none">
      <Path
        d="M7.40088 6.41699C7.40088 6.72803 7.29297 6.98828 7.02637 7.24219L2.22754 11.9458C2.03711 12.1362 1.80225 12.2314 1.52295 12.2314C0.964355 12.2314 0.507324 11.7808 0.507324 11.2222C0.507324 10.9365 0.621582 10.6826 0.831055 10.4731L5.01416 6.41064L0.831055 2.35449C0.621582 2.15137 0.507324 1.89111 0.507324 1.61182C0.507324 1.05957 0.964355 0.602539 1.52295 0.602539C1.80225 0.602539 2.03711 0.697754 2.22754 0.888184L7.02637 5.5918C7.28662 5.83936 7.40088 6.09961 7.40088 6.41699Z"
        fill={fill}
        fillOpacity={fillOpacity}
      />
    </Svg>
  );
};
export default ChevronRight;
