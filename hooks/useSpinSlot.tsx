import React from "react";
import Image from "next/image";

const getRand = (max: number) => {
    return Math.floor(Math.random() * max);
}

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
        <Image src={srcs[randNumInit]} width={(size === "normal") ? 24 : 20.8} height={(size === "normal") ? 24 : 20.8} />
    ];
    srcs.slice(randNumInit, 1);


    for (var numSlots = 0; numSlots < index; numSlots++) {
        const randNum = getRand(srcs.length);
        slot.push(<Image src={srcs[randNum]} width={(size === "normal") ? 24 : 20.8} height={(size === "normal") ? 24 : 20.8} />);
        srcs.splice(randNum, 1);
    }

    return (
        <div
            style={
                {
                    "--trans-dist": `${-40 * (index + 1)}px`,
                    "--trans-time": `${(index + 1) * 0.1}s`,
                } as React.CSSProperties
            }
            className="translate-y-[var(--trans-dist)] animate-[scrollUp_var(--trans-time)_ease-in-out_1_0s_forwards]"
            key={index + 1}
        >
            <div
                key={index + 1}
                className={
                    "text-[19px] w-[1.3rem] sm:w-[1.5rem] h-[2.5rem] bg-[#fff] flex justify-center items-center uppercase font-[500] "
                    + ((index !== 0) ? "border-[#3b4e52] border-l-[2px] " : "")}
            >
                {letter}
            </div>

            {slot.map((e, index) => {
                return (
                    <div
                        key={index + 1}
                        className={"bg-[#fff] w-[1.3rem] sm:w-[1.5rem] h-[2.5rem] py-[8px] flex justify-center items-center " + ((index !== textLen) ? "border-[#3b4e52] border-l-[2px] " : "")}
                    >
                        {e}
                    </div>
                )
            })}

        </div>
    );
}