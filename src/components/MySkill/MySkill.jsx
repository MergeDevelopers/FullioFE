import { useEffect } from 'react';
import Style from './MySkill.style';
import RadialProgressBar from './RadialProgressBar/RadialProgressBar';
import { useState } from 'react';

const TEST_MY_SKILL = [
  {
    title: 'HTML',
    percent: 60,
  },
  {
    title: 'CSS',
    percent: 50,
  },
  {
    title: 'JS',
    percent: 40,
  },
  {
    title: 'React',
    percent: 40,
  },
];

function MySkill() {
  const [ mySkillData, setMySkillData ] = useState([]);

  useEffect(() => {
    // TODO: 서버에서 데이터를 받아온다.
    setTimeout(() => {
      setMySkillData([...TEST_MY_SKILL])
    }, 500 )
  }, [])

  return (
    <Style.Container>
      <h3>My Skills</h3>
      <Style.ContentsContainer>
        {/* TODO: 수정기능 */}
        {
          mySkillData.map(({ percent, title }, index) => {
            return <RadialProgressBar key={index} percent={percent} title={title} />
          })
        }
      </Style.ContentsContainer>
    </Style.Container>
  )
}

export default MySkill;
