import React, { Component } from 'react';
import { connect } from 'react-redux';
//import * as actions from 'actions';
class PurchaseForm extends Component{
    render(){
        return (<div>
            <button onClick={() => {this.props.history.push('/');}}>Go back</button>
            nueva compra
        </div>)
    }
}
export default connect(null)(PurchaseForm);