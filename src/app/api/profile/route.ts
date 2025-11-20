import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const profile = await prisma.userProfile.findUnique({
      where: { id: 1 },
    });

    if (!profile) {
      return NextResponse.json(
        { error: "Profil introuvable" },
        { status: 404 }
      );
    }

    return NextResponse.json({ profile });
  } catch (err: any) {
    console.error("GET PROFILE ERROR:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { phone, address, services } = body;

    // Vérifier si profil existe
    const existing = await prisma.userProfile.findUnique({
      where: { id: 1 },
    });

    if (!existing) {
      return NextResponse.json(
        { error: "Profil introuvable" },
        { status: 404 }
      );
    }

    // Mettre à jour
    const updated = await prisma.userProfile.update({
      where: { id: 1 },
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
  } catch (err: any) {
    console.error("PATCH PROFILE ERROR:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
