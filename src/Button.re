[@react.component]
let make =
  React.forwardRef((~children: option(React.element)=?, forwardedRef) => {
    <button
      ref=?{
        forwardedRef
        ->Js.Nullable.toOption
        ->Belt.Option.map(ReactDOMRe.Ref.domRef)
      }>
      <span> {children->Belt.Option.getWithDefault(React.null)} </span>
    </button>
  });

[@genType]
let default = make;
