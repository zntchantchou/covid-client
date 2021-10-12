import React from "react";
import styles from "src/components/nav/Navbar.module.css";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => <div className={styles.navbar} />;

export default Navbar;
