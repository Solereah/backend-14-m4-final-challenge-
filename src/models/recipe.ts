import { capitalize } from "../utils/utils"

const RECIPES_BASE_URL = `https://www.themealdb.com/api/json/v1/1/`

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
      `${RECIPES_BASE_URL}${searchParamsCategories}`
    )
    return result
  }

  static getMealByName = async (meal: string) => {
    const capitalizeParam = capitalize(meal)
    const searchParamsMeal = "search.php?s="
    const result = await fetchData(
      `${RECIPES_BASE_URL}${searchParamsMeal}${capitalizeParam}`
    )
    return result
  }

  static getMealById = async (id: string) => {
    const searchParamsId = "lookup.php?i="
    const result = await fetchData(`${RECIPES_BASE_URL}${searchParamsId}${id}`)
    return result
  }
  static getRandomMeal = async () => {
    const searchParamsRandom = "random.php"
    const result = await fetchData(`${RECIPES_BASE_URL}${searchParamsRandom}`)
    return result
  }
  static filterByMainIngredient = async (ingredient: string) => {
    const filterMainIngredient = "filter.php?i="
    const result = await fetchData(
      `${RECIPES_BASE_URL}${filterMainIngredient}${ingredient}`
    )
    return result
  }
  static filterByCategory = async (category: string) => {
    const capitalizeParam = capitalize(category)
    const filterCategory = "filter.php?c="
    const result = await fetchData(
      `${RECIPES_BASE_URL}${filterCategory}${capitalizeParam}`
    )
    return result
  }
  static filterByArea = async (area: string) => {
    const capitalizeParam = capitalize(area)
    const filterArea = "filter.php?a="
    const result = await fetchData(
      `${RECIPES_BASE_URL}${filterArea}${capitalizeParam}`
    )
    return result
  }
  static listAll = async (listName: string) => {
    const capitalizeList = capitalize(listName)
    if (capitalizeList === "Categories") {
      const listCategories = "list.php?c="
      const result = await fetchData(
        `${RECIPES_BASE_URL}${listCategories}${capitalizeList}`
      )
      return result
    }
    if (capitalizeList === "Ingredients") {
      const listIngredients = "list.php?i="
      const result = await fetchData(
        `${RECIPES_BASE_URL}${listIngredients}${capitalizeList}`
      )
      return result
    }
    if (capitalizeList === "Area") {
      const listArea = "list.php?a="
      const result = await fetchData(
        `${RECIPES_BASE_URL}${listArea}${capitalizeList}`
      )
      return result
    }
  }
}

//RecipeModel.getMealByName("shawarma").then((data) => console.log(data))
//RecipeModel.getAllMealsByCategory().then((data) => console.log(data))
//RecipeModel.getMealById("53028").then((data) => console.log(data))
//RecipeModel.listAll("area").then((data) => console.log(data))
export { RecipeModel }
