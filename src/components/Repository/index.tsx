import { FiFolder, FiStar, FiGitBranch } from "react-icons/fi";
import './styles.scss'

export interface RepositoryProps {
  name?: string,
  description?: string,
  language?: string,
  stargazers_count?: number | null
  branches_url?: string | string[]
}

export function Repository({ name, description, language, stargazers_count, branches_url }: RepositoryProps) {
  const branchCount = Array.isArray(branches_url) ? branches_url.length : 1;

  return (
    <div className="repository-container">
      <div className="repository-content">
        <FiFolder className="icon" />
        <b>{name && name.length > 18 ? (
          <>
            {name?.substring(0, 70)}...
          </>
        ) : (
          name
        )}</b>
      </div>
      <p className="repository-description">
        {description && description.length > 73 ? (
          <>
            {description?.substring(0, 70)}...
          </>
        ) : (
          description
        )}
        {
          !description && "There is no description."
        }
      </p>
      <div className="repository-infos">
        <div className="repository-public-info">
          <div className="repository-info">
            <FiStar className="icon spacement" />
            <p className="star-quantity">{stargazers_count}</p>
          </div>
          <div className="repository-info">
            <FiGitBranch className="icon spacement" />
            <p>{branchCount}</p>
          </div>
        </div>
        <p className="language">
          {language}
        </p>
      </div>
    </div>
  )
}
