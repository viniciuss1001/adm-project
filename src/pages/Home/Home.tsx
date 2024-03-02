import { Carousel } from "./Components/Carousel/Carousel"
import { ClassSaction } from "./Components/ClassSection/ClassSection"
import { HomeFooter } from "./Components/Footer/Footer"
import { GroupPhotos } from "./Components/GroupPhotos/GroupP"
import { IconsImages } from "./Components/Icons/Icons"
import { UnregisterNavbar } from "../../components/Navbar/UnregisterNavbar/Navbar"


export function Home(){
  return (
    <div>
      <UnregisterNavbar />
      <Carousel />
      <IconsImages />
      <GroupPhotos />
      <ClassSaction />
      <HomeFooter />
    </div>
  )
}

