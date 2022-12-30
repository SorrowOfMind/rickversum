import React from 'react'
import placehoderImg from '../assets/placeholder.png'

interface EpisodeCard {
  name: string,
  airDate: string,
  episode: string,
}

const EpisodeCard: React.FC<EpisodeCard> = ({name, airDate, episode}) => {
  return (
    <div className="card">
      <div className="card-header">
        <img src={placehoderImg} className="card-image" />
      </div>
      <div className="card-content">
        <div className="card-line">
          <p className="card-line-title">Name</p>
          <p className="card-line-content">{name}</p>
        </div>
        <div className="card-line">
          <p className="card-line-title">Air Date </p>
          <p className="card-line-content">{airDate}</p>
        </div>
        <div className="card-line">
          <p className="card-line-title">Episode </p>
          <p className="card-line-content">{episode}</p>
        </div>
      </div>
    </div>
  )
}

export default EpisodeCard