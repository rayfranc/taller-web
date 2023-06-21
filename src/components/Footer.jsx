import { Box, Paper, Grid, Typography, List, ListItem, ListItemText, ListItemAvatar } from "@mui/material"
import { ContactPhone, FacebookRounded, Twitter, WhatsApp } from '@mui/icons-material'
import "./Footer.css";
import { useState } from "react";
function Footer() {

  const [showLinkFacebook, setShowLinkFacebook] = useState(false);
  const [showLinkTwitter, setShowLinkTwitter] = useState(false);
  const [showLinkWhatsApp, setShowLinkWhatsApp] = useState(false);

  const handleShowLinkFacebook = () => {
    setShowLinkFacebook(!showLinkFacebook);
  };

  const handleShowLinkTwitter = () => {
    setShowLinkTwitter(!showLinkTwitter);
  };

  const handleShowLinkWhatsApp = () => {
    setShowLinkWhatsApp(!showLinkWhatsApp);
  };


  return (
    <Paper sx={{ padding: '5vh' }} color='primary'>
      <Grid
        sx={{ height: "100%" }}
        container
        justifyContent={'space-between'}
        alignItems="center"
      >
        <Grid item sm={3} xs={12}>
          <img style={{ 'height': '8vh' }}
            src={'/bcity-logo-removebg-preview.png'}
            srcSet={`/bcity-logo-removebg-preview.png`}
            alt='Bcity-logo'
            loading="lazy"
          />
          <Typography
            component="p"
            variant="p"
            fontFamily="Saira Condensed"

          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos commodi, quae, quasi placeat ab aut, enim optio praesentium necessitatibus sint et dolore amet cumque incidunt deserunt aperiam maxime deleniti adipisci?
          </Typography>
          <br />
          <Typography
            component="p"
            variant="p"
            fontFamily="Saira Condensed"
            color='#bbbfbc'
          >
            © 2023 Big City Tires
          </Typography>
        </Grid>
        <Grid item>
          <List>
            <ListItem>
              <ListItemText>
                <Typography
                  fontWeight={600}
                  component="h5"
                  variant="h5"
                  fontFamily="Saira Condensed">
                  Social<span style={{ 'color': '#23c9ff' }}> Red</span>
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemAvatar onClick={handleShowLinkFacebook} className={`${!showLinkFacebook ? 'icon-social' : 'icon-social-mostrar'}`}>
                <FacebookRounded />
              </ListItemAvatar>
              <ListItemText primary="www.facebook.com/" className="link-social" />
            </ListItem>
            <ListItem>
              <ListItemAvatar onClick={handleShowLinkTwitter} className={`${!showLinkTwitter ? 'icon-social' : 'icon-social-mostrar'}`}>
                <Twitter />
              </ListItemAvatar>
              <ListItemText primary="www.twitter.com/" className="link-social" />
            </ListItem>
            <ListItem>
              <ListItemAvatar onClick={handleShowLinkWhatsApp} className={`${!showLinkWhatsApp ? 'icon-social' : 'icon-social-mostrar'}`}>
                <WhatsApp />
              </ListItemAvatar>
              <ListItemText primary="941-681-1159" className="link-social" />
            </ListItem>
          </List>
        </Grid>
        <Grid item >
          <List>
            <ListItem>
              <ListItemText>
                <Typography
                  fontWeight={600}
                  component="h5"
                  variant="h5"
                  fontFamily="Saira Condensed">
                  Contact<span style={{ 'color': '#23c9ff' }}> Us</span>
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <ContactPhone />
              </ListItemAvatar>
              <ListItemText primary="941-681-1159" />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Footer;
