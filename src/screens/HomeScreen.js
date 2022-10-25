import React, { useEffect } from 'react'
import '../stylings/HomeScreenStyle.css'
import Home from '../components/contents/Home'
import ContactUs from '../components/contents/ContactUs'
import Esg from '../components/contents/Esg'
import WhoAreWe from '../components/contents/WhoAreWe'
import WhyUs from '../components/contents/WhyUs'

const HomeScreen = () => {
  useEffect(() => {
    updateNavigation()
  }, [])

  const updateNavigation = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id')
        try {
          if (entry.intersectionRatio > 0) {
            document.getElementById(id).classList.add('slideRightAnimate')
            document.querySelector(`div a[href="#${id}"]`).classList.add('active-section')
          } else {
            document.querySelector(`div a[href="#${id}"]`).classList.remove('active-section')
          }
        } catch (err) {
          console.log(err, 'Ignore')
        }
      })
    })
    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section)
    })
  }

  return (
    <div className="homeScreen">
      <img className="logoStep" src="/assets//stepChangeLogo.png" />

      <button
        onClick={() =>
          window.open(
            'https://calendly.com/meet_ankit_jain/stepchange-introduction',
            // eslint-disable-next-line prettier/prettier
            '_blank'
          )
        }
        // eslint-disable-next-line prettier/prettier
        className="bookDemoBtn">
        <span>Book A Demo</span>
      </button>
      <div className="stemCss"> </div>
      <nav>
        <ul>
          <li>
            <a href="#home">
              <span className="rect"></span>
              Home
            </a>
          </li>
          <li>
            <a href="#esg">
              <span className="rect"></span>
              What Is ESG <span className="questionMark">? </span>
            </a>
          </li>
          <li>
            <a href="#whyUs">
              <span className="rect"></span>
              Why Us <span className="questionMark">?! </span>
            </a>
          </li>
          <li>
            <a href="#whoAreWe">
              <span className="rect"></span>
              Who Are We <span className="questionMark">? </span>
            </a>
          </li>
          <li>
            <a href="#contactUs">
              <span className="rect"></span>
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
      <section id="home" className="content-section">
        <div className="componentContent">
          <Home />
        </div>
      </section>
      <section id="esg" className="content-section">
        <div className="componentContent">
          <Esg />
        </div>
      </section>
      <section id="whyUs" className="content-section">
        <div className="componentContent">
          <WhyUs />
        </div>
      </section>
      <section id="whoAreWe" className="content-section">
        <div className="componentContent">
          <WhoAreWe />
        </div>
      </section>
      <section id="contactUs" className="content-section">
        <div className="componentContent">
          <ContactUs />
        </div>
      </section>
    </div>
  )
}

export default HomeScreen
