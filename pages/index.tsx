import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import YouTube from "react-youtube";

import { Logo } from "../components/slotMachine/logo";
import { Footer } from "../components/footer";
import { Birthday } from "../components/birthday";

import { TwitchSocial } from "../components/socials/twitchSocial";
import { YoutubeSocial } from "../components/socials/youtubeSocial";
import { DiscordSocial } from "../components/socials/discordSocial";
import { InstagramSocial } from "../components/socials/instagramSocial";
import { TiktokSocial } from "../components/socials/tiktokSocial";

const Home: NextPage = () => {    
    // width tracking
    const [width, setWidth] = React.useState(0);

    const updateDim = () => {
        const width = window.innerWidth;
        setWidth(width);
    }

    React.useEffect(() => {
        updateDim();
        window.addEventListener("resize", updateDim);

        return () =>
            window.removeEventListener("resize", updateDim);
    }, []);

    return (
        <div>
            <Head>
                <title>moneysigneric</title>
                <link rel="shortcut icon" href="/favicon.png" />
            </Head>
            <div className="h-[8rem] flex justify-center items-center bg-[#e0faee]">
                <Logo text="moneysigneric" size={(width >= 640) ? "normal" : "small"} />
            </div>
            <div className="h-full lg:h-[calc(100vh-8rem)] w-full flex flex-col justify-center items-center bg-[#e0faee] bg-no-repeat bg-center text-[#292929]">
                <Birthday />
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[1.5rem] place-items-center"> 
                    <li><YoutubeSocial /></li>
                    <li><TwitchSocial /></li>
                    <li><DiscordSocial /></li>
                    <li><InstagramSocial /></li>
                    <li className="block lg:hidden"><TiktokSocial /></li>
                </ul>
                <div className="mt-[1.5rem] hidden lg:block"><TiktokSocial /></div>
                
                {/* <div>
                    <h1 className="text-[25px] text-center mb-2">Check out my latest video!</h1>
                    <YouTube
                        videoId="pDIaXSTKuZU"
                        onReady={onReady}
                    />
                </div> */}
            </div>
            <Footer />
        </div>

    )
}

export default Home;