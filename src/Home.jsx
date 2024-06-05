import React from 'react'
import './App.css'
import { NavLink } from 'react-router-dom'
import web from "../src/assets/my.png"

const Home = () => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 main_text order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>Helllo, I'm <strong className="my-name" >Varun Umraliya</strong></h1>
                                    <h2 className="my-3">I'm a MERN Stack Developer.</h2>
                                    <div className="mt-3">
                                        <NavLink to="https://drive.google.com/file/d/1siB48Fbf31jjKYFaaz__voOmBR1Cwh5k/view?usp=sharing" target="_blank" className="btn-cv">View CV</NavLink>
                                        <NavLink to="https://www.linkedin.com/in/varun-umraliya" target="_blank" className="btn-ln">View LinkedIn <svg width="22" height="22" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                        </svg></NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={web} className="img-fluid animated" alt="home img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home