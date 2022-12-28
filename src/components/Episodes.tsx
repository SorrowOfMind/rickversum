import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { episodesState, fetchEpisodes, selectEpisodes } from '../features/episodesSlice';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';


const Episodes = () => {
    // const dispatch = useDispatch<AppDispatch>();
    const dispatch = useAppDispatch();
    //const pages = useAppSelector(state => state.episodes.pages);
    const {count, pages, episodes} = useSelector(selectEpisodes);

    useEffect(() => {
        dispatch(fetchEpisodes());
    }, [dispatch]);


    useEffect(() => {
      console.log(pages)
    }, [pages])

  return (
    <>
      <div>Episodes</div>
      {pages > 0 && episodes.map(episode => {console.log(episode)})}
    </>
  )
}

export default Episodes

