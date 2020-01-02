import React from 'react';
import './SoundHole.css';

class SoundHole extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <circle className={this.props.className}
          cx={this.props.x}
          cy={this.props.y}
          r={this.props.r} />
      )
   }
}

export default SoundHole;