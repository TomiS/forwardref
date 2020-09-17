/** 
 * @flow strict
 * @generated from Button.re
 * @nolint
 */
/* eslint-disable */
// $FlowExpectedError: Reason checked type sufficiently
type $any = any;

// $FlowExpectedError: Reason checked type sufficiently
import * as React from 'react';

const $$toRE376036061 = {"foo": 5097222, "bar": 4895187};

// $FlowExpectedError: Reason checked type sufficiently
import * as ButtonBS from './Button.bs';

export type poly = "foo" | "bar";

// Type annotated function components are not checked by Flow, but typeof() works.
const $$default$$forTypeof = function (_: {| +children?: React$Node, +poly?: poly |}) : React$Node { return null };

export type Props = {| +children?: React$Node, +poly?: poly |};

export const $$default: typeof($$default$$forTypeof) = function Button(Arg1: $any) {
  const $props = {children:Arg1.children, poly:(Arg1.poly == null ? undefined : $$toRE376036061[Arg1.poly])};
  const result = React.createElement(ButtonBS.default, $props);
  return result
};

export default $$default;
