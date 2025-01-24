import { screen } from '@testing-library/react';

import { CategoryItem } from '../CategoryItem';
import { renderWithRouter } from '../../utils/testing';

describe('CategoryItem', () => {
  it('renders correctly', () => {
    renderWithRouter(
      <CategoryItem
        strCategory="Beef"
        strCategoryThumb="https://www.themealdb.com/images/category/beef.png"
        strCategoryDescription="Beef is the culinary name for meat from cattle, particularly skeletal muscle."
      />,
    );
    expect(screen.getByRole('article')).toMatchSnapshot();
  });
});
