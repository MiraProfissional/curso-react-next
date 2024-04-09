// Tentativa de utlizacao do Mock Service Web na aula dada pelo curso. Porem, eu e mais outros alunos do curso estamos tendo problemas de importacao.

// import { http } from 'msw';
// import { setupServer } from 'msw/node';
// import userEvent from '@testing-library/user-event';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { Home } from '.';

// export const handlers = [
//   http.get('*jsonplaceholder.typicode.com/*', async (req, res, ctx) => {
//     return res(
//       ctx.json([
//         {
//           userId: 1,
//           id: 1,
//           title: 'title1',
//           body: 'body1',
//           url: 'img1.jpg',
//         },
//         {
//           userId: 2,
//           id: 2,
//           title: 'title2',
//           body: 'body2',
//           url: 'img2.jpg',
//         },
//         {
//           userId: 3,
//           id: 3,
//           title: 'title3',
//           body: 'body3',
//           url: 'img3.jpg',
//         },
//       ]),
//     );
//   }),
// ];

// const server = setupServer(...handlers);

describe('<Home />', () => {
  // beforeAll(() => {
  //     server.listen();
  //   });

  //   afterEach(() => server.resetHandlers());

  //   afterAll(() => {
  //     server.close();
  //   });

  it('should render search, posts and load more', async () => {
    render(<Home />);

    const noMorePosts = screen.getByText('Nao existem posts');

    await waitForElementToBeRemoved(noMorePosts);

    const search = screen.getByPlaceholderText(/type your search/i);
    expect(search).toBeInTheDocument();

    //Teste com os posts estaticamente definidos como 2 na primeira renderizacao do componente. Uma solucao otima para esse problema seria receber por propos a varivel "postsPerPage" da Home.
    // const images = screen.getAllByRole('img', { name: /title/i });
    // expect(images).toHaveLength(2);

    const button = screen.getByRole('button', { name: /More posts/i });
    expect(button).toBeInTheDocument();

    expect.assertions(2);
  });

  // it('should search for posts', async () => {
  //   render(<Home />);

  //   const noMorePosts = screen.getByText('Nao existem posts');

  //   await waitForElementToBeRemoved(noMorePosts);

  //   const search = screen.getByPlaceholderText(/type your search/i);
  //   expect(search).toBeInTheDocument();

  //   expect(screen.getByRole('heading', { name: 'title1' })).toBeInTheDocument();
  //   expect(screen.getByRole('heading', { name: 'title2' })).toBeInTheDocument();
  //   expect(screen.queryByRole('heading', { name: 'title3' })).not.toBeInTheDocument();

  //   userEvent.type(search, 'title1');

  //   expect(screen.getByRole('heading', { name: 'title1' })).toBeInTheDocument();
  //   expect(screen.getByRole('heading', { name: 'title2' })).not.toBeInTheDocument();
  //   expect(screen.queryByRole('heading', { name: 'title3' })).not.toBeInTheDocument();

  //   expect(screen.queryByRole('heading', { name: 'Type your search' })).toBeInTheDocument();

  //   userEvent.clear(search);

  //   expect(screen.getByRole('heading', { name: 'title1' })).toBeInTheDocument();
  //   expect(screen.getByRole('heading', { name: 'title2' })).toBeInTheDocument();

  //   userEvent.type(search, 'Test if search for somethin that does not exists');

  //   expect(screen.getByText('Nao existem posts')).toBeInTheDocument();
  // });

  // it('should load more posts', async () => {
  //   render(<Home />);

  //   const noMorePosts = screen.getByText('Nao existem posts');

  //   await waitForElementToBeRemoved(noMorePosts);

  //   const button = screen.getByRole('button', { name: /More posts/i });
  //   expect(button).toBeInTheDocument();

  //   userEvent.click(button);

  //   expect(screen.getByRole('heading', { name: 'title3' })).toBeInTheDocument();

  //   expect(button).toBeDisabled();
  // });
});
