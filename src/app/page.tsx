import { Suspense } from 'react'

import LoadingSpinner from '@/components/atoms/LoadingSpinner'
import Header from '@/components/layout/Header'
import CharactersView from '@/modules/characters/presentation/views/CharactersView'

export default function Home() {
  return (
    <main>
      <Header />
      {/* implement characters shimmer layout */}
      <Suspense fallback={<LoadingSpinner />}>
        <CharactersView />
      </Suspense>
    </main>
  )
}
