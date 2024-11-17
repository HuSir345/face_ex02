export type ProcessingStatus = 'idle' | 'processing' | 'success' | 'error'

export interface ImagePreview {
  url: string
  file: File
} 