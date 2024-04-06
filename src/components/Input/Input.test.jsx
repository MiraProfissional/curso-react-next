import { render, screen } from '@testing-library/react';
import { Input } from '.';
import userEvent from '@testing-library/user-event';

describe('<Input />', () => {
  it('should have value of "searchValue"', () => {
    const fn = jest.fn();

    render(<Input handleChange={fn} searchValue={'testando'} />);

    const input = screen.getByPlaceholderText(/type your search/i);

    expect(input).toBeInTheDocument();

    expect(input.value).toBe('testando');
  });

  it('should call handleChange function on each key pressed', () => {
    const fn = jest.fn();

    render(<Input handleChange={fn} searchValue={'um valor qualquer'} />);

    const input = screen.getByPlaceholderText(/type your search/i);

    const value = 'valor de teste';

    userEvent.type(input, value);

    expect(input.value).toBe('um valor qualquer');
    expect(fn).toHaveBeenCalledTimes(value.length);
  });

  it('should match snapshot', () => {
    const fn = jest.fn();

    const { container } = render(<Input handleChange={fn} searchValue={'testando'} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
