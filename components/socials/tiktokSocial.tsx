import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

export const TiktokSocial = () => {
    return (
        <Link href="https://www.instagram.com/moneysigneric">
            <div className="cursor-pointer select-none bg-[#1f1e1e] border-[2.5px] sm:border-[4px] border-[#000] w-[18rem] sm:w-[20rem] h-[10rem] sm:h-[12rem] rounded-[25px] text-[#fff] flex flex-col justify-evenly hover:scale-[1.02] transition-[200ms]">
                <div className="mx-[0.5rem] inline-flex items-center">
                    <FontAwesomeIcon icon={faTiktok} className="h-[2.5rem] mr-[0.5rem]" />
                    <h1 className="text-[24px] tracking-[2px] font-[500] text-transparent bg-clip-text bg-gradient-to-r from-[#25f2ea] via-[#f82d54] to-[#f82d54]">TikTok</h1>
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
                    <h1 className="text-right text-[18px] font-[500] tracking-[2px] text-transparent bg-clip-text bg-gradient-to-r from-[#25f2ea] via-[#f82d54] to-[#f82d54]">xxxx xxxx xxxx xxxx</h1>
                </div>
                <div className="mx-[0.5rem] text-transparent bg-clip-text bg-gradient-to-r from-[#25f2ea] via-[#f82d54] to-[#f82d54]">
                    <div>
                        <h2 className="text-[12px] m-[0] p-[0]">valid thru</h2>
                        <h1 className="text-[14px] m-[0] p-[0]">07/98</h1>
                    </div>
                    <h1 className="uppercase text-[16px] font-[500] tracking-[3px] m-[0] p-[0] text-transparent bg-clip-text bg-gradient-to-r via-[#f82d54] from-[#25f2ea] to-[#f82d54]">moneysigneric</h1>
                </div>
            </div>
        </Link>
    )
}