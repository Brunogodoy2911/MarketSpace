import { ScrollView } from "react-native";
import { HStack, VStack } from "@gluestack-ui/themed";

import { Avatar } from "@components/Avatar";

import AvatarImg from "@assets/AvatarImg.png";

export function Home() {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1}>
        <HStack justifyContent="center">
          <Avatar source={AvatarImg} />
        </HStack>
      </VStack>
    </ScrollView>
  );
}
