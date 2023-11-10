import Styles from "@/app/styles/common.module.css"
import Image from "next/image"
import Link from "next/link"


const MovieCard = (currElem) => {
    const {id,title,synopsis} = currElem.jawSummary
  return (
    <>

     <div className={Styles.card} >
         <div className={Styles.card_image}>
          <Image src={currElem.jawSummary.backgroundImage.url} alt="movieposter" width={300} height={200}/>
         </div>
         <div className={Styles.card_data} >
             <h2>
                {title.substring(0,18)}
             </h2>
             <p>{`${synopsis.substring(0,66)} ...`}</p>

         <Link href={`/movie/${id}`} >
            <button className={Styles.btn}>
                Read More
            </button>
         </Link>

         </div>
     </div>

    </>
  )
}

export default MovieCard;