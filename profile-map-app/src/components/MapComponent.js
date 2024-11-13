
import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

const MapComponent = ({ location }) => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [location.lng, location.lat],
      zoom: 10,
    });

    new mapboxgl.Marker().setLngLat([location.lng, location.lat]).addTo(map);

    return () => map.remove();
  }, [location]);

  return <div ref={mapContainer} className="h-64 w-full" />;
};

export default MapComponent;
