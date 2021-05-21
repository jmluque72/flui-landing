import React from "react";
import PropTypes from "prop-types";
import Header from './Header.js'
import Slider from './Slider.js'
import College from "./College.js";
import UpGrade from "./UpGrade.js";
import Grid from '@material-ui/core/Grid';
import './Main.css'
import Contenido from "./Contenido.js";
import Padrinazgo from './Padrinazgo.js'
import Contacto from './Contacto.js'
import Footer from './Footer.js'

class HomeView extends React.Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {
        
        };
    }
    redirect(type){
        var num;
        const height = window.innerHeight
        switch(type){
            case 'Slider':
                num = 0;
                break;
            case 'College':
                num = height;
                break;
            case 'Contenido':
                num = height*2 + 50;
                break;
            case 'Padrinazgo':
                num = height*5;
                break;
            case 'Contacto':
                num = height*6  +20;
                break;
            default:
                break;
        }
        window.scroll({
            top: num - 60,
            left: 0,
            behavior: 'smooth'
          })
    }
    redirectPhone(type){
        var num;
        const height = window.innerHeight
        switch(type){
            case 'Slider':
                num = 0;
                break;
            case 'College':
                num = height + 10;
                break;
            case 'Contenido':
                num = height*2 + 100 ;
                break;
            case 'Padrinazgo':
                num = height*5 + 580;
                break;
            case 'Contacto':
                num = height*6 + 980;
                break;
            default:
                break;
        }
        window.scroll({
            top: num - 60,
            left: 0,
            behavior: 'smooth'
          })
    }

    render() {
        return (
            <div style={{flexDirection: 'row'}}>
                <Header state='home' redirect={this.redirect} redirectPhone={this.redirectPhone}  />
                <Slider />
                <College />
                <UpGrade />
                <Contenido />
                <Padrinazgo />
                <Contacto />
                <Footer redirect={this.redirect} redirectPhone={this.redirectPhone}/> 
            </div>
        );
    }
}
export default HomeView;
