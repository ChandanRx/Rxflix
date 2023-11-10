import Link from "next/link";
import MovieCard from "../components/MovieCard";
import Styles from '@/app/styles/common.module.css'

const Movie = async () => {


  const url = process.env.RAPID_KEY;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c1926f1e7fmsh31e8c16ec1c905bp15b7e4jsnf5e9f0904f8d',
      'X-RapidAPI-Host': 'netflix-data.p.rapidapi.com'
    }
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;

  return (
    <>


      <section className={Styles.movieSection}>
        <div className={Styles.container}>



          <h1> Series & Movies </h1>
          <div className={Styles.card_section}>
            {
              main_data.map((currElem) => {
                return <MovieCard key={currElem.id} {...currElem} />
              })
            }
          </div>
        </div>
      </section>

    </>
  )
}

export default Movie;