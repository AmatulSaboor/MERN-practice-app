import styles from './menu.module.css';
// login css
// let loginCSS = {
//     form: {
//         backgroundColor : 'blue',
//         fontSize: '12px',
//         maxWidth : '50%',
//     }
// }


// menu items static list 
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
                // <li key={i} style={loginCSS.form}>
                <li key={i}>
                    {item.name}
                </li>
            )
            }
        )
    )
}

export default Menu;