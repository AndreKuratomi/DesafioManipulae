import { Article, Image, Div } from "./styles";

const Cards = ({ elt, type }) => {
  return (
    <>
      {type === "albuns" && (
        <Article>
          <Image src={elt.album.cover_medium} />
          <Div>
            <p>{elt.artist.name}</p>
            <p>{elt.title}</p>
          </Div>
        </Article>
      )}
      {type === "artists" && (
        <Article>
          <h3>{elt.artist.name}</h3>
          <Image src={elt.artist.picture_medium} />
          <Div>
            <p>{elt.album.title}</p>
            <p>{elt.title}</p>
          </Div>
        </Article>
      )}
      {type === "musics" && (
        <Article>
          <p>{elt.title}</p>
          <Image src={elt.album.cover_medium} />
          <Div>
            <p>{elt.artist.name}</p>
          </Div>
        </Article>
      )}
    </>
  );
};

export default Cards;
