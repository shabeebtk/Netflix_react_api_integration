import React, { useEffect, useState } from "react";
import './slider.css'
import axios from "axios";
import { TMDB_URL } from '../../constant/constant'
import { MY_API } from '../../constant/constant'
import { IMAGE_BASE_URL } from "../../constant/constant";
import YouTube from "react-youtube";

function Slider(props) {

    const [movies, setMovies] = useState([])
    const [trailerURL, settrailerURL] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        axios.get(`${props.api}`)
            .then((response) => {
                setMovies(response.data.results)
            })
            .catch(()=>{
                console.log('not found')
            })
    }, [])

    
    const handleMovieTrailer = (movieID)=>{
        axios.get(`https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${MY_API}`)
        .then( (response)=>{
            if (response.data.results.length !== 0){
                settrailerURL(response.data.results[0].key)
                setIsModalOpen(true);
            }
        } )
    }

    const opts = {
        height: '400px',
        width: '70%',
        playerVars: {
          autoplay: 1,
        },
      };

    const handleCloseModal = () => {
        settrailerURL('');
        setIsModalOpen(false);
    };
  

    return (
        <>
        <div className={ props.smallSize ? 'small_slider_div' : 'slider_div'}>
            <div className="movie_genre_title">
                <p>{ props.genres }</p>
            </div>
            <div className="movie_slider">
                {movies.map((movie, key) => (
                    <div onClick={ ()=> handleMovieTrailer(movie.id) } className={ props.autoScroll ? 'scroll_movies' : ''  } key={movie.id} >
                        <img className={ props.smallSize ? 'small_movie_poster' : 'movie_poster' } src={`${IMAGE_BASE_URL}/${movie.backdrop_path}`} alt="" />
                        <p style={ {color:'white', fontWeight:'500'} }>{movie.title ? movie.title : movie.name}</p>
                    </div>
                ))}
            </div>
        </div>


        { trailerURL && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseModal}>&times;</span>
                        <YouTube className="video" opts={opts} videoId={trailerURL} />
                    </div>
                </div>
            )}

        </>
    )
}

export default Slider;