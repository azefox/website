import { type NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, inquiryType, message, company, phone } = body

    // Validate required fields
    if (!name || !email || !inquiryType || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, inquiryType, and message are required" },
        { status: 400 },
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Store contact in database
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        company,
        subject: inquiryType,
        phone,
        message,
      },
    })

    return NextResponse.json(
      {
        success: true,
        message: "Contact form submitted successfully",
        id: contact.id,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

// GET endpoint to retrieve contacts (for admin purposes)
export async function GET() {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: { createdAt: "desc" },
    })
    return NextResponse.json({
      success: true,
      contacts,
      total: contacts.length,
    })
  } catch (error) {
    console.error("Contact GET API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
