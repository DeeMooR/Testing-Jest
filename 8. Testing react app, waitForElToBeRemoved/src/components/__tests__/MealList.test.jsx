import { screen } from "@testing-library/react";

import { MealList } from "../MealList";
import { renderWithRouter } from "../../utils/testing";

describe('MealList', () => {
  it('renders correctly', () => {
    renderWithRouter(
      <MealList meals={[
        {
          sreMeal: 'Cheese cake',
          idMeal: '123',
          strMealThumb: '/meal.png'
        },
        {
          sreMeal: 'Chocolate cake',
          idMeal: '456',
          strMealThumb: '/choco.png'
        }
      ]} />
    );

    expect(screen.getByRole('list')).toMatchSnapshot();
  })
})