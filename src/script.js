const mealEnum = Object.freeze({
  dessert: 'doces e sobremesas',
  breakfast: 'café da manhã e lanches',
  lunch: 'almoço',
  sauce: 'molhos e patês',
  dinner: 'jantar',
  flourMilk: 'farinhas e leites'
})

const mealName = document.getElementById('meal-name')
const ingredientsLabel = document.getElementById('ingredients-label')
const ingredientsList = document.getElementById('ingredients-list')
const instructionsLabel = document.getElementById('instructions-label')
const instructionsContent = document.getElementById('instructions-content')
const mealTypeFilter = document.getElementById('meal-type-filter')
const glycemicFilter = document.getElementById('glycemic-filter')
const proteinFilter = document.getElementById('protein-filter')
const searchField = document.getElementById('search-field')
const searchButton = document.querySelector('#search-container button[type="submit"]')
const generateWeeklyPlanButton = document.getElementById('generate-weekly-plan-button')
const weeklyPlanContainer = document.getElementById('weekly-plan')
const adviceContainer = document.getElementById('education-container').querySelector('ul')
const challengesList = document.getElementById('challenges-container').querySelector('ul')

// eslint-disable-next-line no-undef
let filteredMeals = [...meals]

mealTypeFilter.addEventListener('change', applyFilters)
glycemicFilter.addEventListener('change', applyFilters)
proteinFilter.addEventListener('change', applyFilters)

searchField.addEventListener('change', e => {
  const searchedMeal = e.target.value.toLowerCase().trim()
  filteredMeals.forEach(filteredMeal => {
    if (filteredMeal.name.toLowerCase().includes(searchedMeal)) {
      showMealName(filteredMeal)
      showIngredients(filteredMeal.ingredients)
      showInstructions(filteredMeal.instructions)
    }
  })
})

searchButton.addEventListener('click', e => {
  if (searchField.value) {
    e.preventDefault()
    searchField.value = ''
    return
  }
  generateMeal()
})

generateWeeklyPlanButton.addEventListener('click', generateWeeklyPlan)

function applyFilters() {
  const selectedType = mealTypeFilter.value
  const selectedGlycemic = glycemicFilter.value
  const selectedProtein = proteinFilter.value

  filteredMeals = meals.filter(meal => {
    let typeMatch = selectedType === '' || meal.type === selectedType
    let glycemicMatch = selectedGlycemic === '' || (selectedGlycemic === 'lowGlycemic' ? meal.lowGlycemic : !meal.lowGlycemic)
    let proteinMatch = selectedProtein === '' ||
      (selectedProtein === 'highProtein' ? meal.nutrition && meal.nutrition.protein >= 10 : meal.nutrition && meal.nutrition.protein < 10)

    return typeMatch && glycemicMatch && proteinMatch
  })

  if (filteredMeals.length === 0) {
    mealName.innerHTML = 'Nenhuma receita encontrada'
    ingredientsList.innerHTML = ''
    instructionsContent.innerHTML = ''
  } else {
    generateMeal()
  }
}

function generateMeal() {
  const randomMeal = filteredMeals[Math.floor(Math.random() * filteredMeals.length)]
  showMealName(randomMeal)
  showIngredients(randomMeal.ingredients)
  showInstructions(randomMeal.instructions)
  searchField.value = ''
}

function showMealName(meal) {
  mealName.innerHTML = `${meal.name} (${mealEnum[meal.type]}`
  if (meal.nutrition) {
    if (meal.nutrition.protein >= 10) {
      mealName.innerHTML += ' com alto teor de proteína'
    } else if (meal.nutrition.protein < 10) {
      mealName.innerHTML += ' com baixo teor de proteína'
    }
  }
  mealName.innerHTML += ')'
  if (meal.nutrition) {
    mealName.innerHTML += showNutrition(meal.nutrition)
  }
}


function showIngredients(ingredients) {
  ingredientsList.innerHTML = ''
  for (const ingredient of ingredients) {
    const listItem = document.createElement('li')
    ingredientsLabel.innerHTML = 'Ingredientes:'
    listItem.innerHTML = ingredient
    ingredientsList.appendChild(listItem)
  }
}

function showInstructions(instructions) {
  instructionsLabel.innerHTML = 'Modo de Preparo:'
  instructionsContent.innerHTML = instructions
}

function showNutrition(nutrition) {
  const nutritionInfo = `
    <div id="nutrition-info">
      <p><strong>Calorias:</strong> ${nutrition.calories}</p>
      <p><strong>Carboidratos:</strong> ${nutrition.carbs}</p>
      <p><strong>Proteínas:</strong> ${nutrition.protein}g</p>
      <p><strong>Gorduras:</strong> ${nutrition.fat}</p>
      <p><strong>Fibras:</strong> ${nutrition.fiber}</p>
    </div>
  `
  return nutritionInfo
}

function generateWeeklyPlan() {
  const days = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo']
  const mealsPerDay = ['Café da Manhã', 'Lanche da Manhã', 'Almoço', 'Lanche da Tarde', 'Jantar', 'Lanche da Noite']
  const weeklyPlan = {}

  days.forEach(day => {
    weeklyPlan[day] = {}
    mealsPerDay.forEach(mealTime => {
      const mealType = getMealTypeForTime(mealTime)
      const mealsOfType = filteredMeals.filter(meal => meal.type === mealType)
      const randomMeal = mealsOfType[Math.floor(Math.random() * mealsOfType.length)]
      weeklyPlan[day][mealTime] = randomMeal
    })
  })

  showWeeklyPlan(weeklyPlan)
}

function getMealTypeForTime(mealTime) {
  switch (mealTime) {
  case 'Café da Manhã':
    return 'breakfast'
  case 'Lanche da Manhã':
  case 'Lanche da Tarde':
  case 'Lanche da Noite':
    return 'snack'
  case 'Almoço':
    return 'lunch'
  case 'Jantar':
    return 'dinner'
  default:
    return 'breakfast'
  }
}

function showWeeklyPlan(weeklyPlan) {
  weeklyPlanContainer.innerHTML = ''
  for (const day in weeklyPlan) {
    const dayDiv = document.createElement('div')
    dayDiv.className = 'day'
    dayDiv.innerHTML = `<h3>${day}</h3>`
    for (const mealTime in weeklyPlan[day]) {
      const meal = weeklyPlan[day][mealTime]
      const mealDiv = document.createElement('div')
      mealDiv.className = 'meal'
      mealDiv.innerHTML = `
        <h4>${mealTime}</h4>
        <p>${meal.name} (${mealEnum[meal.type]})</p>
        <p><strong>Ingredientes:</strong> ${meal.ingredients.join(', ')}</p>
        <p><strong>Modo de Preparo:</strong> ${meal.instructions}</p>
      `
      dayDiv.appendChild(mealDiv)
    }
    weeklyPlanContainer.appendChild(dayDiv)
  }
}

