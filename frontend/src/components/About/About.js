import { Box, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import "./About.css"
import image45 from "../../assets/image 45.png"
import image46 from "../../assets/image 46.png"
import image47 from "../../assets/image 47.png"
import image48 from "../../assets/image 48.png"
import image49 from "../../assets/image 49.png"
import image50 from "../../assets/image 50.png"
import image51 from "../../assets/image 51.png"
import image52 from "../../assets/image 52.png"
import { Helmet } from 'react-helmet'
import BasicModal from '../Modal/BasicModal'

function About() {
    const [open, setOpen] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const onCheckboxClick = () => {
        setIsDisabled(!isDisabled)
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Helmet>
                <title>AboutJeevmoksha | Yoga Rishikesh | Rishikesh Yoga | Residential yoga courses rishikesh</title>
                <meta
                    name="title"
                    content="AboutJeevmoksha, Yoga Rishikesh , Rishikesh Yoga , Residential yoga courses rishikesh"
                />
                <meta
                    name="description"
                    content="Get more details related to Teachings with a Purpose, Top Class Instructors, Personal Attention, Collaborative Environment, Advanced Teaching Methods, Focus on your Knowledge Growth and more info, visit the about jeevmoksha today."
                />
            </Helmet>
            <Grid container spacing={3}>
                <Grid item xs={12} className='about_container'>
                    <Box className='about_section'>
                        <Box className='about_text'>
                            <h1 style={{
                                fontFamily: "Crimson Text", fontSize: "44px", textAlign: "left"
                            }} className='about_text1'>
                                <span>Jeevmoksha Yoga</span> : Best Yoga <br />Teacher Training in Rishikesh
                            </h1>
                        </Box>
                        <Box className="about" >
                            <h4 className='about_text2' style={{
                                fontFamily: "Open Sans", fontSize: "16px"
                            }}>
                                Stream hundreds of expertly led yoga & meditation classes on any device. <br />
                                Your free trial awaits. Cancel online anytime.
                            </h4>
                        </Box>
                        <button className='start' onClick={handleOpen}>
                            Start your free trial
                        </button>
                        {open && <BasicModal open={open} setOpen={setOpen} handleClose={handleClose} handleOpen={handleOpen} onCheckboxClick={onCheckboxClick} isDisabled={isDisabled} />}
                    </Box>
                </Grid>
                <Grid className='about_screen2' item xs={12}>
                    <Box className="about_content">
                        <h3 className="about_screen2_heading">You cannot always control what goes on outside,but you can always control what goes on inside.</h3>
                        <Box className="about_cards">
                            <Box className="sec3_about_card">
                                <Box className='about_card_main' sx={{
                                    bgcolor: "#996a3f8a", border: 'none', boxShadow: "none", borderRadius: "70px",
                                }} >
                                    <Box className='about_card_content' pt={5}>
                                        <img className="about_cardImage"
                                            src={image45}
                                            alt="about_image"
                                        />
                                        <Box className="about_cardContent">
                                            <Typography width={300} fontFamily="Crimson text" color="#375B26" fontSize="18px" fontWeight="700" mb={2} lineHeight={2} gutterBottom variant="h7" textAlign="center" component="div">
                                                Teachings with a Purpose
                                            </Typography>

                                            <Typography fontFamily="sora" className='about_card_paragraph' width={300} fontSize="12px" textAlign="left" letterSpacing={1} fontWeight="500" variant="body2" color="#fff">
                                                We as a human being are physically evolving. How is our soul evolving with the time? How can yoga, meditation and traditions help us evolve? Let’s explore.
                                            </Typography>

                                        </Box>
                                    </Box>
                                </Box>
                                <Box className='about_card_main' sx={{
                                    bgcolor: "#996a3f8a", border: 'none', boxShadow: "none", borderRadius: "70px",
                                }} >
                                    <Box className='about_card_content' pt={5}>
                                        <img className="about_cardImage"
                                            src={image46}
                                            alt="about_image"
                                        />
                                        <Box className="about_cardContent">
                                            <Typography width={300} fontFamily="Crimson text" color="#375B26" fontSize="18px" fontWeight="700" mb={2} lineHeight={2} gutterBottom variant="h7" textAlign="center" component="div">
                                                Top Class Instructors
                                            </Typography>

                                            <Typography fontFamily="sora" className='about_card_paragraph' width={300} fontSize="12px" textAlign="left" letterSpacing={1} fontWeight="500" variant="body2" color="#fff">
                                                Degrees don’t define our instructors. The spirit of service does. Nonetheless, all our instructors are Master’s degrees holders in their relevant discipline.
                                            </Typography>

                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="sec3_about_card2">
                                <Box className='about_card_main' sx={{
                                    bgcolor: "#996a3f8a", border: 'none', boxShadow: "none", borderRadius: "70px",
                                }} >
                                    <Box className='about_card_content' pt={5}>
                                        <img className="about_cardImage"
                                            src={image52}
                                            alt="about_image"
                                        />
                                        <Box className="about_cardContent">
                                            <Typography width={300} fontFamily="Crimson text" color="#375B26" fontSize="18px" fontWeight="700" mb={2} lineHeight={2} gutterBottom variant="h7" textAlign="center" component="div">
                                                Personal Attention
                                            </Typography>

                                            <Typography fontFamily="sora" className='about_card_paragraph' width={300} fontSize="12px" textAlign="left" letterSpacing={1} fontWeight="500" variant="body2" color="#fff">
                                                With 12 students in a class and 6 teachers,we maintain a student teacher ratio of 2:1.Imagine how personal we can get in 28 days of togetherness.
                                            </Typography>

                                        </Box>
                                    </Box>
                                </Box>
                                <Box className='about_card_main' sx={{
                                    bgcolor: "#996a3f8a", border: 'none', boxShadow: "none", borderRadius: "70px",
                                }} >
                                    <Box className='about_card_content' pt={5}>
                                        <img className="about_cardImage"
                                            src={image47}
                                            alt="about_image"
                                        />
                                        <Box className="about_cardContent">
                                            <Typography width={300} fontFamily="Crimson text" color="#375B26" fontSize="18px" fontWeight="700" mb={2} lineHeight={2} gutterBottom variant="h7" textAlign="center" component="div">
                                                Collaborative Environment
                                            </Typography>

                                            <Typography fontFamily="sora" className='about_card_paragraph' width={300} fontSize="12px" textAlign="left" letterSpacing={1} fontWeight="500" variant="body2" color="#fff">
                                                And imagine how close 12 like-minded students staying at our ashram can become? Every month, it’s a small world at our ashram, with students from all over the globe.
                                            </Typography>

                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="sec3_about_card3">
                                <Box className='about_card_main' sx={{
                                    bgcolor: "#996a3f8a", border: 'none', boxShadow: "none", borderRadius: "70px",
                                }} >
                                    <Box className='about_card_content' pt={5}>
                                        <img className="about_cardImage"
                                            src={image48}
                                            alt="about_image"
                                        />
                                        <Box className="about_cardContent">
                                            <Typography width={300} fontFamily="Crimson text" color="#375B26" fontSize="18px" fontWeight="700" mb={2} lineHeight={2} gutterBottom variant="h7" textAlign="center" component="div">
                                                Advanced Teaching Methods
                                            </Typography>

                                            <Typography fontFamily="sora" className='about_card_paragraph' width={300} fontSize="12px" textAlign="left" letterSpacing={1} fontWeight="500" variant="body2" color="#fff">
                                                Not just Hatha yoga, we offer a unique combination of Hatha and Raja Yoga. We not only teach asanas, we expect you to teach us back before you leave.
                                            </Typography>

                                        </Box>
                                    </Box>
                                </Box>
                                <Box className='about_card_main' sx={{
                                    bgcolor: "#996a3f8a", border: 'none', boxShadow: "none", borderRadius: "70px",
                                }} >
                                    <Box className='about_card_content' pt={5}>
                                        <img className="about_cardImage"
                                            src={image49}
                                            alt="about_image"
                                        />
                                        <Box className="about_cardContent">
                                            <Typography width={300} fontFamily="Crimson text" color="#375B26" fontSize="18px" fontWeight="700" mb={2} lineHeight={2} gutterBottom variant="h7" textAlign="center" component="div">
                                                Focus on your Knowledge Growth
                                            </Typography>

                                            <Typography fontFamily="sora" className='about_card_paragraph' width={300} fontSize="12px" textAlign="left" letterSpacing={1} fontWeight="500" variant="body2" color="#fff">
                                                If you have not gained enough knowledge before you leave us. We have failed! We want to see clear through every student. You just have to allow us.
                                            </Typography>

                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="sec3_about_card4">
                                <Box className='about_card_main' sx={{
                                    bgcolor: "#996a3f8a", border: 'none', boxShadow: "none", borderRadius: "70px",
                                }} >
                                    <Box className='about_card_content' pt={5}>
                                        <img className="about_cardImage"
                                            src={image50}
                                            alt="about_image"
                                        />
                                        <Box className="about_cardContent">
                                            <Typography width={300} fontFamily="Crimson text" color="#375B26" fontSize="18px" fontWeight="700" mb={2} lineHeight={2} gutterBottom variant="h7" textAlign="center" component="div">
                                                Strict Course Schedule
                                            </Typography>

                                            <Typography fontFamily="sora" className='about_card_paragraph' width={300} fontSize="12px" textAlign="left" letterSpacing={1} fontWeight="500" variant="body2" color="#fff">
                                                We have worked hard to create a curriculum that is suitable for all levels of yoga practitioners. It won’t be of much help if it is not timely delivered. We work hard to give the best of our knowledge to you. And we do it within our clearly defined course curriculum time.
                                            </Typography>

                                        </Box>
                                    </Box>
                                </Box>
                                <Box className='about_card_main' sx={{
                                    bgcolor: "#996a3f8a", border: 'none', boxShadow: "none", borderRadius: "70px",
                                }} >
                                    <Box className='about_card_content' pt={5}>
                                        <img className="about_cardImage"
                                            src={image51}
                                            alt="about_image"
                                        />
                                        <Box className="about_cardContent">
                                            <Typography width={300} fontFamily="Crimson text" color="#375B26" fontSize="18px" fontWeight="700" mb={2} lineHeight={2} gutterBottom variant="h7" textAlign="center" component="div">
                                                Love
                                            </Typography>

                                            <Typography fontFamily="sora" className='about_card_paragraph' width={300} fontSize="12px" textAlign="left" letterSpacing={1} fontWeight="500" variant="body2" color="#fff">

                                                We are not all too rigidly disciplined. If there is one thing we want you to remember us for, it is the love you will receive from us. But again, we are a knowledge imparting institution first and there is no way we mix professional curriculum to our personal love for you.
                                            </Typography>

                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box >
    )
}

export default About