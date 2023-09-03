import Style from './ProgressBar.style';

function ProgressBar({ title, records, color }) {
  return (
    <Style.Container>
      <Style.Title $color={color}>
        {title}
      </Style.Title>
      <Style.BarContainer $color={color} $records={records}>
        <div><div><span>{records}</span></div></div>
      </Style.BarContainer>
    </Style.Container>
  )
}

export default ProgressBar;
