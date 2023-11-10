import styles from '@/app/styles/contact.module.css'
import Link from 'next/link';
import { AiOutlineMail, AiOutlineInstagram ,AiOutlineWhatsApp} from 'react-icons/ai';

const ContactCard = () => {
    return (
        <>
            <div className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.grid}>

                        
                    <div className={styles.grid_card}>
                            <i> <AiOutlineMail /> </i>
                            <h2> Email </h2>
                            <p> Anytime </p>
                            <p className={styles.last_para}> response time : 72 hours </p>
                            <Link href='chandan.rxn@gmail.conm'> Send Email <span>-&gt;</span> </Link>
                        </div>


                        <div className={styles.grid_card}>
                            <i> <AiOutlineInstagram /> </i>
                            <h2> Instagram </h2>
                            <p className={styles.last_para}> response time : 72 hours </p>
                            <Link href='https://www.instagram.com/chandan.pargi/'> Follow Me <span>-&gt;</span> </Link>
                        </div>

                        <div className={styles.grid_card}>
                            <i> <AiOutlineWhatsApp /> </i>
                            <h2> Whats App </h2>
                            <p> Anytime </p>
                            <p className={styles.last_para}> response time : 72 hours </p>
                            <Link href='https://wa.link/7o5lk9'> DM Me <span>-&gt;</span> </Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactCard;