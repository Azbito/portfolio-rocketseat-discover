import { FiFolder, FiStar, FiGitBranch } from "react-icons/fi";
import './styles.scss'

interface RepositoryProps {
  title: string
  description: string
}

export function Repository({ title, description }: RepositoryProps) {

  return (
    <div className="repository-container">
      <div className="repository-content">
        <FiFolder className="icon" />
        <b>{title}</b>
      </div>
      <p>{description}</p>
      <div className="repository-infos">
        <div className="repository-public-info">
          <div className="repository-info">
            <FiStar className="icon spacement" />
            <p className="star-quantity">1</p>
          </div>
          <div className="repository-info">
            <FiGitBranch className="icon spacement" />
            <p>1</p>
          </div>
        </div>
        <p className="language">
          das
        </p>
      </div>
    </div>
  )
}