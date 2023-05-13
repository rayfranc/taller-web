import { Container, Paper } from "@mui/material"
import React from "react"
import { MapContainer,TileLayer,Marker,Popup } from "react-leaflet"




export default function MapChart() {
  return (
    <Container maxWidth='lg' sx={{maxHeight:'100vh'}}>
        <Paper elevation={3} sx={{ padding: "1%", height:'80vh' }}>
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{'height':'100%'}}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://maps.geoapify.com/v1/tile/klokantech-basic/{z}/{x}/{y}@2x.png?apiKey=35bf8360c7e0434fa95da32f69de000c"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
</Paper>
</Container>
  )
}