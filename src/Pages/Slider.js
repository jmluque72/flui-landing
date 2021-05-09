import React from "react";
import Grid from '@material-ui/core/Grid';
import './Main.css'
import background from '../assets/carousel/background.png'
import background2 from '../assets/carousel/background2.png'
import background3 from '../assets/carousel/background3.png'
import facebook from '../assets/carousel/facebook.png'
import instagram from '../assets/carousel/instagram.png'
import youtube from '../assets/carousel/youtube.png'
import tiktock from '../assets/carousel/tiktock.png'
import Carousel from 'react-bootstrap/Carousel'


class Slider extends React.Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {
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

    render() {
        const height = window.innerHeight;
        return (
            <div style={{ width:'100%',height:height}}>
                <Carousel
                    controls={false}
                    interval={50000}
                >
                    <Carousel.Item>
                        <div style={{ height:height,width:'100%',backgroundImage:`url(${background})`,backgroundSize:'cover'}}>
                            <Grid container direction='row' style={{ height:'100%'}}>
                                <Grid item xs={8} style={{ display:'flex',alignItems:'center', justifyContent:'center'}}>
                                    <div style={{ display:'flex',flexDirection:'column'}}>
                                        <p className={'textCarousel1'}>Sé</p>
                                        <p className={'textCarousel1'}>Influ-</p>
                                        <p className={'textCarousel1'} style={{ marginTop:-25}}>encer</p>
                                        <p className={'textCarousel1Thin'}>Potenciá tu trabajo en redes</p>
                                    </div>
                                </Grid>
                                <Grid item xs={4} style={{ display:'flex',alignItems:'center', justifyContent:'flex-end'}}>
                                    <div style={{ display:'flex',flexDirection:'column',height:200,justifyContent:'space-around',marginRight:50}}>
                                        <img src={facebook} onClick={() => this.link('facebook')} height='45px' width='auto' style={{cursor:'pointer'}}></img>
                                        <img src={instagram} onClick={() => this.link('instagram')} height='45px' width='auto' style={{cursor:'pointer'}}></img>
                                        <img src={youtube} onClick={() => this.link('youtube')} height='45px' width='auto' style={{cursor:'pointer'}}></img>
                                        <img src={tiktock} onClick={() => this.link('ticktock')} height='45px' width='auto' style={{cursor:'pointer'}}></img>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{ height:height,width:'100%',backgroundImage:`url(${background2})`,backgroundSize:'cover'}}>
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
                    <Carousel.Item>
                        <div style={{ height:height,width:'100%',backgroundImage:`url(${background3})`,backgroundSize:'cover'}}>
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
                </Carousel>
            </div>
        );
    }
}

export default Slider;
