import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux';
import {loadCharacters} from'../actions/loadData';

export default function CharactersList() {

    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadCharacters(currentPage));
    }, [currentPage]);

    return (
        <div>
            Hello There!
        </div>
    )
}
