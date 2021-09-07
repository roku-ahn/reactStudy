
import React from "react";
import PropTypes from 'prop-types';

class  MyCompent extends React.Component{
    render(){
        const name = this.props.name;
        return(
            <div className = "message-contatiner">
               <span> {name}</span>
            </div>
        )        
    }
}

//type setting
[MyCompent].PropTypes ={
    name : PropTypes.string,
};

export default MyCompent;
