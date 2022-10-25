import React, { useRef, useEffect } from 'react'
import '../../stylings/Contents.css'
import lottie from 'lottie-web'

const ContactUs = () => {
  const container = useRef(null)
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../lottie/contact.json'),
    })
  }, [])
  return (
    <div className="home">
      <h1>
        Find & accelerate your path to<span className="spanColor"> &nbsp;NetZero emissions </span>
      </h1>
      <p className="paragraphSty">
        Streamline your company’s ESG reporting and accelerate your path to NetZero emissions.
      </p>
      <div className="lottieContainer lottieCenter">
        <div className="lottieContactItem" ref={container}></div>
      </div>
      <p className="cardInfo">
        Build <span className="spanColor">Sustainable Products</span> &{' '}
        <span className="spanColor">Employee Culture</span>. Understand and communicate your
        product’s sustainability claims with confidence and award your workforce to become more
        sustainable.
      </p>
      <h2 style={{ marginTop: '50px' }}>
        {' '}
        Join The <span className="spanColor"> Team </span>
      </h2>
      <p className="paragraphSty">
        {' '}
        We’re hiring across all roles, and would love to chat about working together to solve
        climate change
      </p>
      <div className="btnActions">
        <div
          onClick={() =>
            window.open(
              'https://stepchange.notion.site/Let-s-build-towards-a-better-planet-6d23def128c64ea095f84ea3642f37bf',
              // eslint-disable-next-line prettier/prettier
              '_blank'
            )
          }
          className="button careers make-bg-color">
          <span>Careers</span>
        </div>
        <div
          onClick={() =>
            window.open(
              'https://calendly.com/meet_ankit_jain/stepchange-introduction',
              // eslint-disable-next-line prettier/prettier
              '_blank'
            )
          }
          className="button expert make-bg-color">
          <span>Talk To An Expert</span>
        </div>
      </div>
    </div>
  )
}
export default ContactUs
