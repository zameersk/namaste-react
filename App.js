import React from "react";
import  ReactDOM  from "react-dom/client";


const root =  ReactDOM.createRoot(document.getElementById('root'));

const elem =  React.createElement('h1', {} , "Hi I am H1")

root.render(elem);