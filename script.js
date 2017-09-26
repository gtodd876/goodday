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
    let todoStories = [];
    let reviewStories = [];
    let inprogressStories = [];
    let doneStories = [];
    let allStories = response.data;
    organizeStories(
      allStories,
      todoStories,
      reviewStories,
      inprogressStories,
      doneStories
    );
    console.log(todoStories, "todoStories");
    console.log(inprogressStories, "inprogressStories");
    console.log(reviewStories, "reviewStories");
    console.log(doneStories, "doneStories");
  })
  .catch(function(error) {
    console.log(error);
  });

function organizeStories(
  allStories,
  todoStories,
  inprogressStories,
  reviewStories,
  doneStories
) {
  for (let i = 0; i < allStories.length; i++) {
    if (allStories[i].current_state === "started")
      inprogressStories.push(allStories[i]);
    if (allStories[i].current_state === "finished")
      reviewStories.push(allStories[i]);
    if (
      allStories[i].current_state === "delivered" ||
      allStories[i].current_state === "accepted"
    )
      doneStories.push(allStories[i]);
    if (
      allStories[i].current_state === "unscheduled" ||
      allStories[i].current_state === "unstarted"
    )
      todoStories.push(allStories[i]);
  }
}

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
// console.log(response.data[i].name + "-" + response.data[i].current_state);
// }
