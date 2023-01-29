import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Basket = (props) => (
    <Svg
        width={34}
        height={34}
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M12.75 31.167a1.417 1.417 0 1 0 0-2.834 1.417 1.417 0 0 0 0 2.834Zm15.583 0a1.417 1.417 0 1 0 0-2.834 1.417 1.417 0 0 0 0 2.834ZM1.417 1.417h5.666l3.797 18.969a2.833 2.833 0 0 0 2.833 2.28h13.77a2.833 2.833 0 0 0 2.834-2.28L32.583 8.5H8.5"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export default Basket;
