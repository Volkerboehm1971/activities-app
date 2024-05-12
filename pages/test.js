import dynamic from "next/dynamic"; // Import der dynamischen Importfunktion

const DetailMap = dynamic(() => import("@/components/DetailMap"), {
  ssr: false,
});

export default function Test() {
  return (
    <>
      <DetailMap />
    </>
  );
}
