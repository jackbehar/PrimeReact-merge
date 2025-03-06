import * as React from 'react';
import PropTypes from 'prop-types';
import { Checkbox as CheckboxM } from 'primereact/checkbox';
/**
 * @uxpindocurl https://primereact.org/checkbox/
 * @uxpindescription Checkbox is an extension to standard checkbox element with theming..
 */

function Checkbox(props) {
  return <CheckboxM {...props} />;
}

Checkbox.propTypes = {
  /** Automatically focus on component load. */
  autoFocus: PropTypes.bool,
  /** Specifies whether the checkbox is checked.
   * @uxpinbind onChange 0.checked
   */
  checked: PropTypes.bool,
  /** Child elements inside the checkbox. */
  children: PropTypes.node,
  /** Style class of the element. */
  className: PropTypes.string,
  /** Disables the checkbox. */
  disabled: PropTypes.bool,
  /** Value when checkbox is unchecked. */
  falseValue: PropTypes.any,
  /** Icon displayed in the checkbox. */
  icon: PropTypes.node,
  /** Unique identifier for the checkbox. */
  id: PropTypes.string,
  /** Identifier for the input element. */
  inputId: PropTypes.string,
  /** Reference to the input element. */
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /** Specifies invalid state styling. */
  invalid: PropTypes.bool,
  /** Name of the checkbox element. */
  name: PropTypes.string,
  /** Pass-through attributes for inner DOM elements. */
  pt: PropTypes.object,
  /** Configuration for pass-through options. */
  ptOptions: PropTypes.object,
  /** Prevents value changes. */
  readOnly: PropTypes.bool,
  /** Specifies required input before form submission. */
  required: PropTypes.bool,
  /** Inline styles for the checkbox. */
  style: PropTypes.object,
  /** Defines tabbing order. */
  tabIndex: PropTypes.number,
  /** Tooltip text. */
  tooltip: PropTypes.string,
  /** Configuration options for tooltip. */
  tooltipOptions: PropTypes.object,
  /** Value when checkbox is checked. */
  trueValue: PropTypes.any,
  /** Removes component-related styles. */
  unstyled: PropTypes.bool,
  /** Value of the checkbox. */
  value: PropTypes.any,
  /** Input variant type. */
  variant: PropTypes.oneOf(['filled', 'outlined']),
  /** Callback invoked when value changes. */
  onChange: PropTypes.func,
  /** Callback invoked when clicked. */
  onClick: PropTypes.func,
  /** Callback invoked on right-click. */
  onContextMenu: PropTypes.func,
  /** Callback invoked when mouse button is pressed. */
  onMouseDown: PropTypes.func,
};

export default Checkbox;
