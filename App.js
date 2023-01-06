// These are being imported from node_modues now(We have Removed all CDN links).
import React from 'react';
import ReactDOM from 'react-dom/client';


const heading1 = <h1>Heading 1 by JSX</h1>
const heading2 = <h2>Heading 2 by JSX</h2>
const heading3 = <h3>Heading 3 by JSX</h3>
const divContainer = React.createElement("div", {className:"title"}, [heading1, heading2, heading3]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(divContainer);