import React from "react";
import Grid from '@material-ui/core/Grid';
import './Main.css'
import background from '../assets/upgrade/back.png'
import title from '../assets/upgrade/titulo.png'
import download from '../assets/upgrade/download.png'

class UpGrade extends React.Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {

        };
    }
    link2(){
        window.open(
            'https://zappa-1swsvfrgq.s3.amazonaws.com/TEMARIO.pdf',
            '_blank' // <- This is what makes it open in a new window.
          );
    }

    render() {
        const height = window.innerHeight;
        const width = window.innerWidth < 700
        const t = 'Flui College ofrece programas para formarte como referente en tu sector, cualquiera que sea, de la mano de los principales profesionales en marcas y expertos en marketing digital.'
        return (
            <div style={{ width:'100%',height:height,backgroundColor:'black'}}>
                <div style={{ width:'100%',height:height, display:'flex',flexDirection:'column',backgroundImage:`url(${background})`,backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}}>
                    <Grid container style={{ height:'100%'}}>
                        <Grid item  xs={11} sm={8} md={8} lg={6}  style={{height:'100%',width:'100%',display:'flex',justifyContent:'center',alignItems:!width ? 'flex-end' : 'center',flexDirection:'column'}}>
                            <img src={title} height='auto' width={ !width ? '400px' : '350px'}style={{ paddingLeft:width&& 15}} ></img>
                            <p style={{ width: !width ? '400px' : '300px',fontFamily:'NeueHaasDisplayThinItalic',color:'white',fontSize:20,marginTop:15}}>{t}</p>
                            <div style={{ width: !width ? 400 : 300,marginLeft: width&&(50) }}>
                                <a onClick={() => this.link2()} download style={{ textDecoration:'none'}}>
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
