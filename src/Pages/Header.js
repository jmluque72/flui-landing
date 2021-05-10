import React from "react";
import './Main.css';
import { 
    Grid, 
    AppBar,
    Toolbar,
    Button
} from '@material-ui/core/';
import logo from '../assets/header/logo.png'
import arrowLeft from '../assets/header/arrowLeft.png'
import hamburger from '../assets/header/hamburger.png'
import hamburgerSelected from '../assets/header/hamburgerSelected.png'
import { Thumbs } from "react-responsive-carousel";
import IconButton from '@material-ui/core/IconButton';

class Header extends React.Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {
            select: 'Slider'
        };
        this.header = this.header.bind(this);;
    }
    link(){
        window.open(
            'https://forms.gle/d16s5YvoBxRvRw5r8',
            '_blank' // <- This is what makes it open in a new window.
          );
    }
    header(){
      
    }
    componentDidMount() {
        window.addEventListener('scroll',  () => this.setHeader())
      }
    setHeader(){
    const height = window.innerHeight 
    const top = window.pageYOffset +81  
    if(top <= height){
        this.setState({ select : 'Slider'})
    }else if(top >= height && top < height*2){
        this.setState({ select : 'College'})
    }else if(top > height*2 && top < height*5){
        this.setState({ select : 'Contenido'})
    }else if(top > height*5 && top < height*6){
        this.setState({ select : 'Padrinazgo'})
    }else if(top > height*6){
        this.setState({ select : 'Contacto'})
    }
    }
    colorText(type){
        if(this.state.select === type){
            return 'white'
        }else{
            return 'rgba(225,225,225,0.4)'
        }
    }
    render() {
        const width = window.innerWidth
        console.log(width)
        if(width > 700){
            return (
                <AppBar style={{ backgroundColor:'#151515',height:80,display:'flex',justifyContent:'center',boxShadow:'none',borderBottom:'solid 1px rgba(255,255,255,0.1)'}}>
                    <Toolbar>
                        <Grid container direction='row' alignItems='center'>
                            <Grid item xs={2} s={4} m={4} l={2} xl={2} style={{display:'flex',justifyContent:'flex-end'}}>
                                <img src={logo} onClick={() =>  {this.props.redirect('College')}} alt='logo-flui' height='65px' width='auto' style={{ display:'block',marginRight:16,cursor:'pointer'}}></img>
                            </Grid>
                            <Grid item xs={6} s={4} m={4} l={2} xl={2} style={{display:'flex',justifyContent:'center'}}>
                                <Grid container  alignItems="center" direction='row' justify='space-around' style={{ height:'100%',marginLeft:10}}>  
                                    <p className={'headerMenu'} style={{ color:this.colorText('Slider')}} onClick={() =>  {this.props.redirect('Slider')}} >HOME</p>
                                    <p className={'headerMenu'} style={{ color:this.colorText('College')}} onClick={() => this.props.redirect('College')}>FLUI COLLEGE</p>
                                    <p className={'headerMenu'} style={{ color:this.colorText('Contenido')}}  onClick={() => this.props.redirect('Contenido')}>CONTENIDO</p>
                                    <p className={'headerMenu'} style={{ color:this.colorText('Padrinazgo')}} onClick={() => this.props.redirect('Padrinazgo')}>PADRINAZGO</p>
                                    <p className={'headerMenu'} style={{ color:this.colorText('Contacto')}} onClick={() => this.props.redirect('Contacto')}>CONTACTO</p>
                                </Grid>
                            </Grid>
                            <Grid item xs={4} s={4} m={4} l={2} xl={2} style={{display:'flex',justifyContent:'center'}}>
                                <Button
                                    style={{ backgroundColor:'#d13852',paddingTop:10,paddingBottom:10}}
                                    variant="contained"
                                    startIcon={
                                        <img src={arrowLeft} height='20px' width='auto'></img>
                                    }
                                    onClick={() => this.link()}
                                >
                                    <p style={{fontFamily:'NeueHaasDisplayMedium',margin:0,color:'white',fontSize:16}}>preinscribite</p>
                                </Button>
                            </Grid>
                        </Grid>
    
                    </Toolbar>
                </AppBar>
            );
        }else{
            return(
                <AppBar style={{ backgroundColor:'#151515',height:80,display:'flex',justifyContent:'center',boxShadow:'none',borderBottom:'solid 1px rgba(255,255,255,0.1)'}}>
                    <Toolbar>
                        <Grid container direction='row' justify='center'>
                            <Grid item xs={12} style={{display:'flex',justifyContent:'center'}}>
                                <img src={logo} onClick={() =>  {this.props.redirect('College')}} alt='logo-flui' height='65px' width='auto' style={{ cursor:'pointer'}}></img>
                            </Grid>
                        </Grid>
                    </Toolbar>
                    <div style={{ margin:0,height:360,background:this.state.menu ? '#bbbbbb' : 'transparent',display:'flex',flexDirection:'column',width:'80%',position:'absolute',top:0,left:0,borderBottomRightRadius:50}}>
                        <div style={{ display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%',height:80,padding:15}}>
                            <img src={!this.state.menu ? hamburger :  hamburgerSelected} onClick={() => this.setState({ menu : !this.state.menu})} height='25px' width='auto' style={{ cursor:'pointer'}}></img>
                           {this.state.menu && (
                                <img src={logo} onClick={() =>  {this.props.redirect('College')}} alt='logo-flui' height='80px' width='auto' style={{ cursor:'pointer',marginTop:30}}></img>
                           )}
                        </div>
                        {this.state.menu && (
                            <div style={{ paddingLeft:20,marginTop:50}}>
                                <p className={'headerMenuPhone'}  onClick={() =>  {this.props.redirectPhone('Slider'); this.setState({ menu : false })}} >HOME</p>
                                <p className={'headerMenuPhone'} onClick={() =>  {this.props.redirectPhone('College'); this.setState({ menu : false })}} >FLUI COLLEGE</p>
                                <p className={'headerMenuPhone'} onClick={() =>  {this.props.redirectPhone('Contenido'); this.setState({ menu : false })}} >CONTENIDO</p>
                                <p className={'headerMenuPhone'} onClick={() =>  {this.props.redirectPhone('Padrinazgo'); this.setState({ menu : false })}}  >PADRINAZGO</p>
                                <p className={'headerMenuPhone'} onClick={() =>  {this.props.redirectPhone('Contacto'); this.setState({ menu : false })}}  >CONTACTO</p>
                            </div>
                        )}
                      
                        
                    </div>
                </AppBar>
            )
        }
       
    }
}
export default Header;
