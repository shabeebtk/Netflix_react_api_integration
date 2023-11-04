import './App.css'
import Navbar from './component/navbar/Navbar'
import Slider from './component/Sliders/Slider'
import { TMDB_URL } from './constant/constant'
import { MY_API } from './constant/constant'
import Banner from './component/banner/Banner'

function App() {

  return (
    <>
      <Navbar />

      <div className='header_main_div'>
            <div className='header_div'>
                <h1>Movies</h1>
                <p>
                    Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.
                </p>
            </div>
        </div>

      <Slider genres='Netflix Orginals' api={`https://api.themoviedb.org/3/discover/movie?api_key=${MY_API}&with_genres=35`} autoScroll />

      <Slider genres='Action Thrillers' api={`https://api.themoviedb.org/3/discover/movie?api_key=${MY_API}&with_genres=28`} smallSize />

      <Slider genres='Horror Movies' api={`https://api.themoviedb.org/3/discover/movie?api_key=${MY_API}&with_genres=27`} smallSize />

      <Slider genres='Comedy Movies' api={`https://api.themoviedb.org/3/discover/movie?api_key=${MY_API}&with_genres=35`} smallSize />

      <Slider genres='Documentaries' api={`https://api.themoviedb.org/3/discover/movie?api_key=${MY_API}&with_genres=99`} smallSize />

    </>
  )
}

export default App
