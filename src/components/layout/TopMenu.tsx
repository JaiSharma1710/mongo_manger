'use client';
import ModalComponent from '@/components/ui/ModalComponent';
import SelectComponent from '@/components/ui/Select';
import { Button, Input, useDisclosure } from '@nextui-org/react';
import Image from 'next/image';
import { useState } from 'react';

const TopMenu = () => {
  const [selectedDb, setSelectedDb] = useState('');
  const [dbList, setDbList] = useState([]);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [formValues, setFromValues] = useState({
    mongoUri: '',
    dbName: '',
    dropDownName: '',
  });

  const handelFromSubmit = () => {
    console.log(formValues);
    onClose();
  };

  const disableSubmit =
    !formValues.mongoUri || !formValues.dbName || !formValues.dropDownName;

  return (
    <div className="mb-2 flex gap-2">
      <Button className="h-auto" color="success" radius="sm" onClick={onOpen}>
        Add DataBase
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
        <Input
          type="text"
          label="Mongo URI"
          onChange={(e) =>
            setFromValues((pre) => ({ ...pre, mongoUri: e.target.value }))
          }
          value={formValues.mongoUri}
        />
        <Input
          type="text"
          label="DB Name"
          onChange={(e) =>
            setFromValues((pre) => ({ ...pre, dbName: e.target.value }))
          }
          value={formValues.dbName}
        />
        <Input
          type="text"
          label="DB DropDown Name"
          onChange={(e) =>
            setFromValues((pre) => ({ ...pre, dropDownName: e.target.value }))
          }
          value={formValues.dropDownName}
        />
        <Button
          onClick={handelFromSubmit}
          color="success"
          radius="sm"
          className="mb-2"
          isDisabled={disableSubmit}
        >
          Add DataBase
        </Button>
      </ModalComponent>
    </div>
  );
};

export default TopMenu;
