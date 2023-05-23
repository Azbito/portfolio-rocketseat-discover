// components
import { ProfileCard } from "./components/ProfileCard";
import { InfosCard } from "./components/InfosCard";
import { ContainerColumn } from "./components/ContainerColumn";
import { TechnologiesCard } from "./components/TechnologiesCard";
import { HistoricCard } from "./components/HistoricCard";
import { MyProjects } from "./components/MyProjects";
import { ContainerRow } from "./components/ContainerRow";

// assets
import Icon from './assets/images/icon.jpeg'

// utils
import { career } from "./utils/career";
import { education } from "./utils/education";
import { Repository, RepositoryProps } from "./components/Repository";

// hooks
import { useEffect, useState } from "react";
import { getRepositories } from "./services/repositoriesAPI";
import { RecentPosts } from "./components/RecentPosts";

export function App() {

  const [repositories, setRepositories] = useState<RepositoryProps[]>([])

  const getRandomIndex = (currentGroupIndex: number, lastIndex?: number): number => {
    const filteredRepositories = repositories.filter((_, index) => index !== lastIndex);
    const groupSize = filteredRepositories.length / 2;
    const startIndex = currentGroupIndex * groupSize;
    const endIndex = startIndex + groupSize;
    const index = Math.floor(Math.random() * (endIndex - startIndex) + startIndex);
    return index;
  };

  useEffect(() => {
    getRepositories(setRepositories)
  }, [])

  console.log(repositories)
  return (
    <ContainerColumn>
      <ContainerRow>
        <ProfileCard img={Icon} job="Fullstack developer | Software Engineer" name="Marcos Roque" />
        <ContainerColumn>
          <MyProjects />
          <ContainerRow>
            <Repository name={repositories[getRandomIndex(0)]?.name} description={repositories[getRandomIndex(0)]?.description} branches_url={repositories[getRandomIndex(0)]?.branches_url} language={repositories[getRandomIndex(0)]?.language} stargazers_count={repositories[getRandomIndex(0)]?.stargazers_count} />
            <Repository name={repositories[getRandomIndex(1)]?.name} description={repositories[getRandomIndex(1)]?.description} branches_url={repositories[getRandomIndex(1)]?.branches_url} language={repositories[getRandomIndex(1)]?.language} stargazers_count={repositories[getRandomIndex(1)]?.stargazers_count} />
          </ContainerRow>
          <RecentPosts />
        </ContainerColumn>
      </ContainerRow>
      <InfosCard />
      <TechnologiesCard />
      <HistoricCard title="Career" infos={career} />
      <HistoricCard title="Education" infos={education} />
    </ContainerColumn>
  )
}