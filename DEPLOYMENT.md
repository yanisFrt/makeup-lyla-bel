# Guide de déploiement sur Netlify

Ce guide vous explique comment déployer votre application Makeup Store sur Netlify.

## Prérequis

- Un compte Netlify (gratuit sur https://www.netlify.com/)
- Le code source poussé sur un dépôt Git (GitHub, GitLab, ou Bitbucket)
- Une base de données de production (PostgreSQL ou MySQL recommandé)

## Étapes de déploiement

### 1. Préparer la base de données

Votre application utilise Prisma et SQLite en développement. Pour la production, vous devez utiliser une base de données cloud :

**Options recommandées :**
- **Supabase** (PostgreSQL gratuit) : https://supabase.com/
- **PlanetScale** (MySQL gratuit) : https://planetscale.com/
- **Neon** (PostgreSQL gratuit) : https://neon.tech/
- **Railway** : https://railway.app/

### 2. Connecter votre dépôt à Netlify

1. Connectez-vous sur https://app.netlify.com/
2. Cliquez sur "Add new site" → "Import an existing project"
3. Choisissez votre fournisseur Git (GitHub, GitLab, Bitbucket)
4. Sélectionnez le dépôt `makeup-store`
5. Netlify détectera automatiquement Next.js

### 3. Configurer les variables d'environnement

Dans Netlify, allez dans **Site settings** → **Environment variables** et ajoutez :

#### Variables obligatoires :

```
DATABASE_URL=votre_url_de_base_de_données_production
```

**Exemple pour PostgreSQL :**
```
DATABASE_URL=postgresql://user:password@host:5432/database?schema=public
```

**Exemple pour MySQL :**
```
DATABASE_URL=mysql://user:password@host:3306/database
```

#### Variables pour l'envoi d'emails (Resend) :

Le site utilise Resend pour envoyer des emails de confirmation de réservation. Pour configurer :

1. Créez un compte sur https://resend.com/ (gratuit jusqu'à 3000 emails/mois)
2. Obtenez votre clé API depuis https://resend.com/api-keys
3. Ajoutez les variables suivantes :

```
RESEND_API_KEY=re_votre_clé_api_resend
EMAIL_FROM=noreply@votredomaine.com
EMAIL_FROM_NAME=LYLA BEL - Makeup Artist
```

**Note importante :** Pour utiliser votre propre domaine d'envoi, vous devez d'abord le vérifier dans Resend. En attendant, vous pouvez utiliser `onboarding@resend.dev` pour les tests.

### 4. Configurer les paramètres de build (déjà configurés)

Les paramètres suivants sont déjà configurés dans `netlify.toml` :
- **Build command:** `npm run build`
- **Publish directory:** `.next`

**Note:** Le plugin `@netlify/plugin-nextjs` n'est PAS nécessaire pour Next.js 15. Netlify détecte automatiquement Next.js et gère correctement le SSR et les API routes.

### 5. Déployer

1. Cliquez sur "Deploy site"
2. Netlify va :
   - Installer les dépendances
   - Exécuter `npm run build`
   - Déployer votre application

### 6. Migration de la base de données

Après le premier déploiement, vous devrez migrer votre base de données :

Option 1 - Via Netlify CLI :
```bash
npm install -g netlify-cli
netlify login
netlify link
netlify env:set DATABASE_URL "votre_url"
npx prisma migrate deploy
```

Option 2 - Localement :
```bash
# Créez un fichier .env.production avec DATABASE_URL
DATABASE_URL="votre_url" npx prisma migrate deploy
```

## Configuration supplémentaire

### Domaine personnalisé

1. Allez dans **Domain settings**
2. Cliquez sur "Add custom domain"
3. Suivez les instructions pour configurer votre DNS

### Variables d'environnement supplémentaires

Si vous ajoutez d'autres variables d'environnement (API keys, secrets, etc.), ajoutez-les dans :
- Le fichier `.env.example` (sans les vraies valeurs)
- Les paramètres d'environnement Netlify (avec les vraies valeurs)

## Redéploiement

Chaque push sur votre branche principale déclenchera automatiquement un nouveau déploiement.

Pour redéployer manuellement :
1. Allez dans **Deploys**
2. Cliquez sur "Trigger deploy" → "Deploy site"

## Dépannage

### Erreur "Plugin @netlify/plugin-nextjs failed"

**Solution:** Ce plugin n'est pas nécessaire pour Next.js 15. Supprimez-le :
```bash
npm uninstall @netlify/plugin-nextjs
```
Et supprimez la section `[[plugins]]` de votre `netlify.toml` si elle existe.

### Erreur de build

Vérifiez les logs de build dans l'onglet **Deploys** → Cliquez sur le déploiement → **Deploy log**

Vérifiez que :
- Le répertoire `publish` dans `netlify.toml` correspond au `distDir` dans `next.config.ts` (par défaut `.next`)
- Toutes les dépendances sont listées dans `package.json`

### Erreur de base de données

Vérifiez que :
- La variable `DATABASE_URL` est correctement configurée dans les variables d'environnement Netlify
- Votre base de données est accessible depuis l'extérieur
- Les migrations Prisma ont été exécutées (`npx prisma migrate deploy`)

### API routes ne fonctionnent pas

Netlify gère automatiquement les API routes de Next.js. Vérifiez que :
- Vos routes API sont dans le dossier `app/api/`
- Le build s'est terminé sans erreur
- Les fonctions serverless sont activées sur Netlify (activé par défaut)

## Support

- Documentation Netlify : https://docs.netlify.com/
- Documentation Next.js : https://nextjs.org/docs
- Documentation Prisma : https://www.prisma.io/docs
