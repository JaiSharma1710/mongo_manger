import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link className="w-52 cursor-pointer" href="/">
      <Image
        alt="Logo"
        src="/images/logo.png"
        width={250}
        height={61}
        className="w-full h-auto"
      />
    </Link>
  );
};

export default Logo;
