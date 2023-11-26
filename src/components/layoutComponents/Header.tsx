import Button from '../UIComponents/Button';
import Logo from '../UIComponents/Logo';

const Header = () => {
  return (
    <div className="flex justify-between px-6 py-2 border-b shadow-sm sticky bg-white top-0">
      <Logo />
      <Button>Login</Button>
    </div>
  );
};

export default Header;
