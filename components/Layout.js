import NavigationBar from "./NavigationBar";
import dynamic from "next/dynamic";
const MapIcon = dynamic(() => import("@/components/MapIcon"), {
  ssr: false,
});

export default function Layout({ children, activities }) {
  return (
    <>
      <MapIcon activities={activities}></MapIcon>
      <main>{children}</main>
      <NavigationBar />
    </>
  );
}
