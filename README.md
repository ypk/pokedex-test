
# Maersk - Frontend Engineering Assignment

### Pokémon application

  
## Instructions

- Use any frontend technology of your choice, and feel free to use TypeScript if you’re comfortable with it!
- Must be accompanied by unit tests (any testing library of your choice)
- Should commit code to a public git repository (GitHub) under a public handle. Alternatively, you can send over a zip file (with .git folder included for history tracking).
- Use generic package names; **don't reference Maersk** or **any other Maersk brand**
- Commits should be incremental so that one can look at the commit log and make sense of how the code has progressed along with the test cases.
- Explain clearly on how to run the frontend in the submission in README.md file at the root of your project
- Don’t spend more than 3 - 4 hours on this assignment
- If you are not able to finish all the tasks - clearly mention the same in README.md. Submitted code should be functional to the extent of completion.

## Purpose

The purpose of this assignment is to assess the ability of developer to:

- Develop frontend using a popular modern frontend framework (Vue, React etc.)
- Write relevant unit test cases for the UI
- Follow clean code practices
- Make UI responsive to cater to standard mobile, tablet and desktop viewports
- UX and design will be taken into consideration - clean design, ease of use, accessibility and so on.

### Bonus points (good to have)
- Keyboard navigation
- Performance optimized code
- Linter configurations and pre-commit / pre-push hooks

  
## Scope

 - Create a web application to list all Pokémon and show paginated results
 - User should be shown the Pokémons in a **[card-based layout](https://rubygarage.org/blog/card-based-design-best-practices)** (click to see best practices)
 - Each card should contain the image of the Pokémon
	 - Name
	 - Height
	 - Weight
	 - List of abilities.
 - User should have option to choose the number of cards available per page available options are **10, 20** and **50**
 - User should be shown **previous** and **next** links - on both the top and the bottom of the page
 - User should be able to search through the Pokémon list **using the name and abilities**
 - User should be able to **sort the result by name, height and weight.**
 - Page refresh should maintain the sorting and search related data.
 - User should be taken to the details page and present all the information available for that Pokémon. The user should have a link to go back to the previous page
  
**REST API** documentation to be followed: **[PokeAPI v2](https://pokeapi.co/docs/v2)**

 You are free to use the **GraphQL** version of the API - if that is what you prefer!

**[PokeAPI - GraphQL v1 beta](https://pokeapi.co/docs/graphql)**

## Example service invocation

- Fetch list of first 20 Pokémons - **[https://pokeapi.co/api/v2/pokemon?limit=20&offset=0](https://pokeapi.co/api/v2/pokemon?limit=20&offset=0)**

- Each object in the response list has the URL which contains the details of the Pokémon which has to be invoked to fetch the details of the Pokémon.
- Image of each Pokémon will be the following key in the details API:
**sprites** > **other** > **official-artwork**
