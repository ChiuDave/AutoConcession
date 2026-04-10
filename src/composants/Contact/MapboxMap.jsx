import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

if (!import.meta.env.VITE_MAPBOX_TOKEN) {
  console.error("VITE_MAPBOX_TOKEN is not configured");
}
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

const MapboxMap = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-73.554299, 45.550836], 
      zoom: 14,
    });

    // Fix Mapbox popups and controls inside Tailwind
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Add Marker
    new mapboxgl.Marker({ color: "red" })
      .setLngLat([-73.554299, 45.550836],)
      .addTo(map);

    return () => map.remove();
  }, []);

  return (
    <div className="relative w-full h-96 rounded-lg shadow-md">
      <div ref={mapContainerRef} className="w-full h-full rounded-lg" />
      {/* Fix watermark visibility */}
    </div>
  );
};

export default MapboxMap;