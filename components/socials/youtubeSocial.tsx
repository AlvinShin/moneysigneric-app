import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

export const YoutubeSocial = () => {
    return (
        <Link href="https://www.youtube.com/moneysigneric">
            <div className="cursor-pointer select-none border-[2.5px] sm:border-[4px] border-[#754056] bg-[#d95668] w-[18rem] sm:w-[20rem] h-[10rem] sm:h-[12rem] rounded-[25px] text-[#fff] flex flex-col justify-evenly hover:scale-[1.02] transition-[200ms]">
                <div className="mx-[0.5rem] inline-flex items-center">
                    <FontAwesomeIcon icon={faYoutube} className="h-[2.5rem] mr-[0.5rem]" />
                    <h1 className="text-[24px] tracking-[2px] font-[500]">Youtube</h1>
                </div>
                <div className="mx-[0.5rem] flex flex-row justify-between items-center">
                    <div className="w-[2.7rem] h-[1.7rem] bg-[#d4d5d6] rounded-[8px] flex flex-row justify-evenly items-center">
                        <div
                            style={
                                {
                                    "--width": `${1 / 3}%`
                                } as React.CSSProperties
                            }
                            className="border-r-[#979999] border-[1px] w-[calc(--width)] h-full flex justify-center items-center"
                        />
                        <div
                            style={
                                {
                                    "--width": `${1 / 3}%`
                                } as React.CSSProperties
                            }
                            className="border-l-[#979999] border-[1px] w-[calc(--width)] h-full flex justify-center items-center"
                        />              
                    </div>
                    <h1 className="text-right text-[18px] font-[500] tracking-[2px]">xxxx xxxx xxxx xxxx</h1>
                </div>
                <div className="mx-[0.5rem]">
                    <div>
                        <h2 className="text-[12px] m-[0] p-[0]">valid thru</h2>
                        <h1 className="text-[14px] m-[0] p-[0]">07/98</h1>
                    </div>
                    <h1 className="uppercase text-[16px] font-[500] tracking-[3px] m-[0] p-[0]">moneysigneric</h1>
                </div>
            </div>
        </Link>
    )
}