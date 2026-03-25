import { View, Text, StyleSheet } from "react-native";
import { colors } from "@/constants/colors";

const stats = [
  { label: "Vues aujourd'hui", value: "342", change: "↑ 12%" },
  { label: "Messages", value: "18", change: "↑ 5 nouveaux" },
  { label: "Contacts reçus", value: "7", change: "Appels + messages" },
  { label: "Produits actifs", value: "48", change: "3 en rupture" },
];

export default function DashboardHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View>
          <Text style={styles.subtitle}>Bonjour Karim</Text>
          <Text style={styles.title}>Tableau de bord</Text>
        </View>
        <View style={styles.icons}>
          <View style={styles.iconCircle}>
            <Text style={{ fontSize: 16 }}>🔔</Text>
          </View>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>K</Text>
          </View>
        </View>
      </View>

      <View style={styles.statsGrid}>
        {stats.map((stat) => (
          <View key={stat.label} style={styles.statCard}>
            <Text style={styles.statLabel}>{stat.label}</Text>
            <Text style={styles.statValue}>{stat.value}</Text>
            <Text style={styles.statChange}>{stat.change}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.greenDark,
    paddingTop: 56,
    paddingHorizontal: 16,
    paddingBottom: 18,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subtitle: {
    fontSize: 12,
    color: "rgba(255,255,255,0.4)",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.white,
  },
  icons: {
    flexDirection: "row",
    gap: 8,
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "rgba(255,255,255,0.08)",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.greenLight,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.accent,
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 18,
  },
  statCard: {
    width: "48%",
    backgroundColor: "rgba(255,255,255,0.08)",
    borderRadius: 10,
    padding: 12,
  },
  statLabel: {
    fontSize: 10,
    color: "rgba(255,255,255,0.5)",
    fontWeight: "500",
  },
  statValue: {
    fontSize: 22,
    fontWeight: "800",
    color: colors.white,
    marginTop: 2,
  },
  statChange: {
    fontSize: 10,
    color: colors.accent,
    marginTop: 2,
  },
});
