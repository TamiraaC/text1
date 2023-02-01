import React from "react";
import Movie_list from "../components/card/movielist";
import Sadako from "../assets/sadako.jpg"
import National from "../assets/nationalTreasure2022-final-2-280x420.jpg"
import The0ffening from "../assets/offering2022-final-280x420.jpg"
import Pussinboost1 from "../assets/pussBoots-final-280x420.jpg"
import Pussinboost2 from "../assets/pussBoots2-final-280x420.jpg"
import TeenWolf from "../assets/teenWolf2023-final-280x420.jpg"
import Here from "../assets/hereditary-final-280x420.jpg"
import Phy from "../assets/physical100-final-280x420.jpg"
import Megan from "../assets/m3gan2022-final-280x420.jpg"
import There from "../assets/somethingWrongChildren-final-280x420.jpg"
import Jinji from "../assets/japaneseTales-final-280x420.jpg"
import Viking from "../assets/vikingsValhalla2-final-280x420.jpg"
import TheLast from "../assets/lastUs-final-1-280x420.jpg"
import Servant from "../assets/servant4-final-280x420.jpg"
import Willow from "../assets//willow2022-final-1-280x420.jpg"
import Jung from "../assets//junge2023-final-280x420.jpg"
import Snow from "../assets/snowFalls-final-280x420.jpg"
import Dea from "../assets/daemuga-final-280x420.jpg"
import Whiteno from "../assets/whiteNoise-final-280x420.jpg"
import Theold from "../assets/oldWay2023-final-280x420.jpg"

import "./home.css"
// import Card from "../components/card";
// import Zurag from "../assets/tamiraa5.jpg"
// import Zurag1 from "../assets/tamiraa4.jpg"
//module not found ymr neg file bhgy bn 
 const Home = () => {
    return (
        <div>
            <div className="home">
            <Movie_list title="Sadako DX (2022) FHD Монгол хадмал" img={Sadako}/>
            <Movie_list title="National Treasure: Edge of History S01E08 (2022) FHD Монгол Хадмал" img={National}/>
            <Movie_list title="The Offering (2022) FHD Монгол хадмал" img={The0ffening}/>
            <Movie_list title="Puss in Boots: The Last Wish (2022) FHD Монгол хадмал" img={Pussinboost1}/>
            <Movie_list title="Puss in Boots (2011) FHD Монгол хэл" img={Pussinboost2}/>
            <Movie_list title="Sadako DX (2022) FHD Монгол хадмал" img={ TeenWolf}/>
            <Movie_list title="National Treasure: Edge of History S01E08 (2022) FHD Монгол Хадмал" img={Here}/>
            <Movie_list title="The Offering (2022) FHD Монгол хадмал" img={Phy}/>
            <Movie_list title="Puss in Boots: The Last Wish (2022) FHD Монгол хадмал" img={Megan}/>
            <Movie_list title="Puss in Boots (2011) FHD Монгол хэл" img={There}/>
            <Movie_list title="Junji Ito Maniac: Japanese Tales of the Macabre S01 (2023) БҮХ АНГИ FHD Монгол Хадмал" img={Jinji}/>
            <Movie_list title="Vikings: Valhalla (2022) S02 (2023) БҮХ АНГИ FHD Монгол Хадмал" img={Viking}/>
            <Movie_list title="The Last of Us S01E02 (2022) FHD Монгол Хадмал" img={TheLast}/>
            <Movie_list title="Servant (2019) S04E02 (2023) HD Монгол хадмал" img={Servant}/>
            <Movie_list title="Willow S01 БҮХ АНГИ (2022) FHD Монгол Хадмал" img={Willow}/>
            <Movie_list title="Sadako DX (2022) FHD Монгол хадмал" img={ Jung}/>
            <Movie_list title="National Treasure: Edge of History S01E08 (2022) FHD Монгол Хадмал" img={Snow}/>
            <Movie_list title="The Offering (2022) FHD Монгол хадмал" img={Dea}/>
            <Movie_list title="Puss in Boots: The Last Wish (2022) FHD Монгол хадмал" img={Whiteno}/>
            <Movie_list title="Puss in Boots (2011) FHD Монгол хэл" img={Theold}/>
        </div>
            {/* <Card title="Гарчиг" description="Тайлбар" 
            img={Zurag}
            />
             <Card title="Гарчиг 1" description="Тайлбар 1" 
            img={Zurag1}
            /> */}
        </div>
    );
 };

 export default Home;