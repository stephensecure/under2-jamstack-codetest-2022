import React from "react"
import PropTypes from "prop-types"

ArticleBoxContainer.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
}

export function ArticleBoxContainer({ className = "", children, padding = "md" }) {
    
    const variants = {
        padding: {
            md: "py-16 md:py-32",
            mdTopOnly: "pt-16 md:pt-32",
            none: ""
        }
    }

    const paddingClassName = variants.padding[padding]
    
    return (
        <div className={`grid mx-auto md:grid-cols-12 p-6 max-w-[1156px] box-content gap-6 ${className}`}>
            {children}
        </div>
    )
}
