import Link from "next/link";
import React, { ReactNode } from "react";

type props = {};

function CustomLink({children = null, ...rest}) {
    const handleHover = () => {
        console.log("hover");
    }
    
    return (
        <a onMouseEnter={handleHover} {...rest}>{children}</a>
    );
}


export default CustomLink;