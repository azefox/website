"use client"

import type React from "react"
import { createContext, useContext } from "react"
import { EnrollmentPopup } from "./enrollment-popup"
import { useEnrollment } from "@/hooks/use-enrollment"

interface EnrollmentContextType {
  openEnrollment: (course?: string) => void
  redirectToContact: () => void
}

const EnrollmentContext = createContext<EnrollmentContextType | undefined>(undefined)

export function EnrollmentProvider({ children }: { children: React.ReactNode }) {
  const { isEnrollmentOpen, selectedCourse, openEnrollment, closeEnrollment, redirectToContact } = useEnrollment()

  return (
    <EnrollmentContext.Provider value={{ openEnrollment, redirectToContact }}>
      {children}
      <EnrollmentPopup isOpen={isEnrollmentOpen} onClose={closeEnrollment} defaultCourse={selectedCourse} />
    </EnrollmentContext.Provider>
  )
}

export function useEnrollmentContext() {
  const context = useContext(EnrollmentContext)
  if (context === undefined) {
    throw new Error("useEnrollmentContext must be used within an EnrollmentProvider")
  }
  return context
}
