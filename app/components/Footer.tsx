import Link from "next/link";
import { EMAIL, SITE_PRO, LINKS, FOOTER } from "../lib/constants";
import { VscGithub } from "react-icons/vsc";
import { FaLinkedin, FaDocker } from "react-icons/fa";
import { useContext } from "react";
import langageContext, {
  LangageContextType,
} from "../context/langage/langageContext";

const Footer = () => {
  const { langId } = useContext(langageContext) as LangageContextType;

  return (
    <footer className="bg-inherit border-t border-orange-200 p-5">
      <div className="flex flex-col lg:flex-row items-center">
        <h3 className="basis-0 lg:basis-1/3 text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
          {FOOTER[langId].slogan}
        </h3>
        <div className="basis-0 lg:basis-1/3">
          <div className="flex justify-center text-2xl">
            {LINKS.map((link) => (
              <div key={link.id} className="mx-5 hover:animate-pulse">
                <Link href={link.url}>
                  <a>
                    {link.name === "Linkedin" && (
                      <FaLinkedin className="text-blue-700" />
                    )}
                    {link.name === "Malt" && (
                      <img src={link.src} width={25} height={25} />
                    )}
                    {link.name === "Github" && <VscGithub />}
                    {link.name === "DockerHub" && (
                      <FaDocker className="text-blue-400" />
                    )}
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="pb-4 pt-10 lg:pt-0 basis-0 lg:basis-1/3 flex flex-col lg:flex-row lg:flex-wrap justify-center items-center">
          <Link href={`mailto:${EMAIL}`}>
            <a>
              <button className="pushable">
                <span className="pushableFront">{FOOTER[langId].contact}</span>
              </button>
            </a>
          </Link>
          <Link href={SITE_PRO}>
            <a className="m-3 font-bold hover:underline">
              {FOOTER[langId].company}
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
