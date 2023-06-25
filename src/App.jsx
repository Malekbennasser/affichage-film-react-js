import Film from "./Flim";
import "./App.css";
const films = [
  {
    title: "Avengers: Endgame",
    resume:
      "Après les événements dévastateurs d'Avengers : Infinity War, l'univers est en ruine. Avec l'aide des alliés restants, les Avengers se rassemblent une fois de plus afin d'inverser les actions de Thanos et de rétablir l'équilibre dans l'univers.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
    showtimes: ["10:00", "12:30", "15:00", "17:30", "20:00"],
  },
  {
    title: "Spider-Man: No Way Home",
    resume:
      "Pour la première fois dans l'histoire cinématographique de Spider-Man, notre sympathique héros de quartier est démasqué et n'est plus en mesure de séparer sa vie normale des enjeux élevés d'être un super héros.",
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSwa1l3P80-ML57Ln1ZKdIE6ldjTVRBPe_cFbaSEhwVrJTmsCpG",
    showtimes: ["11:00", "13:30", "16:00", "18:30", "21:00"],
  },
  {
    title: "Matrix Resurrections",
    resume:
      "Un pirate informatique apprend de mystérieux rebelles la vraie nature de sa réalité et son rôle dans la guerre contre ses contrôleurs.",
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQbyMqI_v0pXkty3WAcpizWCFp9VF3rZIgMZczKjqQa1X4ID34D",

    showtimes: ["10:00", "14:00", "18:00", "22:00"],
  },
  {
    title: "Joker",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzX-5nDWw-_V1mEaNgDgHDdozTyRCu6T6XAh4E7CjtjhAMKXzW",
    resume:
      "À Gotham City, le comédien souffrant de troubles mentaux Arthur Fleck se lance dans une spirale descendante de révolution sociale et de crimes sanglants. Ce chemin l'amène face à face avec son infâme alter-ego : 'Le Joker",
    showtimes: ["11:00", "15:00", "19:00", "23:00"],
  },
  {
    title: "Parasite",
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQTVsPLpANO8gy6kzpUWyo9_Agx5jBiPMroLKdTTfuzIqw8sgz_",
    resume:
      "Toute la famille de Ki-taek est au chômage, et s’intéresse fortement au train de vie de la richissime famille Park. Un jour, leur fils réussit à se faire recommander pour donner des cours particuliers d’anglais chez les Park. C’est le début d’un engrenage incontrôlable, dont personne ne sortira véritablement indemne..",
    showtimes: ["12:00", "16:00", "20:00", "00:00"],
  },
];

function App() {
  return (
    <div>
      {films.map((film) => (
        <Film
          title={film.title}
          resume={film.resume}
          imageUrl={film.imageUrl}
          showtimes={film.showtimes}
        />
      ))}
    </div>
  );
}

export default App;
