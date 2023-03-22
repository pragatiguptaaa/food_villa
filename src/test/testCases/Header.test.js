import {render} from '@testing-library/react';
import { Provider } from 'react-redux';
import {StaticRouter} from "react-router-dom/server"

import appReduxStore from '../../utils/AppReduxStore';
import Header from "../../components/Header";

test("Should load the Food Villa Logo", () =>{
    const header = render(<StaticRouter>
                                    <Provider store ={appReduxStore}>
                                                        <Header/>
                                                    </Provider>
                          </StaticRouter>);
    console.log(header);
    const Logo = header.getByTestId('foodVillaLogo');
    console.log(Logo);
    //logo.src -->Memoized props
    expect(Logo.src).toBe("http://localhost/dummyImage.png");
});

test("Status should be online on rendering header", () =>{
    const header = render(<StaticRouter>
                                    <Provider store ={appReduxStore}>
                                                        <Header/>
                                                    </Provider>
                          </StaticRouter>);
    const onlineStatus = header.getByTestId('online-status');
    console.log(onlineStatus);
    //Use Windows +. to open emoji bar in VS Code.
    expect(onlineStatus.innerHTML).toBe("✅");
});

test("No. of cart items should be zero on rendering header", () =>{
    const header = render(<StaticRouter>
                                    <Provider store ={appReduxStore}>
                                                        <Header/>
                                                    </Provider>
                          </StaticRouter>);
    const cart = header.getByTestId('cart');
    console.log(cart);
    //Use Windows +. to open emoji bar in VS Code.
    expect(cart.innerHTML).toBe("Cart - 0 items added");
});