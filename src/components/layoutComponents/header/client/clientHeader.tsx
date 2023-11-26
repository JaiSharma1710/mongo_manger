'use client';
import Logo from '@/components/UIComponents/Logo';
import { Button, Input, useDisclosure } from '@nextui-org/react';
import ModalComponent from '@/components/UIComponents/ModalComponent';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import { useState } from 'react';

const ClientHeader = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isVisible, setIsVisible] = useState(false);
  return (
    // <div className="flex justify-between items-center px-6 py-2 border-b shadow-sm sticky bg-white top-0">
    //   <Logo />
    <>
      <Button size="lg" color="success" radius="sm" onClick={onOpen}>
        Login
      </Button>
      <ModalComponent
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        modalTitle={
          <div className="flex justify-center">
            <Logo />
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
    // </div>
  );
};

export default ClientHeader;
