import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "@/constants/colors";

const actions = [
  { icon: "＋", label: "Ajouter produit", primary: true },
  { icon: "📊", label: "Statistiques", primary: false },
  { icon: "✏️", label: "Ma boutique", primary: false },
  { icon: "⭐", label: "Sponsoriser", primary: false },
];

export default function QuickActions() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Actions rapides</Text>
      <View style={styles.grid}>
        {actions.map((action) => (
          <TouchableOpacity
            key={action.label}
            style={[styles.btn, action.primary ? styles.btnPrimary : styles.btnSecondary]}
          >
            <Text
              style={[styles.btnText, action.primary ? styles.btnTextPrimary : styles.btnTextSecondary]}
            >
              {action.icon} {action.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.textDark,
    marginBottom: 10,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  btn: {
    width: "48.5%",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  btnPrimary: {
    backgroundColor: colors.greenDark,
  },
  btnSecondary: {
    backgroundColor: "#E8F5E9",
  },
  btnText: {
    fontSize: 12,
    fontWeight: "600",
  },
  btnTextPrimary: {
    color: colors.accent,
  },
  btnTextSecondary: {
    color: colors.textDark,
  },
});
