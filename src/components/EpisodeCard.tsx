import React from 'react'
import { Link } from 'react-router-dom'
import placehoderImg from '../assets/placeholder.png'

export interface IEpisodeCard {
  id: number,
  name: string,
  episode: string,
}

const EpisodeCard: React.FC<IEpisodeCard> = ({id, name, episode}) => {
  return (
    <Link to={`/episodes/${id}`}>
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
            <p className="card-line-title">Episode </p>
            <p className="card-line-content">{episode}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default EpisodeCard