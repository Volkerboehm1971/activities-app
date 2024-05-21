import styled from "styled-components";
import Link from "next/link";

const IconLink = styled(Link)`
  &:link,
  &:visited {
    text-decoration: none;
    color: black;
  }
`;

export default function IconProfile({ onSelect, fillColor }) {
  return (
    <IconLink href="/profile" onClick={onSelect}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Outline"
        viewBox="0 0 24 24"
        width="40"
        height="40"
        fill={fillColor}
      >
        <path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z" />
        <path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z" />
      </svg>
    </IconLink>
  );
}
