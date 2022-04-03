import { SiCmake, SiGithubactions, SiNextdotjs, SiVisualstudio } from 'react-icons/si'
import {CgCircleci} from 'react-icons/cg';
import Tooltip from './Tooltip';
import { VscDebugStepBack } from 'react-icons/vsc';

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
          name === 'docker-compose' ?
          <img src='/icons/docker.svg' className="w-12 h-12 rounded-xl mr-4" alt={name}/>
          :
          name === 'github actions' ?
          <SiGithubactions className="w-12 h-12 ml-3" />
          :
          name === 'vscode' ?
          <SiVisualstudio className="w-12 h-12 text-blue-500" />
          :
          name === 'circleci' ?
          <CgCircleci className="w-12 h-12" />
          :
          name === 'make' ?
          <SiCmake className="w-12 h-12" />
          :
          name === 'lldb' ?
          <VscDebugStepBack className="w-12 h-12 text-black border rounded-full bg-neutral-200" />
          :
          <img src={picture} className="w-12 h-12 rounded-xl mr-4" alt={name}/>
          }
        </div>
    </Tooltip>
  )
}

export default Icon
