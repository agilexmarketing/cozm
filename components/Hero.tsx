'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTranslations } from '@/hooks/useTranslations'

export default function Hero() {
  const { t, tArray } = useTranslations()
  const slogans = tArray('slogans')
  const randomSlogan = slogans[Math.floor(Math.random() * slogans.length)]
  
  return (
    <section style={{ 
      textAlign: 'center', 
      padding: '80px 0 60px',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      borderRadius: '20px',
      margin: '20px 0 60px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        right: '-20%',
        width: '40%',
        height: '200%',
        background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(16, 185, 129, 0.05))',
        borderRadius: '50%',
        transform: 'rotate(15deg)'
      }} />
      
      <div style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{ marginBottom: '20px' }}
        >
          <motion.svg
            width="80" 
            height="80" 
            viewBox="0 0 24 24" 
            style={{ 
              filter: 'drop-shadow(0 8px 16px rgba(59, 130, 246, 0.2))',
              color: '#3b82f6',
              marginBottom: '20px'
            }}
            animate={{ 
              rotate: [0, 2, -2, 0],
              y: [0, -5, 0]
            }} 
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: 'easeInOut' 
            }}
          >
            <path 
              d="M3 12L12 3l9 9" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path 
              d="M5 10v10h4v-6h6v6h4V10" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ 
            fontSize: '3.5rem', 
            fontWeight: 'bold', 
            marginBottom: '20px',
            color: '#1f2937',
            lineHeight: '1.1'
          }}
        >
          {t('home.title')}
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            fontSize: '1.3rem',
            color: '#3b82f6',
            fontWeight: '600',
            marginBottom: '15px'
          }}
        >
          {randomSlogan}
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ 
            fontSize: '1.2rem', 
            color: '#6b7280', 
            marginBottom: '40px',
            maxWidth: '600px',
            margin: '0 auto 40px',
            lineHeight: '1.6'
          }}
        >
          <strong>{t('agent.name')}</strong> - {t('agent.description')}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ 
            display: 'flex', 
            gap: '20px', 
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/properties"
              style={{
                display: 'inline-block',
                padding: '15px 30px',
                backgroundColor: '#3b82f6',
                color: 'white',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.1rem',
                boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
                transition: 'all 0.2s'
              }}
            >
              {t('home.viewProperties')}
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/properties?type=SALE"
              style={{
                display: 'inline-block',
                padding: '15px 30px',
                border: '2px solid #3b82f6',
                color: '#3b82f6',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.1rem',
                backgroundColor: 'white',
                transition: 'all 0.2s'
              }}
            >
              {t('home.forSale')}
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/properties?type=RENT"
              style={{
                display: 'inline-block',
                padding: '15px 30px',
                border: '2px solid #059669',
                color: '#059669',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.1rem',
                backgroundColor: 'white',
                transition: 'all 0.2s'
              }}
            >
              {t('home.forRent')}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
