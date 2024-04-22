# Maersk - Frontend Engineering Assignment

## Pokémon application

## Instructions

_-_ Use any frontend technology of your choice, and feel free to use TypeScript if you’re comfortable with it!
_-_ Must be accompanied by unit tests (any testing library of your choice)
_-_ Should commit code to a public git repository (GitHub) under a public handle. Alternatively, you can send over
    a zip file (with .git folder included for history tracking).
_-_ Use generic package names; **don’t reference Maersk** or **any other Maersk brand**
_-_ Commits should be incremental so that one can look at the commit log and make sense of how the code has
    progressed along with the test cases.
_-_ Explain clearly on how to run the frontend in the submission in README.md file at the root of your project
_-_ Don’t spend more than 3 - 4 hours on this assignment
_-_ If you are not able to finish all the tasks - clearly mention the same in README.md. Submitted code should be
    functional to the extent of completion.

## Purpose

The purpose of this assignment is to assess the ability of developer to:

_-_ Develop frontend using a popular modern frontend framework (Vue, React etc.)
_-_ Write relevant unit test cases for the UI
_-_ Follow clean code practices
_-_ Make UI responsive to cater to standard mobile, tablet and desktop viewports
_-_ UX and design will be taken into consideration - clean design, ease of use, accessibility and so on.

```
Bonus points (good to have)
```
_-_ Keyboard navigation
_-_ Performance optimized code
_-_ Linter configurations and pre-commit / pre-push hooks

## Scope

_-_ Create a web application to list all Pokémon and show paginated results
_-_ User should be shown the Pokémons in a **card-based layout** (click to see best practices)
_-_ Each card should contain the image of the Pokémon
    _o_ Name
    _o_ Height
    _o_ Weight
    _o_ List of abilities.
_-_ User should have option to choose the number of cards available per page available
    options are **10, 20** and **50**
_-_ User should be shown **previous** and **next** links - on both the top
    and the bottom of the page
_-_ User should be able to search through the Pokémon list **using the name and abilities**
_-_ User should be able to **sort the result by name, height and weight.**


_-_ Page refresh should maintain the sorting and search related data.
_-_ User should be taken to the details page and present all the information available for
    that Pokémon. The user should have a link to go back to the previous page.

**REST API** documentation to be followed: **PokeAPI v**

You are free to use the **GraphQL** version of the API - if that is what you prefer!

```
PokeAPI - GraphQL v1 beta
```
## Example service invocation

_-_ Fetch list of first 20 Pokémons - **https://pokeapi.co/api/v2/pokemon?limit=20&offset=**
_-_ Each object in the response list has the URL which contains the details of the Pokémon which has to be invoked
    to fetch the details of the Pokémon.
_-_ Image of each Pokémon will be the following key in the details API:
    **sprites** > **other** > **official-artwork**