import { render, screen } from '@testing-library/react'

import { Text } from './Text'

const text = 'Test message';

describe('Text', () => {
  it('should render text with children', () => {
    render(<Text>{text}</Text>);

    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it('should render text with the correct className', () => {
    const { getByText } = render(<Text className='custom'>{text}</Text>);

    expect(getByText(text)).toBeInTheDocument();
    expect(getByText(text)).toHaveClass('custom');
    expect(getByText(text)).toHaveClass('text');
  });
  it('should render text with className and error class', () => {
    const { getByText } = render(<Text className='custom' isError>{text}</Text>);

    expect(getByText(text)).toBeInTheDocument();
    expect(getByText(text)).toHaveClass('custom');
    expect(getByText(text)).toHaveClass('error');
    expect(getByText(text)).toHaveClass('text');
  });
  it('should render text with className and success class', () => {
    const { getByText } = render(<Text className='custom' isSuccess>{text}</Text>);

    expect(getByText(text)).toBeInTheDocument();
    expect(getByText(text)).toHaveClass('custom');
    expect(getByText(text)).toHaveClass('success');
    expect(getByText(text)).toHaveClass('text');
  });
})