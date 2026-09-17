type LotusMarkProps = {
  className?: string
}

export default function LotusMark({ className = 'w-10 h-10' }: LotusMarkProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50 88C50 88 20 74 20 50C20 50 38 56 50 70C62 56 80 50 80 50C80 74 50 88 50 88Z"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M50 78C50 78 28 62 32 36C32 36 46 46 50 62C54 46 68 36 68 36C72 62 50 78 50 78Z"
        fill="currentColor"
        opacity="0.6"
      />
      <path
        d="M50 66C50 66 38 50 44 28C44 28 50 40 50 52C50 40 56 28 56 28C62 50 50 66 50 66Z"
        fill="currentColor"
      />
    </svg>
  )
}
