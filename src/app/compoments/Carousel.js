import Image from "next/image"
import React from "react"

export default function Carousel() {
    return (

        <>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/image/background.png" className="d-block img-fluid" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/image/2.png" className="d-block img-fluid" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/image/3.png" className="d-block img-fluid" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>

    )
}

