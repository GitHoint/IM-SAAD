---
# These are optional metadata elements. Feel free to remove any of them.
status: "accepted"
date: {10/10/24 when the decision was last updated}
decision-makers: {Oliver Topley, Joshua Osborn, Patrick Newell}
consulted: {client}
informed: {client and the decision makers}
---

# Choice of Database

## Context and Problem Statement

We require a database to store the stock avaliable to borrow and the user data such as usernames, passwords and emails

<!-- This is an optional element. Feel free to remove. -->
## Decision Drivers

* Information contained within the database will be sensitive
* Needs strong security and encription
* the database will need to update regularly with stock information like which books are borrowed and who by


## Considered Options

* Mongo DB
* JSON file
* SQLite

## Decision Outcome

Mongo DB was chosen as it is a very versatile and allows for greater security functionality 

<!-- This is an optional element. Feel free to remove. -->
### Consequences

* Good, offers high speeds and high levels of scalibilty  
* Bad, Costly as large amounts of server will need to be obtained as it is very memory intensive
* … <!-- numbers of consequences can vary -->
