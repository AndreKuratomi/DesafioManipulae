import { Article, Image, Div } from "./styles";

const CardAlbuns = ({ elt, type }) => {
  return (
    <>
      <Article>
        <Image src={elt.img} elt={elt.name} />
        <Div>
          <p>{elt.name}</p>
          <p>{elt.level}</p>
        </Div>
      </Article>
    </>
  );
};

export default CardAlbuns;
