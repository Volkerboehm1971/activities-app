import { useState } from "react";
import styled from "styled-components";
import { Container, ImageMoon, ImageSun, ModalContainer } from "./styledComponents/DarkModeSwtich.styles";


const ToggelOverlay = styled.div`
    position: absolute;
    left: ${props => props.$isToggled ? "34px" : "0px" };
    transition: left 250ms ease-out;
    background-color: white;
    width: 33px;
    height: 29px;
    border-radius: 8px;
    margin-left: 2px;
    z-index: 2;

`;


export default function DarkModeSwitch(){

const [toggleDark, setToggleDark] = useState(false);

function handleClick(){
    console.log(toggleDark);
   return setToggleDark(!toggleDark);
};


return (
    <Container>
            <ModalContainer onClick={() => handleClick()} >
                <ImageSun src="/weatherIcons/01d.png" alt="" height={32} width={32} />
                    <ToggelOverlay $isToggled={toggleDark}>
                    </ToggelOverlay>  
                <ImageMoon src="/weatherIcons/01n.png" alt="" height={29} width={29}/>
            </ModalContainer>
        
    </Container>
    );
}