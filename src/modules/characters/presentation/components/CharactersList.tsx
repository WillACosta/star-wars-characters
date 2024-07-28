import CardItem from '@/components/atoms/CardItem'
import { Character } from '../../domain/models'

type CharactersListProps = {
  items: Character[]
}

export default function CharactersList({ items }: CharactersListProps) {
  return (
    <div className='py-4 grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5'>
      {items.map(({ id, ...rest }) => (
        <CardItem key={id} {...rest} />
      ))}
    </div>
  )
}
