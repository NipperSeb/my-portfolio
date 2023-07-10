import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from "react"
import AboutMePage from './page'

describe('About Me Page', () => {
  it("should render without crashing", () => {
    render(<AboutMePage />)
    const title = screen.getByText(/De la passion à l'expertise: À la recherche d'une entreprise pour concrétiser ma reconversion en alternance/);
    expect(title).toBeInTheDocument();
  });
})