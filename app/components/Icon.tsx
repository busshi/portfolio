import { SiNextdotjs } from 'react-icons/si'
import Tooltip from './Tooltip';

type Props = {
  name: string
  picture: string
}

const Icon = ({ name, picture }: Props) => {
  return (
    <Tooltip
      className="bg-black border rounded-full border-orange-200"
      content={name.substring(0, name.indexOf('.') !== -1 ? name.indexOf('.') : name.length)}
    >
        <div className="flex items-center hover:animate-bounceUp">
          {name === 'nextjs' ?
          <SiNextdotjs className="border border-neutral-200 bg-neutral-200 rounded-full text-black mr-4 w-12 h-12" />
          :
          <img src={picture} className="w-12 h-12 rounded-xl mr-4" alt={name}/>
          }
        </div>
    </Tooltip>
  )
}

export default Icon
