import { technologies } from '../../utils/technologies'
import './styles.scss'


export interface TechnologiesProps {
  id: number,
  name: string
}

export function TechnologiesCard() {
  return (
    <div className="technologies-card-container">
      <b className="technologies-card-title">Technologies</b>
      <div className="technologies-card-content">
        {technologies.map((item) => (
          <div className="technology-container" key={item.id}>
            <b className="technology-name">{item.name}</b>
          </div>
        ))}
      </div>
    </div>
  )
}