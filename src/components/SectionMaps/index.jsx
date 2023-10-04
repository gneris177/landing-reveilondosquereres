import { useEffect } from 'react'
import iconMap from '../../assets/images/icon-map.png'
import titleImage from '../../assets/images/MAPA.png'
import './style.css'
import Container from '../Container'

const Map = () => {
  useEffect(() => {
    initMap()
  }, [])

  const initMap = () => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: { lat: -12.9118053, lng: -38.3415497 },
    })

    const startPoint = new window.google.maps.Marker({
      position: { lat: -12.9118053, lng: -38.3415497 },
      map,
      title: 'Ponto de Partida',
      icon: {
        url: 'https://img.icons8.com/fluency-systems-filled/48/circled-record.png',
        scaledSize: new window.google.maps.Size(16, 16),
      },
    })

    const endPoint = new window.google.maps.Marker({
      position: { lat: -12.1037329, lng: -37.7030025 },
      map,
      title: 'Ponto de Destino',
      icon: {
        url: iconMap,
        scaledSize: new window.google.maps.Size(30, 40),
      },
    })

    const directionsService = new window.google.maps.DirectionsService()
    const directionsRenderer = new window.google.maps.DirectionsRenderer({
      map,
      suppressMarkers: true,
      polylineOptions: { strokeColor: '#c5aa80', strokeWeight: 7 },
    })

    const request = {
      origin: startPoint.getPosition(),
      destination: endPoint.getPosition(),
      travelMode: 'DRIVING',
    }

    directionsService.route(request, (result, status) => {
      if (status === 'OK') {
        directionsRenderer.setDirections(result)
      }
    })
  }

  return (
    <section id="map-section" className="maps">
      <Container>
        <h2>
          <img src={titleImage} />
        </h2>
        <div className="location-container">
          <div className="location">
            <span className="location__origin">
              <img
                width="12"
                height="12"
                src="https://img.icons8.com/fluency-systems-filled/48/circled-record.png"
                alt="circled-record"
              />
              Salvador Bahia Airport (ssa), Pr, Gago Coutino, S/N - São
              Cristóvão, Salvador - BA
            </span>
            <span className="location__dot">
              <span>•</span>
              <span>•</span>
              <span>•</span>
            </span>
            <span className="location__destination">
              <img
                width="14"
                height="14"
                src="https://img.icons8.com/material-rounded/24/marker.png"
                alt="marker"
              />
              Baixio - Palame, Esplanada - BA
            </span>
          </div>
        </div>
      </Container>
      <div id="map" style={{ width: '100%', height: '260px' }}></div>
    </section>
  )
}

export default Map
