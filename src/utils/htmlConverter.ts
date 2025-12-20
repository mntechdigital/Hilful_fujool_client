// Renders HTML safely for blog description
import React from "react";

const HtmlConverter = ({ html }: { html: string }) =>
    React.createElement("div", {
        className: "line-clamp-2 prose prose-sm prose-slate max-w-xs",
        dangerouslySetInnerHTML: { __html: html }
    });

export default HtmlConverter;