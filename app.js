async function searchShows(showSearch) {
    let res = await axios.get(`http://api.tvmaze.com/search/shows?q=${showSearch}`);
    
    let shows = res.data.map(result => {
        let show = result.show; 
        return {
            id: show.id,
            name: show.name,
            summary: show.summary,
        };
    });
    return shows;
}

// async function getEpisodeData(searchParam) {
//     let res = await axios.get(`http://api.tvmaze.com/shows/${searchParam}/episodes`);
//     return res;
// }

