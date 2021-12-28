import { useNavigate } from "react-router-dom";

import SearchForm from "../../components/SearchForm";
import ListSearch from "../../components/ListSearch";

const Home = () => {
  const nav = useNavigate();

  return (
    <>
      <h1>Deezer</h1>
      <SearchForm />
      <ListSearch />
      <button onClick={() => nav.push("/favoritos")}>Ir para Favoritos</button>
    </>
  );
};

export default Home;
