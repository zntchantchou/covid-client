import React, { useEffect, useState } from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import {
  GET_USER_PROFILE,
  GET_USER_AVATAR,
} from "src/graphql/operations/user/user";

import { GET_USER_AVATAR as IGetAvatarResponse } from "src/graphql/operations/user/types/GET_USER_AVATAR";
import { GET_USER_PROFILE as IGetProfileResponse } from "src/graphql/operations/user/types/GET_USER_PROFILE";
import styles from "src/components/UserProfile/UserProfile.module.css";

const UserProfile: React.FC = () => {
  const { data: avatar } = useQuery<IGetAvatarResponse>(GET_USER_AVATAR);
  const [displayProfileData, setDisplayProfileData] = useState(false);
  const [getProfile, { data: profile }] =
    useLazyQuery<IGetProfileResponse>(GET_USER_PROFILE);

  const handleClick = () => {
    getProfile();
    setDisplayProfileData(!displayProfileData);
  };
  const generateProfileWrapper = () => {
    const profileData = profile?.getUser;
    if (profileData && displayProfileData) {

      // eslint-disable-next-line
      // @ts-ignore
      const { firstName, lastName, email, position, status } = profileData;
      return (
        <div className={styles.profileData}>
          <div>firstname: {firstName}</div>
          <div>lastname: {lastName}</div>
          <div>position: {position}</div>
          <div>email: {email}</div>
          <div>status: {status}</div>
        </div>
      );
    }
    return null;
  };

  return avatar?.getUser ? (
    <>
      <div className={styles.avatar} onClick={() => handleClick()}>
        <img src={avatar.getUser.avatar} alt="user avatar" />
      </div>
      {generateProfileWrapper()}
    </>
  ) : null;
};

export default UserProfile;
