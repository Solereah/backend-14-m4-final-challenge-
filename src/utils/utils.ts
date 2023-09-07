const capitalize = (word: string) => {
  const capitalizeWord = word.charAt(0).toUpperCase() + word.slice(1)
  return capitalizeWord
}

export { capitalize }
