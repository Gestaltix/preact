import { useContext } from 'preact/hooks'
import { Url } from './app';

const Comp = ({ }) => {
  const url = useContext(Url)
  return <div>This is the Url: {url} </div>
}

export default Comp