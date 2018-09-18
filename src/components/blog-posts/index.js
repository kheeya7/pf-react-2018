import React from 'react'
import Parser from 'rss-parser'

export class BlogPosts extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            blogPosts: [],
        }

        this.fetchBlogPosts()
    }

    fetchBlogPosts() {
        const parser = new Parser();

        parser.parseURL('http://katesohng.net/blog/index.php/feed/').then((feed) => {
            const posts = [];

            feed.items.forEach(item => {
                const postItem = {
                    title: item.title,
                    categories: item.categories.join(','),
                    contentSnippet: item.contentSnippet,
                    link: item.link,
                    date: item.pubDate,
                }

                posts.push(postItem)
            });

            this.setState({
                blogPosts: posts,
            })
        })
    }

    render() {
        return (
            <div className="blog-posts">
                {
                    this.state.blogPosts.map((post) => {
                        return (
                            <div key={post.link} className="blog-post-item">
                                <div className="blog-post-title">
                                    {post.title}
                                </div>
                                <div className="blog-post-date">
                                    {post.date}
                                </div>
                                <div className="blog-post-categories">
                                    {post.categories}
                                </div>
                                <div className="blog-post-content">
                                    {post.contentSnippet}
                                </div>
                                <div className="blog-post-link">
                                    <a href={post.link}>
                                        {post.link}
                                    </a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}