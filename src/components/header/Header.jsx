import Menu from '../menu/Menus';
import styles from './Header.module.css';
let Header = () => {
    return (
        <>
            <h1>This is my Header</h1>
            <nav>
                <ul>
                    <Menu /> 
                </ul>
            </nav>
        </>
    )
}

export default Header;