import styled from "styled-components";
import Link from "next/link";

const IconLink = styled(Link)`
  &:link,
  &:visited {
    text-decoration: none;
    color: black;
  }
`;

export default function IconAdd() {
  return (
    <IconLink href="/create">
      <svg
        id="add"
        data-name="add"
        viewBox="0 0 24 24"
        width="40"
        height="40"
        xmlns="http://www.w3.org/2000/svg"
        fill="#151b54"
      >
        <path d="m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1 -10 10zm5-10a1 1 0 0 1 -1 1h-3v3a1 1 0 0 1 -2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v3h3a1 1 0 0 1 1 1z" />
      </svg>
    </IconLink>
  );
}
