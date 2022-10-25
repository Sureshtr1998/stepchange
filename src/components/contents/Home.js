import React, { useRef, useEffect } from 'react'
import Card from '../Card'
import { measure, target, reduce, report } from '../../data'
import '../../stylings/Contents.css'
import lottie from 'lottie-web'

const Home = () => {
  const container = useRef(null)
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../lottie/globe.json'),
    })
  }, [])
  return (
    <div className="home">
      <h1>
        Your One Stop Shop for a <span className="spanColor">NetZero Transition </span>
      </h1>
      <p className="paragraphSty">
        We enable leading companies and brands to accelerate their sustainability journey.
      </p>
      <div className="lottieContainer lottieCenter">
        <div className="lottieGlobeItem" ref={container}></div>
      </div>
      <p className="cardInfo">
        Measure your <span className="spanColor"> footprint</span>,{' '}
        <span className="spanColor"> reduce your emissions</span>,{' '}
        <span className="spanColor"> report your impact</span>, and{' '}
        <span className="spanColor"> empower your employees</span> with a one-stop climate tech
        platform built by climate scientists and technology experts.
      </p>
      <div className="cardStyle">
        <div className="row">
          <div className="column">
            <Card info={measure} />
          </div>
          <div className="column">
            <Card info={target} />
          </div>
          <div className="column">
            <Card info={reduce} />
          </div>
          <div className="column">
            <Card info={report} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
