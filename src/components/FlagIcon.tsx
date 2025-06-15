import { countryFlags } from '../data/countryFlags'

interface FlagIconProps {
  language: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const FlagIcon = ({ language, size = 'md', className = '' }: FlagIconProps) => {
  const flagData = countryFlags.find(flag => flag.language === language)
  
  if (!flagData) return null
  
  const sizeClasses = {
    sm: 'w-4 h-3',
    md: 'w-6 h-4',
    lg: 'w-8 h-6'
  }
  
  return (
    <img
      src={`https://flagcdn.com/${flagData.countryCode}.svg`}
      alt={`${flagData.countryName}の国旗`}
      className={`inline-block rounded-sm ${sizeClasses[size]} ${className}`}
      loading="lazy"
      onError={(e) => {
        const target = e.target as HTMLImageElement
        target.style.display = 'none'
      }}
    />
  )
}

export default FlagIcon