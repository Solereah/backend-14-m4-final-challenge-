import { ChefController } from "./controllers/chef"
import { RecipeController } from "./controllers/recipe"
import minimist from "minimist"
import { capitalize } from "./utils/utils"
const requestData = (params: any) => {
  const {
    meal,
    all,
    idMeal,
    search,
    name,
    random,
    filter,
    ingredient,
    category,
    area,
    listAll,
    user,
    create,
    capitalizeName,
    deleteMeal,
    deleteUser,
    idUser,
    addFavorite,
  } = params
  if (meal) {
    if (all) return RecipeController.getAllMealsByCategory()
    if (random) return RecipeController.getRandomMeal()
    if (search) {
      if (idMeal) return RecipeController.getMealById(idMeal)
      if (name) return RecipeController.getMealByName(name)
    }
    if (filter) {
      if (ingredient) return RecipeController.filterByMainIngredient(ingredient)
      if (category) return RecipeController.filterByCategory(category)
      if (area) return RecipeController.filterByArea(area)
    }
    if (listAll) {
      if (name === "area" || name === "categories" || name === "ingredients")
        return RecipeController.listAll(name)
    }
  }
  if (user) {
    if (create && capitalizeName)
      return ChefController.createChef({ name: capitalizeName })
    if (addFavorite && idUser && idMeal)
      return ChefController.addFavoriteMeal(idUser, idMeal)
    if (deleteMeal && idUser && idMeal)
      return ChefController.deleteFavoriteMeal(idUser, idMeal)
    if (deleteUser && idUser) return ChefController.deleteUser(idUser)
  }
}
const processParams = (params: any) => {
  const processedParameters = minimist(params)
  const {
    meal,
    all,
    idMeal,
    search,
    name,
    random,
    filter,
    ingredient,
    category,
    area,
    listAll,
    categories,
    ingredients,
    user,
    create,
    deleteMeal,
    idUser,
    deleteUser,
    addFavorite,
  } = processedParameters
  if (!meal && !user)
    return `Error los parámetros ingresados no son correctos, ingrese --user o --meal.`
  if (meal) {
    if (all) return { meal, all }
    if (random) return { meal, random }
    if (search) {
      if (idMeal) return { meal, search, idMeal }
      if (name) return { meal, search, name }
    }
    if (filter) {
      if (ingredient) return { meal, filter, ingredient }
      if (category) return { meal, filter, category }
      if (area) return { meal, filter, area }
    }
    if (listAll) {
      if (name !== "categories" && name !== "area" && name !== "ingredients")
        return `No se puede listar el parámetro ingresado porque no existe. Liste por categories, area o ingredients.`
      if (name === "categories") return { meal, listAll, name, categories }
      if (name === "area") return { meal, listAll, name, area }
      if (name === "ingredients") return { meal, listAll, name, ingredients }
    }
  }
  if (user) {
    if (create && name) {
      const capitalizeName = capitalize(name)
      return { user, create, capitalizeName }
    }
    if (create && !name) return `Error el nombre de usuario es requerido.`
    if (addFavorite && !idUser && !idMeal)
      return `Error el id de la receta y el usuario es requerido.`
    if (addFavorite && idUser && idMeal)
      return { user, addFavorite, idUser, idMeal }
    if (deleteMeal && !idUser && !idMeal)
      return `Error el id de la receta y el usuario es requerido.`
    if (deleteMeal && idUser && idMeal)
      return { user, deleteMeal, idUser, idMeal }
    if (deleteUser && !idUser) return `Error el id de usuario es requerido.`
    if (deleteUser && idUser) return { user, deleteUser, idUser }
  }
}

const main = () => {
  const params = process.argv.slice(2)
  const processedParameters = processParams(params)
  const result = requestData(processedParameters)
  result?.then((data) => console.log(data))
  console.log(processedParameters)
}

main()
