import React, { Component } from 'react';
import Flickity from 'react-flickity-component';
const flickityOptions = {
    initialIndex: 2,
    cellAlign: 'center',
    percentPosition: false,
    pageDots: false,
    
    prevNextButtons: false
}
const list = [
    { img: require('../assets/images/mountain.svg').default, title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.  At vero eos.' },
    { img: require('../assets/images/mountain.svg').default, title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.  At vero eos.' },
    { img: require('../assets/images/mountain.svg').default, title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.  At vero eos.' },
    { img: require('../assets/images/mountain.svg').default, title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.  At vero eos.' },
    { img: require('../assets/images/mountain.svg').default, title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.  At vero eos.' },
    { img: require('../assets/images/mountain.svg').default, title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.  At vero eos.' },
    { img: require('../assets/images/mountain.svg').default, title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.  At vero eos.' },
    { img: require('../assets/images/mountain.svg').default, title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.  At vero eos.' },
    { img: require('../assets/images/mountain.svg').default, title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.  At vero eos.' },
    { img: require('../assets/images/mountain.svg').default, title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.  At vero eos.' },
   
]
class Exclusive extends Component {
    constructor() {
        super();
        this.state = {
            totalSlide: 0,
            indexCurrentSlide: 0
        }
    }
    componentDidMount = () => {
        this.flkty.on('ready', () => {
            this.setState({
                totalSlide: this.flkty.slides.length,
                indexCurrentSlide: this.flkty.selectedIndex + 1
            })
        })
        this.flkty.on('change', () => {
            this.setState({
                totalSlide: this.flkty.slides.length,
                indexCurrentSlide: this.flkty.selectedIndex + 1
            })
        })

    }
    next = () => {
        if (this.flkty) {
            this.flkty.next()
        }
    }
    previous = () => {
        if (this.flkty) {
            this.flkty.previous()
        }
    }
    renderCarousel = () => {
        return list.map((x, index) => {
            return <div key={index} className="carousel-cell  p-2 mx-3 bg-info rounded-lg border">
                <div className="position-relative h-100 w-100 d-flex align-items-center justify-content-center">

                    <a href={x.img} download className="position-absolute  circle-hover-light download  icon-download rounded-circle bg-light p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 18.462 16.837">
                            <g id="Side_Buttons" data-name="Side Buttons" transform="translate(-15.425 -13.498)">
                                <g id="Group_123" data-name="Group 123" transform="translate(4.197 4.016)">
                                    <path id="Path_328" data-name="Path 328" d="M0,10.062V0" transform="translate(20.428 10.481)" fill="none" stroke="#141414" stroke-linecap="round" stroke-width="2" />
                                    <path id="Path_329" data-name="Path 329" d="M-1315.015-710.748l3.133,3.289,2.976-3.289" transform="translate(1332.278 728.464)" fill="none" stroke="#141414" stroke-linecap="round" stroke-width="2" />
                                    <path id="Path_330" data-name="Path 330" d="M16.462-2.8V0H0V-2.8" transform="translate(12.229 25.318)" fill="none" stroke="#141414" stroke-linecap="round" stroke-width="2" />
                                </g>
                            </g>
                        </svg>



                    </a>
                    <div className="  rounded-circle mx-auto  py-5  " >
                        <img src={x.img} className="" />
                    </div>

                </div>
            </div>
        })
    }
    renderCustomNavigation = () => {
        return <ul className="m-0 list-unstyled d-flex justify-content-center text-primary align-items-center mt-5">
            <li onClick={this.previous} className="pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="40" viewBox="0 0 48 40">
                    <path id="arrow" d="M37.379,12.552a2,2,0,0,0-2.758,2.9L49.963,30H10a2,2,0,0,0,0,4H49.9L34.621,48.552a2,2,0,1,0,2.758,2.9l17.449-16.62a4,4,0,0,0-.035-5.69Z" transform="translate(56 52) rotate(180)" fill="#2699fb" opacity={this.state.indexCurrentSlide === 1 ? '0.45' : '1'} />
                </svg>

            </li>
            <li className="mx-4 h5 "><span className="font-weight-bold " >{this.state.indexCurrentSlide.toString().padStart(2, '0')}</span>/<span>{this.state.totalSlide.toString().padStart(2, '0')}</span></li>
            <li onClick={this.next} className="pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="40" viewBox="0 0 48 40">
                    <path id="arrow" d="M37.379,12.552a2,2,0,0,0-2.758,2.9L49.963,30H10a2,2,0,0,0,0,4H49.9L34.621,48.552a2,2,0,1,0,2.758,2.9l17.449-16.62a4,4,0,0,0-.035-5.69Z" transform="translate(-8 -12)" fill="#2699fb" opacity={this.state.indexCurrentSlide === this.state.totalSlide ? '0.45' : '1'} />
                </svg>

            </li>
        </ul>
    }
    render() {
        return (
            <section className="exclusive py-5 d-flex align-items-center justify-content-center">
                <div className="exclusive-content w-100">
                    <div className='exclusive-title container m-auto text-left'>
                        <h2 className="display-2 font-weight-bold text-primary text-left mb-4">
                            Exclusive Game Content
                    </h2>
                        <p className="text-primary display-5 mb-5">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                         invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.</p>
                    </div>
                    <div className="carousel-all-post mt-4  ">

                        <Flickity flickityRef={c => this.flkty = c}
                            className={'carousel'}
                            elementType={'div'}
                            options={flickityOptions}
                            disableImagesLoaded={false}
                        >
                            {this.renderCarousel()}
                        </Flickity>
                        {this.renderCustomNavigation()}
                    </div>

                </div>
            </section>
        )
    }
};

export default Exclusive;