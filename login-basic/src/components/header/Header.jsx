import Menu from '../menu/Menu';
import './Header.module.css';
let Header = () => {
    return(
        <>
        <h1>This is my header</h1>
            <nav>
                <ul>
                    <Menu />
                </ul>
            </nav>
        </>
    )
}

export default Header;