import logo from '../images/logo.svg';

function Header() {
    return (
        <div className="header">
            <img src={logo} className="logo" alt="logo" />
            <h2>Fart Generator 🤪</h2>
            <h3>Your local bag 🎒 full of gaseous nonsense 💩</h3>
        </div>
    )
}

export default Header;