import { View, Text, ScrollView, Pressable } from "react-native";
import { router } from "expo-router";
import { Link } from 'expo-router'

export default function Menu() {
  return (
   <View className="flex-1 bg-cream px-6 justify-center">

      {/* Title */}
      <Text className="text-4xl font-extrabold text-primary text-center tracking-widest">
        The Menu
      </Text>
            <View className="bg-white rounded-2xl shadow-lg p-6 mt-8 border border-secondary/30">
        <Text className="text-2xl font-bold text-primary mb-4">
          🤠 Truck Info
        </Text>

        <Text className="text-lg text-primary">
          Hours: Mon–Sat | 7:00 AM – 3:00 PM
        </Text>

        <Text className="text-lg text-primary mt-2">
          Location: Main Street & 5th Ave
        </Text>

        <Text className="text-lg text-primary mt-2">
          Follow us: @EspressoExpress
        </Text>
      </View>

      {/* Menu Card */}
      <View className="bg-white rounded-2xl shadow-lg p-6 mt-8 border border-secondary/30">
        <Text className="text-2xl font-bold text-primary mb-4">
          ☕ Coffee Selection
        </Text>

        <View className="space-y-3">
          <Text className="text-lg text-primary">
            Classic Brew — <Text className="font-semibold">$3.00</Text>
          </Text>

          <Text className="text-lg text-primary">
            Cappuccino — <Text className="font-semibold">$4.50</Text>
          </Text>

          <Text className="text-lg text-primary">
            Frappé — <Text className="font-semibold">$5.00</Text>
          </Text>

          <Text className="text-lg text-primary">
            Cold Brew — <Text className="font-semibold">$4.00</Text>
          </Text>
        </View>
      </View>

      <Link href="/" className="bg-accent mt-8 py-4 rounded-xl shadow-lg text-center text-white font-bold text-3xl"> Back to Home</Link>

    </View>
  );
}