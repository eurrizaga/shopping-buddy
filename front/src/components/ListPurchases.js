import React, { Component } from 'react';
import { connect } from 'react-redux';

class ListPurchases extends Component {
    constructor(props){
        super(props);
        this.renderListItems = this.renderListItems.bind(this);
    }
    renderListItems(){
        return this.props.purchases.map((item) => {
            return (<li key={item}>{item}</li>)
        })
    }
    render(){
        return (<div>
            <button onClick={() => {this.props.history.push('/');}}>Go back</button>
            <ul>
                {this.renderListItems()}
            </ul>
        </div>)
    }
    
}
function mapStateToProps(state){
    return { purchases: state.purchases }
}
export default connect(mapStateToProps)(ListPurchases);