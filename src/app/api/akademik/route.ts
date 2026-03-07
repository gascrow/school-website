import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");

    const akademiks = await prisma.akademik.findMany({
      where: category ? { category } : undefined,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(akademiks);
  } catch (error) {
    console.error("Error fetching akademik:", error);
    return NextResponse.json(
      { error: "Failed to fetch akademik" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, description, category, tahunAjaran, semester, downloadUrl } = body;

    if (!title || !category || !tahunAjaran || !downloadUrl) {
      return NextResponse.json(
        { error: "Title, category, tahun ajaran, and download URL are required" },
        { status: 400 }
      );
    }

    const akademik = await prisma.akademik.create({
      data: {
        title,
        description,
        category,
        tahunAjaran,
        semester,
        downloadUrl,
      },
    });

    return NextResponse.json(akademik, { status: 201 });
  } catch (error) {
    console.error("Error creating akademik:", error);
    return NextResponse.json(
      { error: "Failed to create akademik" },
      { status: 500 }
    );
  }
}
