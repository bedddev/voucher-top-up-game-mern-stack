interface ReachedSkorProps{
  points : string
  category : string
}

export default function ReachedSkor(props: ReachedSkorProps) {

  const {points, category} = props

  return (
    <div className="me-lg-35">
        <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">{points}</p>
        <p className="text-lg text-lg-start text-center color-palette-2 m-0">{category}</p>
    </div>
  )
}
