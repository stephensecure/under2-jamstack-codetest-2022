import React from "react";
import PropTypes from "prop-types"
import { HeaderContainer } from "../../atoms/HeaderContainer"
import { ArticleBoxContainer } from "../../atoms/ArticleBoxContainer"
import { Articles } from "../../atoms/Articles"
import { Heading } from "../../atoms/Heading"


LatestArticle.propTypes = {
    children: PropTypes.node,
}

export function LatestArticle({ className = "", padding, latestArticles }) {

    return (
        <section className={`${className}`}>
        <HeaderContainer>
            <Heading> The latest from Mula </Heading>
        </HeaderContainer>
        <ArticleBoxContainer className="gap-12" padding={padding} >
            {latestArticles.map(latestArticle => <Articles 
                key={latestArticle._id}
                src={latestArticle.coverImage} 
                alt={latestArticle._id} 
                publishDate={latestArticle.publishDate}
                heading={latestArticle.heading}
                />
            )}
        </ArticleBoxContainer>
    </section>
    )
}
