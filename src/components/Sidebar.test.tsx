import { render, waitFor, screen } from "@testing-library/react";
import axios from "axios";
import Sidebar from "./Sidebar";

jest.mock("axios");

const dummyData = 
{
userId: 1,
id: 1,
title: "todo 1",
completed: false,
};

test("user data", async () => {
//axios.get.mockResolvedValue({ data: dummyData });
(axios.get as jest.Mock).mockResolvedValue({ data: dummyData });

render(<Sidebar />);

const userprofile = await waitFor(() => screen.findAllByTestId("userdata"));

expect(userprofile).toHaveLength(1);
});