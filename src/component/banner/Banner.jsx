import React, { useState, useEffect } from "react";
import './banner.css';
import axios from 'axios';

function Banner(props) {

    const [bannerMovie, setBannerMovie] = useState([])

    useEffect(() => {
        axios.get(`${props.api}`)
            .then((response) => {
                setBannerMovie(response.data.results[0])
            })
            .catch(()=>{
                console.log('not found')
            })
    }, [])

    console.log(bannerMovie)

    return (

        <div className='header_main_div'>
            <div className='header_div'>
                <h1>Movies</h1>
                <p>
                    Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.
                </p>
            </div>
                <div className="banner_main">
                    <div className="banner_movie_details">
                        <h3>{bannerMovie.name ? bannerMovie.name : bannerMovie.title}</h3>
                        <p>{bannerMovie.overview}</p>
                    </div>
                </div>
        </div>

    )
}

export default Banner;