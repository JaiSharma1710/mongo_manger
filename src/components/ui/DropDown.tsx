import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@nextui-org/react';

type DropDownProps = {
  buttonText: string;
  dropDownItems: string[];
  handleDropDownValueSelection: (selectedItem: string) => void;
};

const DropDown = ({
  buttonText,
  dropDownItems,
  handleDropDownValueSelection,
}: DropDownProps) => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button color="success" radius="sm" variant="bordered">
          {buttonText}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        {dropDownItems.length ? (
          dropDownItems.map((item, index) => (
            <DropdownItem
              onPress={() => handleDropDownValueSelection(item)}
              key={index}
            >
              {item}
            </DropdownItem>
          ))
        ) : (
          <DropdownItem isDisabled>
            No Database present please add one
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropDown;
