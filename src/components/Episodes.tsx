import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { episodesState, fetchEpisodes, selectEpisodes } from '../features/episodesSlice';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import EpisodeCard from './EpisodeCard';


const Episodes = () => {
    // const dispatch = useDispatch<AppDispatch>();
    const dispatch = useAppDispatch();
    //const pages = useAppSelector(state => state.episodes.pages);
    const {count, pages, episodes} = useSelector(selectEpisodes);

    useEffect(() => {
        dispatch(fetchEpisodes(null));
    }, [dispatch]);


    useEffect(() => {
      console.log(pages)
    }, [pages])

  return (
    <>
      <div>Episodes</div>
      <div className='episodes-container'>
        {pages > 0 && episodes.map(episode => (
          <EpisodeCard 
            key={episode.id}
            {...episode}
          />
        ))}
      </div>
    </>
  )
}

export default Episodes

