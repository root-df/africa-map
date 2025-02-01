import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-4">Upside-Down Africa Map - version 1</h1>
      <MapContainer
        center={[10, 20]} // Center on Africa
        zoom={3}
        style={{ height: "500px", width: "80%", transform: "rotate(180deg)" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    </div>
  );
}