import { render, screen } from "@testing-library/react";
import { PostCard } from '.';

const mock = {
    title: 'title teste',
    body: 'body teste',
    id: 1,
    cover: 'img/img.png'
}

describe('<PostCard />', () => {

    it('should render PostCard correctly', () => {

        render(<PostCard {...mock} />);
        
        expect(screen.getByRole('img', { name: /title teste/i })).toHaveAttribute('src', 'img/img.png');
        expect(screen.getByRole('heading', { name: 'title teste 1' })).toBeInTheDocument();
        expect(screen.getByText('body teste')).toBeInTheDocument();
    })

    it('should match snapshot', () => {

        const { container } = render(<PostCard {...mock} />);
        expect(container.firstChild).toMatchSnapshot();
        
    })

})