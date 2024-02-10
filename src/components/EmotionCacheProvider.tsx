import React from 'react'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'

// This ensures that Emotion's styles are inserted before Tailwind's styles so that Tailwind classes have precedence over Emotion
const EmotionCacheProvider = ({ children }: { children: React.ReactNode }) => {
  const cache = React.useMemo(
    () =>
      createCache({
        key: 'with-tailwind',
        insertionPoint: document.querySelector('title')!,
      }),
    [],
  )

  return <CacheProvider value={cache}>{children}</CacheProvider>
}

export default EmotionCacheProvider
