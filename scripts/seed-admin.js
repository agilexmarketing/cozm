const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcrypt')

const prisma = new PrismaClient()

async function main() {
  const email = process.env.ADMIN_EMAIL || 'agent@example.com'
  const password = 'password' // Change this in production
  
  const hashedPassword = await bcrypt.hash(password, 10)
  
  const admin = await prisma.adminUser.upsert({
    where: { email },
    update: { passwordHash: hashedPassword },
    create: {
      email,
      passwordHash: hashedPassword,
    },
  })
  
  console.log('Admin user created/updated:', admin.email)
  console.log('Password:', password)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
