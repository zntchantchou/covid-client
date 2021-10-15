import React from "react";
import styles from "src/components/nav/Navbar.module.css";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface NavbarProps {
  title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.title}> {title}</h1>
    </div>
  );
};

export default Navbar;
