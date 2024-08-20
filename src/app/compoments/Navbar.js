import Link from "next/link"
import React from "react"
import 'animate.css';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <img src="image/logo.png" className="img-fluid" alt="..." />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="p-2 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-2 card-hover-effect nav-link active" aria-current="page" href="/">หน้าแรก</a>
                        </li>
                        <li className="nav-item">
                            <a className="p-2 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-2 card-hover-effect nav-link active" aria-current="page" href="/service">บริการของเรา</a>
                        </li>
                        <li className="nav-item">
                            <a className="p-2 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-2 card-hover-effect nav-link active" aria-current="page" href="/about">เกี่ยวกับเรา</a>
                        </li>
                        <li className="nav-item">
                            <a className="p-2 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-2 card-hover-effect nav-link active" aria-current="page" href="/contact">ติดต่อเรา</a>
                        </li>
                    </ul>
                    <Link href="/signin" className="btn btn-outline-success mx-1">signin</Link>
                    <Link href="/signup" className="btn btn-outline-danger mx-1">signup</Link>
                </div>
            </div>
        </nav>

    )

}