import './Navbar.css';
import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="container-one">
                <div className="wrap">
                <a href="#" className="navbar-brand">
                    <img src="./images/menu.png" className="navbar-img" alt=""/>
                </a>
                    <ul>
                        <li><a href="#">Golden Coral - Addison</a></li>

                        <li className="icons">
                            <img src="./images/filter.png" className="icon icon1" alt="Error"/>FILTER
                            <img src="./images/search.png" className="icon" alt="Error"/>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Navbar;