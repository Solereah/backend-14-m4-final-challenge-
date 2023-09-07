import { ChefModel } from "../models/chef"
import { Chef } from "../models/types"

abstract class ChefController {
  static createChef = async (userData: any): Promise<any> =>
    await ChefModel.createChef(userData)
  static addFavoriteMeal = async (
    objData: Chef,
    mealId: string
  ): Promise<boolean> => await ChefModel.addFavoriteMeal(objData, mealId)
}

export { ChefController }
