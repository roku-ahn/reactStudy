
import React from "react";
import PropTypes from 'prop-types';


class ChildComponet extends React.Component{
    render() {
        const {
            boolValue,
            numValue,
            arrayValue,
            objValue,
            nodeValue,
            funcValue,
        } = this.props;

        return (
            <div>
                <button color = 'blue' shadowSize = {2} 
                onClick = {() => alert('click')}> Click me</button> <br></br>
                <span>boolean : {boolValue.toString()} </span> <br/>
                <span>number : {numValue}</span> <br/>
                <span>arrayValue : {arrayValue}</span> <br/>                
                <span>nodeValue : {nodeValue}</span> <br/>
                <span>objValue : {objValue.name} , {objValue.age} </span> <br/>
                <span>funcValue : {funcValue}</span>  <br/>      

            </div>
        )
    }
}



//type setting
[ChildComponet].PropTypes ={    
    boolValue : PropTypes.bool,
    numValue: PropTypes.number,
    arrayValue: PropTypes.arrayOf(PropTypes.number),
    objValue : PropTypes.object,
    nodeValue: PropTypes.node,
    funcValue: PropTypes.func,    
};

export default ChildComponet;