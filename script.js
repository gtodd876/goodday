let instance = axios.create({
  baseURL:
    "https://www.pivotaltracker.com/services/v5/projects/2111883/stories/",
  timeout: 1000,
  headers: { "X-TrackerToken": "849f56353d70242c0a95548fc4b022cd" }
});

instance
  .get()
  .then(function(response) {
    let allStories = response.data;
    let todoStories = [];
    let reviewStories = [];
    let inprogressStories = [];
    let doneStories = [];
    organizeStories(
      allStories,
      todoStories,
      reviewStories,
      inprogressStories,
      doneStories
    );
    console.log(todoStories);

    displayStories(todoStories, reviewStories, inprogressStories, doneStories);
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

function displayStories(
  todoStories,
  reviewStories,
  inprogressStories,
  doneStories
) {
  todoStories.forEach(function(story) {
    $(".todo").append(story.name);
  });
  reviewStories.forEach(function(story) {
    $(".ready-for-review").append(story.name);
  });
  inprogressStories.forEach(function(story) {
    $(".in-progress").append(story.name);
  });
  doneStories.forEach(function(story) {
    $(".done").append(story.name);
  });
}

// inprogressStories = allStories.filter(function(story) {
//   return story.current_state === "started";
// });
// console.log(inprogressStories);
// reviewStories = allStories.filter(function(story) {
//   return story.current_state === "finished";
// });
// console.log(reviewStories);
// doneStories = allStories.filter(function(story) {
//   return (
//     story.current_state === "delivered" || story.current_state === "accepted"
//   );
// });
// console.log(doneStories);
// todoStories = allStories.filter(function(story) {
//   return (
//     story.current_state === "unscheduled" ||
//     story.current_state === "unstarted"
//   );
// });
// console.log(todoStories);
