'use client'

import Link from 'next/link'
import { Property, Image } from '@prisma/client'
import { motion } from 'framer-motion'
import { useTranslations } from '@/hooks/useTranslations'

type PropertyWithImages = Property & { images: Image[] }

export default function PropertyCard({ property }: { property: PropertyWithImages }) {
  const { t } = useTranslations()
  const mainImage = property.images[0]?.url
  
  return (
    <motion.div
      whileHover={{ 
        y: -4, 
        scale: 1.02,
        boxShadow: '0 8px 25px rgba(0,0,0,0.12)'
      }}
      transition={{ 
        type: 'spring', 
        stiffness: 300, 
        damping: 20 
      }}
      style={{
        borderRadius: '12px',
        overflow: 'hidden',
        backgroundColor: 'white',
        border: '1px solid #e5e7eb'
      }}
    >
      <Link 
        href={`/properties/${property.slug}`}
        style={{ 
          display: 'block',
          textDecoration: 'none',
          color: 'inherit'
        }}
      >
        {mainImage && (
          <motion.img 
            src={mainImage} 
            alt={property.title}
            className="skeleton"
            style={{ 
              width: '100%', 
              height: 200, 
              objectFit: 'cover'
            }}
            initial={{ scale: 1.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        )}
        
        <div style={{ padding: '16px' }}>
          <motion.h3 
            style={{ 
              margin: '0 0 8px 0', 
              fontSize: '1.2rem',
              fontWeight: '600',
              color: '#1f2937',
              lineHeight: '1.3'
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {property.title}
          </motion.h3>
          
          <div style={{ 
            color: '#6b7280', 
            fontSize: '0.9rem',
            marginBottom: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            📍 {property.city}{property.region ? `, ${property.region}` : ''}
          </div>
          
          <div style={{ 
            fontWeight: '700',
            fontSize: '1.3rem',
            color: '#059669',
            marginBottom: '12px'
          }}>
            {property.price ? `${property.price.toLocaleString()} ${property.currency}` : t('properties.priceOnRequest')}
          </div>
          
          {(property.bedrooms || property.bathrooms || property.areaSqm) && (
            <div style={{ 
              fontSize: '0.85rem', 
              color: '#6b7280',
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap'
            }}>
              {property.bedrooms && (
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  🛏️ {property.bedrooms} {property.bedrooms === 1 ? t('properties.dormitory') : t('properties.dormitories')}
                </span>
              )}
              {property.bathrooms && (
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  🚿 {property.bathrooms} {t('properties.baths')}
                </span>
              )}
              {property.areaSqm && (
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  📐 {property.areaSqm} m²
                </span>
              )}
            </div>
          )}
          
          <div style={{
            marginTop: '12px',
            padding: '6px 12px',
            backgroundColor: property.type === 'SALE' ? '#dbeafe' : '#d1fae5',
            color: property.type === 'SALE' ? '#1d4ed8' : '#065f46',
            borderRadius: '20px',
            fontSize: '0.8rem',
            fontWeight: '600',
            display: 'inline-block'
          }}>
            {property.type === 'SALE' ? t('filters.sale') : t('filters.rent')}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
