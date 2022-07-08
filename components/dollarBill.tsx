import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

interface dollarBillData {
    typeOfSocial: "youtube" | "twitch" | "tiktok" | "instagram" | "discord";
    icon: IconDefinition;
}

export const DollarBill: React.FC<dollarBillData> = ({ typeOfSocial, icon }) => {
    return (
        <div className="cursor-pointer select-none h-[10rem] sm:h-[12rem] w-[23rem] sm:w-[25rem] bg-[#154d0f] text-[#fff] flex justify-center items-center">
            <div className="h-[8rem] sm:h-[10rem] w-[21rem] sm:w-[23rem] bg-[#22661b] flex flex-col justify-center items-center">
                <div className="w-[21rem] sm:w-[23rem] p-[0.5rem] sm:p-[0.7rem] h-[2rem] sm:h-[2.5rem] flex flex-row justify-between items-center">
                    <FontAwesomeIcon icon={faDollarSign} className="h-[1.5rem] sm:h-[2rem]" />
                    <FontAwesomeIcon icon={faDollarSign} className="h-[1.5rem] sm:h-[2rem]" />
                </div>
                <div className="w-[21rem] sm:w-[23rem] h-full flex justify-center items-center">
                    <div className="w-[4rem] sm:w-[5rem] h-[4rem] sm:h-[5rem] bg-[#337a2c] rounded-[50%] flex justify-center items-center">
                        <FontAwesomeIcon icon={icon} className="h-[2.5rem] sm:h-[3.5rem]" />
                    </div>
                </div>
                <div className="w-[21rem] sm:w-[23rem] p-[0.5rem] sm:p-[0.7rem] h-[2rem] sm:h-[2.5rem] flex flex-row justify-between items-center">
                    <FontAwesomeIcon icon={faDollarSign} className="h-[1.5rem] sm:h-[2rem]" />
                    <h1 className="capitalize text-[20px] font-[500] tracking-[2px]">{typeOfSocial}</h1>
                    <FontAwesomeIcon icon={faDollarSign} className="h-[1.5rem] sm:h-[2rem]" />
                </div>
            </div>
        </div>
    );
}