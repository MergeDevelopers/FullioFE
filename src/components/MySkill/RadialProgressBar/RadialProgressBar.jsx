import Style from './RadialProgressBar.style';

function RadialProgressBar({ percent, title }) {
  const anglePercentage = 360 * percent / 100;
  return (
    <Style.Coontainer>
      <Style.MainProgressBar $angle={anglePercentage}>
        <Style.InnerProgressBar />
        <span>{percent}%</span>
      </Style.MainProgressBar>
      <Style.TitleContainer>
        <div>
          {title}
        </div>
      </Style.TitleContainer>
    </Style.Coontainer>
  )
}

export default RadialProgressBar;
