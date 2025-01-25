import { useState } from "react";
import { ScrollView } from "react-native";
import { Center, Image, Text, VStack } from "@gluestack-ui/themed";

import Logo from "@assets/logo.png";
import Title from "@assets/title.png";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignIn() {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  function handlePasswordVisibility() {
    setIsVisiblePassword(!isVisiblePassword);
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1}>
        <Center mt="$27">
          <Image w={96} h={64} mb="$5" source={Logo} alt="Logo" />
          <Image width={193} h={28.5} source={Title} alt="Titulo" />
          <Text fontSize="$sm" fontFamily="$body" mt="$0.5">
            Seu espaço de compra e venda
          </Text>
        </Center>

        <Center flex={1} mx="$11.5" gap="$4">
          <Text fontSize="$sm" fontFamily="$body">
            Acesse sua conta
          </Text>
          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input
            placeholder="Senha"
            type="password"
            onSubmitEditing={() => {}}
            isVisiblePassword={isVisiblePassword}
            handleIcon={handlePasswordVisibility}
          />

          <Button
            title="Entrar"
            variant="blue"
            mt="$4"
            onPress={() => console.log("Button Entrar clicado")}
          />
        </Center>

        <Center flex={0.6} px="$11.5" bg="$gray700" mt="$3" pb="$4">
          <Text fontSize="$sm" fontFamily="$body" mt="$2">
            Ainda não tem acesso?
          </Text>
          <Button
            title="Criar uma conta"
            variant="gray"
            mt="$4"
            onPress={() => console.log("Button Criar uma conta clicado")}
          />
        </Center>
      </VStack>
    </ScrollView>
  );
}
