import React, { Component } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import "./home.css";
class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://ik.imagekit.io/xnqvm1iiw/pexels-energepiccom-159888_DPX1CEFn6.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650127054739" className="d-block w-100" alt="cap" />
                            <div class="carousel-caption d-none d-md-block custom-caption">
                                <h1 className="banner-text">In a world of probabilities, trade the possibilities</h1>
                                <p>Some representative placeholder content for the first slide.</p>
                                <div className="banner-input">
                                    <input type="text" placeholder="Email" class="form-control form-control-lg banner-input-text" />
                                    <div className="banner-button">
                                        <div className="banner-button-container">
                                            <a href="/" className="baneer-button" target="_self">Trade now</a>
                                        </div>
                                        <div>
                                            <a href="/" className="try-demo"> or Try a demo</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://ik.imagekit.io/xnqvm1iiw/pexels-pixabay-210607_8V68YedK7.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650127160893" className="d-block w-100" alt="cap" />
                            <div class="carousel-caption d-none d-md-block custom-caption">
                                <h1 className="banner-text">When markets are volatile, opportunity can be abundant. </h1>
                                <p>Some representative placeholder content for the first slide.</p>
                                <div className="banner-input">
                                    <input type="text" placeholder="Email" class="form-control form-control-lg banner-input-text" />
                                    <div className="banner-button">
                                        <div className="banner-button-container">
                                            <a href="/" className="baneer-button" target="_self">Trade now</a>
                                        </div>
                                        <div>
                                            <a href="/" className="try-demo"> or Try a demo</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://ik.imagekit.io/xnqvm1iiw/pexels-anna-nekrashevich-6801874_zhVNNSA_d.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650127217120" className="d-block w-100" alt="cap" />
                            <div class="carousel-caption d-none d-md-block custom-caption">
                                <h1 className="banner-text">You need a Broker you can trust. Make your move with Pepperstone.</h1>
                                <p>Some representative placeholder content for the first slide.</p>
                                <div className="banner-input">
                                    <input type="text" placeholder="Email" class="form-control form-control-lg banner-input-text" />
                                    <div className="banner-button">
                                        <div className="banner-button-container">
                                            <a href="/" className="baneer-button" target="_self">Trade now</a>
                                        </div>
                                        <div>
                                            <a href="/" className="try-demo"> or Try a demo</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid mid-container">
                    <div className="table-element">
                        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li class="nav-item tabs-element" role="presentation">
                                <button class="nav-link tab-button active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Popular</button>
                            </li>
                            <li class="nav-item tabs-element" role="presentation">
                                <button class="tab-button nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Recenly Added</button>
                            </li>
                            <li class="nav-item tabs-element" role="presentation">
                                <button class="tab-button nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">FX</button>
                            </li>
                            <li class="nav-item tabs-element" role="presentation">
                                <button class="tab-button nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Comodities</button>
                            </li>
                            <li class="nav-item tabs-element" role="presentation">
                                <button class="tab-button nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Cryptos</button>
                            </li>
                            <li class="nav-item tabs-element" role="presentation">
                                <button class="tab-button nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Indices</button>
                            </li>
                        </ul>
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="header-tr">Instrument</th>
                                            <th scope="col" className="header-tr">Bid</th>
                                            <th scope="col" className="header-tr">Ask</th>
                                            <th scope="col" className="header-tr">Spread</th>
                                            <th scope="col" className="header-tr">Action</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td>
                                                <button className="trade-table-btn">Trade</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            <td>
                                                <button className="trade-table-btn">Trade</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td colspan="2">Larry the Bird</td>
                                            <td>@twitter</td>
                                            <td>
                                                <button className="trade-table-btn">Trade</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td colspan="2">Larry the Bird</td>
                                            <td>@twitter</td>
                                            <td>
                                                <button className="trade-table-btn">Trade</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td colspan="2">Larry the Bird</td>
                                            <td>@twitter</td>
                                            <td>
                                                <button className="trade-table-btn">Trade</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td colspan="2">Larry the Bird</td>
                                            <td>@twitter</td>
                                            <td>
                                                <button className="trade-table-btn">Trade</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td colspan="2">Larry the Bird</td>
                                            <td>@twitter</td>
                                            <td>
                                                <button className="trade-table-btn">Trade</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">This is some placeholder content the Contact tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.</div>
                            <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">This is some placeholder content the Contact tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.</div>
                        </div>
                    </div>
                    <div className="side-decription">
                        <div>
                            <p className="text-bold">WHY PEPPERSTONE</p>
                            <h1 className="body-text">
                                Discover opportunity on 1200+ instruments
                            </h1>
                            <p>Trade our extensive range of CFDs on FX, Commodities, Cryptocurrencies, Shares, ETFs and more. Low costs, fast execution and 24/7 support. It doesn't get much better than this. </p>
                            <button className="view-btn">View our spreads</button>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="https://ik.imagekit.io/xnqvm1iiw/pexels-alesia-kozik-6770610_IUFf3sNDk.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650162439825" className="mid-banner" alt="mid"/>
                </div>
                <div className="list-item">
                    <p style={{ textAlign: 'center' }}>WHY PEPPERSTONE?</p>
                    <h2 style={{ textAlign: 'center', fontWeight: 600 }}>Tired of your current broker? We get it.</h2>
                    <div class="container">
                        <div class="row">
                            <div class="col card-item">
                                <div className="card-text">
                                    <h2>Tight spreads</h2>
                                    <p>Enjoy spreads as low as 0.0 pips^ with deep liquidity and no requotes.</p>
                                    <a href="/" className="learn-more">Learn more</a>
                                </div>
                            </div>
                            <div class="col card-item">
                                <div className="card-text">
                                    <h2>Tight spreads</h2>
                                    <p>Enjoy spreads as low as 0.0 pips^ with deep liquidity and no requotes.</p>
                                    <a href="/" className="learn-more">Learn more</a>
                                </div>
                            </div>
                        </div>
                        <div class="row" style={{marginTop:'15px'}}>
                            <div class="col card-item">
                                <div className="card-text">
                                    <h2>Tight spreads</h2>
                                    <p>Enjoy spreads as low as 0.0 pips^ with deep liquidity and no requotes.</p>
                                    <a href="/" className="learn-more">Learn more</a>
                                </div>
                            </div>
                            <div class="col card-item">
                                <div className="card-text">
                                    <h2>Tight spreads</h2>
                                    <p>Enjoy spreads as low as 0.0 pips^ with deep liquidity and no requotes.</p>
                                    <a href="/" className="learn-more">Learn more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Home;