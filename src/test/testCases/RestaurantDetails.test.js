import { render, waitFor, fireEvent, act} from "@testing-library/react";
import "@testing-library/jest-dom";

import {StaticRouter} from "react-router-dom/server";
import { Provider } from "react-redux";

import appReduxStore from "../../utils/AppReduxStore";
import Header from  "../../components/Header";
import RestaurantDetails from "../../components/RestaurantDetails";
import { RESTAURANT_DETAILS } from "../mocks/data";


global.fetch = jest.fn(() =>{
    return Promise.resolve({ 
                            json: () =>{ 
                                            return Promise.resolve(RESTAURANT_DETAILS);
                                        } 
                            });
});


test("Should add one item to the cart", async() =>{
    const headerAndRestarantDetails = 
    render(<StaticRouter>
            <Provider store ={appReduxStore}>
                 <Header/>
                 <RestaurantDetails />
             </Provider>
          </StaticRouter>);

const restaurantMenuButtons =  await waitFor( () =>headerAndRestarantDetails.getAllByTestId("item-button"));
expect(restaurantMenuButtons[0]).toBeInTheDocument();

act(() => {
    fireEvent.click(restaurantMenuButtons[0]);
  });

const cart = await waitFor( () =>headerAndRestarantDetails.getByTestId("cart"));
expect(cart.innerHTML).toBe("Cart - 1 items added");
});