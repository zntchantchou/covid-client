import React from "react";
import styles from "src/components/Navbar/Navbar.module.css";
import UserAvatar from "src/components/UserAvatar/UserAvatar";
import UserProfile from "src/components/UserProfile/UserProfile";
import { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-empty-interface

interface NavbarProps {
  title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
  const [displayProfile, setDisplayProfile] = useState(false);
  const handleClickAvatar = () => setDisplayProfile(!displayProfile);

  return (
    <div className={styles.navbar}>
      <h1 className={styles.title}> {title}</h1>
      <div className={styles.profileSection}>
        <UserAvatar onClick={handleClickAvatar} />
      </div>

      {displayProfile && <UserProfile />}
    </div>
  );
};

export default Navbar;
