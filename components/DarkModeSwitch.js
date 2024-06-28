import Image from "next/image"
import { useState } from "react"
import { ImageMoon, ImageSun, ModalContainer, ModalImage } from "./styledComponents/DarkModeSwtich.styles"

export default function DarkModeSwitch(){

return (
    <ModalContainer>
        <ImageSun src="/weatherIcons/01d.png" alt="" height={32} width={32}/>
        <ImageMoon src="/weatherIcons/01n.png" alt="" height={24} width={24}/>
    </ModalContainer>
    );
}