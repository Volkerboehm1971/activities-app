import NavigationBar from "./NavigationBar";
import dynamic from "next/dynamic";
const MapIcon = dynamic(() => import("@/components/MapIcon"), {
  ssr: false,
});

export default function Layout({ children }) {
  return (
    <>
      <MapIcon></MapIcon>
      <main>{children}</main>
      <NavigationBar />
    </>
  );
}
