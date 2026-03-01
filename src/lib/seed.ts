import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  // Hapus data lama (opsional)
  await prisma.user.deleteMany();

  // Buat akun admin default
  const adminData = {
    username: "admin",
    email: "admin@mail.com",
    password: await bcrypt.hash("admin123", 10), // Password: admin123
    role: "admin",
  };

  const admin = await prisma.user.create({
    data: adminData,
  });

  console.log("Admin account created successfully!");
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
