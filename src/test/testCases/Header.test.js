import {render} from '@testing-library/react';
import Header from "../../components/Header";

test("Should load the Food Villa Logo", () =>{
    const header = render(<Header/>);
    console.log(header);
})