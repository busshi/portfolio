import { format, parseISO } from "date-fns";
import { useEffect, useState } from "react";

type Props = {
    dateString: string,
    lang: string
}

const DateFormatter = ({dateString, lang}: Props) => {
    const [converted, setConverted] = useState('');

    useEffect(() => {
        if (lang === 'FR')
            setConverted(dateString)
        else if (lang === 'EN')
            setConverted(format(parseISO(dateString), 'LLLL d, yyyy'))
    }, [lang])

    return <time>{converted}</time>
}

export default DateFormatter;