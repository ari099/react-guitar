import React from 'react';
import './BridgeHole.css';

class BridgeHole extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <circle className={this.props.className}
            r={5}
            cx={this.props.x}
            cy={this.props.y} />
      );
   }
}

export default BridgeHole;