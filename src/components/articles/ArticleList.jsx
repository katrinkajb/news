import React from 'react';
import Article from './Article';
import PropTypes from 'prop-types';

export default function ArticleList({ articles }) {
    return (
        <ul aria-label='article-list'>
            <h1>The News</h1>
            {articles.map((article) => {
                return (
                    <li 
                        aria-label='article'
                        key={`${article.title}+${article.author}`}>
                            <Article
                                title={article.title}
                                author={article.author}
                                description={article.description}
                                link={article.link}
                            />
                    </li>
                )
            })}
        </ul>
    )
}

ArticleList.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            author: PropTypes.string,
            description: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
        })
    ).isRequired,
}
