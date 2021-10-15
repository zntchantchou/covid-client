import React from "react";
import styles from "src/components/Navbar/Navbar.module.css";
import UserProfile from "src/components/UserProfile/UserProfile";
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface NavbarProps {
  title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.title}> {title}</h1>
      <div className={styles.navRight}>
        <UserProfile />
      </div>
    </div>
  );
};

export default Navbar;
