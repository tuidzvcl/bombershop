import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import  Header  from "./components/header/header";
export default function Home() {
  // 1. Khai báo danh sách 12 sản phẩm
  const products = [
    { id: 1, name: "Áo Bomber Varsity Classic", img: "/ao1.png" },
    { id: 2, name: "Áo Bomber Phi Công MA-1", img: "/ao2.png" },
    { id: 3, name: "Áo Bomber Thêu Streetwear", img: "/ao3.png" },
    { id: 4, name: "Áo Bomber Da Lộn Màu Be", img: "/ao4.png" },
    { id: 5, name: "Áo Bomber Gió Chống Nước", img: "/ao5.png" },
    { id: 6, name: "Áo Bomber Nhung Tăm Vintage", img: "/ao6.png" },
    { id: 7, name: "Áo Bomber Phối Tay Khác Màu", img: "/ao7.png" },
    { id: 8, name: "Áo Bomber Chần Bông Thu Đông", img: "/ao8.png" },
    { id: 9, name: "Áo Bomber Nỉ Form Rộng", img: "/ao9.png" },
    { id: 10, name: "Áo Bomber Kaki Zip Cá Tính", img: "/ao10.png" },
    { id: 11, name: "Áo Bomber Satin Bóng Neon", img: "/ao11.png" },
    { id: 12, name: "Áo Bomber Minimalist Đen", img: "/ao12.png" },
  ];
  return (
    <div className={styles.container}>
      <Header/>
      {/* --- PHẦN 2: LAYOUT SẢN PHẨM (Nội dung chính) --- */}
      <main className={styles.productGrid}>
        {products.map((item) => (
          <div key={item.id} className={styles.product}>
            <div className={styles.mainProduct}>
              {/* Hình ảnh sản phẩm */}
              <div className={styles.imageBox}>
                <Image 
                  src={item.img} 
                  alt={item.name} 
                  width={180} 
                  height={200} 
                  layout="responsive"
                />
                <Link href="/chitietsanpham" style={{ textDecoration: 'none', color: 'inherit' }}>
  <div className="col-md-3 mb-4">
    <div className="card h-100" style={{ cursor: 'pointer' }}>
      <img 
        src="https://bizweb.dktcdn.net/thumb/1024x1024/100/399/392/products/6-9c2ac4db-22a5-49b4-8a53-61c671e1844d.jpg?v=1746175354670" 
        className="card-img-top" 
        alt="Áo Bomber" 
      />
      <div className="card-body">
        <h5 className="card-title">Áo Khoác Bomber Classic</h5>
        <p className="card-text">650.000 ₫</p>
      </div>
    </div>
  </div>
</Link>
              </div>
              {/* Tên sản phẩm */}
              <div className={styles.productName}>
                <h5>{item.name}</h5>
              </div>
              {/* Giá tiền */}
              <div className={styles.productPrice}>
                <strong className={styles.price}>550.000₫</strong>
                <span className={styles.oldPrice}>850.000₫</span>
              </div>
              {/* Trạng thái kho hàng */}
              <div className={styles.productRemain}>
                <span>🔥 Còn 10 suất</span>
              </div>
            </div>
            {/* Nút hành động */}
            <div className={styles.buyButton}>
              <Link href="#">MUA NGAY</Link>
            </div>
          </div>
        ))}
      </main>
      {/* --- PHẦN 3: LAYOUT FOOTER (Chân trang) --- */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p><strong>© 2026 BOMBER SHOP - NGỌC HÂN</strong></p>
          <p>Mã số sinh viên: 24030010 | Lớp: Công nghệ thông tin</p>
          <p>Địa chỉ: Quận 12, TP. Hồ Chí Minh | Hotline: 0964.371.702</p>
          <p>Dự án thực hành lập trình Web với Next.js</p>
        </div>
      </footer>
    </div>
  );
}