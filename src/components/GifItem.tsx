type GifItemProps = {title: string, url: string}

const GifItem = ({title, url}: GifItemProps) => {
    return (
        <div className="card">
          <img src={url} alt={title} />
          <h5>{title}</h5>
        </div>
    )
}

export default GifItem;