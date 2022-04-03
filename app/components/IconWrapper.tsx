import Icon from "./Icon";
import { ResponsiveSlide } from "./ResponsiveSlide";

type Props = {
    items: string[]
}
const IconWrapper = ({items}: Props) => {

    return (
        <ResponsiveSlide
            useMediaQueryArg={{ query: "(min-width: 1280px)" }}
            direction="right"
            duration={500}
            triggerOnce
            cascade
        >
            {items.map((item, i) => (
                <Icon key={i++} name={item} picture={`/icons/${item}`} />))}
        </ResponsiveSlide>
    )
}

export default IconWrapper;