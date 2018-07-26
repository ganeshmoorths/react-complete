import React from 'react'

class ArticleItem extends React.Component {
    // constructor() {}
    static defaultProps = {
        article: {},
    }

    render() {
        return (
            <div className='article-item'>
                {this.props.article.test}
            </div>
        )
    }
}