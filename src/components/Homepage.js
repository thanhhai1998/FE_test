
import Header from '../components/Header';
import Banner from '../components/Banner';
import Contact from '../components/Contact';
import Community from '../components/Community';
import Event from '../components/Event';
import Exclusive from '../components/Exclusive';
import Footer from '../components/Footer';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import { Component, useEffect, useState } from 'react';
class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      isDestop: false
    }
  }
  componentDidMount() {
    if (window.innerWidth > 576) {
      this.setState({
        isDestop: true
      })
    }
  }
  render() {
    return (
      <>
        {this.state.isDestop ?
          <>
            <ReactFullpage
              licenseKey={'YOUR_KEY_HERE'}
              scrollingSpeed={700}

              render={({ state, fullpageApi }) => {
                return (
                  <ReactFullpage.Wrapper>
                    <div className="section">
                      <Banner></Banner>
                    </div>
                    <div className="section">
                      <Contact></Contact>
                    </div>
                    <div className="section">
                      <Community></Community>
                    </div>
                    <div className="section">
                      <Event></Event>
                    </div>
                    <div className="section">
                      <Exclusive></Exclusive>
                    </div>
                    <div className="section">
                      <Footer></Footer>
                    </div>
                  </ReactFullpage.Wrapper>

                );
              }}
            />
    }
          </> : <>
            <div className="section">
              <Banner></Banner>
            </div>
            <div className="section">
              <Contact></Contact>
            </div>
            <div className="section">
              <Community></Community>
            </div>
            <div className="section">
              <Event></Event>
            </div>
            <div className="section">
              <Exclusive></Exclusive>
            </div>
            <div className="section">
              <Footer></Footer>
            </div>
          </>}
      </>
    )
  }

}
export default HomePage;
