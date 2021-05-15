import React from 'react'
import PropTypes from 'prop-types'

export default function Article({ title, author, description, link }) {
    return (
        <a href={link}>
            <h3>{title}</h3>
            <h4>{author}</h4>
            <p>{description}</p>
        </a>
    )

}

Article.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
}
