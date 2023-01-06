// These are being imported from node_modues now(We have Removed all CDN links).
import React from 'react';
import ReactDOM from 'react-dom/client';

const heading2 = React.createElement("h2", {}, "Heading 2 by React");
const heading3 = React.createElement("h3", {}, "Heading 3 by React");
const divContainer = React.createElement("div", {}, [heading2, heading3]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(divContainer);