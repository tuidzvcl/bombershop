import Link from 'next/link';
import styles from './header.module.css'; 
export default function Header() {
  return ( 
    <header className={styles.header}>
      <div className={styles.logo}>BOMBER SHOP</div>
      <nav className={styles.nav}>
        <ul>
          <li><Link href="/">Trang chủ</Link></li>
          <li><Link href="/san-pham">Sản phẩm</Link></li>
          <li><Link href="/lien-he">Liên hệ</Link></li>
        </ul>
      </nav>
    </header>
  );
}