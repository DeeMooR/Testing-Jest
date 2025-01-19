import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Input } from './Input';

const testPlaceholder = 'test placeholder'; // чтобы удобно искать input

function renderComponent(props) {
  return render(<Input placeholder={testPlaceholder} {...props} />)
}

describe('Input', () => {
  it('should render the input', () => {
    renderComponent();

    expect(screen.getByPlaceholderText(testPlaceholder)).toBeInTheDocument();
  });

  it('should render the input with the correct type', () => {
    renderComponent({type: 'checkbox'});

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('should render the input with the correct class names', () => {
    const { container } = renderComponent({ inputClassName: 'inputTest', containerClassName: 'containerTest' });

    const containerEl = container.querySelector('.formControl.containerTest');
    expect(containerEl).toBeInTheDocument();
  
    const inputEl = screen.getByPlaceholderText(testPlaceholder);
    expect(inputEl).toHaveClass('input');
    expect(inputEl).toHaveClass('inputTest');
  });

  it('should render the input without a label', () => {
    renderComponent({type: 'checkbox'});

    expect(screen.queryByTestId('input-label')).not.toBeInTheDocument(); // getByTestId выкинет ошибку
  });

  it('should render the input with the correct label', () => {
    const labelText = 'I am a label';

    renderComponent({label: labelText});

    expect(screen.getByLabelText(labelText)).toBeInTheDocument();
  });

  it('should render the input with the correct value', () => {
    render(<Input placeholder={testPlaceholder} value="123" onChange={jest.fn()} />);

    expect(screen.getByDisplayValue('123')).toBeInTheDocument();
  });

  //! Способ 1 (fireEvent)
  // it('should invoke the onChange callback', () => {
  //   const onChange = jest.fn();
  //   render(<Input placeholder={testPlaceholder} value="123" onChange={onChange} />);
    
  //   const element = screen.getByPlaceholderText(testPlaceholder);
  
  //   fireEvent.change(element, { target: { value: '1234' } });

  //   expect(onChange).toHaveBeenCalledTimes(1);
  // });

  //! Способ 2 (userEvent)
  it('should invoke the onChange callback', async () => {
    const onChange = jest.fn();

    render(<Input placeholder={testPlaceholder} value="123" onChange={onChange} />);

    const element = screen.getByPlaceholderText(testPlaceholder);

    // userEvent.type сам использует act
    await userEvent.type(element, '456');

    expect(onChange).toHaveBeenCalledTimes(3);
  });
});
