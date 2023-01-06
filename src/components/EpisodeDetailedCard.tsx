import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import placehoderImg from '../assets/placeholder.png'
import { fetchEpisodes } from '../features/episodesSlice';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';



const EpisodeDetailedCard = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();

    const episodes = useAppSelector(state => state.episodes.currentEpisode);

    useEffect(() => {
        // let stateEpisodes = state.episodes.episodes;
        dispatch(fetchEpisodes(id!));
        // if (stateEpisodes.length == 0) {
        //     console.log("state undefined")
        //     dispatch(fetchEpisodes(id!));
        // } else {
        //     console.log("state defined")
        //     console.log(stateEpisodes.find(episode => episode.id == parseInt(id!)));
        // }
    }, []);

    return (
        <div className="detailed-card">
            <div className="detailed-card-header">
                <img src={placehoderImg} className="card-image" />
            </div>
            <div className="detailed-card-content">
                {/* <div className="detailed-card-line">
                    <p className="detailed-card-line-title">Name</p>
                    <p className="detailed-card-line-content">{name}</p>
                </div>
                <div className="detailed-card-line">
                    <p className="detailed-card-line-title">Air Date </p>
                    <p className="detailed-card-line-content">{air_date}</p>
                </div>
                <div className="detailed-card-line">
                    <p className="detailed-card-line-title">Episode </p>
                    <p className="detailed-card-line-content">{episode}</p>
                </div> */}
            </div>
      </div>
    )
}

export default EpisodeDetailedCard