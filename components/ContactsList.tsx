import { View, Text, StyleSheet } from "react-native";
import { colors } from "@/constants/colors";

interface Contact {
  name: string;
  detail: string;
  status: "new" | "pending" | "done";
}

const contacts: Contact[] = [
  { name: "Amina B.", detail: "T-shirt Premium · via Message", status: "new" },
  { name: "Youcef M.", detail: "Jean Slim · via Appel", status: "pending" },
  { name: "Sara K.", detail: "Robe d'été · via Déplacement", status: "done" },
  { name: "Mohamed R.", detail: "Veste Cuir · via Message", status: "new" },
];

const statusConfig = {
  new: { label: "Nouveau", bg: colors.badgeNewBg, text: colors.badgeNewText },
  pending: { label: "En attente", bg: colors.badgePendingBg, text: colors.badgePendingText },
  done: { label: "Conclu", bg: colors.badgeDoneBg, text: colors.badgeDoneText },
};

export default function ContactsList() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Derniers contacts</Text>
        <Text style={styles.viewAll}>Voir tout</Text>
      </View>

      {contacts.map((contact) => {
        const badge = statusConfig[contact.status];
        return (
          <View key={contact.name + contact.detail} style={styles.row}>
            <View>
              <Text style={styles.name}>{contact.name}</Text>
              <Text style={styles.detail}>{contact.detail}</Text>
            </View>
            <View style={[styles.badge, { backgroundColor: badge.bg }]}>
              <Text style={[styles.badgeText, { color: badge.text }]}>
                {badge.label}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 4,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.textDark,
  },
  viewAll: {
    fontSize: 12,
    color: colors.accent,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    backgroundColor: colors.white,
  },
  name: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.textDark,
  },
  detail: {
    fontSize: 11,
    color: colors.textGray,
    marginTop: 2,
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: "600",
  },
});
