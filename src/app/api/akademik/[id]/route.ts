import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const akademik = await prisma.akademik.findUnique({
      where: { id: parseInt(id) },
    });

    if (!akademik) {
      return NextResponse.json({ error: "Akademik not found" }, { status: 404 });
    }

    return NextResponse.json(akademik);
  } catch (error) {
    console.error("Error fetching akademik:", error);
    return NextResponse.json(
      { error: "Failed to fetch akademik" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const body = await request.json();
    const { title, description, category, tahunAjaran, semester, downloadUrl } = body;

    const akademik = await prisma.akademik.update({
      where: { id: parseInt(id) },
      data: {
        title,
        description,
        category,
        tahunAjaran,
        semester,
        downloadUrl,
      },
    });

    return NextResponse.json(akademik);
  } catch (error) {
    console.error("Error updating akademik:", error);
    return NextResponse.json(
      { error: "Failed to update akademik" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    await prisma.akademik.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({ message: "Akademik deleted successfully" });
  } catch (error) {
    console.error("Error deleting akademik:", error);
    return NextResponse.json(
      { error: "Failed to delete akademik" },
      { status: 500 }
    );
  }
}
