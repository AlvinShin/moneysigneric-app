import type { NextPage } from "next";
import React from "react";
import Head from "next/head";

import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Birthday } from "../components/birthday";
import { YoutubeSection } from "../components/youtubeSection";
import { Socials } from "../components/socials/socials";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>moneysigneric</title>
                <link rel="shortcut icon" href="/favicon.png" />
                <meta name="description" content={"Hey guys, moneysigneric here!\nWelcome to my website which contains all of my socials!"} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="author" content="Made by Alvin Shin" />
                <meta name="og:image" content="/favicon.png" />
            </Head>
            <Header />
            <div className="pt-[8rem] pb-[2rem] h-full sm:h-screen w-full flex flex-col justify-center items-center bg-[#fff] dark:bg-[#333232] text-[#292929] dark:text-[#fff]">
                <Birthday />
                <YoutubeSection />
                <Socials />
            </div>
            <Footer />
        </div>

    )
}

export default Home;