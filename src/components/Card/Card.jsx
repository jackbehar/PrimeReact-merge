import * as React from 'react';
import PropTypes from 'prop-types';
import { Card as CardM } from 'primereact/card';
/**
 * @uxpindocurl https://primereact.org/card/
 * @uxpindescription Displays a card with header, content, and footer.
 */
function Card(props) {
  return <CardM {...props} />;
}

Card.propTypes = {
  /** Used to get the child elements of the component. */
  children: PropTypes.node,
  /** Footer of the card. */
  footer: PropTypes.node,
  /** Header of the card. */
  header: PropTypes.node,
  /** Uses to pass attributes to DOM elements inside the component. */
  pt: PropTypes.object,
  /** Used to configure passthrough(pt) options of the component. */
  ptOptions: PropTypes.object,
  /** Secondary title of the card. */
  subTitle: PropTypes.node,
  /** Title of the card. */
  title: PropTypes.node,
  /** When enabled, removes component-related styles in the core. */
  unstyled: PropTypes.bool,
};

export default Card;
