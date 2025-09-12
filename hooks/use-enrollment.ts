"use client"

import { useState } from "react"

export function useEnrollment() {
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState<string>("")

  const openEnrollment = (course?: string) => {
    if (course) {
      setSelectedCourse(course)
    }
    setIsEnrollmentOpen(true)
  }

  const closeEnrollment = () => {
    setIsEnrollmentOpen(false)
    setSelectedCourse("")
  }

  const redirectToContact = () => {
    window.location.href = "/contact"
  }

  return {
    isEnrollmentOpen,
    selectedCourse,
    openEnrollment,
    closeEnrollment,
    redirectToContact,
  }
}
