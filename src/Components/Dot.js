import * as React from "react";
import Svg, { Circle } from "react-native-svg";

const Dot = ({ size, color }) => (
    <Svg
        width={46}
        height={46}
        // fill="none"
        xmlns="http://www.w3.org/2000/svg"
        // {...props}
    >
        <Circle cx={23} cy={23} r={size} fill={color} />
    </Svg>
);

export default Dot;
