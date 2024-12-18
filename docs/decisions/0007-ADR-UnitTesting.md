---
status: "{accepted}"
date: {2024-12-10}
decision-makers: {Patrick Newell(PM),Josh Osborne(Lead Dev), Oliver topley(Web Dev)}
consulted: {Patrick Newell(PM),Josh Osborne(Lead Dev), Oliver topley(Web Dev)}
informed: {Patrick Newell(PM),Josh Osborne(Lead Dev), Oliver topley(Web Dev)}
---

# Unit testing framework

## Context and Problem Statement

{We had to pick a framework to test our backend server functionality and controllers this mena tpicking a fast and easy solution to allow us to quickly produce tests for our code}

## Decision Drivers

* {Usability has to be quick to setup and easy to use}


## Considered Options

* {JEST}
* {Manually}


## Decision Outcome

Chosen option: "(Manually)", because (originally we tried to set up jest and get it woriing due to having previous experience with it howver it didnt work with the mysql packages we were using and seemed to not act in the way we wanted so we had to switch and settle for mnual unit testing.)


### Consequences

* Good, because {easy to do and understand as it all coded by us}
* Bad, because {more tedious to run the tests and make them perform how we would like}

### Confirmation

{this will be confirmed with unit tests present in the folder unit testing}
