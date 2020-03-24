import React from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import ForescastExtended from './components/ForescastExtended';
import './App.css';

const cities = [
  'Buenos Aires,ar',
  'Washington,us',
  'Bogota,col',
  'Ciudad de Mexico,mx',
  'Madrid,es',
  'Lima,pe',
];

class App extends React.Component {
  constructor() {
    super();
    this.state = { city: 'Nueva Ciudad' };
  }

  handleSelectedLocation = city => {
    this.setState({ city });
  }
  
  render() {
    const { city } = this.state;
    return (

      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='h5' color='inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList 
              cities={cities} 
              onSeletedLocation={this.handleSelectedLocation}/>
         </Col>
         <Col xs={12} md={6}>
           <Paper elevation={4}>
              <div className="details">
                <ForescastExtended city={city}></ForescastExtended>
              </div>
           </Paper>
           
         </Col>
        </Row>
      </Grid>
    );
  }
}


export default App;
