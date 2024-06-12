import { render, screen } from "@testing-library/react";
import Posts from "./Posts";
import { ChildData } from "@/lib/types";

const mockPosts = [
  {
    id: "1",
    title: "First Post",
    selftext: "This is the first post",
    author: "user1",
    ups: 100,
    num_comments: 10,
  },
  {
    id: "2",
    title: "Second Post",
    selftext: "This is the second post",
    author: "user2",
    ups: 200,
    num_comments: 20,
  },
];

describe("Posts Component", () => {
  beforeEach(() => {
    // Mocking the fetch function used in the Sentiment component
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([{ label: "POSITIVE" }]),
      })
    ) as jest.Mock;
  });
  it("renders the posts correctly", () => {
    render(<Posts posts={mockPosts as any} />);

    expect(screen.getByText("Posts")).toBeDefined();
    expect(screen.getByText("First Post")).toBeDefined();
    expect(screen.getByText("This is the first post")).toBeDefined();
    expect(screen.getByText("u/user1")).toBeDefined();
    expect(screen.getByText("100")).toBeDefined();

    expect(screen.getByText("Second Post")).toBeDefined();
    expect(screen.getByText("This is the second post")).toBeDefined();
    expect(screen.getByText("u/user2")).toBeDefined();
    expect(screen.getByText("200")).toBeDefined();
  });

  // Resetting mock after each test
  afterEach(() => {
    jest.resetAllMocks();
  });
});
