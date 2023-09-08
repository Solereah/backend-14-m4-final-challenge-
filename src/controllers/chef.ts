import { ChefModel } from "../models/chef"

abstract class ChefController {
  static createChef = async (userData: any): Promise<any> =>
    await ChefModel.createChef(userData)
  static addFavoriteMeal = async (
    userId: string,
    mealId: string
  ): Promise<boolean> => await ChefModel.addFavoriteMeal(userId, mealId)

  static deleteUser = async (userId: string) =>
    await ChefModel.deleteUser(userId)

  static deleteFavoriteMeal = async (
    userId: string,
    mealId: string
  ): Promise<boolean> => await ChefModel.deleteFavoriteMeal(userId, mealId)
}

export { ChefController }
