import { useSelector } from "react-redux";

import { UList } from "./styles";

const ListSearch = () => {
  const { musics } = useSelector((state) => state);
  const { albuns } = useSelector((state) => state);
  const { artists } = useSelector((state) => state);

  return musics ? (
    <UList>
      {musics.map((music, index) => (
        <li key={index}>{music}</li>
      ))}
    </UList>
  ) : artists ? (
    <UList>
      {artists.map((artist, index) => (
        <li key={index}>{artist}</li>
      ))}
    </UList>
  ) : (
    // albuns ?
    <UList>
      {albuns.map((album, index) => (
        <li key={index}>{album}</li>
      ))}
    </UList>
  );
  //  : (
  // <UList>
  //   {tops.map((album, index) => (
  //     <li key={index}>{album}</li>
  //   ))}
  // </UList>
  // );
};

export default ListSearch;
