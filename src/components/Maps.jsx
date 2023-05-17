import { Container, Paper, Grid, Typography } from "@mui/material"
import React from "react"
import { MapContainer,TileLayer,Marker,Popup} from "react-leaflet"


export default function MapChart() {
    const locations=[
    {adress:'5640 15th St. E.,Bradenton, Florida 34208',phoneNumber:9416811159},
    {adress:'3523 15th St. E.,Bradenton, Florida 34208',phoneNumber:9417083220},
    {adress:'5507 14th St. W.,Bradenton, Florida 34207',phoneNumber:9415651977},
    {adress:'3501 14th St. W.,Bradenton, Florida 34205',phoneNumber:9412015037}
]
  return (
    <Container maxWidth='lg' sx={{maxHeight:'100vh'}}>
        

    <Paper elevation={3} sx={{ padding: "1%", height:'80vh' }}>
    <Grid
        
        container
        justifyContent={{ md: "space-between", xs: "center" }}
        >
            <Grid item container sm={4} sx={{marginRight:'10px'}}>
            <Grid item sm={12}>
                <Typography component={'h3'} fontSize={'3vh'} fontFamily='Saira Condensed' fontWeight={600} textAlign={'center'}>
                    LOCATIONS
                </Typography>
            </Grid>
            <Grid item sm={12}>
                <Paper elevation={3} sx={{backgroundColor:'white'}}>

                </Paper>
            </Grid>
            </Grid>
            <Grid item sm={7}>
        <MapContainer center={[27.4401073, -82.5463143]} zoom={14} scrollWheelZoom={false} style={{'height':'80vh'}}>
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
            </Grid>
        </Grid>
    
</Paper>
</Container>
  )
}