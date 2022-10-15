import { Box, Grid, Typography } from '@mui/material'
import React, { useState, useRef } from 'react'
import "./Contact.css"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import emailjs from "emailjs-com"
import { Helmet } from 'react-helmet'

function Contact() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [subject, setSubject] = useState()
    const [message, setMessage] = useState()

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_2wcec3r', 'template_fqjmj5k', form.current, 'vbdnn6xD8B1UBwET4')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    const handleSubmit = async () => {
        if (!name || !email || !phone || !subject || !message) {
            toast.warning('Please Fill all the fields', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            return;
        }
        try {

            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            };
            const { data } = await axios.post(
                "https://jeevmokshayogamain.herokuapp.com//contact",
                { email, name, phone, subject, message },
                config
            );
            console.log(data);
            toast.success('Thanks For contact us!!', {
                position: "top-middle",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            // sendEmail()
        } catch (error) {
            console.log(error)
            toast.error('Something went wrong,try again!!', {
                position: "top-middle",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
    }


    return (
        <Box sx={{ flexGrow: 1 }}>
            <Helmet>
                <title>contact-us | jeevmokshayoga | jeevmoksha yoga</title>
                <meta
                    name="title"
                    content="contact-us , jeevmokshayoga , jeevmoksha yoga"
                />
                <meta
                    name="description"
                    content="Do you want to Learn Yoga or Join professional courses? Visit the JeevMoksha and fill out the form. We will contact you soon. Either you can feel free to call us @+91-97608-16686 or Email on:jeevmoksha@gmail.com"
                />
            </Helmet>
            <Grid container spacing={3}>
                <Grid className='contact_container' item xs={12}>
                    <Typography variant='h2' pb={3} pt={3} fontFamily="Crimson Text" color="grey">Contact us</Typography>

                    <div className='contact_main'>
                        <form className='contact_form' ref={form} onSubmit={sendEmail}>
                            <div className="contact_input">
                                <input
                                    required
                                    name="name"
                                    value={name}
                                    type="text"
                                    placeholder="Full Name*"
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <br />
                                <input
                                    required
                                    name="phone"
                                    type="number"
                                    placeholder="Contact Number*"
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                                <br />
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    placeholder="Email*"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <br />
                                <input
                                    required
                                    type="text"
                                    name="subject"
                                    placeholder='Message Subject*'
                                    onChange={(e) => setSubject(e.target.value)}
                                />
                                <br />
                                <textarea
                                    required
                                    name="message"
                                    type="text"
                                    placeholder='Message*'
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                                <br />
                            </div>
                            <button className='send' onClick={handleSubmit}>Submit</button>
                        </form>
                        <div className='map'>
                            <iframe
                                title='map'
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110471.12527592308!2d78.2005679862346!3d30.087808717476307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39093e67cf93f111%3A0xcc78804a6f941bfe!2sRishikesh%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1662474457707!5m2!1sen!2sin"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </Grid>
            </Grid>
            <ToastContainer />
        </Box>
    )
}

export default Contact
