import React from 'react'
import styles from '@/app/styles/common.module.css'
import Image from 'next/image';

const page = async ({params}) => {

  const id = params.id;

  const url = `https://netflix-data.p.rapidapi.com/title/details/?ids=${id}&lang=en`;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c1926f1e7fmsh31e8c16ec1c905bp15b7e4jsnf5e9f0904f8d',
      'X-RapidAPI-Host': 'netflix-data.p.rapidapi.com'
    }
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data[0].details;


  return (
    <>
        <div className={styles.container}>
          <h2 className={styles.movie_title}>
               NETFLIX \ <span>{main_data.type}</span>
          </h2>
          <div className={styles.card_section}>
            <Image src={main_data.backgroundImage.url} alt={main_data.title} width={600} height={350}/> 
          </div>
          <div>
              <h1>{main_data.title}</h1>
              <p>{main_data.synopsis}</p>
          </div>
        </div>
    </>
  )
}

export default page;