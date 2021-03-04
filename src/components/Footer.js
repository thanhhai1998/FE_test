import React from 'react';

const Footer = () => {
    return (
        <footer className="footer row m-0 flex-column">
            <div className="col-12 border-bottom d-flex align-items-center  border-light bg-primary pb-5 pb-md-0 footer-content px-0 px-md-3">
                <div className="container row   justify-content-md-between mx-auto">
                    <div className="text-white text-left mx-auto mx-md-0">
                        <img src={require('../assets/images/logo-white.svg').default} className="logo w-100" alt="logo" />
                        <h3 className="text-white font-weight-bold h4 mb-3 d-none  d-md-block">Follow Us</h3>
                        <div className=" d-none  d-md-flex align-items-center">
                            <a className="icon-social text-center  bg-light  facebook position-relative rounded-0 mr-0 mr-md-2" href="https://www.facebook.com/GameloftViet/" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" className="position-absolute" width="17.404" height="33.549" viewBox="0 0 17.404 33.549">
                                    <path id="Path_395" data-name="Path 395" d="M218.307,110.873V95.591h5.152l.772-5.982h-5.924V85.8c0-1.728.48-2.905,2.957-2.905h3.14V77.559a42.212,42.212,0,0,0-4.6-.235c-4.554,0-7.67,2.779-7.67,7.883v4.4H207v5.981h5.133v15.282Zm0,0" transform="translate(-207 -77.324)" fill="#2699FB" />
                                </svg>


                            </a>

                            <a className="icon-social  text-center bg-light insta mr-2 rounded-0" href="https://www.linkedin.com/company/gameloft/jobs" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35.684" height="35.601" viewBox="0 0 35.684 35.601">
                                    <g id="Group_718" data-name="Group 718" transform="translate(0 0)">
                                        <path id="Path_320" data-name="Path 320" d="M73.156,69.215a4.279,4.279,0,1,1-4.309,4.274A4.3,4.3,0,0,1,73.156,69.215Z" transform="translate(-68.847 -69.215)" fill="#2699fb" />
                                        <path id="Path_321" data-name="Path 321" d="M80.4,198.435H75.38a1.179,1.179,0,0,1-1.179-1.179V175.85a1.179,1.179,0,0,1,1.179-1.179H80.4a1.179,1.179,0,0,1,1.179,1.179v21.406A1.179,1.179,0,0,1,80.4,198.435Z" transform="translate(-73.6 -162.839)" fill="#2699fb" />
                                        <path id="Path_322" data-name="Path 322" d="M204.555,177.388a8.126,8.126,0,0,0-8.126-8.126h-1.287a7.228,7.228,0,0,0-6.324,3.732.55.55,0,0,0-.067-.008v-2.628a.49.49,0,0,0-.49-.49H182a.49.49,0,0,0-.49.49v22.785a.489.489,0,0,0,.489.49l6.4,0a.49.49,0,0,0,.49-.49V179.982a4.172,4.172,0,0,1,4.09-4.19,4.138,4.138,0,0,1,4.185,4.138v13.218a.49.49,0,0,0,.489.49l6.412,0a.489.489,0,0,0,.49-.49V177.388Z" transform="translate(-168.871 -158.037)" fill="#2699fb" />
                                    </g>
                                </svg>

                            </a>
                            <a className="icon-social  text-center bg-light twitter mr-2 rounded-0" href="https://twitter.com/gameloft" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="37.588" height="30.535" viewBox="0 0 37.588 30.535">
                                    <path id="Path_323" data-name="Path 323" d="M60.36,123.169a22.014,22.014,0,0,0,33.779-18.6q0-.455-.018-.905c.44-.346,3.159-2.526,3.826-3.927a17.854,17.854,0,0,1-4.37,1.134h-.014l.012-.007c.2-.133,2.984-2.028,3.361-4.287a26.816,26.816,0,0,1-3.749,1.563c-.362.12-.741.239-1.132.348a7.724,7.724,0,0,0-13.162,7.025A23.259,23.259,0,0,1,63.039,97.5s-3.692,5.04,2.2,10.222a7.936,7.936,0,0,1-3.336-.995,7.34,7.34,0,0,0,6.1,7.667,7.067,7.067,0,0,1-3.407.143,7.614,7.614,0,0,0,7.1,5.394,14.835,14.835,0,0,1-11.341,3.241Z" transform="translate(-60.358 -96.041)" fill="#2699fb" />
                                </svg>



                            </a>
                            <a className="icon-social  text-center bg-light insta mr-2 rounded-0" href="https://www.youtube.com/user/Gameloft" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30.454" height="36.98" viewBox="0 0 30.454 36.98">
                                    <g id="Group_719" data-name="Group 719" transform="translate(0)">
                                        <path id="Path_324" data-name="Path 324" d="M111.357,218.564a1.613,1.613,0,0,0-.128-.568.611.611,0,0,0-.55-.376.957.957,0,0,0-.751.282.5.5,0,0,0-.126.187l0,6.056v.149s.052.07.059.079a1.2,1.2,0,0,0,.641.394.62.62,0,0,0,.819-.49,1.469,1.469,0,0,0,.034-.305C111.362,222.168,111.366,220.366,111.357,218.564Zm0,0a1.613,1.613,0,0,0-.128-.568.611.611,0,0,0-.55-.376.957.957,0,0,0-.751.282.5.5,0,0,0-.126.187l0,6.056v.149s.052.07.059.079a1.2,1.2,0,0,0,.641.394.62.62,0,0,0,.819-.49,1.469,1.469,0,0,0,.034-.305C111.362,222.168,111.366,220.366,111.357,218.564Zm6.78-9.132q-10.749-.231-21.5,0a4.574,4.574,0,0,0-4.475,4.573V225.2a4.574,4.574,0,0,0,4.475,4.574q10.751.231,21.5,0a4.574,4.574,0,0,0,4.476-4.574V214.005A4.574,4.574,0,0,0,118.137,209.432Zm-19.4,16.786H96.672V214.535h-2.14V212.58h6.351v1.95H98.738Zm7.4-4.849v4.85H104.3v-1.109c-.066.071-.1.109-.138.148a3.357,3.357,0,0,1-1.41,1.011,1.712,1.712,0,0,1-.857.077,1.054,1.054,0,0,1-.829-.66,2.562,2.562,0,0,1-.19-1.056c0-1.335,0-8.4,0-8.47H102.7c0,.062.01,5.134.011,7.608a2.022,2.022,0,0,0,.028.4.446.446,0,0,0,.642.358,2,2,0,0,0,.884-.692.32.32,0,0,0,.035-.185v-7.5l1.831,0Zm6.962,3.881a1.5,1.5,0,0,1-1.557,1.1,2.067,2.067,0,0,1-1.561-.712l-.177-.189v.765h-1.833V212.579H109.8v4.489a1.842,1.842,0,0,1,.2-.313,2.105,2.105,0,0,1,1.056-.671,1.589,1.589,0,0,1,1.9.864,3.543,3.543,0,0,1,.292,1.532q.005,2.859,0,5.719A3.345,3.345,0,0,1,113.1,225.25Zm6.771-.384a2.242,2.242,0,0,1-1.937,1.588,3.064,3.064,0,0,1-1.748-.178,2.427,2.427,0,0,1-1.387-1.766,5.327,5.327,0,0,1-.134-1.139c-.015-1.493-.008-2.988,0-4.481a3.017,3.017,0,0,1,.723-2.1,2.668,2.668,0,0,1,2.283-.881,3.194,3.194,0,0,1,.8.145,2.22,2.22,0,0,1,1.512,1.8,5.411,5.411,0,0,1,.1,1.017c.015.8-.006,2.553-.006,2.553h-3.511v2.517a.817.817,0,1,0,1.635,0v-1.294h1.886A9.141,9.141,0,0,1,119.868,224.866Zm-1.675-6.42a.817.817,0,1,0-1.635,0v1.413h1.635Zm-6.964-.45a.611.611,0,0,0-.55-.376.957.957,0,0,0-.751.282.5.5,0,0,0-.126.187l0,6.055v.149s.052.07.059.079a1.2,1.2,0,0,0,.641.394.62.62,0,0,0,.819-.49,1.469,1.469,0,0,0,.034-.305c0-1.8.006-3.605,0-5.407A1.611,1.611,0,0,0,111.229,218Z" transform="translate(-92.159 -192.908)" fill="#2699fb" />
                                        <path id="Path_325" data-name="Path 325" d="M262.025,94.99v10.125h-1.876l0-1.088c-.207.2-.385.4-.579.567a2.534,2.534,0,0,1-1.193.62,1.19,1.19,0,0,1-1.523-.811,2.673,2.673,0,0,1-.121-.756V94.99H258.6v7.722a1.749,1.749,0,0,0,.026.306.423.423,0,0,0,.6.362,2,2,0,0,0,.9-.693.334.334,0,0,0,.028-.189V94.99Z" transform="translate(-238.269 -91.409)" fill="#2699fb" />
                                        <path id="Path_326" data-name="Path 326" d="M138.71,68.411c-.407-1.717-1.261-5.341-1.261-5.341h-2.135s1.64,5.44,2.374,7.866a.968.968,0,0,1,.038.275v5.563h1.969V71.211a.968.968,0,0,1,.038-.275c.734-2.426,2.374-7.866,2.374-7.866h-2.135s-.853,3.624-1.261,5.341Z" transform="translate(-130.472 -63.07)" fill="#2699fb" />
                                        <path id="Path_327" data-name="Path 327" d="M197.495,92.731h0a2.687,2.687,0,0,0-2.687,2.687v5.258a2.687,2.687,0,0,0,2.687,2.687h0a2.687,2.687,0,0,0,2.687-2.687V95.418A2.686,2.686,0,0,0,197.495,92.731Zm.775,8.05a.775.775,0,1,1-1.55,0v-5.47a.775.775,0,1,1,1.55,0Z" transform="translate(-183.291 -89.403)" fill="#2699fb" />
                                    </g>
                                </svg>


                            </a>
                        </div>
                        <form>
                            <div className="form-group   mt-4 position-relative  d-none  d-md-block">
                                <img src={require('../assets/images/world.svg').default} className="language-img position-absolute" alt="language" />
                                <select className="form-control text-primary bg-light rounded">
                                    <option>English</option>
                                </select>
                                <img src={require('../assets/images/arrow.svg').default} className="position-absolute arrow" />

                            </div>
                        </form>
                    </div>
                    <div className="d-flex d-md-block  flex-wrap mx-auto mx-md-0">
                      <div className="col-6 col-md-12  px-0 px-md-3">
                      <h3 className="text-white font-weight-bold h4 mb-3 d-none text-left mb-4 d-md-block">VISIT</h3>
                        <ul className="text-light list-unstyled text-left  mr-4 mr-md-0">
                            <li  className="mb-2">
                                <a className="display-6 text-light font-weight-normal" href="#">Gameloft Games</a>
                            </li>
                            <li  className="mb-2">
                                <a  cl  className="display-6 text-light font-weight-normal" href="#">Gameloft Careers</a>
                            </li>
                            <li  className="mb-2">
                                <a  cl  className="display-6 text-light font-weight-normal" href="#">Gameloft News</a>
                            </li>
                            <li  className="mb-2">
                                <a  cl  className="display-6 text-light font-weight-normal" href="#">Gameloft Forum</a>
                            </li>
                            <li  className="mb-2">
                                <a  cl  className="display-6 text-light font-weight-normal" href="#">Gameloft Corporate</a>
                            </li>
                            <li  className="mb-2">
                                <a  cl  className="display-6 text-light font-weight-normal" href="#">Gameloft Advertising</a>
                            </li>
                            <li className="mb-4 ">
                                <a  cl  className="display-6 text-light font-weight-normal" href="#">Gameloft Suppor</a>
                            </li>
                        </ul>
                      </div>
                       <div className="col-6 col-md-12  px-0 px-md-3">
                       <h3 className="text-white font-weight-bold h4 mb-3 d-none text-left mb-4 d-md-block">LEGAL</h3>
                        <ul className="text-light list-unstyled text-left ml-4 ml-md-0">
                            <li  className="mb-2">
                                <a className="display-6 text-light font-weight-normal" href="#">Terms of Use</a>
                            </li>
                            <li  className="mb-2">
                                <a  cl  className="display-6 text-light font-weight-normal" href="#">Privacy Policy</a>
                            </li>
                            <li  className="mb-2">
                                <a  cl  className="display-6 text-light font-weight-normal" href="#">Cookies Policy</a>
                            </li>
                            <li  className="mb-2">
                                <a  cl  className="display-6 text-light font-weight-normal" href="#">EULA</a>
                            </li>
                            <li  className="mb-2">
                                <a  cl  className="display-6 text-light font-weight-normal" href="#">Legal Notices</a>
                            </li>
                            <li  className="mb-2">
                                <a  cl  className="display-6 text-light font-weight-normal" href="#">Event Rules</a>
                            </li>
                            <li className="mb-4 ">
                                <a  cl  className="display-6 text-light font-weight-normal" href="#">Business Contacts</a>
                            </li>
                        </ul>
                       </div>
                    </div>
                </div>
            </div>
            <div className="col-12 bg-primary align-self-end copyright">
                <div className="container py-3">
                    <p className="m-0 text-light">©2020 Gameloft.All rights reserved. Gameloft and the Gameloft logo are trademarks of Gameloft in the U.S. and/or other countries.</p>
                    <p className="m-0 text-light">All other trademarks are the property of their respective owners.</p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;