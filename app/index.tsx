import { View, ScrollView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import DashboardHeader from "@/components/DashboardHeader";
import ContactsList from "@/components/ContactsList";
import QuickActions from "@/components/QuickActions";
import BottomTabBar from "@/components/BottomTabBar";
import { colors } from "@/constants/colors";

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <ScrollView style={styles.scrollView}>
        <DashboardHeader />

        <View style={styles.content}>
          <ContactsList />
          <QuickActions />
        </View>
      </ScrollView>

      <BottomTabBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgGray,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});
