import React from 'react';
import { connect } from 'react-redux';

const CategoriesList = (props) => {
    let newArray = props.categories.map(category => {
        return category.title
    });
    return <div>{newArray}</div>;
};

let SideBar = connect(state => ({ categories: state.categories }))(CategoriesList); 

export default SideBar;