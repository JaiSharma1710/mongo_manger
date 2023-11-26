import ServerHeader from './server';
import ClientHeader from './client';

const Header = () => {
  return (
    <div className="flex justify-between items-center px-6 py-2 border-b shadow-sm sticky bg-white top-0">
      <ServerHeader />
      <ClientHeader />
    </div>
  );
};

export default Header;
