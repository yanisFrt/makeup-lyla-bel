
export interface Reservation {
    id: number;
    nom: string;
    phone: string;
    email?: string;
    type_service: string;
    adresse: string;
    date: string;
    hour: string;
    other_info?: string;
    status: "pending" | "accepted" | "declined";
  }
  
  /**
   * 🔹 Récupère les réservations (optionnellement filtrées par statut)
   * @param status pending | accepted | declined
   */
  export async function getReservations(status?: string): Promise<Reservation[]> {
    try {
      const url = status
        ? `/api/reservation?status=${encodeURIComponent(status)}`
        : `/api/reservation`;
  
      const res = await fetch(url, { cache: "no-store" });
      const data = await res.json();
  
      if (!res.ok) {
        throw new Error(data.error || "Erreur lors du chargement des réservations");
      }
  
      return data.reservations || [];
    } catch (err) {
      console.error("Erreur getReservations:", err);
      return [];
    }
  }
  
  /**
   * 🔹 Met à jour le statut d'une réservation
   * @param id ID de la réservation
   * @param status accepted | declined | pending
   */
  export async function updateReservationStatus(
    id: number,
    status: "accepted" | "declined" | "pending"
  ) {
    try {
      const res = await fetch("/api/reservation", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });
  
      const data = await res.json();
  
      if (!res.ok) {
        throw new Error(data.error || "Erreur lors de la mise à jour du statut");
      }
  
      return data.reservation;
    } catch (err) {
      console.error("Erreur updateReservationStatus:", err);
      throw err;
    }
  }
  