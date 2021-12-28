import { useSelector } from "react-redux";

import { UList } from "./styles";

const ListFavorites = () => {
  const { favorites } = useSelector((state) => state);

  return (
    <UList>
      {favorites.map((music, index) => (
        <li key={index}>{music}</li>
      ))}
    </UList>
  );
};

export default ListFavorites;
