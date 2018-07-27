import React from 'react'
import {
    ArticleItemWrapper,
    Title,
    Author,
    Name,
    Description,
    Time
} from './elements'

class ArticleItem extends React.Component {
    // constructor() {}
    static defaultProps = {
        article: {},
    }

    render() {
        const { title, author, description, publishedAt, urlToImage, url, source } = this.props.article
        const { name } = source
        return (
            <ArticleItemWrapper>
                <Title>{title}</Title>
                <Author>{author}</Author>
                <Name>{name}</Name>
                <Time>{publishedAt}</Time>
                <div>{urlToImage}</div>
                <Description>{description}</Description>
            </ArticleItemWrapper>
        )
    }
}

export default ArticleItem
export { ArticleItem }