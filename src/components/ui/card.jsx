import React from 'react';
export function Card({ children, className='', ...props }) {
  return <div {...props} className={'rounded-xl overflow-hidden '+className}>{children}</div>
}
export function CardContent({ children, className='', ...props }) {
  return <div {...props} className={'p-4 '+className}>{children}</div>
}
