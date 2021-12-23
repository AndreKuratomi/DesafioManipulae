const ListArtists = () => {
  return (
    <ul>
      {artists.map((artist, index) => (
        <li key={index}>{artist}</li>
      ))}
    </ul>
  );
};

export default ListArtists;
