import React from "react";
import  ReactDOM  from "react-dom/client";

// React.createElement => object ==> html element (render)

//const heading = React.createElement("h1",{},"namasthe krishna")

//jsx (transpiled before it reaches JS) -PARCEL - babel

const Title =()=> (<h1 id="heading" tabIndex ="5">namasthe react</h1>)

const number = 1000

const HeadingComponent = ()=> (
<div>
    {number}
<h1 className="heading">Namasthe react functional Component</h1>
    </div>)


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent/>)