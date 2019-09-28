import React from "react"
import { cleanup, render } from "@testing-library/react";
import Title from ".";

beforeEach(cleanup)

describe('<Title />', () => {
  it('should render', () => {
    render(<Title title="Example 1" />)
  })

  it('should render title prop passed to it', () => {
    const title = "Example 2"
    const { getByText } = render(<Title title={title} />)
    getByText(title)
    console.log('success')
  })
});