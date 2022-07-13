import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdjust } from "@fortawesome/free-solid-svg-icons";
import { Logo } from "./slotMachine/logo";

export const Header = () => {
    // width tracking
    const [width, setWidth] = React.useState(0);

    const updateDim = () => {
        const width = window.innerWidth;
        setWidth(width);
    }

    React.useEffect(() => {
        updateDim();
        window.addEventListener("resize", updateDim);

        return () =>
            window.removeEventListener("resize", updateDim);
    }, []);

    return (
        <div className="h-[8rem] flex justify-center items-center bg-[#e0faee]">
            <Logo text="moneysigneric" size={(width >= 640) ? "normal" : "small"} />
        </div>
    )

}