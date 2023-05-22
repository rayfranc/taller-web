import { Container, Paper, Grid, Typography,keyframes } from "@mui/material"
import styled from '@mui/material/styles/styled'
import React, { useRef, useState, createRef,useEffect,useMemo,useCallback } from "react"
import { MapContainer,TileLayer,Marker,Popup} from "react-leaflet"
import { LocationOn,Call } from "@mui/icons-material"
import './Maps.css'

const shadowKeyframes=keyframes`
0% {
  -webkit-transform: translateZ(0);
          transform: translateZ(0);
  -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
          box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
}
100% {
  -webkit-transform: translateZ(50px);
          transform: translateZ(50px);
  -webkit-box-shadow: 0 0 20px 0px rgba(35, 201, 255, 0.35);
          box-shadow: 0 0 20px 0px rgba(35, 201, 255, 0.35);
}
}
`;


const LocationCard=styled(Paper)(()=>({

 
  '&:hover':{
    animation: `${shadowKeyframes} 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`
  }
}))

export default function MapChart() {

const [map, setMap] = useState(null)
  
  const displayMap = useMemo(
    () => (
      <MapContainer
        center={[27.44066, -82.54703]}
        zoom={13}
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
    const locations=[
    {adress:'5640 15th St.E., Bradenton, Florida 34208',phoneNumber:9416811159,pos:[27.44066, -82.54703]},
    {adress:'3523 15th St.E., Bradenton, Florida 34208',phoneNumber:9417083220,pos:[27.46785, -82.54634]},
    {adress:'5507 14th St.W., Bradenton, Florida 34207',phoneNumber:9415651977,pos:[27.44364, -82.57505]},
    {adress:'3501 14th St.W., Bradenton, Florida 34205',phoneNumber:9412015037,pos:[27.46993, -82.57498]}
]

const handleClick=(e)=>{
map.setView(locations[e].pos,16)
  
}

     
  return (
    <Container maxWidth='lg'>
        

    <Paper elevation={3} sx={{ padding: "1%", height:'100%', backgroundColor:'#eeeee'} }>
    <Grid
        
        container
        justifyContent={{ md: "space-between", xs: "center" }}
        >
            <Grid item container sm={5} paddingRight={'1vh'}>
            <Grid item sm={12} xs={12} >
                <Typography component={'h3'} color='#23c9ff' fontSize={'3vh'} fontFamily='Saira Condensed' fontWeight={600} textAlign={'center'} sx={{WebkitTouchCallout:'none', msTouchSelect:'none'}}>
                    LOCATIONS
                </Typography>
            </Grid>
            {locations.map((item,i) => {return(
            <Grid item sm={12} xs={6} key={item.adress} sx={{marginBottom:'2vh'}} onClick={()=>handleClick(i)} >
                <LocationCard elevation={1} >
                 <Container>
                  <Typography component="h5" variant="h5" fontFamily="Saira Condensed" sx={{fontSize:{xs:'2vh',md:'2.5vh'}}}>
                  <LocationOn/>
                    {item.adress}
                  </Typography>
                  <Typography component="h5" variant="h5" fontFamily="Saira Condensed" sx={{fontSize:{xs:'2vh',md:'2.5vh'}, WebkitTouchCallout:'none', msTouchSelect:'none'}}>
                    <Call/>
                    {item.phoneNumber}
                  </Typography>
                 </Container>
                </LocationCard>
            </Grid>)})}
              
            
            
            </Grid>
            <Grid item sm={7} xs={12}>
           {displayMap}
            </Grid>
        </Grid>
    
</Paper>
</Container>
  )
}