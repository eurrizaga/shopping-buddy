import React, { Component } from 'react';

class MainView extends Component{
    constructor(props){
        super(props);
        this.newPurchase = this.newPurchase.bind(this);
        this.listPurchases = this.listPurchases.bind(this);
    }
    newPurchase(){
        this.props.history.push('/edit');
    }
    listPurchases(){
        this.props.history.push('/list');
    }
    render(){
        return (<div>
            <button onClick={this.newPurchase}>Nueva compra</button>
            <button onClick={this.listPurchases}>Ver compras</button>
        </div>);    
    }
}
export default MainView;