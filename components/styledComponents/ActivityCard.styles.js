import styled from "styled-components";
import Image from "next/image";

export const ActivityImage = styled(Image)`
  border-radius: 10px;
  object-fit: cover;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
`;

export const Title = styled.p`
  margin: 0;
  padding: 0;
  font-size: 15px;
  margin-top: 10px;
`;

export const Area = styled.p`
  margin: 0;
  padding: 0;
  font-size: 10px;
  margin-top: 10px;
  padding-top: 2.5px;
`;