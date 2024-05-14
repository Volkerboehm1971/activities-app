import { TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { X } from "lucide-react";
import { Icon } from "leaflet";

import {
  Overlay,
  MapOverviewButton,
  MapOverviewContainer,
  StyledMapContainer,
  TextPopUp,
  PopUpTitle,
  PopUpCategory,
  PopUpArea,
  PopUpContainer
} from "./styledComponents/MapOverview.styles";

const customIcon = new Icon({
  iconUrl:
    "https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/256/MapMarker_Flag_Left_Pink.png",
  iconSize: [31, 31],
});

export default function MapOverview({
  onClickClose,
  filteredActivities,
}) {
  return (
    <Overlay>
      <MapOverviewContainer>
        <MapOverviewButton onClick={onClickClose}>
          <X />
        </MapOverviewButton>

        <StyledMapContainer center={[52.3, 9.7]} zoom={5} zoomControl={false}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {filteredActivities.map((activity) => (
                <Marker
                  key={activity.id}
                  position={[activity.lat, activity.lng]}
                  icon={customIcon}
                >
                  <TextPopUp>
                    <PopUpContainer>
                      <PopUpTitle>
                        {`"${activity.title}"`}
                      </PopUpTitle>
                      <PopUpCategory>Activity: {activity.category}</PopUpCategory>
                      <PopUpArea>Area: {activity.area}</PopUpArea>
                    </PopUpContainer>
                  </TextPopUp>
                </Marker>
              ))}

        </StyledMapContainer>
      </MapOverviewContainer>
    </Overlay>
  );
}

