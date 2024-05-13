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
  PopUpUl,
  PopUpLi,
} from "./styledComponents/MapOverview.styles";

const customIcon = new Icon({
  iconUrl:
    "https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/256/MapMarker_Flag_Left_Pink.png",
  iconSize: [30, 30],
});

export default function MapOverview({
  onClickClose,
  activities,
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
          {filteredActivities
            ? filteredActivities.map((activity) => (
                <Marker
                  key={activity.id}
                  position={[activity.lat, activity.lng]}
                  icon={customIcon}
                >
                  <TextPopUp>
                    <PopUpUl>
                      <PopUpLi>
                        <strong>{`"${activity.title}"`}</strong>
                      </PopUpLi>
                      <PopUpLi>Activity: {activity.category}</PopUpLi>
                      <PopUpLi>Area: {activity.area}</PopUpLi>
                    </PopUpUl>
                  </TextPopUp>
                </Marker>
              ))
            : activities.map((activity) => (
                <Marker
                  key={activity.id}
                  position={[activity.lat, activity.lng]}
                  icon={customIcon}
                >
                  <TextPopUp>
                    <PopUpUl>
                      <PopUpLi>
                        <strong>{`"${activity.title}"`}</strong>
                      </PopUpLi>

                      <PopUpLi>Activity: {activity.category}</PopUpLi>
                      <PopUpLi>Area: {activity.area}</PopUpLi>
                    </PopUpUl>
                  </TextPopUp>
                </Marker>
              ))}
        </StyledMapContainer>
      </MapOverviewContainer>
    </Overlay>
  );
}
