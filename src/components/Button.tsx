import { ComponentProps } from "react";
import {
  ButtonSpinner,
  ButtonText,
  Button as GluestackButton,
} from "@gluestack-ui/themed";

type Props = ComponentProps<typeof GluestackButton> & {
  title: string;
  isLoading?: boolean;
};

export function Button({ title, isLoading = false, ...rest }: Props) {
  return (
    <GluestackButton
      w="$full"
      h={48}
      disabled={isLoading}
      opacity={isLoading ? 0.5 : 1}
      {...rest}
    >
      {isLoading ? (
        <ButtonSpinner />
      ) : (
        <ButtonText fontFamily="$heading" fontSize="$sm">
          {title}
        </ButtonText>
      )}
    </GluestackButton>
  );
}
