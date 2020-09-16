[@genType]
[@react.component]
let make = () => {
  let buttonRef = React.useRef(Js.Nullable.null);
  React.useEffect0(() => {
    Js.log(buttonRef);
    None;
  });
  <>
    <Button ref=buttonRef> {ReasonReact.string("Button")} </Button>
    <ReactJsComponent />
  </>;
};
