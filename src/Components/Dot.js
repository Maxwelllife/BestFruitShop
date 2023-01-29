import * as React from "react";
import Svg, { Circle } from "react-native-svg";

const Dot = (props) => (
    <Svg
        width={16}
        height={16}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Circle cx={8} cy={8} r={8} fill="#C4C4C4" />
    </Svg>
);

export default Dot;
