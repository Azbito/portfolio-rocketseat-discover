import './styles.scss'

interface ProfileCardProps { img: string, name: string, job: string }

export function ProfileCard({ img, name, job }: ProfileCardProps) {
  return (
    <div className="layout-container">
      <img src={img} alt={img} />
      <b>{name}</b>
      <p>{job}</p>
    </div>
  )
}