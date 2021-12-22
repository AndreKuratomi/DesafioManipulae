import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Desafio Manipulaê text", () => {
  render(<App />);
  const linkElement = screen.getByText(/Desafio Manipulaê/i);
  expect(linkElement).toBeInTheDocument();
});
