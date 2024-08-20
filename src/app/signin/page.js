import Image from "next/image";

export default function signin () {
  return (<> 
    <br />
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="card col-md-8 p-3">
          <h2 className="text-center mb-1">Sing in</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text">Example : google1234@gmail.com</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">จดจำฉันในระบบ</label>
            </div>
            <button type="submit" className="btn btn-primary w-100">สมัคร</button>
          </form>
        </div>
      </div>
    </div>
  </>
  );
}
