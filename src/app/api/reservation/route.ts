import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    console.log('📥 GET /api/reservation - Starting...');
    
    const reservations = await prisma.reservation.findMany({
      orderBy: {
        created_at: 'desc',
      },
    });

    console.log('✅ Reservations fetched:', reservations.length);

    return NextResponse.json(
      { 
        message: "✅ Réservations récupérées avec succès", 
        reservations,
        count: reservations.length 
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("❌ Erreur API GET /reservation:", error);
    console.error("Error code:", error.code);
    console.error("Error message:", error.message);
    
    return NextResponse.json(
      { error: "Erreur serveur", details: error.message }, 
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    console.log('📥 POST /api/reservation - Starting...');
    
    const body = await req.json();
    console.log('📦 Body received:', body);
    
    const { nom, phone, email, type_service, adresse, date, hour } = body;

    if (!nom || !phone || !email || !type_service || !date || !hour) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants" },
        { status: 400 }
      );
    }

    console.log('🔄 Creating reservation...');
    
    const reservation = await prisma.reservation.create({
      data: {
        nom,
        phone,
        email,
        type_service,
        adresse: adresse ?? null,
        date,
        hour,
      },
    });

    console.log('✅ Reservation created:', reservation.id);

    return NextResponse.json(
      { message: "✅ Réservation enregistrée avec succès", reservation },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("❌ Erreur API POST /reservation:", error);
    console.error("Error code:", error.code);
    console.error("Error message:", error.message);
    
    return NextResponse.json(
      { error: "Erreur serveur", details: error.message }, 
      { status: 500 }
    );
  }
}