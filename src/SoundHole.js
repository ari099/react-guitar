import React from 'react';
import './SoundHole.css';

class SoundHole extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <circle className={this.props.className} />
      )
   }
}

export default SoundHole;