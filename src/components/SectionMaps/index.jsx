import { useEffect } from 'react'

const Map = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyD7jRnutIcC4ldEZBE5XgTe8b5klOqhm4o&callback=initMap`
    script.defer = true
    document.head.appendChild(script)
    script.onload = initMap
  }, [])

  const initMap = () => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: { lat: -12.4892382, lng: -38.2674597 }
    })

    const startPoint = new window.google.maps.Marker({
      position: { lat: -12.8752382, lng: -38.8314597 },
      map,
      title: 'Ponto de Partida',
    })

    const endPoint = new window.google.maps.Marker({
      position: { lat: -12.1037329, lng: -37.7030025 },
      map,
      title: 'Ponto de Destino',
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

  return <div id="map" style={{ width: '100%', height: '260px' }}></div>
}

export default Map
