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
  const geocode = [52.3, 9.7];

  const customIcon = new Icon({
    iconUrl:
      "https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/256/MapMarker_Flag_Left_Pink.png",
    iconSize: [30, 30],
  });

  //cdn2.iconfinder.com/data/icons/iconslandgps/PNG/256x256/Pinpoints/Flag3RightBlue2.png
  //https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/256/MapMarker_Flag_Right_Chartreuse.png
  //https://cdn3.iconfinder.com/data/icons/miscellaneous-80/60/flag-256.png
  //https://cdn3.iconfinder.com/data/icons/pin-maps-1/120/Pin_Maps_7-256.png
  return (
    <>
      <Overlay>
        <MapOverviewContainer>
          <MapOverviewButton onClick={onClickClose}>
            <X />
          </MapOverviewButton>

          <StyledMapContainer center={geocode} zoom={5} zoomControl={false}>
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
