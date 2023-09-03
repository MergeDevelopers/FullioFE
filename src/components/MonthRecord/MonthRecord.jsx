import { useState } from 'react';
import Style from './MonthRecord.style';
import ProgressBar from './ProgressBar/ProgressBar';
import { useEffect } from 'react';

const TEST_MONTH_RECORD = [
  {
    title: '업프로젝트',
    records: 20,
  },
  {
    title: '토익스터디',
    records: 26,
  },
  {
    title: 'CoP',
    records: 5,
  },
  {
    title: '특강',
    records: 0,
  },
  {
    title: '직무학습',
    records: 10,
  },
  {
    title: 'GA4스터디',
    records: 5,
  }
];

const RECORDS_COLOR = [
  '7986CC',
  '5FC59D',
  'B093E7',
  'FCCB05',
  '81AAE8',
  'A8DA3D',
];

function MonthRecord() {
  const [ monthRecordData, setMonthRecordData ] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setMonthRecordData([...TEST_MONTH_RECORD]);
    }, 500)
  }, []);

  return (
    <Style.Container>
      <h3>이번달의 기록</h3>
      <Style.ContentsContainer>
        {
          monthRecordData.map(({ title, records }, index) => {
            return <ProgressBar key={index} title={title} records={records} color={RECORDS_COLOR[index]} />
          })
        }
      </Style.ContentsContainer>
    </Style.Container>
  )
}

export default MonthRecord;
