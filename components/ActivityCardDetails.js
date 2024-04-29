import styled from "styled-components";
import Image from "next/image";
import { activities } from "@/lib/dummydata";
import { useRouter } from "next/router";
import Link from "next/link";


const StyledHeadline = styled.h2`
    text-align: center;
`;

const StyledButton = styled.button`
    position: absolute;
    left: 8%;
    padding: 1% 3%;
    border: 1px solid black;
    border-radius: 10px;
    background-color: transparent;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 8vw;
    margin-right: 8vw;
    margin-top: 15vw;
`


const StyledImage = styled(Image)`
    display: flex;
    align-self: flex-start;
    margin-bottom: 5vw;
    border-radius: 13px;
`

const StyledSubheader = styled.h5`
    margin-top: 2vw;
    margin-bottom: 0;
`

const Styledinfo = styled.p`
    margin-top: 1vw;
`

const Styledarticle = styled.p`
    line-height: 1.4;
    font-size: small;
    margin-top: 2vw;
    text-align: justify;
    padding-right: 5vw;
`


export default function ActivityCardDetails(){
    const router = useRouter();
    const { id } = router.query;

    const detailActivity = activities.find((activity) => activity.id === id);

    if (!detailActivity) {
        return null;
      }

    return (
        <>  
            <StyledHeadline>Details of Activity</StyledHeadline>
            <StyledLink href="/"><StyledButton>Back</StyledButton></StyledLink>
            
            <StyledSection>
                <StyledImage src={detailActivity.image} width={187.5} height={140.5} alt="hiker on a mountain"/>
                <StyledSubheader>Type of Tour</StyledSubheader>
                    <Styledinfo>{detailActivity.title}</Styledinfo>

                <StyledSubheader>Area</StyledSubheader>
                    <Styledinfo> {detailActivity.area}</Styledinfo>

                <StyledSubheader>Country</StyledSubheader>
                    <Styledinfo> {detailActivity.country}</Styledinfo>

                <StyledSubheader>Description</StyledSubheader>
                    <Styledarticle>{detailActivity.description}</Styledarticle> 

            </StyledSection>
        </>
    );
} 