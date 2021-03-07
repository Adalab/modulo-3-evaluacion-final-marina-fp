import logo from "../images/logo.png";
// import '../stylesheets/Header.scss';

const Header = () => {
  return (
    <div className='header'>
      <img className='header__image' src={logo} alt='Rick and Morty logo' />
    </div>
  );
};

export default Header;
