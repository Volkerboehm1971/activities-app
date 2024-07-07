import { useState } from "react";
import { Container, ImageMoon, ImageSun, ModalContainer, ToggelOverlay } from "./styledComponents/DarkModeSwtich.styles";

export default function DarkModeSwitch({ toggleDark, toggleDisplay }){

console.log("these are both toggle props", toggleDisplay, toggleDark);

return (
    <Container>
            <ModalContainer onClick={() => toggleDisplay()} >
                <ImageSun src="/weatherIcons/01d.png" alt="Sun symbol indicating light mode" height={32} width={32} />
                    <ToggelOverlay $isToggled={toggleDark}>
                    </ToggelOverlay>  
                <ImageMoon src="/weatherIcons/01n.png" alt="Moon symbol indicating light mode" height={29} width={29}/>
            </ModalContainer>
        
    </Container>
    );
}