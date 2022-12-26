import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppDispatch } from '../app/store';
import { fetchEpisodes } from '../features/episodesSlice';

const Episodes = () => {
    // const dispatch = useDispatch<AppDispatch>();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchEpisodes());
    }, [dispatch]);
  return (
    <div>Episodes</div>
  )
}

export default Episodes

