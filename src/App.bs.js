// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Button from "./Button.bs.js";
import * as ReactJsComponent from "./ReactJsComponent.bs.js";

function App(Props) {
  var buttonRef = React.useRef(null);
  React.useEffect((function () {
          console.log(buttonRef);
          
        }), ([]));
  return React.createElement(React.Fragment, undefined, React.createElement(Button.make, {
                  children: "Button",
                  ref: buttonRef
                }), React.createElement(ReactJsComponent.make, { }));
}

var make = App;

export {
  make ,
  
}
/* react Not a pure module */
