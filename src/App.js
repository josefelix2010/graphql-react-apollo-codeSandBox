import "./styles.css";
import { useQuery, gql } from "@apollo/client";

const AllCharactersQuery = gql`
  query getAllCharacters {
    characters {
      results {
        id
        name
        status
        gender
      }
    }
  }
`;

function GetCharacters() {
  const { loading, error, data } = useQuery(AllCharactersQuery);

  if (loading) return <p> Loading... </p>;
  if (error) return <p> Error </p>;

  return data.characters.results.map((character) => {
    return <p>{character.name}</p>;
  });
}

export default function App() {
  return (
    <div className="App">
      <GetCharacters />
    </div>
  );
}
