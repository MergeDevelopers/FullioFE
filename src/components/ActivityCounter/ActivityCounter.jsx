import { useState } from 'react';
import Style from './ActivityCounter.style';
import { useEffect } from 'react';

const TEST_COUNT = {
  activity: 10,
  record: 27,
  skill: 5,
}

function ActivityCounter() {
  const [ activityCount, setActivityCount ] = useState({
    activity: 0,
    record: 0,
    skill: 0,
  });

  function fetchGETCount() {
    // TODO: fetch GET count
    setTimeout(() => {
      setActivityCount({...TEST_COUNT});
    }, 500)
  }

  useEffect(() => {
    fetchGETCount();
  }, []);

  return (
    <Style.MainContainer>
      <Style.CounterContainer>
        <span>
          <strong>{activityCount.activity}</strong>
          개
        </span>
        <p>나의 활동</p>
      </Style.CounterContainer>
      <Style.CounterContainer>
        <span>
          <strong>{activityCount.record}</strong>
          개
        </span>
        <p>나의 기록</p>
      </Style.CounterContainer>
      <Style.CounterContainer>
        <span>
          <strong>{activityCount.skill}</strong>
          개
        </span>
        <p>나의 역량</p>
      </Style.CounterContainer>
    </Style.MainContainer>
  )
}

export default ActivityCounter;
