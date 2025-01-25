import { ComponentProps } from "react";
import {
  FormControl,
  FormControlError,
  FormControlErrorText,
  Input as GluestackInput,
  InputField,
  InputIcon,
  InputSlot,
} from "@gluestack-ui/themed";

import { Eye, EyeClosed } from "phosphor-react-native";

type Props = ComponentProps<typeof InputField> & {
  errorMessage?: string | null;
  isInvalid?: boolean;
  isVisiblePassword?: boolean;
  handleIcon?: () => void;
};

export function Input({
  errorMessage = null,
  isInvalid = false,
  isVisiblePassword = false,
  handleIcon,
  type = "text",
  ...rest
}: Props) {
  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl isInvalid={invalid} w="$full">
      <GluestackInput
        isInvalid={isInvalid}
        h={45}
        borderWidth="$0"
        borderRadius="$md"
        $focus={{
          borderWidth: 1,
          borderColor: invalid ? "$redLight" : "$gray300",
        }}
      >
        <InputField
          px="$4"
          py="$3"
          bg="$white"
          fontFamily="$body"
          placeholderTextColor="$gray400"
          secureTextEntry={type === "password" && isVisiblePassword}
          {...rest}
        />
        {type === "password" && (
          <InputSlot onPress={handleIcon} bg="$white">
            <InputIcon
              as={isVisiblePassword ? EyeClosed : Eye}
              h={20}
              w={20}
              mr="$3"
              color="$gray300"
            />
          </InputSlot>
        )}
      </GluestackInput>

      {errorMessage && (
        <FormControlError>
          <FormControlErrorText color="$redLight">
            {errorMessage}
          </FormControlErrorText>
        </FormControlError>
      )}
    </FormControl>
  );
}
