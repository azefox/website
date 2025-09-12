"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, X } from "lucide-react"

interface EnrollmentPopupProps {
  isOpen: boolean
  onClose: () => void
  defaultCourse?: string
}

export function EnrollmentPopup({ isOpen, onClose, defaultCourse }: EnrollmentPopupProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: defaultCourse || "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/enrollment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit enrollment")
      }

      console.log("[v0] Enrollment submitted successfully:", result)
      setIsSubmitted(true)

      // Reset form after 2 seconds and close popup
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          course: defaultCourse || "",
        })
        setIsSubmitted(false)
        onClose()
      }, 2000)
    } catch (err) {
      console.error("[v0] Enrollment submission error:", err)
      setError(err instanceof Error ? err.message : "Failed to submit enrollment")
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleCourseChange = (value: string) => {
    setFormData({
      ...formData,
      course: value,
    })
  }

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md px-2 py-4 md:px-6 md:py-6">
          <div className="text-center p-4 md:p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">Enrollment Successful!</h3>
            <p className="text-muted-foreground text-sm md:text-base">
              Thank you for enrolling in {formData.course}. Our team will contact you within 24 hours with course details.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md px-2 py-4 md:px-6 md:py-6">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between text-base md:text-lg">
            Course Enrollment
          </DialogTitle>
        </DialogHeader>

        {error && (
          <div className="mb-4 p-2 md:p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-red-600 text-xs md:text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
          <div className="space-y-1 md:space-y-2">
            <Label htmlFor="name" className="text-xs md:text-sm">Full Name *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Enter your full name"
              className="text-xs md:text-sm py-2 md:py-3"
            />
          </div>

          <div className="space-y-1 md:space-y-2">
            <Label htmlFor="email" className="text-xs md:text-sm">Email Address *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Enter your email"
              className="text-xs md:text-sm py-2 md:py-3"
            />
          </div>

          <div className="space-y-1 md:space-y-2">
            <Label htmlFor="phone" className="text-xs md:text-sm">Phone Number *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              required
              placeholder="Enter your phone number"
              className="text-xs md:text-sm py-2 md:py-3"
            />
          </div>

          <div className="space-y-1 md:space-y-2">
            <Label htmlFor="course" className="text-xs md:text-sm">Course *</Label>
            <Select value={formData.course} onValueChange={handleCourseChange} required>
              <SelectTrigger className="text-xs md:text-sm py-2 md:py-3">
                <SelectValue placeholder="Select a course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Web App Penetration Testing">Web App Penetration Testing</SelectItem>
                <SelectItem value="CISSP Training">CISSP Training</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-xs md:text-base py-2 md:py-3"
            disabled={isLoading}
          >
            {isLoading ? "Enrolling..." : "Enroll Now"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
