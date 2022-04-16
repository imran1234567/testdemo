import React, { Component } from 'react';
import Header from '../components/header';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
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
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://ik.imagekit.io/xnqvm1iiw/pexels-pixabay-210607_8V68YedK7.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650127160893" className="d-block w-100" alt="cap" />
                            <div class="carousel-caption d-none d-md-block custom-caption">
                                <h1 className="banner-text">When markets are volatile, opportunity can be abundant. </h1>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://ik.imagekit.io/xnqvm1iiw/pexels-anna-nekrashevich-6801874_zhVNNSA_d.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650127217120" className="d-block w-100" alt="cap" />
                            <div class="carousel-caption d-none d-md-block custom-caption">
                                <h1 className="banner-text">You need a Broker you can trust. Make your move with Pepperstone.</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;