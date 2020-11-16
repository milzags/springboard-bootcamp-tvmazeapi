async function searchShows(showSearch) {
    let res = await axios.get(`http://api.tvmaze.com/search/shows?q=${showSearch}`);
    console.log(res.data);
    // map method is used to transform each element in the results array,
    // create a new array, and return the new array (array of objects). 
    let shows = res.data.map(result => {
        return {
            id: result.show.id,
            name: result.show.name,
            summary: result.show.summary,
        };
    });
    return shows;
}

const populateShow = (shows) => {
    let showsList = document.getElementById('shows-list');

}

