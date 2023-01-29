import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const AddButton = (props) => (
    <Svg
        width={60}
        height={60}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Circle cx={30} cy={30} r={30} fill="#F1C40F" />
        <Path
            d="M30 17.703v24.594M17.703 30h24.594"
            stroke="#fff"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export default AddButton;
