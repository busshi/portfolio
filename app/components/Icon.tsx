import { SiCmake, SiGithubactions, SiNextdotjs, SiVim, SiVisualstudio } from 'react-icons/si'
import {CgCircleci} from 'react-icons/cg';
import Tooltip from './Tooltip';
import { VscDebugStepBack } from 'react-icons/vsc';

type Props = {
  name: string
  picture: string
}

const GetIcon = ({name, picture}: Props) => {
    if (name === 'nextjs')
      return <SiNextdotjs className="border border-neutral-200 bg-neutral-200 rounded-full text-black mr-4 w-12 h-12" />
    else if (name === 'github actions')
      return <SiGithubactions className="w-12 h-12 ml-3" />
    else if (name === 'vscode')
      return <SiVisualstudio className="w-12 h-12 text-blue-500" />
    else if (name === 'circleci')
      return <CgCircleci className="w-12 h-12" />
    else if (name === 'make')
      return <SiCmake className="w-12 h-12 text-orange-700/60" />
    else if (name === 'lldb')
      return <VscDebugStepBack className="w-12 h-12 text-black rounded-full bg-orange-700/60" />
    else if (name === 'vim')
      return <SiVim className="w-12 h-12 text-orange-700/60" />
    else
      return <img src={picture} className="w-12 h-12 rounded-xl mr-4" alt={name}/>
}

const Icon = ({ name, picture }: Props) => {
  return (
    <Tooltip
      className="bg-black border rounded-full border-orange-200"
      content={name.substring(0, name.indexOf('.') !== -1 ? name.indexOf('.') : name.length)}
    >
        <div className="flex items-center hover:animate-bounceUp">
            <GetIcon name={name} picture={picture} />
        </div>
    </Tooltip>
  )
}

export default Icon
