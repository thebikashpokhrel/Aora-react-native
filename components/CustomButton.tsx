import { StatusBar } from "expo-status-bar";
import { TouchableOpacity, Text } from "react-native";

type CustomButtonProps = {
  title: String;
  handlePress: () => void;
  containerStyles: String;
  textStyles?: String;
  isLoading?: Boolean;
};

export default function CustomButton({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
    >
      <Text className={`text-primary text-lg ${textStyles}`}>{title}</Text>

      <StatusBar backgroundColor="#161622" style="light" />
    </TouchableOpacity>
  );
}
