import React, { useEffect, useState } from 'react';
import axios from 'axios';
function Photo() {
    const [photos, setPhotos] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [fetching, setFatching] = useState(true)
    const [totalCount, setTotalCount] = useState(0)
    useEffect(() => {
        console.log(fetching)
        if (fetching) {
            console.log(fetching)
            axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=30&_page=${currentPage}`)
                .then(response => {
                    setPhotos([...photos, ...response.data])
                    setCurrentPage(prevState => prevState + 1)
                    setTotalCount(response.headers['x -total-count'])
                })
                .finally(() => setFatching(false))
        }
    }, [fetching])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        };
    }, [])
    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight -
            (e.target.documentElement.scrollTop + window.innerHeight) < 100
        ) {
            setFatching(true)
        }
    }
    return (
        <div className="container">
            <div className="images">
                {photos.map(photo =>
                    <div key={photo.id} className="images2">
                        <div className="title">{photo.id}. {photo.title}</div>
                        <div className="image3"><img src={photo.thumbnailUrl} alt="" /></div>
                    </div>
                )}
            </div>
        </div>
    );
}
export default Photo;