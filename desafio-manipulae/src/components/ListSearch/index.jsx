import { useSelector } from "react-redux";

const ListSearch = () => {
  const { musics } = useSelector((state) => state);
  const { albuns } = useSelector((state) => state);
  const { artists } = useSelector((state) => state);

  return musics ? (
    <ul>
      {musics.map((music, index) => (
        <li key={index}>{music}</li>
      ))}
    </ul>
  ) : artists ? (
    <ul>
      {artists.map((artist, index) => (
        <li key={index}>{artist}</li>
      ))}
    </ul>
  ) : albuns ? (
    <ul>
      {albuns.map((album, index) => (
        <li key={index}>{album}</li>
      ))}
    </ul>
  ) : (
    // os favorritos do momento
    <ul>
      {tops.map((album, index) => (
        <li key={index}>{album}</li>
      ))}
    </ul>
  );
};

export default ListSearch;
