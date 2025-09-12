import { type NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, course } = body

    // Validate required fields
    if (!name || !email || !phone || !course) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, phone, and course are required" },
        { status: 400 },
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Validate course selection
    const validCourses = ["Web App Penetration Testing", "CISSP Training"]
    if (!validCourses.includes(course)) {
      return NextResponse.json({ error: "Invalid course selection" }, { status: 400 })
    }

    // Store enrollment in database
    const enrollment = await prisma.enrollment.create({
      data: {
        name,
        email,
        phone,
        course,
      },
    })

    return NextResponse.json(
      {
        success: true,
        message: "Course enrollment submitted successfully",
        id: enrollment.id,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Enrollment API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

// GET endpoint to retrieve enrollments (for admin purposes)
export async function GET() {
  try {
    const enrollments = await prisma.enrollment.findMany({
      orderBy: { createdAt: "desc" },
    })
    return NextResponse.json({
      success: true,
      enrollments,
      total: enrollments.length,
    })
  } catch (error) {
    console.error("Enrollment GET API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
