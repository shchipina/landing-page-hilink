import Image from "next/image"

type Props = {
  type: 'button' | 'submit',
  title: string,
  icon?: string
  variant: string,
  full?: boolean,
}

const Button = ({
  title,
  type,
  variant,
  icon,
  full
}: Props) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 cursor-pointer rounded-full border ${variant} ${full && 'w-full'}`}
    >
      {icon && (
        <Image src={icon} alt={title} width={24} height={24} />
      )}
      <label className='bold-16 whitespace-nowrap'>
        {title}
      </label>
    </button>
  )
}

export default Button