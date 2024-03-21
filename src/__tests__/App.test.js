import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

describe("control over rendering", () => {
  //2
  it("checks lenght bookcards", () => {
    render(<App />);
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(150);
  });

  //3
  it("checks commentArea exists", async () => {
    render(<App />);
    const image = screen.getAllByRole("img")[0];
    fireEvent.click(image);
    const comments = await screen.findByText(/comments:/i);
    expect(comments).toBeInTheDocument();
  });

  //4
  it("creates a list with just 1 card after waiting for the fetch the complete and writing 'Wing' in the search field", () => {
    render(<App />);
    const search = screen.getByPlaceholderText(/inserisci un libro da cercare/i);
    fireEvent.change(search, { target: { value: "Wing" } });
    const cardFiltered = screen.getAllByRole("img");
    expect(cardFiltered).toHaveLength(1);
  });

  //5
  it("controls colored border after clicking the image", () => {
    render(<App />);
    const image = screen.getAllByRole("img")[0];
    fireEvent.click(image);
    const card = screen.getAllByTestId("card")[0];
    expect(card).toHaveClass("selected");
  });

  //6
  it("controls whether colored border of first image is deselected after clicking second image", () => {
    render(<App />);
    const image = screen.getAllByRole("img")[0];
    fireEvent.click(image);
    const card = screen.getAllByTestId("card")[0];
    expect(card).toHaveClass("selected");
    const image2 = screen.getAllByRole("img")[1];
    fireEvent.click(image2);
    const card2 = screen.getAllByTestId("card")[1];
    expect(card2).toHaveClass("selected");
    expect(card).not.toHaveClass("selected");
  });

  //7
  it("controls that there are no instances of CommentsList", () => {
    render(<App />);
    const comments = screen.queryAllByTestId("comments-list");
    expect(comments).toHaveLength(0);
  });

  //8
  it("checks for instances of reviews after click on image", async () => {
    render(<App />);
    const image = screen.getAllByRole("img")[0];
    fireEvent.click(image);
    const review = await screen.findByText(/add comment/i);
    expect(review).toBeInTheDocument();
  });
});
