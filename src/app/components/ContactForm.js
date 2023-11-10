'use client'
import styles from '@/app/styles/contact.module.css'
import { Mulish } from 'next/font/google'
import buttonStyle from '@/app/styles/common.module.css'
import { useState } from 'react'

const mulish = Mulish({
    weight: ['300', '400', '500', '600', '700', '800'],
    subsets: ['latin'],
    display: 'swap',
})

const ContactForm = () => {

    const [user, setUser] = useState({
        username: '',
        email: '',
        phone: '',
        message: ''
    })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUser((preVal) => ({
            ...preVal,
            [name]: value,
        }))
    }
 
    const [status,setStatus]=useState(null)
 
    const handleSubmitt = async () => {
            try {


           const response = await fetch('/api/contact' ,{
            method : 'POST',
            headers :{'Content_Type' : 'application/json'},
            body : JSON.stringify({
                username : user.username,
                email : user.email,
                phone : user.phone,
                message : user.message
            })

           })

           if(response.status == 200){
            setUser({
                username:'',
                email:'',
                phone:'',
                message:''
            }) 
             setStatus('success')
           } else{
            setStatus('error')
           }
            
            } catch(e){
                console.log(e);
            }
    }

    return (
        <>

            <form className={styles.contact_form} onSubmit={handleSubmitt}>
                <div className={styles.input_field}>
                    <label htmlFor="username">
                        Enter Your Name :
                        <input type="text"
                            name='username'
                            id='username'
                            placeholder='enter your name'
                            required
                            autoComplete='off'
                            className={mulish.className}
                            value={user.username}
                            onChange={handleChange}
                        />
                    </label>
                </div>


                <div className={styles.input_field}>
                    <label htmlFor="email">
                        Enter Your Email :
                        <input type='email'
                            name='email'
                            id='email'
                            required
                            autoComplete='off'
                            placeholder='enter your email'
                            className={mulish.className}
                            value={user.email}
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <div className={styles.input_field}>
                    <label htmlFor="phone">
                        Enter Your Phone :
                        <input type='number'
                            name='phone'
                            id='phone'
                            required
                            autoComplete='off'
                            placeholder='enter your phone'
                            className={mulish.className}
                            value={user.phone}
                            onChange={handleChange}
                        />
                    </label>
                </div>


                <div className={styles.input_field}>
                    <label htmlFor="message">
                        Enter Your Message :
                        <textarea name="message" id="message" rows="6"
                            placeholder='enter your message'
                            required
                            className={mulish.className}
                            value={user.message}
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <div>


                    {status === 'sucess' && <p className={styles.success_msg}>thank you from your message</p>}
                    {status === 'error' && <p className={styles.error_msg}>there was an error while submitting</p>}

                    <button type="submit" className={buttonStyle.btn} >
                        Send Message
                    </button>
                </div>

            </form>


        </>
    )
}

export default ContactForm;