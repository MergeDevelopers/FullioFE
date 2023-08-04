import { screen } from '@testing-library/react';
import Greeting from './Greeting';
import { renderWithProvider } from '../../utils/test';

describe('Greeting', () => {
  it('인사말이 정상적으로 보여진다.', () => {
    renderWithProvider(<Greeting name="JSX" />);
    expect(screen.getByText('Hello JSX!')).toBeInTheDocument();
  });

  it('이름을 입력하지 않으면 기본으로 React가 보여진다.', () => {
    // 예외 조건 확인
    renderWithProvider(<Greeting />);
    expect(screen.getByText('Hello React!')).toBeInTheDocument();
  });
});
