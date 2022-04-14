import Link from 'next/link'
 import { FaGithub } from 'react-icons/fa'
 import Draggable from 'react-draggable';
 import { useContext } from 'react';
 import githubContext, { GithubContextType } from '../context/github/githubContext';
 import { useMediaQuery } from 'react-responsive';

 const Github = () => {

   const { lastY, setLastY, projectUrl } = useContext(githubContext) as GithubContextType;

   return (
    <Draggable
    allowAnyClick={true}
    enableUserSelectHack={true}
    position={{x: 0, y: lastY}}
    onStop={(e, data) => {
          if (data.y > 0)
            setLastY(0)
          else if (-data.y > window.innerHeight - 180)
            setLastY(-window.innerHeight + 180)
          else
            setLastY(data.y);
    }}
    disabled={useMediaQuery({ query: "(max-width: 800px)"})}
  >
    <div className="fixed bottom-0 right-0 z-50 m-3 md:m-5 p-2 bg-black hover:bg-neutral-200 text-neutral-200 hover:text-black border-neutral-200 hover:border-black duration-1000 transition-colors border-2 rounded-full">
          <div className="text-center text-sm">
            <Link href={`https://github.com/busshi/${projectUrl}`}>
                  <a>
                    <FaGithub className="text-5xl"/>
                  </a>
            </Link>
          </div>
    </div>
</Draggable>
     )
 }

 export default Github;