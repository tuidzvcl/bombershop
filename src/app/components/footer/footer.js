import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p><strong>© 2026 BOMBER SHOP - Ngọc Hân</strong></p>
        <p>Mã số sinh viên: 24030010 | Lớp: WEB12B1</p>
        <p>Địa chỉ: Quận 12, TP. Hồ Chí Minh | Hotline: 0964.371.702</p>
        <p>Dự án thực hành lập trình Web với Next.js</p>
      </div>
    </footer>
  );
}