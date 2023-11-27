import React from 'react';
import { Select, SelectItem } from '@nextui-org/react';

type SelectProps = {
  buttonText: string;
  dropDownItems: string[];
  handleDropDownValueSelection: (selectedItem: string) => void;
};

export default function SelectComponent({
  buttonText,
  dropDownItems,
  handleDropDownValueSelection,
}: SelectProps) {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Select size="sm" color="success" label={buttonText} className="max-w-xs">
        {dropDownItems.length ? (
          dropDownItems.map((item, index) => (
            <SelectItem
              onPress={() => handleDropDownValueSelection(item)}
              key={index}
              value={item}
            >
              {item}
            </SelectItem>
          ))
        ) : (
          <SelectItem key={'no db'} value={'no DB'} isDisabled>
            No Database present please add one
          </SelectItem>
        )}
      </Select>
    </div>
  );
}
