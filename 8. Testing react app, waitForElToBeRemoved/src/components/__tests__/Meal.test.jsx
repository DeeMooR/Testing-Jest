import { screen } from "@testing-library/react";

import { Meal } from "../Meal";
import { renderWithRouter } from "../../utils/testing";

describe('Meal', () => {
  it('renders correctly', () => {
    renderWithRouter(
      <Meal strMeal='Cheese cake' idMeal='123' strMealThumb='/meal.png' />
    );

    expect(screen.getByRole('article')).toMatchSnapshot();
  })
})