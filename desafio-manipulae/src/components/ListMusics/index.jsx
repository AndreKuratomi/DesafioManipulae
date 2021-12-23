const ListMusics = () => {
  return (
    <ul>
      {musics.map((music, index) => {
        <li key={index}>{music}</li>;
      })}
    </ul>
  );
};

export default ListMusics;
