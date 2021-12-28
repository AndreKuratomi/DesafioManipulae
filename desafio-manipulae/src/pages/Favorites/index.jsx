import { useNavigate } from "react-router-dom";

import ListFavorites from "../../components/ListFavorites";

const Favorites = () => {
  const nav = useNavigate();

  return (
    <>
      <h1>Favoritos</h1>
      <ListFavorites />
      <button onClick={() => nav.push("/")}>Voltar para home</button>
    </>
  );
};

export default Favorites;
