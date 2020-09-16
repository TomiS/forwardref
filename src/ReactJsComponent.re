// [@react.component];
// [@bs.module] external make: props => React.element = "./ReactJsComponent";

[@genType.import "./ReactJsComponent"] [@react.component]
external make: unit => React.element = "default";
