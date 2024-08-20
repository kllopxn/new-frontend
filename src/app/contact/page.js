export default function Contact() {
    return (
      <>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h3 className="card-title text-center mb-4">ติดต่อเรา</h3>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">ชื่อของคุณ</label>
                      <input type="text" className="form-control" id="name" placeholder="กรอกชื่อของคุณ" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">อีเมล</label>
                      <input type="email" className="form-control" id="email" placeholder="กรอกอีเมลของคุณ" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="services" className="form-label">บริการที่ต้องการ</label>
                      <select className="form-select" id="services">
                        <option>เลือกบริการ</option>
                        <option>พัฒนาเว็บไซต์</option>
                        <option>ออกแบบกราฟิก</option>
                        <option>การเพิ่มประสิทธิภาพ SEO</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="budget" className="form-label">งบประมาณ</label>
                      <select className="form-select" id="budget">
                        <option>เลือกงบประมาณ</option>
                        <option>$1000 - $3000</option>
                        <option>$3000 - $5000</option>
                        <option>$5000+</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">ข้อความ</label>
                      <textarea className="form-control" id="message" rows="4" placeholder="พิมพ์ข้อความที่นี่..."></textarea>
                    </div>
                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary">ส่งข้อความ →</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  