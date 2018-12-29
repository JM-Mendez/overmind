export default () => [
  {
    code: `
export const search = pipe(
  setQuery,
  filterValidQuery,
  debounce(200),
  getSearchResult
)
`,
  },
]
