import React from "react";
import {Grid, Button} from '@material-ui/core';
import './Main.css'
import background from '../assets/padrinazge/Bg.png'
import titleImg from '../assets/padrinazge/title.png'
import BROCHURE from '../assets/padrinazge/BROCHURE.pdf'
import x from '../assets/contenido/x.png'
import arrowLeft from '../assets/header/arrowLeft.png'

class Padrinazgo extends React.Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {

        };
    }
    link(){
        
        window.open(
            'https://forms.gle/d16s5YvoBxRvRw5r8',
            '_blank' // <- This is what makes it open in a new window.
          );
    }

    render() {
        const height = window.innerHeight;
        const title = 'Mediante nuestro sistema de Sponsorship o padrinazgo las marcas podrán cubrir el valor del curso de un influencer a cambio de que el mismo colabore con la compañía durante un plazo de 6 meses. En esta colaboración el influencer aplicará todo lo aprendido a  lo largo del curso favoreciendo el crecimiento de la imagen de su "padrino". '
        return (
            <div style={{ width:'100%',height:height,backgroundImage:`url(${background})`,backgroundSize:'cover', display:'flex',flexDirection:'column'}}>
                <Grid container direction='row' style={{ height:'100%'}}>
                    <Grid item xs={6}></Grid>
                    <Grid item xs={6} style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
                        <img src={titleImg} width='300px' height='auto' ></img>
                        <p style={{ fontFamily:'Myriad Pro',fontSize:18,lineHeight:1.4 ,color:'white',margin:0,marginTop:5,width:'70%'}}>{title}</p>
                        <p style={{ fontFamily:'PoppinsMediumItalic',color:'white',margin:0,marginTop:30,fontSize:18,marginLeft:10}}>+ Beneficios </p>
                        <div style={{ display:'flex',flexDirection:'row',alignItems:'center',marginTop:10,}}>
                            <img src={x} height='12px' width='auto'></img>
                            <p style={{ fontFamily:'PoppinsMediumItalic',color:'white',margin:0,fontSize:16,marginLeft:10}}>Selección de un influencer exclusivo de tu marca.</p>
                        </div>
                        <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:10}}>
                            <img src={x} height='12px' width='auto'></img>
                            <p style={{ fontFamily:'PoppinsMediumItalic',color:'white',margin:0,fontSize:16,marginLeft:10}}>Suscripción pro fluer por 6 meses sin cargo.</p>
                        </div>
                        <div style={{ display:'flex',flexDirection:'row',alignItems:'center',marginTop:10}}>
                            <img src={x} height='12px' width='auto'></img>
                            <p style={{ fontFamily:'PoppinsMediumItalic',color:'white',margin:0,fontSize:16,marginLeft:10,lineHeight:1,width:'60%'}}>Posibilidad de dar a conocer tus productos durante las clases prácticas de generación de contenido.</p>
                        </div>
                        <div style={{ display:'flex',flexDirection:'row',alignItems:'center',marginTop:10}}>
                            <img src={x} height='12px' width='auto'></img>
                            <p style={{ fontFamily:'PoppinsMediumItalic',color:'white',margin:0,fontSize:16,marginLeft:10}}>Presencia en redes sociales de @flui.site.</p>
                        </div>
                        <div style={{width:'65%',height:50,display:'flex',flexDirection:'row',justifyContent:'space-around',marginTop:15}}>
                            <a href={BROCHURE} download>
                                <Button
                                    style={{ backgroundColor:'#d13852',paddingTop:10,paddingBottom:10,width:150}}
                                    variant="contained"
                                    startIcon={
                                        <img src={arrowLeft} height='16px' width='auto'></img>
                                    }
                                >
                                    <p style={{fontFamily:'NeueHaasDisplayMedium',margin:0,color:'white',fontSize:14,lineHeight:1.2}}>SER PADRINO</p>
                                </Button>
                            </a>
                            
                            <Button
                                onClick={() => this.link()}
                                style={{ backgroundColor:'#d13852',paddingTop:10,paddingBottom:10,width:150}}
                                variant="contained"
                                startIcon={
                                    <img src={arrowLeft} height='16px' width='auto'></img>
                                }
                            >
                                <p style={{fontFamily:'NeueHaasDisplayMedium',margin:0,color:'white',fontSize:14,lineHeight:1.2}}>SER APADRINADO</p>
                            </Button>
                        </div>
                       
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Padrinazgo;
