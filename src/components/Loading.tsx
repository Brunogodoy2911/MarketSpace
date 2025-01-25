import { Center, Spinner } from "@gluestack-ui/themed";

export function Loading() {
  return (
    <Center flex={1} bg="$gray600">
      <Spinner size={"large"} color="$gray100" />
    </Center>
  );
}
