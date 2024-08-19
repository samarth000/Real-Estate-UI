import { MapContainer,TileLayer } from "react-leaflet";
import "./map.scss";
import "leaflet/dist/leaflet.css";
import Pin from "../pin/pin";
import { listData } from "../../lib/dummyData";


function Map(items){
    const data=listData;
    return (
        <MapContainer center={[52.4797, -1.90269]} zoom={6.5} scrollWheelZoom={false} className="map">
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {data.map(item => (
        <Pin item={item} key={item.id} />
    ))}
  </MapContainer>
    )
}
export default Map;