export interface TabConfig {
  label: string
  path: string
  src: string
  healthUrl: string
}

export const TAB_CONFIG: TabConfig[] = [
  {
    label: 'Signal',
    path: '/signal',
    src: 'http://localhost:3080',
    healthUrl: 'http://localhost:3080',
  },
  {
    label: 'Predict',
    path: '/predict',
    src: 'http://localhost:18828',
    healthUrl: 'http://localhost:18828',
  },
  {
    label: 'Trading',
    path: '/trading',
    src: 'http://localhost:3080/trading',
    healthUrl: 'http://localhost:3080',
  },
  {
    label: 'System',
    path: '/system',
    src: 'http://localhost:3080/advanced/system',
    healthUrl: 'http://localhost:3080',
  },
]
