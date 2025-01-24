import { screen } from '@testing-library/react';

import { CategoryList } from '../CategoryList';
import { renderWithRouter } from '../../utils/testing';

describe('CategoryList', () => {
  it('renders correctly', () => {
    renderWithRouter(
      <CategoryList catalog={[
        {
          idCategory: '1',
          strCategory: 'Beef',
          strCategoryThumb:
            'https://www.themealdb.com/images/category/beef.png',
          strCategoryDescription:
            'Beef is the culinary name for meat from cattle, particularly skeletal muscle.',
        },
        {
          idCategory: '2',
          strCategory: 'Chicken',
          strCategoryThumb:
            'https://www.themealdb.com/images/category/chicken.png',
          strCategoryDescription:
            'Chicken is the most common type of poultry in the world.',
        },
      ]} />,
    );
    expect(screen.getByRole('list')).toMatchSnapshot();
  });

  it('should render correctly with no items', () => {
    renderWithRouter(<CategoryList />);

    expect(screen.getByRole('list')).toMatchSnapshot();
  })
});
