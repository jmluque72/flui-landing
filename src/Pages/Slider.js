import React from "react";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import './Main.css'
import background from '../assets/carousel/background.png'
import background2 from '../assets/carousel/background2.png'
import background3 from '../assets/carousel/background3.png'
import facebook from '../assets/carousel/facebook.png'
import instagram from '../assets/carousel/instagram.png'
import youtube from '../assets/carousel/youtube.png'
import tiktock from '../assets/carousel/tiktock.png'
import Carousel from 'react-bootstrap/Carousel'
import arrowLeft from '../assets/header/arrowLeft.png'
import AddIcon from '@material-ui/icons/Add';

class Slider extends React.Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {
            textButton: 'preinscribite'

        };
    }

    link(type){
        var page = '';
        switch(type){
            case 'facebook':
                page = 'https://www.facebook.com/fluicollege';
                break;
            case 'instagram':
                page = 'https://instagram.com/fluicollege?igshid=8zufptndint0';
                break;
            case 'youtube':
                page ='https://www.youtube.com/channel/UCuB5GLk14vMqthuqj3Y4OQw';
                break;
            case 'ticktock':
                page='https://vm.tiktok.com/ZMeVvLsRE/';
                break;
            default:
                break;
        } 
        window.open(
            page,
            '_blank' // <- This is what makes it open in a new window.
          );
    }
    componentDidMount(){
        const d = new Date()
        if(d.getDate() >= 24 ){
            this.setState({textButton : 'inscribite'})
        }
    }
    linkForm(){
        window.open(
            'https://forms.gle/d16s5YvoBxRvRw5r8',
            '_blank' // <- This is what makes it open in a new window.
          );
    }
    link2(){
        window.open(
            'https://zappa-1swsvfrgq.s3.amazonaws.com/brochure_alumno.pdf',
            '_blank' // <- This is what makes it open in a new window.
          );
    }

    render() {
        const height = window.innerHeight;
        const width = window.innerWidth < 700
        return (
            <div style={{ width:'100%',height:height}}>
                <Carousel
                    controls={false}
                    interval={5000}
                    pause={false}
                    indicators={width ? false : true}
                >
                    <Carousel.Item>
                        <div style={{ height:height,width:'100%',backgroundImage:`url(${background})`,backgroundSize:'cover',backgroundPosition:'center'}}>
                            <Grid container direction='row' style={{}}>
                                <Grid item xs={12} lg={8} style={{ display:'flex',alignItems:'center',alignItems:'center', justifyContent:'center',marginTop: !width ? 80 : 120}}>
                                    <div style={{ display:'flex',flexDirection:'column'}}>
                                        <p className={'textCarousel1'} style={{ fontSize: width &&(120)}}>Sé</p>
                                        <p className={'textCarousel1'} style={{ fontSize: width &&(120)}}>Influ-</p>
                                        <p className={'textCarousel1'} style={{ marginTop:-25,fontSize: width &&(120)}}>encer</p>
                                        <p className={'textCarousel1Thin'} >La primera escuela on demand</p>
                                        {!width && (
                                            <Button
                                                style={{ backgroundColor:'#d13852',height:45,width:width ? 180 : 200,marginLeft:0,marginTop:10}}
                                                variant="contained"
                                                startIcon={
                                                    <AddIcon style={{fontSize:30}}></AddIcon>
                                                }
                                                onClick={() => this.link2()}
                                                >
                                                <p style={{fontFamily:'NeueHaasDisplayMedium',margin:0,color:'white',fontSize:16}}>INFO</p>
                                            </Button>
                                        )}
                                     
                                    </div>
                                </Grid>
                                {!width && (
                                    <Grid item   lg={4} style={{ display:'flex',alignItems:'center', justifyContent:'flex-end',height:height}}>                      
                                            <div style={{ display:'flex',flexDirection:'column',height:200,justifyContent:'space-around',marginRight:50}}>
                                                <img src={facebook} onClick={() => this.link('facebook')} height='45px' width='auto' style={{cursor:'pointer'}}></img>
                                                <img src={instagram} onClick={() => this.link('instagram')} height='45px' width='auto' style={{cursor:'pointer'}}></img>
                                                <img src={youtube} onClick={() => this.link('youtube')} height='45px' width='auto' style={{cursor:'pointer'}}></img>
                                                <img src={tiktock} onClick={() => this.link('ticktock')} height='45px' width='auto' style={{cursor:'pointer'}}></img>
                                            </div>
                                    </Grid>
                                    )
                                }
                                 {width && (
                                    <div style={{ display:'flex',flexDirection:'column',paddingLeft:10}}>
                                        <Button
                                            style={{ backgroundColor:'#d13852',height:45,width:width ? 180 : 200,marginLeft:0,marginTop:10}}
                                            variant="contained"
                                            startIcon={
                                                <AddIcon style={{fontSize:30}}></AddIcon>
                                            }
                                            onClick={() => this.link2()}
                                            >
                                            <p style={{fontFamily:'NeueHaasDisplayMedium',margin:0,color:'white',fontSize:16}}>INFO</p>
                                        </Button>
                                        <Button
                                            style={{ backgroundColor:'#d13852',height:45,width:180,marginLeft:0,marginTop:10}}
                                            variant="contained"
                                            startIcon={
                                                <img src={arrowLeft} height='20px' width='auto'></img>
                                            }
                                            onClick={() => this.linkForm()}
                                        >
                                            <p style={{fontFamily:'NeueHaasDisplayMedium',margin:0,color:'white',fontSize:16}}>{this.state.textButton}</p>
                                        </Button>
                                    </div>
                                    )
                                }
                               
                                  
                                
                               
                            </Grid>
                        </div>
                    </Carousel.Item>
                    {!width && (
                    <Carousel.Item>
                        <div style={{ height:height,width:'100%',backgroundImage:`url(${background2})`,backgroundSize:'cover',backgroundPosition:'center'}}>
                            <Grid container direction='row' style={{ height:'100%'}}>
                                <Grid item xs={8}></Grid>
                                <Grid item xs={4} style={{ display:'flex',alignItems:'center', justifyContent:'flex-end'}}>
                                    <div style={{ display:'flex',flexDirection:'column',height:200,justifyContent:'space-around',marginRight:50}}>
                                        <img src={facebook} onClick={() => this.link('facebook')} height='45px' width='auto' style={{cursor:'pointer'}}></img>
                                        <img src={instagram} onClick={() => this.link('instagram')}  height='45px' width='auto' style={{cursor:'pointer'}}></img>
                                        <img src={youtube} onClick={() => this.link('youtube')} height='45px' width='auto' style={{cursor:'pointer'}}></img>
                                        <img src={tiktock} onClick={() => this.link('ticktock')} height='45px' width='auto' style={{cursor:'pointer'}}></img>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </Carousel.Item>
                    )}
                    {!width && (
                    <Carousel.Item>
                        <div style={{ height:height,width:'100%',backgroundImage:`url(${background3})`,backgroundSize:'cover',backgroundPosition:'center'}}>
                            <Grid container direction='row' style={{ height:'100%'}}>
                                <Grid item xs={8}></Grid>
                                <Grid item xs={4} style={{ display:'flex',alignItems:'center', justifyContent:'flex-end'}}>
                                    <div style={{ display:'flex',flexDirection:'column',height:200,justifyContent:'space-around',marginRight:50}}>
                                        <img src={facebook} onClick={() => this.link('facebook')} height='40px' width='auto' style={{cursor:'pointer'}}></img>
                                        <img src={instagram} onClick={() => this.link('instagram')} height='40px' width='auto' style={{cursor:'pointer'}}></img>
                                        <img src={youtube} onClick={() => this.link('youtube')} height='40px' width='auto' style={{cursor:'pointer'}}></img>
                                        <img src={tiktock} onClick={() => this.link('ticktock')} height='40px' width='auto' style={{cursor:'pointer'}}></img>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </Carousel.Item>
                    )}
                    
                </Carousel>
            </div>
        );
    }
}

export default Slider;
