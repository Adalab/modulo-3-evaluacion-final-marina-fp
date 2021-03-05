import logo from "../images/logo.png";
// import '../stylesheets/Header.scss';

const Header = () => {
  return (
    <div className='header'>
      <img className='header__img' src={logo} alt='' />
    </div>
  );
};

export default Header;
