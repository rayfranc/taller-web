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
    <Container maxWidth="md">
      <Grid
        sx={{ height: "100%" }}
        container
        justifyContent={{ md: "space-between", xs: "center" }}
        alignItems="center"
      >
        <Grid item sm={9} xs={12}>
        <ImageList variant="masonry" cols={3} gap={8}>
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
      </Grid>
    </Container>
  );
}

export default SectionOne;
