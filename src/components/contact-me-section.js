import React from 'react'
import { AccentSeparator } from './kate-style-components'

export function ContactMeSection() {
    return (
        <div className="contact-me-section-content">
            <div className="contact-me-dark-cover" />
            <div className="contact-me-title">
                Do you want to work with me?
            </div>
            <AccentSeparator />
            <div className="contact-me-description">
                I am looking for a UI/UX developer position. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra commodo ipsum nec porttitor. Suspendisse suscipit feugiat nunc, sed ultricies.
            </div>
            <a
                className="btn btn-default" href="mailto:kheeya7@hotmail.com">
                EMAIL KATE
            </a>
        </div>
    )
}