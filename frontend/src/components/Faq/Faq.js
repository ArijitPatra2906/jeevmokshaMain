import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./Faq.css"
import AddIcon from '@mui/icons-material/Add';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import axios from "axios"
import { Helmet } from 'react-helmet';

function Faq() {
    const [loading, setLoading] = useState(false)
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const [faq, setFaq] = useState([])


    useEffect(() => {
        setLoading(true)
        const getFaq = async () => {
            const result = await axios.get("https://jeevmokshayogamain.herokuapp.com/faq");
            setFaq(result.data)
            // console.log(faq)
            setLoading(false)
        };
        getFaq()
    }, [])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Helmet>
                <title>faqs | Yoga courses in Rishikesh India | Yoga Retreats in Rishikesh</title>
                <meta
                    name="title"
                    content="faqs , Yoga courses in Rishikesh India , Yoga Retreats in Rishikesh"
                />
                <meta
                    name="description"
                    content="Find out the FAQS of latest Yoga courses in Rishikesh India at JeevMoksha and get a solutions of important queries now."
                />
            </Helmet>
            <Grid container spacing={3}>
                <Grid className='faq_container' item xs={12}>
                    <Grid className='faq_main' item xs={12}>
                        <Box className="faq_card">
                            <Box className='faq_text'>
                                <Typography variant='h2' fontFamily="Crimson Text" className='faq_text_1'>
                                    <span>
                                        Got any doubts about Yoga</span> in <br />Rishikesh
                                </Typography>
                            </Box>
                        </Box>
                        <button className='faq_btn'>
                            <a href="tel: 9760816686">Call us </a>
                        </button>
                    </Grid>
                </Grid>

                <Grid className='faq_screen_2' item xs={12} style={{ background: "#e9e6e3" }}>
                    <Typography className='faq_sec2_text' variant='h2' fontFamily="Crimson Text" fontWeight="600" display="flex" pt={4}>Fequently asked questions</Typography>

                    <div className='faq_main_section'>
                        <div className='faq_sec'>
                            {faq && faq?.map((f) => (
                                <Accordion style={{ marginBottom: "20px" }} onChange={handleChange()}>
                                    <AccordionSummary
                                        expandIcon={<AddIcon />}
                                        // shrinkIcon
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                    >
                                        <h4 sx={{ color: 'text.secondary' }}>{f.question}</h4>
                                    </AccordionSummary>
                                    <AccordionDetails >
                                        <h5>
                                            {f.answer}
                                        </h5>
                                    </AccordionDetails>
                                </Accordion>

                            ))}
                        </div>
                        <div className='faq_right'>
                            <ChatBubbleIcon />
                            <h4>Do you have more question?</h4>
                            <p>We will do our best to clear your doubts.Meet the right platform to help realize.</p>
                            <button className="faq_call_btn">
                                <a href="tel: 9760816686">Call us </a>
                            </button>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Box>


    )
}

export default Faq;