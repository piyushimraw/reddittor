import { render, screen } from "@testing-library/react";
import Sentiment from "./sentiment";

describe("Sentiment Component", () => {
  beforeEach(() => {
    // Mocking the fetch function used in the Sentiment component
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([{ label: "POSITIVE" }]),
      })
    ) as jest.Mock;
  });
  it("renders loading state initially", () => {
    render(<Sentiment text="Exciting news about AI advancements!" />);
    expect(screen.getByText("...")).toBeDefined();
  });

  it("renders the sentiment correctly", async () => {
    render(<Sentiment text="Exciting news about AI advancements!" />);
    expect(await screen.findByText("POSITIVE")).toBeDefined();
  });

  it("does not render when text is empty", () => {
    render(<Sentiment text="" />);
    expect(screen.queryByText("POSITIVE")).toBeNull();
    expect(screen.queryByText("...")).toBeNull();
  });

  it("handles negative sentiment", async () => {
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve([{ label: "NEGATIVE" }]),
      })
    );
    render(<Sentiment text="This is really bad!" />);
    expect(await screen.findByText("NEGATIVE")).toBeDefined();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
});
