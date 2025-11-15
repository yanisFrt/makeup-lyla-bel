### PRISMA
## Créer un fichier .env et prisma/schema.prisma
npx prisma init --datasource-provider sqlite
## .env
DATABASE_URL="file:./dev.db"
## Générez le client Prisma

npx prisma generate
npx prisma migrate dev --name init

## Créez la base de données et la table
npx prisma db push

## Ouvrir Prisma Studio (Visualisation DB)
npx prisma studio

## Reset complet (efface toutes les données + recrée la DB)
npx prisma migrate reset


# MOT DE PASSE ADMIN = 12345