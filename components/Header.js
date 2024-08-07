import {
  Headline,
  StyledHeaderContainer,
} from "./styledComponents/Header.styles";
import Image from "next/image";

export default function Header({ children, toggleDark }) {
  return (
    <StyledHeaderContainer $isToggled={toggleDark}>
      <Image
        src="/logo_leapout_old_-removebg-preview.png"
        alt="Logo"
        width={200}
        height={50}
      />
      <Headline>{children}</Headline>
    </StyledHeaderContainer>
  );
}
