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
  PopUpListe,
  PopUpLi,
} from "./styledComponents/MapOverview.styles";

export default function MapOverview({
  onClickClose,
  activities,
  filteredActivities,
}) {
  const customIcon = new Icon({
    iconUrl:
      "https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/256/MapMarker_Flag_Left_Pink.png",
    iconSize: [30, 30],
  });
  return (
    <>
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
                      <PopUpListe>
                        <PopUpLi>
                          <strong>{`"${activity.title}"`}</strong>
                        </PopUpLi>

                        <PopUpLi>Activity: {activity.category}</PopUpLi>
                        <PopUpLi>Area: {activity.area}</PopUpLi>
                      </PopUpListe>
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
                      <PopUpListe>
                        <PopUpLi>
                          <strong>{`"${activity.title}"`}</strong>
                        </PopUpLi>

                        <PopUpLi>Activity: {activity.category}</PopUpLi>
                        <PopUpLi>Area: {activity.area}</PopUpLi>
                      </PopUpListe>
                    </TextPopUp>
                  </Marker>
                ))}
          </StyledMapContainer>
        </MapOverviewContainer>
      </Overlay>
    </>
  );
}
