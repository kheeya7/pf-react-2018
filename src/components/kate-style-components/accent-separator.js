import React from 'react'
import PropTypes from 'prop-types'

export function AccentSeparator(props) {
    return (
        <div className='separator separator-danger'>
            {props.separatorCharacter}
        </div>
    )
}

AccentSeparator.propTypes = {
    separatorCharacter: PropTypes.string,
}

AccentSeparator.defaultProps = {
    separatorCharacter: '✻',
}