import React from "react";
import { render } from "@testing-library/react";

import About from "../About";

describe('About component', () => {
  it('renders the page correctly', () => {
    const { container } = render(<About />);
    expect(container).toMatchSnapshot();
  });
});