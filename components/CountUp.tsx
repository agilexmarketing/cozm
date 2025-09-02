'use client'

import { useEffect, useRef, useState } from 'react'

export default function CountUp({ to, duration = 900 }: { to: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const startTime = useRef<number>()
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let animationFrame: number
    
    const animate = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp
      
      const progress = Math.min((timestamp - startTime.current) / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      
      setCount(Math.floor(easeOutQuart * to))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }
    
    animationFrame = requestAnimationFrame(animate)
    
    return () => cancelAnimationFrame(animationFrame)
  }, [to, duration, isVisible])

  return <span ref={elementRef}>{count.toLocaleString()}</span>
}
