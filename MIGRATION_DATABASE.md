# Migration de SQLite vers PostgreSQL (Supabase)

Ce guide vous aide à migrer votre base de données SQLite locale vers PostgreSQL sur Supabase pour le déploiement en production.

## ⚠️ Pourquoi migrer ?

**SQLite ne fonctionne PAS sur Netlify** car :
- Le système de fichiers est éphémère (effacé à chaque déploiement)
- Vous perdrez TOUTES vos données à chaque build
- Les fonctions serverless sont stateless

## Étape 1 : Créer un compte Supabase

1. Allez sur https://supabase.com/
2. Cliquez sur "Start your project"
3. Connectez-vous avec GitHub
4. C'est **100% GRATUIT** (500 MB)

## Étape 2 : Créer un nouveau projet

1. Cliquez sur "New Project"
2. Remplissez les informations :
   - **Name** : `makeup-store` ou `lyla-bel`
   - **Database Password** : Créez un mot de passe fort (NOTEZ-LE !)
   - **Region** : Choisissez le plus proche (ex: Paris pour la France)
   - **Pricing Plan** : Free (gratuit)

3. Cliquez sur "Create new project"
4. Attendez 2-3 minutes que le projet soit créé

## Étape 3 : Récupérer l'URL de connexion

1. Dans votre projet Supabase, allez dans **Settings** (icône engrenage)
2. Cliquez sur **Database** dans le menu de gauche
3. Faites défiler jusqu'à **Connection string**
4. Sélectionnez **URI** (pas Pooler)
5. Copiez l'URL qui ressemble à :
   ```
   postgresql://postgres.[PROJECT_REF]:[YOUR_PASSWORD]@aws-0-eu-central-1.pooler.supabase.com:6543/postgres
   ```

6. **Remplacez `[YOUR_PASSWORD]`** par le mot de passe que vous avez créé

## Étape 4 : Mettre à jour le schéma Prisma

Modifiez `prisma/schema.prisma` :

```prisma
datasource db {
  provider = "postgresql"  // ✅ Changé de "sqlite" à "postgresql"
  url      = env("DATABASE_URL")
}
```

## Étape 5 : Configurer les variables d'environnement

### Pour le développement local (.env)

Créez un fichier `.env.local` pour la production locale :

```env
# Base de données de production (Supabase)
DATABASE_URL="postgresql://postgres.[PROJECT_REF]:[YOUR_PASSWORD]@aws-0-eu-central-1.pooler.supabase.com:6543/postgres"

# Resend
RESEND_API_KEY=re_xxxxxxxxxxxxx
EMAIL_FROM=onboarding@resend.dev
EMAIL_FROM_NAME=LYLA BEL - Makeup Artist
```

Gardez votre `.env` pour SQLite en développement :
```env
# Base de données locale (Développement uniquement)
DATABASE_URL="file:./dev.db"

# Resend
RESEND_API_KEY=re_xxxxxxxxxxxxx
EMAIL_FROM=onboarding@resend.dev
EMAIL_FROM_NAME=LYLA BEL - Makeup Artist
```

### Pour Netlify (Production)

Dans **Netlify** → **Site settings** → **Environment variables**, ajoutez :

```
DATABASE_URL=postgresql://postgres.[PROJECT_REF]:[YOUR_PASSWORD]@aws-0-eu-central-1.pooler.supabase.com:6543/postgres
RESEND_API_KEY=re_xxxxxxxxxxxxx
EMAIL_FROM=noreply@votredomaine.com
EMAIL_FROM_NAME=LYLA BEL - Makeup Artist
```

## Étape 6 : Installer les dépendances PostgreSQL

```bash
npm install pg
```

## Étape 7 : Créer les tables dans Supabase

### Option 1 : Via Prisma Migrate (Recommandé)

```bash
# Utiliser la base de données Supabase
npx prisma migrate dev --name init

# Ou si vous avez déjà des migrations
npx prisma migrate deploy
```

### Option 2 : Via l'interface Supabase

1. Allez dans **SQL Editor** dans Supabase
2. Exécutez le SQL suivant :

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create enum for reservation status
CREATE TYPE "ReservationStatus" AS ENUM ('pending', 'accepted', 'declined');

-- Create Reservation table
CREATE TABLE "Reservation" (
    "id" SERIAL PRIMARY KEY,
    "nom" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT,
    "type_service" TEXT NOT NULL,
    "adresse" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "hour" TEXT NOT NULL,
    "other_info" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_date" TIMESTAMP(3) NOT NULL,
    "status" "ReservationStatus" NOT NULL DEFAULT 'pending'
);

-- Create UserProfile table
CREATE TABLE "UserProfile" (
    "id" INTEGER PRIMARY KEY DEFAULT 1,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "address" TEXT,
    "services" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- Ensure only one UserProfile exists
CREATE UNIQUE INDEX "UserProfile_id_key" ON "UserProfile"("id");
```

## Étape 8 : Migrer les données existantes (optionnel)

Si vous avez des données importantes dans SQLite :

### Exporter de SQLite

```bash
# Installer sqlite3
npm install -g sqlite3

# Exporter les données
sqlite3 prisma/dev.db .dump > data.sql
```

### Adapter et importer dans PostgreSQL

Le SQL de SQLite doit être adapté pour PostgreSQL. Contactez-moi si vous avez besoin d'aide.

## Étape 9 : Tester localement avec Supabase

```bash
# Utiliser le .env.local
cp .env.local .env

# Générer le client Prisma
npx prisma generate

# Vérifier la connexion
npx prisma db push

# Lancer le serveur
npm run dev
```

Testez :
1. Créer une réservation sur http://localhost:3000/contact
2. Vérifier dans Supabase → **Table Editor** → `Reservation`
3. Les données doivent apparaître !

## Étape 10 : Déployer sur Netlify

```bash
git add .
git commit -m "feat: Migration vers PostgreSQL (Supabase)"
git push
```

Netlify va redéployer automatiquement avec la nouvelle base de données.

## ✅ Vérification

Après le déploiement :

1. **Tester la création d'une réservation** sur votre site en production
2. **Vérifier dans Supabase** → Table Editor → Reservation
3. **Vérifier l'email** de confirmation
4. **Redéployer** et vérifier que les données sont toujours là

## 🎯 Avantages de Supabase

- ✅ Données persistantes (jamais perdues)
- ✅ Interface graphique pour gérer vos données
- ✅ Backups automatiques
- ✅ Scalable (peut grandir avec votre business)
- ✅ Real-time subscriptions (bonus)
- ✅ Storage pour les fichiers (images, etc.)

## 🔐 Sécurité

**IMPORTANT** :
- ❌ NE JAMAIS committer le fichier `.env` avec le vrai `DATABASE_URL`
- ✅ Toujours utiliser les variables d'environnement Netlify
- ✅ Mettre `.env.local` dans `.gitignore`

## Support

Si vous rencontrez des problèmes :
- Documentation Supabase : https://supabase.com/docs
- Documentation Prisma avec PostgreSQL : https://www.prisma.io/docs/concepts/database-connectors/postgresql
- Support Supabase : https://supabase.com/support

## Alternative : Neon (plus simple, moins de features)

Si Supabase vous semble complexe, essayez Neon :

1. https://neon.tech/
2. Sign up gratuitement
3. Create project
4. Copiez la connection string
5. Suivez les mêmes étapes à partir de l'étape 4
