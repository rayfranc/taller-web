import {
  Container,
  Paper,
  Grid,
  Typography
} from "@mui/material";
import "./Hero.css";
import QualityIcon from "../assets/QualityIcon";
import FastIcon from "../assets/FastIcon";
import SaveIcon from "../assets/SaveIcon";
function Hero() {
  return (
    <Paper
      sx={{
        height: "90vh",
        backgroundSize: "cover",
        backgroundPosition: "cover",
        backgroundImage: "url(/car-7862030_1920.jpg)",
      }}
    >
      <Container maxWidth="lg" sx={{ height: "100%" }}>
        <Grid
          sx={{ height: "100%" }}
          container
          justifyContent={{ md: "space-between", xs: "center" }}
          alignItems="center"
        >
          <Grid item sm={9} xs={12}>
            <Paper elevation={3} sx={{ padding: "5%" }}>
              <Typography
                component="h1"
                variant="h3"
                fontWeight={600}
                fontFamily="Saira Condensed"
                sx={{fontSize:{xs:'3.5vh',md:'5vh'}}}
              >
                Get Instant <span style={{'color':'#23c9ff'}}>Savings</span> on <span style={{'color':'#23c9ff'}}>Auto Services</span>!
              </Typography>
              <Typography component="p" variant="h5" sx={{fontSize:{xs:'2vh',md:'3vh'}}} fontFamily="Saira Condensed">
                Welcome to Bcity Tire Service and Sales, Inc. based in
                Bradenton, servicing Manatee and Sarasota Counties. We are the
                #1 Used & New Tires supplier in Bradenton with 4 Service
                locations and offer numerous other automotive services such as
                Puncture Repair, Wheel Alignments, Oil Changes, Brakes Changes
                and Flushes, Rotor Replacements, Rim and Alloy Repairs,
                Computerized Diagnostic Tests, Battery Replacement, Vehicle
                Detailing.
              </Typography>
              <br/>
              <Typography component="h3" variant="h5" sx={{fontSize:{xs:'2vh',md:'3vh'}}}  fontFamily="Saira Condensed"  >
                We do General Mechanical work on Motorcycles and also both
                Domestic and European cars. We specialize on European cars such
                as BMW, Mercedes Benz etc.
              </Typography>
            </Paper>
          </Grid>
          <Grid item sx={{ display: { xs: "none", md: "flex" } }}>
            <Grid container direction="column" spacing={3}>
              <Grid item>
                <Paper elevation={3} sx={{ maxHeight: "12vh", width: "12vh" }}>
                  <QualityIcon
                    sx={{ width: "10vh", height: "10vh", margin: "10%"}}
                  />
                </Paper>
              </Grid>
              <Grid item>
                <Paper elevation={3} sx={{ maxHeight: "12vh", width: "12vh" }}>
                  <FastIcon
                    sx={{ width: "8vh", height: "8vh", margin: "10%" }}
                  />
                </Paper>
              </Grid>
              <Grid item>
                <Paper elevation={3} sx={{ width: "12vh", maxHeight: "12vh" }}>
                  <SaveIcon
                    sx={{ width: "8vh", height: "8vh", margin: "10%" }}
                  />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}

export default Hero;
