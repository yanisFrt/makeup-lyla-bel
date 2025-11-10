import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

interface ReservationBody {
  id?: number;
  nom?: string;
  phone?: string;
  email?: string;
  type_service?: string;
  adresse?: string;
  date?: string;
  hour?: string;
  other_info?: string;
}

// ================== GET ==================
export async function GET(req: Request) {
  try {
    console.log('📥 GET /api/reservation - Starting...');
    
    const reservations = await prisma.reservation.findMany({
      orderBy: {
        created_at: 'asc',
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

    return NextResponse.json(
      { error: "Erreur serveur", details: error.message }, 
      { status: 500 }
    );
  }
}

// ================== POST ==================
export async function POST(req: Request) {
  try {
    console.log('📥 POST /api/reservation - Starting...');
    
    const body: ReservationBody = await req.json();
    console.log('📦 Body received:', body);
    
    const { nom, phone, email, type_service, adresse, date, hour, other_info } = body;

    if (!nom || !phone  || !type_service || !adresse || !date || !hour) {
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
        email:email ?? "",
        type_service,
        adresse: adresse ,
        date,
        hour,
        other_info: other_info ?? "",
      },
    });

    console.log('✅ Reservation created:', reservation.id);

    return NextResponse.json(
      { message: "✅ Réservation enregistrée avec succès", reservation },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("❌ Erreur API POST /reservation:", error);

    return NextResponse.json(
      { error: "Erreur serveur", details: error.message }, 
      { status: 500 }
    );
  }
}

// ================== PATCH ==================
export async function PATCH(req: Request) {
  try {
    console.log('📥 PATCH /api/reservation - Starting...');

    const body: ReservationBody = await req.json();
    console.log('📦 Body received:', body);

    const { id, nom, phone, email, type_service, adresse, date, hour, other_info } = body;

    if (!id) {
      return NextResponse.json(
        { error: "ID de réservation manquant" },
        { status: 400 }
      );
    }

    const dataToUpdate: Partial<Omit<ReservationBody, "id">> = {};
    if (nom !== undefined) dataToUpdate.nom = nom;
    if (phone !== undefined) dataToUpdate.phone = phone;
    if (email !== undefined) dataToUpdate.email = email;
    if (type_service !== undefined) dataToUpdate.type_service = type_service;
    if (adresse !== undefined) dataToUpdate.adresse = adresse;
    if (date !== undefined) dataToUpdate.date = date;
    if (hour !== undefined) dataToUpdate.hour = hour;
    if (other_info !== undefined) dataToUpdate.other_info = other_info;

    console.log('🔄 Updating reservation with id:', id);

    const updatedReservation = await prisma.reservation.update({
      where: { id: Number(id) },
      data: dataToUpdate,
    });

    console.log('✅ Reservation updated:', updatedReservation.id);

    return NextResponse.json(
      { message: "✅ Réservation mise à jour avec succès", reservation: updatedReservation },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("❌ Erreur API PATCH /reservation:", error);

    return NextResponse.json(
      { error: "Erreur serveur", details: error.message },
      { status: 500 }
    );
  }
}
