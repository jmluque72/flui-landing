import React from "react";
import PropTypes from "prop-types";
export default class Loading extends React.Component {

    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {
        };
    }

    render() {
        if( this.props.state === true){
            return ( 
                <div>
                    <div style={{backgroundColor:'rgba(0,0,0,0.4)',position:'fixed',left:0,top:0,right:0,bottom:0,display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <div class="spinner-border" role="status" style={{position:'fixed',height:50,width:50,color:'#d13852',opacity:1}}>
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>

                </div>
            )
        }else{
            return (
                <div></div>
            )

        }
        
        
    }
}

