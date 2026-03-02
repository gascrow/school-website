import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const base64File = `data:${file.type};base64,${buffer.toString("base64")}`;

    const uploadResult = await cloudinary.uploader.upload(base64File, {
      folder: "sekolah-media",
    });

    // ✅ Simpan ke database SETELAH upload berhasil
    await prisma.media.create({
      data: {
        publicId: uploadResult.public_id,
        url: uploadResult.secure_url,
      },
    });

    // ✅ Return ke frontend
    return NextResponse.json({
      url: uploadResult.secure_url,
    });

  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Upload failed" },
      { status: 500 }
    );
  }
}