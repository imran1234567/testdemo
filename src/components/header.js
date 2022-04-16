import React, { Component } from 'react';
import "./header.css"

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorChange: false
        }
    }

    changeNavbarColor = () =>{
        if(window.scrollY >= 80){
            this.setState({
                colorChange : true
            })
        }else{
            this.setState({
                colorChange: false
            })
        }
    }


    render() {
        window.addEventListener('scroll', this.changeNavbarColor);
        return (
            <nav className="navbar fixed-top navbar-expand-lg header" style={{backgroundColor:this.state.colorChange ? 'black' : 'transparent'}}>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <section className="header-main">
                            <div><a className="navbar-brand" href="/"><img src="https://eu-images.contentstack.com/v3/assets/bltaec35894448c7261/blt019398d0069c7adb/61f75013935106184ab7add1/pepperstone-logo-inverse-rgb.svg/?" alt="new"/></a></div>
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
