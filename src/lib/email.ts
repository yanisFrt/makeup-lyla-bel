import { Resend } from "resend";

// Email configuration
const EMAIL_FROM = process.env.EMAIL_FROM || "onboarding@resend.dev";
const EMAIL_FROM_NAME = process.env.EMAIL_FROM_NAME || "LYLA BEL - Makeup Artist";

// Lazy initialize Resend to avoid build-time errors
function getResendClient(): Resend {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY environment variable is not set");
  }

  return new Resend(apiKey);
}

// Types
interface ReservationEmailData {
  nom: string;
  email: string;
  phone: string;
  type_service: string;
  adresse: string;
  date: string;
  hour: string;
  other_info?: string;
}

interface StatusUpdateEmailData extends ReservationEmailData {
  status: "accepted" | "declined";
}

/**
 * Format date to French format
 */
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Generate HTML email template for reservation confirmation
 */
function generateConfirmationEmailHTML(data: ReservationEmailData): string {
  return `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Confirmation de réservation</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Arial', sans-serif; background-color: #f8f2ec;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 18px rgba(90, 1, 26, 0.1);">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #5a011a 0%, #7f012d 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #fce7b0; font-size: 32px; font-weight: bold; letter-spacing: 2px;">LYLA BEL</h1>
              <p style="margin: 8px 0 0; color: #fce7b0; font-size: 16px; opacity: 0.9;">Makeup Artist</p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <h2 style="margin: 0 0 20px; color: #5a011a; font-size: 24px; font-weight: bold;">Confirmation de votre réservation</h2>

              <p style="margin: 0 0 20px; color: #4b0030; font-size: 16px; line-height: 1.6;">
                Bonjour <strong>${data.nom}</strong>,
              </p>

              <p style="margin: 0 0 30px; color: #4b0030; font-size: 16px; line-height: 1.6;">
                Nous avons bien reçu votre demande de réservation. Nous vous remercions de votre confiance !
              </p>

              <!-- Reservation Details -->
              <div style="background-color: #f8e6d2; border-left: 4px solid #d4af37; padding: 20px; margin-bottom: 30px; border-radius: 8px;">
                <h3 style="margin: 0 0 15px; color: #5a011a; font-size: 18px; font-weight: bold;">Détails de votre réservation</h3>

                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #5a011a; font-weight: bold; width: 40%;">Service :</td>
                    <td style="padding: 8px 0; color: #4b0030;">${data.type_service}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #5a011a; font-weight: bold;">Date :</td>
                    <td style="padding: 8px 0; color: #4b0030;">${formatDate(data.date)}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #5a011a; font-weight: bold;">Heure :</td>
                    <td style="padding: 8px 0; color: #4b0030;">${data.hour}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #5a011a; font-weight: bold;">Adresse :</td>
                    <td style="padding: 8px 0; color: #4b0030;">${data.adresse}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #5a011a; font-weight: bold;">Téléphone :</td>
                    <td style="padding: 8px 0; color: #4b0030;">${data.phone}</td>
                  </tr>
                  ${data.other_info ? `
                  <tr>
                    <td style="padding: 8px 0; color: #5a011a; font-weight: bold; vertical-align: top;">Message :</td>
                    <td style="padding: 8px 0; color: #4b0030;">${data.other_info}</td>
                  </tr>
                  ` : ''}
                </table>
              </div>

              <div style="background-color: #fff7e6; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
                <p style="margin: 0; color: #7f012d; font-size: 14px; line-height: 1.6;">
                  ⏳ <strong>En attente de confirmation</strong><br>
                  Votre réservation est en cours de traitement. Nous reviendrons vers vous dans les plus brefs délais pour confirmer votre rendez-vous.
                </p>
              </div>

              <p style="margin: 0 0 10px; color: #4b0030; font-size: 16px; line-height: 1.6;">
                Si vous avez des questions, n'hésitez pas à nous contacter.
              </p>

              <p style="margin: 0; color: #4b0030; font-size: 16px; line-height: 1.6;">
                À très bientôt,<br>
                <strong style="color: #5a011a;">L'équipe LYLA BEL</strong>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8e6d2; padding: 30px; text-align: center; border-top: 2px solid #d4af37;">
              <p style="margin: 0 0 10px; color: #5a011a; font-size: 14px;">
                <strong>LYLA BEL - Makeup Artist</strong>
              </p>
              <p style="margin: 0 0 15px; color: #4b0030; font-size: 12px;">
                Sublimer votre beauté avec élégance et professionnalisme
              </p>
              <p style="margin: 0; color: #7f012d; font-size: 12px;">
                Cet email a été envoyé automatiquement, merci de ne pas y répondre.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

/**
 * Generate HTML email template for status update
 */
function generateStatusUpdateEmailHTML(data: StatusUpdateEmailData): string {
  const isAccepted = data.status === "accepted";

  return `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${isAccepted ? 'Réservation confirmée' : 'Réservation annulée'}</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Arial', sans-serif; background-color: #f8f2ec;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 18px rgba(90, 1, 26, 0.1);">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #5a011a 0%, #7f012d 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #fce7b0; font-size: 32px; font-weight: bold; letter-spacing: 2px;">LYLA BEL</h1>
              <p style="margin: 8px 0 0; color: #fce7b0; font-size: 16px; opacity: 0.9;">Makeup Artist</p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <div style="text-align: center; margin-bottom: 30px;">
                <div style="display: inline-block; width: 80px; height: 80px; background-color: ${isAccepted ? '#4CAF50' : '#f44336'}; border-radius: 50%; line-height: 80px; font-size: 40px; color: white;">
                  ${isAccepted ? '✓' : '✕'}
                </div>
              </div>

              <h2 style="margin: 0 0 20px; color: #5a011a; font-size: 24px; font-weight: bold; text-align: center;">
                ${isAccepted ? 'Votre réservation est confirmée !' : 'Votre réservation a été annulée'}
              </h2>

              <p style="margin: 0 0 20px; color: #4b0030; font-size: 16px; line-height: 1.6;">
                Bonjour <strong>${data.nom}</strong>,
              </p>

              <p style="margin: 0 0 30px; color: #4b0030; font-size: 16px; line-height: 1.6;">
                ${isAccepted
                  ? "Nous sommes ravis de vous confirmer votre rendez-vous. Nous avons hâte de vous rencontrer !"
                  : "Nous sommes désolés de vous informer que votre réservation ne peut pas être confirmée pour le moment. N'hésitez pas à nous contacter pour trouver une autre date."
                }
              </p>

              <!-- Reservation Details -->
              <div style="background-color: #f8e6d2; border-left: 4px solid ${isAccepted ? '#4CAF50' : '#f44336'}; padding: 20px; margin-bottom: 30px; border-radius: 8px;">
                <h3 style="margin: 0 0 15px; color: #5a011a; font-size: 18px; font-weight: bold;">Détails de votre réservation</h3>

                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #5a011a; font-weight: bold; width: 40%;">Service :</td>
                    <td style="padding: 8px 0; color: #4b0030;">${data.type_service}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #5a011a; font-weight: bold;">Date :</td>
                    <td style="padding: 8px 0; color: #4b0030;">${formatDate(data.date)}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #5a011a; font-weight: bold;">Heure :</td>
                    <td style="padding: 8px 0; color: #4b0030;">${data.hour}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #5a011a; font-weight: bold;">Adresse :</td>
                    <td style="padding: 8px 0; color: #4b0030;">${data.adresse}</td>
                  </tr>
                </table>
              </div>

              ${isAccepted ? `
              <div style="background-color: #e8f5e9; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
                <p style="margin: 0; color: #2e7d32; font-size: 14px; line-height: 1.6;">
                  💡 <strong>Quelques rappels :</strong><br>
                  • Merci d'arriver 5 minutes avant l'heure prévue<br>
                  • En cas d'empêchement, prévenez-nous au moins 24h à l'avance<br>
                  • N'oubliez pas d'apporter vos photos d'inspiration si vous en avez
                </p>
              </div>
              ` : ''}

              <p style="margin: 0; color: #4b0030; font-size: 16px; line-height: 1.6;">
                ${isAccepted ? "À très bientôt," : "Cordialement,"}<br>
                <strong style="color: #5a011a;">L'équipe LYLA BEL</strong>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8e6d2; padding: 30px; text-align: center; border-top: 2px solid #d4af37;">
              <p style="margin: 0 0 10px; color: #5a011a; font-size: 14px;">
                <strong>LYLA BEL - Makeup Artist</strong>
              </p>
              <p style="margin: 0 0 15px; color: #4b0030; font-size: 12px;">
                Sublimer votre beauté avec élégance et professionnalisme
              </p>
              <p style="margin: 0; color: #7f012d; font-size: 12px;">
                Cet email a été envoyé automatiquement, merci de ne pas y répondre.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

/**
 * Send confirmation email when a new reservation is created
 */
export async function sendReservationConfirmationEmail(
  data: ReservationEmailData
): Promise<{ success: boolean; error?: string }> {
  try {
    if (!data.email) {
      return { success: false, error: "Email address is required" };
    }

    // Check if API key is available
    if (!process.env.RESEND_API_KEY) {
      console.warn("⚠️ RESEND_API_KEY not configured - email will not be sent");
      return { success: false, error: "RESEND_API_KEY not configured" };
    }

    const resend = getResendClient();

    const { data: emailData, error } = await resend.emails.send({
      from: `${EMAIL_FROM_NAME} <${EMAIL_FROM}>`,
      to: [data.email],
      subject: "Confirmation de votre réservation - LYLA BEL",
      html: generateConfirmationEmailHTML(data),
    });

    if (error) {
      console.error("❌ Error sending confirmation email:", error);
      return { success: false, error: error.message };
    }

    console.log("✅ Confirmation email sent successfully:", emailData?.id);
    return { success: true };
  } catch (error) {
    console.error("❌ Exception sending confirmation email:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

/**
 * Send status update email when reservation status changes
 */
export async function sendStatusUpdateEmail(
  data: StatusUpdateEmailData
): Promise<{ success: boolean; error?: string }> {
  try {
    if (!data.email) {
      return { success: false, error: "Email address is required" };
    }

    // Check if API key is available
    if (!process.env.RESEND_API_KEY) {
      console.warn("⚠️ RESEND_API_KEY not configured - email will not be sent");
      return { success: false, error: "RESEND_API_KEY not configured" };
    }

    const resend = getResendClient();

    const isAccepted = data.status === "accepted";
    const subject = isAccepted
      ? "✅ Votre réservation est confirmée - LYLA BEL"
      : "❌ Information concernant votre réservation - LYLA BEL";

    const { data: emailData, error } = await resend.emails.send({
      from: `${EMAIL_FROM_NAME} <${EMAIL_FROM}>`,
      to: [data.email],
      subject,
      html: generateStatusUpdateEmailHTML(data),
    });

    if (error) {
      console.error("❌ Error sending status update email:", error);
      return { success: false, error: error.message };
    }

    console.log("✅ Status update email sent successfully:", emailData?.id);
    return { success: true };
  } catch (error) {
    console.error("❌ Exception sending status update email:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
