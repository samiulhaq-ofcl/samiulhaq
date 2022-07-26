import Image from "next/image";
import Link from "next/link";
import styles from "./sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={styles.aside}>
      <a href="#home" className="nav-logo">
        <Image src="/images/logo.png" alt="logo-image" width={30} height={30} />
      </a>

      <nav className="nav">
        <div className="nav_menu">
          <ul className={styles.nav_list}>
            <li className="nav_item">
              <Link href="#home">
                <a className={styles.nav_link}>
                  <i className="icon-home"></i>
                </a>
              </Link>
            </li>
            <li className="nav_item">
              <Link href="#about">
                <a className={styles.nav_link}>
                  <i className="icon-user-following"></i>
                </a>
              </Link>
            </li>
            <li className="nav_item">
              <Link href="#services">
                <a className={styles.nav_link}>
                  <i className="icon-briefcase"></i>
                </a>
              </Link>
            </li>
            <li className="nav_item">
              <Link href="#resume">
                <a className={styles.nav_link}>
                  <i className="icon-graduation"></i>
                </a>
              </Link>
            </li>
            <li className="nav_item">
              <Link href="#portfolio">
                <a className={styles.nav_link}>
                  <i className="icon-layers"></i>
                </a>
              </Link>
            </li>
            <li className="nav_item">
              <Link href="#blog">
                <a className={styles.nav_link}>
                  <i className="icon-note"></i>
                </a>
              </Link>
            </li>
            <li className="nav_item">
              <Link href="#contact">
                <a className={styles.nav_link}>
                  <i className="icon-bubble"></i>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="nav-footer">
        <span className={styles.copyright}>&copy; 2022 - 2023</span>
      </div>
    </aside>
  );
};

export default Sidebar;
