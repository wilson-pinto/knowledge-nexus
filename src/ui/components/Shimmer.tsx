
type Props = {
    height?: string
    width?: string
    radius?: string
    className?: string
}

const Shimmer = ({ height = '30px', width = '200px', radius = "5px", className }: Props) => {
    return (
        <div className={`${className} shimmer`} style={{ height: height, width: width, borderRadius: radius }}></div>
    )
}

export default Shimmer
