import './styles.scss'

interface recentRepositoryProps {
  img: string,
  name: string,
  repositoryName: string
}

export function RecentRepository({ img, name, repositoryName }: recentRepositoryProps) {

  return (
    <div className="recent-repository-container">
      <div className="image-container">
        <img src={img} alt={img} />
      </div>
      <div className="name-container">
        <b>{name}</b>
        <p>{repositoryName}</p>
      </div>
    </div>
  )
}