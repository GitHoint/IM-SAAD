---
# These are optional metadata elements. Feel free to remove any of them.
status: "{proposed | rejected | accepted | deprecated | … | superseded by ADR-0123"
date: {YYYY-MM-DD when the decision was last updated}
decision-makers: {list everyone involved in the decision}
consulted: {list everyone whose opinions are sought (typically subject-matter experts); and with whom there is a two-way communication}
informed: {list everyone who is kept up-to-date on progress; and with whom there is a one-way communication}
---

# Choice of Implementation Architectural style

## Context and Problem Statement

we had to choose an architectural style for our proof of conecpt that we would use as a team 

<!-- This is an optional element. Feel free to remove. -->
## Decision Drivers

* DD1 - we need something that will be modular and allow for parrallel programming of features and services
* DD2 - we need something highly scalable beyond just the proof of concept as this is a large crudding application
* DD3 - the proof of concept requires the interaction of a relational database with the software
* … <!-- numbers of drivers can vary -->

## Considered Options

* mvc - allows easy handling of relational data 
* client server - is straight forward but lacks modularity and a clear service creation approach
* service oriented - allows parrallel service creation but can be difficult for less experienced developers
* … <!-- numbers of options can vary -->

## Decision Outcome

we chose a mostly mvc approach obviosuly as it is a web application there will be a client server however the design of the software and the approach we will take to implement it is a mvc based approach in terms of the server class organisation and implementation.

<!-- This is an optional element. Feel free to remove. -->
### Consequences

* Good, because {easy to model heavy cruding appliactions and it allows for easy planning maintenance and scalability in future which this project needs}
* Bad, because {can be quite a slow approach that requires prior knowledge of its use to implement}

### Confirmation

the confirmation can be found in the proof of concept as well as in the stage 3 componenet diagram of our c4 model diagrams these outline how our proof of concept is implemented and show how the models and controllers interact with the overall system

