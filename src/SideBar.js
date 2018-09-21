import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const CategoriesList = (props) => {
    return <div>
            {props.categories.map(category => {
                return <NavLink to={`/category/${category.id}`} key={category.id}>
                {category.title}
                </NavLink>
            })}
        </div>;
};

let SideBar = connect(state => ({ categories: state.categories }))(CategoriesList); 

export default SideBar;