import { Container, Typography, Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import "./Courses2.css"
import BasicModal from '../Modal/BasicModal';
import { Helmet } from 'react-helmet';

function Courses2() {
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
                <title>500 hours yoga teacher training rishikesh  | 500 hours yoga teacher training in rishikesh | rishikesh 500 hours yoga teacher training</title>
                <meta
                    name="title"
                    content="500 hours yoga teacher training rishikesh  , 500 hours yoga teacher training in rishikesh , rishikesh 500 hours yoga teacher training"
                />
                <meta
                    name="description"
                    content="It’s time to learn a 500 hours yoga teacher training rishikesh with JeevMoksha. We are known as Best rishikesh 500 hours yoga teacher training. To learn yoga and their details, visit now."
                />
            </Helmet>
            <Grid container spacing={3}>
                <Grid className='course2_container' item xs={12}>
                    <Container maxWidth="xl" style={{ paddingTop: "70px" }}>
                        <Grid item className="course2_card">
                            <Box className='course2_text'>
                                <Typography variant='h2' fontFamily="Crimson Text" className='course2_text_1'>
                                    <span>500 Hour Yoga Teacher <br /> Training </span> in Rishikesh
                                </Typography>
                            </Box>
                            <Grid item className="yoga_course2" style={{ display: "flex", marginLeft: "50px", marginTop: "20px" }}>
                                <Typography className='course_text2_2' fontFamily="open sans" fontSize="16px" fontWeight="800">
                                    YOGA TEACHER TRAINING IN RISHIKESH,INDIA
                                </Typography>
                            </Grid>
                        </Grid>
                        <button className='join2' onClick={handleOpen}>
                            Join Our Community
                        </button>
                    </Container>
                </Grid>
                <Grid className='course2_screen2' style={{ background: "#8E8E8E5E" }} item xs={12}>
                    <Box className='course_scr2'>
                        <Box className='scr2_left'>
                        </Box>
                        <Box className='scr2_right'>
                            <Box className='content'>
                                <Typography fontWeight="600" fontFamily="sora" pt={6} pl={5} pr={4} textAlign="left" color="black" style={{ opacity: "0.9" }}>Immerse into a learning experience that will completely transform your mind, body, and soul with our 500 hours of Yoga Teacher Training Course.<br /> <br />
                                    500 hours Yoga Teacher Training Course aims to provide a strong foundation for individuals who want to embark on their journey ahead as certified yoga teachers.<br /> <br />
                                    The duration of the course is 55 days, where you will deepen your basic learning in yoga, practice it and take it ahead professionally as a career.<br /> <br />
                                    Our curriculum will enhance your learning at various levels: mentally, spiritually, and physically. </Typography>
                                <button className='cource2_scr2_btn' onClick={handleOpen}>
                                    Join Us
                                </button>
                                {open && <BasicModal open={open} setOpen={setOpen} handleClose={handleClose} handleOpen={handleOpen} onCheckboxClick={onCheckboxClick} isDisabled={isDisabled} />}

                            </Box>
                        </Box>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    )
}

export default Courses2