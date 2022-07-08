import React from "react";
import { UseSpinSlot } from "../hooks/useSpinSlot";


export const Logo: React.FC<{ text: String, size: "normal" | "small" }> = ({
    text,
    size
}) => {
    const letters = text.split("");

    return (
        <div className="select-none flex flex-row justify-center items-center">
            {/* slot MACHINE */}
            <div className="flex flex-col justify-center items-center">
                <div className="bg-[#fccb05] p-[0.35rem] sm:p-[0.4rem] rounded-[15px]">
                    <div className="bg-[#f3bb15] p-[0.35rem] sm:p-[0.4rem] rounded-[15px]">
                        <div className="bg-[#3b4e52] p-[0.35rem] sm:p-[0.4rem] rounded-[15px]">
                            <div className="rounded-[15px] bg-[#fff] h-[2.5rem] flex flex-row overflow-hidden">
                                {letters.map((e, index) => {
                                    return (
                                        <UseSpinSlot
                                            textLen={letters.length}
                                            letter={e}
                                            index={index}
                                            size={size}
                                            key={index + 1}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                {/* slot machine BASE */}
                <div
                    style={
                        {
                            "--base-size": `${text.length * 1.25}rem`,
                            "--sm-base-size": `${text.length * 1.1}rem`
                        } as React.CSSProperties
                    }
                    className="h-[0.3rem] sm:h-[0.4rem] w-[var(--sm-base-size)] sm:w-[var(--base-size)] bg-[#3b4e52]"
                />
            </div>

            {/* slot machine HANDLE */}
            <div className="flex flex-row justify-center items-center">
                <div className="bg-[#f1bc17] w-[0.4rem] sm:w-[0.7rem] h-[3rem] translate-y-[-0.15rem] sm:translate-y-[-0.3rem]" />
                <div className="flex flex-col justify-center items-center translate-y-[-1.5rem]">
                    <div className="flex flex-col justify-center items-center">
                        <div className="bg-[#c62128] w-[1rem] h-[1rem] rounded-[50%] translate-y-[0.3rem]" />
                        <div className="bg-[#f1bc17] w-[0.5rem] h-[2rem]" />
                    </div>
                    <div className="bg-[#3b4e52] w-[1.5rem] sm:w-[2rem] h-[1.7rem] rounded-r-[10px] translate-y-[-0.3rem]" />
                </div>
            </div>
        </div>
    )
}

