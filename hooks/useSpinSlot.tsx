import React from "react";
import Image from "next/image";

const getRand = (max: number) => {
    return Math.floor(Math.random() * max);
}
{/*  */}
export const UseSpinSlot: React.FC<{
    textLen: number,
    letter: string,
    index: number,
    size: "normal" | "small",
}> = ({
    textLen,
    letter,
    index,
    size,
}) => {
    const srcs:string[] = [
        "/slotIcons/apple.png",
        "/slotIcons/bar.png",
        "/slotIcons/bell.png",
        "/slotIcons/cherry.png",
        "/slotIcons/clover.png",
        "/slotIcons/coin.png",
        "/slotIcons/diamond.png",
        "/slotIcons/grape1.png",
        "/slotIcons/grape2.png",
        "/slotIcons/heart.png",
        "/slotIcons/horseshoe.png",
        "/slotIcons/lemon.png",
        "/slotIcons/orange.png",
        "/slotIcons/watermelon.png"
    ];

    const randNumInit = getRand(srcs.length);
    
    const slot: React.ReactElement<any, any>[] = [
        <Image src={srcs[randNumInit]} width={(size === "normal") ? 24 : 20} height={(size === "normal") ? 24 : 20} />
    ];
    srcs.slice(randNumInit, 1);


    for (var numSlots = 0; numSlots < index; numSlots++) {
        const randNum = getRand(srcs.length);
        slot.push(<Image src={srcs[randNum]} width={(size === "normal") ? 24 : 20} height={(size === "normal") ? 24 : 20} />);
        srcs.splice(randNum, 1);
    }

    return (
        <div
            style={
                { "--trans-y-size": `-${(-((size === "normal") ? 24 : 20) * (index + 1))}px` } as React.CSSProperties
            }
            className="select-none transform translate-y-[--trans-y-size] transition duration-300"
            key={index + 1}
        >
            <div
                key={index + 1}
                className={
                    "text-[15px] sm:text-[19px] w-[1rem] sm:w-[1.5rem] h-[1.66rem] sm:h-[2.5rem] bg-[#fff] flex justify-center items-center uppercase font-[500] "
                    + ((index !== 0) ? "border-[#3b4e52] border-l-[3px] " : "")}
            >
                {letter}
            </div>

            {slot.map((e, index) => {
                return (
                    <div
                        key={index + 1}
                        className={"bg-[#fff] w-[1rem] sm:w-[1.5rem] h-[1.66rem] sm:h-[2.5rem] py-[8px] flex justify-center items-center " + ((index !== textLen) ? "border-[#3b4e52] border-l-[3px] " : "")}
                    >
                        {e}
                    </div>
                )
            })}

        </div>
    );
}