import { useState,useMemo, useCallback, useEffect } from "react"
import { MapContainer,TileLayer,Marker,Popup} from "react-leaflet"


function DisplayPosition({ map }) {
    const [position, setPosition] = useState(() => map.getCenter())
  
    const onClick = useCallback(() => {
      map.setView(center, zoom)
    }, [map])
  
    const onMove = useCallback(() => {
      setPosition(map.getCenter())
    }, [map])
  
    useEffect(() => {
      map.on('move', onMove)
      return () => {
        map.off('move', onMove)
      }
    }, [map, onMove])
  
    return (
      <p>
        latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{' '}
        <button onClick={onClick}>reset</button>
      </p>
    )
  }
  
  function ExternalStateExample({center,zoom}) {
    const [map, setMap] = useState(null)
  
    const displayMap = useMemo(
      () => (
        <MapContainer
          center={center}
          zoom={zoom}
          scrollWheelZoom={false}
          ref={setMap}
          style={{height:'50vh',}}
          >
          
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://maps.geoapify.com/v1/tile/klokantech-basic/{z}/{x}/{y}@2x.png?apiKey=35bf8360c7e0434fa95da32f69de000c"
          />
          <Marker position={[27.44364, -82.57505]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
  <Marker position={[27.46785, -82.54634]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
  <Marker position={[27.44066, -82.54703]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
  <Marker position={[27.46993, -82.57498]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
        </MapContainer>
      ),
      [],
    )
  
    return (
      <div>
        {map ? <DisplayPosition map={map} /> : null}
        {displayMap}
      </div>
    )
  }
  
  export default ExternalStateExample