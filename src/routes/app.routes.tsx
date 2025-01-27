import { Platform, Pressable } from "react-native";
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import { gluestackUIConfig } from "../../config/gluestack-ui.config";

import { Home } from "@screens/Home";
import { MyAds } from "@screens/MyAds";
import { AdDetails } from "@screens/AdDetails";
import { CreateAd } from "@screens/CreateAd";
import { DetailsMyAd } from "@screens/DetailsMyAd";

import { House, Tag, SignOut } from "phosphor-react-native";

type AppRoutes = {
  home: undefined;
  adDetails: undefined;
  myAds: undefined;
  detailsMyAd: undefined;
  createAd: undefined;
  adPreview: undefined;
  logout: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  const { colors, space } = gluestackUIConfig.tokens;
  const iconSize = space[6];

  function handleLogout() {
    console.log("Deslogado com sucesso!");
  }

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.gray200,
        tabBarInactiveTintColor: colors.gray400,
        tabBarStyle: {
          backgroundColor: colors.gray700,
          borderTopWidth: 0,
          height: Platform.OS === "android" ? 72 : 96,
          paddingTop: space[5],
          paddingBottom: space[7],
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <House color={color} size={iconSize} />,
        }}
      />
      <Screen
        name="myAds"
        component={MyAds}
        options={{
          tabBarIcon: ({ color }) => <Tag color={color} size={iconSize} />,
        }}
      />
      <Screen
        name="logout"
        options={{
          tabBarIcon: ({ focused }) => (
            <Pressable onPress={handleLogout}>
              <SignOut
                color={focused ? colors.redLight : colors.redLight200}
                size={iconSize}
              />
            </Pressable>
          ),
          tabBarButton: (props) => <Pressable {...props} />,
        }}
      >
        {() => null}
      </Screen>

      <Screen
        name="adDetails"
        component={AdDetails}
        options={{
          tabBarButton: () => null,
          tabBarItemStyle: {
            display: "none",
          },
        }}
      />

      <Screen
        name="createAd"
        component={CreateAd}
        options={{
          tabBarButton: () => null,
          tabBarItemStyle: {
            display: "none",
          },
        }}
      />

      <Screen
        name="detailsMyAd"
        component={DetailsMyAd}
        options={{
          tabBarButton: () => null,
          tabBarItemStyle: {
            display: "none",
          },
        }}
      />
    </Navigator>
  );
}
