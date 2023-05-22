import './styles.scss'

interface HistoricCardProps {
  title: string
  infos: HistoricInfos[]
}

export interface HistoricInfos {
  id: number
  localization: string
  time: string
  role: string
}

export function HistoricCard({ title, infos }: HistoricCardProps) {
  return (
    <div className="historic-card-container">
      <b className="historic-card-title">{title}</b>
      <div className="historic-card-content">
        {infos.map((item) => (
          <div key={item.id} className="historic-infos-container">
            <li className="historic-card-localization">{item.localization}</li>
            <p className="historic-card-time">{item.time}</p>
            <p className="historic-card-role">{item.role}</p>
          </div>
        ))}
      </div>
    </div>
  )
}