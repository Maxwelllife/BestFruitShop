import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Notifications = (props) => (
    <Svg
        width={34}
        height={34}
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M25.5 11.333a8.5 8.5 0 1 0-17 0c0 9.917-4.25 12.75-4.25 12.75h25.5s-4.25-2.833-4.25-12.75ZM19.45 29.75a2.832 2.832 0 0 1-4.9 0"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export default Notifications;
