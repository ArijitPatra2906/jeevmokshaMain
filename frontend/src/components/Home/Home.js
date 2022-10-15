import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { useState, useRef } from 'react'
import "./Home.css"
import leftImage from "../../assets/image 32.png"
import rightImage from "../../assets/image 33.png"
import BasicModal from '../Modal/BasicModal';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Modal } from '@mui/material';
import scr3img1 from "../../assets/sctn 4 1.png"
import scr3img2 from "../../assets/sctn 4 2.png"
import scr3img3 from "../../assets/sctn 4 3.png"
import scr3img4 from "../../assets/sctn 4 4.png"
import scr3img5 from "../../assets/newimages/yoga alignment 3.jpg"
import scr4img1 from "../../assets/sctn 5 1.png"
import scr4img2 from "../../assets/newimages/ganga arti.jpg"
import scr4img3 from "../../assets/sctn 5 3.png"
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import emailjs from "emailjs-com"
import { X } from 'react-feather';





const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <p className="text">
            {isReadMore ? text.slice(0, 228) : text}
            <button onClick={toggleReadMore} className="read-or-hide">
                {isReadMore ? "Read More" : " Show Less"}
            </button>
        </p>
    );
};



function Home() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [subject, setSubject] = useState()
    const [message, setMessage] = useState()
    const [open, setOpen] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [Read, setRead] = useState(false);
    const readMore = () => setRead(true)
    const handleReadMoreClose = () => setRead(false);

    const onCheckboxClick = () => {
        setIsDisabled(!isDisabled)
    }
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
                "https://jeevmokshayogamain.herokuapp.com/contact",
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
            <Grid container spacing={3}>
                <Grid item xs={12} className='landing_container'>
                    <Box className='landing_section'>
                        <Box className='landing_text'>
                            <h1 style={{
                                fontFamily: "Crimson Text", fontSize: "44px", textAlign: "left"
                            }} className='text1'>
                                <span>Jeevmoksha Yoga</span> : Best Yoga <br />Teacher Training in Rishikesh
                            </h1>
                        </Box>
                        <Box className="stream" style={{ width: "450px" }}>
                            <h4 className='text2' style={{
                                fontFamily: "Open Sans", fontSize: "16px"
                            }}>

                                <ReadMore>
                                    JeevMoksha! The name is associated with a tradition which is timeless in that it’s the very essence of life. We all are continually seeking well being and freedom from the sickness, disorders and limitation of body mind in life. Yoga stands out to be an age old system which provides us with necessary tools to attain the said freedom. JeevMoksha Yoga is an integral style of yoga which addresses all the dimension of human beings to attain freedom. The combination of Asanas, Kriyas, Pranayama, Bandhas, Relaxation and Meditations, allows for an all round development of health and personality which improves the quality of life of the person.
                                    Yoga for us is a universal system of well being and finding the real behind the unreal. JeevMoksha is a calling for all those who are seeking and willing to transform themselves for good and embrace the divine in each of us.
                                </ReadMore>


                            </h4>
                        </Box>
                        <button className='start' onClick={handleOpen}>
                            APPLY NOW
                        </button>
                    </Box>
                </Grid>
                <Grid className='home_container' item xs={12}>
                    <Box className="home_section">
                        <Box className='home_text'>
                            <Typography variant='h2' fontFamily="Crimson Text" className='home_text_1'>
                                <span>Jeevmoksha Yoga</span> : Best Yoga <br />Teacher Training in Rishikesh
                            </Typography>
                        </Box>
                        <Box className="home">
                            <Typography className='home_text_2' fontFamily="open sans" fontSize="16px" fontWeight="800"> Stream hundreds of expertly led yoga & meditation classes on any device. <br />
                                Your free trial awaits. Cancel online anytime.
                                <button style={{ background: "none", border: "none", outline: "none", color: "#906a47", fontWeight: 600 }} onClick={readMore}>Read more</button>
                            </Typography>
                            {Read &&
                                <Modal
                                    open={readMore}
                                    onClose={handleReadMoreClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box className='modal_read' p={5}>
                                        <X onClick={handleReadMoreClose} className="modal_icon" />
                                        <Typography fontSize={14} color="white">JeevMoksha! The name is associated with a tradition which is timeless in that it’s the very essence of life. We all are continually seeking well being and freedom from the sickness, disorders and limitation of body mind in life. Yoga stands out to be an age old system which provides us with necessary tools to attain the said freedom. JeevMoksha Yoga is an integral style of yoga which addresses all the dimension of human beings to attain freedom. The combination of Asanas, Kriyas, Pranayama, Bandhas, Relaxation and Meditations, allows for an all round development of health and personality which improves the quality of life of the person. <br /> <br />
                                            Our style is a personalized approach to yoga to allow each and every individual to explore and discover their own Yoga. Tradition is an integral part of learning for us as it allows to find the authenticity in what we learn. As the ancient home and birth place  of yoga, India has a lot to offer in terms of the holistic and scientific application of yoga as a lifestyle and we believe it to be our priority to give our students the experience which they are looking for self growth and transformation. Along with that we also give them the tools to be able to share their learning and experiences in their communities and society. <br /> <br />
                                            Yoga for us is a universal system of well being and finding the real behind the unreal. JeevMoksha is a calling for all those who are seeking and willing to transform themselves for good and embrace the divine in each of us. <br /> <br />
                                            JeevMoksha Yoga Gurukul || RYS in Rishikesh, India.
                                            Jeevmoksha yoga gurukul is a certified yoga training center in Rishikesh, India conducting 200 & 500 hours yoga teacher training duly certified by Yoga Alliance. It is located among the natural surroundings with lots of green cover around to provide abundant Prana energy needed for maintaining vitality. Our yoga teacher training courses are a fine blend of Ashtanga yoga, Hatha yoga, Kundalini yoga, Mantra yoga, Karma yoga and Ayurvedic regimen of diet and lifestyle. <br /> <br />
                                            Program are conducted in a homely ashram environment which includes a dedicated space for yoga and giving a wide range of knowledge on ancient systems of self-healing and well being.. This virtue makes Jeevmoksha a unique spot for the study of Yoga in Rishikesh, INDIA.<br /> <br />

                                            CONDUCTING YOGA TEACHER TRAINING FOR LAST 9 YEARS SUCCESSFULLY !!!

                                        </Typography>
                                    </Box>
                                </Modal>}
                        </Box>
                    </Box>
                    <button className='start' onClick={handleOpen}>
                        APPLY NOW
                    </button>
                </Grid>
                <Grid className='section' item xs={12}>
                    <Box className='philosophy'>
                        <img className='philosophy_leftimage' src={leftImage} alt="leftImage" />
                    </Box>
                    <Box className='philosophy_text'>
                        <h3 className='texxxt' >
                            Our Philosophy
                        </h3>
                        <Typography fontSize="14px" fontFamily="Sora" fontWeight="600">

                            Our style is a personalized approach to yoga to allow each and every individual to explore and discover their own Yoga. <br />  Tradition is an integral part of learning for us as it allows to find the authenticity in what we learn. <br /> As the ancient home and birth place  of yoga, India has a lot to offer in terms of the holistic and scientific application of yoga as a lifestyle and we believe it to be our priority to give our students the experience which they are looking for self growth and transformation. Along with that we also give them the tools to be able to share their learning and experiences in their communities and society.
                        </Typography>
                    </Box>
                    <Box className='philosophy'>
                        <img className='philosophy_rightimage' src={rightImage} alt="rightImage" />
                    </Box>
                </Grid>

                <Grid className='screen2' item xs={12}>
                    <Box className="back">
                        <Typography className='screen2_heading' fontSize="40px" fontFamily="Fahkwang">
                            JeevMoksha Yoga Gurukul || RYS in Rishikesh, India.
                        </Typography>
                        <Typography className='screen2_subheading' fontSize="16px" fontFamily="Sora" style={{ width: "50%", margin: "auto", textAlign: "center" }}>
                            Jeevmoksha yoga gurukul is a certified yoga training center in Rishikesh, India conducting 200 & 500 hours yoga teacher training duly certified by Yoga Alliance. It is located among the natural surroundings with lots of green cover around to provide abundant Prana energy needed for maintaining vitality. Our yoga teacher training courses are a fine blend of Ashtanga yoga, Hatha yoga, Kundalini yoga, Mantra yoga, Karma yoga and Ayurvedic regimen of diet and lifestyle.
                            <br />
                            <br />
                            Program are conducted in a homely ashram environment which includes a dedicated space for yoga and giving a wide range of knowledge on ancient systems of self-healing and well being.. This virtue makes Jeevmoksha a unique spot for the study of Yoga in Rishikesh, INDIA.
                            <br />
                            <br />
                            CONDUCTING YOGA TEACHER TRAINING FOR LAST 9 YEARS SUCCESSFULLY !!!
                        </Typography>
                        <button className='screen2_btn' onClick={handleOpen} style={{ marginTop: "100px" }}>
                            Book Now
                        </button>
                    </Box>
                </Grid>

                <Grid className='screen3' item xs={12}>
                    <Typography style={{ fontWeight: "700", fontFamily: "Fahkwang", fontSize: "32px", textAlign: "center", background: "#DFCBB5", marginTop: "-24px", padding: "2.5rem 0" }}>Why Choose Us?</Typography>
                    <Grid item xs={12} className='scr3' >
                        <Box className="sec3_card">
                            <Card className='card_main' sx={{ maxWidth: 300, maxHeight: 600, bgcolor: "transparent", border: 'none', boxShadow: "none" }} >
                                <CardActionArea >
                                    <CardMedia className="cardImage"
                                        component="img"
                                        height="200"
                                        image={scr3img1}
                                        alt="green iguana"
                                    />
                                    <CardContent className="cardContent">
                                        <Typography fontSize="18px" fontWeight="700" mb={1.3} lineHeight={1.5} fontFamily="inter" gutterBottom color="white" variant="h7" textAlign="left" component="div">
                                            Authentic Yoga Gurus
                                        </Typography>
                                        <div className='hover'>
                                            <Typography fontSize="12px" textAlign="left" letterSpacing={1} fontWeight="500" variant="body2" color="white">
                                                All our teachers are experts in their relevant fields. What makes them special is that they too are solely dedicated to the development of our students ONLY.
                                            </Typography>
                                        </div>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card className='card_main card_main3' sx={{ maxWidth: 300, maxHeight: 600, bgcolor: "transparent", border: 'none', boxShadow: "none" }} >
                                <CardActionArea >
                                    <CardMedia
                                        className="cardImage"
                                        component="img"
                                        height="200"
                                        image={scr3img2}
                                        alt="green iguana"
                                    />
                                    <CardContent className="cardContent">
                                        <Typography fontSize="18px" fontWeight="700" mb={1.3} lineHeight={1.5} fontFamily="inter" gutterBottom variant="h7" textAlign="left" color="white" component="div">
                                            Undiluted, Spot on Concepts
                                        </Typography>

                                        <div className="hover">
                                            <Typography fontSize="12px" textAlign="left" letterSpacing={1} fontWeight="500" variant="body2" color="white">
                                                You know you are in the right path when you have followed the <br /> age old wisdom of your masters for decades. And you know you <br /> can’t be wrong when someone who has done it teaches you <br /> personally.
                                            </Typography>
                                        </div>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card className='card_main' sx={{ maxWidth: 300, maxHeight: 600, bgcolor: "transparent", border: 'none', boxShadow: "none" }} >
                                <CardActionArea >
                                    <CardMedia
                                        className="cardImage"
                                        component="img"
                                        height="200"
                                        image={scr3img3}
                                        alt="green iguana"
                                    />
                                    <CardContent className="cardContent">
                                        <Typography fontSize="18px" fontWeight="700" mb={1.3} lineHeight={1.5} fontFamily="inter" gutterBottom variant="h7" textAlign="left" color="white" component="div">
                                            Teacher Training Courses Every Month
                                        </Typography>
                                        <div className="hover">
                                            <Typography fontSize="12px" textAlign="left" letterSpacing={1} fontWeight="500" variant="body2" color="white">
                                                We are dedicated to impart quality yoga teacher training <br /> education to our students. And we work tirelessly yet happily <br /> month after month. Burnout? It’s what we love.
                                            </Typography>
                                        </div>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Box>
                        <Box className="sec3_card2">
                            <Card className='card_main' sx={{ maxWidth: 300, maxHeight: 600, bgcolor: "transparent", border: 'none', boxShadow: "none" }} >
                                <CardActionArea >
                                    <CardMedia className="cardImage"
                                        component="img"
                                        height="200"
                                        image={scr3img4}
                                        alt="green iguana"
                                    />
                                    <CardContent className="cardContent">
                                        <Typography fontSize="18px" fontWeight="700" mb={1.3} lineHeight={1.5} fontFamily="inter" gutterBottom color="white" variant="h7" textAlign="left" component="div">
                                            Rated 4.6/5, Registered Yoga School (RYS)
                                        </Typography>
                                        <div className="hover">

                                            <Typography fontSize="12px" textAlign="left" letterSpacing={1} fontWeight="500" variant="body2" color="white">
                                                Being recognized is good. Being recognized for doing good is <br /> even better. We are a certified school by Yoga Alliance for 200 <br /> (beginner), 300 Hours (intermediate), and 500 Hours (advanced <br /> level).
                                            </Typography>
                                        </div>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card className='card_main' sx={{ maxWidth: 300, maxHeight: 600, bgcolor: "transparent", border: 'none', boxShadow: "none" }} >
                                <CardActionArea >
                                    <CardMedia
                                        className="cardImage"
                                        component="img"
                                        height="200"
                                        image={scr3img5}
                                        alt="green iguana"
                                    />
                                    <CardContent className="cardContent">
                                        <Typography fontSize="18px" fontWeight="700" mb={1.3} lineHeight={1.5} fontFamily="inter" gutterBottom variant="h7" textAlign="left" color="white" component="div">
                                            Increased Training Contact Hours
                                        </Typography>
                                        <div className="hover">
                                            <Typography fontSize="12px" textAlign="left" letterSpacing={1} fontWeight="500" variant="body2" color="white">
                                                Every single aspect of the course is taught in detail. The practice <br /> will push you to your limits. The classes are not just plain old <br /> lectures but myth busters.
                                            </Typography>
                                        </div>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Box>
                    </Grid>
                </Grid>


                <Grid className='screen4' item xs={12}>
                    <div className='screen4_section'>
                        <div class="scr4_images">
                            <div class="scr4_image">
                                <img src={scr4img1} alt="scr4img1" />
                                <div class="centered">
                                    <Typography fontSize="22px" fontWeight="600" color="white" mb={2}>
                                        200 Hour Yoga Teacher Training
                                    </Typography>
                                    <button className='book' onClick={handleOpen}>
                                        Book Now
                                    </button>
                                </div>
                            </div>
                            <div class="scr4_image">
                                <img src={scr4img2} alt="scr4img1" />
                                <div class="centered">
                                    <Typography fontSize="22px" fontWeight="600" color="white" mb={2}>
                                        200 Hour Yoga Teacher Training
                                    </Typography>
                                    <button className='book' onClick={handleOpen}>
                                        Book Now
                                    </button>
                                </div>
                            </div>
                            <div class="scr4_image">
                                <img src={scr4img3} alt="scr4img1" />
                                <div class="centered">
                                    <Typography fontSize="22px" fontWeight="600" color="white" mb={2}>
                                        200 Hour Yoga Teacher Training
                                    </Typography>
                                    <button className='book' onClick={handleOpen}>
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {open && <BasicModal open={open} setOpen={setOpen} handleClose={handleClose} handleOpen={handleOpen} onCheckboxClick={onCheckboxClick} isDisabled={isDisabled} />}

                </Grid>
                {open && <BasicModal open={open} setOpen={setOpen} handleClose={handleClose} handleOpen={handleOpen} onCheckboxClick={onCheckboxClick} isDisabled={isDisabled} />}
                <Grid className='screen5' item xs={12}>
                    <Box className="screen_5">
                        <Typography className="screen5_heading" fontSize="40px" fontWeight="700" fontFamily="Fahkwang">
                            Yogvriti: Shambhavi Mudra Keys to <br /> Transecdence
                        </Typography>
                        <Typography className="screen5_subheading" fontSize="14px" fontWeight="600" fontFamily="Sora">

                            Pancha Kosha is a Sanskrit term made up of two words Pancha and Kosha. Pancha means ‘’five’’, and <br /> Kosha means ‘’sheath’’or ‘’layer’’.The concept of Pancha Kosha or five cardinal layers or sheaths was <br /> elucidated in many sacred Ancient Hindu texts like Taittiriya...
                            <br />Read More
                        </Typography>
                    </Box>
                    <button className='scr5_btn'>
                        Read More
                    </button>
                </Grid>

                <Grid className='screen6' item xs={12}>
                    <Box className='touch'>
                        <Typography fontWeight="700" fontSize="42px" >Get In Touch</Typography>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="get">
                                <textarea className="text_input_field" type="text" name="name" required onChange={(e) => setName(e.target.value)} placeholder="Name*" /> <br />
                                <input className="number_input_field" type="number" name="phone" required onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number*" /> <br />
                                <input className="email_input_field" type="email" name="email" required onChange={(e) => setEmail(e.target.value)} placeholder="Email*" /> <br />
                                <textarea className="text_input_field" type="text" name="subject" required onChange={(e) => setSubject(e.target.value)} placeholder="Message Subject*" /> <br />
                                <textarea className="text_textarea_field" type="text" name="message" required onChange={(e) => setMessage(e.target.value)} placeholder='Message*' /> <br />
                            </div>
                            <button className='submit' onClick={handleSubmit}>Submit</button>
                        </form>
                    </Box>
                </Grid>
            </Grid>
            <ToastContainer />
        </Box >
    )
}

export default Home;