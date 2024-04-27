import styled from "styled-components";
import Image from "next/image";
import { activities } from "@/lib/dummydata";
import { useRouter } from "next/router";

const StyledButton = styled.button`
    position: relative;
    
`
const StyledSection = styled.section`
    margin-left: 8vw;
    margin-right: 5vw;
    margin-top: 10vw;
`

const StyledImage = styled(Image)`
   position: relative;

`

const StyledSubheader = styled.h5`
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
    console.log(detailActivity);

    if (!detailActivity) {
        return null;
      }

    return (
        <>  
            <StyledButton></StyledButton>
            <StyledImage src={detailActivity.image} width={187.5} height={140.5} alt="hiker on a mountain"/>
            <StyledSection>

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