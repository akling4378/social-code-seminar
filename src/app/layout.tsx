// src/app/layout.tsx
"use client"
import { useState } from 'react';
import './globals.css';

export default function RootLayout({ children }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const pages = [
    { slug: '/', title: 'Interactive Seminar' },
  ];

  return (
    <html lang="en">
      <body>
        <nav style={{ 
          backgroundColor: '#2d3748', 
          color: 'white', 
          padding: '1rem 2rem',
          position: 'relative',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <button 
            onClick={() => setShowDropdown(!showDropdown)}
            style={{
              backgroundColor: '#4a5568',
              color: 'white',
              border: 'none',
              padding: '12px 20px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '600',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#718096'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#4a5568'}
          >
            📚 The Social Code
            <span style={{ transform: showDropdown ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
              ▼
            </span>
          </button>
          
          {showDropdown && (
            <div style={{
              position: 'absolute',
              top: '100%',
              left: '2rem',
              backgroundColor: 'white',
              border: 'none',
              borderRadius: '8px',
              minWidth: '280px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
              zIndex: 1000,
              overflow: 'hidden',
              marginTop: '8px'
            }}>
              {pages.map((page, index) => (
                <a 
                  key={page.slug}
                  href={page.slug}
                  style={{
                    display: 'block',
                    padding: '16px 20px',
                    color: '#2d3748',
                    textDecoration: 'none',
                    borderBottom: index < pages.length - 1 ? '1px solid #e2e8f0' : 'none',
                    fontSize: '15px',
                    transition: 'background-color 0.2s'
                  }}
                  onClick={() => setShowDropdown(false)}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#f7fafc'}
                  onMouseOut={(e) => e.target.style.backgroundColor = 'white'}
                >
                  {page.title}
                </a>
              ))}
            </div>
          )}
        </nav>
        
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}