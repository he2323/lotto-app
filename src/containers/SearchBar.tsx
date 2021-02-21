
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";


interface SearchBarProps {
  value: string;
  changeValue: (value:string) => void;
}

const SearchBar = ({ value, changeValue }:SearchBarProps) => {
  return (
    <InputGroup w="40rem">
      <Input  value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeValue(e.currentTarget.value)}/>
      <InputRightElement />
    </InputGroup>
  );
};

export default SearchBar;
