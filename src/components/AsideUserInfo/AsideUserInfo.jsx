import Style from './AsideUserInfo.style';
import noticeImage from '../../assets/images/icons/notification_bubble.png';
import avatarImage from '../../assets/images/avatars/avatar_cat.png';
import { useState } from 'react';
import { useEffect } from 'react';

const TEST_USER_INFO = {
  name: '진승현',
  username: 22207072,
  comment: '세상은 호락호락하지 않다. 괜찮다. 나도 호락호락하지 않으니깐...!',
  nickname: 'superdeveloper',
  avatar: avatarImage,
}

function AsideUserInfo() {
  const [ userInfo, setUserInfo ] = useState({
    name: '',
    username: '',
    nickname: '',
    comment: '',
    avatar: '',
  });

  useEffect(() => {
    setTimeout(() => {
      setUserInfo({...TEST_USER_INFO})
    }, 500);
  }, []);
  
  return (
    <Style.Container>
      <Style.NoticeImage src={noticeImage}/>
      <Style.BasicInfoContainer>
        <img src={userInfo.avatar} alt="프로필 사진" />
        <span>{`${userInfo.name} / ${userInfo.username}`}</span>
        <p>{`@${userInfo.nickname}`}</p>
      </Style.BasicInfoContainer>
      <Style.MypageButton>마이페이지</Style.MypageButton>
      <Style.CommentContainer>
        <p>{`"${userInfo.comment}"`}</p>
      </Style.CommentContainer>
    </Style.Container>
  )
}

export default AsideUserInfo;
