import React from "react";
import Grid from '@material-ui/core/Grid';
import './Main.css'
import background from '../assets/contenido/background.png'
import x from '../assets/contenido/x.png'
import Carousel from 'react-elastic-carousel'
import sebastian from '../assets/humanos/santiagobrana.jpg'
import ChichaOsorio from '../assets/humanos/chichaosorio.png'
import EmilianaFelizzia from '../assets/humanos/emilianafelizzia.jpg'
import JuanjoCobbo from '../assets/humanos/juanjocobbo.jpg'
import FernandoSosaLoyola from '../assets/humanos/fernandososaloyola.jpg'
import ConsueloVélez from '../assets/humanos/consuelovelez.jpg'
import MeyValdés from '../assets/humanos/meyvaldes.jpg'
import KevinGorfinkel from '../assets/humanos/kevingorfinkel.jpg'
import LisandroIacovelli from '../assets/humanos/lisandroiacovelli.jpg'
import ValentinaAcosta from '../assets/humanos/valentinaacosta.jpg'
import SebastiánTapia from '../assets/humanos/sebastiantapia.jpg'
import JuanCruzPraddaude from '../assets/humanos/juancruzpraddaude.jpg'
import GemmaPerona from '../assets/humanos/gemmaperona.png'
import AgustínMartinezPlinio from '../assets/humanos/agustinmartinezplinio.jpg'
import JuanManuelZeballos from '../assets/humanos/juanmanuelzeballos.jpg'
import JuanFerreyra from '../assets/humanos/juanferreyra.png'
import DiegoYorbandi from '../assets/humanos/diegoyorbandi.jpg'
import MartinHuergo from '../assets/humanos/martinhuergo.png'
import EmanuelPérez from '../assets/humanos/emanuelperez.jpg'
import IrisMacaluso from '../assets/humanos/irismacaluso.png'
import CamiloNicolas from '../assets/humanos/CamiloNicolas.png'
import GastonMassa from '../assets/humanos/gastonmassa.jpg'
import WillyMagia from '../assets/humanos/willymagia.jpg'
import AgustinaLópez from '../assets/humanos/agustinalopez.jpg'
import GonzaloKairuz from '../assets/humanos/gonzalokairuz.jpg'
import arrow from '../assets/contenido/arrow.png'
import circle from '../assets/contenido/circle.png'

