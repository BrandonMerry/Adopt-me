useBreedList- is a custom hook

Better to use Custom Hooks to encapsulate effects
dont do create Effect in your component - mak a custom hook

track status of your custom hook if you have to wait on sometnig ((async function))

react works on a real DOM & a 'fake'(virtural) DOM - REACT works on the virtural DOM
React figures out the minimal changes needed to be made to update the DOM & minamize cost of changes

-components -
if a unit of code is a single purpose, make it component
if a page is getting too big, make it into smaller components (eg SearchParams) 90 lines is long for a component

React Query - removes effects in your code, helps mainin minimal code - BETTER THAN useEffect
React Query - is great for API request instead of useEffect

useMutation allows you to post to a site
