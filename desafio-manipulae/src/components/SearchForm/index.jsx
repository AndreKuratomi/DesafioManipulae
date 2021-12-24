import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";

import { useState } from "react";

const SearchForm = () => {
  const [input, setInput] = useState("");
  const [empty, setEmpty] = useState(false);
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

  const onSubmitFunction = (data) => {
    if (input === "") {
      setEmpty(true);
    } else {
      if (data.select === "Música") {
        dispatch(findMusicThunk(input, setError));
      }
      if (data.select === "Álbum") {
        dispatch(findAlbumThunk(input, setError));
      }
      if (data.select === "Artist") {
        dispatch(findArtistThunk(input, setError));
      }
    }
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <input placeholder="Buscar por..." {...register("name")} />
        {errors.name && <Error>{errors.name.message}</Error>}
        <select {...register("select")}>
          {errors.name && <Error>{errors.name.message}</Error>}
          <option value="Música">Música</option>
          <option value="Álbum">Álbum</option>
          <option value="Artista">Artista</option>
        </select>
        <button type="submit">Buscar</button>
      </form>
      {empty && <Error>Nada digitado no input!</Error>}
      {error && <Error>Nada encontrado!</Error>}
    </>
  );
};

export default SearchForm;
