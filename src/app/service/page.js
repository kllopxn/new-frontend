export default function Service() {
    return (
      <div className="container py-5">
        <h2 className="text-center mb-4">ตัวอย่าง บริการของเรา</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src="/image/2.png" className="card-img-top" alt="Service 1" />
              <div className="card-body">
                <h5 className="card-title">บริการจองโต๊ะล่วงหน้า</h5>
                <p className="card-text">
                  ช่วยให้ลูกค้าของคุณสามารถจองโต๊ะล่วงหน้าได้ง่ายดาย ลดเวลาในการรอคิว
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src="/image/3.png" className="card-img-top" alt="Service 2" />
              <div className="card-body">
                <h5 className="card-title">บริการจัดส่งอาหาร</h5>
                <p className="card-text">
                  จัดส่งอาหารถึงบ้านลูกค้าด้วยความรวดเร็วและปลอดภัย ให้ลูกค้าได้รับประสบการณ์ที่ดีที่สุด
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src="/image/background.png" className="card-img-top" alt="Service 3" />
              <div className="card-body">
                <h5 className="card-title">บริการจัดเลี้ยงนอกสถานที่</h5>
                <p className="card-text">
                  จัดเลี้ยงนอกสถานที่สำหรับงานแต่งงาน งานประชุม หรือกิจกรรมพิเศษอื่น ๆ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  