import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const HeaderArea = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoginDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
`;

export const ProfileImage = styled(Image)`
  border-radius: 50px;
`;

export const UserGreeting = styled.h2`
  font-size: large;
  font-weight: bold;
  text-align: center;
`;

export const HeadingBookmarkedActivities = styled.h3`
  text-align: center;
  font-size: medium;
  margin: 0 0 16px 0;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 0 0 85px 0;
  margin: 0 2rem 0 2rem;
`;

export const LinkDetailsPage = styled(Link)`
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;

  &:active {
    color: black;
  }
`;

export const Li = styled.li`
  border-style: solid;
  border-color: black;
  border-width: 1px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  padding: 20px 0 20px 0;
  list-style-type: none;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: medium;
  font-weight: bold;
  text-align: center;
  margin: 0 0 25px 0;
`;