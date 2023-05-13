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
let itemData=['/public/computerised-diagnostic.jpg','/public/new-rims-sarasota-2.jpg','/public/sarasota-mercedes-mechanic.jpg','/public/new-rims-bradenton-2.jpg']

function SectionOne() {
  return (
    <Container maxWidth="lg">
      <Grid
        sx={{ height: "100%" }}
        container
        justifyContent={{ md: "space-between", xs: "center" }}
        
      >
        <Grid item sm={6} xs={12}>
        <ImageList variant="masonry" cols={2} gap={8}>
  {itemData.map((item) => (
    <ImageListItem key={item}>
      <img
        src={`${item}?w=248&fit=crop&auto=format`}
        srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={item}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>
        </Grid>
        <Grid item sm={5} xs={12}>
          <Container sx={{padding:'5%'}}>
        <Typography component="h5" variant="h5">
        Buy Now, Pay Later Prequalify in seconds B'City Tires Services has partnered with Acima to offer you financing of your wheel and tire purchases and other services. Buy your aftermarket wheels and Tires, Biggest and Best Selection of Custom Wheels and other items for your car, truck and SUV.
                Detailing.
              </Typography>
              </Container>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SectionOne;
