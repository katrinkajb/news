import React, { Component } from 'react';
import ArticleList from '../components/articles/ArticleList';
import Loading from '../components/articles/Loading';
import Search from '../components/articles/Search';
import { getDogeNews, newsSearch } from '../services/newsApi';

export default class NewsSearch extends Component {
    state = {
        loading: true,
        searchQuery: '',
        articles: []
    }

    async componentDidMount() {
        const articles = await getDogeNews();

        this.setState({
            loading: false,
            articles: articles
        });
    }

    handleSearchChange = (e) => {
        this.setState({ searchQuery: e.target.value })
    }

    handleSearchSubmit = async (e) => {
        e.preventDefault();
        this.setState({ loading: true });

        const updatedArticles = await newsSearch(this.state.searchQuery);

        await this.setState({
            loading: false,
            articles: updatedArticles
        })
    }

    render() {
        if (this.state.loading) return <Loading />

        return (
            <>
                <Search
                    searchQuery={this.state.searchQuery}
                    onSearchChange={this.handleSearchChange}
                    onSubmit={this.handleSearchSubmit}
                />
                <ArticleList
                    articles={this.state.articles}
                />
            </>
        )
    }
}
