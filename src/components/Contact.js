import React from 'react';

import minion from '../assets/images/minion.svg';
const Contact = () => {
    return (
        <section className="contact">
        
            <div className="contact-content container d-flex justify-content-between align-items-center py-5 px-5 px-md-0">
                <div  className="d-none d-md-block">
                <img src={minion} />
                </div>
                <form className="col-12 col-md-4">
                    <h2 className="text-primary text-left display-3 font-weight-bold">Stay in the Know!</h2>
                    <p className="m-0 text-primary text-left display-6">Don't get left behind</p>
                    <p className="mb-4 text-primary text-left display-6">Subscribe to our newsletters today</p>

                    <input className="form-control mb-3" name="name" placeholder="Name" />
                    <input className="form-control mb-3" name="email" placeholder="Email" />
                    <select className="form-control mb-3 " name="country">
                        <option>Country</option>
                    </select>
                    <select className="form-control mb-3" name="platform">
                        <option>Platform</option>
                    </select>

                    <div className="form-group form-check text-left pl-0">
                        <input type="checkbox" className="form-check-input d-none " id="checkbox1" />
                        <label className="form-check-label label-checkbox position-relative pl-4 text-primary display-6" for="checkbox1">
                            By signing up, I confirm that I am 13 years old or older. I agree to the Gameloft Terms and Conditions and I have read the Privacy Policy.
                        </label>
                    </div>
                    <div className="form-group form-check text-left pl-0">
                        <input type="checkbox" className="form-check-input d-none" id="checkbox2" />
                        <label className="form-check-label  label-checkbox position-relative pl-4   display-6  text-primary" for="checkbox2">
                        I agree to receive promotional offers relating to all Gameloft games and services.
                        </label>
                    </div>
                    <button type="button" className="btn  text-primary border px-5 mt-2 bg-transparent  display-5">Button</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;