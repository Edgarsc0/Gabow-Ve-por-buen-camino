"use client"

import dynamic from "next/dynamic"
import { Slide } from "react-awesome-reveal";

const Mapa = dynamic(() => import("../components/Mapa"), {
    ssr: false
});

export default function () {
    return <Slide>
        <Mapa />
    </Slide>
}