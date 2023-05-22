// styles
import './styles.scss'

// assets
import { FiTwitter, FiMail, FiMapPin, FiBriefcase, FiGithub, FiLinkedin, FiGlobe } from "react-icons/fi"

// tags
import { ReactElement } from 'react'

const iconsMap: InfosCardProps[] = [
  {
    id: 1,
    icon: <FiMapPin />,
    info: 'Brazil'
  },
  {
    id: 2,
    icon: <FiBriefcase />,
    info: 'Startup'
  },
  {
    id: 3,
    icon: <FiGithub />,
    info: 'marcosdanielr'
  }, {
    id: 4,
    icon: <FiLinkedin />,
    info: 'marcos-daniel-081a47221'
  }, {
    id: 5,
    icon: <FiTwitter />,
    info: '-----------'
  }, {
    id: 6,
    icon: <FiGlobe />,
    info: 'flash-torrent.com'
  }, {
    id: 7,
    icon: <FiMail />,
    info: 'marcosdaniel99@protonmail.com'
  }
]

interface InfosCardProps {
  id: number
  icon: ReactElement,
  info: string
}

export function InfosCard() {
  return (
    <div className="infos-card-container">
      {
        iconsMap.map((item) => (
          <div className='infos-card-content' key={item.id}>
            <div className='icon-container'>{item.icon}</div>
            <p>{item.info}</p>
          </div>
        ))
      }
    </div>
  )
}