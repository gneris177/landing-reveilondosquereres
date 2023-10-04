import { useEffect } from "react";
import iconMap from "../../assets/images/icon-map.png";
import titleImage from "../../assets/images/MAPA.png";
import './style.css'

const Map = () => {
  useEffect(() => {
    initMap();
  }, []);

  const initMap = () => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: { lat: -12.4892382, lng: -38.2674597 },
    });

    const startPoint = new window.google.maps.Marker({
      position: { lat: -12.8752382, lng: -38.8314597 },
      map,
      title: "Ponto de Partida",
      icon: {
        url: iconMap,
        scaledSize: new window.google.maps.Size(30, 40),
      },
    });

    const endPoint = new window.google.maps.Marker({
      position: { lat: -12.1037329, lng: -37.7030025 },
      map,
      title: "Ponto de Destino",
      icon: {
        url: iconMap,
        scaledSize: new window.google.maps.Size(30, 40),
      },
    });

    const directionsService = new window.google.maps.DirectionsService();
    const directionsRenderer = new window.google.maps.DirectionsRenderer({
      map,
      suppressMarkers: true,
      polylineOptions: { strokeColor: "#c5aa80", strokeWeight: 7 },
    });

    const request = {
      origin: startPoint.getPosition(),
      destination: endPoint.getPosition(),
      travelMode: "DRIVING",
    };

    directionsService.route(request, (result, status) => {
      if (status === "OK") {
        directionsRenderer.setDirections(result);
      }
    });
  };

  return (
    <section id="map-section" className="maps">
      <h2><img src={titleImage} /></h2>
      <div id="map" style={{ width: "100%", height: "260px" }}></div>
    </section>
  );
};

export default Map;
