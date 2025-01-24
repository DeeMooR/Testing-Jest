import { screen, render } from "@testing-library/react";

import { Footer } from "../Footer";

describe('Footer', () => {
  it('renders correctly', () => {
    render(<Footer />);
    
    const currentYear = new Date().getFullYear().toString();

    expect(screen.getByText(new RegExp(currentYear))).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  })
})