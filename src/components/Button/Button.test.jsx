import { render, screen } from '@testing-library/react';
import { Button } from '.';
import userEvent from '@testing-library/user-event';

describe('<Button />', () => {
  it('should render the burron with text "Load More"', () => {
    const fn = jest.fn();

    render(<Button text="Load More" disabled={false} onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeInTheDocument();
  });

  it('should call function on button click', () => {
    const fn = jest.fn();

    render(<Button text="Load More" disabled={false} onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });

    userEvent.click(button);

    // fireEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when the attribute "disabled" is true', () => {
    const fn = jest.fn();

    render(<Button text="Load More" disabled={true} onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).toBeDisabled();
  });

  it('should be enabled when the attribute "disabled" is false', () => {
    const fn = jest.fn();

    render(<Button text="Load More" disabled={false} onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).toBeEnabled();
  });

  it('should match snapshot', () => {
    const fn = jest.fn();

    const { container } = render(<Button text="Load More" disabled={false} onClick={fn} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
