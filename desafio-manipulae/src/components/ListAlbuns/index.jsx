const ListAlbuns = () => {
  return (
    <ul>
      {albuns.map((album, index) => (
        <li key={index}>{album}</li>
      ))}
    </ul>
  );
};

export default ListAlbuns;
