import { Link, useLocation } from "react-router-dom";
import style from '../styles/private/Breadcrumb.module.css';

const Breadcrumb = () => {
    const location = useLocation();

    const pathnames = location.pathname.split("/").filter(Boolean);

    return (
        <div className={style.breadcrumb}>
            <Link to="/" title="Home">HOME</Link>

            {pathnames.map((name, index) => {
                const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
                const isLast = index === pathnames.length - 1;

                return (
                    <span key={routeTo}>
                        {" > "}
                        {isLast ? (
                            <span>{decodeURIComponent(name).toUpperCase()}</span>
                        ) : (
                            <Link to={routeTo} title={decodeURIComponent(name)}>{decodeURIComponent(name).toUpperCase()}</Link>
                        )}
                    </span>
                );
            })}
        </div>
    );
};

export default Breadcrumb;