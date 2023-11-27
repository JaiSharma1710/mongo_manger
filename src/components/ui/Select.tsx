import { Select, SelectItem } from '@nextui-org/react';
import { formValuesType } from '../layout/TopMenu';

type SelectProps = {
  buttonText: string;
  dropDownItems: formValuesType[];
  handleDropDownValueSelection: (selectedItem: string) => void;
  selectedDb: formValuesType;
};

export default function SelectComponent({
  buttonText,
  dropDownItems,
  handleDropDownValueSelection,
  selectedDb,
}: SelectProps) {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Select
        selectedKeys={selectedDb.dropDownName && [selectedDb.dropDownName]}
        size="sm"
        color="success"
        label={buttonText}
        className="max-w-xs"
        onChange={(e) => handleDropDownValueSelection(e.target.value)}
      >
        {dropDownItems.length ? (
          dropDownItems.map((item) => (
            <SelectItem key={item.dropDownName} value={item.dropDownName}>
              {item.dropDownName}
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
