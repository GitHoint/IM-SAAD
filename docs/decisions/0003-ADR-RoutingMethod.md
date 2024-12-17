---
# These are optional metadata elements. Feel free to remove any of them.
status: "{proposed | rejected | accepted | deprecated | … | superseded by ADR-0123"
date: {YYYY-MM-DD when the decision was last updated}
decision-makers: {list everyone involved in the decision}
consulted: {list everyone whose opinions are sought (typically subject-matter experts); and with whom there is a two-way communication}
informed: {list everyone who is kept up-to-date on progress; and with whom there is a one-way communication}
---

# {Routing Method for Client Server Communciation}

## Context and Problem Statement

{We needed to decide between socket or traditional routing using gets and posts for our client server communication}

## Decision Drivers

* {User experience with the load times and latency and navigation ease}
* {Ease of production to allow for rapid develpement times}
* {allow for scalability and maintainablity for more services in future}


## Considered Options

* {SocketIO}
* {Gets/Posts - traditional HTTP}

## Decision Outcome

Chosen option: "{Gets/Posts}", because {it is much more consistent with our multi page app design we went for and the use of routes with gets and posts allows for a much more readable implementation which in turn allows for easier maintenance and easier aditions of new services}



