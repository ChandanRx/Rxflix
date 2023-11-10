import React from 'react'
import ContactCard from '../components/ContactCard';
import styles from '@/app/styles/contact.module.css'
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <>
    <div className={styles.container}>
        <h1> Contact Me ! </h1>
        <ContactCard/>
 
       <section className={styles.Contact_section}>
            <h2> I do Love to hear <span> from you </span></h2>
            <ContactForm />
       </section>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7333.589229883855!2d72.6299641423609!3d23.214154416159506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2bc964c35125%3A0x9d1977c0ec27e598!2sSector%206%2C%20Gandhinagar%2C%20Gujarat%20382006!5e0!3m2!1sen!2sin!4v1699439795885!5m2!1sen!2sin" width={100} height={450} style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className={styles.mapping}></iframe>
        </div>
    </>
  )
}

export default Contact;
