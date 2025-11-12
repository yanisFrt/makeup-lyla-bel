import { NextResponse } from "next/server";
import formidable, { File } from "formidable";
import fs from "fs";
import path from "path";
import { Readable } from "stream";

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
    const files = fs.readdirSync(uploadDir);
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
    const data = await req.arrayBuffer();
    const buffer = Buffer.from(data);

    const form = formidable({
      multiples: false,
      uploadDir,
      keepExtensions: true,
      filename: (name, ext, part, form) => {
        return `${Date.now()}-${part.originalFilename}`;
      },
    });

    // Crée un flux lisible à partir du buffer
    const mockReq: any = new Readable();
    mockReq.push(buffer);
    mockReq.push(null);
    mockReq.headers = Object.fromEntries(req.headers.entries());

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
