import { Article, Image, Div } from "./styles";

const CardMusics = ({ elt, type }) => {
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

export default CardMusics;
