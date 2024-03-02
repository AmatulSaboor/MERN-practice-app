import Menu from './Menus';
let Header = () => {
    return (
        <>
            <h1>
                This is my Header
                <nav>
                    <ul>
                        <Menu /> 
                    </ul>
                </nav>
            </h1>
        </>
    )
}

export default Header;