import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { findMusicThunk } from "../../store/modules/musics/thunks";
import { findAlbumThunk } from "../../store/modules/albuns/thunks";
import { findArtistThunk } from "../../store/modules/artists/thunks";

import { Error } from "./styles";

const SearchForm = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const formSchema = yup.object().shape({
    name: yup.string().required("Preenchimento obrigatório!"),
    select: yup.string().required("Preenchimento obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const dispatch = useDispatch();

  const onSubmitFunction = (data) => {
    if (data.select === "Música") {
      dispatch(findMusicThunk(input, setError));
    }
    if (data.select === "Álbum") {
      dispatch(findAlbumThunk(input, setError));
    }
    if (data.select === "Artist") {
      dispatch(findArtistThunk(input, setError));
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <input
          value={input}
          placeholder="Buscar por..."
          {...register("name")}
          onChange={(e) => setInput(e.target.value)}
        />
        <select {...register("select")}>
          <option value="Música">Música</option>
          <option value="Álbum">Álbum</option>
          <option value="Artista">Artista</option>
        </select>
        <button type="submit">Buscar</button>
      </form>
      {errors.name && <Error>{errors.name.message}</Error>}
      {error && <Error>Nada encontrado!</Error>}
    </>
  );
};

export default SearchForm;
