import React, { useState } from 'react'
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography, Modal } from '@mui/material'
import "./YogaTypes.css"
import cart1 from "../../assets/Rectangle 314.png"
import cart2 from "../../assets/Rectangle 316.png"
import cart3 from "../../assets/Rectangle 315.png"
import cart4 from "../../assets/Rectangle 320.png"
import { Helmet } from 'react-helmet'


const style = {
    position: 'absolute',
    top: '50%',
    left: '18%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'block'
};

const style2 = {
    position: 'absolute',
    top: '50%',
    left: '39%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const style3 = {
    position: 'absolute',
    top: '50%',
    left: '61%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function Yogatypes() {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const handleOpen1 = () => setOpen1(true);
    const handleOpen3 = () => setOpen3(true);
    const handleOpen2 = () => setOpen2(true);
   const handleClose1 = () => setOpen1(false)
   const handleClose2 = () => setOpen2(false)
   const handleClose3 = () => setOpen3(false)
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Helmet>
                <title>Yoga Types in Jeevmokshya</title>
                <meta
                    name="title"
                    content="Yoga Types in Jeevmokshya"
                />
                <meta
                    name="description"
                    content="Know more details of Yoga and their health benefits with JeevMoksha. We are known as the Best Yoga Ashram Rishikesh."
                />
            </Helmet>
            <Grid container spacing={3}>
                <Grid className='types_container' item xs={12}>
                    <Box className="types_card">
                        <Box className='types_text'>
                            <Typography variant='h3' fontFamily="Crimson Text" className='types_text_1'>
                                <span>Types of Yoga </span> in Rishikesh
                            </Typography>

                        </Box>
                        <Box className="yoga">
                            <Typography className='types_text_2' fontFamily="open sans" fontSize="16px" fontWeight="800">
                                YOGA TEACHER TRAINING IN RISHIKESH,INDIA
                            </Typography>
                        </Box>
                    </Box>
                    <button className='types_join_btn'>
                        Join Our Community
                    </button>
                </Grid>
                <Grid className='yoga_type_section' item xs={12} >
                    <Box className='types'>
                        <Box className="card1">
                            <Card sx={{ maxWidth: 300, maxHeight: 800 }} >
                                <CardActionArea >
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={cart1}
                                        alt="green iguana"
                                    />
                                    <CardContent >
                                        <Typography gutterBottom variant="h7" fontSize="16px" fontWeight="700" textAlign="left" component="div">
                                            Ashtanga Yoga of Patanjali
                                        </Typography>
                                        <Typography mt={1.5} fontSize="12px" textAlign="left" letterSpacing={1} fontWeight="500" variant="body2" color="#5A5A5A">
                                            Almost 3000 years ago, Maharishi Patanjali, gave us an exact antidote to all the diseases and stresses of mind in the form of his eightfold yoga popularly known as Ashtanga yoga. This system is composed of 8 sequential steps to follow which takes the practitioner from the gross aspects of behavior and conduct to the more subtle realms of psyche. The compatibility of this system of yoga lies in its logical and inclusive nature. It addresses all the spheres of human nature from the external habits and patterns to the role of body in making up the patterns and the deep layers of mind from where the behavior evolves. Ashtanga yoga teaches us how to manage our lives based upon the principles of acceptance and transformation.
                                        </Typography>
                                        <button className='card_btn' onClick={handleOpen1}>
                                            Read More
                                        </button>
                                        <Modal
                                            open={open1}
                                            onClose={handleClose1}
                                            aria-labelledby="modal-modal-title"
                                            aria-describedby="modal-modal-description"
                                            
                                        >
                                            <Box sx={style}  className="read-more">

                                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                                    1. Yam : 5 basic tenets of social behavior. These are fundamental transformational seeds for modifying the
                                                    way we interact with our society and community. These are said to be the great vows which initiates a
                                                    person on the path of yoga. 5 yamas are: <br />
                                                    1.1 Ahinsa: non violence  <br />
                                                    1.2 Satya: truthfulness  <br />
                                                    1.3 Asteya: non stealing  <br />
                                                    1.4 Aparigrah: non accumulation  <br />
                                                    1.5 Brahmcharya: celibacy  <br />
                                                    2. Niyam: another 5 codes of personal conduct. These forms the basis of a person self care and energy
                                                    management.  <br />
                                                    1.1 Shauch: personal hygiene  <br />
                                                    1.2 Santosh: self contentment  <br />
                                                    1.3 Swadhyay: self reflection and study  <br />
                                                    1.4 Tapas: continence  <br />
                                                    1.5 Ishwar pranidhan: dedication and gratitude  <br />
                                                    3. Asana : stable and comfortable body posture for attainment of mental tranquility.  <br />
                                                    4. Pranayama : Extension and control of breath and energy  <br />
                                                    5. Pratyahar : preparing the mind by relaxing the sensory activity  <br />
                                                    6. Dharana : developing the power of mind to be able to concentrate  <br />
                                                    7. Dhyana : merging the mind into an absolute state of meditation  <br />
                                                    8. Samadhi: state of bliss and joy, complete union of individual consciousness with the consciousness
                                                    absolute. And end to the world of duality and getting established in the ultimate Brahma.
                                                </Typography>
                                            </Box>
                                        </Modal>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card sx={{ maxWidth: 300, maxHeight: 850 }} >
                                <CardActionArea >
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={cart2}
                                        alt="green iguana"
                                    />
                                    <CardContent >
                                        <Typography gutterBottom variant="h7" fontSize="16px" fontWeight="700" textAlign="left" component="div">
                                            Hatha YOGA of Patanjali
                                        </Typography>
                                        <Typography mt={1.5} fontSize="12px" textAlign="left" letterSpacing={1} fontWeight="500" variant="body2" color="#5A5A5A">
                                            Hatha yoga was developed as a systematic approach in the several parts of India almost a thousand years ago. Some claims even goes beyond that, mentioning it to preexist then the above mentioned timeline. However it still is a holistic science of well being. Hatha yoga trains us to handle the energies in our systems which forms the very basis of life. It teaches that energy operates within two polarities to create what is called life. These polarities are depicted by the roots “HA” (vital force) & “THA” (mental force) respectively. Purpose is to balance the two forces in order to move on to the third dimensions. This is achieved by clearing the path ways of this energy and channelizing it through the several existential planes of an individual is the primary objective of hatha yoga. Similar to ashtanga yoga it also lays the foundation for 6 fold yoga practice. The main constituents however are more focused on energy channeling and control.
                                        </Typography>
                                        <button className='card_btn' onClick={handleOpen2}>
                                            Read More
                                        </button>
                                        <Modal
                                            open={open2}
                                            onClose={handleClose2}
                                            aria-labelledby="modal-modal-title"
                                            aria-describedby="modal-modal-description"
                                        >
                                            <Box sx={style2} className="read-more">

                                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                                    The major limbs are: <br />
                                                    1. Shatkarma: the six purificatory actions for a thorough clean up of the physical and energy pathways.
                                                    Includes: <br />
                                                    1.1 Neti: nasal cleansing <br />
                                                    1.2 Dhauti: abdominal cleansing <br />
                                                    1.3 Vasti: intestinal cleansing <br />
                                                    1.4 Tratak: mental stabilization <br />
                                                    1.5 Nauli: toning the abdominal region <br />
                                                    1.6 Kapalbhati: frontal brain cleansing <br />

                                                    2. Asana: physical postures which aims at attaining the disease free and flexible body. Also they aim towards
                                                    mobilizing the pranic energy into more subtle layers. Asanas are perfect tools for ensuring a sound health for
                                                    body and mind. There are a variety of asanas which are taught in several ways across the world, but all of
                                                    them find their origin in the hatha yoga system. <br />
                                                    3. Pranayama: expansion and control of energy via breath. <br />
                                                    4. Bandha: controlling and channelizing the energy in the body using locking postions at vivid sensitive spots. <br />
                                                    5. Mudra: gestures of physical body to allow for a smooth flow of prana. <br />
                                                    6. Dhyana: techniques to obtain tranquil state of mind. <br />
                                                    Hatha yoga prepares the individual for further practices of kundalini and ashtanga yoga. <br />
                                                </Typography>
                                            </Box>
                                        </Modal>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Box>
                        <Box className="card2">
                            <Card sx={{ maxWidth: 300, maxHeight: 850 }} >
                                <CardActionArea >
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={cart3}
                                        alt="green iguana"
                                    />
                                    <CardContent >
                                        <Typography gutterBottom variant="h7" fontSize="16px" fontWeight="700" textAlign="left" component="div">
                                            KUNDALINI YOGA of Patanjali
                                        </Typography>
                                        <Typography mt={1.5} fontSize="12px" textAlign="left" letterSpacing={1} fontWeight="500" variant="body2" color="#5A5A5A">
                                            Kundalini is the eternal form of life energy which is responsible for unfolding the universe in a creative dimension. It is said to be the mother of this existence. In individual beings this force manifest as all the creative aspects that a person can exhibit. We all have a kundalini energy residing in us to be harnessed and used for the highest purpose. In the spiritual world its said to be responsible for giving a person the highest experience of  Bliss absolute.
                                            Kundalini yoga is associated with activation of higher psychic center on an individual which are commonly known as Chakras. These are specific areas in the energy body which correlates with a particular dimension of human experience. Kundalini yoga activates these centers through certain practice by awakening of the force of kundalini which eventually penetrates each of the chakras along the spinal column to bring about the higher experiences in our lives.
                                        </Typography>
                                        <button className='card_btn' onClick={handleOpen3}>
                                            Read More
                                        </button>
                                        <Modal
                                            open={open3}
                                            onClose={handleClose3}
                                            aria-labelledby="modal-modal-title"
                                            aria-describedby="modal-modal-description"
                                        >
                                            <Box sx={style3} className="read-more">

                                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                                    The major chakras in human body are as follows.: <br/>
                                                    1. Mooladhar chakra: in the perineum <br/>
                                                    2. Swadhishtan chakra: at the tailbone <br/>
                                                    3. Manipura chakra: at the navel center <br/>
                                                    4. Anahat chakra: at the heart center <br/>
                                                    5. Vishuddha chakra: at the throat pit <br/>
                                                    6. Agya chakra: at the eyebrow center <br/>
                                                    7. Sahasrar chakar: at the crown of the head <br/>
                                                </Typography>
                                            </Box>
                                        </Modal>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card sx={{ maxWidth: 300, maxHeight: 850 }} >
                                <CardActionArea >
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={cart4}
                                        alt="green iguana"
                                    />
                                    <CardContent >
                                        <Typography gutterBottom variant="h7" fontSize="16px" fontWeight="700" textAlign="left" component="div">
                                            MANTRA YOGA of Patanjali
                                        </Typography>
                                        <Typography mt={1.5} fontSize="12px" textAlign="left" letterSpacing={1} fontWeight="500" variant="body2" color="#5A5A5A">
                                            Mantra word literally means repetition. When a sound is repeated consciously, it creates resonance on physical and psychic levels. This resonance is the key of mantra yoga. Repeating specially crafted sounds which are called Mantras, gives certain effects on our mental spheres.
                                            Japa or repetition is the key to mantra yoga. Repeating Mantras in certain number, on specific frequencies brings required results. Mantras brings positive energy, healing effects and transformation on body mind systems. This is an age old science established by seers of vedic tradition which is now also being approved and accepted by modern methods and standards of analysis. Effects of mantras on individuals is enormous in that it helps to recover from ailments and allow the mind to become tranquil.
                                        </Typography>
                                       
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Yogatypes