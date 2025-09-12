"use client"

import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"

interface PerformanceImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  placeholder?: "blur" | "empty"
  blurDataURL?: string
}

export function PerformanceImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  placeholder = "empty",
  blurDataURL,
}: PerformanceImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0.7 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        className="transition-all duration-300"
        onLoad={() => setIsLoaded(true)}
        style={{
          objectFit: "cover",
          width: "100%",
          height: "auto",
        }}
      />
      {!isLoaded && <div className="absolute inset-0 bg-muted animate-pulse" />}
    </motion.div>
  )
}
