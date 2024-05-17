import { TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { StyledMapContainer } from "./styledComponents/DetailMap.styles";
import { Icon } from "leaflet";

export default function DetailMap({ latitude, longitude }) {
  const customIcon = new Icon({
    iconUrl:
      "https://icons.iconarchive.com/icons/steve/zondicons/512/Location-icon.png",
    iconSize: [30, 30],
  });

  return (
    <StyledMapContainer
      //The Key serves as Rerenderer of this component. Without him, the updated Geodata(after saving it in the FormEdit) would not be dislayed for the first run, only after a rerendering
      key={`${latitude}-${longitude}`}
      center={[latitude, longitude]}
      zoom={10}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]} icon={customIcon}></Marker>
    </StyledMapContainer>
  );
}
