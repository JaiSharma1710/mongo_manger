'use client';
import ModalComponent from '@/components/UIComponents/ModalComponent';
import SelectComponent from '@/components/UIComponents/Select';
import { Button, Input, useDisclosure } from '@nextui-org/react';
import Image from 'next/image';
import { useState } from 'react';

const TopMenu = () => {
  const [selectedDb, setSelectedDb] = useState('');
  const [dbList, setDbList] = useState([]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="mb-2 flex gap-2">
      <Button className="h-auto" color="success" radius="sm" onClick={onOpen}>
        Connect DataBase
      </Button>
      <SelectComponent
        buttonText={selectedDb || 'Select DB'}
        handleDropDownValueSelection={(selectedItem: string) => {
          setSelectedDb(selectedItem);
        }}
        dropDownItems={dbList}
      />
      <ModalComponent
        onOpenChange={onOpenChange}
        isOpen={isOpen}
        modalTitle={
          <div className="text-center">
            <Image
              alt="Logo"
              src="/images/logo.png"
              width={250}
              height={61}
              className="w-48 mb-2 mx-auto h-auto"
            />
            <p className="font-bold">Connect your DataBase</p>
          </div>
        }
      >
        <Input type="text" label="Mongo URI" />
        <Input type="text" label="DB Name" />
        <Input type="text" label="DB DropDown Name" />
        <Button color="success" radius="sm" className="mb-2">
          Connect DataBase
        </Button>
      </ModalComponent>
    </div>
  );
};

export default TopMenu;
