import React from 'react';
import './GuitarString.css';

class GuitarString extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         playing: false
      };
   }

   render() {
      return (
         <line className={this.props.className}
            x1={this.props.x}
            y1={this.props.y}
            x2={this.props.x}
            y2={this.props.y+290} />
      )
   }
}

export default GuitarString;