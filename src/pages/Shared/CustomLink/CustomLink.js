import React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link
            style={{
                color: match ? '#FF9900' : 'white',
                fontWeight: match ? '700' : '500',
                borderBottom: match ? '3px solid #FF9900' : 'none',
            }}
            to={to}
            {...props}
        >
            {children}
        </Link>
    );
};

export default CustomLink;