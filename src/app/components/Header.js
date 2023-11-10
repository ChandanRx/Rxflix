import styles from '@/app/styles/navbar.module.css'
import Link from 'next/link'
import img from '../images/mvlog.png'
import Image from 'next/image'
import Nav from './Nav'

const Header = () => {
    return (
        <>
            <header className={styles.main_header}>
                <div className={styles.navbar_brand}>
                    <Link href='/contact'>
                        <Image src={img} alt='jnf' width={100} height={70} />
                    </Link>
                </div>

                <Nav/>
            </header>
        </>
    )
}

export default Header