'use client'

import { motion } from 'framer-motion'
import CountUp from './CountUp'
import { useTranslations } from '@/hooks/useTranslations'

export default function Stats() {
  const { t } = useTranslations()
  
  const stats = [
    { number: 150, suffix: '+', label: t('home.stats.propertiesSold'), icon: '🏠' },
    { number: 35, suffix: ` ${t('home.stats.days')}`, label: t('home.stats.avgSaleTime'), icon: '⚡' },
    { number: 98, suffix: '%', label: t('home.stats.satisfiedClients'), icon: '😊' },
    { number: 5, suffix: ` ${t('home.stats.years')}`, label: t('home.stats.experience'), icon: '🏆' }
  ]

  return (
    <section style={{ 
      padding: '60px 0',
      backgroundColor: '#f8fafc',
      borderRadius: '16px',
      margin: '60px 0'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '40px' }}
      >
        <h2 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 'bold', 
          color: '#1f2937',
          marginBottom: '15px'
        }}>
          {t('home.stats.title')}
        </h2>
        <p style={{ 
          fontSize: '1.1rem', 
          color: '#6b7280',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          {t('home.stats.subtitle')}
        </p>
      </motion.div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '30px',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            style={{
              textAlign: 'center',
              padding: '30px 20px',
              backgroundColor: 'white',
              borderRadius: '16px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
              border: '1px solid #e5e7eb'
            }}
          >
            <div style={{ 
              fontSize: '2.5rem', 
              marginBottom: '10px'
            }}>
              {stat.icon}
            </div>
            <div style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              color: '#3b82f6',
              marginBottom: '8px'
            }}>
              <CountUp to={stat.number} />
              {stat.suffix}
            </div>
            <div style={{ 
              fontSize: '1rem', 
              color: '#6b7280',
              fontWeight: '500'
            }}>
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
