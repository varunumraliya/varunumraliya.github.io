import React from 'react'
import Card from './Card'
import Pdata from './Pdata'

const Project = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">My Projects</h1>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-5">

                            {Pdata.map((val, index) => {
                                return <Card key={index}
                                    imgsrc={val.imgsrc}
                                    title={val.title}
                                    btn={val.btn} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project