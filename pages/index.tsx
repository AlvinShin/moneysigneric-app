import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import YouTube from "react-youtube";

import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Birthday } from "../components/birthday";

import { Socials } from "../components/socials/socials";

const Home: NextPage = () => {
    
    return (
        <div>
            <Head>
                <title>moneysigneric</title>
                <link rel="shortcut icon" href="/favicon.png" />
                <meta name="description" content={"Hey guys, moneysigneric here (meow meow)\nWelcome to my website that contains all my socials!"} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="author" content="Made by Alvin Shin" />
                <meta name="og:image" content="/favicon.png" />
            </Head>
            <Header />
            <div className="h-full lg:h-[calc(100vh-8rem)] w-full flex flex-col justify-center items-center bg-[#e0faee] bg-no-repeat bg-center text-[#292929]">
                <Birthday />
                <Socials />
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