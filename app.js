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
    // get the location where the shows will be dynamically added
    let $showsList = $('#shows-list');
    // clear the container where the shows are stored before we start adding to it
    $showsList.empty();

    for (let show of shows) {
        let $item = $(
          `<div class="col-md-4 col-lg-3 Show" data-show-id="${show.id}">
             <div class="card" data-show-id="${show.id}">
               <div class="card-body">
                 <h4 class="card-title">${show.name}</h4>
                 <p class="card-text">${show.summary}</p>
                 <button class="btn btn-primary get-episodes">Episodes</button>
               </div>
             </div>  
           </div>
          `);
    
        $showsList.append($item);
    }  
}

async function getEpisodes(showid) {
    let response = await axios.get(`http://api.tvmaze.com/shows/${showid}/episodes`);
    // console.log(response);

    let episodes = response.data.map(episode => {
        return {
            id : episode.id,
            name: episode.name,
            season: episode.season,
            number: episode.number,
        }
    });
    return episodes;
};

function populateEpisodes(episodes) {
    const $episodesList = $('#episodes-list');
    $episodesList.empty();

    for (let episode of episodes) {
        let $item = $(
            `<li>
                ${episode.name}, ${episode.season}, ${episode.number}
            </li>`
        );

        $episodesList.append($item);

    };

    $('#episodes-area').show();
}

$("#shows-list").on("click", ".get-episodes", async function handleEpisodeClick(evt) {
    let showId = $(evt.target).closest(".Show").data("show-id");
    let episodes = await getEpisodes(showId);
    populateEpisodes(episodes);
  });

