import "./styles.css";
import Card from "./card";

export default function App() {
  return (
    <div className="App">
      <div>
        <h1 className="heading">My Contacts</h1>
        <Card
          name="Cow-boy1"
          img="https://cdn.w600.comps.canstockphoto.com/cowboy-cartoon-vector-clip-art_csp4373061.jpg"
          tel="123456"
          email="xyz@gmail.com"
        />
        ----------------------------------------------------------------------
        <Card
          name="Cow-boy2"
          img="https://c8.alamy.com/comp/JCDWCY/cartoon-cowboy-leaning-on-a-fence-smoking-a-cigarette-JCDWCY.jpg"
          height="10px"
          width="10px"
          tel="5678"
          email="wex@gmail.com"
        />
        -----------------------------------------------------------------------------
        <Card
          name="Cow-boy3"
          img="https://t3.ftcdn.net/jpg/00/85/66/58/360_F_85665875_vr7En5LCGDB4It9r2gEZQ6XgGIuBj2jV.jpg"
          height="10px"
          width="10px"
          tel="5678"
          email="wex@gmail.com"
        />
      </div>
    </div>
  );
}
