import React from 'react';
import SideBar from './SideBar';
import NavBar from './NavBar';
import connect from 'react-redux';

class AllProductsScreen extends React.Component {
    componentDidMount() {
        fetch('http://0.tcp.ngrok.io:18732/product')
        .then(res => {
            return res.json()
        })
            .then(productsList => { 
                return console.log(JSON.stringify(productsList))
            })
    }
    
    render() {
        return <ProductsList  {...this.props}/>
    }
}


let ProductsList = (props) => {
    console.log()
    return (
        <div>
            <SideBar />
            <NavBar products={props.products}/>
        </div>
    );
};

// let AllProductsScreen = connect(state => ({ products: state.prdoucts }))(ProductsList); 

export default AllProductsScreen;
