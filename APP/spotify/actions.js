const BASE_URL = "https://api.spotify.com/v1"


const searchArtist1 = async (http, { artist1 }) => {
  const config = {
    method: "get",
    url: `${BASE_URL}/search?q=artist:${artist1}&type=artist`,
  }
  
  return http(config).then((res) => res.data);
}

const searchArtist2 = async (http, { artist2 }) => {
  const config = {
    method: "get",
    url: `${BASE_URL}/search?q=artist:${artist2}&type=artist`,
  };

  return http(config).then((res) => res.data);
};

const searchArtist3 = async (http, { artist3 }) => {
  const config = {
    method: "get",
    url: `${BASE_URL}/search?q=artist:${artist3}&type=artist`,
  };

  return http(config).then((res) => res.data);
};

/// uses Spotify's Browse API to get song recommendations
const getRecommendations = async (http, { artistId1 , artistId2 , artistId3 }) => {
  const config = {
    method: "get",
    url: '${BASE_URL}/recommendations?seed_artists={{artistId1}},{{artistId2}},{{artistId3}}',
  };

  return http(config).then((res) => res.data);
};

module.exports = { searchArtist1, searchArtist2 , searchArtist3 ,  getRecommendations };

