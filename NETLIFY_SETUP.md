# Configuration de Netlify avec Supabase

Votre projet est maintenant prêt pour le déploiement ! Suivez ce guide étape par étape.

## ✅ Ce qui a été fait

- ✅ Migration de SQLite vers PostgreSQL (Supabase)
- ✅ Tables créées dans Supabase
- ✅ Intégration Resend pour les emails
- ✅ Build de production testé avec succès
- ✅ Responsive mobile corrigé

## 🚀 Étape 1 : Configurer les variables d'environnement dans Netlify

### A. Accéder aux paramètres

1. Connectez-vous sur https://app.netlify.com/
2. Sélectionnez votre site (ou créez-en un si ce n'est pas encore fait)
3. Allez dans **Site settings** → **Environment variables**
4. Cliquez sur **Add a variable**

### B. Ajouter les variables suivantes

Ajoutez **EXACTEMENT** ces 5 variables (copiez-collez vos vraies valeurs) :

#### 1. DATABASE_URL
```
Nom : DATABASE_URL
Valeur : postgresql://postgres.pwmheggyihvjjaajfcfk:7%21cC%23%24%26%2FAdDxgLg@aws-1-eu-west-1.pooler.supabase.com:6543/postgres?pgbouncer=true
```

**⚠️ IMPORTANT :**
- Utilisez EXACTEMENT la même URL que dans votre fichier `.env` local
- Le mot de passe doit être **URL-encodé** (avec %21, %23, etc.)
- Le port doit être **6543** (pooler connection)
- Gardez `?pgbouncer=true` à la fin

#### 2. DIRECT_URL
```
Nom : DIRECT_URL
Valeur : postgresql://postgres.pwmheggyihvjjaajfcfk:7%21cC%23%24%26%2FAdDxgLg@aws-1-eu-west-1.pooler.supabase.com:5432/postgres
```

**⚠️ IMPORTANT :**
- Port **5432** (direct connection)
- Même mot de passe encodé
- PAS de `?pgbouncer=true`

#### 3. RESEND_API_KEY
```
Nom : RESEND_API_KEY
Valeur : re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Remplacez par votre vraie clé API Resend.

#### 4. EMAIL_FROM
```
Nom : EMAIL_FROM
Valeur : onboarding@resend.dev
```

**Pour la production :** Utilisez votre domaine vérifié (ex: `noreply@votredomaine.com`)
**Pour les tests :** Gardez `onboarding@resend.dev`

#### 5. EMAIL_FROM_NAME
```
Nom : EMAIL_FROM_NAME
Valeur : LYLA BEL - Makeup Artist
```

### C. Vérifier la configuration

Dans Netlify, vous devriez voir ces 5 variables :

```
✓ DATABASE_URL
✓ DIRECT_URL
✓ RESEND_API_KEY
✓ EMAIL_FROM
✓ EMAIL_FROM_NAME
```

## 🚀 Étape 2 : Déployer sur Netlify

### Option A : Déploiement automatique (Recommandé)

Si votre site Netlify est déjà connecté à GitHub :

```bash
# Dans votre terminal
git add .
git commit -m "feat: Migration vers Supabase + Resend emails"
git push origin main
```

Netlify détectera automatiquement le push et lancera le déploiement.

### Option B : Déploiement manuel

Si vous n'avez pas encore connecté GitHub :

1. Allez dans **Deploys** sur Netlify
2. Cliquez sur **Trigger deploy** → **Deploy site**

## 🧪 Étape 3 : Tester votre site en production

Après le déploiement (environ 2-3 minutes) :

### A. Tester le site

1. Cliquez sur le lien de votre site (ex: `https://votre-site.netlify.app`)
2. Naviguez vers la page de contact
3. Vérifiez que le design est correct sur mobile et desktop

### B. Tester une réservation

1. Remplissez le formulaire de contact avec votre email
2. Soumettez la réservation
3. Vérifiez que vous recevez l'email de confirmation
4. Allez dans Supabase → Table Editor → Reservation
5. Vérifiez que la réservation est bien enregistrée

### C. Tester l'admin (optionnel)

1. Allez sur `https://votre-site.netlify.app/admin/login`
2. Connectez-vous avec vos identifiants
3. Vérifiez que vous pouvez voir les réservations
4. Acceptez ou refusez une réservation
5. Vérifiez que l'email de confirmation est envoyé

## 🔍 Dépannage

### Erreur : "Module not found: @prisma/client"

**Solution :**
- Vérifiez que le script `postinstall` est dans `package.json`
- Redéployez le site

### Erreur : "Database connection failed"

**Solutions :**
1. Vérifiez que `DATABASE_URL` et `DIRECT_URL` sont bien configurés dans Netlify
2. Vérifiez que le mot de passe est **URL-encodé** (%, !, etc.)
3. Vérifiez que les ports sont corrects (6543 et 5432)
4. Testez la connexion dans Supabase → SQL Editor :
   ```sql
   SELECT NOW();
   ```

### Erreur : "Email not sent"

**Solutions :**
1. Vérifiez `RESEND_API_KEY` dans Netlify
2. Vérifiez votre quota Resend (3000/mois gratuit)
3. Vérifiez les logs Netlify Functions

### Le site est lent

**Cause :** Connexion pooling
**Solution :** Vous utilisez déjà le pooling (`?pgbouncer=true`). C'est normal pour un plan gratuit.

## 📊 Vérifier les logs de déploiement

Si le build échoue :

1. Allez dans **Deploys** sur Netlify
2. Cliquez sur le dernier déploiement
3. Consultez les **Deploy logs**
4. Cherchez les erreurs en rouge

Les erreurs courantes :
- `Missing environment variable` → Configurez les variables
- `Prisma error` → Vérifiez DATABASE_URL
- `Build failed` → Vérifiez les logs pour plus de détails

## ✅ Checklist finale

Avant de dire que tout fonctionne, vérifiez :

- [ ] Le site charge sur https://votre-site.netlify.app
- [ ] Le design est correct sur mobile
- [ ] Le design est correct sur desktop
- [ ] Une réservation de test fonctionne
- [ ] L'email de confirmation est reçu
- [ ] La réservation apparaît dans Supabase
- [ ] L'admin peut voir les réservations
- [ ] L'admin peut accepter/refuser
- [ ] L'email d'acceptation/refus fonctionne

## 🎯 Prochaines étapes (optionnel)

### 1. Domaine personnalisé

Dans Netlify → **Domain settings** :
- Ajoutez votre domaine (ex: `www.lylabel.com`)
- Configurez les DNS selon les instructions
- Activez HTTPS automatiquement

### 2. Vérifier votre domaine dans Resend

Pour utiliser `noreply@votredomaine.com` :
1. Allez sur https://resend.com/domains
2. Ajoutez votre domaine
3. Configurez les enregistrements DNS (SPF, DKIM, DMARC)
4. Mettez à jour `EMAIL_FROM` dans Netlify

### 3. Monitoring

- **Netlify Analytics** : Suivez le trafic
- **Supabase Dashboard** : Surveillez l'utilisation de la base de données
- **Resend Dashboard** : Vérifiez les emails envoyés

## 🆘 Support

Si vous rencontrez des problèmes :

1. **Vérifiez les logs** :
   - Netlify : Deploys → Deploy log
   - Supabase : Logs
   - Resend : Logs

2. **Consultez la documentation** :
   - Netlify : https://docs.netlify.com/
   - Supabase : https://supabase.com/docs
   - Resend : https://resend.com/docs

3. **Fichiers de référence dans le projet** :
   - `DEPLOYMENT.md` - Guide général de déploiement
   - `EMAIL_SETUP.md` - Configuration des emails
   - `MIGRATION_DATABASE.md` - Guide de migration Supabase

## 🎉 Félicitations !

Votre site LYLA BEL est maintenant en production avec :
- ✅ Base de données persistante (Supabase)
- ✅ Emails automatiques (Resend)
- ✅ Design responsive
- ✅ Prêt pour les vraies réservations !

Bon lancement ! 🚀
