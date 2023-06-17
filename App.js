import React from "react";
import  ReactDOM  from "react-dom";

const heading = React.createElement("h1",{id:'heading'},"Hello world from react")
const root =  ReactDOM.render(heading, document.getElementById("root"))