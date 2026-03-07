import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const blog = await prisma.blog.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog" },
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
    const { title, content, detail, excerpt, image, images, authorName, authorImage, authorRole, tags, archived } = body;

    const data: Record<string, any> = {};
    if (title !== undefined) data.title = title;
    if (content !== undefined) data.content = content;
    if (detail !== undefined) data.detail = detail;
    if (excerpt !== undefined) data.excerpt = excerpt;
    if (image !== undefined) data.image = image;
    if (images !== undefined) data.images = images;
    if (authorName !== undefined) data.authorName = authorName;
    if (authorImage !== undefined) data.authorImage = authorImage;
    if (authorRole !== undefined) data.authorRole = authorRole;
    if (tags !== undefined) data.tags = tags;
    if (archived !== undefined) data.archived = archived;

    const blog = await prisma.blog.update({
      where: {
        id: parseInt(id),
      },
      data,
    });

    return NextResponse.json(blog);
  } catch (error: any) {
    console.error("Error updating blog:", error?.message || error);
    return NextResponse.json(
      { error: error?.message || "Failed to update blog" },
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
    await prisma.blog.delete({
      where: {
        id: parseInt(id),
      },
    });

    return NextResponse.json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json(
      { error: "Failed to delete blog" },
      { status: 500 }
    );
  }
}
