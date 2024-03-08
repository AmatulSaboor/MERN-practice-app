import './Menu.module.css';

let menuList = [
    {
        name: 'Home',
        link: './home'
    },
    {
        name: 'About Us',
        link: './aboutus' 
    },
    {
        name: 'Contact Us',
        link: './contactus' 
    }
];
let Menu = () => {
    return (
        menuList.map((item, i) => 
                <li key={i}>
                    {item.name}
                </li>
        )
    )
}

export default Menu;