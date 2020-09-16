// @flow
import * as React from 'react';
import Button from './Button.gen';

const ReactJsComponent = (props: {}) => {
  const buttonRef = React.useRef();
  React.useEffect(() => {
    console.log(buttonRef);
  })
  return (
    <React.Fragment>
      <Button ref={buttonRef}> JS Button </Button>
    </React.Fragment>
  );
}
export default ReactJsComponent;