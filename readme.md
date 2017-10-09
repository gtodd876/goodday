<h1 align="center"> PivotCards </h1> <br>
<p align="center">
    <img alt="Pivotcards" title="Pivotcards" src="https://drive.google.com/uc?id=0BzlYXvLQyegiUERESVhwWk9zM2M" width="150">
</p>

<p align="center">
  Do less work for your work. Powered by Pivotal Tracker API.
</p>


## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Configuration](#configuration)
- [Feedback](#feedback)


## Introduction
 I decided to take on this project to build a useful application that uses an remote API to update the DOM. Pivotal Tracker's API was a great choice as it is an amazing agile resource. It's been a blast learning the Pivotal Tracker API and quickly became a meta app making process. As it evolved, I was using the app I making to efficently make the app I'm using :) This process has also taught me the ins and outs of building a clean UI that is satisfying to use! 
 

<p align="center">
  <img src = "https://drive.google.com/uc?export=download&id=0BzlYXvLQyegieWNHV2ZEc2ZGQ28" width=450>
</p>
<p align="center">- Status badges update to reflect story status</p>

## Features

A few of the things you can do with PivotCards:

* View user stories including story name & gravtar of person completing task
* See which stories are <br>
Bugs (Red stripe on left border of card)<br>
Chores (Blue stripe on left border of card)<br>
Features (Yellow stripe on left border of card)<br>
* Story Badges to quickly tell if a story is: <br>
Unscheduled <br>
Unstarted <br>
Started <br>
Accepted <br>
Finished <br>
* Drag stories from one column to the next to easily change the stories state
* Simplified columns for "To Do", "In Progress", "Ready For Review, and "Done"
* Each story name is also direct link to the Pivotal Tracker URL for that story

* Responsive layout using CSS Grid


<p align="center">
  <img src = "https://drive.google.com/uc?export=download&id=0BzlYXvLQyegiaGE3cU1WWUN3WWs" width=700>
</p>
<p align="center">- Lighnting fast changes sync on the right in Pivotal Tracker</p>

## Configuration

After cloning this repo from Github, you will need to create a config.js file in the project's root folder containing:
```
var config = {
  MY_API_KEY: 'YOUR_API_KEY_FROM_PIVOTAL_TRACKER'
}
```
Your Pivotal Tracker API token can be located within your Profile settings at the bottom of the page.
<p align="center">
  <img src = "https://drive.google.com/uc?export=download&id=0BzlYXvLQyegiY2JDdDFvWGhaQUE" width=450>
</p>

## Feedback

Feel free to send me feedback on [Twitter](https://twitter.com/gtodd876). Feature requests are always welcome. 


