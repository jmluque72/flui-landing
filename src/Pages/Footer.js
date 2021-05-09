import React from "react";
import './Main.css';
import { 
    Grid, 
} from '@material-ui/core/';
import background from '../assets/footer/background.png'
import logo from '../assets/footer/logo.png'
import escuela from '../assets/footer/escuela.png'

const list = {
    fontFamily:'NeueHaasDisplayBold',
    margin:0,
    marginTop:20,
    color:'white',
    fontSize:14,
    cursor:'pointer'
}
class Footer extends React.Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {

        };
    }
    
   

    render() {
        const height = window.innerHeight;
        return (
           <div style={{ width:'100%',height:height*0.7, backgroundImage:`url(${background})`,backgroundSize:'cover'}}>
                <Grid container direction='row' style={{ height:'90%',paddingTop:100}}>
                    <Grid item xs={7} style={{ display:'flex',flexDirection:'column',alignItems:'center'}}>
                        <img src={logo} height='130px' width='auto'></img>
                        <div style={{ display:'flex',flexDirection:'row',alignItems:'center',height:20,marginLeft:170}}>
                            <p style={{fontFamily:'PoppinsBold',margin:0,color:'#575e66',fontSize:26}}>#</p>
                            <img src={escuela} height='12px' width='auto' style={{ marginLeft:-10}}></img>
                        </div>
                    </Grid>
                    <Grid item xs={5} style={{ display:'flex',flexDirection:'column',paddingLeft:100}}>
                        <p style={{fontFamily:'NeueHaasDisplayBold',margin:0,color:'white',fontSize:18,letterSpacing:0.8}}>FLUI COLLEGE</p>
                        <p style={list}>Home</p>
                        <p style={list}>Contenido</p>
                        <p style={list}>Padrinazgo</p>
                        <p style={list}>Contacto</p>
                    </Grid>
                </Grid>
                <Grid container direction='row' justify='flex-end' style={{ height:'10%'}}>
                    <div style={{ height:'100%',borderTop:'solid 1px rgba(225,225,225,0.1)',width:'100%',display:'flex',alignItems:'center',paddingLeft:270}}>
                        <p style={{fontFamily:'Myriad Pro',margin:0,color:'white',fontSize:12,letterSpacing:0.8}}>Copyright Influenci.ar  SAS - Córdoba Argentina</p>
                    </div>
                </Grid>
                
           </div>
        );
    }
}
export default Footer;
