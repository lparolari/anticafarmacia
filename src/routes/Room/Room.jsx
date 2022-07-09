import { useParams } from 'react-router-dom'

export const Room = () => {
  const { roomId } = useParams()
  return <p>room/{roomId}</p>
}
