import React from 'react'

export default class AccentSeparator extends React.Component {
    render() {
        return (
            <div className='separator separator-danger'>
                {this.props.separatorCharacter}
            </div>
        )
    }
}