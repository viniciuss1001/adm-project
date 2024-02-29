import { Carousel } from "../components/Carousel/Carousel"
import { ClassSaction } from "../components/ClassSection/ClassSection"
import { GroupPhotos } from "../components/GroupPhotos/GroupP"
import { IconsImages } from "../components/Icons/Icons"
import { NavbarAdm } from "../components/Navbar/Navbar"


export function Home(){
  return (
    <div>
      <NavbarAdm />
      <Carousel />
      <IconsImages />
      <GroupPhotos />
      <ClassSaction />
    </div>
  )
}

