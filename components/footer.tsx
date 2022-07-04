import Link from "next/link"

export const Footer = () => {
    return (
        <div className="select-none bg-[#e0faee] text-[#292929] h-[5rem] w-full flex flex-col justify-center items-center">
            <h1 className="text-[20px] tracking-[3px] font-[500] uppercase">moneysigneric</h1>
            <Link href="https://github.com/AlvinShin">
                <h1
                    className="
                        cursor-pointer 
                        text-[#292929] 
                        text-[17px] 
                        font-[400] 
                        hover:text-transparent 
                        hover:bg-clip-text 
                        hover:bg-gradient-to-r 
                        hover:from-blue-400 
                        hover:to-green-600 
                        hover:scale-[1.05]
                        ease-out duration-[300ms]"
                >
                    Created by Alvin Shin
                </h1>
            </Link>
        </div>
    );
}