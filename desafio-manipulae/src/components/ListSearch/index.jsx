const ListSearch = () => {
  return music ? (
    <ul>
      {musics.map((music, index) => (
        <li key={index}>{music}</li>
      ))}
    </ul>
  ) : artists ? (
    <ul>
      {artists.map((artist, index) => (
        <li key={index}>{artist}</li>
      ))}
    </ul>
  ) : (
    <ul>
      {albuns.map((album, index) => (
        <li key={index}>{album}</li>
      ))}
    </ul>
  );
};

export default ListSearch;
