import React, { Component } from 'react';
import Flickity from 'react-flickity-component';
const flickityOptions = {
    initialIndex: 2,
    cellAlign: 'left',
    percentPosition: false,
    pageDots: false
}
const flickityOptionsAllPost = {
    initialIndex: 2,
    cellAlign: 'center',
    percentPosition: false,
    pageDots: false,
    prevNextButtons: false,
}
const list = [
    { img: require('../assets/images/live_game_update_1.jpg').default, title: 'Short title' },
    { img: require('../assets/images/live_game_update_1.jpg').default, title: 'Short title' },
    { img: require('../assets/images/live_game_update_1.jpg').default, title: 'Short title' },
    { img: require('../assets/images/live_game_update_1.jpg').default, title: 'Short title' },
    { img: require('../assets/images/live_game_update_1.jpg').default, title: 'Short title' },
    { img: require('../assets/images/live_game_update_1.jpg').default, title: 'Short title' },
    { img: require('../assets/images/live_game_update_1.jpg').default, title: 'Short title' },
    { img: require('../assets/images/live_game_update_1.jpg').default, title: 'Short title' },
    { img: require('../assets/images/live_game_update_1.jpg').default, title: 'Short title' },
    { img: require('../assets/images/live_game_update_1.jpg').default, title: 'Short title' }
]
const listt = [
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
    { img: require('../assets/images/mountain.svg').default, title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.  At vero eos.' }

]
class Community extends Component {
    constructor() {
        super();
        this.state = {
            totalSlide: 0,
            indexCurrentSlide: 0, showMore: false
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
    renderLiveGameUpdate = () => {
        return list.map((x, index) => {
            return <div key={index} className="carousel-cell px-3 py-2 px-md-5">
                <div className="img-live-update rounded-circle mx-auto mb-2" style={{ backgroundImage: 'url(' + x.img + ')' }}>
                </div>
                <div>
                    <span className="m-0 title-live-update text-primary display-5">{x.title}</span>
                </div>
            </div>
        })
    }
    renderAllPost = () => {
        return listt.map((x, index) => {
            return <div key={index} className="carousel-cell p-2 mx-md-3 bg-info rounded-lg border">
                <div className="position-relative">
                    <a className="position-absolute facebook" href="#">
                        <svg id="facebook" xmlns="http://www.w3.org/2000/svg" width="32.583" height="32.583" viewBox="0 0 32.583 32.583">
                            <path id="Path_394" data-name="Path 394" d="M30.785,0H1.8A1.8,1.8,0,0,0,0,1.8V30.786a1.8,1.8,0,0,0,1.8,1.8H30.785a1.8,1.8,0,0,0,1.8-1.8h0V1.8a1.8,1.8,0,0,0-1.8-1.8Zm0,0" transform="translate(0 0)" fill="#4267b2" />
                            <path id="Path_395" data-name="Path 395" d="M216.323,104.987v-12.6h4.248l.636-4.932h-4.884V84.313c0-1.425.4-2.4,2.438-2.4h2.589v-4.4a34.806,34.806,0,0,0-3.794-.194c-3.755,0-6.324,2.291-6.324,6.5v3.63H207v4.932h4.232v12.6Zm0,0" transform="translate(-193.827 -72.403)" fill="#fff" />
                        </svg>
                    </a>
                    <a href="#" className="position-absolute circle-hover-light share rounded-circle bg-light p-2">
                        <svg id="Group_121" data-name="Group 121" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14.362 14.875">
                            <circle id="Ellipse_241" data-name="Ellipse 241" cx="2.565" cy="2.565" r="2.565" transform="translate(9.233 0)" fill="#141414" />
                            <ellipse id="Ellipse_242" data-name="Ellipse 242" cx="2.565" cy="2.821" rx="2.565" ry="2.821" transform="translate(9.233 9.233)" fill="#141414" />
                            <ellipse id="Ellipse_243" data-name="Ellipse 243" cx="2.565" cy="2.821" rx="2.565" ry="2.821" transform="translate(0 5.129)" fill="#141414" />
                            <path id="Path_206" data-name="Path 206" d="M1020.684,818.6l-7.779,4.4,7.779,4.4" transform="translate(-1009.958 -815.268)" fill="none" stroke="#141414" stroke-linejoin="round" stroke-width="1" />
                        </svg>

                    </a>
                    <div className="img-post rounded-circle mx-auto mb-2 py-4  " >
                        <img src={x.img} width="200" className="" />
                    </div>
                    <div className="text-left">
                        <span className="m-0 title-live-update text-primary display-6">{x.title}
                        </span>
                    </div>
                </div>
            </div>
        })
    }
    renderAllPostMobile = () => {
        return listt.map((x, index) => {
            return <>
            {index < 3 ? <div key={index} className="carousel-cell p-4 p-md-2 mx-md-3 bg-info rounded-lg border">
                <div className="position-relative">
                    <a className="position-absolute facebook" href="#">
                        <svg id="facebook" xmlns="http://www.w3.org/2000/svg" width="32.583" height="32.583" viewBox="0 0 32.583 32.583">
                            <path id="Path_394" data-name="Path 394" d="M30.785,0H1.8A1.8,1.8,0,0,0,0,1.8V30.786a1.8,1.8,0,0,0,1.8,1.8H30.785a1.8,1.8,0,0,0,1.8-1.8h0V1.8a1.8,1.8,0,0,0-1.8-1.8Zm0,0" transform="translate(0 0)" fill="#4267b2" />
                            <path id="Path_395" data-name="Path 395" d="M216.323,104.987v-12.6h4.248l.636-4.932h-4.884V84.313c0-1.425.4-2.4,2.438-2.4h2.589v-4.4a34.806,34.806,0,0,0-3.794-.194c-3.755,0-6.324,2.291-6.324,6.5v3.63H207v4.932h4.232v12.6Zm0,0" transform="translate(-193.827 -72.403)" fill="#fff" />
                        </svg>
                    </a>
                    <a href="#" className="position-absolute circle-hover-light share rounded-circle bg-light p-2">
                        <svg id="Group_121" data-name="Group 121" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14.362 14.875">
                            <circle id="Ellipse_241" data-name="Ellipse 241" cx="2.565" cy="2.565" r="2.565" transform="translate(9.233 0)" fill="#141414" />
                            <ellipse id="Ellipse_242" data-name="Ellipse 242" cx="2.565" cy="2.821" rx="2.565" ry="2.821" transform="translate(9.233 9.233)" fill="#141414" />
                            <ellipse id="Ellipse_243" data-name="Ellipse 243" cx="2.565" cy="2.821" rx="2.565" ry="2.821" transform="translate(0 5.129)" fill="#141414" />
                            <path id="Path_206" data-name="Path 206" d="M1020.684,818.6l-7.779,4.4,7.779,4.4" transform="translate(-1009.958 -815.268)" fill="none" stroke="#141414" stroke-linejoin="round" stroke-width="1" />
                        </svg>

                    </a>
                    <div className="img-post rounded-circle mx-auto mb-2 py-5 py-md-4  " >
                        <img src={x.img} width="200" className="" />
                    </div>
                    <div className="text-left">
                        <span className="m-0 title-live-update text-primary display-6">{x.title}
                        </span>
                    </div>
                </div>
            </div>:<></>}
            </>
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
    renderCustomNavigation = () => {
        return <ul className="m-0 list-unstyled d-flex justify-content-center text-primary align-items-center mt-4">
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
            <section className="community  py-5 ">
                <div className="community-content">
                    <div className="community-title container m-auto">
                        <h2 className="display-2 font-weight-bold text-primary text-left mb-4">
                            GAME COMMUNITY HUB
                </h2>
                    </div>
                    <div className="carousel-update container">
                        <p className="text-primary font-weight-bold text-left mb-3 display-4 d-none d-md-block">
                            Live Game Updates
                </p>
                        <Flickity
                            className={'carousel'}
                            elementType={'div'}
                            options={flickityOptions}
                            disableImagesLoaded={false}
                        >
                            {this.renderLiveGameUpdate()}
                        </Flickity>
                    </div>

                    <div className=" container row mx-auto justify-content-between align-items-center mt-5">
                        <span className="text-primary font-weight-bold display-4">All Posts</span>
                        <div className="d-flex   align-items-center">
                            <a className="icon-social bg-primary twitter mr-2 rounded-circle" href="#">
                                <svg id="Group_1145" data-name="Group 1145" xmlns="http://www.w3.org/2000/svg" width="23.242" height="18.888" viewBox="0 0 23.242 18.888">
                                    <path id="Path_398" data-name="Path 398" d="M48.345,36.264a9.514,9.514,0,0,1-2.739.75,4.781,4.781,0,0,0,2.1-2.638,9.546,9.546,0,0,1-3.028,1.157,4.772,4.772,0,0,0-8.126,4.35A13.536,13.536,0,0,1,26.721,34.9,4.774,4.774,0,0,0,28.2,41.267a4.735,4.735,0,0,1-2.16-.6c0,.02,0,.041,0,.06a4.771,4.771,0,0,0,3.825,4.675,4.787,4.787,0,0,1-2.153.083A4.773,4.773,0,0,0,32.163,48.8a9.626,9.626,0,0,1-7.06,1.974A13.56,13.56,0,0,0,45.979,39.349c0-.207,0-.413-.014-.617a9.669,9.669,0,0,0,2.38-2.468Z" transform="translate(-25.103 -34.028)" fill="#fff" />
                                </svg>


                            </a>
                            <a className="icon-social bg-primary  insta mr-2 rounded" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="29.383" height="29.407" viewBox="0 0 29.383 29.407">
                                    <path id="Path_397" data-name="Path 397" d="M81.53,66.8c-6.018,0-11.732-.535-13.915,5.066-.9,2.314-.771,5.318-.771,9.621,0,3.775-.121,7.324.771,9.619,2.178,5.605,7.938,5.068,13.911,5.068,5.762,0,11.7.6,13.913-5.068.9-2.337.771-5.3.771-9.619,0-5.738.317-9.442-2.466-12.223C90.926,66.444,87.116,66.8,81.523,66.8Zm-1.316,2.647c12.552-.02,14.15-1.415,13.268,17.97-.313,6.856-5.534,6.1-11.951,6.1-11.7,0-12.037-.335-12.037-12.04,0-11.842.928-12.027,10.719-12.037Zm9.155,2.438a1.762,1.762,0,1,0,1.762,1.762A1.762,1.762,0,0,0,89.369,71.881Zm-7.839,2.06a7.542,7.542,0,1,0,7.539,7.542,7.542,7.542,0,0,0-7.539-7.542Zm0,2.647c6.472,0,6.48,9.791,0,9.791S75.049,76.588,81.53,76.588Z" transform="translate(-66.838 -66.783)" fill="#fff" />
                                </svg>

                            </a>
                            <a className="icon-social  bg-primary facebook position-relative rounded mr-0 mr-md-2" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="17.404" height="33.549" viewBox="0 0 17.404 33.549">
                                    <path id="Path_395" data-name="Path 395" d="M218.307,110.873V95.591h5.152l.772-5.982h-5.924V85.8c0-1.728.48-2.905,2.957-2.905h3.14V77.559a42.212,42.212,0,0,0-4.6-.235c-4.554,0-7.67,2.779-7.67,7.883v4.4H207v5.981h5.133v15.282Zm0,0" transform="translate(-207 -77.324)" fill="#fff" />
                                </svg>


                            </a>
                            <form className="form-search d-none d-md-block">
                                <div className="form-group m-0 position-relative">
                                    <input placeholder="search" name="search" id="search" className="form-control pr-4" />
                                    <svg id="Search" xmlns="http://www.w3.org/2000/svg" width="16.9" height="16.9" viewBox="0 0 16.9 16.9">
                                        <path id="Path_99" data-name="Path 99" d="M16.9,15.412,13.392,11.9A7.277,7.277,0,0,0,14.881,7.44,7.394,7.394,0,0,0,7.44,0,7.394,7.394,0,0,0,0,7.44a7.394,7.394,0,0,0,7.44,7.44A7.277,7.277,0,0,0,11.9,13.392L15.412,16.9ZM2.126,7.44A5.263,5.263,0,0,1,7.44,2.126,5.263,5.263,0,0,1,12.755,7.44,5.263,5.263,0,0,1,7.44,12.755,5.263,5.263,0,0,1,2.126,7.44Z" fill="#2699fb" />
                                    </svg>
                                </div>
                            </form>
                        </div>
                        <form className="form-search d-block d-md-none col-12 p-0  mt-2">
                            <div className="form-group m-0 position-relative">
                                <input placeholder="search" name="search" id="search" className="form-control pr-4" />
                                <svg id="Search" xmlns="http://www.w3.org/2000/svg" width="16.9" height="16.9" viewBox="0 0 16.9 16.9">
                                    <path id="Path_99" data-name="Path 99" d="M16.9,15.412,13.392,11.9A7.277,7.277,0,0,0,14.881,7.44,7.394,7.394,0,0,0,7.44,0,7.394,7.394,0,0,0,0,7.44a7.394,7.394,0,0,0,7.44,7.44A7.277,7.277,0,0,0,11.9,13.392L15.412,16.9ZM2.126,7.44A5.263,5.263,0,0,1,7.44,2.126,5.263,5.263,0,0,1,12.755,7.44,5.263,5.263,0,0,1,7.44,12.755,5.263,5.263,0,0,1,2.126,7.44Z" fill="#2699fb" />
                                </svg>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="carousel-all-post mt-4 d-none d-md-block">

                    <Flickity flickityRef={c => this.flkty = c}
                        className={'carousel'}
                        elementType={'div'}
                        options={flickityOptionsAllPost}
                        disableImagesLoaded={false}
                    >
                        {this.renderAllPost()}
                    </Flickity>
                    {this.renderCustomNavigation()}
                </div>
                <div className="carousel-all-post mt-4 d-block d-md-none">
                    <div className="carousel position-relative">
                        {this.renderAllPostMobile()}
                        <div className="view-more w-100  fixed-bottom position-absolute">
                            <button type="button" className="btn bg-light color-primary text-primary border px-5  display-5">More</button>
                        </div>
                    </div>


                </div>
            </section>
        );
    }
};

export default Community;