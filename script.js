let instance = axios.create({
  baseURL:
    "https://www.pivotaltracker.com/services/v5/projects/2111883/stories/",
  timeout: 1000,
  headers: { "X-TrackerToken": "849f56353d70242c0a95548fc4b022cd" }
});

let allStories = [];

instance
  .get()
  .then(function(response) {
    for (let i = 0; i < response.data.length; i++) {
      allStories.push(response);
      console.log(allStories);
      // switch (response.data[i].current_state) {
      //   case "unscheduled":
      //     $(".todo").append(
      //       "<div class='card'> <p>" + response.data[i].name + "</p> </div>"
      //     );
      //   case "unstarted":
      //     $(".todo").append(
      //       "<div class='card'> <p>" + response.data[i].name + "</p> </div>"
      //     );
      //     break;
      //   case "started":
      //     $(".in-progress").append(
      //       "<div class='card'> <p>" + response.data[i].name + "</p> </div>"
      //     );
      //     break;
      //   case "finished":
      //     $(".ready-for-review").append(
      //       "<div class='card'> <p>" + response.data[i].name + "</p> </div>"
      //     );
      //     break;
      //   case "delivered" || "accepted":
      //     $(".done").append(
      //       "<div class='card'> <p>" + response.data[i].name + "</p> </div>"
      //     );
      //     break;
      // }
      console.log(response.data[i].name + "-" + response.data[i].current_state);
    }
  })
  .catch(function(error) {
    console.log(error);
  });
