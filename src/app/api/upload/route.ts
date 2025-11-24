import { NextResponse } from "next/server";
import formidable, { File } from "formidable";
import fs from "fs";
import path from "path";
import { Readable } from "stream";

//  Désactive le bodyParser de Next.js car formidable gère le parsing des fichiers
export const config = {
  api: { bodyParser: false },
};

// Dossier d'upload
const uploadDir = path.join(process.cwd(), "public/uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}
export async function GET() {
  try {
    // Lire tous les fichiers dans le dossier d’upload
    const files = fs.readdirSync(uploadDir);
    // créer des URLs accessibles côté client
    const urls = files.map((file) => `/uploads/${file}`);
    return NextResponse.json(urls);
  } catch (error) {
    console.error("Erreur lecture des fichiers :", error);
    return NextResponse.json(
      { error: "Impossible de récupérer les images" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {

    //Récupérer le body brut sous forme de ArrayBuffer
    const data = await req.arrayBuffer();
    const buffer = Buffer.from(data);
  // Configuration de formidable
    const form = formidable({
      multiples: false,//  pas de multiples fichiers
      uploadDir,
      keepExtensions: true, // conserver l'extension du fichier
      filename: (name, ext, part, form) => {
        //  Renommer le fichier pour éviter les collisions
        return `${Date.now()}-${part.originalFilename}`;
      },
    });

//On crée un flux lisible à partir du buffer pour que formidable puisse le parser  

  const mockReq: any = new Readable();
    mockReq.push(buffer); // ajouter les données
    mockReq.push(null); // signaler la fin du flux
    mockReq.headers = Object.fromEntries(req.headers.entries());


        //  On parse le flux comme un formulaire
    const { files } = await new Promise<{ fields: any; files: any }>(
      (resolve, reject) => {
        form.parse(mockReq, (err, fields, files) => {
          if (err) reject(err);
          else resolve({ fields, files });
        });
      }
    );

    const uploadedFile = Array.isArray(files.file)
      ? files.file[0]
      : files.file;

    if (!uploadedFile || !uploadedFile.filepath) {
      console.error("Fichier non trouvé :", uploadedFile);
      return NextResponse.json(
        { error: "Fichier manquant ou invalide" },
        { status: 400 }
      );
    }
    // Récupérer le nom du fichier et créer l’URL accessible côté client
    const fileName = path.basename(uploadedFile.filepath);
    const fileUrl = `/uploads/${fileName}`;

    return NextResponse.json({
      message: "Image uploadée avec succès ✅",
      url: fileUrl,
    });
  } catch (err) {
    console.error("Erreur upload:", err);
    return NextResponse.json(
      { error: "Erreur lors de l’upload" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const fileName = searchParams.get("file");

    if (!fileName) {
      return NextResponse.json(
        { error: "Paramètre 'file' manquant" },
        { status: 400 }
      );
    }

    const filePath = path.join(uploadDir, fileName);

    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: "Fichier introuvable" },
        { status: 404 }
      );
    }

    fs.unlinkSync(filePath);

    return NextResponse.json({
      message: `Fichier '${fileName}' supprimé avec succès`,
    });
  } catch (err) {
    console.error("Erreur DELETE:", err);
    return NextResponse.json(
      { error: "Erreur lors de la suppression" },
      { status: 500 }
    );
  }
}
