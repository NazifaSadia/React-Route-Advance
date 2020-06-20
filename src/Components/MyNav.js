import React, { Component } from 'react';
import {Route, Link, BrowserRouter as Router} from '../../node_modules/react-router-dom';

class MyNav extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/page1">Page1</Link></li>
                    <li><Link to="/page2">Page2</Link></li>
                    <li><Link to="/page3">Page3</Link></li>
                </ul>
            </div>
        );
    }
}

export default MyNav;