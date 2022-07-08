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
                    <DollarBill typeOfSocial={typeOfSocial} icon={faYoutube} />
                </Link>
            );
        }
        case "twitch": { 
            return (
                <Link href="https://www.twitch.tv/moneysigneric">
                    <DollarBill typeOfSocial={typeOfSocial} icon={faTwitch} />
                </Link>
            );
        }
        case "tiktok": {
            return (
                <Link href="https://www.tiktok.com/@moneysigneric">
                    <DollarBill typeOfSocial={typeOfSocial} icon={faTiktok} />
                </Link>
            );
        }
        case "discord": {
            return (
                <Link href="https://discord.gg/moneysigneric">
                    <DollarBill typeOfSocial={typeOfSocial} icon={faDiscord} />
                </Link>
            );
        }
        case "instagram": {
            return (
                <Link href="https://www.instagram.com/moneysigneric">
                    <DollarBill typeOfSocial={typeOfSocial} icon={faInstagram} />
                </Link>
            );
        }
    }
}