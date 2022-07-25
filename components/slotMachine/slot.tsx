import React from "react";
import Image from "next/image";

const getRand = (max: number) => {
    return Math.floor(Math.random() * max);
}

export const Slot: React.FC<{
    textLen: number;
    letter: string;
    index: number;
    size: "normal" | "small";
}> = ({
    textLen,
    letter,
    index,
    size,
}) => {
        const srcs: string[] = [
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
        const letterIndex = index;

        const slot: React.ReactElement<any, any>[] = [
            <Image src={srcs[randNumInit]} width={(size === "normal") ? 24 : 20.8} height={(size === "normal") ? 24 : 20.8} alt="#" key={1} />
        ];
        srcs.slice(randNumInit, 1);


        for (var numSlots = 0; numSlots < index; numSlots++) {
            const randNum = getRand(srcs.length);
            slot.push(<Image src={srcs[randNum]} width={(size === "normal") ? 24 : 20.8} height={(size === "normal") ? 24 : 20.8} alt="#" key={numSlots + 2} />);
            srcs.splice(randNum, 1);
        }

        return (
            <div
                key={index + 1}
                style={
                    {
                        "--trans-dist": `${-40 * (index + 1)}px`,
                        "--trans-time": `${(index + 1) * 0.1151}s`,
                    } as React.CSSProperties
                }
                className={"z-[1] translate-y-[var(--trans-dist)] animate-[scrollUp_var(--trans-time)_ease-in_1_1.27s_forwards] " + ((index === 0) ? "rounded-l-[15px] " : "") + ((index === textLen - 1) ? "rounded-r-[15px] " : "")}
            >
                <div
                    key={1}
                    className={
                        "z-[1] text-[19px] w-[1.3rem] sm:w-[1.5rem] h-[2.5rem] bg-[#fff] flex justify-center items-center uppercase font-[500] "
                        + ((index !== 0) ? "border-[#3b4e52] border-l-[2px] " : "")
                        + ((index === 0) ? "rounded-l-[15px] " : "")
                        + ((index === textLen - 1) ? "rounded-r-[15px] " : "")
                    }
                >
                    {letter}
                </div>

                {slot.map((e, index) => {
                    return (
                        <div
                            key={index + 2}
                            className={"z-[1] bg-[#fff] w-[1.3rem] sm:w-[1.5rem] h-[2.5rem] py-[8px] flex justify-center items-center "
                                + ((letterIndex !== 0) ? "border-[#3b4e52] border-l-[2px] " : "")
                            }
                        >
                            {e}
                        </div>
                    )
                })}

            </div>
        );
    }