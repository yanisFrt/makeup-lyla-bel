import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    // Récupérer le premier profil (ou n'importe lequel)
    let profile = await prisma.userProfile.findFirst();

    // Si aucun profil n'existe, le créer avec des valeurs par défaut
    if (!profile) {
      console.log("Profil non trouvé, création du profil par défaut...");
      profile = await prisma.userProfile.create({
        data: {
          name: "LYLA BEL",
          email: "contact@lylabel.com",
          phone: "+33 6 12 34 56 78",
          address: "Paris, France",
          services: [
            "Maquillage Jour",
            "Maquillage Soirée",
            "Maquillage Mariée",
            "Maquillage Naturel",
            "Maquillage Shooting Photo",
            "Maquillage Événementiel",
            "Coaching Maquillage",
          ],
        },
      });
      console.log("Profil créé avec succès:", profile);
    }

    return NextResponse.json({ profile });
  } catch (err: unknown) {
    console.error("GET PROFILE ERROR:", err);
    const message = err instanceof Error ? err.message : "Une erreur est survenue";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { phone, address, services } = body;

    // Récupérer le premier profil
    const existing = await prisma.userProfile.findFirst();

    if (!existing) {
      return NextResponse.json(
        { error: "Profil introuvable" },
        { status: 404 }
      );
    }

    // Mettre à jour
    const updated = await prisma.userProfile.update({
      where: { id: existing.id },
      data: {
        phone,
        address,
        services,
      },
    });

    return NextResponse.json({
      message: "Profil mis à jour",
      profile: updated,
    });
  } catch (err: unknown) {
    console.error("PATCH PROFILE ERROR:", err);
    const message = err instanceof Error ? err.message : "Une erreur est survenue";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
