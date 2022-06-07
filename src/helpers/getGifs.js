const getGifs = async ( category ) => {
    const apiKey = 'vnqVb9PVNI62doiA7GZ6KFre2ms4BUDL';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${ apiKey }&q=${ encodeURI(category) }&limit=10`;
    const resp = await fetch( url );
    const {data} = await resp.json();
    const gifs = data.map((imagen) => ({
        id: imagen.id,
        title: imagen.title,
        image: imagen.images?.downsized.url
    }));
    return gifs;
}

export default getGifs;