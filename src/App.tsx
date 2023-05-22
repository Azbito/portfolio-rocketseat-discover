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
import { Repository } from "./components/Repository";

export function App() {
  return (
    <ContainerColumn>
      <ContainerRow>
        <ProfileCard img={Icon} job="Fullstack developer | Software Engineer" name="Marcos Roque" />
        <ContainerColumn>
          <MyProjects />
          <ContainerRow>
            <Repository title="a" description="aaaaaaa" />
            <Repository title="a" description="aaaaaaa" />
          </ContainerRow>
        </ContainerColumn>
      </ContainerRow>
      <InfosCard />
      <TechnologiesCard />
      <HistoricCard title="Career" infos={career} />
      <HistoricCard title="Education" infos={education} />
    </ContainerColumn>
  )
}