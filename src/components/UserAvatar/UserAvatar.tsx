import React  from "react";
import { useQuery } from "@apollo/client";
import {
  GET_USER_AVATAR,
} from "src/graphql/operations/user/user";
import { GET_USER_AVATAR as IGetAvatarResponse } from "src/graphql/operations/user/types/GET_USER_AVATAR";

import styles from "src/components/UserAvatar/UserAvatar.module.css";

interface UserAvatarProps {
  onClick(): void;
}

const UserAvatar: React.FC<UserAvatarProps> = ({onClick}) => {
  const { data: avatar } = useQuery<IGetAvatarResponse>(GET_USER_AVATAR);

  return avatar?.getUser ? (
    <>
      <div className={styles.avatar} onClick={() => onClick()}>
        <img src={avatar.getUser.avatar} alt="user avatar" />
      </div>
    </>
  ) : null;
};

export default UserAvatar;
