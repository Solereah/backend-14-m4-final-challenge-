<h1 align="center"> ADA ITW - ¡BACKEND!</h1>

<h2 align="center">ChefVirtual</2>
<br>
  <img src="https://media.giphy.com/media/ToMjGpCfO0af8so8s5q/giphy.gif"></>

Bienvenido a la aplicación de recetas de cocina. Esta aplicación te permite descubrir y guardar tus recetas favoritas, planificar comidas y hacer que cocinar sea una experiencia divertida y deliciosa.

<h2>Características<h2>

- Explora una amplia variedad de recetas de cocina de todo el mundo.
- Guarda tus recetas favoritas para acceder a ellas fácilmente más tarde.
- Encuentra recetas por categoría, tipo de cocina o ingredientes.

<h2>Instalación</h2>

1. `Clona` o `descarga` este repositorio.
2. Abre la carpeta de la aplicación en tu entorno de desarrollo preferido.
3. Instala las dependencias usando el siguiente comando: `npm install`
4. Para correr la aplicación siempre se debe anteponer el siguiente comando: `npm run dev`

<h2>Requisitos</h2>

- Node.js
- NPM (Node Package Manager)

<h2>Comandos</h2>
<h3>Comandos relacionados a meal</h3>
<strong>npm run dev -- --meal --all </strong> ==> Lista todas las comidas por categorías
<br>
<strong>npm run dev -- --meal --random </strong> ==> Devuelve una receta al azar
<br>
<strong>npm run dev -- --meal --search --idMeal= </strong> ==> Busca una comida por el id  
<br>
<strong>npm run dev -- --meal --search --name= </strong> ==> Busca una comida por el nombre 
<br>
`npm run dev -- --meal --filter --firstLetter=` ==> Lista todas las comidas que comiencen con la primera letra
`npm run dev -- --meal --filter --mainIngredient=` ==> Lista todas las comidas que contengan ese ingrediente principal
`npm run dev -- --meal --filter --category=` ==> Lista todas las comidas segun la categoria
`npm run dev -- --meal --filter --area=` ==> Lista todas las comidas segun el area (canadian, italian, indian)
`npm run dev -- --meal --listAll --name=` ==> Lista todas las categories, areas e ingredients

<h3>Comando realacionados a user</h3>
`npm run dev -- --user --create --name=` ==> Crea un usuario, solo se necesita el nombre
`npm run dev -- --user --addFavorite --idUser= --idMeal=` ==> Agrega una receta favorita al listado de comidas favoritas de cada usuario
`npm run dev -- --user --deleteMeal --idUser= --idMeal=` ==> Borra una receta del listado de comidas favoritas de cada usuario
`npm run dev -- --user --deleteUser --idUser=` ==> Borra un usuario de la base de datos






