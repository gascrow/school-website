import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import cloudinary from "@/lib/cloudinary";

const prisma = new PrismaClient();

// Replace your DELETE function with this version

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json({ error: "No ID provided" }, { status: 400 });
    }

    const media = await prisma.media.findUnique({
      where: { id },
    });

    if (!media) {
      return NextResponse.json({ error: "Media not found" }, { status: 404 });
    }

    await cloudinary.uploader.destroy(media.publicId);

    await prisma.media.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Deleted successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}