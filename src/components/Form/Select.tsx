import { Select as ChakraSelect, SelectProps as ChakraSelectProps, FormControl, FormLabel } from "@chakra-ui/react";
import { FieldError } from "react-hook-form";

interface SelectProps extends ChakraSelectProps {
  label?: string;
  name: string;
  error?: FieldError;
  children: any;
}

export function Select({ name, label, error, children, ...rest }: SelectProps) {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraSelect
        name={name}
        focusBorderColor="pink.500"
        _hover={{
          bgColor: "gray.900",
        }}
        size="lg"
        borderWidth={2}
        borderColor={"white"}
        {...rest}
      >
        {children}
      </ChakraSelect>
    </FormControl>
  );
}
