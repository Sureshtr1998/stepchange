import React from 'react'
import '../stylings/Card.css'

const Card = (data) => {
  return (
    <div className="cards-container">
      <div className="cardCont">
        {data.info.url && <img className="homeImg" src={data.info.url} alt="" />}
        {data.info.imageSrc && <img className="profileImage" src={data.info.imageSrc} alt="" />}

        <div className="card-details">
          <p>{data.info.name}</p>
          <h2>{data.info.title}</h2>
          <h2 className="numberData">{data.info.num}</h2>
          <p>{data.info.desc}</p>
          {data.info.src && (
            <a href={data.info.src} target="_blank" rel="noreferrer">
              {' '}
              Source{' '}
            </a>
          )}
          {data.info.linkedIn && (
            <a href={data.info.linkedIn} target="_blank" rel="noreferrer">
              <img className="linkedinLogo" src="/assets/linkedin.png" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
export default Card
