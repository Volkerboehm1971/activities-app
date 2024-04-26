import styled from "styled-components";
import Image from "next/image";
import { activities } from "@/lib/dummydata";
import { useRouter } from "next/router";


export default function ActivityCardDetails(){
    const router = useRouter();
    const { id } = router.query;

    const detailActivity = activities.find((activity) => activity.id === id);

    if (!detailActivity) {
        return null;
      }

    return (
        <>
            <Image src={detailActivity.image} width={187.5} height={140.5} alt="hiker on a mountain"/>
        </>
    );
} 