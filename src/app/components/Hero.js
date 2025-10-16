import Image from "next/image";
import React from "react";

export default function Hero() {

    return (
        <>
            <Image
            src="/hero.jpg"
            alt="Profile photo"
            width={300}
            height={300}
            quality={80}
            className={`w-60 h-60 rounded-full`} />
            <div>
                <h1 className={`text-5xl font-bold transition-all duration-700 "opacity-100 translate-y-0"`}>
                    Hi, I'm Dylan 👋
                </h1>
                <p className={`mt-4 text-xl transition-all duration-700`}>
                    Software Developer • Student • Creator
                </p>
            </div>
        </>

    );
}
