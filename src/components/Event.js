import React, { Component } from 'react';

import Flickity from 'react-flickity-component';
const flickityOptions = {
    initialIndex: 0,
    cellAlign: 'center',
    percentPosition: false,
    pageDots: false,
    prevNextButtons: false,
    autoPlay: 3000,
    pauseAutoPlayOnHover: false
}
const list = [
    { img: require('../assets/images/mountain.svg').default, title: 'SHORT TITLE <br> HERE' },
    { img: require('../assets/images/mountain.svg').default, title: 'SHORT TITLE <br> HERE' },
    { img: require('../assets/images/mountain.svg').default, title: 'SHORT TITLE <br> HERE' },
    { img: require('../assets/images/mountain.svg').default, title: 'SHORT TITLE <br> HERE' },
    { img: require('../assets/images/mountain.svg').default, title: 'SHORT TITLE <br> HERE' }
]
class Event extends Component {
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
        document.getElementsByClassName('carousel-event')[0].addEventListener('click', () => {
            this.flkty.playPlayer();
        })
        this.flkty.on('change', () => {
            this.setState({
                totalSlide: this.flkty.slides.length,
                indexCurrentSlide: this.flkty.selectedIndex + 1
            })
        })

    }
    renderCarousel = () => {
        return list.map((x, index) => {
            return <div key={index} className="carousel-cell mx-4 bg-primary rounded-lg border">
                <div className="position-relative  p-2 h-100 ">
                    <div className="carousel-cell-bg-gradient position-absolute"></div>
                    <a href="#" className="position-absolute circle-hover-light  share d-none d-md-block rounded-circle bg-light p-2">
                        <svg id="Group_121" data-name="Group 121" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14.362 14.875">
                            <circle id="Ellipse_241" data-name="Ellipse 241" cx="2.565" cy="2.565" r="2.565" transform="translate(9.233 0)" fill="#141414" />
                            <ellipse id="Ellipse_242" data-name="Ellipse 242" cx="2.565" cy="2.821" rx="2.565" ry="2.821" transform="translate(9.233 9.233)" fill="#141414" />
                            <ellipse id="Ellipse_243" data-name="Ellipse 243" cx="2.565" cy="2.821" rx="2.565" ry="2.821" transform="translate(0 5.129)" fill="#141414" />
                            <path id="Path_206" data-name="Path 206" d="M1020.684,818.6l-7.779,4.4,7.779,4.4" transform="translate(-1009.958 -815.268)" fill="none" stroke="#141414" stroke-linejoin="round" stroke-width="1" />
                        </svg>

                    </a>
                    <div className="img-post rounded-circle mx-auto mb-2 py-5  " >
                        <img src={x.img} className="mw-100" />
                    </div>
                    <div className="position-absolute fixed-bottom  px-2 pt-2 pb-5 p-md-2  carousel-cell-content row m-0">
                        <div className="text-left col-12 ">
                            <span className="m-0 title-live-update display-3 text-light font-weight-bold  position-relative d-block pb-3" dangerouslySetInnerHTML={{ __html: x.title }}>
                            </span>
                            <p className="text-light pt-3 display-6">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore </p>
                        </div>
                        <button className=" mx-auto btn text-light    w-75 text-center align-self-end display-2 font-weight-bold py-3 border rounded-0 border-light">READ MORE</button>
                    </div>
                </div>
            </div>
        })
    }
    next = () => {
        if (this.flkty) {
            this.flkty.next()
        }
    }
    select = (ind) => {
        if (this.flkty) {
            this.flkty.stopPlayer();
            this.flkty.playPlayer();
            this.flkty.select(ind)
        }
    }
    renderCustomNavigation = () => {
        return list.map((x, index) => {
            return <li key={index} onClick={this.select.bind(this, index)} className={this.state.indexCurrentSlide === index + 1 ? `active pointer rounded-circle  mx-1  position-relative` : 'pointer rounded-circle   mx-1  position-relative'}>
                {(index + 1).toString().padStart(2, '0')}
                <div className="circle" id="container">
                    <div id="halfclip">
                        <div class="halfcircle" id="clipped">
                        </div>
                    </div>
                    <div class="halfcircle" id="fixed">
                    </div>
                </div>
            </li>
        })

    }
    render() {
        return (
            <section className="event bg-info py-5 ">
                <div className="event-content">
                    <div className='event-title container m-auto text-left'>
                        <h2 className="display-2 font-weight-bold text-primary text-left mb-4">
                            Special Events & Promotional
                    </h2>
                        <p className="text-primary display-5">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labo
                        re et dolore magna aliquyam erat, sed diam voluptua. At vero eos.</p>
                    </div>

                    <div className="carousel-event mt-4  ">
                        <Flickity flickityRef={c => this.flkty = c}
                            className={'carousel carousel-event'}
                            elementType={'div'}
                            options={flickityOptions}
                            disableImagesLoaded={false}
                        >
                            {this.renderCarousel()}
                        </Flickity>
                        <ul className="m-0 list-unstyled d-flex justify-content-center text-primary align-items-center mt-4">

                            {this.renderCustomNavigation()}
                        </ul>
                    </div>
                </div>

            </section>
        )
    }
};

export default Event;