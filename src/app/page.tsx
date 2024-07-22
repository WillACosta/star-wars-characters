import Header from '@/components/layout/Header'
import CharactersView from '@/modules/characters/presentation/views/CharactersView'

export default function Home() {
  return (
    <main>
      <Header />
      <CharactersView />
    </main>
  )
}
