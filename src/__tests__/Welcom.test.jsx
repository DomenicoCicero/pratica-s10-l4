import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";

describe("check that component Welcome is mounted correctly", () => {
  //1
  it("mounts correctly Welcome", () => {
    render(<Welcome />);
    const alert = screen.getByRole("alert");
    expect(alert).toBeInTheDocument();
  });
});
