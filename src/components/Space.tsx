
type spaceProps={
    border?: string
}
const Space = ({border}:spaceProps) => {
  return (
    <div className={`h-[3rem] md:h-[5rem] w-full ${border}`}></div>
  )
}

export default Space