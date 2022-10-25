import React, { useRef, useEffect } from 'react'
import '../../stylings/Contents.css'
import lottie from 'lottie-web'

const WhyUs = () => {
  const container = useRef(null)
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../lottie/plant.json'),
    })
  }, [])
  return (
    <div className="esg">
      <p className="">
        <span className="usHeading spanColor">
          {' '}
          Become an ESG leader with the StepChange advantage!{' '}
        </span>
      </p>

      <div className="esgLeftInfo">
        <div className="lottieContainer lottieRight">
          <div className="lottieWhyUsItem" ref={container}></div>
        </div>
        <p className="cardInfo whyUs">
          <span className="questionCard">
            What
            <span className="spanColor">
              &nbsp;Drives Us<span className="questionMark">?</span>
            </span>
          </span>
          <br />
          <br />
          We want to <span className="spanColor">empower every company in the world </span> with the
          tools to become more <span className="spanColor">sustainable</span>.
        </p>
      </div>
      <div className="benefitsStepChange">
        <div className="with">
          <div>
            <div className="benefit">
              <span className="spanColor headingBenifits"> With StepChange </span>
              <div className="points">
                <span>
                  {' '}
                  <span className="greenLeave"></span>
                  Get access to world class tools built by climate scientists that calculate your
                  scope-1, 2, and 3 emissions.
                </span>
              </div>
              <div className="points">
                <span>
                  {' '}
                  <span className="greenLeave"></span>
                  Get comprehensive reporting tailored to your sector, organisational spread, and
                  sustainability journey.
                </span>
              </div>
              <div className="points">
                <span>
                  {' '}
                  <span className="greenLeave"></span>File the comprehensive BRSR report with
                  confidence.
                </span>
              </div>
              <div className="points">
                <span>
                  {' '}
                  <span className="greenLeave"></span>
                  Get Product Life Cycle Impact Assessments done in days along with
                  implementation-ready strategies.
                </span>
              </div>
              <div className="points">
                <span>
                  {' '}
                  <span className="greenLeave"></span>
                  Get access to novel decision-making tools for reducing your company&apos;s
                  footprint.
                </span>
              </div>
              <div className="points">
                <span>
                  {' '}
                  <span className="greenLeave"></span>Make Sustainability a part of your
                  organisation&apos;s culture.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="without">
          <div>
            <div className="benefit">
              <span className="spanColor headingBenifits"> Without StepChange </span>
              <div className="points">
                <span>
                  {' '}
                  <span className="brownLeave"></span>
                  Pay for international tools that are not optimised for Indian reporting or
                  emission calculations.
                </span>
              </div>
              <div className="points">
                <span>
                  {' '}
                  <span className="brownLeave"></span>
                  Take months to get Life Cycle Assessments done.
                </span>
              </div>
              <div className="points">
                <span>
                  {' '}
                  <span className="brownLeave"></span>Lack confidence in the accuracy of your
                  sustainability reports.
                </span>
              </div>
              <div className="points">
                <span>
                  {' '}
                  <span className="brownLeave"></span>
                  Get boiler plate recommendations to reduce your emissions.
                </span>
              </div>
              <div className="points">
                <span>
                  {' '}
                  <span className="brownLeave"></span>
                  Lack the best tools to do anything about your footprint.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyUs
