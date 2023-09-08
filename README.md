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

<h2>Parámetros de Línea de Comandos</h2>
<h3>Comandos relacionados a meal</h3>
<strong>npm run dev -- --meal --all </strong>   --> Lista todas las comidas por categorías
<br>
<strong>npm run dev -- --meal --random </strong>  --> Devuelve una receta al azar
<br>
<strong>npm run dev -- --meal --search --idMeal=52772 </strong> --> Busca una comida por el id  
<br>
<strong>npm run dev -- --meal --search --name=arrabiata </strong> --> Busca una comida por el nombre 
<br>
<strong>npm run dev -- --meal --filter --firstLetter=a  </strong>  --> Lista todas las comidas que comiencen con la primera letra
<br>
<strong>npm run dev -- --meal --filter --mainIngredient=chicken </strong>  --> Lista todas las comidas que contengan ese ingrediente principal
<br>
<strong>npm run dev -- --meal --filter --category=seafood </strong> --> Lista todas las comidas segun la categoria
<br>
<strong>npm run dev -- --meal --filter --area=canadian </strong>  --> Lista todas las comidas segun el area 
<br>
<strong>npm run dev -- --meal --listAll --name=categories </strong> --> Lista todas las categories, areas e ingredients

<h3>Comando realacionados a user</h3>
<strong>npm run dev -- --user --create --name=dolly </strong> --> Crea un usuario, solo se necesita el nombre
<br>
<strong>npm run dev -- --user --addFavorite --idUser=acd66d06-e032-4444-9641-0c53f53d4d34 --idMeal=53025 </strong> --> Agrega una receta favorita al listado de comidas favoritas de cada usuario
<br>
<strong>npm run dev -- --user --deleteMeal --idUser= --idMeal= </strong> --> Borra una receta del listado de comidas favoritas de cada usuario
<br>
<strong>npm run dev -- --user --deleteUser --idUser= </strong> --> Borra un usuario de la base de datos
