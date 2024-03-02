let menuItems = [
    {
        name:'Home',
        link:'./'
    },
    {
        name:'Contact Us',
        link:'./contact us'
    },
    {
        name:'About Us',
        link:'./about us'
    },
];
let Menu = () => {
    return(
        menuItems.map((item, i) => {
            return(
                <li key={i}>
                    {item.name}
                </li>
            )
            }
        )
    )
}

export default Menu;