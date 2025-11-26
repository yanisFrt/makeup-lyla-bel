import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { sendReservationConfirmationEmail, sendStatusUpdateEmail } from "@/lib/email";

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
  status?: "pending" | "accepted" | "declined";
}

// // ================== GET ==================
// export async function GET(req: Request) {
//   try {
//     console.log('📥 GET /api/reservation - Starting...');
    
//     const reservations = await prisma.reservation.findMany({
//       orderBy: {
//         created_at: 'asc',
//       },
//     });

//     console.log('✅ Reservations fetched:', reservations.length);

//     return NextResponse.json(
//       { 
//         message: "✅ Réservations récupérées avec succès", 
//         reservations,
//         count: reservations.length 
//       },
//       { status: 200 }
//     );
//   } catch (error: any) {
//     console.error("❌ Erreur API GET /reservation:", error);

//     return NextResponse.json(
//       { error: "Erreur serveur", details: error.message }, 
//       { status: 500 }
//     );
//   }
// }
// ================== GET ==================
export async function GET(req: Request) {
  try {
    console.log("📥 GET /api/reservation - Starting...");

    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status"); 

    let whereClause = {};
    if (status) {
      whereClause = { status };
      console.log(`🔍 Filtering by status: ${status}`);
    }

    const reservations = await prisma.reservation.findMany({
      where: whereClause,
      orderBy: {
        created_at: "asc",
      },
    });

    console.log("✅ Reservations fetched:", reservations.length);

    return NextResponse.json(
      {
        message: "✅ Réservations récupérées avec succès",
        reservations,
        count: reservations.length,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("❌ Erreur API GET /reservation:", error);
    const details = error instanceof Error ? error.message : "Une erreur est survenue";
    return NextResponse.json(
      { error: "Erreur serveur", details },
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

    // Send confirmation email if email is provided
    if (email) {
      console.log('📧 Sending confirmation email to:', email);
      const emailResult = await sendReservationConfirmationEmail({
        nom,
        email,
        phone,
        type_service,
        adresse,
        date,
        hour,
        other_info,
      });

      if (emailResult.success) {
        console.log('✅ Confirmation email sent successfully');
      } else {
        console.warn('⚠️ Failed to send confirmation email:', emailResult.error);
        // Don't fail the reservation if email fails
      }
    }

    return NextResponse.json(
      { message: "✅ Réservation enregistrée avec succès", reservation },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("❌ Erreur API POST /reservation:", error);
    const details = error instanceof Error ? error.message : "Une erreur est survenue";
    return NextResponse.json(
      { error: "Erreur serveur", details },
      { status: 500 }
    );
  }
}

// // ================== PATCH ==================
// export async function PATCH(req: Request) {
//   try {
//     console.log('📥 PATCH /api/reservation - Starting...');

//     const body: ReservationBody = await req.json();
//     console.log('📦 Body received:', body);

//     const { id, nom, phone, email, type_service, adresse, date, hour, other_info } = body;

//     if (!id) {
//       return NextResponse.json(
//         { error: "ID de réservation manquant" },
//         { status: 400 }
//       );
//     }

//     const dataToUpdate: Partial<Omit<ReservationBody, "id">> = {};
//     if (nom !== undefined) dataToUpdate.nom = nom;
//     if (phone !== undefined) dataToUpdate.phone = phone;
//     if (email !== undefined) dataToUpdate.email = email;
//     if (type_service !== undefined) dataToUpdate.type_service = type_service;
//     if (adresse !== undefined) dataToUpdate.adresse = adresse;
//     if (date !== undefined) dataToUpdate.date = date;
//     if (hour !== undefined) dataToUpdate.hour = hour;
//     if (other_info !== undefined) dataToUpdate.other_info = other_info;

//     console.log('🔄 Updating reservation with id:', id);

//     const updatedReservation = await prisma.reservation.update({
//       where: { id: Number(id) },
//       data: dataToUpdate,
//     });

//     console.log('✅ Reservation updated:', updatedReservation.id);

//     return NextResponse.json(
//       { message: "✅ Réservation mise à jour avec succès", reservation: updatedReservation },
//       { status: 200 }
//     );
//   } catch (error: any) {
//     console.error("❌ Erreur API PATCH /reservation:", error);

//     return NextResponse.json(
//       { error: "Erreur serveur", details: error.message },
//       { status: 500 }
//     );
//   }
// }

export async function PATCH(req: Request) {
  try {
    console.log("📥 PATCH /api/reservation - Starting...");

    const body: ReservationBody = await req.json();
    console.log("📦 Body received:", body);

    const { id, status, nom, phone, email, type_service, adresse, date, hour, other_info } = body;

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
    if (status !== undefined) dataToUpdate.status = status; 

    console.log("🔄 Updating reservation with id:", id);

    // Get the current reservation to check if status changed
    const currentReservation = await prisma.reservation.findUnique({
      where: { id: Number(id) },
    });

    if (!currentReservation) {
      return NextResponse.json(
        { error: "Réservation non trouvée" },
        { status: 404 }
      );
    }

    const updatedReservation = await prisma.reservation.update({
      where: { id: Number(id) },
      data: dataToUpdate,
    });

    console.log("✅ Reservation updated:", updatedReservation.id);

    // Send email if status changed to accepted or declined
    const statusChanged = status && status !== currentReservation.status;
    const shouldSendEmail = statusChanged && (status === "accepted" || status === "declined");

    if (shouldSendEmail && updatedReservation.email) {
      console.log(`📧 Sending ${status} email to:`, updatedReservation.email);
      const emailResult = await sendStatusUpdateEmail({
        nom: updatedReservation.nom,
        email: updatedReservation.email,
        phone: updatedReservation.phone,
        type_service: updatedReservation.type_service,
        adresse: updatedReservation.adresse,
        date: updatedReservation.date,
        hour: updatedReservation.hour,
        other_info: updatedReservation.other_info || undefined,
        status: status as "accepted" | "declined",
      });

      if (emailResult.success) {
        console.log(`✅ ${status} email sent successfully`);
      } else {
        console.warn(`⚠️ Failed to send ${status} email:`, emailResult.error);
        // Don't fail the update if email fails
      }
    }

    return NextResponse.json(
      {
        message: "✅ Réservation mise à jour avec succès",
        reservation: updatedReservation,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("❌ Erreur API PATCH /reservation:", error);
    const details = error instanceof Error ? error.message : "Une erreur est survenue";
    return NextResponse.json(
      { error: "Erreur serveur", details },
      { status: 500 }
    );
  }
}