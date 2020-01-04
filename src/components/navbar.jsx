import React, { Component } from "react";

class Navbar extends Component {
    render = () => {
        console.log("Hellooooo", this);

        return (
            <nav className="navbar navbar-light bg-light">
                <a href="" className="navbar-brand">
                    <span className="badge badge-pill badge-secondary">Total : {this.props.sum}</span>
                </a>
            </nav>
        );
    };
}

export default Navbar;
