import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";
import { Link } from 'expo-router'

export default function Index() {
  return (
    <View className="flex-1 bg-cream px-6 justify-center">

      {/* Title */}
      <Text className="text-5xl font-extrabold text-primary text-center tracking-widest">
        The Espresso Express
      </Text>


      <Text className="text-lg text-secondary text-center mt-3 italic">
        Fuelin' the Wild West, One Cup at a Time
      </Text>
      <Link href="/menu" className="bg-accent mt-8 py-4 rounded-xl shadow-lg text-center text-white font-bold text-3xl"> Go to Menu</Link>
      <View className="mt-10 space-y-4">
        <Text className="text-2xl text-primary leading-7 text-center">
          Howdy, Part’nr 🤠 Looking for a pick-me-up?
          Need a little YEE-HAW in your day?
          Saddle up and hop on the Espresso Express.
        </Text>

        <Text className="text-2xl text-primary leading-7 text-center">
          We serve the finest brews in the West,
          offering rich cappuccinos and frosty frappes
          to a strong, no-nonsense cup of joe.
        </Text>
      </View>

    </View>
  );
}