"use server";

import { validateAdminCredentials, setAdminAuthCookie } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function authenticateAdmin(formData: FormData): Promise<void> {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  // Validate credentials against database
  const isValid = await validateAdminCredentials(username, password);

  if (isValid) {
    await setAdminAuthCookie();
    revalidatePath("/admin");
    redirect("/admin");
  }

  // For form validation, we'll throw an error that can be caught by the form
  throw new Error("Invalid credentials");
}
