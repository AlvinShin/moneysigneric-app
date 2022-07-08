import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import YouTube from "react-youtube";

import { Logo } from "../components/logo";
import { Footer } from "../components/footer";
import { Birthday } from "../components/birthday";
import { Social } from "../components/social";

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
                <Logo text={"moneysigneric"} size={(width >= 640) ? "normal" : "small"} />
            </div>
            <div className="h-full lg:h-[calc(100vh-8rem)] w-full flex flex-col justify-center items-center bg-[#e0faee] bg-no-repeat bg-center text-[#292929]">
                <Birthday />
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[1.5rem] content-center"> 
                    <li><Social typeOfSocial="youtube"/></li>
                    <li><Social typeOfSocial="twitch"/></li>
                    <li><Social typeOfSocial="instagram"/></li>
                    <li><Social typeOfSocial="discord"/></li>
                    <li className="block lg:hidden"><Social typeOfSocial="tiktok"/></li>
                </ul>
                <div className="mt-[1.5rem] hidden lg:block"><Social typeOfSocial="tiktok" /></div>
                
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