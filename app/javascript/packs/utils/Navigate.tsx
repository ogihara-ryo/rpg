import * as React from "react";
import * as ReactDOM from 'react-dom'

export const navigate = (Component) => {
  /*
    TODO:
      Warning: render(...): Replacing React-rendered children with a new root component.
      If you intended to update the children of this node,
      you should instead have the existing children update
      their state and render the new components instead of calling ReactDOM.render.
  */

  ReactDOM.render(
    <Component />,
    document.getElementById('main')
  )
};
