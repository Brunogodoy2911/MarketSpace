import { useState } from "react";
import { ScrollView } from "react-native";
import { Center, Heading, Image, Text, VStack } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

import { AuthNavigatorRoutesPros } from "@routes/auth.routes";

import Logo from "@assets/logo.png";
import userPhotoDefault from "@assets/userPhotoDefault.png";

import { Avatar } from "@components/Avatar";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignUp() {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const navigation = useNavigation<AuthNavigatorRoutesPros>();

  function handlePasswordVisibility() {
    setIsVisiblePassword(!isVisiblePassword);
  }

  function handleConfirmPasswordVisibility() {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  }

  function handleLogin() {
    navigation.navigate("signIn");
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px="$12">
        <Center mt="$16">
          <Image w={60} h={40} source={Logo} alt="Logo" mb="$3" />
          <Heading fontSize="$xl" color="$gray100" mb="$1.5">
            Boas vindas!
          </Heading>
          <Text fontSize="$sm" textAlign="center">
            Crie sua conta e use o espaço para comprar {"\n"} itens variados e
            vender seus produtos
          </Text>
        </Center>

        <Center mt="$12" gap="$4">
          <Avatar h={88} w={88} source={userPhotoDefault} hasBadge />

          <Input placeholder="Nome" autoCapitalize="words" />

          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Input placeholder="Telefone" keyboardType="phone-pad" />

          <Input
            placeholder="Senha"
            type="password"
            isVisiblePassword={isVisiblePassword}
            handleIcon={handlePasswordVisibility}
          />

          <Input
            placeholder="Confirmar senha"
            type="password"
            returnKeyType="send"
            isVisiblePassword={isConfirmPasswordVisible}
            handleIcon={handleConfirmPasswordVisibility}
            onSubmitEditing={() => {}}
          />

          <Button
            title="Criar"
            variant="dark"
            mt="$2"
            onPress={() => console.log("Button Criar clicado")}
          />
        </Center>

        <Center mt="$7" gap="$4">
          <Text fontSize="$sm">Já tem uma conta?</Text>

          <Button
            title="Ir para o login"
            variant="gray"
            onPress={handleLogin}
          />
        </Center>
      </VStack>
    </ScrollView>
  );
}
