import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithRouter } from "../../utils/testing";
import * as api from '../../api';

import { Home } from '../Home';

const apiSpy = jest.spyOn(api, 'getAllCategories');

const categories = [
  {
    strCategory: 'First',
    idCategory: '1',
    strCategoryThumb: 'Thumb',
    strCategoryDescription: 'Description',
  },
  {
    strCategory: 'Second',
    idCategory: '2',
    strCategoryThumb: 'Thumb',
    strCategoryDescription: 'Description',
  },
  {
    strCategory: 'Third',
    idCategory: '3',
    strCategoryThumb: 'Thumb',
    strCategoryDescription: 'Description',
  },
];

describe('Home', () => {
  it('renders correctly', async () => {
    apiSpy.mockResolvedValueOnce({ categories });

    renderWithRouter(<Home />);

    const preloader = screen.getByRole('progressbar');
    const search = screen.getByRole('searchbox');

    expect(preloader).toBeInTheDocument();
    expect(search).toBeInTheDocument();

    await waitForElementToBeRemoved(preloader);

    expect(screen.getAllByRole('article')).toHaveLength(3); 
  })
  
  it('should render Home with search', async () => {
    apiSpy.mockResolvedValueOnce({ categories });

    renderWithRouter(<Home />, {
      initialEntries: ['/?search=first']
    });

    const preloader = screen.getByRole('progressbar');

    expect(preloader).toBeInTheDocument();

    await waitForElementToBeRemoved(preloader);

    expect(screen.getAllByRole('article')).toHaveLength(1); 
  });

  it('should render Home with search user interaction', async () => {
    apiSpy.mockResolvedValue({ categories });

    renderWithRouter(<Home />);

    const preloader = screen.getByRole('progressbar');
    const input = screen.getByRole('searchbox');

    expect(preloader).toBeInTheDocument();

    await waitForElementToBeRemoved(preloader);

    expect(screen.getAllByRole('article')).toHaveLength(3); 
  
    await userEvent.type(input, 'second');
    await userEvent.click(screen.getByRole('button', { name: /search/i }));

    expect(screen.getAllByRole('article')).toHaveLength(1); 
  })
})