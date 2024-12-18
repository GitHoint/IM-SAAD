---
status: "accepted"
date: {17/11/24 when the decision was last updated}
decision-makers: {Oliver Topley, Joshua Osborn, Patrick Newell}
consulted: {developers}
informed: {developers and desicion makers}
---

# Choice of Database/Data storage

## Context and Problem Statement

We require a database/data store to store the stock avaliable to borrow and the user data such as usernames, passwords and emails
We need to decide upon whether that database is relaional or non relational so it is appropriate for the project.

<!-- This is an optional element. Feel free to remove. -->
## Decision Drivers

* Information contained within the database will be sensitive
* Needs strong security and encryption of passwords 
* the database will need to update regularly with stock information like which books are borrowed and who by
* the media borrowed will have relational data to users


## Considered Options

* Mongo DB - quick to implemnent and easy however non relational 
* server files - convenient and cheap however bulky and poor security
* mysql - relational however requires pricey server options for best security

## Decision Outcome

mySQL weas chosen as it is the sql pattern the team has worked with before as well as being relational allowing the relation of users 
and the media they have borrowed

<!-- This is an optional element. Feel free to remove. -->
### Consequences

* Good, very scalable and once setup is easy to manage
* Bad, Costly as large amounts of server will need to be obtained as the app is very storage intensive
* … <!-- numbers of consequences can vary -->
