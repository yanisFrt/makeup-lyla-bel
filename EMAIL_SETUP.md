# Configuration de l'envoi d'emails avec Resend

Ce guide vous explique comment configurer l'envoi d'emails de confirmation de réservation.

## Fonctionnalités

Le système envoie automatiquement des emails dans les cas suivants :

1. **Confirmation de réservation** : Envoyé au client immédiatement après sa demande
2. **Acceptation de réservation** : Envoyé quand l'admin accepte la réservation
3. **Refus de réservation** : Envoyé quand l'admin refuse la réservation

## Configuration

### 1. Créer un compte Resend

1. Allez sur https://resend.com/
2. Créez un compte gratuit (3000 emails/mois inclus)
3. Vérifiez votre email

### 2. Obtenir votre clé API

1. Connectez-vous à Resend
2. Allez dans **API Keys** : https://resend.com/api-keys
3. Cliquez sur **Create API Key**
4. Donnez un nom (ex: "LYLA BEL Production")
5. Sélectionnez **Full Access**
6. Copiez la clé (commence par `re_`)

### 3. Configurer les variables d'environnement

#### En local (.env)

Créez ou modifiez le fichier `.env` à la racine du projet :

```env
DATABASE_URL="file:./dev.db"

# Resend Configuration
RESEND_API_KEY=re_votre_clé_api_ici
EMAIL_FROM=onboarding@resend.dev
EMAIL_FROM_NAME=LYLA BEL - Makeup Artist
```

**Note :** Pour le développement local, utilisez `onboarding@resend.dev` comme adresse d'envoi.

#### En production (Netlify)

Allez dans **Site settings** → **Environment variables** et ajoutez :

```
RESEND_API_KEY=re_votre_clé_api_ici
EMAIL_FROM=noreply@votredomaine.com
EMAIL_FROM_NAME=LYLA BEL - Makeup Artist
```

### 4. Vérifier votre domaine (optionnel mais recommandé)

Pour utiliser votre propre domaine d'envoi (ex: `noreply@votredomaine.com`) :

1. Allez dans **Domains** sur Resend
2. Cliquez sur **Add Domain**
3. Entrez votre domaine (ex: `votredomaine.com`)
4. Ajoutez les enregistrements DNS fournis par Resend
5. Attendez la vérification (quelques minutes à quelques heures)

**Domaines vérifiés recommandés :**
- `noreply@votredomaine.com` - Pour les emails automatiques
- `contact@votredomaine.com` - Pour les réponses

### 5. Tester l'envoi

#### Test en développement local

1. Démarrez le serveur de développement :
```bash
npm run dev
```

2. Remplissez le formulaire de contact sur http://localhost:3000/contact

3. Vérifiez les logs dans la console pour voir si l'email a été envoyé

4. Vérifiez votre boîte de réception

#### Test en production

1. Déployez sur Netlify
2. Configurez les variables d'environnement
3. Faites une réservation de test
4. Vérifiez l'email reçu

## Templates d'emails

Le système utilise 2 templates d'emails professionnels :

### 1. Email de confirmation (après création)

- **Objet** : "Confirmation de votre réservation - LYLA BEL"
- **Contenu** :
  - Message de bienvenue
  - Récapitulatif de la réservation
  - Statut : En attente de confirmation
  - Coordonnées de contact

### 2. Email de mise à jour de statut

#### Si accepté :
- **Objet** : "✅ Votre réservation est confirmée - LYLA BEL"
- **Contenu** :
  - Confirmation du rendez-vous
  - Détails de la réservation
  - Rappels et conseils
  - Coordonnées

#### Si refusé :
- **Objet** : "❌ Information concernant votre réservation - LYLA BEL"
- **Contenu** :
  - Message d'excuse
  - Détails de la réservation annulée
  - Invitation à recontacter pour une autre date

## Personnalisation des templates

Les templates se trouvent dans `src/lib/email.ts`. Vous pouvez les personnaliser en modifiant :

- Les couleurs (actuellement : #5a011a, #d4af37, #f8e6d2)
- Le contenu des messages
- La mise en page HTML
- Les logos et images (ajoutez-les dans `/public`)

## Limites et tarification

### Plan gratuit Resend
- 3000 emails/mois
- 100 emails/jour
- Parfait pour débuter

### Plans payants
Si vous dépassez 3000 emails/mois :
- **Pro** : 20$/mois - 50 000 emails
- **Scale** : Tarification sur mesure

## Dépannage

### L'email n'est pas envoyé

1. Vérifiez que `RESEND_API_KEY` est bien configurée
2. Vérifiez les logs de la console (recherchez les messages avec 📧)
3. Vérifiez que l'email du client est valide
4. Vérifiez votre quota Resend

### L'email arrive en spam

1. Vérifiez votre domaine dans Resend
2. Ajoutez les enregistrements SPF, DKIM, DMARC
3. Utilisez un domaine vérifié (pas `onboarding@resend.dev`)

### Erreur "API key invalid"

1. Vérifiez que la clé commence par `re_`
2. Vérifiez qu'elle est bien copiée sans espaces
3. Regénérez une nouvelle clé si nécessaire

## Logs et monitoring

Les logs d'envoi sont visibles dans :

1. **Console du serveur** : Messages avec 📧, ✅, ⚠️
2. **Resend Dashboard** : https://resend.com/emails
3. **Netlify Functions Logs** : Pour la production

## Support

- Documentation Resend : https://resend.com/docs
- Support Resend : https://resend.com/support
- API Reference : https://resend.com/docs/api-reference
