import { ComponentProps } from "react";
import {
  Avatar as GluestackAvatar,
  AvatarImage,
  AvatarBadge,
  HStack,
} from "@gluestack-ui/themed";

import { PencilSimpleLine } from "phosphor-react-native";

type AvatarImageSourceProps = Omit<ComponentProps<typeof AvatarImage>, "source">;

type AvatarProps = ComponentProps<typeof GluestackAvatar>;

type Props = AvatarProps & {
  hasBadge?: boolean;
  source: AvatarImageSourceProps;
};

export function Avatar({ hasBadge = false, source, ...rest }: Props) {
  return (
    <HStack space="md">
      <GluestackAvatar {...rest}>
        <AvatarImage source={source} alt="Imagem do Usuário" />

        {hasBadge && (
          <AvatarBadge
            h={40}
            w={40}
            bg="$blueLight"
            borderWidth={0}
            alignItems="center"
            justifyContent="center"
          >
            <PencilSimpleLine size={16} color="#EDECEE" />
          </AvatarBadge>
        )}
      </GluestackAvatar>
    </HStack>
  );
}
