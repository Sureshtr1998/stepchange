import React, { useRef, useEffect } from 'react'
import '../../stylings/Contents.css'
import lottie from 'lottie-web'
import Card from '../Card'
import { esg1, esg2, esg3, esg4 } from '../../data'

const Esg = () => {
  const container = useRef(null)
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../lottie/esg.json'),
    })
  }, [])
  return (
    <div className="esg">
      <p className="cardInfo esgCard">
        <span className="questionCard">
          {' '}
          What is
          <span className="spanColor">
            {' '}
            &nbsp;ESG <span className="questionMark">?</span>
          </span>{' '}
        </span>
        <br />
        <br />
        ESG means using <span className="spanColor"> Environmental</span>,{' '}
        <span className="spanColor">Social</span> and <span className="spanColor">Governance</span>{' '}
        factors to evaluate companies and countries on how far advanced they are with
        sustainability. Once enough data has been acquired on these three metrics, they can be{' '}
        <span className="spanColor"> integrated into the investment process </span> when deciding
        what equities or bonds to buy .
      </p>

      <div className="esgLeftInfo">
        <div className="lottieContainer lottieRight">
          <div className="lottieEsgItem" ref={container}></div>
        </div>
        <p className="cardInfo esgWorth">
          <span className="questionCard">
            Is it
            <span className="spanColor">
              &nbsp;Worth to invest in ESG <span className="questionMark">?</span>
            </span>
          </span>
          <br />
          <br />
          <span className="spanColor"> Absolutely Yes! </span> &nbsp;There is an increasing demand
          from regulators, investors, and consumers for companies to become environmentally
          sustainable and socially responsible. <span className="spanColor">StepChange </span>
          &nbsp;helps you implement a rigorous ESG programme to meet these demands.
        </p>
      </div>

      <div className="cardStyle">
        <div className="row">
          <div className="column">
            <Card info={esg1} />
          </div>
          <div className="column">
            <Card info={esg2} />
          </div>
          <div className="column">
            <Card info={esg3} />
          </div>
          <div className="column">
            <Card info={esg4} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Esg
