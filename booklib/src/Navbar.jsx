import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
    return <nav className="nav">
        <Link to="/" className="site-title">booklib.</Link>
        <ul>
            <CustomLink to="/manage">Manage Books</CustomLink>
            <CustomLink to="/account">Account</CustomLink>
        </ul>
    </nav>
}

function CustomLink({ to, children, ...props }) {

    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname });

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}