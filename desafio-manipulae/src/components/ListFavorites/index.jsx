import { useSelector } from "react-redux";

const ListFavorites = () => {
  const { favorites } = useSelector((state) => state);

  return (
    <ul>
      {favorites.map((music, index) => (
        <li key={index}>{music}</li>
      ))}
    </ul>
  );
};

export default ListFavorites;
