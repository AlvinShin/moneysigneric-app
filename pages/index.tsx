import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import YouTube from "react-youtube";

import { Logo } from "../components/logo";
import { Footer } from "../components/footer";
import { Birthday } from "../components/birthday";

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
            <div className="h-[calc(100vh-8rem)] w-full flex flex-col justify-center items-center bg-[#e0faee] text-[#292929]">
                <Birthday />

                <div className="text-center text-[35px] font-[700] tracking-[4px] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600">Coming Soon</div>
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