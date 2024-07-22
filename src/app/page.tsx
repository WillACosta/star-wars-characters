import Header from '@/components/layout/Header'
import CharactersView from '@/modules/characters/presentation/views/CharactersView'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Home() {
  return (
    <main>
      <Header />
      <CharactersView />
      <ToastContainer />
    </main>
  )
}
