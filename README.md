# NBK Market — Application Mobile Pro

Application mobile pour les commerçants de NBK Market. Permet de gérer sa boutique, publier et modifier des produits, consulter les statistiques et répondre aux contacts clients.

## Stack technique

- React Native 0.81.5
- Expo SDK 54
- Expo Router 6
- TypeScript

## Prérequis

- Node.js (LTS)
- Expo Go installé sur ton téléphone ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent) / [iOS](https://apps.apple.com/app/expo-go/id982107779))

## Installation

```bash
npm install
```

## Lancement

```bash
npx expo start
```

Scanne le QR code avec Expo Go pour voir l'app sur ton téléphone.

## Structure

```
app/
├── _layout.tsx    # Layout racine (Stack navigator)
└── index.tsx      # Dashboard principal
src/
├── components/    # Composants réutilisables
├── hooks/         # Custom hooks
├── lib/           # Utilitaires
├── screens/       # Écrans complexes
├── services/      # Appels API
├── styles/        # Thème et constantes
└── types/         # Types TypeScript
assets/            # Images, icônes, fonts
```

## Design

- Thème : Vert militaire (`#1E2B1E`) + blanc + accent vert lime (`#8BC34A`)
- Navigation par onglets : Dashboard, Produits, Publier (+), Messages, Réglages
- Dashboard avec KPIs : vues, messages, contacts reçus, produits actifs
- Gestion des produits : ajout, modification, rupture de stock
- Contacts clients : nouveau, en attente, conclu
