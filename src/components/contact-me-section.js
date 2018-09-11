import React from 'react'
import { AccentSeparator } from './kate-style-components'

export function ContactMeSection() {
    return (
        <div className="contact-me-section-content">
            <div className="contact-me-dark-cover" />
            <div className="contact-me-title">
                <h2>Do you want to work with me?</h2>
            </div>
            <AccentSeparator />
            <div className="contact-me-description">
                I am looking for a UI/UX/front-end developer position. If you like my projects or want to know me better, please contact me via email. I will respond to your email as soon as I can.
            </div>
            <a
                className="btn btn-default" href="mailto:kheeya7@hotmail.com">
                EMAIL KATE
            </a>
        </div>
    )
}