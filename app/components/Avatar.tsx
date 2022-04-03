type Props = {
  size: number
  name: string
  picture: string
}

const Avatar = ({ size, name, picture }: Props) => {
  return (
    <div className="flex items-center">
      <img src={picture}
        width={size}
        height={size}
        className="rounded-full"
        alt={name}
      />
      {size < 100 && <h1 className="font-bold text-lg ml-3">{name}</h1>}
    </div>
  )
}

export default Avatar
