'use client';
import Logo from '@/components/ui/Logo';
import { Button, Input, useDisclosure } from '@nextui-org/react';
import ModalComponent from '@/components/ui/ModalComponent';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import { useState } from 'react';
import Image from 'next/image';

const Header = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="flex justify-between items-center px-6 py-2 border-b shadow-sm sticky bg-white top-0">
      <Logo />
      <>
        <Button size="lg" color="success" radius="sm" onClick={onOpen}>
          Login
        </Button>
        <ModalComponent
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          modalTitle={
            <div className="text-center">
              <Image
                alt="Logo"
                src="/images/logo.png"
                width={250}
                height={61}
                className="w-48 mb-2 mx-auto h-auto"
              />
            </div>
          }
        >
          <Input type="email" label="Email" />
          <Input
            type={isVisible ? 'text' : 'password'}
            label="Password"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={() => setIsVisible((pre) => !pre)}
              >
                {!isVisible ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </button>
            }
          />
          <Button size="lg" color="success" radius="sm" onClick={() => {}}>
            Login
          </Button>
        </ModalComponent>
      </>
    </div>
  );
};

export default Header;
