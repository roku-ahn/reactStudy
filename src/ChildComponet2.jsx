import React from "react";
import PropTypes from 'prop-types';


class ChildComponet2 extends React.Component{
    render() {
        const {
            objVal,
            requiredStringVal,
        } = this.props;

        return (
        <div> 
            <div>objVal : {String(Object.entries(objVal)) } </div>
            <div>requiredStringVal : {requiredStringVal} </div>
        </div>);                  
    }
}

[ChildComponet2].PropTypes ={
    objVal : PropTypes.shape(
        {
            name : PropTypes.string,
            age : PropTypes.number,
        }
    ),
    requiredStringVal : PropTypes.string.isRequired,
}

export default ChildComponet2;