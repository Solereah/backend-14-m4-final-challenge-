import { Chef } from "./types"
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
const findUser = (idUser: string) => {
  const userFound = chefsDB.find((chef) => chef.idChef === idUser)
  return userFound
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
    idUser: string,
    idMeal: string
  ): Promise<boolean> => {
    const userFound = findUser(idUser) as any
    if (userFound === undefined) return false
    const indexOfChef = chefsDB.indexOf(userFound)

    const mealFound = await RecipeModel.getMealById(idMeal)
    if (mealFound === null) return false

    const favoriteMeal = { ...mealFound.meals[0] }
    userFound.favoriteMeals.push(favoriteMeal)

    chefsDB.splice(indexOfChef, 1, userFound)
    writeFile(CHEFS_DB_PATH, chefsDB)

    return true
  }
  static deleteUser = async (idUser: string) => {
    const userFound = findUser(idUser)
    if (userFound === undefined) return false

    const indexOfChef = chefsDB.indexOf(userFound)
    chefsDB.splice(indexOfChef, 1)
    writeFile(CHEFS_DB_PATH, chefsDB)

    return { status: true, idChef: userFound.idChef }
  }
  static deleteFavoriteMeal = async (
    idUser: string,
    idMeal: string
  ): Promise<boolean> => {
    const userFound = findUser(idUser) as any
    if (userFound === undefined) return false
    const indexOfChef = chefsDB.indexOf(userFound)

    const mealFound = await RecipeModel.getMealById(idMeal)
    if (mealFound === null) return false

    const favoriteMeal = { ...mealFound.meals[0] } as any
    const indexOfMeal = userFound.favoriteMeals.indexOf(favoriteMeal)
    userFound.favoriteMeals.splice(indexOfMeal, 1)

    chefsDB.splice(indexOfChef, 1, userFound)
    writeFile(CHEFS_DB_PATH, chefsDB)
    return true
  }
}
export { ChefModel }
