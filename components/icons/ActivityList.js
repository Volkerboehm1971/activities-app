import styled from "styled-components";
import Link from "next/link";

const IconLink = styled(Link)`
  &:link,
  &:visited {
    text-decoration: none;
    color: black;
  }
`;

export default function IconActivityList({ onSelect, fillColor }) {
  return (
    <IconLink href="/activityList" onClick={onSelect}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="activityList"
        data-name="activityList"
        viewBox="0 0 24 24"
        width="40"
        height="40"
        fill={fillColor}
      >
        <path d="M20,8a4,4,0,0,1,0-8A4,4,0,0,1,20,8Zm0-6a2,2,0,0,0,0,4A2,2,0,0,0,20,2Zm1.452,22H12.589a2.548,2.548,0,0,1-2.221-1.26,2.463,2.463,0,0,1-.029-2.471l4.436-7.959a2.6,2.6,0,0,1,4.5,0L23.7,20.263a2.468,2.468,0,0,1-.028,2.475A2.551,2.551,0,0,1,21.452,24ZM17.023,13a.56.56,0,0,0-.5.283l-4.436,7.959a.473.473,0,0,0,.006.485.559.559,0,0,0,.5.273h8.863a.562.562,0,0,0,.5-.275.479.479,0,0,0,0-.489l-4.432-7.952h0A.558.558,0,0,0,17.023,13ZM8,23a1,1,0,0,0-1-1H3.35a1.349,1.349,0,0,1-1.184-1.994l6.652-12.3A1.329,1.329,0,0,1,10,7h0a1.326,1.326,0,0,1,1.183.706L12.41,9.973a1,1,0,1,0,1.76-.952L12.944,6.755a3.344,3.344,0,0,0-5.885,0L.406,19.055A3.351,3.351,0,0,0,3.35,24H7A1,1,0,0,0,8,23Z" />
      </svg>
    </IconLink>
  );
}
