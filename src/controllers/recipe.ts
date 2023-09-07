import { RecipeModel } from "../models/recipe"
import { Meal, Ingredients, Categories, Area } from "../models/types"

abstract class RecipeController {
  static getAllMealsByCategory = async (): Promise<Meal> =>
    await RecipeModel.getAllMealsByCategory()

  static getMealByName = async (meal: string): Promise<Meal> =>
    await RecipeModel.getMealByName(meal)

  static getMealById = async (id: string): Promise<Meal> =>
    await RecipeModel.getMealById(id)

  static getRandomMeal = async (): Promise<Meal> =>
    await RecipeModel.getRandomMeal()

  static filterByMainIngredient = async (ingredient: string): Promise<Meal> =>
    await RecipeModel.filterByMainIngredient(ingredient)

  static filterByCategory = async (category: string): Promise<Meal> =>
    await RecipeModel.filterByCategory(category)

  static filterByArea = async (area: string): Promise<Meal> =>
    await RecipeModel.filterByArea(area)

  static listAll = async (
    listName: string
  ): Promise<Area | Categories | Ingredients> =>
    await RecipeModel.listAll(listName)
}
export { RecipeController }
