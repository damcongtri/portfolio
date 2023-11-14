import classNames from "classnames/bind";
import style from "./layout.module.scss"
import Header from "./header";

const cx = classNames.bind(style)
function Layout({ children }) {
    return (
        <>
            <div>
                <Header />
                {children}
            </div>
        </>
    );
}

export default Layout;