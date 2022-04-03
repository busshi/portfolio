import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type Props = {
    thumb: string[],
    title: string,
    slug: string,
    excerpt: string,
    heroPost: boolean
}

const Slider = ({ thumb, title, slug }: Props) => {
    return (
        <div className="flex justify-center pt-10">
            <Link href={`/posts/${slug}`}>
                <a className="flex justify-center">
                <Carousel className="text-center max-w-[80%]" autoPlay={true} interval={5000} infiniteLoop={true} dynamicHeight={false} useKeyboardArrows={true} showArrows={false} emulateTouch={true} showStatus={false}>
                
                {thumb.map((item, i) => (
                    <div key={i++} >
                        <img src={`/assets/projects/${item}`} alt={title}/>
                    </div>
                ))}
            
                </Carousel>
                </a>
            </Link>
        </div>
   )   
}

export default Slider;