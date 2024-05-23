import { Headline } from "./styledComponents/Header.styles";
import Image from "next/image";

export default function Header({ children }) {
  return (
    <>
      <Image src="/logo_leapout.png" alt="Logo" width={200} height={50} />
      <Headline>{children}</Headline>
    </>
  );
}
