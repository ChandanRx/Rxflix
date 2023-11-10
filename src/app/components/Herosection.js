import heroStyle from '@/app/styles/herosection.module.css'
import styles from '@/app/styles/common.module.css'
import Link from 'next/link'
import Image from 'next/image'

import { Mulish} from 'next/font/google'

const mulish = Mulish({
  weight: ['300','400','500','600','700','800'],
  subsets: ['latin'],
  display: 'swap',
})


const Herosection = ({title , imgurl}) => {



  return (
    <main className={heroStyle.main_section}>
              <div className={styles.container}>
                <div className={styles.grid_two_section}>
                  <div className={heroStyle.hero_content}>
                  <h1> {title} </h1>
                        <p>
                        Dive into a world of cinematic magic with our movie search app. Explore a vast library of films, find personalized recommendations, and never miss out on your favorite movies again
                        </p>
                        <Link href='/movie' className={mulish.className}>
                        <button className={styles.btn}>
                            explore movie
                        </button>
                        </Link>
                  </div>
                  <div className={heroStyle.hero_image}>
                         <Image src={imgurl} alt='netflix_movies' height={500} width={500}/>
                  </div>
                </div>
              </div>
    </main>
  )
}

export default Herosection;