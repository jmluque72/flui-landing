import React from "react";
import Grid from '@material-ui/core/Grid';
import './Main.css'
import background from '../assets/contacto/background.png'
import qr from '../assets/contacto/qr.png'
import facebook from '../assets/contacto/facebook.png'
import instagram from '../assets/contacto/instagram.png'
import youtube from '../assets/contacto/youtube.png'
import tiktock from '../assets/contacto/tiktock.png'
import axios from 'axios';
import Loading from '../utils/Loading.js'

const input = {
    backgroundColor:'transparent',
    width:'100%',
    height:'100%',
    border:'none',
    padding:5,
    fontFamily:'PoppinsRegular',
    fontSize:14
}

class Contacto extends React.Component {
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
    onSubmit(event){
        event.preventDefault()
        var data = {
            name: this.state.name,
            text : this.state.text,
            email : this.state.email
        }
        var config = {
            method: 'post',
            url: 'https://9iri68w9n5.execute-api.sa-east-1.amazonaws.com/flui/send-data/',
            headers: { 
            'Content-Type': 'application/json'
            },
            data : data
        };
        this.setState({ loading : true})
        axios(config)
        .then(res => {
            this.setState({ loading:false,name: '', text : '', email :'' })
        })
        .catch(error => {
            this.setState({ loading: false, network_error: false,new: false });
            console.log('Ha ocurrido un error',error)
        })
    }
    render() {
        const height = window.innerHeight;
        const negro = '#3b3a42';
        const borderColor = '#abbecc'
        const width = window.innerWidth < 1000
        return (
            <div style={{ width:'100%',height: !width && height, backgroundImage:`url(${background})`,backgroundSize:'cover'}}>
                <Grid container direction='row' style={{ paddingTop:100,height:'100%'}}>
                    <Grid item xs={12} sm={7} md={7}  lg={7} style={{ padding:width && 10, paddingLeft:!width ? 270 : 10}}>
                        <p style={{ color:'#d13852',fontFamily:'NeueHaasDisplayBold',letterSpacing:1,margin:0}}>CONTACTO</p>
                        <p style={{ color:'#3b3a42',fontFamily:'NeueHaasDisplayBold',letterSpacing:1,margin:0,fontSize:30}}>TE ESCUCHAMOS!</p>
                        <form onSubmit={(event) => this.onSubmit(event)}>
                            <Grid container direction={'row'} spacing={2} style={{ marginTop:40}}>
                                <Grid item xs={6}>
                                    <div style={{height:45,width:'100%',background:'white', border:'solid 1px', borderColor:borderColor}}>
                                        <input 
                                            type='text'
                                            placeholder='Name'
                                            value={this.state.name}
                                            onChange={(event) => this.setState({ name : event.target.value})}
                                            style={input}
                                            required
                                        />
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{height:45,width:'100%',background:'white', border:'solid 1px', borderColor:borderColor}}>
                                        <input 
                                            type='email'
                                            placeholder='Email'
                                            value={this.state.email}
                                            onChange={(event) => this.setState({ email : event.target.value})}
                                            style={input}
                                            required
                                        />
                                    </div>
                                </Grid>
                                <Grid item xs={12}>
                                    <div style={{height:180,width:'100%',background:'white', border:'solid 1px', borderColor:borderColor}}>
                                        <textarea 
                                            type='text'
                                            placeholder='Text'
                                            value={this.state.text}
                                            onChange={(event) => this.setState({ text : event.target.value})}
                                            style={{
                                                backgroundColor:'transparent',
                                                width:'100%',
                                                height:'100%',
                                                border:'none',
                                                padding:10,
                                                fontFamily:'PoppinsRegular',
                                                fontSize:14
                                            }}
                                        />
                                    </div>
                                </Grid>
                                <Grid item xs={12}>
                                    <button type='submit' style={{cursor:'pointer',paddingTop:5,paddingBottom:5,width:120,borderRadius:5,display:'flex',justifyContent:'center',alignItems:"center",background:'#d13852'}}>
                                        <p style={{ color:'white', fontFamily:'NeueHaasDisplayBold',margin:0,fontSize:14}}>Enviar</p>
                                    </button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                    <Grid item xs={12} sm={5} md={5}  lg={5} style={{paddingLeft:50,display:'flex',flexDirection:'column',justifyContent:'',position:'relative',minHeight:width && 600}}>
                        <p style={{ color:'#3b3a42',fontFamily:'NeueHaasDisplayBold',letterSpacing:1,margin:0,fontSize:30,marginTop:!width ? 20 : 10,marginLeft:25}}>WHATSAPP ME</p>
                        <div style={{ width:'90%',marginLeft:'10%',backgroundImage:`url(${qr})`,height:'90%',backgroundSize:'cover',backgroundRepeat:'no-repeat',display:'flex',alignItems:'flex-end',position:'absolute',bottom:0,left:0}}>
                            <div style={{ display:'flex',flexDirection:'row',height:40,width:200,marginBottom:50,justifyContent:'space-around',marginRight:50}}>
                                <img src={facebook} onClick={() => this.link('facebook')} height='45px' width='auto' style={{cursor:'pointer'}}></img>
                                <img src={instagram} onClick={() => this.link('instagram')}  height='45px' width='auto' style={{cursor:'pointer'}}></img>
                                <img src={youtube} onClick={() => this.link('youtube')} height='45px' width='auto' style={{cursor:'pointer'}}></img>
                                <img src={tiktock} onClick={() => this.link('ticktock')} height='45px' width='auto' style={{cursor:'pointer'}}></img>
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <Loading state={this.state.loading}></Loading>
            </div>
        );
    }
}

export default Contacto;
