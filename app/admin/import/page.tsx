'use client'

import { useState } from 'react'

export default function AdminImportPage() {
  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState('')
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] ?? null
    setFile(selectedFile)
    setResult(null)
    setError('')
  }
  
  const handleUpload = async () => {
    if (!file) return
    
    setIsUploading(true)
    setError('')
    
    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('upsert', 'true')
      
      const response = await fetch('/api/properties/bulk-import', {
        method: 'POST',
        body: formData,
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || 'Upload failed')
      }
      
      setResult(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setIsUploading(false)
    }
  }
  
  return (
    <div>
      <h1 style={{ 
        fontSize: '2rem', 
        fontWeight: 'bold', 
        marginBottom: '30px',
        color: '#1f2937'
      }}>
        Bulk Import Properties
      </h1>
      
      <div style={{ 
        maxWidth: '600px',
        backgroundColor: 'white',
        border: '1px solid #e5e7eb',
        borderRadius: '12px',
        padding: '30px'
      }}>
        <div style={{ marginBottom: '24px' }}>
          <h2 style={{ 
            fontSize: '1.2rem', 
            fontWeight: '600', 
            marginBottom: '12px',
            color: '#1f2937'
          }}>
            Upload CSV File
          </h2>
          <p style={{ 
            color: '#6b7280', 
            marginBottom: '16px',
            lineHeight: '1.5'
          }}>
            Upload a CSV file containing property data. The system will automatically create new properties 
            or update existing ones based on the externalId field.
          </p>
          
          <input 
            type="file" 
            accept=".csv" 
            onChange={handleFileChange}
            style={{
              width: '100%',
              padding: '12px',
              border: '2px dashed #d1d5db',
              borderRadius: '8px',
              backgroundColor: '#f9fafb',
              cursor: 'pointer'
            }}
          />
        </div>
        
        {file && (
          <div style={{ 
            marginBottom: '24px',
            padding: '12px',
            backgroundColor: '#f0f9ff',
            borderRadius: '8px',
            border: '1px solid #bae6fd'
          }}>
            <div style={{ fontWeight: '600', color: '#0369a1' }}>
              Selected file: {file.name}
            </div>
            <div style={{ fontSize: '0.9rem', color: '#0284c7' }}>
              Size: {(file.size / 1024).toFixed(1)} KB
            </div>
          </div>
        )}
        
        <button 
          onClick={handleUpload} 
          disabled={!file || isUploading}
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: (!file || isUploading) ? '#9ca3af' : '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: (!file || isUploading) ? 'not-allowed' : 'pointer',
            marginBottom: '20px'
          }}
        >
          {isUploading ? 'Uploading...' : 'Upload CSV'}
        </button>
        
        {error && (
          <div style={{ 
            padding: '12px',
            backgroundColor: '#fef2f2',
            border: '1px solid #fecaca',
            borderRadius: '8px',
            color: '#dc2626',
            marginBottom: '20px'
          }}>
            <strong>Error:</strong> {error}
          </div>
        )}
        
        {result && (
          <div style={{ 
            padding: '16px',
            backgroundColor: '#f0fdf4',
            border: '1px solid #bbf7d0',
            borderRadius: '8px',
            color: '#166534'
          }}>
            <h3 style={{ 
              fontWeight: '600', 
              marginBottom: '8px'
            }}>
              Import Successful!
            </h3>
            <div>Created: {result.created} properties</div>
            <div>Updated: {result.updated} properties</div>
          </div>
        )}
      </div>
      
      <div style={{ 
        marginTop: '40px',
        maxWidth: '600px'
      }}>
        <h2 style={{ 
          fontSize: '1.2rem', 
          fontWeight: '600', 
          marginBottom: '16px',
          color: '#1f2937'
        }}>
          CSV Format Requirements
        </h2>
        
        <div style={{ 
          backgroundColor: '#f9fafb',
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          padding: '20px'
        }}>
          <h3 style={{ 
            fontWeight: '600', 
            marginBottom: '12px',
            color: '#374151'
          }}>
            Required Headers:
          </h3>
          <code style={{ 
            display: 'block',
            backgroundColor: '#1f2937',
            color: '#f9fafb',
            padding: '12px',
            borderRadius: '6px',
            fontSize: '0.85rem',
            marginBottom: '16px',
            overflowX: 'auto'
          }}>
            externalId,title,description,type,status,price,currency,city,region,address,lat,lng,bedrooms,bathrooms,areaSqm,images
          </code>
          
          <h3 style={{ 
            fontWeight: '600', 
            marginBottom: '8px',
            color: '#374151'
          }}>
            Notes:
          </h3>
          <ul style={{ 
            color: '#6b7280',
            lineHeight: '1.6',
            paddingLeft: '20px'
          }}>
            <li>type: SALE or RENT</li>
            <li>status: ACTIVE, INACTIVE, or DRAFT</li>
            <li>images: Multiple URLs separated by semicolons (;)</li>
            <li>externalId: Used for upsert operations (update if exists, create if not)</li>
            <li>All fields except title are optional</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
