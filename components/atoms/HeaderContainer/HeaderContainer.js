import React from "react"
import PropTypes from "prop-types"

HeaderContainer.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
}

export function HeaderContainer({ className = "", children, padding = "md" }) {
    
    const variants = {
        padding: {
            md: "py-16 md:py-32",
            mdTopOnly: "pt-16 md:pt-32",
            none: ""
        }
    }

    const paddingClassName = variants.padding[padding]
    
    return (
        <div className={`mx-auto p-6 sm:px-8  max-w-[1156px] box-content gap-6 ${className}`}>
            {children}
        </div>
    )
}
