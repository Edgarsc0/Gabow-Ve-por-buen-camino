"use client"

import { Box } from "@radix-ui/themes";
import dynamic from "next/dynamic"
import { Slide } from "react-awesome-reveal";

const Mapa = dynamic(() => import("../components/Mapa"), {
    ssr: false
});

export default function () {
    return <Slide>
        <Mapa className="relative">
            <div className="absolute">
                <input />
            </div>
        </Mapa>
    </Slide>
}