import React from 'react';
import nintendo from '../assets/images/nintendo.svg';
import microsoft from '../assets/images/microsoft.svg';
import steam from '../assets/images/steam.svg';
const Banner = () => {
    return (
        <section className="banner bg-primary">
            <div className="banner-content h-100 row m-0 flex-column">
                <div className="container  bn">
                    <div className="row m-0 h-100">
                        <div className="col-12 d-flex align-items-end justify-content-center bg-banner px-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="350.991" height="187.885" viewBox="0 0 350.991 187.885">
                                <g id="Group_436" data-name="Group 436" transform="translate(10.778 8.215)" opacity="0.3">
                                    <g id="Polygon_2" data-name="Polygon 2" transform="translate(-0.212 -0.329)" fill="#fff">
                                        <path d="M 292.2830505371094 177.5 L 287 177.5 L 0 177.5 L -5.28303861618042 177.5 L -1.933153867721558 173.4148101806641 L 141.5668487548828 -1.585192322731018 L 143.5 -3.942730665206909 L 145.4331512451172 -1.585192322731018 L 288.9331665039063 173.4148101806641 L 292.2830505371094 177.5 Z" stroke="none" />
                                        <path d="M 143.5 0 L 0 175 L 287 175 L 143.5 0 M 143.5 -7.885452270507813 L 147.3663330078125 -3.17041015625 L 290.8663330078125 171.82958984375 L 297.5660705566406 180 L 287 180 L 0 180 L -10.56607055664063 180 L -3.8663330078125 171.82958984375 L 139.6336669921875 -3.17041015625 L 143.5 -7.885452270507813 Z" stroke="none" fill="#bce0fd" />
                                    </g>
                                    <g id="Polygon_1" data-name="Polygon 1" transform="translate(176.788 79.671)" fill="#fff">
                                        <path d="M 159.2126617431641 97 L 155 97 L 1.4210854715202e-14 97 L -4.212666511535645 97 L -1.549729108810425 93.73574829101563 L 75.95027160644531 -1.264250040054321 L 77.5 -3.16391658782959 L 79.04972839355469 -1.264250040054321 L 156.5497283935547 93.73574829101563 L 159.2126617431641 97 Z" stroke="none" />
                                        <path d="M 77.5 0 L 0 95 L 155 95 L 77.5 0 M 77.5 -6.327842712402344 L 80.59945678710938 -2.52850341796875 L 158.0994567871094 92.47149658203125 L 163.4253387451172 99 L 155 99 L 0 99 L -8.425338745117188 99 L -3.099456787109375 92.47149658203125 L 74.40054321289063 -2.52850341796875 L 77.5 -6.327842712402344 Z" stroke="none" fill="#bce0fd" />
                                    </g>
                                </g>
                            </svg>

                        </div>
                        <div className="col-10 col-sm-11 col-md-7 text-left text-light  d-flex align-items-end justify-content-center pb-5">
                            <div>
                                <h1 className="display-1 font-weight-bold m-0">GAMELOFT GAME</h1>
                                <div className="mb-3 d-block display-6">
                                    Racing/Action <i class="star"></i>
                                </div>
                                <p className="display-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    </p>
                            </div>
                        </div>
                     
                    </div>
                </div>
                <div className="store position-relative col-12 py-2 bg-info">
                    <div className="container row m-0 align-items-center justify-content-between m-auto">
                        <h2 className=" col-12 col-sm-6 text-left text-primary display-3 font-weight-bold" >Download lasted version</h2>
                        <div className="row m-0 col-12 col-sm-6 align-items-center">
                            <img src={nintendo} alt="nintendo" width="123" height="40" className="mr-1 mb-1 mb-sm-0 ml-md-auto" />
                            <img src={microsoft} alt="microsoft" width="123" height="40" className="mr-1 mb-1 mb-sm-0" />
                            <img src={steam} width="123" height="40" alt="steam" />


                        </div>
                    </div>
                    <ul className="m-0 store-button position-absolute list-unstyled">
                                <li className="bg-light share circle-hover-light rounded-circle mb-2">
                                    <svg id="Group_121" data-name="Group 121" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14.362 14.875">
                                        <circle id="Ellipse_241" data-name="Ellipse 241" cx="2.565" cy="2.565" r="2.565" transform="translate(9.233 0)" fill="#141414" />
                                        <ellipse id="Ellipse_242" data-name="Ellipse 242" cx="2.565" cy="2.821" rx="2.565" ry="2.821" transform="translate(9.233 9.233)" fill="#141414" />
                                        <ellipse id="Ellipse_243" data-name="Ellipse 243" cx="2.565" cy="2.821" rx="2.565" ry="2.821" transform="translate(0 5.129)" fill="#141414" />
                                        <path id="Path_206" data-name="Path 206" d="M1020.684,818.6l-7.779,4.4,7.779,4.4" transform="translate(-1009.958 -815.268)" fill="none" stroke="#141414" stroke-linejoin="round" stroke-width="1" />
                                    </svg>
                                </li>
                                <li className="bg-light circle-hover-light rounded-circle mb-2">
                                    <svg id="mail" xmlns="http://www.w3.org/2000/svg" width="17.12" height="13.04" viewBox="0 0 17.12 13.04">
                                        <g id="Group_901" data-name="Group 901" transform="translate(0 0)">
                                            <path id="Path_376" data-name="Path 376" d="M15.615,61H1.5A1.507,1.507,0,0,0,0,62.5V72.536a1.507,1.507,0,0,0,1.5,1.5h14.11a1.507,1.507,0,0,0,1.5-1.5V62.5A1.507,1.507,0,0,0,15.615,61Zm-.208,1L8.592,68.819,1.717,62ZM1,72.328v-9.62L5.834,67.5Zm.709.709L6.546,68.2,8.24,69.883a.5.5,0,0,0,.708,0L10.6,68.229l4.808,4.808Zm14.4-.709L11.309,67.52l4.808-4.808Z" transform="translate(0 -61)" fill="#141414" />
                                        </g>
                                    </svg>

                                </li>
                                <li className="bg-light circle-hover-light rounded-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16.076" height="17.552" viewBox="0 0 16.076 17.552">
                                        <g id="Group_902" data-name="Group 902" transform="translate(0)">
                                            <path id="Path_378" data-name="Path 378" d="M32.138,7.256h-.043V6.191a6.191,6.191,0,1,0-12.382,0V7.256h-.261A1.769,1.769,0,0,0,17.757,9.08V11.8a1.716,1.716,0,0,0,1.672,1.759h1.63a.413.413,0,0,0,.393-.432q0-.012,0-.025V7.777c0-.261-.152-.521-.391-.521h-.478V6.191a5.322,5.322,0,1,1,10.644,0V7.255h-.478c-.239,0-.391.261-.391.521V13.1a.413.413,0,0,0,.366.454l.025,0h.5l-.043.065a3.432,3.432,0,0,1-2.759,1.369,2.151,2.151,0,0,0-4.258.413,2.172,2.172,0,0,0,2.172,2.151,2.237,2.237,0,0,0,1.564-.673,1.912,1.912,0,0,0,.521-1.043A4.3,4.3,0,0,0,31.9,14.12l.413-.608a1.479,1.479,0,0,0,1.521-1.5V9.3A1.974,1.974,0,0,0,32.138,7.256ZM20.581,12.686h-1.13a.847.847,0,0,1-.826-.868c0-.008,0-.015,0-.023V9.08a.9.9,0,0,1,.825-.956h1.13Zm6.712,3.584a1.282,1.282,0,0,1-.934.413,1.325,1.325,0,0,1-1.3-1.282,1.282,1.282,0,0,1,2.563,0h0A1.151,1.151,0,0,1,27.293,16.271Zm5.67-4.258c0,.587-.565.673-.825.673h-.912V8.124h.912c.478,0,.825.673.825,1.173Z" transform="translate(-17.756)" fill="#141414" />
                                        </g>
                                    </svg>

                                </li>
                            </ul>
                        
                </div>

            </div>
        </section>
    );
};

export default Banner;