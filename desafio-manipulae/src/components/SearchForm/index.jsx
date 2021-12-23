import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";

const SearchForm = () => {

  const [] = useState("")
  const [input, setInput] = useState("")
  const [empty, setEmpty] = useState(false)
  const [error, setError] = useState(false)

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
        setEmpty(true)
    } else {
        // if data.select === Música {
            // dispatch(addMusicaThunk(input, setError))
        // }
            // if data.select === Álbum {
            // dispatch(addMusicaThunk(input, setError))
        // }
            // if data.select === Artist {
            // dispatch(addMusicaThunk(input, setError))
        // }
    }
    console.log(data)
  }

  return (
    <>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
            <input placeholder="Buscar por..." {...register("name")}/>
            {errors.name && {errors.name.message}}
            <select>
                <option value="Música">Música</option>
                <option value="Álbum">Álbum</option>
                <option value="Artista">Artista</option>
            </select>
            <button type="submit">Buscar</button>
        </form>
        {empty && <Error>Nada digitado no input!</Error>}
        {empty && <Error>Nada encontrado!</Error>}
    </>
  );
};

export default SearchForm