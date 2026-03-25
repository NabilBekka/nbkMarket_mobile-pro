import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";
import { colors } from "@/constants/colors";

const tabs = [
  { icon: "📊", label: "Dashboard" },
  { icon: "📦", label: "Produits" },
  { icon: "＋", label: "Publier", center: true },
  { icon: "💬", label: "Messages" },
  { icon: "⚙️", label: "Réglages" },
];

export default function BottomTabBar() {
  const [active, setActive] = useState(0);

  return (
    <View style={styles.container}>
      {tabs.map((tab, i) => (
        <TouchableOpacity
          key={tab.label}
          style={styles.tab}
          onPress={() => setActive(i)}
        >
          {tab.center ? (
            <View style={styles.centerBtn}>
              <Text style={styles.centerIcon}>{tab.icon}</Text>
            </View>
          ) : (
            <Text style={styles.icon}>{tab.icon}</Text>
          )}
          <Text
            style={[
              styles.label,
              tab.center && styles.labelCenter,
              !tab.center && i === active && styles.labelActive,
            ]}
          >
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: "#eeeeee",
    paddingTop: 8,
    paddingBottom: 24,
  },
  tab: {
    alignItems: "center",
    gap: 2,
  },
  icon: {
    fontSize: 20,
  },
  label: {
    fontSize: 10,
    color: "#999999",
  },
  labelActive: {
    color: colors.accent,
    fontWeight: "600",
  },
  labelCenter: {
    color: "#999999",
    marginTop: 4,
  },
  centerBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.greenDark,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: -8,
  },
  centerIcon: {
    fontSize: 22,
    color: colors.accent,
  },
});