function generateDailyAdvice() {
  const dailyAdvices = [
    'Consuma alimentos ricos em fibras para melhorar a digestão.',
    'Beba bastante água ao longo do dia para manter-se hidratado.',
    'Faça refeições pequenas e frequentes para evitar picos de glicose.',
    'Inclua alimentos integrais na sua dieta para controlar melhor a glicemia.',
    'Evite bebidas açucaradas, prefira sucos naturais sem açúcar.',
    'Pratique atividades físicas regularmente para ajudar no controle da glicemia.',
    'Durma bem para manter os níveis de estresse baixos.',
    'Controle as porções para evitar excessos alimentares.',
    'Monitore seus níveis de glicose regularmente.',
    'Consulte seu médico regularmente para ajustar seu plano de tratamento.',
    'Mantenha um diário alimentar para monitorar o que você come.',
    'Faça exames de sangue regulares para acompanhar sua saúde.',
    'Reduza o consumo de alimentos processados.',
    'Inclua proteínas magras em suas refeições.',
    'Evite pular refeições para manter os níveis de glicose estáveis.',
    'Use ervas e especiarias para temperar suas refeições sem adicionar calorias.',
    'Escolha lanches saudáveis, como frutas e nozes.',
    'Mantenha-se ativo durante o dia, mesmo que seja com pequenas caminhadas.',
    'Planeje suas refeições com antecedência para evitar escolhas não saudáveis.',
    'Evite o estresse sempre que possível, pois ele pode afetar os níveis de glicose.',
    'Conheça os sinais de hipoglicemia e hiperglicemia para agir rapidamente.',
    'Participe de grupos de apoio para diabéticos para compartilhar experiências.',
    'Aprenda a ler rótulos de alimentos para fazer escolhas informadas.',
    'Experimente novas receitas saudáveis para variar seu cardápio.',
    'Fique atento ao tamanho das porções para evitar exageros.',
    'Mantenha contato regular com seu nutricionista para ajustar sua dieta.',
    'Priorize alimentos frescos em vez de congelados ou enlatados.',
    'Evite o consumo excessivo de álcool, que pode afetar os níveis de glicose.',
    'Inclua gorduras saudáveis, como abacate e azeite, na sua dieta.',
    'Mantenha um peso saudável para ajudar no controle da diabetes.',
    'Escove os dentes regularmente para evitar problemas bucais comuns em diabéticos.'
  ]

  const challenges = [
    'Consuma 5 porções de vegetais por dia.',
    'Caminhe 30 minutos por dia.',
    'Beba 2 litros de água por dia.',
    'Monitore níveis de glicose 3 vezes por dia.',
    'Evite alimentos processados por uma semana.',
    'Faça uma refeição saudável sem carne uma vez por semana.',
    'Durma pelo menos 7 horas por noite.',
    'Inclua uma porção de frutas em cada refeição.',
    'Reduza o consumo de sal nas refeições.',
    'Pratique meditação por 10 minutos diariamente.',
    'Corte o açúcar de sua dieta por uma semana.',
    'Experimente uma nova atividade física.',
    'Substitua o refrigerante por água ou chá por uma semana.',
    'Leve um lanche saudável para o trabalho todos os dias.',
    'Evite fast food por uma semana.',
    'Cozinhe todas as suas refeições em casa por uma semana.',
    'Adicione mais fibras à sua dieta.',
    'Evite comer tarde da noite.',
    'Faça alongamentos diariamente.',
    'Coma uma salada antes do almoço e do jantar.',
    'Registre seu humor e níveis de glicose todos os dias.',
    'Participe de uma aula de culinária saudável.',
    'Prepare suas refeições com antecedência para a semana.',
    'Evite bebidas alcoólicas por uma semana.',
    'Experimente um novo legume ou fruta cada semana.',
    'Corte alimentos fritos da sua dieta por uma semana.',
    'Faça exercícios de respiração diariamente.',
    'Evite alimentos ricos em carboidratos refinados.',
    'Pratique uma atividade ao ar livre.',
    'Aumente a ingestão de proteínas saudáveis.',
    'Faça check-ups regulares com seu médico.'
  ]

  const dayOfMonth = new Date().getDate()
  const adviceIndex = dayOfMonth % dailyAdvices.length
  const challengeIndex = dayOfMonth % challenges.length

  adviceContainer.innerHTML = generateListItems(dailyAdvices, adviceIndex)
  challengesList.innerHTML = generateListItems(challenges, challengeIndex, true)
}

function generateListItems(items, startIndex, withCheckbox = false) {
  let listItems = ''
  for (let i = 0; i < 5; i++) {
    const index = (startIndex + i) % items.length
    listItems += `<li>${withCheckbox ? '<input type="checkbox">' : ''} ${items[index]}</li>`
  }
  return listItems
}

window.onload = () => {
  generateMeal()
  generateDailyAdvice()
  remindGlucoseCheck()
}

function remindGlucoseCheck() {
  setTimeout(() => {
    alert('Lembrete: Verifique seus níveis de glicose no sangue!')
  }, 3600000) // Lembrete a cada 1 hora
}
