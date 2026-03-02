import { cookies } from "next/headers";
import * as bcrypt from "bcrypt";
import { prisma } from "./prisma";

export const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "admin123"
};

export async function isAdminAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get("admin_auth");
  
  if (!authCookie) {
    return false;
  }
  
  return authCookie.value === "authenticated";
}

export async function setAdminAuthCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set("admin_auth", "authenticated", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/admin",
    maxAge: 60 * 60 * 24 * 7, // 1 week
  });
}

export async function clearAdminAuthCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set("admin_auth", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/admin",
    maxAge: 0,
  });
}

// New functions for database-based authentication
export async function validateAdminCredentials(username: string, password: string): Promise<boolean> {
  try {
    const admin = await prisma.admin.findUnique({
      where: { username }
    });

    if (!admin) {
      return false;
    }

    return await bcrypt.compare(password, admin.password);
  } catch (error) {
    console.error("Error validating admin credentials:", error);
    return false;
  }
}

export async function createAdminUser(username: string, password: string): Promise<void> {
  const hashedPassword = await bcrypt.hash(password, 10);
  
  try {
    await prisma.admin.create({
      data: {
        username,
        password: hashedPassword
      }
    });
  } catch (error) {
    console.error("Error creating admin user:", error);
    throw new Error("Failed to create admin user");
  }
}

export async function getAdminUser(username: string) {
  try {
    return await prisma.admin.findUnique({
      where: { username }
    });
  } catch (error) {
    console.error("Error getting admin user:", error);
    return null;
  }
}
