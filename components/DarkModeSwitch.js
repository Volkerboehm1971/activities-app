import Image from "next/image"
import { useState } from "react"
import { Container, ImageMoon, ImageSun, ModalContainer, ModalImage, ToggelOverlay } from "./styledComponents/DarkModeSwtich.styles"

export default function DarkModeSwitch(){

return (
    <Container>
        
            <ModalContainer>
            <ImageSun src="/weatherIcons/01d.png" alt="" height={32} width={32}/>
                <ToggelOverlay>
                </ToggelOverlay>  
            </ModalContainer>
        <ImageMoon src="/weatherIcons/01n.png" alt="" height={24} width={24}/>
    </Container>
    );
}