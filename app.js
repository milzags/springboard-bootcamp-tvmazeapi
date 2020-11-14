async function searchShows(showSearch) {
    let res = await axios.get(`http://api.tvmaze.com/search/shows?q=${showSearch}`);
    console.log(res.data);
}

async function getEpisodeData(searchParam) {
    let res = await axios.get(`http://api.tvmaze.com/shows/${searchParam}/episodes`);
    return res;
}

