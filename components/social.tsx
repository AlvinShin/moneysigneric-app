import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faInstagram, faTwitch, faTiktok, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { DollarBill } from "./dollarBill";

interface socialData {
    typeOfSocial: "youtube" | "twitch" | "tiktok" | "instagram" | "discord";
}

export const Social: React.FC<socialData> = ({ typeOfSocial }) => {
    switch (typeOfSocial) {
        case "youtube": {
            return (
                <Link href="https://www.youtube.com/moneysigneric">
                    <div className="cursor-pointer h-[10rem] sm:h-[12rem] w-[23rem] sm:w-[25rem] bg-[#154d0f] text-[#fff] flex justify-center items-center">
                        <div className="h-[8rem] sm:h-[10rem] w-[21rem] sm:w-[23rem] bg-[#22661b] flex flex-col justify-center items-center">
                            <div className="w-[21rem] sm:w-[23rem] p-[0.5rem] sm:p-[0.7rem] h-[2rem] sm:h-[2.5rem] flex flex-row justify-between items-center">
                                <FontAwesomeIcon icon={faDollarSign} className="h-[1.5rem] sm:h-[2rem]" />
                                <FontAwesomeIcon icon={faDollarSign} className="h-[1.5rem] sm:h-[2rem]" />
                            </div>
                            <div className="w-[21rem] sm:w-[23rem] h-full flex justify-center items-center">
                                <div className="w-[4rem] sm:w-[5rem] h-[4rem] sm:h-[5rem] bg-[#337a2c] rounded-[50%] flex justify-center items-center">
                                    <FontAwesomeIcon icon={faYoutube} className="h-[2.5rem] sm:h-[3.5rem]" />
                                </div>
                            </div>
                            <div className="w-[21rem] sm:w-[23rem] p-[0.5rem] sm:p-[0.7rem] h-[2rem] sm:h-[2.5rem] flex flex-row justify-between items-center">
                                <FontAwesomeIcon icon={faDollarSign} className="h-[1.5rem] sm:h-[2rem]" />
                                <h1 className="capitalize text-[20px] font-[500] tracking-[2px]">{typeOfSocial}</h1>
                                <FontAwesomeIcon icon={faDollarSign} className="h-[1.5rem] sm:h-[2rem]" />
                            </div>
                        </div>
                    </div>
                </Link>
            );
        }
        case "twitch": {
            return (
                <Link href="https://www.twitch.tv/moneysigneric">
                    <div className="cursor-pointer h-[10rem] sm:h-[12rem] w-[23rem] sm:w-[25rem] bg-[#154d0f] text-[#fff] flex justify-center items-center">
                        <div className="h-[8rem] sm:h-[10rem] w-[21rem] sm:w-[23rem] bg-[#22661b] flex flex-col justify-center items-center">
                            <div className="w-[21rem] sm:w-[23rem] p-[0.5rem] sm:p-[0.7rem] h-[2rem] sm:h-[2.5rem] flex flex-row justify-between items-center">
                                <FontAwesomeIcon icon={faDollarSign} className="h-[1.5rem] sm:h-[2rem]" />
                                <FontAwesomeIcon icon={faDollarSign} className="h-[1.5rem] sm:h-[2rem]" />
                            </div>
                            <div className="w-[21rem] sm:w-[23rem] h-full flex justify-center items-center">
                                <div className="w-[4rem] sm:w-[5rem] h-[4rem] sm:h-[5rem] bg-[#337a2c] rounded-[50%] flex justify-center items-center">
                                    <FontAwesomeIcon icon={faTwitch} className="h-[2.5rem] sm:h-[3.5rem]" />
                                </div>
                            </div>
                            <div className="w-[21rem] sm:w-[23rem] p-[0.5rem] sm:p-[0.7rem] h-[2rem] sm:h-[2.5rem] flex flex-row justify-between items-center">
                                <FontAwesomeIcon icon={faDollarSign} className="h-[1.5rem] sm:h-[2rem]" />
                                <h1 className="capitalize text-[20px] font-[500] tracking-[2px]">{typeOfSocial}</h1>
                                <FontAwesomeIcon icon={faDollarSign} className="h-[1.5rem] sm:h-[2rem]" />
                            </div>
                        </div>
                    </div>
                </Link>
            );
        }
        case "tiktok": {
            return (
                <Link href="https://www.tiktok.com/@moneysigneric">
                    <div className="cursor-pointer h-[10rem] sm:h-[12rem] w-[23rem] sm:w-[25rem] bg-[#154d0f] text-[#fff] flex justify-center items-center">
                        <div className="h-[8rem] sm:h-[10rem] w-[21rem] sm:w-[23rem] bg-[#22661b] flex flex-col justify-center items-center">
                            <div className="w-[21rem] sm:w-[23rem] p-[0.5rem] sm:p-[0.7rem] h-[2rem] sm:h-[2.5rem] flex flex-row justify-between items-center">
                                <FontAwesomeIcon icon={faDollarSign} className="h-[1.5rem] sm:h-[2rem]" />
                                <FontAwesomeIcon icon={faDollarSign} className="h-[1.5rem] sm:h-[2rem]" />
                            </div>
                            <div className="w-[21rem] sm:w-[23rem] h-full flex justify-center items-center">
                                <div className="w-[4rem] sm:w-[5rem] h-[4rem] sm:h-[5rem] bg-[#337a2c] rounded-[50%] flex justify-center items-center">
                                    <FontAwesomeIcon icon={faTiktok} className="h-[2.5rem] sm:h-[3.5rem]" />
                                </div>
                            </div>
                            <div className="w-[21rem] sm:w-[23rem] p-[0.5rem] sm:p-[0.7rem] h-[2rem] sm:h-[2.5rem] flex flex-row justify-between items-center">
                                <FontAwesomeIcon icon={faDollarSign} className="h-[1.5rem] sm:h-[2rem]" />
                                <h1 className="capitalize text-[20px] font-[500] tracking-[2px]">{typeOfSocial}</h1>
                                <FontAwesomeIcon icon={faDollarSign} className="h-[1.5rem] sm:h-[2rem]" />
                            </div>
                        </div>
                    </div>
                </Link>
            );
        }
        case "discord": {
            return (
                <Link href="https://discord.gg/moneysigneric">
                    <div className="cursor-pointer h-[10rem] sm:h-[12rem] w-[23rem] sm:w-[25rem] bg-[#154d0f] text-[#fff] flex justify-center items-center">
                        <div className="h-[8rem] sm:h-[10rem] w-[21rem] sm:w-[23rem] bg-[#22661b] flex flex-col justify-center items-center">
                            <div className="w-[21rem] sm:w-[23rem] p-[0.5rem] sm:p-[0.7rem] h-[2rem] sm:h-[2.5rem] flex flex-row justify-between items-center">
                                <FontAwesomeIcon icon={faDollarSign} className="h-[1.5rem] sm:h-[2rem]" />
                                <FontAwesomeIcon icon={faDollarSign} className="h-[1.5rem] sm:h-[2rem]" />
                            </div>
                            <div className="w-[21rem] sm:w-[23rem] h-full flex justify-center items-center">
                                <div className="w-[4rem] sm:w-[5rem] h-[4rem] sm:h-[5rem] bg-[#337a2c] rounded-[50%] flex justify-center items-center">
                                    <FontAwesomeIcon icon={faDiscord} className="h-[2.5rem] sm:h-[3.5rem]" />
                                </div>
                            </div>
                            <div className="w-[21rem] sm:w-[23rem] p-[0.5rem] sm:p-[0.7rem] h-[2rem] sm:h-[2.5rem] flex flex-row justify-between items-center">
                                <FontAwesomeIcon icon={faDollarSign} className="h-[1.5rem] sm:h-[2rem]" />
                                <h1 className="capitalize text-[20px] font-[500] tracking-[2px]">{typeOfSocial}</h1>
                                <FontAwesomeIcon icon={faDollarSign} className="h-[1.5rem] sm:h-[2rem]" />
                            </div>
                        </div>
                    </div>
                </Link>
            );
        }
        case "instagram": {
            return (
                <Link href="https://www.instagram.com/moneysigneric">
                    <div className="cursor-pointer h-[10rem] sm:h-[12rem] w-[23rem] sm:w-[25rem] bg-[#154d0f] text-[#fff] flex justify-center items-center">
                        <div className="h-[8rem] sm:h-[10rem] w-[21rem] sm:w-[23rem] bg-[#22661b] flex flex-col justify-center items-center">
                            <div className="w-[21rem] sm:w-[23rem] p-[0.5rem] sm:p-[0.7rem] h-[2rem] sm:h-[2.5rem] flex flex-row justify-between items-center">
                                <FontAwesomeIcon icon={faDollarSign} className="h-[1.5rem] sm:h-[2rem]" />
                                <FontAwesomeIcon icon={faDollarSign} className="h-[1.5rem] sm:h-[2rem]" />
                            </div>
                            <div className="w-[21rem] sm:w-[23rem] h-full flex justify-center items-center">
                                <div className="w-[4rem] sm:w-[5rem] h-[4rem] sm:h-[5rem] bg-[#337a2c] rounded-[50%] flex justify-center items-center">
                                    <FontAwesomeIcon icon={faInstagram} className="h-[2.5rem] sm:h-[3.5rem]" />
                                </div>
                            </div>
                            <div className="w-[21rem] sm:w-[23rem] p-[0.5rem] sm:p-[0.7rem] h-[2rem] sm:h-[2.5rem] flex flex-row justify-between items-center">
                                <FontAwesomeIcon icon={faDollarSign} className="h-[1.5rem] sm:h-[2rem]" />
                                <h1 className="capitalize text-[20px] font-[500] tracking-[2px]">{typeOfSocial}</h1>
                                <FontAwesomeIcon icon={faDollarSign} className="h-[1.5rem] sm:h-[2rem]" />
                            </div>
                        </div>
                    </div>
                </Link>
            );
        }
    }
}