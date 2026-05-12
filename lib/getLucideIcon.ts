import * as LucideIcons from 'lucide-react'

export function getLucideIcon(iconName: string) {
  const icons: Record<string, React.ComponentType<any>> = LucideIcons
  return icons[iconName] || LucideIcons.HelpCircle
}
