import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import "./BasicModal.css"
import { X } from 'react-feather';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import emailjs from "emailjs-com"


export default function BasicModal({ open, handleClose, onCheckboxClick, isDisabled }) {

    const [name, setName] = useState("")
    const [course, setCourse] = useState("")
    const [duration, setDuration] = useState("")
    const [room, setRoom] = useState("")
    const [phone, setPhone] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")
    const [country, setCountry] = useState("")
    const [reason, setReason] = useState("")
    const [message, setMessage] = useState("")

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_d8tj5pk', 'template_l64iycc', form.current, 'AXyKRna6Menikh99h')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    const submit = async () => {
        if (!name || !email || !phone || !age || !country) {
            toast.warning('Please Fill all the required fields', {
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
                "https://jeevmokshayogamain.herokuapp.com/booking",
                { email, name, phone, reason, course, duration, room, age, country, message },
                config
            );
            toast.success('Thanks For contact us!!', {
                position: "top-middle",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            console.log(data);
            window.location.reload()

        } catch (error) {
            console.log(error)
            toast.error('Something went wrong,try again!!', {
                position: "top-right",
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
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='modal_main' p={5}>
                    <X onClick={handleClose} className="modal_icon" />
                    <form ref={form} onSubmit={sendEmail}>
                        <div class="form-group">
                            <h3 className='headline' style={{ textAlign: "center", color: "#ffffff", marginTop: "-70px" }}>Jeevmoksha Registration</h3>
                            <h4 style={{ textAlign: "center", color: "#ffffff", marginBottom: "30px" }}>Please fill the form</h4>
                            <div style={{ marginTop: "-15px" }}>
                                <select required name="course" onChange={(e) => setCourse(e.target.value)}>
                                    <option value="">Select Course</option>
                                    <option value="200 hrs Teachers Training">200 hrs Teachers Training</option>
                                    <option value="500 hrs Teachers Training">500 hrs Teachers Training</option>
                                </select>
                                <br />
                                <select required name="duration" onChange={(e) => setDuration(e.target.value)}>
                                    <option value="">Select Course Duration</option>
                                    <option value="1st Nov 2022 - 24th Nov 2022">1st Nov 2022 - 24th Nov 2022</option>
                                    <option value="1st Dec 2022 - 24th Dec 2022">1st Dec 2022 - 24th Dec 2022</option>
                                    <option value="1st Jan 2023 - 24th Jan 2023">1st Jan 2023 - 24th Jan 2023</option>
                                    <option value="1st Feb 2023 - 24th Feb 2023">1st Feb 2023 - 24th Feb 2023</option>
                                    <option value="1st Mar 2023 - 24th Mar 2023">1st Mar 2023 - 24th Mar 2023</option>
                                    <option value="1st April 2023 - 24th April 2023">1st April 2023 - 24th April 2023</option>
                                    <option value="1st May 2023 - 24th May 2023">1st May 2023 - 24th May 2023</option>
                                </select>
                                <br />
                                <select required name="room" onChange={(e) => setRoom(e.target.value)}>
                                    <option value="">Select Room Type</option>
                                    <option value="Shared Room - USD 999">Shared Room - USD 999</option>
                                    <option value="Private Room - USD 1199">Private Room - USD 1199</option>
                                </select>
                                <br />
                                <input
                                    required
                                    name="name"
                                    style={{ marginBottom: "-20px" }}
                                    type="text"
                                    className='inputFull'
                                    placeholder="Your Name*"
                                    onChange={(e) => setName(e.target.value)} /><br />
                                <br />
                                <input
                                    required
                                    name="email"
                                    type="text"
                                    style={{ marginRight: "6px" }}
                                    className='inputHalf'
                                    placeholder="Your Email Address*"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    required
                                    name="phone"
                                    type="text"
                                    className='inputHalf'
                                    placeholder="Your Phone Number*"
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                                <br />
                                <input
                                    required
                                    name="country"
                                    type="text"
                                    style={{ marginRight: "6px" }}
                                    className='inputHalf' placeholder="City,Country*"
                                    onChange={(e) => setCountry(e.target.value)}
                                />
                                <input
                                    required
                                    name="age"
                                    type="text"
                                    className='inputHalf'
                                    placeholder="Age,Gender*"
                                    onChange={(e) => setAge(e.target.value)}
                                />
                                <br />
                                <input
                                    name="reason"
                                    type="text"
                                    className='inputFull'
                                    placeholder="Reason for choosing Jeevmoksha"
                                    onChange={(e) => setReason(e.target.value)}
                                />
                                <br />
                                <textarea
                                    name="message"
                                    placeholder='Type your message here'
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>
                        </div>
                        <div class=" form-check">
                            <input type="checkbox" onClick={onCheckboxClick} />
                            <label style={{ marginLeft: "10px", fontSize: "14px", fontWeight: "400", color: "yellow" }} class="form-check-label" for="exampleCheck1">I  declare that I do not suffer from any chronic illness</label>
                        </div>
                        <p style={{ marginLeft: "30px", fontSize: "12px", fontWeight: "bolder", }}>NOTE: We do not allow preganant females in our courses due to intensive nature of the programs.</p>

                        <button onClick={submit} type="submit" className='next_bttn' disabled={!isDisabled} style={{ background: isDisabled ? "#EF7B10E0" : "#1f1d1ace", color: isDisabled ? "#1b1919" : "#fff", cursor: isDisabled ? "pointer" : "not-allowed" }}>Next</button>
                    </form>
                </Box>
            </Modal>
            <ToastContainer />

        </div>

    );
}
