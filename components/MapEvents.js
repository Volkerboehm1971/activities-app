import { useMapEvents } from "react-leaflet";

export default function MapEvents({ onClick }) {
  useMapEvents({
    click: onClick,
  });
  return null;
}
