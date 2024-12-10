---
# These are optional metadata elements. Feel free to remove any of them.
status: "{proposed | rejected | accepted | deprecated | … | superseded by ADR-0123"
date: {YYYY-MM-DD when the decision was last updated}
decision-makers: {list everyone involved in the decision}
consulted: {list everyone whose opinions are sought (typically subject-matter experts); and with whom there is a two-way communication}
informed: {list everyone who is kept up-to-date on progress; and with whom there is a one-way communication}
---

# Unit testing framework

## Context and Problem Statement

{We had to pick a framework to test our backend server functionality and controllers this mena tpicking a fast and easy solution to allow us to quickly produce tests for our code}

<!-- This is an optional element. Feel free to remove. -->
## Decision Drivers

* {Usability has to be quick to setup and easy to use}
* … <!-- numbers of drivers can vary -->

## Considered Options

* {JEST}
* {Manually}
* … <!-- numbers of options can vary -->

## Decision Outcome

Chosen option: "(Manually)", because (originally we tried to set up jest and get it woriing due to having previous experience with it howver it didnt work with the mysql packages we were using and seemed to not act in the way we wanted so we had to switch and settle for mnual unit testing.)

<!-- This is an optional element. Feel free to remove. -->
### Consequences

* Good, because {easy to do and understand as it all coded by us}
* Bad, because {more tedious to run the tests and make them perform how we would like}
* … <!-- numbers of consequences can vary -->

<!-- This is an optional element. Feel free to remove. -->
### Confirmation

{this will be confirmed with unit tests present in the folder unit testing}
