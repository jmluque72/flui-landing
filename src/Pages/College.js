import React from "react";
import Grid from '@material-ui/core/Grid';
import './Main.css'
import college from '../assets/college/SobreFLUI.png'


class College extends React.Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {

        };
    }

    render() {
        const height = window.innerHeight;
        const width = window.innerWidth < 700
        return (
            <div style={{ width:'100%',height:!width ? height : height + 100, display:'flex',flexDirection:'column'}}>
                <div style={{ width:'100%',height:height*0.65}}>
                    <Grid container direction='row' style={{ height:'100%'}}>
                        <Grid item xs={12} lg={6} style={{display:'flex',justifyContent:'flex-end',alignItems:'center'}}>
                            <div style={{ width:550,height:320,borderRadius:10,display:'flex',justifyContent:'center',alignItems:'center'}}>
                                {/* <div style={{ width:100,height:100,borderRadius:5,border:'solid 1px #d2d2d2',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                    <div style={{ width:80,height:80,backgroundColor:'#d23852',borderRadius:5}}></div>
                                </div> */}
                                <iframe width="90%" height="90%" src="https://www.youtube.com/embed/5uY6mhY6NvA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </Grid>
                        <Grid item xs={12} lg={6} style={{display:'flex',alignItems:'center'}}>
                            <div style={{ width:450,height:250,display:'flex',flexDirection:'column',paddingLeft:50}}>
                                <p style={{ color:'#d23852', fontFamily:'NeueHaasDisplayMedium',fontSize:14,margin:0}}>SOBRE FLUI COLLEGE</p>
                                <p style={{ color:'black', fontFamily:'NeueHaasDisplayMedium',fontSize:40,margin:0}}>Fluir e Influir</p>
                                <p style={{ color:'#bbbbbb', fontFamily:'NeueHaasDisplayRoman',fontSize:20,width:'90%',lineHeight:1.3,margin:0}}>Somos la primera escuela on demand del país, especializada en la formación de influencers, sabemos cómo potenciar tu marca propia y enseñarte a utilizar estratégicamente todas las herramientas digitales para que seas un influencer profesional.</p>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                {!width && (
                    <div style={{ width:'100%',height:height*0.35,backgroundImage:`url(${college})`}}>

                    </div>
                )}
              
            </div>
        );
    }
}

export default College;
