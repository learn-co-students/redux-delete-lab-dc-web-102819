import React, { Component } from "react";
import Band from './Band'
// import { connect } from "react-redux";

class Bands extends Component {
    render() {
        return <div>
            {this.props.bands.map(band => <Band key={band.id} band={band} delete={this.props.delete} />)}    
        </div>
    }
}

// const mapStateToProps = ({bands}) => ({bands})

export default 
// connect(mapStateToProps)
(Bands)
