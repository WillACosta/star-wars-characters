import Header from '@/components/layout/Header'
import ServerCharactersView from '@/modules/characters/presentation/views/ServerCharactersView'

export default function Home() {
  return (
    <main>
      <Header />
      <ServerCharactersView />
    </main>
  )
}
