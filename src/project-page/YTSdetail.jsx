import React from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'
import qryts from "../assets/qr-yts.png"


const YTGdetail = () => {
    return (
        <>
            <NavLink to='/project' className="btn btn-outline-primary ms-lg-5"> ⬅️ Back</NavLink>
            <div className="rms_main">

                <div className="my-5">
                    <h1 className="text-center">YouTube Transcript Summarizer</h1>
                </div>

                <div className="container-fluid rms" >
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row gy-5" id="prj">
                                <ul>
                                    <li><strong style={{ fontSize: '30px' }}>Technology</strong> :- Python, HTML, CSS</li>
                                    <li ><strong style={{ fontSize: '30px' }}>Description</strong> :- In this Project summarizing transcripts of specific videos without thinking allows us to fast be wary for the main patterns in the television and helps us to save period and exertions to search all content of the video.</li>
                                </ul>
                            </div>
                            <div className="cards mt-lg-5">
                                <img src={qryts} className="card-img-top qr_img" alt="..." />
                                <div className="card-body">
                                    <NavLink to="https://github.com/varunumraliya/youtube-transcript-summarizer" target='_blank' className="btn btn-outline-primary">Git Repositories</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default YTGdetail