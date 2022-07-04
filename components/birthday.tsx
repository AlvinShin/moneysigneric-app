import { UseDate } from "../hooks/useDate";
import Image from "next/image";

export const Birthday = () => {
    const date = UseDate();

    return (
        <>
            {
                date.indexOf("7/1/") !== -1 &&
                <div className="flex flex-col justify-center items-center">
                    <div className="mt-[0.5rem] flex flex-row justify-center items-center">
                        <h1 className="mr-[0.2rem] text-[20px] font-[500] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600">Happy Birthday Moneysigneric!</h1>
                        <Image src="/memes/brimstone.png" width={35} height={35} />
                    </div>
                </div>
            }
        </>

    );
}