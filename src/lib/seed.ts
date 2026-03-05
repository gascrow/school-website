import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  // Buat / update akun admin default pada tabel `admins`
  const defaultUsername = "admin";
  const defaultEmail = "admin@mail.com";
  const defaultPassword = "admin123";
  const hashedPassword = await bcrypt.hash(defaultPassword, 10);

  const admin = await prisma.admin.upsert({
    where: { username: defaultUsername },
    update: {
      email: defaultEmail,
      password: hashedPassword,
    },
    create: {
      username: defaultUsername,
      email: defaultEmail,
      password: hashedPassword,
    },
  });

  console.log("Admin account upserted successfully!");
  console.log("Username:", admin.username);
  console.log("Email:", admin.email);
  console.log("Password: admin123 (default)");
}

main()
  .catch((e) => {
    console.error("Error seeding admin:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
