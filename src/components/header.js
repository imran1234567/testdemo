import React, { Component } from 'react';
import "./header.css"

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg header">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <section className="header-main">
                            <div><a className="navbar-brand" href="/">Hidden brand</a></div>
                            <div>
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/">Pricing</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/">Markets</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/">Platforms</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/">Analysis</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <a href="/" className="login-btn">Login</a>
                                <a href="/" className="signup-btn">Signup</a>
                            </div>
                        </section>
                        {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled">Disabled</a>
                            </li>
                        </ul> */}

                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;
