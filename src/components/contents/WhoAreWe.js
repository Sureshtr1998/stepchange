import React, { useRef, useEffect } from 'react'
import '../../stylings/Contents.css'
import lottie from 'lottie-web'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { profiles } from '../../data'
import Card from '../Card'

const WhoAreWe = () => {
  const sliderSettings = {
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    infinite: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const container = useRef(null)
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../lottie/team.json'),
    })
  }, [])
  return (
    <div className="waw">
      <p className="cardInfo esgCard">
        <span className="questionCard">
          Who Are
          <span className="spanColor">
            &nbsp;We <span className="questionMark">?</span>
          </span>
        </span>
        <br />
        <br />
        We are an experienced team of <span className="spanColor">scientists</span>,{' '}
        <span className="spanColor">researchers</span>,{' '}
        <span className="spanColor">technologists</span> and{' '}
        <span className="spanColor">entrepreneurs</span> obsessed with the idea of a{' '}
        <span className="spanColor"> NetZero</span> Society. We have come together to work on what
        we believe is the most pressing issue faced by humanity today -{' '}
        <span className="spanColor">The Climate Crisis </span>.
      </p>

      <div className="esgLeftInfo">
        <div className="lottieContainer lottieRight">
          <div className="lottieWawItem" ref={container}></div>
        </div>
        <p className="cardInfo esgWorth">
          <span className="questionCard">
            About our
            <span className="spanColor">
              &nbsp;Team<span className="questionMark"> &nbsp;!</span>
            </span>
          </span>
          <br />
          <br />
          Our founding team includes people with deep expertise In climate science, building large{' '}
          consumer companies, advisors from universities like <span className="spanColor">
            MIT
          </span>{' '}
          and top global <span className="spanColor">VC investors</span>. We belive in Innovation,
          Thinking Big, Equality.
        </p>
      </div>
      <div className="content">
        <Slider {...sliderSettings}>
          {profiles.map((profile, index) => (
            <div key={index}>
              <Card info={profile} />
              {/* <img src={profile.imageSrc} /> */}
              {/* <h2>{profile.name}</h2>
              <p>{profile.title}</p>
              <p> LinkedIn </p> */}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default WhoAreWe
