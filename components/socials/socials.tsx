import React from "react";
import {
    faYoutube,
    faTwitch,
    faDiscord,
    faInstagram,
    faTiktok
} from "@fortawesome/free-brands-svg-icons";
import { typeOfSocial } from "./typeOfSocial";
import { Social } from "./social";

export class Socials extends React.Component {
    state = {
        cardData: [
            { // youtube
                typeOfSocial: typeOfSocial.Youtube,
                link: "https://www.youtube.com/moneysigneric",
                icon: faYoutube,
                bgColor: "#d95668",
                borderColor: "#754056",
            },
            { // twitch
                typeOfSocial: typeOfSocial.Twitch,
                link: "https://www.twitch.tv/moneysigneric",
                icon: faTwitch,
                bgColor: "#885ecc",
                borderColor: "#664896",
            },
            { // discord
                typeOfSocial: typeOfSocial.Discord,
                link: "https://discord.gg/moneysigneric",
                icon: faDiscord,
                bgColor: "#6f79f7",
                borderColor: "#5e66cc",
            },
            { // instagram
                typeOfSocial: typeOfSocial.Instagram,
                link: "https://www.instagram.com/moneysigneric",
                icon: faInstagram,
                gradientColor: {
                    from: "#b553e5",
                    via: "#ed4d96",
                    to: "#f98d4f"
                },
                borderColor: "#833cca",
            },
            { // tiktok
                typeOfSocial: typeOfSocial.TikTok,
                link: "https://www.tiktok.com/@moneysigneric",
                icon: faTiktok,
                bgColor: "#2e2d2d",
                borderColor: "#1f1e1e",
            },
        ]
    }
    render() {
        const isListEven = () => {
            return this.state.cardData.length % 2 === 0;
        }
        const lastElement = this.state.cardData[this.state.cardData.length - 1];
        return (
            <>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-[1.5rem] place-items-center">
                    {this.state.cardData.map((e, index) => {

                        return (
                            <li
                                key={index + 1}
                                className={(index + 1 === this.state.cardData.length && !isListEven()) ? "block md:hidden" : ""}
                            >
                                <Social
                                    typeOfSocial={e.typeOfSocial}
                                    link={e.link}
                                    icon={e.icon}
                                    bgColor={e.bgColor}
                                    gradientColor={e.gradientColor}
                                    borderColor={e.borderColor}
                                    key={index + 1}
                                />
                            </li>
                        )
                    })}
                </ul>
                { !isListEven() && 
                    <div className="mt-[1.5rem] hidden md:block">
                        <Social 
                            typeOfSocial={lastElement.typeOfSocial}
                            link={lastElement.link}
                            icon={lastElement.icon}
                            bgColor={lastElement.bgColor}
                            gradientColor={lastElement.gradientColor}
                            borderColor={lastElement.borderColor}
                            key={this.state.cardData.length}
                        />
                    </div>
                }
            </>

        )
    }
}