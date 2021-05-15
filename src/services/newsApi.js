export const getDogeNews = async () => {
    const res = await fetch(`https://newsapi.org/v2/everything?q=Dogecoin&apiKey=${process.env.newsApi}`);

    const { articles } = await res.json();

    return articles.map((article) => ({
        title: article.title,
        author: article.author,
        description: article.description,
        link: article.url,
    }));
}

export const newsSearch = async (searchQuery) => {
    const res = await fetch(`https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${process.env.newsApi}`);

    const { articles } = await res.json();
console.log(searchQuery)
    return articles.map((article) => ({
        title: article.title,
        author: article.author,
        description: article.description,
        link: article.url,
    }));
}
