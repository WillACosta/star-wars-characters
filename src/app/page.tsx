import Header from '@/components/layout/Header'
import CharactersView from '@/modules/characters/presentation/views/CharactersView'
import { Suspense } from 'react'

export default function Home() {
  return (
    <main>
      <Header />
      <Suspense fallback={null}>
        <CharactersView />
      </Suspense>
    </main>
  )
}
