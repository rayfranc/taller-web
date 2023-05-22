import {
  Container,
  Paper,
  Grid,
  Typography,
  Box,
  SvgIcon,
  ImageList,
  ImageListItem
} from "@mui/material";
let itemData=['/bmw-g8f3ffc654_1280.jpg','/car-g3c33f1342_1280.jpg','/car-g2660aa078_1280.jpg','/ferrari-360-gba6402c65_1280.jpg','/wheel-rim-g11c7ca750_1280.jpg']

function SectionOne() {
  return (
    <Container maxWidth="lg">
      <Grid
        sx={{ height: "100%" }}
        container
        justifyContent={{ md: "space-between", xs: "center" }}
        
      >
        
        <Grid item sm={5} xs={12}>
          <Container sx={{padding:'5%'}}>
        <Typography component="p" variant="h5" fontFamily="Saira Condensed" sx={{fontSize:{xs:'2vh',md:'3vh'}}}>  
        <span style={{'color':'#23c9ff', 'fontWeight':'600', fontSize:'3vh'}}>Buy Now, Pay Later Prequalify</span> in seconds B'City Tires Services has partnered with Acima to offer you financing of your wheel and tire purchases and other services. Buy your aftermarket wheels and Tires, Biggest and Best Selection of Custom Wheels and other items for your car, truck and SUV.
                Detailing.
                <br />
                <br />
                Bcity Reconditioning has a full service reconditioning to be able to offer complete reconditioning services to help you protect your car and investment.
              </Typography>
              </Container>
        </Grid>
        <Grid item sm={7} xs={12}>
        <ImageList variant="masonry" cols={2} gap={8}>
  {itemData.map((item) => (
    <ImageListItem key={item} >
      <img
        src={`${item}?w=248&fit=crop&auto=format`}
        srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={item}
        loading="lazy"
        style={{borderRadius:'5px'}}
      />
    </ImageListItem>
  ))}
</ImageList>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SectionOne;
