import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Navbar from './nav-bar'
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});
class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        firstName: "",
        email: '',
        line1:'',
        line2:'',
        line3:'',
        zip_or_postcode:'',
        residential:'',
        work:'',
        city:'',
        country:'',
        data:[]
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.firstName = this.firstName.bind(this);
    this.email = this.email.bind(this);
    this.zip_or_postcode = this.zip_or_postcode.bind(this);
    this.line1 = this.line1.bind(this);
    this.line2 = this.line2.bind(this);
    this.line3 = this.line3.bind(this);
    this.residential = this.residential.bind(this);
    this.work = this.work.bind(this);
    this.city = this.city.bind(this);
    this.country = this.country.bind(this);
  
    
}

firstName(event) {
  this.setState({
    firstName: event.target.value
  });
}
email(event) {
  this.setState({
    email: event.target.value
  });
}
line1(event) {
  this.setState({
    line1: event.target.value
  });
}
zip_or_postcode(event) {
  this.setState({
    zip_or_postcode: event.target.value
  });
}
line2(event) {
  this.setState({
      line2: event.target.value
  });
}
line3(event) {
  this.setState({
      line3: event.target.value
  });
}
city(event) {
  this.setState({
      city: event.target.value
  });
}
country(event) {
  this.setState({
      country: event.target.value
  });
}
residential(event) {
  this.setState({
    residential: event.target.value
  });
}
work(event) {
  this.setState({
      work: event.target.value
  });
}



handleSubmit(event) {
  event.preventDefault();
  const { firstName, email } = this.state;
  fetch('http://localhost:3003/api/contact', {
      method: 'POST',
      body: JSON.stringify({
          firstName,
          email,
          address: {
            line1: this.state.line1,
            line2: this.state.line2,
            line3: this.state.line3,
            city: this.state.city,
            zip_or_postcode: this.state.zip_or_postcode,
            country: this.state.country
          },
          address_type:{
            residential: this.state.residential,
            work: this.state.work,

          },

      }),
      headers: { 'Content-Type': 'application/json' }

  }).then((response) => response.json())
      .then((result) => {

          this.setState({
              data: result,

          });
      }).catch(err => {
          alert(err);
      });
      alert('Customer is successfully added');
  
}

  render() {
    const { classes } = this.props;

    return (
      <div> <Navbar/>
      <div    style={{  display: 'flex',  justifyContent: 'center'  }} >
     
      
        <div className="margin-top-50">
          <div className="container" style={{ boxSizing: 'border-box', borderStyle: 'ridge', width: '845px', marginTop: '40px'  }}>
            <div className="row legend"    style={{  display: 'flex', justifyContent: 'center',  borderStyle: 'ridge' }}>  
              <h1 style={{ fontSize: '15px', marginLeft: '2px' }}>Customers</h1>
            </div>
            <div className="row">
              <div className="container">
                <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="form-group col-md-4">
                    <TextField
                        label="Name"
                        id="Name"
                        className={classes.textField}
                        value={this.state.firstName}
                         onChange={this.firstName}
                       
                        margin="normal"
                        
                      />
                       <TextField
                        label="Email"
                        id="email"
                        className={classes.textField}
                        value={this.state.email}
                        margin="normal"
                        onChange={this.email}
                      />   
                    </div>

                    </div> 
                    <div className="row legend"    style={{  display: 'flex',width:'100%',  justifyContent: 'center',borderStyle: 'ridge'  }}>  
              <h2 style={{ fontSize: '15px', marginLeft: '2px', }}>Address Type</h2>
              </div> 
              <div className="form-group col-md-4">
                        <TextField
                          label="Resedential"
                          id="Resedential"
                          value={this.state.residential}
                          className={classes.textField}
                          margin="normal"
                          onChange={this.residential}
                        />
                        <TextField
                          label="Work"
                          id="Work"
                          value={this.state.work}
                          className={classes.textField}
                          margin="normal"
                          onChange={this.work}
                        />
                        </div>
                          
                            <div className="row legend"    style={{  display: 'flex',width:'100%',  justifyContent: 'center',  borderStyle: 'ridge'}}>  
              <h3 style={{ fontSize: '15px', marginLeft: '2px', }}>Address</h3>
              </div>
                    <div className="row">
                      <div className="form-group col-md-4">
                        <TextField
                          label="Line1"
                          id="Line1"
                          value={this.state.line1}
                          className={classes.textField}
                          margin="normal"
                          onChange={this.line1}
                        />
                        <TextField
                          label="Line2"
                          id="Line2"
                          value={this.state.line2}
                          className={classes.textField}
                          margin="normal"
                          onChange={this.line2}
                        />
                        <TextField
                          label="Line3"
                          id="Line3"
                          value={this.state.line3}
                          className={classes.textField}
                          margin="normal"
                          onChange={this.line3}
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <TextField
                          label="City"
                          id="city"
                          value={this.state.city}
                          className={classes.textField}
                          margin="normal"
                          onChange={this.city}
                        />
                        <TextField
                          label="Zip_or_PostCode"
                          id="Zip_or_PostCode"
                          value={this.state.zip_or_postcode}
                          className={classes.textField}
                          margin="normal"
                          onChange={this.zip_or_postcode}
                        />
                        <TextField
                          label="Country"
                          id="country"
                          value={this.state.country}
                          className={classes.textField}
                          margin="normal"
                          onChange={this.country}
                        />
                      </div>
  
                      </div>
                      <button style={{display:'flext',color:'red',justifyContent:'center',position:'relative',left:'70px',width:'120px'}}>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div >
        </div>
      </div >
    )
  }
};

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);