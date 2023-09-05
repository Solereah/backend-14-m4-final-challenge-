const BASE_RECIPES_URL = `https://www.themealdb.com/api/json/v1/1/`

class NetworkError extends Error {
  constructor(message: string) {
    super(message)

    this.name = "Network Error"
  }
}
const fetchData = async (url: string) => {
  try {
    const response = await fetch(url)

    if (!response.ok)
      throw new NetworkError(`Request fallo con status de ${response.status}`)
    const data = await response.json()

    return data
  } catch (error) {
    if (error instanceof NetworkError) {
      console.log("NetWork Error!", error.message)
      console.log(error.name)
      console.log(error.stack)
    } else {
      console.log("Error", error)
    }
  }
}

abstract class RecipeModel {
  static getAllMealsByCategory = async () => {
    const searchParamsCategories = "categories.php"
    const result = await fetchData(
      `${BASE_RECIPES_URL}${searchParamsCategories}`
    )
    return result
  }

  static getMealByName = async (meal: string) => {
    const searchParamsMeal = "search.php?s="
    const result = await fetchData(
      `${BASE_RECIPES_URL}${searchParamsMeal}${meal}`
    )
    return result
  }

  static getMealById = async (id: string) => {
    const searchParamsId = "lookup.php?i="
    const result = await fetchData(`${BASE_RECIPES_URL}${searchParamsId}${id}`)
    return result
  }
  static getRandomMeal = async () => {
    const searchParamsRandom = "random.php"
    const result = await fetchData(`${BASE_RECIPES_URL}${searchParamsRandom}`)
    return result
  }
  static filterByMainIngredient = async (ingredient: string) => {
    const filterMainIngredient = "filter.php?i="
    const result = await fetchData(
      `${BASE_RECIPES_URL}${filterMainIngredient}${ingredient}`
    )
    return result
  }
  static filterByCategory = async (category: string) => {
    const filterCategory = "filter.php?c="
    const result = await fetchData(
      `${BASE_RECIPES_URL}${filterCategory}${category}`
    )
    return result
  }
  static filterByArea = async (area: string) => {
    const filterArea = "filter.php?a="
    const result = await fetchData(`${BASE_RECIPES_URL}${filterArea}${area}`)
    return result
  }
  static listAll = async (listName: string) => {
    if (listName === "Categories") {
      const listCategories = "list.php?c=list"
      const result = await fetchData(
        `${BASE_RECIPES_URL}${listCategories}${listName}`
      )
      return result
    }
    if (listName === "Ingredients") {
      const listIngredients = "list.php?i=list"
      const result = await fetchData(
        `${BASE_RECIPES_URL}${listIngredients}${listName}`
      )
      return result
    }
    if (listName === "Area") {
      const listArea = "list.php?a=list"
      const result = await fetchData(
        `${BASE_RECIPES_URL}${listArea}${listName}`
      )
      return result
    }
  }
}

//RecipeModel.getMealByName("Shawarma").then((data) => console.log(data))
//RecipeModel.getAllMealsByCategory().then((data) => console.log(data))
//RecipeModel.getMealById("53028").then((data) => console.log(data))
export { RecipeModel }
