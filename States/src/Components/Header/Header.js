import React from 'react';
import './Header.css'
import PropTypes from 'prop-types';
const Header = (props) => {
    return (<div className="headDesign"><h2 className="headName">{props.children}</h2></div>);
}

Header.propTypes = {
    children: PropTypes.number
  };
export { Header }