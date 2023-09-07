import { Chef, Meal, MealsDB } from "./types"
import chefsDB from "../database/chefs.json"
import { randomUUID } from "node:crypto"
import { writeFile } from "jsonfile"
import { RecipeModel } from "./recipe"
const CHEFS_DB_PATH = "./src/database/chefs.json"
const createUser = (data: Chef) => {
  const { name, favoriteMeals = [] } = data
  return {
    name,
    idChef: randomUUID(),
    favoriteMeals,
  }
}

abstract class ChefModel {
  static createChef = async (userData: any): Promise<any> => {
    const newChef = createUser(userData)
    const database = chefsDB as Chef[]
    database.push(newChef)
    writeFile(CHEFS_DB_PATH, database)
    return { status: true, idChef: newChef.idChef }
  }
  static addFavoriteMeal = async (
    objData: Chef,
    mealId: string
  ): Promise<boolean> => {
    const indexOfChef = chefsDB.findIndex(
      (chef) => chef.idChef === objData.idChef
    )
    if (indexOfChef === -1) return false
    const userFound = chefsDB[indexOfChef] as any
    const mealFound = await RecipeModel.getMealById(mealId)
    if (mealFound === null) return false

    const favoriteMeal = { ...mealFound.meals[0] }

    userFound.favoriteMeals.push(favoriteMeal)

    chefsDB.splice(indexOfChef, 1, userFound)
    writeFile(CHEFS_DB_PATH, chefsDB)
    return true
  }
}
export { ChefModel }
