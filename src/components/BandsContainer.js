import React, { Component } from "react";
import BandInput from "./BandInput";
import { connect } from "react-redux";
import Band from "./Band";

class BandsContainer extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        {this.props.bands.map((band) => (
          <Band key={band.id} band={band} deleteBand={this.props.deleteBand} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ bands }) => ({ bands });

const mapDispatchToProps = (dispatch) => ({
  addBand: (name) => dispatch({ type: "ADD_BAND", name }),
  deleteBand: (id) => dispatch({ type: "DELETE_BAND", id }),
});

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
