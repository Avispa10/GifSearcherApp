export const getGifs = async (cat) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=ek78K1HNuhCIwN7Z144Xlj9v6E5zvF6a&q=${cat}&limit=20`;
  const response = await fetch(url);
  const { data } = await response.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  //console.log(gifs);
  return gifs;
};
