import { useQuery } from "@apollo/client";
import React from "react";
import { GET_USER_PROFILE } from "src/graphql/operations/user/user";
import {
  GET_USER_PROFILE as IGetProfileResponse,
} from "src/graphql/operations/user/types/GET_USER_PROFILE";
import styles from "./UserProfile.module.css";
import Loader from "src/components/Loader/Loader";


const UserProfile: React.FC = () => {
  const { data: userProfile, loading } =
    useQuery<IGetProfileResponse>(GET_USER_PROFILE);

  const content = loading ? (
    <Loader width={100}/>
  ) : (
    <>
      <div className={styles.userProfileItem}>
        {userProfile?.getUser.firstName}
      </div>
      <div className={styles.userProfileItem}>
        {userProfile?.getUser.lastName}
      </div>
      <div className={styles.userProfileItem}>{userProfile?.getUser.email}</div>
      <div className={styles.userProfileItem}>
        {userProfile?.getUser.position}
      </div>
      <div className={styles.userProfileItem}>
        {userProfile?.getUser?.status}
      </div>
    </>
  );
  return <div className={styles.userProfile}>{content}</div>;
};

export default UserProfile;
