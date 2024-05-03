import styled from "styled-components";
import Link from "next/link";

const NavElement = styled.nav`
  width: 100%;
  bottom: 0;
  position: fixed;
  padding: 10px;
  background-color: #f0dd89;
`;

const UlElement = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
`;

const LiElement = styled.li`
  list-style-type: none;
`;

const IconLink = styled(Link)`
  &:link,
  &:visited {
    text-decoration: none;
    color: black;
  }
`;

export default function NavigationBar() {
  return (
    <NavElement>
      <UlElement>
        <LiElement key="home">
          <IconLink href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="home"
              data-name="home"
              viewBox="0 0 24 24"
              width="40"
              height="40"
              fill="#151b54"
            >
              <path d="M14,18h-4c-1.103,0-2-.897-2-2v-4c0-1.103,.897-2,2-2h4c1.103,0,2,.897,2,2v4c0,1.103-.897,2-2,2Zm-4-6v4h4.002l-.002-4h-4Zm9,12H5c-2.757,0-5-2.243-5-5V9.724c0-1.665,.824-3.215,2.204-4.145L9.203,.855c1.699-1.146,3.895-1.146,5.594,0l7,4.724c1.379,.93,2.203,2.479,2.203,4.145v9.276c0,2.757-2.243,5-5,5ZM12,1.997c-.584,0-1.168,.172-1.678,.517L3.322,7.237c-.828,.558-1.322,1.487-1.322,2.486v9.276c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3V9.724c0-.999-.494-1.929-1.321-2.486L13.678,2.514c-.51-.345-1.094-.517-1.678-.517Z" />
            </svg>
          </IconLink>
        </LiElement>

        <LiElement key="activityList">
          <IconLink href="/activityList">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="activityList"
              data-name="activityList"
              viewBox="0 0 24 24"
              width="40"
              height="40"
              fill="#151b54"
            >
              <path d="M20,8a4,4,0,0,1,0-8A4,4,0,0,1,20,8Zm0-6a2,2,0,0,0,0,4A2,2,0,0,0,20,2Zm1.452,22H12.589a2.548,2.548,0,0,1-2.221-1.26,2.463,2.463,0,0,1-.029-2.471l4.436-7.959a2.6,2.6,0,0,1,4.5,0L23.7,20.263a2.468,2.468,0,0,1-.028,2.475A2.551,2.551,0,0,1,21.452,24ZM17.023,13a.56.56,0,0,0-.5.283l-4.436,7.959a.473.473,0,0,0,.006.485.559.559,0,0,0,.5.273h8.863a.562.562,0,0,0,.5-.275.479.479,0,0,0,0-.489l-4.432-7.952h0A.558.558,0,0,0,17.023,13ZM8,23a1,1,0,0,0-1-1H3.35a1.349,1.349,0,0,1-1.184-1.994l6.652-12.3A1.329,1.329,0,0,1,10,7h0a1.326,1.326,0,0,1,1.183.706L12.41,9.973a1,1,0,1,0,1.76-.952L12.944,6.755a3.344,3.344,0,0,0-5.885,0L.406,19.055A3.351,3.351,0,0,0,3.35,24H7A1,1,0,0,0,8,23Z" />
            </svg>
          </IconLink>
        </LiElement>

        <LiElement key="add">
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
        </LiElement>
      </UlElement>
    </NavElement>
  );
}
