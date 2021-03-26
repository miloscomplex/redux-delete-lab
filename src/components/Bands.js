import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {

  renderBands = () => this.props.bands.map( band => <Band deleteBand={this.props.deleteBand} band={band} key={band.id} /> )

  render() {
    return(
      <div>
        {this.renderBands()}
      </div>
    );
  }
};

export default Bands;
