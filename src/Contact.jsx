import React from 'react'
import './App.css'
import { useState } from 'react'

const Contact = () => {

    const [data, setData] = useState({
        Fullname: "",
        Mobile: "",
        Email: "",
        Message: ""
    })

    const formSubmit = (e) => {
        e.preventDefault()
        alert(`Your Name is ${data.Fullname}. Your Mobile No. is ${data.Mobile}. Your Email is ${data.Email}. Your Message is ${data.Message}.`)

        setData({
            Fullname: "",
            Mobile: "",
            Email: "",
            Message: ""
        });
    }

    const inputEvent = (event) => {
        const { name, value } = event.target

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        })

    }



    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Me</h1>
            </div>
            <div className="container container_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Full Name</label>
                                <input required type="text" className="form-control" id="exampleFormControlInput1" name='Fullname' value={data.Fullname} onChange={inputEvent} placeholder="Enter Your Name" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Mobile No.</label>
                                <input required type="number" className="form-control" id="exampleFormControlInput1" name='Mobile' value={data.Mobile} onChange={inputEvent} placeholder="Enter Your Mobile No." />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email Address</label>
                                <input required type="email" className="form-control" id="exampleFormControlInput1" name='Email' value={data.Email} onChange={inputEvent} placeholder="Enter Your Email" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Message</label>
                                <textarea required className="form-control text_area" id="exampleFormControlTextarea1" rows="5" name='Message' value={data.Message} onChange={inputEvent} placeholder="Write A Message..."></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact