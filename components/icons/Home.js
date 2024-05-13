import styled from "styled-components";
import Link from "next/link";

const IconLink = styled(Link)`
  &:link,
  &:visited {
    text-decoration: none;
    color: black;
  }
`;

export default function IconHome({ onSelect, fillColor }) {
  return (
    <IconLink href="/" onClick={onSelect}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="home"
        data-name="home"
        viewBox="0 0 24 24"
        width="40"
        height="40"
        fill={fillColor}
      >
        <path d="M14,18h-4c-1.103,0-2-.897-2-2v-4c0-1.103,.897-2,2-2h4c1.103,0,2,.897,2,2v4c0,1.103-.897,2-2,2Zm-4-6v4h4.002l-.002-4h-4Zm9,12H5c-2.757,0-5-2.243-5-5V9.724c0-1.665,.824-3.215,2.204-4.145L9.203,.855c1.699-1.146,3.895-1.146,5.594,0l7,4.724c1.379,.93,2.203,2.479,2.203,4.145v9.276c0,2.757-2.243,5-5,5ZM12,1.997c-.584,0-1.168,.172-1.678,.517L3.322,7.237c-.828,.558-1.322,1.487-1.322,2.486v9.276c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3V9.724c0-.999-.494-1.929-1.321-2.486L13.678,2.514c-.51-.345-1.094-.517-1.678-.517Z" />
      </svg>
    </IconLink>
  );
}
