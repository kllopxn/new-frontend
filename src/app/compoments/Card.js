export default function Card() {
    return (
        <>
           <div className="container mt-5">
    <div className="row">
        <div className="col-md-4 mb-3">
            <div className="card" >
                <img src="/image/4.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Tempura Shushi</h5>
                    <p className="card-text">29 Bath per price</p>
                    <a href="#" className="btn btn-primary">Click here to sent order</a>
                </div>
            </div>
        </div>
        <div className="col-md-4 mb-3">
            <div className="card" >
                <img src="/image/5.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Omagashi</h5>
                    <p className="card-text">159 Bath per one setbox</p>
                    <a href="#" className="btn btn-primary">Click here to sent order</a>
                </div>
            </div>
        </div>
        <div className="col-md-4 mb-3">
            <div className="card" >
                <img src="/image/6.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Salom Shushi</h5>
                    <p className="card-text">29 Bath per price</p>
                    <a href="#" className="btn btn-primary">Click here to sent order</a>
                </div>
            </div>
        </div>
    </div>
</div>

        </>
    )


}