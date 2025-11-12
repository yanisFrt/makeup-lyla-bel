import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { name, email, phone, address, services } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Nom et email obligatoires" }, { status: 400 });
    }

    const servicesJson = JSON.stringify(services);

    const existing = await prisma.userProfile.findUnique({ where: { id: 1 } });

    let profile;
    if (existing) {
      profile = await prisma.userProfile.update({
        where: { id: 1 },
        data: { name, email, phone, address, services: servicesJson },
      });
    } else {
      profile = await prisma.userProfile.create({
        data: { id: 1, name, email, phone, address, services: servicesJson },
      });
    }

    return NextResponse.json({ message: "Profil sauvegardé", profile }, { status: 200 });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: "Erreur serveur", details: err.message }, { status: 500 });
  }
}