class Contenido extends React.Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {
            humanos: [
                {name: 'Willy Magia', arroba: '@willymagia', img: WillyMagia },
                {name: 'Camilo Nicolás', arroba: '@camilonicolások', img: CamiloNicolas },
                {name: 'Gaston Massa', arroba: '@gastonmassa', img: GastonMassa },
                {name: 'Emiliana Felizzia', arroba: '@milifelizzia', img:  EmilianaFelizzia },
                {name: 'Juanjo Cobo', arroba: '@shotbyjuanjo', img: JuanjoCobbo },
                {name: 'Agustina López', arroba: '@pasaje.en.mano', img: AgustinaLópez },
                {name: 'Chicha Osorio', arroba: '@osoriochicha', img: ChichaOsorio },
                {name: 'Martin Huergo', arroba: '@huergomartin', img: MartinHuergo },
                {name: 'Consuelo Vélez', arroba: '@consuvelez', img: ConsueloVélez },
                {name: 'Gonzalo Kairuz', arroba: '@gonkairuz', img: GonzaloKairuz },
                {name: 'Diego Yorbandi', arroba: '@diegoyorbandi', img: DiegoYorbandi },
                {name: 'Juan Manuel Zeballos', arroba: '@negrozeballos', img: JuanManuelZeballos },
                {name: 'Agustín Martinez Plinio', arroba: '@agustin.martinez.plinio', img: AgustínMartinezPlinio },
                {name: 'Gemma Perona', arroba: '@gemmaperona', img: GemmaPerona },
                {name: 'Juan Cruz Praddaude', arroba: '@jcpraddaude', img: JuanCruzPraddaude },
                {name: 'Santiago Braña', arroba: '@santb__', img: sebastian },
                {name: 'Sebastián Tapia', arroba: '@sebatapia82', img: SebastiánTapia },
                {name: 'Valentina Acosta', arroba: '@valeacostaoficial', img: ValentinaAcosta },
                {name: 'Mey Valdés', arroba: '', img: MeyValdés },
                {name: 'Kevin Gorfinkel', arroba: '@kevingorfin', img: KevinGorfinkel },
                {name: 'Fernando Sosa Loyola', arroba: '@fersosaloyola', img: FernandoSosaLoyola },
                {name: 'Lisandro Iacovelli', arroba: '@lichadelapeople', img: LisandroIacovelli },
                {name: 'Emanuel Pérez', arroba: '@emanuelle.pe', img: EmanuelPérez },
                {name: 'Iris Macaluso', arroba: '@maciris', img: IrisMacaluso },
                {name: 'Juan Ferreyra', arroba: '@el.juan.ferreyra', img: JuanFerreyra },

            ],
            materias: [ 
                {num: '01', title: 'El ecosistema del marketing de influencia'},
                {num: '02', title: 'Introducción a la composición visual'},
                {num: '03', title: 'Herramientas digitales'},
                {num: '04', title: '¿Cómo comunicar efectivamente?'},
                {num: '05', title: 'La marca personal'},
                {num: '06', title: 'El diseño de tu negocio'},
            ]
        };
    }
    
    render() {
        const seis = [{},{},{},{},{},{},{},{}]
        const height = window.innerHeight;
        const width = window.innerWidth < 700
        const width2 = window.innerWidth < 1000
        return (
            <div style={{ width:'100%',minHeight:!width ? height*2 : height*2 + 350 ,marginTop:-1, display:'flex',flexDirection:'column',backgroundImage:`url(${background})`,backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
               <Grid container direction='row' style={{ paddingTop:100}}>
                    <Grid item xs={12} sm={8} md={6}  lg={6}  style={{width:'100%',height:300,display:'flex',alignItems:'flex-end',flexDirection:'column'}}>
                        <div style={{ width: !width ? 380 : window.innerWidth  - 20,display:'flex',flexDirection:'column'}}>
                            <p style={{ width: !width &&('400px'),fontFamily:'NeueHaasDisplayMedium',color:'white',fontSize:32,letterSpacing:1,margin:0}}>CONTENIDO</p>
                            <img src={x} height='14px' width='14px' style={{marginTop:10,marginBottom:10}}></img>
                            <p style={{ fontFamily:'PoppinsRegular',fontSize:16,color:'#d13852'}}>Los programas de FLUI COLLEGE son 100% on demand, accesibles donde quieras, cuando quieras, desde cualquier dispositivo 24/7. Vas a estar en comunicación permanente con profesionales para poder formarte y asesorarte durante todo el curso</p>
                            <p style={{ fontFamily:'PoppinsBold',fontSize:16,color:'#66c9f3'}}>Conocé a nuestro factor humano</p>
                        </div>
                    </Grid>
                    <Grid item  xs={12} style={{width:'100%',margin:0,marginLeft:!width2&&(290) ,position:'relative'}}>
                        <div style={{ width:100,height:50,position:'absolute',top:!width2 ? -60 : 360,right:!width ? 380 : 20,display:'flex',justifyContent:'space-around',alignItems:'center',flexDirection:'row'}}>
                            <button onClick={() => this.carousel.slidePrev()} style={{ cursor:'pointer',height:40,width:40,borderRadius:25,background:'#d13852',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                <img src={arrow} height='8px' width='auto'></img>
                            </button>
                            <button onClick={() => this.carousel.slideNext()} style={{  cursor:'pointer',height:40,width:40,borderRadius:25,background:'#d13852',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                <img src={arrow} height='8px' width='auto' style={{ transform:`rotate(180deg)`}}></img>
                            </button>
                        </div>
                        <Carousel itemsToShow={!width ? 3 : 1.2} pagination={false} showArrows={false} ref={ref => (this.carousel = ref)}>
                            {this.state.humanos.map((item,index) => {
                                return(
                                    <div key={index} style={{width:!width ? 335 : window.innerWidth,height:340,display:'flex',justifyContent:'center',alignItems:'center'}}>
                                        <div style={{ width:'95%',height:'95%',borderRadius:20,backgroundImage:`url(${item.img})`,backgroundSize:'cover',backgroundPosition:'center',padding:15,display:'flex',justifyContent:'flex-end',alignItems:'flex-end',boxShadow: "3px 3px 6px 0 black"}}>
                                            <div style={{ width:220,height:75,background:'white',borderRadius:10,borderTopRightRadius:0,display:'flex',flexDirection:'column',justifyContent:'center',paddingLeft:15}}>
                                                <p style={{ margin:0,color:'black',fontFamily:'PoppinsSemiBold',lineHeight:1}}>{item.name}</p>
                                                <p style={{ margin:0,color:'black',fontFamily:'PoppinsLight',marginTop:-2}}>{item.arroba}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </Carousel> 
                        <Grid container spacing={1} style={{ height:100,width:60,position:'absolute',top:40,left:10}}>
                            {seis.map((item,index) => {
                                return(
                                <Grid key={index} item xs={6}>
                                    <img src={x} height='12px' width='12px' ></img>
                                </Grid>
                                )
                            })}
                         
                        </Grid>
                    </Grid>
                    <Grid item  xs={12} style={{width:'100%',margin:0,marginLeft:!width2 ? 290 : '10%', marginTop: width && 20}}>
                        <p style={{ fontFamily:'NeueHaasDisplayMedium',color:'white',fontSize:32,letterSpacing:1,marginTop:50}}>MATERIAS</p>
                        <img src={x} height='14px' width='14px' style={{marginTop:10,marginBottom:10}}></img>
                        <Grid container direction='row' style={{ width:'100%',paddingLeft:10,paddingRight:10}}>
                            {this.state.materias.map((item,index) => {
                                return(
                                    <Grid key={index} item xs={6} lg={4} style={{ display:'flex',flexDirection:'column',marginBottom:50}}>
                                        <div style={{ width:84,height:64,background:`url(${circle})`,backgroundSize:'cover',display:'flex'}}>
                                            <div style={{ height:64,width:64,display:'flex',justifyContent:'center',alignItems:'center'}}>
                                                <p style={{ margin:0, fontFamily:'PoppinsMedium',fontSize:24,color:'#66c9f3',marginTop:5}}>{item.num}</p>
                                            </div>
                                        </div>
                                        <p style={{ margin:0,marginTop:20,width:'50%',fontFamily:'PoppinsMedium',fontSize:16,color:'white'}}>{item.title}</p>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Contenido;
