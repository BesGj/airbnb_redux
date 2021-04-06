import React, { Component } from'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectFlat } from '../actions';

class Flat extends Component {
  handleClick = () => {
    this.props.selectFlat(this.props.flat);
  }

  render() {
    const style = {
      backgroundImage: `url('${this.props.flat.imageUrl}')`
    };

  let classes = "flat card";

  if (this.props.flat === this.props.selectFlat) {
    classes += " selected";
  }
    return(
      <div className={classes} style={style} onClick={this.handleClick}>
          <div className="card-trip-infos">
            <div>
              <h2>{this.props.flat.name}</h2>
              <p>{this.props.flat.price} {this.props.flat.priceCurrency}</p>
            </div>
          </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    selectedFlat: state.selectedFlat
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectFlat: selectFlat },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Flat);

