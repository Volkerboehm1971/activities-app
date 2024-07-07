import Image from "next/image"
import { useState } from "react"
import { Container, ImageMoon, ImageSun, ModalContainer, ModalImage, ToggelOverlay } from "./styledComponents/DarkModeSwtich.styles"

export default function DarkModeSwitch(){

function handleClick(){
    
}

return (
    <Container>
            <ModalContainer onClick={() => handleClick()} >
                <ImageSun src="/weatherIcons/01d.png" alt="" height={32} width={32}/>
                    <ToggelOverlay>
                    </ToggelOverlay>  
                <ImageMoon src="/weatherIcons/01n.png" alt="" height={29} width={29}/>
            </ModalContainer>
        
    </Container>
    );
}