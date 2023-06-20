import {Box, Paper, Grid, Typography, List,ListItem, ListItemText,ListItemAvatar,Avatar} from "@mui/material"
import {ContactPhone}from '@mui/icons-material'
function Footer(){
    
    
    
    
    return(
        <Paper  sx={{padding:'5vh'}} color='primary'>
            <Grid
          sx={{ height: "100%" }}
          container
          justifyContent={'space-between'}
          alignItems="center"
        >
        <Grid item sm={3} xs={12}>
        <img style={{'height':'8vh'}}
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
       <br/>
       <Typography 
      component="p"
      variant="p" 
      fontFamily="Saira Condensed"
      color='#bbbfbc'
      >
      © 2023 Big City Tires
       </Typography>
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
       Contact<span style={{'color':'#23c9ff'}}> Us</span> 
       </Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
        <ListItemAvatar>
              <ContactPhone/>
        </ListItemAvatar>
        <ListItemText primary="941-681-1159"/>
        </ListItem>
       </List>
      </Grid>
      </Grid>
        </Paper>
    )
}

export default Footer
