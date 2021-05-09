import React from "react";
import Grid from '@material-ui/core/Grid';
import './Main.css'
import background from '../assets/upgrade/back.png'
import title from '../assets/upgrade/titulo.png'
import download from '../assets/upgrade/download.png'
import temario from '../assets/upgrade/temario.pdf'

class UpGrade extends React.Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {

        };
    }

    render() {
        const height = window.innerHeight;
        const t = 'Flui College ofrece programas para formarte como referente en tu sector, cualquiera que sea, de la mano de los principales profesionales en marcas y expertos en marketing digital.'
        return (
            <div style={{ width:'100%',height:height,backgroundColor:'black'}}>
                <div style={{ width:'100%',height:height, display:'flex',flexDirection:'column',backgroundImage:`url(${background})`,backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
                    <Grid container style={{ height:'100%'}}>
                        <Grid item xs={6} style={{height:'100%',width:'100%',display:'flex',justifyContent:'center',alignItems:'flex-end',flexDirection:'column'}}>
                            <img src={title} height='auto' width='400px' ></img>
                            <p style={{ width:'400px',fontFamily:'NeueHaasDisplayThinItalic',color:'white',fontSize:20,marginTop:15}}>{t}</p>
                            <div style={{ width:400}}>
                                <a href={temario} download style={{ textDecoration:'none'}}>
                                    <div style={{ width:250,cursor:'pointer',height:60,display:'flex',flexDirection:'row'}}>
                                        <div style={{ width:'70%',display:'flex',justifyContent:'center',alignItems:'center',height:'100%',backgroundColor:'#d13852',borderTopLeftRadius:5,borderBottomLeftRadius:5}}>
                                            <p style={{fontFamily:'NeueHaasDisplayBold',letterSpacing:0.8,color:'white',fontSize:12,margin:0}}>Descargar contenido</p>
                                        </div>
                                        <div style={{ width:'30%',display:'flex',justifyContent:'center',alignItems:'center',height:'100%',backgroundColor:'#3b3a42',borderTopRightRadius:5,borderBottomRightRadius:5}}>
                                            <img src={download} height='14px' width='auto'></img>
                                        </div>
                                    </div>
                                </a>
                                
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
           
        );
    }
}

export default UpGrade;
