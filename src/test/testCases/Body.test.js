import { fireEvent, render, waitFor , act} from "@testing-library/react";
import  "@testing-library/jest-dom";
import {StaticRouter} from "react-router-dom/server";
import { Provider } from "react-redux";

import appReduxStore from "../../utils/AppReduxStore";
import Body from "../../components/Body";
import { RESTAURANTS_DATA } from "../mocks/data";

global.fetch = jest.fn(() =>{
    return Promise.resolve({ 
                            json: () =>{ 
                                            return Promise.resolve(RESTAURANTS_DATA);
                                        } 
                            });
});

test("Should render shimmer", () =>{
    const body = render(<StaticRouter>
                            <Provider store ={appReduxStore}>
                                <Body/>
                            </Provider>
                         </StaticRouter>);
    const shimmer = body.getByTestId("shimmer");
    expect(shimmer.innerHTML).toBe("Hello, I am Shimmer.");
    //Uncomment once you craete appropriate shimmer - Note: even insta's shimmer contain random no. of grey cards.
    //expect(shimmer.children.length).toBe(10);
})


test("Should render search bar and restautrant cards", async() =>{
    const body = render(<StaticRouter>
                            <Provider store ={appReduxStore}>
                                <Body/>
                            </Provider>
                         </StaticRouter>);
    
    const searchBtn = await waitFor( () => body.getByTestId("search-btn"));
    expect(searchBtn.innerHTML).toBe("Search");

    const restaurantsList =  await waitFor( () =>body.getByTestId("restaurantsList"));
    expect(restaurantsList).toBeInTheDocument();
    expect(restaurantsList.children.length).toBe(3);
});


test("Should render only the filtered resaurants as per the search input", async() =>{
    const body = render(<StaticRouter>
                            <Provider store ={appReduxStore}>
                                <Body/>
                            </Provider>
                         </StaticRouter>);
    
    const restaurantsList =  await waitFor( () =>body.getByTestId("restaurantsList"));
    expect(restaurantsList.children.length).toBe(3);

    const searchInput = await waitFor( () =>body.getByTestId("search-input"));
    act(() => {
        fireEvent.change(searchInput, { target: {value: "Food"}});
      });
    
    const searchBtn = await waitFor(() => body.getByTestId("search-btn"));
    act(() => {
        fireEvent.click(searchBtn);
      });
    expect(restaurantsList.children.length).toBe(2);
});