import React from 'react'
import Band from './Band'

const Bands = props => {
    
    const bands = props.bands.map(band => <Band  key = {band.id} id = {band.id} band = {band} delete = {props.delete} />)
    
    return (
        <div>
            {bands}
        </div>
    )
}

export default Bands