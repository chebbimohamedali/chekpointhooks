import { useState} from 'react';
import MovieList from "./Components/MovieList";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddMovie from "./Components/AddMovie";

function App() {
  // following attributes
  const movies= [
    {
        title :"Le Roi Lion",
        description:"Le long combat de Simba le lionceau pour accéder à son rang de roi des animaux, après que le fourbe Scar, son oncle, a tué son père et pris sa place",
        posterURL:"https://fr.web.img6.acsta.net/c_310_420/pictures/22/09/20/12/10/2512840.jpg",
        rating:"5"
    },
    {
        title :"The Dark Knight",
        description:"Batman entreprend de démanteler les dernières organisations criminelles de Gotham. Mais il se heurte bientôt à un nouveau génie du crime qui répand la terreur et le chaos dans la ville : le Joker...",
        posterURL:"https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/63/97/89/18949761.jpg",
        rating:"3"

    },
    {
        title :"Les Gardiens de la Galaxie 3",
        description:"Notre bande de marginaux favorite a quelque peu changé. Peter Quill, qui pleure toujours la perte de Gamora, doit rassembler son équipe pour défendre l’univers et protéger l’un des siens. En cas d’échec, cette mission pourrait bien marquer la fin des Gardiens tels que nous les connaissons",
        posterURL:"https://fr.web.img3.acsta.net/c_310_420/pictures/23/02/13/11/43/2783447.jpg",
        rating:"2"

    },
    {
        title :"Les Trois Mousquetaires: D'Artagnan",
        description:"Du Louvre au Palais de Buckingham, des bas-fonds de Paris au siège de La Rochelle… dans un Royaume divisé par les guerres de religion et menacé d’invasion par l’Angleterre, une poignée d’hommes et de femmes vont croiser leurs épées à celui de la France",
        posterURL:"https://fr.web.img5.acsta.net/c_310_420/o_club-allocine-310x420.png_0_se/pictures/23/01/16/11/55/4417568.jpg",
        rating:"4"

    }
];
  const [data,setData]=useState({movies})

  return (
   
    <div className="App">
       <h1>Movie List</h1>
       <AddMovie editdata={setData} test={data}/>
       <MovieList movies={movies}/>
    </div>
  );
}

export default App;
 