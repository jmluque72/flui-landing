import React from "react";
import logoWhatsApp from '../assets/whatsapp.svg'

class WhatsAppLink extends React.Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {

        };
    }
    link(){
        window.open(
            'https://api.whatsapp.com/send?phone=5493515211915',
            '_blank' // <- This is what makes it open in a new window.
          );
    }
    render() {
        return (
            <div onClick={() => this.link()} style={{cursor:'pointer',position:'fixed',bottom:'5%',right:'5%',width:60,height:60,borderRadius:'100%',background:'#4caf50',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <img src={logoWhatsApp} height='35px' width='auto'></img>
            </div>
        );
    }
}

export default WhatsAppLink;
