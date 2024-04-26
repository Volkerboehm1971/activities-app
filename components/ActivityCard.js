import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";


const StyledImage = styled(Image)`
  /* object-fit: cover; */
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
`;

const StyledTitle = styled.p`
  margin: 0;
  padding: 0;
  font-size: 15px;
  margin-top: 10px;
`;

const StyledArea = styled.p`
  margin: 0;
  padding: 0;
  font-size: 10px;
  margin-top: 10px;
  padding-top: 2.5px;
`;

export default function ActivityCard({ id, image, title, area }) {

  // const router = useRouter();
  // const { id } = router.query;
  // console.log(id)

  return (
    <>
      <Link href={`/${id}`}>
      <StyledImage src={image} width={187.5} height={140.5} alt="" />
      <StyledDiv>
        <StyledTitle>{title}</StyledTitle>
        <StyledArea>{area}</StyledArea>
      </StyledDiv>
      </Link>
    </>
  );
}
