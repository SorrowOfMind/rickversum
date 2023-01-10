import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import placehoderImg from '../assets/placeholder.png'
import { Episode, fetchEpisodes } from '../features/episodesSlice';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';



const EpisodeDetailedCard = () => {
    const [currentEpisode, setCurrentEpisode] = useState<Episode | null>();
    const {id} = useParams();
    const dispatch = useAppDispatch();

    const episodes = useAppSelector(state => state.episodes.episodes);
    const fetchedEpisode = useAppSelector(state => state.episodes.currentEpisode);

    useEffect(() => {
        if (episodes.length > 0) {
            setCurrentEpisode(episodes.find((episode) => episode.id == parseInt(id!)));
        } else if (fetchedEpisode) {
            setCurrentEpisode(fetchedEpisode);
        } else {
            dispatch(fetchEpisodes(id!));
        }
    }, [fetchedEpisode]);

    return (
        <>
            <div className="detailed-card">
                <div className="detailed-card-header">
                    <img src={placehoderImg} className="card-image" />
                </div>
                
                {currentEpisode != null && 
                    (<div className="detailed-card-content">
                        <div className="detailed-card-line">
                            <p className="detailed-card-line-title">Name</p>
                            <p className="detailed-card-line-content">{currentEpisode.name}</p>
                        </div>
                        <div className="detailed-card-line">
                            <p className="detailed-card-line-title">Air Date </p>
                            <p className="detailed-card-line-content">{currentEpisode.air_date}</p>
                        </div>
                        <div className="detailed-card-line">
                            <p className="detailed-card-line-title">Episode </p>
                            <p className="detailed-card-line-content">{currentEpisode.episode}</p>
                        </div>
                    </div>)
                }
            </div>
            <Link to=".."><button className="back-btn">&larr; Back</button></Link>
        </>
    )
}

export default EpisodeDetailedCard