import NavigationBar from "./NavigationBar";
import dynamic from "next/dynamic";
const MapIcon = dynamic(() => import("@/components/ShowMapOverview"), {
  ssr: false,
});

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      <NavigationBar />
    </>
  );
}
