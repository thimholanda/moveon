import { Input as ChakraInput, InputProps as ChakraInputProps, FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction, ReactNode } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
  isTransparent?: boolean;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, error = null, isTransparent = false, ...rest }, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        type="email"
        focusBorderColor="pink.500"
        bgColor={isTransparent ? "transparent" : "gray.900"}
        borderColor={isTransparent ? "white" : "transparent"}
        borderWidth={2}
        variant="filled"
        _hover={{
          bgColor: "gray.900",
        }}
        size="lg"
        ref={ref}
        {...rest}
      />
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
