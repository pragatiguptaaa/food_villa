// These are being imported from node_modues now(We have Removed all CDN links).
import React from 'react';
import ReactDOM from 'react-dom/client';

const nestedHeader =    (<div className ="title">
                            <h1>Heading 1 by JSX</h1>
                            <h2>Heading 2 by JSX</h2>
                            <h3>Heading 3 by JSX</h3>
                        </div>);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(nestedHeader);