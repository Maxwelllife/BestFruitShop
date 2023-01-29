import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Search = (props) => (
    <Svg
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M11.458 19.792a8.333 8.333 0 1 0 0-16.667 8.333 8.333 0 0 0 0 16.667Zm10.417 2.083-4.531-4.531"
            stroke="#F1C40F"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export default Search;
