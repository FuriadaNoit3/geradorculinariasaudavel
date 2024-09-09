const meals = [
  // Receitas existentes
  {
    name: 'Torta de Limão Cremosa',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '300g de farelo de aveia',
      '100g de manteiga (ou óleo de coco)',
      'Mousse:',
      '2 latas de leite condensado diet',
      'Suco puro de 4 limões grandes'
    ],
    nutrition: {
      calories: 250,
      carbs: '30g',
      protein: '5g',
      fat: '10g',
      fiber: '5g'
    },
    instructions: `
    Base:
    • Triture o farelo de aveia no liquidificador ou processador.
    • Derreta a manteiga (ou óleo de coco) e misture com o farelo de aveia até obter uma massa homogênea.
    • Forre uma forma de fundo removível com essa mistura, pressionando bem no fundo e nas laterais.
    • Asse em forno pré-aquecido a 180°C por cerca de 8 minutos. Deixe esfriar.
    
    Mousse:
    • Misture bem o leite condensado diet com o suco dos limões até obter um creme homogêneo.
    • Despeje essa mistura sobre a base de aveia já assada e resfriada.
    • Leve à geladeira por pelo menos 1 hora antes de servir.
    `
  },
  {
    name: 'Bolo Gelado de Coco',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1/2 xícara de manteiga ou óleo de coco',
      '4 gemas e 4 claras',
      '1 xícara de adoçante culinário ou xilitol',
      '1 e 1/2 xícara de farelo de aveia ou farinha de coco',
      '1 xícara de leite desnatado ou vegetal',
      '1 colher de sopa de fermento em pó',
      'Cobertura:',
      '1/2 caixinha de creme de leite light',
      '1 caixinha de leite condensado zero açúcar',
      '1 colher de sopa de manteiga'
    ],
    nutrition: {
      calories: 200,
      carbs: '20g',
      protein: '6g',
      fat: '15g',
      fiber: '6g'
    },
    instructions: `
    • Em uma vasilha, misture a manteiga ou óleo de coco, as gemas e o xilitol até virar um creme.
    • Adicione a farinha e 1 xícara de leite, misture bem.
    • Bata as claras em neve e misture à massa.
    • Adicione o fermento em pó, misture bem.
    • Unte uma forma com manteiga e farinha e despeje a massa.
    • Asse em forno pré-aquecido a 180°C por 30 minutos.
    
    Cobertura:
    • Em um recipiente, misture o leite condensado, a caixinha de creme de leite e a manteiga.
    • Mexa em fogo baixo até começar a borbulhar.
    • Despeje sobre o bolo e leve à geladeira por 1 hora. Salpique coco ralado e sirva.
    `
  },
  {
    name: 'Bolo Nega Maluca Fácil',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '3 ovos',
      '5 colheres de sopa de manteiga derretida',
      '3 colheres de sopa de xilitol',
      '1/2 xícara de leite desnatado ou vegetal',
      '3 colheres de sopa de cacau em pó',
      '1 e 1/2 xícara de farinha de coco ou farelo de aveia',
      '1 colher de sopa de fermento em pó'
    ],
    nutrition: {
      calories: 180,
      carbs: '15g',
      protein: '7g',
      fat: '12g',
      fiber: '4g'
    },
    instructions: `
    • Bata no liquidificador todos os ingredientes líquidos por 3 minutos.
    • Adicione os ingredientes secos (menos o fermento) e bata novamente até misturar bem.
    • Adicione o fermento e misture delicadamente.
    • Unte uma forma com manteiga e cacau em pó, despeje a massa.
    • Asse em forno pré-aquecido a 180°C por aproximadamente 25 minutos.
    `
  },
  {
    name: 'Bolo de Brigadeiro Super Fácil',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '3 ovos',
      '5 colheres de sopa de manteiga derretida',
      '3 colheres de sopa cheias de xilitol',
      '1/2 xícara de leite desnatado ou vegetal',
      '3 colheres de sopa de cacau em pó',
      '1 e 1/2 xícara de farinha de coco ou farelo de aveia',
      '1 colher de sopa de fermento em pó',
      'Brigadeiro:',
      '1 ½ caixinha de leite condensado zero açúcar',
      '3 colheres de sopa de cacau em pó',
      '2 colheres de sopa de manteiga ou óleo de coco'
    ],
    nutrition: {
      calories: 220,
      carbs: '18g',
      protein: '8g',
      fat: '14g',
      fiber: '5g'
    },
    instructions: `
    • Bata no liquidificador todos os ingredientes líquidos por 3 minutos.
    • Adicione os ingredientes secos (menos o fermento) e bata novamente até misturar bem.
    • Adicione o fermento e misture delicadamente.
    • Unte uma forma com manteiga e cacau em pó, despeje a massa.
    • Asse em forno pré-aquecido a 180°C por aproximadamente 25 minutos.
    
    Brigadeiro:
    • Mexa todos os ingredientes em fogo baixo por aproximadamente 10 minutos até desgrudar do fundo da panela.
    • Corte o bolo em três partes iguais e recheie com o brigadeiro. Utilize o restante como cobertura.
    `
  },
  {
    name: 'Bolo de Chocolate e Limão Delicioso',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '3 ovos grandes',
      '1/2 xícara de manteiga derretida ou óleo de coco',
      '1 xícara de leite vegetal ou desnatado',
      '1/2 xícara de xilitol',
      '2 xícaras de farinha de coco ou farelo de aveia',
      '1 colher de sopa cheia de fermento em pó',
      '3 colheres de sopa de cacau em pó',
      'Mousse de Limão:',
      '2 caixinhas de leite condensado zero açúcar',
      '1 caixinha de creme de leite light',
      'Suco puro de 3 limões grandes'
    ],
    nutrition: {
      calories: 230,
      carbs: '20g',
      protein: '7g',
      fat: '13g',
      fiber: '6g'
    },
    instructions: `
    • Adicione os ovos, a manteiga, o leite e o xilitol no liquidificador e bata por 4 minutos.
    • Adicione a farinha e o cacau em pó, bata por 30 segundos.
    • Adicione o fermento e misture delicadamente.
    • Unte uma forma com manteiga e cacau em pó, despeje a massa.
    • Asse em forno pré-aquecido a 180°C por 25 minutos. Deixe esfriar.
    
    Mousse de Limão:
    • Bata todos os ingredientes do mousse no liquidificador e reserve.
    • Corte o bolo em duas partes iguais e recheie com o mousse. Deixe na geladeira por 15 minutos antes de servir.
    `
  },
  {
    name: 'Suflê de Chocolate',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '200g de chocolate 80% cacau',
      '200g de adoçante culinário',
      '200g de manteiga',
      '4 gemas de ovos',
      '4 claras de ovos em neve'
    ],
    nutrition: {
      calories: 250,
      carbs: '15g',
      protein: '8g',
      fat: '20g',
      fiber: '6g'
    },
    instructions: `
    • Derreta o chocolate junto com a manteiga em banho-maria. Reserve e deixe esfriar.
    • Bata as gemas com o adoçante até obter uma mistura leve e fofa.
    • Adicione a mistura de chocolate e manteiga às gemas batidas e misture bem.
    • Bata as claras em neve e incorpore delicadamente à mistura.
    • Distribua a massa em forminhas de suflê untadas.
    • Asse em forno pré-aquecido a 200°C por 12 minutos ou até que os suflês estejam crescidos e firmes na superfície.
    `
  },
  {
    name: 'Mousse de Chocolate',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '200g de chocolate 80% cacau',
      '4 claras de ovos',
      '4 gemas de ovos',
      '100g de adoçante culinário'
    ],
    nutrition: {
      calories: 180,
      carbs: '10g',
      protein: '5g',
      fat: '15g',
      fiber: '4g'
    },
    instructions: `
    • Derreta o chocolate em banho-maria. Reserve e deixe esfriar.
    • Bata as claras em neve com metade do adoçante. Reserve.
    • Bata as gemas com o restante do adoçante até obter uma mistura clara e fofa.
    • Incorpore o chocolate derretido às gemas batidas.
    • Adicione as claras em neve delicadamente à mistura de chocolate e gemas.
    • Distribua a mousse em taças individuais e leve à geladeira por no mínimo 2 horas antes de servir.
    `
  },
  {
    name: 'Pavê de Chocolate com Morango',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '200g de chocolate 80% cacau',
      '1 lata de creme de leite light',
      '2 caixas de morangos frescos',
      '1 pacote de biscoito champanhe diet'
    ],
    nutrition: {
      calories: 200,
      carbs: '25g',
      protein: '4g',
      fat: '10g',
      fiber: '4g'
    },
    instructions: `
    • Derreta o chocolate em banho-maria e misture com o creme de leite. Reserve.
    • Lave e corte os morangos em pedaços.
    • Em um refratário, faça camadas de biscoito, creme de chocolate e morangos.
    • Leve à geladeira por pelo menos 2 horas antes de servir.
    `
  },
  {
    name: 'Pudim de Coco',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 litro de leite de coco',
      '1 lata de leite condensado diet',
      '1 pacote de gelatina sem sabor',
      '100g de coco ralado sem açúcar'
    ],
    nutrition: {
      calories: 150,
      carbs: '20g',
      protein: '3g',
      fat: '8g',
      fiber: '6g'
    },
    instructions: `
    • Hidrate a gelatina conforme as instruções da embalagem.
    • Aqueça o leite de coco e adicione a gelatina hidratada, mexendo até dissolver completamente.
    • Adicione o leite condensado diet e o coco ralado, misturando bem.
    • Despeje a mistura em uma forma de pudim e leve à geladeira por pelo menos 4 horas ou até firmar.
    `
  },
  {
    name: 'Manjar de Coco com Ameixa',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 litro de leite de coco',
      '1 lata de leite condensado diet',
      '1 pacote de gelatina sem sabor',
      '100g de coco ralado sem açúcar',
      '1 xícara de ameixas secas'
    ],
    nutrition: {
      calories: 160,
      carbs: '25g',
      protein: '3g',
      fat: '8g',
      fiber: '7g'
    },
    instructions: `
    • Hidrate a gelatina conforme as instruções da embalagem.
    • Aqueça o leite de coco e adicione a gelatina hidratada, mexendo até dissolver completamente.
    • Adicione o leite condensado diet e o coco ralado, misturando bem.
    • Despeje a mistura em uma forma de pudim e leve à geladeira por pelo menos 4 horas ou até firmar.
    • Sirva com as ameixas secas por cima.
    `
  },
  // Novas receitas fornecidas
  {
    name: 'Trufinhas Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '200g de chocolate 80% cacau derretido',
      '1/2 xícara de creme de leite light',
      '1/4 xícara de xilitol',
      '1 colher de chá de essência de baunilha'
    ],
    nutrition: {
      calories: 60,
      carbs: '2g',
      protein: '1g',
      fat: '5g',
      fiber: '1g'
    },
    instructions: `
    • Derreta o chocolate em banho-maria.
    • Misture o creme de leite, o xilitol e a essência de baunilha ao chocolate derretido.
    • Leve à geladeira por 2 horas ou até firmar.
    • Modele as trufas e passe no cacau em pó ou coco ralado.
    • Armazene na geladeira até servir.
    `
  },
  {
    name: 'Flan de Chocolate',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500ml de leite desnatado ou vegetal',
      '4 colheres de sopa de cacau em pó',
      '1/4 xícara de xilitol',
      '1 colher de chá de essência de baunilha',
      '1 pacote de gelatina sem sabor'
    ],
    nutrition: {
      calories: 50,
      carbs: '4g',
      protein: '2g',
      fat: '2g',
      fiber: '1g'
    },
    instructions: `
    • Hidrate a gelatina conforme as instruções da embalagem.
    • Aqueça o leite, o cacau em pó, o xilitol e a essência de baunilha em uma panela.
    • Adicione a gelatina hidratada à mistura e mexa bem até dissolver completamente.
    • Despeje em formas individuais e leve à geladeira por 4 horas ou até firmar.
    `
  },
  {
    name: 'Surpresa de Uva Verde',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '200g de uvas verdes sem sementes',
      '1 xícara de creme de leite light',
      '1/2 xícara de leite condensado diet',
      '1/4 xícara de xilitol',
      '1 colher de chá de essência de baunilha'
    ],
    nutrition: {
      calories: 70,
      carbs: '6g',
      protein: '1g',
      fat: '4g',
      fiber: '1g'
    },
    instructions: `
    • Misture o creme de leite, o leite condensado diet, o xilitol e a essência de baunilha em uma tigela.
    • Coloque as uvas verdes em taças individuais.
    • Despeje a mistura sobre as uvas.
    • Leve à geladeira por 2 horas antes de servir.
    `
  },
  {
    name: 'Trufa de Banana',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 bananas maduras',
      '200g de chocolate 80% cacau derretido',
      '1/4 xícara de xilitol',
      '1 colher de chá de essência de baunilha'
    ],
    nutrition: {
      calories: 70,
      carbs: '5g',
      protein: '1g',
      fat: '4g',
      fiber: '2g'
    },
    instructions: `
    • Amasse as bananas e misture com o xilitol e a essência de baunilha.
    • Derreta o chocolate e adicione à mistura de banana, mexendo bem.
    • Leve à geladeira por 2 horas ou até firmar.
    • Modele as trufas e passe no cacau em pó.
    • Armazene na geladeira até servir.
    `
  },
  {
    name: 'Bombom de Morango com Leite em Pó',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '200g de morangos frescos',
      '1 xícara de leite em pó desnatado',
      '1/2 xícara de xilitol',
      '1/2 xícara de creme de leite light',
      '200g de chocolate 80% cacau derretido'
    ],
    nutrition: {
      calories: 80,
      carbs: '6g',
      protein: '2g',
      fat: '5g',
      fiber: '2g'
    },
    instructions: `
    • Misture o leite em pó, o xilitol e o creme de leite até obter uma massa homogênea.
    • Lave e seque bem os morangos.
    • Envolva cada morango com a massa de leite em pó.
    • Derreta o chocolate e cubra os morangos com ele.
    • Leve à geladeira por 2 horas antes de servir.
    `
  },
  {
    name: 'Brigadeiro de Pasta de Amendoim',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de pasta de amendoim integral sem açúcar',
      '1/2 xícara de xilitol',
      '1/4 xícara de cacau em pó',
      '1/4 xícara de leite de amêndoas'
    ],
    nutrition: {
      calories: 100,
      carbs: '4g',
      protein: '3g',
      fat: '8g',
      fiber: '2g'
    },
    instructions: `
    • Misture todos os ingredientes em uma panela.
    • Cozinhe em fogo baixo, mexendo sempre, até desgrudar do fundo da panela.
    • Deixe esfriar e leve à geladeira por 2 horas.
    • Modele os brigadeiros e passe no cacau em pó ou coco ralado.
    `
  },
  {
    name: 'Bombom Vegano de Figo',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '200g de figos secos',
      '200g de chocolate 80% cacau derretido',
      '1/4 xícara de xilitol'
    ],
    nutrition: {
      calories: 90,
      carbs: '12g',
      protein: '1g',
      fat: '4g',
      fiber: '3g'
    },
    instructions: `
    • Bata os figos secos no processador até formar uma pasta.
    • Derreta o chocolate e misture com o xilitol.
    • Modele os figos em pequenas bolas e cubra com o chocolate derretido.
    • Leve à geladeira por 2 horas antes de servir.
    `
  },
  {
    name: 'Sonho de Valsa Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '200g de castanha de caju triturada',
      '1/2 xícara de xilitol',
      '200g de chocolate 80% cacau derretido',
      '1/2 xícara de creme de leite light'
    ],
    nutrition: {
      calories: 100,
      carbs: '5g',
      protein: '2g',
      fat: '8g',
      fiber: '2g'
    },
    instructions: `
    • Misture a castanha de caju triturada com o xilitol e o creme de leite até obter uma massa homogênea.
    • Modele em pequenas bolinhas e passe no chocolate derretido.
    • Leve à geladeira por 2 horas antes de servir.
    `
  },
  {
    name: 'Geleia de Laranja',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 laranjas médias',
      '1 xícara de chá de xilitol',
      'Suco de 1 limão'
    ],
    nutrition: {
      calories: 40,
      carbs: '10g',
      protein: '1g',
      fat: '0g',
      fiber: '2g'
    },
    instructions: `
    • Descasque as laranjas e retire as sementes. Pique em pedaços pequenos.
    • Coloque as laranjas, o xilitol e o suco de limão em uma panela.
    • Cozinhe em fogo baixo, mexendo ocasionalmente, até atingir a consistência de geleia (cerca de 30-40 minutos).
    • Deixe esfriar e armazene em um recipiente hermético na geladeira.
    `
  },
  {
    name: 'Crepe Paleo de Coco',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de leite de coco',
      '2 ovos',
      '1/2 xícara de farinha de coco',
      '1 colher de sopa de xilitol',
      '1 colher de chá de essência de baunilha'
    ],
    nutrition: {
      calories: 90,
      carbs: '8g',
      protein: '3g',
      fat: '6g',
      fiber: '3g'
    },
    instructions: `
    • Misture todos os ingredientes em um bowl até obter uma massa homogênea.
    • Aqueça uma frigideira antiaderente e despeje pequenas porções da massa, espalhando bem.
    • Cozinhe em fogo médio até as bordas começarem a soltar, vire e cozinhe do outro lado.
    • Sirva com frutas frescas ou geleia sem açúcar.
    `
  },
  {
    name: 'Creme de Confeiteiro Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 xícaras de leite de amêndoas',
      '4 gemas',
      '1/2 xícara de xilitol',
      '1 colher de sopa de essência de baunilha',
      '2 colheres de sopa de farinha de amêndoas'
    ],
    nutrition: {
      calories: 80,
      carbs: '5g',
      protein: '3g',
      fat: '5g',
      fiber: '2g'
    },
    instructions: `
    • Aqueça o leite de amêndoas em uma panela.
    • Em uma tigela, bata as gemas com o xilitol e a farinha de amêndoas até obter um creme.
    • Adicione uma parte do leite quente ao creme de gemas, mexendo bem.
    • Volte a mistura para a panela e cozinhe em fogo baixo, mexendo sempre, até engrossar.
    • Retire do fogo, adicione a essência de baunilha e deixe esfriar antes de usar.
    `
  },
  {
    name: 'Beijinho Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 caixinha de leite condensado zero açúcar',
      '1/2 colher (sopa) de manteiga',
      '1/2 xícara (chá) de leite desnatado ou vegetal',
      '150g de coco seco ralado sem açúcar',
      '1 e 1/2 colher (sopa) de xilitol'
    ],
    nutrition: {
      calories: 70,
      carbs: '6g',
      protein: '1g',
      fat: '4g',
      fiber: '2g'
    },
    instructions: `
    • Misture todos os ingredientes em uma panela e leve ao fogo baixo, mexendo sempre, até soltar do fundo da panela.
    • Despeje em um refratário untado com manteiga e alise a superfície.
    • Deixe esfriar e modele os beijinhos. Passe no coco ralado antes de servir.
    `
  },
  {
    name: 'Geleia de Jabuticaba',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de jabuticabas',
      '1 xícara de chá de xilitol',
      'Suco de 1 limão'
    ],
    nutrition: {
      calories: 50,
      carbs: '12g',
      protein: '1g',
      fat: '0g',
      fiber: '3g'
    },
    instructions: `
    • Lave bem as jabuticabas e coloque em uma panela.
    • Adicione o xilitol e o suco de limão.
    • Cozinhe em fogo baixo, mexendo ocasionalmente, até atingir a consistência de geleia (cerca de 30-40 minutos).
    • Deixe esfriar e armazene em um recipiente hermético na geladeira.
    `
  },
  {
    name: 'Nutella Caseira Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '200g de avelãs torradas',
      '2 colheres de sopa de cacau em pó',
      '1/4 xícara de xilitol',
      '1 colher de chá de essência de baunilha',
      '1/4 xícara de óleo de coco derretido'
    ],
    nutrition: {
      calories: 100,
      carbs: '5g',
      protein: '2g',
      fat: '9g',
      fiber: '3g'
    },
    instructions: `
    • Bata as avelãs no processador até formar uma pasta.
    • Adicione o cacau em pó, o xilitol, a essência de baunilha e o óleo de coco.
    • Bata até obter uma mistura homogênea e cremosa.
    • Armazene em um recipiente hermético na geladeira.
    `
  },
  {
    name: 'Mousse de Maracujá Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 maracujás',
      '1 xícara de creme de leite light',
      '1/2 xícara de leite condensado diet',
      '1/4 xícara de xilitol'
    ],
    nutrition: {
      calories: 90,
      carbs: '8g',
      protein: '1g',
      fat: '6g',
      fiber: '2g'
    },
    instructions: `
    • Bata a polpa dos maracujás no liquidificador e coe para retirar as sementes.
    • Misture o suco de maracujá com o creme de leite, o leite condensado e o xilitol até obter uma mistura homogênea.
    • Despeje em taças e leve à geladeira por 2 horas antes de servir.
    `
  },
  {
    name: 'Pavê de Limão Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 pacote de biscoito integral sem açúcar',
      '1 xícara de leite condensado diet',
      '1/2 xícara de suco de limão',
      '1 xícara de creme de leite light',
      'Raspas de limão para decorar'
    ],
    nutrition: {
      calories: 120,
      carbs: '12g',
      protein: '3g',
      fat: '7g',
      fiber: '3g'
    },
    instructions: `
    • Misture o leite condensado com o suco de limão até engrossar.
    • Adicione o creme de leite e misture bem.
    • Em um refratário, faça camadas de biscoito e creme de limão.
    • Decore com raspas de limão e leve à geladeira por 2 horas antes de servir.
    `
  },
  {
    name: 'Gelatina de Hibisco',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 litro de chá de hibisco (bem concentrado)',
      '2 colheres de sopa de xilitol',
      '1 pacote de gelatina sem sabor'
    ],
    nutrition: {
      calories: 30,
      carbs: '6g',
      protein: '1g',
      fat: '0g',
      fiber: '0g'
    },
    instructions: `
    • Prepare a gelatina conforme as instruções da embalagem.
    • Misture a gelatina hidratada com o chá de hibisco e o xilitol.
    • Despeje em formas individuais e leve à geladeira por 4 horas ou até firmar.
    `
  },
  {
    name: 'Torta de Morango Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de farinha de amêndoas',
      '1/2 xícara de manteiga',
      '1/4 xícara de xilitol',
      '1 colher de chá de essência de baunilha',
      'Recheio:',
      '1 xícara de creme de leite light',
      '1/2 xícara de leite condensado diet',
      '1 xícara de morangos frescos'
    ],
    nutrition: {
      calories: 150,
      carbs: '10g',
      protein: '3g',
      fat: '12g',
      fiber: '3g'
    },
    instructions: `
    • Misture a farinha de amêndoas, a manteiga, o xilitol e a essência de baunilha até formar uma massa.
    • Forre uma forma de torta com a massa e leve ao forno pré-aquecido a 180°C por 15 minutos.
    • Recheio: Misture o creme de leite com o leite condensado diet e despeje sobre a massa assada.
    • Decore com morangos frescos e leve à geladeira por 2 horas antes de servir.
    `
  },
  {
    name: 'Pudim de Abacate',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 abacates maduros',
      '1/4 xícara de cacau em pó',
      '1/4 xícara de xilitol',
      '1 colher de chá de essência de baunilha',
      '1/4 xícara de leite de amêndoas'
    ],
    nutrition: {
      calories: 140,
      carbs: '12g',
      protein: '2g',
      fat: '10g',
      fiber: '5g'
    },
    instructions: `
    • Bata todos os ingredientes no liquidificador até obter um creme homogêneo.
    • Despeje em taças e leve à geladeira por 1 hora antes de servir.
    `
  },
  {
    name: 'Bombom de Coco Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de coco ralado sem açúcar',
      '1/2 xícara de leite condensado diet',
      '200g de chocolate 80% cacau derretido'
    ],
    nutrition: {
      calories: 100,
      carbs: '8g',
      protein: '2g',
      fat: '8g',
      fiber: '4g'
    },
    instructions: `
    • Misture o coco ralado com o leite condensado diet até formar uma massa.
    • Modele em pequenas bolinhas e passe no chocolate derretido.
    • Leve à geladeira por 2 horas antes de servir.
    `
  },
  {
    name: 'Panna Cotta Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500ml de creme de leite light',
      '1/2 xícara de xilitol',
      '1 colher de chá de essência de baunilha',
      '1 pacote de gelatina sem sabor',
      '3 colheres de sopa de água'
    ],
    nutrition: {
      calories: 90,
      carbs: '5g',
      protein: '2g',
      fat: '7g',
      fiber: '0g'
    },
    instructions: `
    • Hidrate a gelatina na água e reserve.
    • Em uma panela, aqueça o creme de leite com o xilitol e a essência de baunilha até começar a ferver. Retire do fogo.
    • Adicione a gelatina hidratada e misture bem até dissolver completamente.
    • Despeje em formas individuais e leve à geladeira por 4 horas ou até firmar.
    `
  },
  {
    name: 'Sorvete de Abacate Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 abacates maduros',
      '1/2 xícara de creme de leite light',
      '1/4 xícara de xilitol',
      '1 colher de chá de essência de baunilha',
      'Suco de 1 limão'
    ],
    nutrition: {
      calories: 130,
      carbs: '10g',
      protein: '2g',
      fat: '10g',
      fiber: '5g'
    },
    instructions: `
    • Bata todos os ingredientes no liquidificador até obter uma mistura homogênea.
    • Coloque a mistura em um recipiente e leve ao congelador por 2 horas.
    • Retire do congelador e bata novamente no liquidificador.
    • Volte ao congelador por mais 4 horas antes de servir.
    `
  },
  {
    name: 'Mousse de Maracujá com Chia',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de suco de maracujá',
      '1/2 xícara de creme de leite light',
      '1/2 xícara de leite condensado diet',
      '2 colheres de sopa de chia',
      '1/4 xícara de xilitol'
    ],
    nutrition: {
      calories: 80,
      carbs: '10g',
      protein: '2g',
      fat: '5g',
      fiber: '4g'
    },
    instructions: `
    • Bata o suco de maracujá, o creme de leite, o leite condensado e o xilitol no liquidificador até obter uma mistura homogênea.
    • Adicione a chia e misture bem.
    • Despeje em taças e leve à geladeira por 2 horas antes de servir.
    `
  },
  {
    name: 'Gelatina de Morango com Chia',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 litro de chá de morango (bem concentrado)',
      '2 colheres de sopa de xilitol',
      '1 pacote de gelatina sem sabor',
      '2 colheres de sopa de chia'
    ],
    nutrition: {
      calories: 30,
      carbs: '6g',
      protein: '1g',
      fat: '0g',
      fiber: '3g'
    },
    instructions: `
    • Prepare a gelatina conforme as instruções da embalagem.
    • Misture a gelatina hidratada com o chá de morango, o xilitol e a chia.
    • Despeje em formas individuais e leve à geladeira por 4 horas ou até firmar.
    `
  },
  {
    name: 'Cheesecake Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '455g de cream cheese em temperatura ambiente',
      '2/3 xícara de xilitol',
      '4 ovos',
      '1 xícara de creme azedo',
      '1 colher de chá de extrato de baunilha',
      'Base:',
      '1 xícara de farinha de amêndoas',
      '1/4 xícara de manteiga derretida',
      '1/4 xícara de xilitol'
    ],
    nutrition: {
      calories: 300,
      carbs: '8g',
      protein: '6g',
      fat: '28g',
      fiber: '2g'
    },
    instructions: `
    • Pré-aqueça o forno a 175°C.
    • Misture a farinha de amêndoas, a manteiga derretida e o xilitol até formar uma massa.
    • Forre uma forma de fundo removível com a massa e asse por 10 minutos.
    • Bata o cream cheese com o xilitol até ficar cremoso.
    • Adicione os ovos, um de cada vez, batendo bem após cada adição.
    • Acrescente o creme azedo e a baunilha, misture bem.
    • Despeje a mistura sobre a base e asse por 40-50 minutos.
    • Deixe esfriar e leve à geladeira por 4 horas antes de servir.
    `
  },
  {
    name: 'Pudim de Coco Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '400ml de leite de coco',
      '200ml de creme de leite light',
      '1/2 xícara de xilitol',
      '1 pacote de gelatina sem sabor',
      '1/4 xícara de água'
    ],
    nutrition: {
      calories: 120,
      carbs: '6g',
      protein: '2g',
      fat: '10g',
      fiber: '2g'
    },
    instructions: `
    • Hidrate a gelatina na água e reserve.
    • Em uma panela, aqueça o leite de coco, o creme de leite e o xilitol até começar a ferver. Retire do fogo.
    • Adicione a gelatina hidratada e misture bem até dissolver completamente.
    • Despeje em formas individuais e leve à geladeira por 4 horas ou até firmar.
    `
  },
  {
    name: 'Torta de Limão Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de farinha de amêndoas',
      '1/2 xícara de manteiga derretida',
      '1/4 xícara de xilitol',
      'Recheio:',
      '1 xícara de creme de leite light',
      '1/2 xícara de leite condensado diet',
      'Suco de 3 limões',
      'Raspas de limão para decorar'
    ],
    nutrition: {
      calories: 150,
      carbs: '10g',
      protein: '3g',
      fat: '12g',
      fiber: '3g'
    },
    instructions: `
    • Pré-aqueça o forno a 180°C.
    • Misture a farinha de amêndoas, a manteiga derretida e o xilitol até formar uma massa.
    • Forre uma forma de torta com a massa e asse por 10-15 minutos. Deixe esfriar.
    • Misture o creme de leite, o leite condensado diet e o suco de limão até obter um creme homogêneo.
    • Despeje o recheio sobre a massa e leve à geladeira por 2 horas antes de servir.
    • Decore com raspas de limão antes de servir.
    `
  },
  {
    name: 'Pudim de Chia com Coco',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de leite de coco',
      '1/2 xícara de creme de leite light',
      '1/4 xícara de xilitol',
      '3 colheres de sopa de chia',
      '1 colher de chá de essência de baunilha'
    ],
    nutrition: {
      calories: 80,
      carbs: '6g',
      protein: '2g',
      fat: '6g',
      fiber: '3g'
    },
    instructions: `
    • Misture todos os ingredientes em uma tigela.
    • Deixe descansar por 10 minutos e misture novamente para evitar que a chia se acumule no fundo.
    • Despeje em taças individuais e leve à geladeira por 4 horas ou até firmar.
    `
  },
  {
    name: 'Muffin de Amêndoas Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 xícaras de farinha de amêndoas',
      '1/2 xícara de xilitol',
      '1/4 xícara de óleo de coco derretido',
      '4 ovos',
      '1 colher de chá de fermento em pó',
      '1 colher de chá de essência de baunilha'
    ],
    nutrition: {
      calories: 150,
      carbs: '8g',
      protein: '6g',
      fat: '12g',
      fiber: '4g'
    },
    instructions: `
    • Pré-aqueça o forno a 180°C.
    • Misture a farinha de amêndoas, o xilitol, o óleo de coco, os ovos, o fermento e a essência de baunilha até obter uma massa homogênea.
    • Despeje a massa em forminhas de muffin.
    • Asse por 20-25 minutos ou até dourar.
    `
  },
  {
    name: 'Sorvete de Coco Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 xícaras de leite de coco',
      '1 xícara de creme de leite light',
      '1/2 xícara de xilitol',
      '1 colher de chá de essência de baunilha'
    ],
    nutrition: {
      calories: 110,
      carbs: '6g',
      protein: '2g',
      fat: '10g',
      fiber: '3g'
    },
    instructions: `
    • Bata todos os ingredientes no liquidificador até obter uma mistura homogênea.
    • Coloque a mistura em um recipiente e leve ao congelador por 2 horas.
    • Retire do congelador e bata novamente no liquidificador.
    • Volte ao congelador por mais 4 horas antes de servir.
    `
  },
  {
    name: 'Bolo de Coco Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de farinha de coco',
      '1/2 xícara de xilitol',
      '1/2 xícara de óleo de coco derretido',
      '4 ovos',
      '1 colher de chá de fermento em pó',
      '1/2 xícara de leite de coco'
    ],
    nutrition: {
      calories: 150,
      carbs: '8g',
      protein: '5g',
      fat: '12g',
      fiber: '4g'
    },
    instructions: `
    • Pré-aqueça o forno a 180°C.
    • Misture a farinha de coco, o xilitol, o óleo de coco, os ovos, o fermento e o leite de coco até obter uma massa homogênea.
    • Despeje a massa em uma forma untada.
    • Asse por 25-30 minutos ou até dourar.
    `
  },
  {
    name: 'Biscoitos de Amêndoas Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 xícaras de farinha de amêndoas',
      '1/2 xícara de xilitol',
      '1/4 xícara de óleo de coco derretido',
      '1 ovo',
      '1 colher de chá de essência de baunilha'
    ],
    nutrition: {
      calories: 100,
      carbs: '6g',
      protein: '4g',
      fat: '8g',
      fiber: '3g'
    },
    instructions: `
    • Pré-aqueça o forno a 180°C.
    • Misture todos os ingredientes até obter uma massa homogênea.
    • Modele os biscoitos e coloque em uma assadeira forrada com papel manteiga.
    • Asse por 15-20 minutos ou até dourar.
    `
  },
  {
    name: 'Pudim de Limão Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de creme de leite light',
      '1/2 xícara de leite condensado diet',
      'Suco de 2 limões',
      '1 pacote de gelatina sem sabor',
      '1/4 xícara de água'
    ],
    nutrition: {
      calories: 80,
      carbs: '6g',
      protein: '2g',
      fat: '6g',
      fiber: '1g'
    },
    instructions: `
    • Hidrate a gelatina na água e reserve.
    • Em uma panela, aqueça o creme de leite e o leite condensado diet até começar a ferver. Retire do fogo.
    • Adicione a gelatina hidratada e misture bem até dissolver completamente.
    • Adicione o suco de limão e misture bem.
    • Despeje em formas individuais e leve à geladeira por 4 horas ou até firmar.
    `
  },
  {
    name: 'Brigadeiro de Abóbora Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de abóbora cozida e amassada',
      '1/2 xícara de leite condensado diet',
      '1/4 xícara de xilitol',
      '1/4 xícara de coco ralado sem açúcar',
      '1 colher de sopa de manteiga'
    ],
    nutrition: {
      calories: 70,
      carbs: '8g',
      protein: '1g',
      fat: '4g',
      fiber: '2g'
    },
    instructions: `
    • Misture todos os ingredientes em uma panela.
    • Cozinhe em fogo baixo, mexendo sempre, até desgrudar do fundo da panela.
    • Deixe esfriar e leve à geladeira por 2 horas.
    • Modele os brigadeiros e passe no coco ralado.
    `
  },
  {
    name: 'Torta de Amêndoas Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 xícaras de farinha de amêndoas',
      '1/2 xícara de manteiga derretida',
      '1/4 xícara de xilitol',
      'Recheio:',
      '1 xícara de creme de leite light',
      '1/2 xícara de leite condensado diet',
      '1/2 xícara de amêndoas picadas'
    ],
    nutrition: {
      calories: 170,
      carbs: '8g',
      protein: '4g',
      fat: '14g',
      fiber: '3g'
    },
    instructions: `
    • Pré-aqueça o forno a 180°C.
    • Misture a farinha de amêndoas, a manteiga derretida e o xilitol até formar uma massa.
    • Forre uma forma de torta com a massa e asse por 10-15 minutos. Deixe esfriar.
    • Recheio: Misture o creme de leite, o leite condensado diet e as amêndoas picadas até obter um creme homogêneo.
    • Despeje o recheio sobre a massa e leve à geladeira por 2 horas antes de servir.
    `
  },
  {
    name: 'Bombom de Amêndoas Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de amêndoas picadas',
      '1/2 xícara de leite condensado diet',
      '200g de chocolate 80% cacau derretido'
    ],
    nutrition: {
      calories: 100,
      carbs: '8g',
      protein: '2g',
      fat: '7g',
      fiber: '3g'
    },
    instructions: `
    • Misture as amêndoas picadas com o leite condensado diet até formar uma massa.
    • Modele em pequenas bolinhas e passe no chocolate derretido.
    • Leve à geladeira por 2 horas antes de servir.
    `
  },
  {
    name: 'Trufa de Café Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '200g de chocolate 80% cacau derretido',
      '1/2 xícara de creme de leite light',
      '1/4 xícara de xilitol',
      '1 colher de sopa de café solúvel'
    ],
    nutrition: {
      calories: 80,
      carbs: '4g',
      protein: '2g',
      fat: '7g',
      fiber: '2g'
    },
    instructions: `
    • Derreta o chocolate em banho-maria.
    • Misture o creme de leite, o xilitol e o café solúvel ao chocolate derretido.
    • Leve à geladeira por 2 horas ou até firmar.
    • Modele as trufas e passe no cacau em pó.
    • Armazene na geladeira até servir.
    `
  },
  {
    name: 'Bolo de Café Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de farinha de amêndoas',
      '1/2 xícara de xilitol',
      '1/4 xícara de óleo de coco derretido',
      '1/2 xícara de café forte',
      '3 ovos',
      '1 colher de chá de fermento em pó',
      '1 colher de chá de essência de baunilha'
    ],
    nutrition: {
      calories: 140,
      carbs: '8g',
      protein: '4g',
      fat: '10g',
      fiber: '3g'
    },
    instructions: `
    • Pré-aqueça o forno a 180°C.
    • Misture a farinha de amêndoas, o xilitol, o óleo de coco, o café, os ovos, o fermento e a essência de baunilha até obter uma massa homogênea.
    • Despeje a massa em uma forma untada.
    • Asse por 25-30 minutos ou até dourar.
    `
  },
  {
    name: 'Cookies de Amêndoas e Chocolate Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de farinha de amêndoas',
      '1/2 xícara de xilitol',
      '1/4 xícara de óleo de coco derretido',
      '1 ovo',
      '1/2 xícara de gotas de chocolate 80% cacau',
      '1 colher de chá de essência de baunilha',
      '1 colher de chá de fermento em pó'
    ],
    nutrition: {
      calories: 120,
      carbs: '8g',
      protein: '3g',
      fat: '10g',
      fiber: '3g'
    },
    instructions: `
    • Pré-aqueça o forno a 180°C.
    • Misture a farinha de amêndoas, o xilitol, o óleo de coco, o ovo, a essência de baunilha e o fermento até obter uma massa homogênea.
    • Adicione as gotas de chocolate e misture bem.
    • Modele os cookies e coloque em uma assadeira forrada com papel manteiga.
    • Asse por 15-20 minutos ou até dourar.
    `
  },
  {
    name: 'Brownie de Abacate Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 abacates maduros',
      '1/2 xícara de cacau em pó',
      '1/2 xícara de xilitol',
      '1/4 xícara de óleo de coco derretido',
      '3 ovos',
      '1 colher de chá de essência de baunilha',
      '1 colher de chá de fermento em pó'
    ],
    nutrition: {
      calories: 160,
      carbs: '10g',
      protein: '4g',
      fat: '14g',
      fiber: '5g'
    },
    instructions: `
    • Pré-aqueça o forno a 180°C.
    • Bata os abacates, o cacau em pó, o xilitol, o óleo de coco, os ovos e a essência de baunilha no liquidificador até obter uma massa homogênea.
    • Adicione o fermento e misture bem.
    • Despeje a massa em uma forma untada.
    • Asse por 25-30 minutos ou até dourar.
    `
  },
  {
    name: 'Torta de Chocolate com Amêndoas Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de farinha de amêndoas',
      '1/2 xícara de xilitol',
      '1/4 xícara de óleo de coco derretido',
      '200g de chocolate 80% cacau derretido',
      '1/2 xícara de creme de leite light',
      '1 colher de chá de essência de baunilha'
    ],
    nutrition: {
      calories: 160,
      carbs: '8g',
      protein: '4g',
      fat: '14g',
      fiber: '4g'
    },
    instructions: `
    • Pré-aqueça o forno a 180°C.
    • Misture a farinha de amêndoas, o xilitol e o óleo de coco até formar uma massa.
    • Forre uma forma de torta com a massa e asse por 10-15 minutos. Deixe esfriar.
    • Misture o chocolate derretido, o creme de leite e a essência de baunilha até obter um creme homogêneo.
    • Despeje o recheio sobre a massa e leve à geladeira por 2 horas antes de servir.
    `
  },
  {
    name: 'Bolo de Chocolate com Amêndoas Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de farinha de amêndoas',
      '1/2 xícara de xilitol',
      '1/4 xícara de óleo de coco derretido',
      '1/2 xícara de cacau em pó',
      '3 ovos',
      '1 colher de chá de essência de baunilha',
      '1 colher de chá de fermento em pó'
    ],
    nutrition: {
      calories: 150,
      carbs: '8g',
      protein: '4g',
      fat: '12g',
      fiber: '4g'
    },
    instructions: `
    • Pré-aqueça o forno a 180°C.
    • Misture a farinha de amêndoas, o xilitol, o óleo de coco, o cacau em pó, os ovos, a essência de baunilha e o fermento até obter uma massa homogênea.
    • Despeje a massa em uma forma untada.
    • Asse por 25-30 minutos ou até dourar.
    `
  },
  {
    name: 'Torta de Frutas Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de farinha de amêndoas',
      '1/2 xícara de manteiga derretida',
      '1/4 xícara de xilitol',
      'Recheio:',
      '1 xícara de creme de leite light',
      '1/2 xícara de leite condensado diet',
      'Frutas frescas (morango, kiwi, mirtilo, etc.)'
    ],
    nutrition: {
      calories: 140,
      carbs: '8g',
      protein: '3g',
      fat: '12g',
      fiber: '3g'
    },
    instructions: `
    • Pré-aqueça o forno a 180°C.
    • Misture a farinha de amêndoas, a manteiga derretida e o xilitol até formar uma massa.
    • Forre uma forma de torta com a massa e asse por 10-15 minutos. Deixe esfriar.
    • Misture o creme de leite com o leite condensado diet até obter um creme homogêneo.
    • Despeje o recheio sobre a massa e decore com as frutas frescas.
    • Leve à geladeira por 2 horas antes de servir.
    `
  },
  {
    name: 'Pudim de Café Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de creme de leite light',
      '1/2 xícara de leite condensado diet',
      '1/2 xícara de café forte',
      '1 pacote de gelatina sem sabor',
      '1/4 xícara de água'
    ],
    nutrition: {
      calories: 80,
      carbs: '6g',
      protein: '2g',
      fat: '6g',
      fiber: '1g'
    },
    instructions: `
    • Hidrate a gelatina na água e reserve.
    • Em uma panela, aqueça o creme de leite, o leite condensado diet e o café até começar a ferver. Retire do fogo.
    • Adicione a gelatina hidratada e misture bem até dissolver completamente.
    • Despeje em formas individuais e leve à geladeira por 4 horas ou até firmar.
    `
  },
  {
    name: 'Sorvete de Morango Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 xícaras de morangos frescos',
      '1 xícara de creme de leite light',
      '1/2 xícara de leite condensado diet',
      '1/4 xícara de xilitol'
    ],
    nutrition: {
      calories: 100,
      carbs: '10g',
      protein: '2g',
      fat: '6g',
      fiber: '3g'
    },
    instructions: `
    • Bata todos os ingredientes no liquidificador até obter uma mistura homogênea.
    • Coloque a mistura em um recipiente e leve ao congelador por 2 horas.
    • Retire do congelador e bata novamente no liquidificador.
    • Volte ao congelador por mais 4 horas antes de servir.
    `
  },
  {
    name: 'Pudim de Coco Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de leite de coco',
      '1/2 xícara de creme de leite light',
      '1/2 xícara de leite condensado diet',
      '1 pacote de gelatina sem sabor',
      '1/4 xícara de água'
    ],
    nutrition: {
      calories: 100,
      carbs: '6g',
      protein: '2g',
      fat: '8g',
      fiber: '2g'
    },
    instructions: `
    • Hidrate a gelatina na água e reserve.
    • Em uma panela, aqueça o leite de coco, o creme de leite e o leite condensado diet até começar a ferver. Retire do fogo.
    • Adicione a gelatina hidratada e misture bem até dissolver completamente.
    • Despeje em formas individuais e leve à geladeira por 4 horas ou até firmar.
    `
  },
  {
    name: 'Trufa de Amêndoas Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '200g de chocolate 80% cacau derretido',
      '1/2 xícara de creme de leite light',
      '1/4 xícara de xilitol',
      '1/2 xícara de amêndoas picadas'
    ],
    nutrition: {
      calories: 90,
      carbs: '5g',
      protein: '2g',
      fat: '7g',
      fiber: '2g'
    },
    instructions: `
    • Derreta o chocolate em banho-maria.
    • Misture o creme de leite, o xilitol e as amêndoas picadas ao chocolate derretido.
    • Leve à geladeira por 2 horas ou até firmar.
    • Modele as trufas e passe no cacau em pó.
    • Armazene na geladeira até servir.
    `
  },
  {
    name: 'Bolo de Caneca Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 ovo',
      '2 colheres de sopa de farinha de amêndoas',
      '1 colher de sopa de xilitol',
      '1 colher de sopa de cacau em pó',
      '1 colher de chá de fermento em pó',
      '1 colher de sopa de óleo de coco derretido',
      '2 colheres de sopa de leite de coco'
    ],
    nutrition: {
      calories: 150,
      carbs: '6g',
      protein: '6g',
      fat: '12g',
      fiber: '3g'
    },
    instructions: `
    • Em uma caneca, misture todos os ingredientes até obter uma massa homogênea.
    • Leve ao micro-ondas por 1-2 minutos ou até o bolo crescer e firmar.
    • Sirva quente.
    `
  },
  {
    name: 'Cookies de Coco Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de farinha de coco',
      '1/2 xícara de xilitol',
      '1/4 xícara de óleo de coco derretido',
      '1 ovo',
      '1 colher de chá de essência de baunilha',
      '1 colher de chá de fermento em pó'
    ],
    nutrition: {
      calories: 90,
      carbs: '4g',
      protein: '3g',
      fat: '8g',
      fiber: '2g'
    },
    instructions: `
    • Pré-aqueça o forno a 180°C.
    • Misture todos os ingredientes até obter uma massa homogênea.
    • Modele os cookies e coloque em uma assadeira forrada com papel manteiga.
    • Asse por 15-20 minutos ou até dourar.
    `
  },
  {
    name: 'Sorvete de Baunilha Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 xícaras de creme de leite light',
      '1 xícara de leite condensado diet',
      '1 colher de chá de essência de baunilha',
      '1/4 xícara de xilitol'
    ],
    nutrition: {
      calories: 110,
      carbs: '5g',
      protein: '2g',
      fat: '9g',
      fiber: '1g'
    },
    instructions: `
    • Bata todos os ingredientes no liquidificador até obter uma mistura homogênea.
    • Coloque a mistura em um recipiente e leve ao congelador por 2 horas.
    • Retire do congelador e bata novamente no liquidificador.
    • Volte ao congelador por mais 4 horas antes de servir.
    `
  },
  {
    name: 'Mousse de Manga Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 mangas maduras',
      '1 xícara de creme de leite light',
      '1/2 xícara de leite condensado diet',
      '1/4 xícara de xilitol'
    ],
    nutrition: {
      calories: 120,
      carbs: '15g',
      protein: '2g',
      fat: '6g',
      fiber: '2g'
    },
    instructions: `
    • Bata todos os ingredientes no liquidificador até obter uma mistura homogênea.
    • Despeje em taças e leve à geladeira por 2 horas antes de servir.
    `
  },
  {
    name: 'Pudim de Chocolate Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de creme de leite light',
      '1/2 xícara de leite condensado diet',
      '1/2 xícara de cacau em pó',
      '1 pacote de gelatina sem sabor',
      '1/4 xícara de água'
    ],
    nutrition: {
      calories: 100,
      carbs: '8g',
      protein: '3g',
      fat: '7g',
      fiber: '3g'
    },
    instructions: `
    • Hidrate a gelatina na água e reserve.
    • Em uma panela, aqueça o creme de leite, o leite condensado diet e o cacau em pó até começar a ferver. Retire do fogo.
    • Adicione a gelatina hidratada e misture bem até dissolver completamente.
    • Despeje em formas individuais e leve à geladeira por 4 horas ou até firmar.
    `
  },
  {
    name: 'Torta de Limão com Coco Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de farinha de coco',
      '1/2 xícara de manteiga derretida',
      '1/4 xícara de xilitol',
      'Recheio:',
      '1 xícara de creme de leite light',
      '1/2 xícara de leite condensado diet',
      'Suco de 2 limões',
      'Raspas de limão para decorar'
    ],
    nutrition: {
      calories: 140,
      carbs: '10g',
      protein: '3g',
      fat: '11g',
      fiber: '4g'
    },
    instructions: `
    • Pré-aqueça o forno a 180°C.
    • Misture a farinha de coco, a manteiga derretida e o xilitol até formar uma massa.
    • Forre uma forma de torta com a massa e asse por 10-15 minutos. Deixe esfriar.
    • Misture o creme de leite, o leite condensado diet e o suco de limão até obter um creme homogêneo.
    • Despeje o recheio sobre a massa e leve à geladeira por 2 horas antes de servir.
    • Decore com raspas de limão antes de servir.
    `
  },
  {
    name: 'Bombom de Morango Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '200g de morangos frescos',
      '1/2 xícara de leite condensado diet',
      '200g de chocolate 80% cacau derretido'
    ],
    nutrition: {
      calories: 120,
      carbs: '10g',
      protein: '2g',
      fat: '8g',
      fiber: '3g'
    },
    instructions: `
    • Lave e seque bem os morangos.
    • Envolva cada morango com o leite condensado diet.
    • Derreta o chocolate e cubra os morangos com ele.
    • Leve à geladeira por 2 horas antes de servir.
    `
  },
  {
    name: 'Brigadeiro de Leite Ninho Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de leite em pó desnatado',
      '1/2 xícara de leite condensado diet',
      '1/4 xícara de xilitol',
      '1/4 xícara de leite de coco',
      '1 colher de sopa de manteiga'
    ],
    nutrition: {
      calories: 100,
      carbs: '8g',
      protein: '2g',
      fat: '7g',
      fiber: '1g'
    },
    instructions: `
    • Misture todos os ingredientes em uma panela.
    • Cozinhe em fogo baixo, mexendo sempre, até desgrudar do fundo da panela.
    • Deixe esfriar e leve à geladeira por 2 horas.
    • Modele os brigadeiros e passe no leite em pó.
    `
  },
  {
    name: 'Sorvete de Café Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 xícaras de creme de leite light',
      '1 xícara de leite condensado diet',
      '1/2 xícara de café forte',
      '1/4 xícara de xilitol'
    ],
    nutrition: {
      calories: 90,
      carbs: '5g',
      protein: '2g',
      fat: '7g',
      fiber: '1g'
    },
    instructions: `
    • Bata todos os ingredientes no liquidificador até obter uma mistura homogênea.
    • Coloque a mistura em um recipiente e leve ao congelador por 2 horas.
    • Retire do congelador e bata novamente no liquidificador.
    • Volte ao congelador por mais 4 horas antes de servir.
    `
  },
  {
    name: 'Bolo de Banana Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 bananas maduras',
      '1/2 xícara de farinha de amêndoas',
      '1/4 xícara de xilitol',
      '3 ovos',
      '1/4 xícara de óleo de coco derretido',
      '1 colher de chá de essência de baunilha',
      '1 colher de chá de fermento em pó'
    ],
    nutrition: {
      calories: 130,
      carbs: '15g',
      protein: '4g',
      fat: '9g',
      fiber: '3g'
    },
    instructions: `
    • Pré-aqueça o forno a 180°C.
    • Amasse as bananas e misture com a farinha de amêndoas, o xilitol, os ovos, o óleo de coco, a essência de baunilha e o fermento até obter uma massa homogênea.
    • Despeje a massa em uma forma untada.
    • Asse por 25-30 minutos ou até dourar.
    `
  },
  {
    name: 'Cookies de Chocolate Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de farinha de amêndoas',
      '1/2 xícara de xilitol',
      '1/4 xícara de óleo de coco derretido',
      '1 ovo',
      '1/2 xícara de gotas de chocolate 80% cacau',
      '1 colher de chá de essência de baunilha',
      '1 colher de chá de fermento em pó'
    ],
    nutrition: {
      calories: 90,
      carbs: '8g',
      protein: '3g',
      fat: '6g',
      fiber: '2g'
    },
    instructions: `
    • Pré-aqueça o forno a 180°C.
    • Misture a farinha de amêndoas, o xilitol, o óleo de coco, o ovo, a essência de baunilha e o fermento até obter uma massa homogênea.
    • Adicione as gotas de chocolate e misture bem.
    • Modele os cookies e coloque em uma assadeira forrada com papel manteiga.
    • Asse por 15-20 minutos ou até dourar.
    `
  },
  {
    name: 'Mousse de Abacaxi Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 abacaxi médio picado',
      '1 xícara de creme de leite light',
      '1/2 xícara de leite condensado diet',
      '1/4 xícara de xilitol'
    ],
    nutrition: {
      calories: 110,
      carbs: '14g',
      protein: '3g',
      fat: '6g',
      fiber: '2g'
    },
    instructions: `
    • Bata o abacaxi no liquidificador até obter um purê.
    • Misture o purê de abacaxi com o creme de leite, o leite condensado diet e o xilitol até obter uma mistura homogênea.
    • Despeje em taças e leve à geladeira por 2 horas antes de servir.
    `
  },
  {
    name: 'Brigadeiro de Amendoim Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de pasta de amendoim integral sem açúcar',
      '1/2 xícara de leite condensado diet',
      '1/4 xícara de xilitol',
      '1 colher de sopa de manteiga'
    ],
    nutrition: {
      calories: 90,
      carbs: '4g',
      protein: '4g',
      fat: '7g',
      fiber: '2g'
    },
    instructions: `
    • Misture todos os ingredientes em uma panela.
    • Cozinhe em fogo baixo, mexendo sempre, até desgrudar do fundo da panela.
    • Deixe esfriar e leve à geladeira por 2 horas.
    • Modele os brigadeiros e passe no amendoim triturado.
    `
  },
  {
    name: 'Sorvete de Coco Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 xícaras de leite de coco',
      '1 xícara de creme de leite light',
      '1/2 xícara de xilitol',
      '1 colher de chá de essência de baunilha'
    ],
    nutrition: {
      calories: 100,
      carbs: '5g',
      protein: '2g',
      fat: '8g',
      fiber: '2g'
    },
    instructions: `
    • Bata todos os ingredientes no liquidificador até obter uma mistura homogênea.
    • Coloque a mistura em um recipiente e leve ao congelador por 2 horas.
    • Retire do congelador e bata novamente no liquidificador.
    • Volte ao congelador por mais 4 horas antes de servir.
    `
  },
  {
    name: 'Pão de Queijo Low Carb',
    type: 'snack',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de queijo ralado (parmesão ou muçarela)',
      '1 xícara de farinha de amêndoas',
      '2 ovos',
      '2 colheres de sopa de creme de leite',
      '1 colher de chá de fermento em pó',
      'Sal a gosto'
    ],
    nutrition: {
      calories: 120,
      carbs: '4g',
      protein: '8g',
      fat: '9g',
      fiber: '1g'
    },
    instructions: `
    • Pré-aqueça o forno a 180°C.
    • Misture todos os ingredientes até obter uma massa homogênea.
    • Modele bolinhas e coloque em uma assadeira forrada com papel manteiga.
    • Asse por 20-25 minutos ou até dourar.
    `
  },
  {
    name: 'Bolinho de Chuva Low Carb',
    type: 'snack',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de farinha de amêndoas',
      '1/2 xícara de xilitol',
      '1/4 xícara de óleo de coco derretido',
      '3 ovos',
      '1 colher de chá de essência de baunilha',
      '1 colher de chá de fermento em pó',
      'Canela em pó para polvilhar'
    ],
    nutrition: {
      calories: 90,
      carbs: '6g',
      protein: '3g',
      fat: '7g',
      fiber: '2g'
    },
    instructions: `
    • Misture todos os ingredientes até obter uma massa homogênea.
    • Aqueça óleo de coco em uma frigideira.
    • Com a ajuda de uma colher, despeje pequenas porções da massa no óleo quente.
    • Frite até dourar e coloque sobre papel toalha para absorver o excesso de óleo.
    • Polvilhe canela em pó antes de servir.
    `
  },
  {
    name: 'Bombom de Nozes Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de nozes picadas',
      '1/2 xícara de leite condensado diet',
      '200g de chocolate 80% cacau derretido'
    ],
    nutrition: {
      calories: 120,
      carbs: '8g',
      protein: '3g',
      fat: '9g',
      fiber: '2g'
    },
    instructions: `
    • Misture as nozes picadas com o leite condensado diet até formar uma massa.
    • Modele em pequenas bolinhas e passe no chocolate derretido.
    • Leve à geladeira por 2 horas antes de servir.
    `
  },
  {
    name: 'Bolo de Amêndoas Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 xícaras de farinha de amêndoas',
      '1/2 xícara de xilitol',
      '1/4 xícara de óleo de coco derretido',
      '4 ovos',
      '1 colher de chá de essência de baunilha',
      '1 colher de chá de fermento em pó'
    ],
    nutrition: {
      calories: 130,
      carbs: '7g',
      protein: '6g',
      fat: '10g',
      fiber: '3g'
    },
    instructions: `
    • Pré-aqueça o forno a 180°C.
    • Misture todos os ingredientes até obter uma massa homogênea.
    • Despeje a massa em uma forma untada.
    • Asse por 25-30 minutos ou até dourar.
    `
  },
  {
    name: 'Pudim de Leite Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de creme de leite light',
      '1/2 xícara de leite condensado diet',
      '1/2 xícara de leite de coco',
      '1 pacote de gelatina sem sabor',
      '1/4 xícara de água'
    ],
    nutrition: {
      calories: 110,
      carbs: '8g',
      protein: '4g',
      fat: '8g',
      fiber: '2g'
    },
    instructions: `
    • Hidrate a gelatina na água e reserve.
    • Em uma panela, aqueça o creme de leite, o leite condensado diet e o leite de coco até começar a ferver. Retire do fogo.
    • Adicione a gelatina hidratada e misture bem até dissolver completamente.
    • Despeje em formas individuais e leve à geladeira por 4 horas ou até firmar.
    `
  },
  {
    name: 'Sorvete de Limão Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 xícaras de creme de leite light',
      '1 xícara de leite condensado diet',
      'Suco de 2 limões',
      '1/4 xícara de xilitol'
    ],
    nutrition: {
      calories: 100,
      carbs: '6g',
      protein: '3g',
      fat: '8g',
      fiber: '2g'
    },
    instructions: `
    • Bata todos os ingredientes no liquidificador até obter uma mistura homogênea.
    • Coloque a mistura em um recipiente e leve ao congelador por 2 horas.
    • Retire do congelador e bata novamente no liquidificador.
    • Volte ao congelador por mais 4 horas antes de servir.
    `
  },
  {
    name: 'Biscoitos de Limão Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de farinha de amêndoas',
      '1/2 xícara de xilitol',
      '1/4 xícara de óleo de coco derretido',
      '1 ovo',
      'Raspas de 1 limão',
      '1 colher de chá de essência de baunilha',
      '1 colher de chá de fermento em pó'
    ],
    nutrition: {
      calories: 90,
      carbs: '5g',
      protein: '3g',
      fat: '7g',
      fiber: '2g'
    },
    instructions: `
    • Pré-aqueça o forno a 180°C.
    • Misture todos os ingredientes até obter uma massa homogênea.
    • Modele os biscoitos e coloque em uma assadeira forrada com papel manteiga.
    • Asse por 15-20 minutos ou até dourar.
    `
  },
  {
    name: 'Muffin de Chocolate Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de farinha de amêndoas',
      '1/2 xícara de xilitol',
      '1/4 xícara de cacau em pó',
      '1/4 xícara de óleo de coco derretido',
      '3 ovos',
      '1 colher de chá de essência de baunilha',
      '1 colher de chá de fermento em pó'
    ],
    nutrition: {
      calories: 110,
      carbs: '7g',
      protein: '4g',
      fat: '8g',
      fiber: '3g'
    },
    instructions: `
    • Pré-aqueça o forno a 180°C.
    • Misture todos os ingredientes até obter uma massa homogênea.
    • Despeje a massa em forminhas de muffin.
    • Asse por 20-25 minutos ou até dourar.
    `
  },
  {
    name: 'Gelatina de Maracujá Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 litro de suco de maracujá (bem concentrado)',
      '2 colheres de sopa de xilitol',
      '1 pacote de gelatina sem sabor'
    ],
    nutrition: {
      calories: 30,
      carbs: '6g',
      protein: '2g',
      fat: '0g',
      fiber: '1g'
    },
    instructions: `
    • Prepare a gelatina conforme as instruções da embalagem.
    • Misture a gelatina hidratada com o suco de maracujá e o xilitol.
    • Despeje em formas individuais e leve à geladeira por 4 horas ou até firmar.
    `
  },
  {
    name: 'Brigadeiro de Limão Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de leite condensado diet',
      '1/4 xícara de suco de limão',
      '1 colher de sopa de manteiga',
      'Raspas de limão para decorar'
    ],
    nutrition: {
      calories: 90,
      carbs: '7g',
      protein: '2g',
      fat: '6g',
      fiber: '1g'
    },
    instructions: `
    • Misture todos os ingredientes em uma panela.
    • Cozinhe em fogo baixo, mexendo sempre, até desgrudar do fundo da panela.
    • Deixe esfriar e leve à geladeira por 2 horas.
    • Modele os brigadeiros e passe nas raspas de limão.
    `
  },
  {
    name: 'Torta de Nozes Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de farinha de nozes',
      '1/2 xícara de manteiga derretida',
      '1/4 xícara de xilitol',
      'Recheio:',
      '1 xícara de creme de leite light',
      '1/2 xícara de leite condensado diet',
      '1/2 xícara de nozes picadas'
    ],
    nutrition: {
      calories: 130,
      carbs: '8g',
      protein: '4g',
      fat: '10g',
      fiber: '3g'
    },
    instructions: `
    • Pré-aqueça o forno a 180°C.
    • Misture a farinha de nozes, a manteiga derretida e o xilitol até formar uma massa.
    • Forre uma forma de torta com a massa e asse por 10-15 minutos. Deixe esfriar.
    • Recheio: Misture o creme de leite, o leite condensado diet e as nozes picadas até obter um creme homogêneo.
    • Despeje o recheio sobre a massa e leve à geladeira por 2 horas antes de servir.
    `
  },
  {
    name: 'Bombom de Limão Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de leite condensado diet',
      '1/4 xícara de suco de limão',
      '200g de chocolate 80% cacau derretido'
    ],
    nutrition: {
      calories: 110,
      carbs: '8g',
      protein: '2g',
      fat: '8g',
      fiber: '2g'
    },
    instructions: `
    • Misture o leite condensado diet com o suco de limão até formar um creme.
    • Modele em pequenas bolinhas e passe no chocolate derretido.
    • Leve à geladeira por 2 horas antes de servir.
    `
  },
  {
    name: 'Sorvete de Morango Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 xícaras de morangos frescos',
      '1 xícara de creme de leite light',
      '1/2 xícara de leite condensado diet',
      '1/4 xícara de xilitol'
    ],
    nutrition: {
      calories: 90,
      carbs: '9g',
      protein: '2g',
      fat: '6g',
      fiber: '3g'
    },
    instructions: `
    • Bata todos os ingredientes no liquidificador até obter uma mistura homogênea.
    • Coloque a mistura em um recipiente e leve ao congelador por 2 horas.
    • Retire do congelador e bata novamente no liquidificador.
    • Volte ao congelador por mais 4 horas antes de servir.
    `
  },
  {
    name: 'Bolo de Cenoura Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 cenouras médias raladas',
      '1/2 xícara de óleo de coco derretido',
      '3 ovos',
      '1/2 xícara de xilitol',
      '1 xícara de farinha de amêndoas',
      '1 colher de chá de fermento em pó',
      'Cobertura:',
      '100g de chocolate 80% cacau derretido',
      '1/2 xícara de creme de leite light'
    ],
    nutrition: {
      calories: 130,
      carbs: '12g',
      protein: '4g',
      fat: '9g',
      fiber: '3g'
    },
    instructions: `
    • Pré-aqueça o forno a 180°C.
    • Bata as cenouras, o óleo de coco, os ovos e o xilitol no liquidificador até obter uma mistura homogênea.
    • Misture a farinha de amêndoas e o fermento até obter uma massa homogênea.
    • Despeje a massa em uma forma untada.
    • Asse por 25-30 minutos ou até dourar.
    • Cobertura: Misture o chocolate derretido com o creme de leite e espalhe sobre o bolo frio.
    `
  },
  {
    name: 'Cookies de Amêndoas Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de farinha de amêndoas',
      '1/2 xícara de xilitol',
      '1/4 xícara de óleo de coco derretido',
      '1 ovo',
      '1 colher de chá de essência de baunilha',
      '1 colher de chá de fermento em pó'
    ],
    nutrition: {
      calories: 90,
      carbs: '5g',
      protein: '3g',
      fat: '7g',
      fiber: '2g'
    },
    instructions: `
    • Pré-aqueça o forno a 180°C.
    • Misture todos os ingredientes até obter uma massa homogênea.
    • Modele os cookies e coloque em uma assadeira forrada com papel manteiga.
    • Asse por 15-20 minutos ou até dourar.
    `
  },
  {
    name: 'Mousse de Chocolate Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de creme de leite light',
      '1/2 xícara de leite condensado diet',
      '1/2 xícara de cacau em pó',
      '1 colher de chá de essência de baunilha'
    ],
    nutrition: {
      calories: 110,
      carbs: '8g',
      protein: '3g',
      fat: '8g',
      fiber: '3g'
    },
    instructions: `
    • Bata todos os ingredientes no liquidificador até obter uma mistura homogênea.
    • Despeje em taças e leve à geladeira por 2 horas antes de servir.
    `
  },
  {
    name: 'Pudim de Café Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de creme de leite light',
      '1/2 xícara de leite condensado diet',
      '1/2 xícara de café forte',
      '1 pacote de gelatina sem sabor',
      '1/4 xícara de água'
    ],
    nutrition: {
      calories: 90,
      carbs: '6g',
      protein: '3g',
      fat: '7g',
      fiber: '2g'
    },
    instructions: `
    • Hidrate a gelatina na água e reserve.
    • Em uma panela, aqueça o creme de leite, o leite condensado diet e o café até começar a ferver. Retire do fogo.
    • Adicione a gelatina hidratada e misture bem até dissolver completamente.
    • Despeje em formas individuais e leve à geladeira por 4 horas ou até firmar.
    `
  },
  {
    name: 'Bolo de Limão Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de farinha de amêndoas',
      '1/2 xícara de xilitol',
      '1/4 xícara de óleo de coco derretido',
      '3 ovos',
      'Suco de 2 limões',
      'Raspas de limão para decorar',
      '1 colher de chá de fermento em pó'
    ],
    nutrition: {
      calories: 110,
      carbs: '7g',
      protein: '3g',
      fat: '8g',
      fiber: '2g'
    },
    instructions: `
    • Pré-aqueça o forno a 180°C.
    • Misture todos os ingredientes até obter uma massa homogênea.
    • Despeje a massa em uma forma untada.
    • Asse por 25-30 minutos ou até dourar.
    • Decore com raspas de limão antes de servir.
    `
  },
  {
    name: 'Brigadeiro de Coco Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de leite condensado diet',
      '1/2 xícara de coco ralado sem açúcar',
      '1 colher de sopa de manteiga'
    ],
    nutrition: {
      calories: 90,
      carbs: '6g',
      protein: '2g',
      fat: '7g',
      fiber: '2g'
    },
    instructions: `
    • Misture todos os ingredientes em uma panela.
    • Cozinhe em fogo baixo, mexendo sempre, até desgrudar do fundo da panela.
    • Deixe esfriar e leve à geladeira por 2 horas.
    • Modele os brigadeiros e passe no coco ralado.
    `
  },
  {
    name: 'Pão Low Carb de Micro-ondas',
    type: 'bread',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 ovo',
      '1 colher de sopa de farinha de coco',
      '1 colher de sopa de farinha de amêndoas',
      '1 colher de sopa de óleo de coco derretido',
      '1/2 colher de chá de fermento em pó',
      'Sal a gosto'
    ],
    nutrition: {
      calories: 150,
      carbs: '2g',
      protein: '6g',
      fat: '12g',
      fiber: '3g'
    },
    instructions: `
        • Misture todos os ingredientes em uma tigela até obter uma massa homogênea.
        • Despeje a massa em uma caneca untada com óleo de coco.
        • Leve ao micro-ondas por 2 minutos ou até o pão crescer e firmar.
        • Retire da caneca e corte ao meio. Sirva com recheios de sua preferência.
    `
  },
  {
    name: 'Bombom de Avelã Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de avelãs picadas',
      '1/2 xícara de leite condensado diet',
      '200g de chocolate 80% cacau derretido'
    ],
    nutrition: {
      calories: 180,
      carbs: '5g',
      protein: '4g',
      fat: '16g',
      fiber: '3g'
    },
    instructions: `
        • Misture as avelãs picadas com o leite condensado diet até formar uma massa.
        • Modele em pequenas bolinhas e passe no chocolate derretido.
        • Leve à geladeira por 2 horas antes de servir.
    `
  },
  {
    name: 'Bolo de Chocolate com Abobrinha Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de abobrinha ralada',
      '1/2 xícara de óleo de coco derretido',
      '3 ovos',
      '1/2 xícara de xilitol',
      '1 xícara de farinha de amêndoas',
      '1/2 xícara de cacau em pó',
      '1 colher de chá de essência de baunilha',
      '1 colher de chá de fermento em pó'
    ],
    nutrition: {
      calories: 200,
      carbs: '10g',
      protein: '6g',
      fat: '16g',
      fiber: '4g'
    },
    instructions: `
        • Pré-aqueça o forno a 180°C.
        • Bata a abobrinha, o óleo de coco, os ovos e o xilitol no liquidificador até obter uma mistura homogênea.
        • Misture a farinha de amêndoas, o cacau em pó, a essência de baunilha e o fermento até obter uma massa homogênea.
        • Despeje a massa em uma forma untada.
        • Asse por 25-30 minutos ou até dourar.
    `
  },
  {
    name: 'Pudim de Abóbora Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de abóbora cozida e amassada',
      '1/2 xícara de leite condensado diet',
      '1/4 xícara de xilitol',
      '1/2 xícara de creme de leite light',
      '1 pacote de gelatina sem sabor',
      '1/4 xícara de água'
    ],
    nutrition: {
      calories: 90,
      carbs: '8g',
      protein: '2g',
      fat: '5g',
      fiber: '2g'
    },
    instructions: `
        • Hidrate a gelatina na água e reserve.
        • Em uma panela, aqueça a abóbora, o leite condensado diet, o xilitol e o creme de leite até começar a ferver. Retire do fogo.
        • Adicione a gelatina hidratada e misture bem até dissolver completamente.
        • Despeje em formas individuais e leve à geladeira por 4 horas ou até firmar.
    `
  },
  {
    name: 'Sorvete de Maracujá Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 xícaras de suco de maracujá',
      '1 xícara de creme de leite light',
      '1/2 xícara de leite condensado diet',
      '1/4 xícara de xilitol'
    ],
    nutrition: {
      calories: 120,
      carbs: '7g',
      protein: '3g',
      fat: '10g',
      fiber: '1g'
    },
    instructions: `
        • Bata todos os ingredientes no liquidificador até obter uma mistura homogênea.
        • Coloque a mistura em um recipiente e leve ao congelador por 2 horas.
        • Retire do congelador e bata novamente no liquidificador.
        • Volte ao congelador por mais 4 horas antes de servir.
    `
  },
  {
    name: 'Torta de Morango Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de farinha de amêndoas',
      '1/2 xícara de manteiga derretida',
      '1/4 xícara de xilitol',
      '1 xícara de creme de leite light',
      '1/2 xícara de leite condensado diet',
      'Morangos frescos fatiados'
    ],
    nutrition: {
      calories: 250,
      carbs: '15g',
      protein: '5g',
      fat: '20g',
      fiber: '3g'
    },
    instructions: `
        • Pré-aqueça o forno a 180°C.
        • Misture a farinha de amêndoas, a manteiga derretida e o xilitol até formar uma massa.
        • Forre uma forma de torta com a massa e asse por 10-15 minutos. Deixe esfriar.
        • Misture o creme de leite com o leite condensado diet até obter um creme homogêneo.
        • Despeje o recheio sobre a massa e decore com morangos fatiados.
        • Leve à geladeira por 2 horas antes de servir.
    `
  },
  {
    name: 'Brigadeiro de Amêndoas Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de leite condensado diet',
      '1/2 xícara de amêndoas picadas',
      '1 colher de sopa de manteiga'
    ],
    nutrition: {
      calories: 100,
      carbs: '6g',
      protein: '2g',
      fat: '8g',
      fiber: '2g'
    },
    instructions: `
        • Misture todos os ingredientes em uma panela.
        • Cozinhe em fogo baixo, mexendo sempre, até desgrudar do fundo da panela.
        • Deixe esfriar e leve à geladeira por 2 horas.
        • Modele os brigadeiros e passe nas amêndoas picadas.
    `
  },
  {
    name: 'Bolo de Coco com Limão Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de farinha de coco',
      '1/2 xícara de xilitol',
      '1/4 xícara de óleo de coco derretido',
      '3 ovos',
      'Suco de 1 limão',
      'Raspas de limão para decorar',
      '1 colher de chá de fermento em pó'
    ],
    nutrition: {
      calories: 150,
      carbs: '8g',
      protein: '4g',
      fat: '12g',
      fiber: '5g'
    },
    instructions: `
        • Pré-aqueça o forno a 180°C.
        • Misture todos os ingredientes até obter uma massa homogênea.
        • Despeje a massa em uma forma untada.
        • Asse por 25-30 minutos ou até dourar.
        • Decore com raspas de limão antes de servir.
    `
  },
  {
    name: 'Gelatina de Uva Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 litro de suco de uva (bem concentrado)',
      '2 colheres de sopa de xilitol',
      '1 pacote de gelatina sem sabor'
    ],
    nutrition: {
      calories: 40,
      carbs: '8g',
      protein: '1g',
      fat: '0g',
      fiber: '1g'
    },
    instructions: `
        • Prepare a gelatina conforme as instruções da embalagem.
        • Misture a gelatina hidratada com o suco de uva e o xilitol.
        • Despeje em formas individuais e leve à geladeira por 4 horas ou até firmar.
    `
  },
  {
    name: 'Muffin de Limão Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de farinha de amêndoas',
      '1/2 xícara de xilitol',
      '1/4 xícara de óleo de coco derretido',
      '3 ovos',
      'Suco de 2 limões',
      'Raspas de limão para decorar',
      '1 colher de chá de essência de baunilha',
      '1 colher de chá de fermento em pó'
    ],
    nutrition: {
      calories: 130,
      carbs: '6g',
      protein: '4g',
      fat: '10g',
      fiber: '2g'
    },
    instructions: `
        • Pré-aqueça o forno a 180°C.
        • Misture todos os ingredientes até obter uma massa homogênea.
        • Despeje a massa em forminhas de muffin.
        • Asse por 20-25 minutos ou até dourar.
        • Decore com raspas de limão antes de servir.
    `
  },
  {
    name: 'Pudim de Morango Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de morangos frescos',
      '1/2 xícara de leite condensado diet',
      '1/4 xícara de xilitol',
      '1/2 xícara de creme de leite light',
      '1 pacote de gelatina sem sabor',
      '1/4 xícara de água'
    ],
    nutrition: {
      calories: 90,
      carbs: '8g',
      protein: '2g',
      fat: '5g',
      fiber: '2g'
    },
    instructions: `
        • Hidrate a gelatina na água e reserve.
        • Bata os morangos, o leite condensado diet, o xilitol e o creme de leite no liquidificador até obter uma mistura homogênea.
        • Aqueça a mistura em uma panela até começar a ferver. Retire do fogo.
        • Adicione a gelatina hidratada e misture bem até dissolver completamente.
        • Despeje em formas individuais e leve à geladeira por 4 horas ou até firmar.
    `
  },
  {
    name: 'Bombom de Coco com Chocolate Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de coco ralado sem açúcar',
      '1/2 xícara de leite condensado diet',
      '200g de chocolate 80% cacau derretido'
    ],
    nutrition: {
      calories: 180,
      carbs: '5g',
      protein: '4g',
      fat: '16g',
      fiber: '3g'
    },
    instructions: `
        • Misture o coco ralado com o leite condensado diet até formar uma massa.
        • Modele em pequenas bolinhas e passe no chocolate derretido.
        • Leve à geladeira por 2 horas antes de servir.
    `
  },
  {
    name: 'Brigadeiro de Nozes Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de leite condensado diet',
      '1/2 xícara de nozes picadas',
      '1 colher de sopa de manteiga'
    ],
    nutrition: {
      calories: 100,
      carbs: '6g',
      protein: '2g',
      fat: '8g',
      fiber: '2g'
    },
    instructions: `
        • Misture todos os ingredientes em uma panela.
        • Cozinhe em fogo baixo, mexendo sempre, até desgrudar do fundo da panela.
        • Deixe esfriar e leve à geladeira por 2 horas.
        • Modele os brigadeiros e passe nas nozes picadas.
    `
  },
  {
    name: 'Sorvete de Coco com Chocolate Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 xícaras de leite de coco',
      '1 xícara de creme de leite light',
      '1/2 xícara de xilitol',
      '100g de chocolate 80% cacau picado'
    ],
    nutrition: {
      calories: 150,
      carbs: '7g',
      protein: '2g',
      fat: '14g',
      fiber: '3g'
    },
    instructions: `
        • Bata o leite de coco, o creme de leite e o xilitol no liquidificador até obter uma mistura homogênea.
        • Coloque a mistura em um recipiente e leve ao congelador por 2 horas.
        • Retire do congelador e bata novamente no liquidificador.
        • Adicione o chocolate picado e misture bem.
        • Volte ao congelador por mais 4 horas antes de servir.
    `
  },
  {
    name: 'Bolo de Abóbora Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de abóbora cozida e amassada',
      '1/2 xícara de óleo de coco derretido',
      '3 ovos',
      '1/2 xícara de xilitol',
      '1 xícara de farinha de amêndoas',
      '1 colher de chá de essência de baunilha',
      '1 colher de chá de fermento em pó'
    ],
    nutrition: {
      calories: 200,
      carbs: '10g',
      protein: '6g',
      fat: '16g',
      fiber: '4g'
    },
    instructions: `
        • Pré-aqueça o forno a 180°C.
        • Bata a abóbora, o óleo de coco, os ovos e o xilitol no liquidificador até obter uma mistura homogênea.
        • Misture a farinha de amêndoas, a essência de baunilha e o fermento até obter uma massa homogênea.
        • Despeje a massa em uma forma untada.
        • Asse por 25-30 minutos ou até dourar.
    `
  },
  {
    name: 'Gelatina de Limão Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 litro de suco de limão (bem concentrado)',
      '2 colheres de sopa de xilitol',
      '1 pacote de gelatina sem sabor'
    ],
    nutrition: {
      calories: 40,
      carbs: '8g',
      protein: '1g',
      fat: '0g',
      fiber: '1g'
    },
    instructions: `
        • Prepare a gelatina conforme as instruções da embalagem.
        • Misture a gelatina hidratada com o suco de limão e o xilitol.
        • Despeje em formas individuais e leve à geladeira por 4 horas ou até firmar.
    `
  },
  {
    name: 'Muffin de Banana Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de farinha de amêndoas',
      '1/2 xícara de xilitol',
      '1/4 xícara de óleo de coco derretido',
      '3 ovos',
      '2 bananas maduras amassadas',
      '1 colher de chá de essência de baunilha',
      '1 colher de chá de fermento em pó'
    ],
    nutrition: {
      calories: 130,
      carbs: '10g',
      protein: '4g',
      fat: '10g',
      fiber: '2g'
    },
    instructions: `
        • Pré-aqueça o forno a 180°C.
        • Misture todos os ingredientes até obter uma massa homogênea.
        • Despeje a massa em forminhas de muffin.
        • Asse por 20-25 minutos ou até dourar.
    `
  },
  {
    name: 'Pudim de Chocolate com Coco Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de leite de coco',
      '1/2 xícara de creme de leite light',
      '1/2 xícara de leite condensado diet',
      '1/2 xícara de cacau em pó',
      '1 pacote de gelatina sem sabor',
      '1/4 xícara de água'
    ],
    nutrition: {
      calories: 90,
      carbs: '8g',
      protein: '2g',
      fat: '5g',
      fiber: '2g'
    },
    instructions: `
        • Hidrate a gelatina na água e reserve.
        • Em uma panela, aqueça o leite de coco, o creme de leite, o leite condensado diet e o cacau em pó até começar a ferver. Retire do fogo.
        • Adicione a gelatina hidratada e misture bem até dissolver completamente.
        • Despeje em formas individuais e leve à geladeira por 4 horas ou até firmar.
    `
  },
  {
    name: 'Bombom de Amêndoas Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de amêndoas picadas',
      '1/2 xícara de leite condensado diet',
      '200g de chocolate 80% cacau derretido'
    ],
    nutrition: {
      calories: 180,
      carbs: '5g',
      protein: '4g',
      fat: '16g',
      fiber: '3g'
    },
    instructions: `
        • Misture as amêndoas picadas com o leite condensado diet até formar uma massa.
        • Modele em pequenas bolinhas e passe no chocolate derretido.
        • Leve à geladeira por 2 horas antes de servir.
    `
  },
  {
    name: 'Brigadeiro de Café Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de leite condensado diet',
      '1 colher de sopa de café solúvel',
      '1 colher de sopa de manteiga'
    ],
    nutrition: {
      calories: 100,
      carbs: '6g',
      protein: '2g',
      fat: '8g',
      fiber: '2g'
    },
    instructions: `
        • Misture todos os ingredientes em uma panela.
        • Cozinhe em fogo baixo, mexendo sempre, até desgrudar do fundo da panela.
        • Deixe esfriar e leve à geladeira por 2 horas.
        • Modele os brigadeiros e passe no café solúvel.
    `
  },
  {
    name: 'Sorvete de Abacaxi Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 xícaras de abacaxi picado',
      '1 xícara de creme de leite light',
      '1/2 xícara de leite condensado diet',
      '1/4 xícara de xilitol'
    ],
    nutrition: {
      calories: 120,
      carbs: '7g',
      protein: '3g',
      fat: '10g',
      fiber: '1g'
    },
    instructions: `
        • Bata todos os ingredientes no liquidificador até obter uma mistura homogênea.
        • Coloque a mistura em um recipiente e leve ao congelador por 2 horas.
        • Retire do congelador e bata novamente no liquidificador.
        • Volte ao congelador por mais 4 horas antes de servir.
    `
  },
  {
    name: 'Torta de Coco Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de farinha de coco',
      '1/2 xícara de manteiga derretida',
      '1/4 xícara de xilitol',
      '1 xícara de creme de leite light',
      '1/2 xícara de leite condensado diet',
      '1/2 xícara de coco ralado sem açúcar'
    ],
    nutrition: {
      calories: 250,
      carbs: '15g',
      protein: '5g',
      fat: '20g',
      fiber: '3g'
    },
    instructions: `
        • Pré-aqueça o forno a 180°C.
        • Misture a farinha de coco, a manteiga derretida e o xilitol até formar uma massa.
        • Forre uma forma de torta com a massa e asse por 10-15 minutos. Deixe esfriar.
        • Misture o creme de leite, o leite condensado diet e o coco ralado até obter um creme homogêneo.
        • Despeje o recheio sobre a massa e leve à geladeira por 2 horas antes de servir.
    `
  },
  {
    name: 'Bolo de Limão com Amêndoas Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de farinha de amêndoas',
      '1/2 xícara de xilitol',
      '1/4 xícara de óleo de coco derretido',
      '3 ovos',
      'Suco de 1 limão',
      'Raspas de limão para decorar',
      '1 colher de chá de fermento em pó'
    ],
    nutrition: {
      calories: 150,
      carbs: '8g',
      protein: '4g',
      fat: '12g',
      fiber: '5g'
    },
    instructions: `
        • Pré-aqueça o forno a 180°C.
        • Misture todos os ingredientes até obter uma massa homogênea.
        • Despeje a massa em uma forma untada.
        • Asse por 25-30 minutos ou até dourar.
        • Decore com raspas de limão antes de servir.
    `
  },
  {
    name: 'Gelatina de Limão com Chia Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 litro de suco de limão (bem concentrado)',
      '2 colheres de sopa de xilitol',
      '1 pacote de gelatina sem sabor',
      '2 colheres de sopa de chia'
    ],
    nutrition: {
      calories: 50,
      carbs: '8g',
      protein: '1g',
      fat: '1g',
      fiber: '3g'
    },
    instructions: `
        • Prepare a gelatina conforme as instruções da embalagem.
        • Misture a gelatina hidratada com o suco de limão, o xilitol e a chia.
        • Despeje em formas individuais e leve à geladeira por 4 horas ou até firmar.
    `
  },
  {
    name: 'Muffin de Chocolate com Amêndoas Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de farinha de amêndoas',
      '1/2 xícara de xilitol',
      '1/4 xícara de cacau em pó',
      '1/4 xícara de óleo de coco derretido',
      '3 ovos',
      '1 colher de chá de essência de baunilha',
      '1 colher de chá de fermento em pó'
    ],
    nutrition: {
      calories: 130,
      carbs: '6g',
      protein: '4g',
      fat: '10g',
      fiber: '2g'
    },
    instructions: `
        • Pré-aqueça o forno a 180°C.
        • Misture todos os ingredientes até obter uma massa homogênea.
        • Despeje a massa em forminhas de muffin.
        • Asse por 20-25 minutos ou até dourar.
    `
  },
  {
    name: 'Pudim de Café com Coco Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de leite de coco',
      '1/2 xícara de creme de leite light',
      '1/2 xícara de leite condensado diet',
      '1/2 xícara de café forte',
      '1 pacote de gelatina sem sabor',
      '1/4 xícara de água'
    ],
    nutrition: {
      calories: 90,
      carbs: '6g',
      protein: '2g',
      fat: '7g',
      fiber: '2g'
    },
    instructions: `
        • Hidrate a gelatina na água e reserve.
        • Em uma panela, aqueça o leite de coco, o creme de leite, o leite condensado diet e o café até começar a ferver. Retire do fogo.
        • Adicione a gelatina hidratada e misture bem até dissolver completamente.
        • Despeje em formas individuais e leve à geladeira por 4 horas ou até firmar.
    `
  },
  {
    name: 'Bombom de Coco com Amêndoas Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de coco ralado sem açúcar',
      '1/2 xícara de leite condensado diet',
      '1/2 xícara de amêndoas picadas',
      '200g de chocolate 80% cacau derretido'
    ],
    nutrition: {
      calories: 180,
      carbs: '5g',
      protein: '4g',
      fat: '16g',
      fiber: '3g'
    },
    instructions: `
        • Misture o coco ralado, o leite condensado diet e as amêndoas picadas até formar uma massa.
        • Modele em pequenas bolinhas e passe no chocolate derretido.
        • Leve à geladeira por 2 horas antes de servir.
    `
  },
  {
    name: 'Brigadeiro de Limão com Coco Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de leite condensado diet',
      '1/4 xícara de suco de limão',
      '1 colher de sopa de manteiga',
      '1/2 xícara de coco ralado sem açúcar'
    ],
    nutrition: {
      calories: 100,
      carbs: '6g',
      protein: '2g',
      fat: '8g',
      fiber: '2g'
    },
    instructions: `
        • Misture o leite condensado diet, o suco de limão e a manteiga em uma panela.
        • Cozinhe em fogo baixo, mexendo sempre, até desgrudar do fundo da panela.
        • Deixe esfriar e leve à geladeira por 2 horas.
        • Modele os brigadeiros e passe no coco ralado.
    `
  },
  {
    name: 'Sorvete de Limão com Coco Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 xícaras de leite de coco',
      '1 xícara de creme de leite light',
      '1/2 xícara de xilitol',
      'Suco de 2 limões'
    ],
    nutrition: {
      calories: 120,
      carbs: '7g',
      protein: '3g',
      fat: '10g',
      fiber: '1g'
    },
    instructions: `
        • Bata o leite de coco, o creme de leite, o xilitol e o suco de limão no liquidificador até obter uma mistura homogênea.
        • Coloque a mistura em um recipiente e leve ao congelador por 2 horas.
        • Retire do congelador e bata novamente no liquidificador.
        • Volte ao congelador por mais 4 horas antes de servir.
    `
  },
  {
    name: 'Bolo de Abacaxi Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 xícaras de abacaxi picado',
      '1/2 xícara de óleo de coco derretido',
      '3 ovos',
      '1/2 xícara de xilitol',
      '1 xícara de farinha de amêndoas',
      '1 colher de chá de essência de baunilha',
      '1 colher de chá de fermento em pó'
    ],
    nutrition: {
      calories: 200,
      carbs: '10g',
      protein: '6g',
      fat: '16g',
      fiber: '4g'
    },
    instructions: `
        • Pré-aqueça o forno a 180°C.
        • Bata o abacaxi, o óleo de coco, os ovos e o xilitol no liquidificador até obter uma mistura homogênea.
        • Misture a farinha de amêndoas, a essência de baunilha e o fermento até obter uma massa homogênea.
        • Despeje a massa em uma forma untada.
        • Asse por 25-30 minutos ou até dourar.
    `
  },
  {
    name: 'Torta de Abóbora Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 xícaras de abóbora cozida e amassada',
      '1/2 xícara de óleo de coco derretido',
      '3 ovos',
      '1/2 xícara de xilitol',
      '1 xícara de farinha de amêndoas',
      '1 colher de chá de essência de baunilha',
      '1 colher de chá de fermento em pó'
    ],
    nutrition: {
      calories: 200,
      carbs: '10g',
      protein: '6g',
      fat: '16g',
      fiber: '4g'
    },
    instructions: `
        • Pré-aqueça o forno a 180°C.
        • Bata a abóbora, o óleo de coco, os ovos e o xilitol no liquidificador até obter uma mistura homogênea.
        • Misture a farinha de amêndoas, a essência de baunilha e o fermento até obter uma massa homogênea.
        • Despeje a massa em uma forma untada.
        • Asse por 25-30 minutos ou até dourar.
    `
  },
  {
    name: 'Bombom de Coco com Limão Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de coco ralado sem açúcar',
      '1/2 xícara de leite condensado diet',
      'Suco de 1 limão',
      '200g de chocolate 80% cacau derretido'
    ],
    nutrition: {
      calories: 180,
      carbs: '5g',
      protein: '4g',
      fat: '16g',
      fiber: '3g'
    },
    instructions: `
        • Misture o coco ralado, o leite condensado diet e o suco de limão até formar uma massa.
        • Modele em pequenas bolinhas e passe no chocolate derretido.
        • Leve à geladeira por 2 horas antes de servir.
    `
  },
  {
    name: 'Biscoitos de Amêndoas com Coco Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de farinha de amêndoas',
      '1/2 xícara de coco ralado sem açúcar',
      '1/2 xícara de xilitol',
      '1/4 xícara de óleo de coco derretido',
      '1 ovo',
      '1 colher de chá de essência de baunilha',
      '1 colher de chá de fermento em pó'
    ],
    nutrition: {
      calories: 130,
      carbs: '6g',
      protein: '4g',
      fat: '10g',
      fiber: '2g'
    },
    instructions: `
        • Pré-aqueça o forno a 180°C.
        • Misture todos os ingredientes até obter uma massa homogênea.
        • Modele os biscoitos e coloque em uma assadeira forrada com papel manteiga.
        • Asse por 15-20 minutos ou até dourar.
    `
  },
  {
    name: 'Sorvete de Chocolate com Amêndoas Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 xícaras de leite de amêndoas',
      '1 xícara de creme de leite light',
      '1/2 xícara de xilitol',
      '1/2 xícara de cacau em pó',
      '1/2 xícara de amêndoas picadas'
    ],
    nutrition: {
      calories: 150,
      carbs: '7g',
      protein: '3g',
      fat: '12g',
      fiber: '3g'
    },
    instructions: `
        • Bata o leite de amêndoas, o creme de leite, o xilitol e o cacau em pó no liquidificador até obter uma mistura homogênea.
        • Coloque a mistura em um recipiente e leve ao congelador por 2 horas.
        • Retire do congelador e bata novamente no liquidificador.
        • Adicione as amêndoas picadas e misture bem.
        • Volte ao congelador por mais 4 horas antes de servir.
    `
  },
  {
    name: 'Muffin de Morango Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de farinha de amêndoas',
      '1/2 xícara de xilitol',
      '1/4 xícara de óleo de coco derretido',
      '3 ovos',
      '1 xícara de morangos picados',
      '1 colher de chá de essência de baunilha',
      '1 colher de chá de fermento em pó'
    ],
    nutrition: {
      calories: 130,
      carbs: '8g',
      protein: '4g',
      fat: '10g',
      fiber: '3g'
    },
    instructions: `
        • Pré-aqueça o forno a 180°C.
        • Misture todos os ingredientes até obter uma massa homogênea.
        • Despeje a massa em forminhas de muffin.
        • Asse por 20-25 minutos ou até dourar.
    `
  },
  {
    name: 'Pudim de Coco com Limão Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de leite de coco',
      '1/2 xícara de creme de leite light',
      '1/2 xícara de leite condensado diet',
      'Suco de 1 limão',
      '1 pacote de gelatina sem sabor',
      '1/4 xícara de água'
    ],
    nutrition: {
      calories: 90,
      carbs: '6g',
      protein: '2g',
      fat: '7g',
      fiber: '2g'
    },
    instructions: `
        • Hidrate a gelatina na água e reserve.
        • Em uma panela, aqueça o leite de coco, o creme de leite, o leite condensado diet e o suco de limão até começar a ferver. Retire do fogo.
        • Adicione a gelatina hidratada e misture bem até dissolver completamente.
        • Despeje em formas individuais e leve à geladeira por 4 horas ou até firmar.
    `
  },
  {
    name: 'Bolo de Cenoura com Coco Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 cenouras médias raladas',
      '1/2 xícara de óleo de coco derretido',
      '3 ovos',
      '1/2 xícara de xilitol',
      '1 xícara de farinha de coco',
      '1 colher de chá de essência de baunilha',
      '1 colher de chá de fermento em pó',
      '100g de chocolate 80% cacau derretido',
      '1/2 xícara de creme de leite light'
    ],
    nutrition: {
      calories: 200,
      carbs: '12g',
      protein: '5g',
      fat: '16g',
      fiber: '5g'
    },
    instructions: `
        • Pré-aqueça o forno a 180°C.
        • Bata as cenouras, o óleo de coco, os ovos e o xilitol no liquidificador até obter uma mistura homogênea.
        • Misture a farinha de coco, a essência de baunilha e o fermento até obter uma massa homogênea.
        • Despeje a massa em uma forma untada.
        • Asse por 25-30 minutos ou até dourar.
        • Cobertura: Misture o chocolate derretido com o creme de leite e espalhe sobre o bolo frio.
    `
  },
  {
    name: 'Gelatina de Morango com Chia Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 litro de suco de morango (bem concentrado)',
      '2 colheres de sopa de xilitol',
      '1 pacote de gelatina sem sabor',
      '2 colheres de sopa de chia'
    ],
    nutrition: {
      calories: 50,
      carbs: '8g',
      protein: '1g',
      fat: '1g',
      fiber: '3g'
    },
    instructions: `
        • Prepare a gelatina conforme as instruções da embalagem.
        • Misture a gelatina hidratada com o suco de morango, o xilitol e a chia.
        • Despeje em formas individuais e leve à geladeira por 4 horas ou até firmar.
    `
  },
  {
    name: 'Muffin de Limão com Chia Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de farinha de amêndoas',
      '1/2 xícara de xilitol',
      '1/4 xícara de óleo de coco derretido',
      '3 ovos',
      'Suco de 2 limões',
      'Raspas de limão para decorar',
      '1 colher de chá de essência de baunilha',
      '1 colher de chá de fermento em pó',
      '2 colheres de sopa de chia'
    ],
    nutrition: {
      calories: 130,
      carbs: '6g',
      protein: '4g',
      fat: '10g',
      fiber: '3g'
    },
    instructions: `
        • Pré-aqueça o forno a 180°C.
        • Misture todos os ingredientes até obter uma massa homogênea.
        • Despeje a massa em forminhas de muffin.
        • Asse por 20-25 minutos ou até dourar.
        • Decore com raspas de limão antes de servir.
    `
  },
  {
    name: 'Pudim de Maracujá com Chia Low Carb',
    type: 'dessert',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara de suco de maracujá',
      '1/2 xícara de creme de leite light',
      '1/2 xícara de leite condensado diet',
      '1/4 xícara de xilitol',
      '2 colheres de sopa de chia',
      '1 pacote de gelatina sem sabor',
      '1/4 xícara de água'
    ],
    nutrition: {
      calories: 90,
      carbs: '6g',
      protein: '2g',
      fat: '7g',
      fiber: '3g'
    },
    instructions: `
        • Hidrate a gelatina na água e reserve.
        • Bata o suco de maracujá, o creme de leite, o leite condensado e o xilitol no liquidificador até obter uma mistura homogênea.
        • Aqueça a mistura em uma panela até começar a ferver. Retire do fogo.
        • Adicione a gelatina hidratada e misture bem até dissolver completamente.
        • Adicione a chia e misture bem.
        • Despeje em formas individuais e leve à geladeira por 4 horas ou até firmar.
    `
  },

  {
    name: 'Pão de Berinjela de Microondas',
    type: 'bread',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '15ml de óleo de coco',
      '1 ovo',
      '20g de farinha de berinjela',
      '1 colher (chá) de fermento químico',
      'Sal a gosto (moderado)'
    ],
    nutrition: {
      calories: 120,
      carbs: '3g',
      protein: '5g',
      fat: '10g',
      fiber: '2g'
    },
    instructions: `
      • Em uma xícara grande, coloque o ovo e bata bem.
      • Adicione o óleo de coco, a farinha de berinjela e bata novamente.
      • Acrescente o sal, o fermento e misture com cuidado.
      • Dê algumas batidinhas na xícara para nivelar a massa.
      • Leve ao micro-ondas por cerca de 90 segundos.
      • Retire do micro-ondas, passe uma faca ao redor do pão para desenformar. Sirva em seguida.
  `
  },
  {
    name: 'Pão Oopsie',
    type: 'bread',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '3 ovos',
      '90g de cream cheese',
      '100g de sementes de chia ou linhaça',
      '1 pitada de sal'
    ],
    nutrition: {
      calories: 150,
      carbs: '1g',
      protein: '7g',
      fat: '13g',
      fiber: '3g'
    },
    instructions: `
      • Bata as claras com um pouco de sal até atingir o ponto de neve.
      • Em um recipiente, misture as gemas e o cream cheese.
      • Adicione as claras e misture delicadamente.
      • Unte uma forma com papel manteiga e, com uma colher, coloque porções da massa para formar os pães, espalhe as sementes por cima.
      • Leve ao forno a 160°C por aproximadamente 30 minutos.
  `
  },
  {
    name: 'Pão de Amendoim',
    type: 'bread',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '3 xícaras (chá) de amendoim torrado',
      '4 ovos',
      '2/3 xícara (chá) de água',
      '1 colher (chá) de sal',
      '1 colher (sopa) de fermento em pó para bolos',
      'Óleo de coco para untar',
      '1 colher (sopa) de cebola desidratada em flocos'
    ],
    nutrition: {
      calories: 250,
      carbs: '6g',
      protein: '12g',
      fat: '20g',
      fiber: '4g'
    },
    instructions: `
      • Coloque o amendoim em um liquidificador e bata bem até triturar todo o amendoim.
      • Acrescente o sal, os ovos e a água e bata por cerca de 2 minutos até obter uma mistura homogênea.
      • Adicione o fermento e a cebola desidratada e misture delicadamente.
      • Despeje a massa em uma forma untada com óleo de coco.
      • Asse em forno pré-aquecido a 180°C por cerca de 40 minutos.
  `
  },
  {
    name: 'Pão Parmesão',
    type: 'bread',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara (chá) de farinha de amêndoas',
      '1/2 xícara (chá) de queijo parmesão ralado',
      '4 ovos',
      '1 colher (sopa) de fermento químico em pó',
      '1/2 xícara (chá) de creme de leite'
    ],
    nutrition: {
      calories: 180,
      carbs: '4g',
      protein: '10g',
      fat: '15g',
      fiber: '2g'
    },
    instructions: `
      • Em uma tigela, misture a farinha de amêndoas e o queijo parmesão.
      • Adicione os ovos e o creme de leite, misture bem.
      • Por último, acrescente o fermento e misture delicadamente.
      • Despeje a massa em uma forma untada e leve ao forno pré-aquecido a 180°C por aproximadamente 30 minutos.
  `
  },
  {
    name: 'Pão de Nuvem',
    type: 'bread',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '3 ovos',
      '90g de cream cheese',
      '1 colher (sopa) de fermento químico em pó',
      '1 pitada de sal'
    ],
    nutrition: {
      calories: 150,
      carbs: '1g',
      protein: '7g',
      fat: '13g',
      fiber: '3g'
    },
    instructions: `
      • Separe as claras das gemas.
      • Bata as claras com uma pitada de sal até atingir ponto de neve.
      • Em outra tigela, misture as gemas com o cream cheese.
      • Incorpore delicadamente as claras em neve à mistura de gemas e cream cheese.
      • Adicione o fermento e misture suavemente.
      • Coloque a massa em uma forma forrada com papel manteiga, formando pequenos montes.
      • Leve ao forno pré-aquecido a 150°C por aproximadamente 20 minutos ou até dourar.
  `
  },
  {
    name: 'Pão Com Psyllium',
    type: 'bread',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara (chá) de farinha de amêndoas',
      '1/4 xícara (chá) de farinha de linhaça dourada',
      '2 colheres (sopa) de psyllium',
      '1 colher (sopa) de fermento químico em pó',
      '4 ovos',
      '1/2 xícara (chá) de água morna',
      '1/4 xícara (chá) de azeite de oliva',
      '1 pitada de sal'
    ],
    nutrition: {
      calories: 200,
      carbs: '5g',
      protein: '8g',
      fat: '17g',
      fiber: '5g'
    },
    instructions: `
      • Em uma tigela, misture as farinhas, o psyllium e o sal.
      • Adicione os ovos, o azeite e a água morna, misture bem até obter uma massa homogênea.
      • Acrescente o fermento e misture delicadamente.
      • Despeje a massa em uma forma untada e leve ao forno pré-aquecido a 180°C por aproximadamente 40 minutos.
  `
  },
  {
    name: 'Pãozinho Low Carb',
    type: 'bread',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '3 ovos',
      '150g de purê de moranga',
      '2 colheres (sopa) de psyllium',
      '2 colheres (sopa) de farinha de berinjela',
      '2 colheres (sopa) de farinha de amêndoas',
      '2 colheres (sopa) de azeite de oliva extra-virgem',
      '1 colher (sopa) rasa de fermento biológico',
      '1 pitada de sal (opcional)'
    ],
    nutrition: {
      calories: 110,
      carbs: '4g',
      protein: '5g',
      fat: '9g',
      fiber: '3g'
    },
    instructions: `
      • Em um recipiente, misture os ovos, o purê de moranga, o psyllium, a farinha de berinjela, a farinha de amêndoas, o sal e o azeite de oliva até obter uma mistura homogênea.
      • Acrescente o fermento e misture delicadamente.
      • Disponha a mistura em uma forma de bolo inglês untada com azeite de oliva.
      • Leve ao forno pré-aquecido a 180°C por aproximadamente 35 minutos.
  `
  },
  {
    name: 'Pão de Chia',
    type: 'bread',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 ovos',
      '3 colheres (sopa) de farinha de amêndoas',
      '2 colheres (sopa) de farinha de coco',
      '1 colher (sopa) de chia',
      '1 colher (sopa) de fermento em pó',
      '1 colher (sopa) de azeite de oliva',
      'Sal a gosto'
    ],
    nutrition: {
      calories: 130,
      carbs: '4g',
      protein: '6g',
      fat: '10g',
      fiber: '3g'
    },
    instructions: `
      • Misture todos os ingredientes até obter uma massa homogênea.
      • Coloque a massa em uma forma untada e leve ao forno pré-aquecido a 180°C por aproximadamente 30 minutos.
  `
  },
  {
    name: 'Pão de Leite de Coco',
    type: 'bread',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 ovos',
      '1/2 xícara (chá) de leite de coco',
      '2 colheres (sopa) de óleo de coco',
      '1 xícara (chá) de farinha de amêndoas',
      '2 colheres (sopa) de farinha de coco',
      '1 colher (sopa) de fermento em pó',
      'Sal a gosto'
    ],
    nutrition: {
      calories: 140,
      carbs: '5g',
      protein: '6g',
      fat: '12g',
      fiber: '3g'
    },
    instructions: `
      • Bata os ovos com o leite de coco e o óleo de coco.
      • Adicione as farinhas e misture bem.
      • Acrescente o fermento e misture delicadamente.
      • Coloque a massa em uma forma untada e leve ao forno pré-aquecido a 180°C por aproximadamente 30 minutos.
  `
  },
  {
    name: 'Pão de Abóbora',
    type: 'bread',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '3 ovos',
      '1 xícara (chá) de purê de abóbora',
      '1/4 xícara (chá) de óleo de coco',
      '1/2 xícara (chá) de farinha de amêndoas',
      '1 colher (sopa) de psyllium',
      '1 colher (sopa) de fermento em pó',
      'Sal a gosto'
    ],
    nutrition: {
      calories: 120,
      carbs: '6g',
      protein: '5g',
      fat: '9g',
      fiber: '4g'
    },
    instructions: `
      • Misture todos os ingredientes até obter uma massa homogênea.
      • Coloque a massa em uma forma untada e leve ao forno pré-aquecido a 180°C por aproximadamente 30 minutos.
  `
  },
  {
    name: 'Pão de Linhaça',
    type: 'bread',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara (chá) de farinha de linhaça',
      '1/2 xícara (chá) de farinha de amêndoas',
      '4 ovos',
      '1/2 xícara (chá) de água',
      '1 colher (sopa) de azeite de oliva',
      '1 colher (sopa) de fermento em pó',
      'Sal a gosto'
    ],
    nutrition: {
      calories: 150,
      carbs: '4g',
      protein: '8g',
      fat: '12g',
      fiber: '5g'
    },
    instructions: `
      • Misture todos os ingredientes até obter uma massa homogênea.
      • Coloque a massa em uma forma untada e leve ao forno pré-aquecido a 180°C por aproximadamente 30 minutos.
  `
  },
  {
    name: 'Pão de Couve-Flor',
    type: 'bread',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 couve-flor picadinha',
      '1/2 xícara (chá) de queijo parmesão ralado',
      '2 ovos',
      'Sal a gosto'
    ],
    nutrition: {
      calories: 100,
      carbs: '3g',
      protein: '7g',
      fat: '7g',
      fiber: '2g'
    },
    instructions: `
      • Pique muito bem a couve-flor até formar um arroz de couve-flor.
      • Em um recipiente, misture a couve-flor com os ovos, o queijo parmesão e o sal até obter uma mistura homogênea.
      • Divida a massa em formato de bolinhas até obter a quantidade de pão desejada.
      • Em uma frigideira aquecida com manteiga, doure o pão por cerca de 6 minutos de cada lado ou até ficar bem dourado.
  `
  },
  {
    name: 'Sanduíche de Frango',
    type: 'sandwich',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 fatias de pão de forma low carb',
      '4 colheres (sopa) de frango desfiado',
      '1 colher (sopa) de maionese caseira',
      '2 colheres (sopa) de cenoura ralada',
      '2 folhas de alface'
    ],
    nutrition: {
      calories: 250,
      carbs: '12g',
      protein: '18g',
      fat: '15g',
      fiber: '3g'
    },
    instructions: `
      • Descasque a cenoura e rale bem fininha.
      • Em uma vasilha, misture o frango desfiado, a maionese caseira e a cenoura, misture bem.
      • Monte o sanduíche com as fatias de pão, o recheio de frango e as folhas de alface.
  `
  },
  {
    name: 'Torrada de Abacate e Ovo',
    type: 'breakfast',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 fatias de pão integral ou low carb',
      '1 abacate maduro',
      '1 ovo',
      'Sal e pimenta a gosto'
    ],
    nutrition: {
      calories: 200,
      carbs: '12g',
      protein: '10g',
      fat: '15g',
      fiber: '6g'
    },
    instructions: `
      • Torre as fatias de pão.
      • Amasse o abacate e tempere com sal e pimenta a gosto.
      • Cozinhe o ovo ao ponto desejado.
      • Espalhe o abacate sobre as torradas e coloque o ovo por cima.
  `
  },
  {
    name: 'Waffle Low Carb',
    type: 'breakfast',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 ovos',
      '2 colheres (sopa) de farinha de amêndoas',
      '1 colher (sopa) de óleo de coco',
      '1 colher (chá) de fermento em pó',
      'Sal a gosto'
    ],
    nutrition: {
      calories: 180,
      carbs: '4g',
      protein: '7g',
      fat: '15g',
      fiber: '3g'
    },
    instructions: `
      • Misture todos os ingredientes até obter uma massa homogênea.
      • Coloque a massa em uma máquina de waffles pré-aquecida e cozinhe até dourar.
      • Sirva com os acompanhamentos de sua preferência.
  `
  },
  {
    name: 'Pão de Hambúrguer Low Carb',
    type: 'bread',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 fatias de pão de forma low carb',
      '150 g de atum em água escorrido',
      '100 g de cream cheese',
      '3 fatias de tomate',
      '2 folhas de alface',
      'Sal e orégano a gosto'
    ],
    nutrition: {
      calories: 250,
      carbs: '10g',
      protein: '20g',
      fat: '15g',
      fiber: '4g'
    },
    instructions: `
      • Em uma vasilha, coloque o atum e o cream cheese e misture bem até incorporar os ingredientes.
      • Tempere com sal e orégano a gosto.
      • Recheie a metade das fatias de pão com a mistura, coloque as fatias de tomate e as folhas de alface.
      • Cubra com a fatia restante e sirva em seguida.
  `
  },
  {
    name: 'Omelete de Jiló',
    type: 'breakfast',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 jilós crus em pedaços',
      '3 ovos',
      '1/4 cebola picada',
      '1/2 tomate picado',
      '2 colheres (sopa) de queijo parmesão ralado',
      '1 colher (sopa) de azeite de oliva',
      'Salsinha picada a gosto',
      'Sal e pimenta do reino a gosto'
    ],
    nutrition: {
      calories: 200,
      carbs: '6g',
      protein: '10g',
      fat: '15g',
      fiber: '3g'
    },
    instructions: `
      • Em um recipiente, bata ligeiramente os ovos e junte os jilós em pedaços, a cebola picada, o tomate picado, o queijo parmesão e a salsinha.
      • Tempere com sal e pimenta do reino a gosto.
      • Em uma frigideira aquecida com azeite, despeje a mistura de ovos e deixe cozinhar até firmar.
      • Vire a omelete para dourar do outro lado e sirva em seguida.
  `
  },
  {
    name: 'Omelete de Forno de Berinjela',
    type: 'breakfast',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 berinjela média em cubos',
      '4 ovos',
      '1/2 cebola picada',
      '1 tomate picado',
      '1/2 xícara (chá) de queijo mussarela ralado',
      'Sal e pimenta do reino a gosto'
    ],
    nutrition: {
      calories: 250,
      carbs: '8g',
      protein: '15g',
      fat: '18g',
      fiber: '4g'
    },
    instructions: `
      • Em uma frigideira, refogue a berinjela com a cebola até ficarem macias.
      • Em um recipiente, bata os ovos, junte o tomate, a berinjela refogada e tempere com sal e pimenta do reino.
      • Despeje a mistura em uma forma untada e polvilhe o queijo mussarela por cima.
      • Leve ao forno pré-aquecido a 180°C por aproximadamente 20 minutos ou até dourar.
      • Sirva quente.
  `
  },
  {
    name: 'Ovo no Pimentão',
    type: 'breakfast',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 pimentão grande cortado em rodelas',
      '2 ovos',
      'Sal e pimenta do reino a gosto'
    ],
    nutrition: {
      calories: 150,
      carbs: '3g',
      protein: '10g',
      fat: '10g',
      fiber: '1g'
    },
    instructions: `
      • Aqueça uma frigideira antiaderente e coloque as rodelas de pimentão.
      • Quebre um ovo no centro de cada rodela de pimentão.
      • Tempere com sal e pimenta do reino a gosto.
      • Cozinhe até o ovo firmar e o pimentão amolecer levemente.
      • Sirva em seguida.
  `
  },
  {
    name: 'Omelete Basca',
    type: 'breakfast',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '3 ovos',
      '1/2 pimentão vermelho picado',
      '1/2 pimentão verde picado',
      '1/2 cebola picada',
      '1 tomate picado',
      '1 colher (sopa) de azeite de oliva',
      'Sal e pimenta do reino a gosto'
    ],
    nutrition: {
      calories: 200,
      carbs: '7g',
      protein: '10g',
      fat: '15g',
      fiber: '3g'
    },
    instructions: `
      • Em uma frigideira, aqueça o azeite e refogue a cebola e os pimentões até ficarem macios.
      • Adicione o tomate picado e refogue por mais alguns minutos.
      • Em um recipiente, bata os ovos e tempere com sal e pimenta do reino.
      • Despeje os ovos batidos na frigideira sobre os legumes refogados e deixe cozinhar até firmar.
      • Vire a omelete para dourar do outro lado e sirva em seguida.
  `
  },
  {
    name: 'Omelete de Espinafre',
    type: 'breakfast',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '3 ovos',
      '1 xícara (chá) de espinafre picado',
      '1/2 cebola picada',
      '1 colher (sopa) de azeite de oliva',
      'Sal e pimenta do reino a gosto'
    ],
    nutrition: {
      calories: 180,
      carbs: '5g',
      protein: '10g',
      fat: '13g',
      fiber: '3g'
    },
    instructions: `
      • Em uma frigideira, aqueça o azeite e refogue a cebola até dourar.
      • Adicione o espinafre e refogue até murchar.
      • Em um recipiente, bata os ovos e tempere com sal e pimenta do reino.
      • Despeje os ovos batidos na frigideira sobre o espinafre e deixe cozinhar até firmar.
      • Vire a omelete para dourar do outro lado e sirva em seguida.
  `
  },
  {
    name: 'Omelete de Frango',
    type: 'breakfast',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '3 ovos',
      '1/2 xícara (chá) de frango desfiado',
      '1/2 cebola picada',
      '1 colher (sopa) de azeite de oliva',
      'Sal e pimenta do reino a gosto'
    ],
    nutrition: {
      calories: 200,
      carbs: '2g',
      protein: '15g',
      fat: '15g',
      fiber: '1g'
    },
    instructions: `
      • Em uma frigideira, aqueça o azeite e refogue a cebola até dourar.
      • Adicione o frango desfiado e refogue por mais alguns minutos.
      • Em um recipiente, bata os ovos e tempere com sal e pimenta do reino.
      • Despeje os ovos batidos na frigideira sobre o frango e deixe cozinhar até firmar.
      • Vire a omelete para dourar do outro lado e sirva em seguida.
  `
  },
  {
    name: 'Omelete de Pizza',
    type: 'breakfast',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '3 ovos',
      '1/2 xícara (chá) de molho de tomate',
      '1/2 xícara (chá) de queijo mussarela ralado',
      '1/2 xícara (chá) de presunto picado',
      '1/2 tomate picado',
      'Sal e orégano a gosto'
    ],
    nutrition: {
      calories: 250,
      carbs: '8g',
      protein: '15g',
      fat: '18g',
      fiber: '2g'
    },
    instructions: `
      • Em um recipiente, bata os ovos e tempere com sal.
      • Aqueça uma frigideira antiaderente e despeje os ovos batidos, deixando cozinhar até firmar.
      • Espalhe o molho de tomate sobre a omelete, seguido do queijo mussarela, presunto e tomate picado.
      • Tempere com orégano a gosto e deixe cozinhar até o queijo derreter.
      • Sirva em seguida.
  `
  },
  {
    name: 'Ovos Com Atum',
    type: 'breakfast',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '3 ovos',
      '1 lata de atum em água escorrido',
      '1/2 cebola picada',
      '1 colher (sopa) de azeite de oliva',
      'Sal e pimenta do reino a gosto'
    ],
    nutrition: {
      calories: 180,
      carbs: '3g',
      protein: '15g',
      fat: '12g',
      fiber: '1g'
    },
    instructions: `
      • Em uma frigideira, aqueça o azeite e refogue a cebola até dourar.
      • Adicione o atum e refogue por mais alguns minutos.
      • Em um recipiente, bata os ovos e tempere com sal e pimenta do reino.
      • Despeje os ovos batidos na frigideira sobre o atum e deixe cozinhar até firmar.
      • Vire a omelete para dourar do outro lado e sirva em seguida.
  `
  },
  {
    name: 'Pizza de Abobrinha',
    type: 'snack',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 abobrinha grande em rodelas',
      '1/2 xícara (chá) de molho de tomate',
      '1/2 xícara (chá) de queijo mussarela ralado',
      '1/2 xícara (chá) de presunto picado',
      'Orégano a gosto'
    ],
    nutrition: {
      calories: 120,
      carbs: '6g',
      protein: '8g',
      fat: '8g',
      fiber: '2g'
    },
    instructions: `
      • Pré-aqueça o forno a 180°C.
      • Disponha as rodelas de abobrinha em uma assadeira.
      • Espalhe o molho de tomate sobre cada rodela, seguido do queijo mussarela e presunto.
      • Tempere com orégano a gosto.
      • Leve ao forno por cerca de 10 minutos ou até o queijo derreter.
      • Sirva em seguida.
  `
  },
  {
    name: 'Pizza de Farinha de Berinjela',
    type: 'snack',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '6 colheres (sopa) de farinha de berinjela',
      '2 colheres (sopa) de azeite de oliva',
      '100 ml de água',
      'Queijo mussarela a gosto',
      'Orégano a gosto',
      'Molho de tomate caseiro a gosto'
    ],
    nutrition: {
      calories: 150,
      carbs: '10g',
      protein: '7g',
      fat: '9g',
      fiber: '5g'
    },
    instructions: `
      • Em um recipiente, misture a farinha de berinjela, o azeite de oliva e a água até obter uma textura de mousse.
      • Disponha a massa e espalhe em uma forma forrada com papel manteiga até formar um círculo.
      • Leve ao forno a 200ºC por cerca de 20 minutos.
      • Retire a massa do forno e espalhe o molho de tomate caseiro por cima.
      • Disponha as fatias de mussarela e finalize com um pouco de orégano.
      • Leve ao forno novamente até o queijo derreter.
  `
  },
  {
    name: 'Misto Quente',
    type: 'sandwich',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 ovo',
      '2 colheres (sopa) de requeijão',
      '1 colher (café) de fermento em pó',
      'Queijo mussarela a gosto',
      'Presunto a gosto',
      'Sal e pimenta do reino a gosto'
    ],
    nutrition: {
      calories: 200,
      carbs: '5g',
      protein: '12g',
      fat: '15g',
      fiber: '1g'
    },
    instructions: `
      • Em um recipiente, coloque o ovo, o sal, a pimenta do reino e o requeijão e mexa muito bem com auxílio de um garfo.
      • Em seguida, acrescente o fermento.
      • Leve ao microondas por 3 minutos e desenforme ainda quente.
      • Recheie com a mussarela e o presunto a gosto.
      • Leve ao grill para derreter.
      • Sirva em seguida.
  `
  },
  {
    name: 'Panqueca Americana',
    type: 'breakfast',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 colheres (sopa) de óleo de coco',
      '4 colheres (sopa) de leite de coco',
      '4 colheres (sopa) de farinha de coco',
      '4 ovos',
      '1 colher (chá) de fermento',
      '1 pitada de sal (opcional)'
    ],
    nutrition: {
      calories: 200,
      carbs: '6g',
      protein: '8g',
      fat: '15g',
      fiber: '4g'
    },
    instructions: `
      • Bata todos os ingredientes no liquidificador até obter uma massa homogênea e um pouco espessa.
      • Em uma frigideira aquecida com um pouco de óleo de coco, despeje a massa e distribua uniformemente virando a frigideira para os lados.
      • Espere dourar de um lado e vire a massa, espere dourar do outro lado.
      • Faça o mesmo procedimento até acabar toda a massa.
      • Sirva em seguida.
  `
  },
  {
    name: 'Coxinha de Cream Cheese',
    type: 'snack',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 ovo',
      '3 fatias de queijo provolone',
      '2 colheres (sopa) de queijo parmesão ralado',
      '1 colher (sobremesa) de fermento químico em pó'
    ],
    nutrition: {
      calories: 150,
      carbs: '3g',
      protein: '10g',
      fat: '12g',
      fiber: '1g'
    },
    instructions: `
      • Junte o queijo provolone e o ovo no liquidificador e bata bem até obter uma mistura homogênea.
      • Disponha a mistura em um recipiente e acrescente o queijo parmesão, misture bem.
      • Acrescente o fermento, incorpore e divida a massa em 5 unidades.
      • Distribua a massa em formas de empadinha levemente untadas e leve ao forno a 180ºC por aproximadamente 20 minutos ou até ficar bem dourado e crocante.
      • Sirva em seguida.
  `
  },
  {
    name: 'Coxinha de Couve-Flor',
    type: 'snack',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 couve-flor cozida',
      '1 peito de frango cozido e desfiado',
      '1 ovo',
      'Queijo cremoso a gosto',
      '1 gema',
      'Linhaça triturada',
      'Farinha de amêndoas torrada',
      'Sal e pimenta do reino a gosto'
    ],
    nutrition: {
      calories: 180,
      carbs: '6g',
      protein: '12g',
      fat: '12g',
      fiber: '4g'
    },
    instructions: `
      • Bata no liquidificador a couve-flor, o peito de frango, o ovo, o sal e a pimenta do reino até obter uma massa homogênea.
      • Abra a massa na palma da mão, disponha o queijo cremoso e modele a coxinha.
      • Repita o processo com o restante da massa.
      • Pincele a gema de ovo na coxinha e passe na farinha de amêndoas misturada com a linhaça triturada para empanar.
      • Disponha em uma forma e leve ao forno pré-aquecido a 200ºC até dourar.
      • Retire do forno e deixe esfriar.
      • Sirva em seguida.
  `
  },
  {
    name: 'Pão de Queijo',
    type: 'snack',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 ovo',
      '3 fatias de queijo provolone',
      '2 colheres (sopa) de queijo parmesão ralado',
      '1 colher (sobremesa) de fermento químico em pó'
    ],
    nutrition: {
      calories: 150,
      carbs: '3g',
      protein: '10g',
      fat: '12g',
      fiber: '1g'
    },
    instructions: `
      • Junte o queijo provolone e o ovo no liquidificador e bata bem até obter uma mistura homogênea.
      • Disponha a mistura em um recipiente e acrescente o queijo parmesão e misture bem.
      • Acrescente o fermento, incorpore e divida a massa em 5 unidades.
      • Distribua a massa em formas de empadinha levemente untadas e leve ao forno a 180ºC por aproximadamente 20 minutos ou até ficar bem dourado e crocante.
      • Sirva em seguida.
  `
  },
  {
    name: 'Bolinho de Espinafre',
    type: 'snack',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 maços de espinafre',
      '1 cebola média picada',
      '2 ovos',
      '1 dente de alho amassado',
      'Salsinha a gosto',
      '1 colher (sopa) de óleo de coco',
      'Farinha de berinjela até dar o ponto',
      'Sal e pimenta do reino a gosto'
    ],
    nutrition: {
      calories: 120,
      carbs: '4g',
      protein: '5g',
      fat: '10g',
      fiber: '3g'
    },
    instructions: `
      • Em uma panela, aqueça o óleo de coco e refogue a cebola e o alho até dourar.
      • Adicione o espinafre e refogue até murchar.
      • Em um recipiente, misture o espinafre refogado, os ovos, a salsinha e tempere com sal e pimenta do reino.
      • Acrescente a farinha de berinjela aos poucos até a mistura ficar consistente para formar bolinhos.
      • Molde os bolinhos e disponha em uma forma untada.
      • Leve ao forno pré-aquecido a 180ºC por aproximadamente 20 minutos ou até dourar.
      • Sirva em seguida.
  `
  },
  {
    name: 'Biscoito de Gergelim',
    type: 'snack',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 xícaras (chá) de farinha de amêndoas',
      '1 xícara (chá) de semente de gergelim crua',
      '1 colher (chá) de sal',
      '4 colheres (sopa) de azeite',
      '2 ovos'
    ],
    nutrition: {
      calories: 160,
      carbs: '6g',
      protein: '6g',
      fat: '12g',
      fiber: '4g'
    },
    instructions: `
      • Em um recipiente, misture a farinha de amêndoas, o gergelim e o sal.
      • Adicione o azeite e os ovos e amasse bem com as mãos até obter uma massa homogênea que pare de grudar.
      • Em uma assadeira, com papel manteiga, unte com um pouco de azeite.
      • Despeje a massa e abra com um rolo até ficar fininha.
      • Corte em quadradinhos do tamanho desejado e faça furinhos com um garfo para que assem por igual.
      • Leve ao forno pré-aquecido a 200°C por cerca de 16 minutos.
      • Retire do forno e separe os quadradinhos.
  `
  },
  {
    name: 'Biscoito de Coco',
    type: 'snack',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara (chá) de farinha de coco (125 gramas)',
      '1 colher (sopa) de xilitol',
      '1 xícara (chá) de manteiga de coco',
      '6 gotas de extrato de baunilha',
      '2 ovos'
    ],
    nutrition: {
      calories: 150,
      carbs: '4g',
      protein: '3g',
      fat: '13g',
      fiber: '5g'
    },
    instructions: `
      • Em um recipiente, misture bem a farinha de coco, o adoçante xilitol, a manteiga de coco e o extrato de baunilha.
      • Adicione os ovos e misture bem até obter uma mistura homogênea.
      • Disponha a massa em uma forma untada com papel manteiga e abra a massa com auxílio de um rolo.
      • Corte a massa em quadradinhos do tamanho desejado.
      • Leve ao forno pré-aquecido a 180°C por aproximadamente 25 minutos ou até os biscoitos dourarem.
      • Retire do forno e deixe esfriar.
  `
  },
  {
    name: 'Bolinho de Cenoura',
    type: 'snack',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 e 1/2 cenouras picadas',
      '1 xícara (chá) de farinha de amêndoas',
      '1 xícara (chá) de ricota',
      '2 colheres (sopa) de salsinha picada',
      '2 claras',
      'Orégano a gosto',
      'Sal e pimenta do reino a gosto'
    ],
    nutrition: {
      calories: 150,
      carbs: '5g',
      protein: '8g',
      fat: '10g',
      fiber: '3g'
    },
    instructions: `
      • Bata no liquidificador a ricota e a cenoura por aproximadamente 5 minutos.
      • Adicione as claras e bata por mais 5 minutos.
      • Coloque a mistura em uma tigela e adicione a farinha de amêndoas, o orégano, o sal e a pimenta do reino e misture bem.
      • Faça bolinhos com a massa e coloque em uma forma untada.
      • Leve ao forno pré-aquecido a 180°C por cerca de 30 minutos ou até dourar.
  `
  },
  {
    name: 'Sanduíche de Pasta de Ovos',
    type: 'sandwich',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 ovos cozidos',
      '2 colheres (sopa) de maionese light',
      '1 colher (chá) de mostarda dijon',
      'Sal e pimenta do reino a gosto',
      '4 fatias de pão integral'
    ],
    nutrition: {
      calories: 200,
      carbs: '15g',
      protein: '10g',
      fat: '10g',
      fiber: '3g'
    },
    instructions: `
      • Pique os ovos cozidos e coloque em uma tigela.
      • Adicione a maionese, a mostarda, o sal e a pimenta do reino e misture bem.
      • Recheie as fatias de pão com a pasta de ovos e sirva.
  `
  },
  {
    name: 'Panini de Nozes',
    type: 'snack',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 ovo',
      '2 colheres (sopa) de farinha de amêndoas',
      '1 colher (sopa) de nozes picadas',
      '1 colher (sopa) de queijo parmesão ralado',
      '1 colher (chá) de fermento em pó'
    ],
    nutrition: {
      calories: 180,
      carbs: '3g',
      protein: '8g',
      fat: '15g',
      fiber: '3g'
    },
    instructions: `
      • Em um recipiente, misture todos os ingredientes até obter uma massa homogênea.
      • Coloque a massa em uma forma própria para panini e leve ao forno pré-aquecido a 180°C por cerca de 10 minutos ou até dourar.
      • Sirva em seguida.
  `
  },
  {
    name: 'Panini',
    type: 'snack',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '3 ovos',
      '1/2 xícara (chá) de farinha de amêndoas',
      '1 colher (chá) de fermento em pó',
      'Sal a gosto'
    ],
    nutrition: {
      calories: 150,
      carbs: '3g',
      protein: '10g',
      fat: '12g',
      fiber: '2g'
    },
    instructions: `
      • Em um recipiente, bata os ovos e adicione a farinha de amêndoas e o sal.
      • Misture bem e adicione o fermento, mexendo delicadamente.
      • Coloque a massa em uma forma própria para panini e leve ao forno pré-aquecido a 180°C por cerca de 10 minutos ou até dourar.
      • Sirva em seguida.
  `
  },
  {
    name: 'Fritada de Ovos e Brócolis',
    type: 'breakfast',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '3 ovos',
      '1 xícara (chá) de brócolis cozidos e picados',
      '1/2 cebola picada',
      '1 colher (sopa) de azeite',
      'Sal e pimenta do reino a gosto'
    ],
    nutrition: {
      calories: 150,
      carbs: '4g',
      protein: '10g',
      fat: '10g',
      fiber: '3g'
    },
    instructions: `
      • Em uma frigideira, aqueça o azeite e refogue a cebola até dourar.
      • Adicione os brócolis e refogue por mais alguns minutos.
      • Em um recipiente, bata os ovos e tempere com sal e pimenta do reino.
      • Despeje os ovos batidos na frigideira sobre os brócolis e deixe cozinhar até firmar.
      • Vire a fritada para dourar do outro lado e sirva em seguida.
  `
  },
  {
    name: 'Fritada Com Espinafre',
    type: 'breakfast',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '3 ovos',
      '1 xícara (chá) de espinafre picado',
      '1/2 cebola picada',
      '1 colher (sopa) de azeite',
      'Sal e pimenta do reino a gosto'
    ],
    nutrition: {
      calories: 150,
      carbs: '4g',
      protein: '10g',
      fat: '10g',
      fiber: '3g'
    },
    instructions: `
      • Em uma frigideira, aqueça o azeite e refogue a cebola até dourar.
      • Adicione o espinafre e refogue até murchar.
      • Em um recipiente, bata os ovos e tempere com sal e pimenta do reino.
      • Despeje os ovos batidos na frigideira sobre o espinafre e deixe cozinhar até firmar.
      • Vire a fritada para dourar do outro lado e sirva em seguida.
  `
  },
  {
    name: 'Omelete Com Rúcula',
    type: 'breakfast',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '3 ovos',
      '1 xícara (chá) de rúcula picada',
      '1/2 cebola picada',
      '1 colher (sopa) de azeite',
      'Sal e pimenta do reino a gosto'
    ],
    nutrition: {
      calories: 150,
      carbs: '4g',
      protein: '10g',
      fat: '10g',
      fiber: '3g'
    },
    instructions: `
      • Em uma frigideira, aqueça o azeite e refogue a cebola até dourar.
      • Adicione a rúcula e refogue até murchar.
      • Em um recipiente, bata os ovos e tempere com sal e pimenta do reino.
      • Despeje os ovos batidos na frigideira sobre a rúcula e deixe cozinhar até firmar.
      • Vire a omelete para dourar do outro lado e sirva em seguida.
  `
  },
  {
    name: 'Omelete Ocidental',
    type: 'breakfast',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '3 ovos',
      '1/2 pimentão vermelho picado',
      '1/2 pimentão verde picado',
      '1/2 cebola picada',
      '1 tomate picado',
      '1 colher (sopa) de azeite',
      'Sal e pimenta do reino a gosto'
    ],
    nutrition: {
      calories: 150,
      carbs: '6g',
      protein: '10g',
      fat: '10g',
      fiber: '3g'
    },
    instructions: `
      • Em uma frigideira, aqueça o azeite e refogue a cebola e os pimentões até ficarem macios.
      • Adicione o tomate picado e refogue por mais alguns minutos.
      • Em um recipiente, bata os ovos e tempere com sal e pimenta do reino.
      • Despeje os ovos batidos na frigideira sobre os legumes refogados e deixe cozinhar até firmar.
      • Vire a omelete para dourar do outro lado e sirva em seguida.
  `
  },
  {
    name: 'Omelete de Cogumelo',
    type: 'breakfast',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 ovos',
      '1/2 xícara (chá) de cogumelos picados',
      '1/4 cebola picada',
      '1 colher (sopa) de azeite de oliva',
      'Sal e pimenta do reino a gosto'
    ],
    nutrition: {
      calories: 100,
      carbs: '3g',
      protein: '7g',
      fat: '7g',
      fiber: '2g'
    },
    instructions: `
      • Em uma frigideira, aqueça o azeite e refogue a cebola até dourar.
      • Adicione os cogumelos e refogue até ficarem macios.
      • Em um recipiente, bata os ovos e tempere com sal e pimenta do reino.
      • Despeje os ovos batidos na frigideira sobre os cogumelos e deixe cozinhar até firmar.
      • Vire a omelete para dourar do outro lado e sirva em seguida.
  `
  },
  {
    name: 'Omelete de Atum',
    type: 'breakfast',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 ovos',
      '1/2 lata de atum em água, escorrido',
      '1/4 cebola picada',
      '1 colher (sopa) de azeite de oliva',
      'Sal e pimenta do reino a gosto'
    ],
    nutrition: {
      calories: 120,
      carbs: '2g',
      protein: '10g',
      fat: '8g',
      fiber: '1g'
    },
    instructions: `
      • Em uma frigideira, aqueça o azeite e refogue a cebola até dourar.
      • Adicione o atum e refogue rapidamente.
      • Em um recipiente, bata os ovos e tempere com sal e pimenta do reino.
      • Despeje os ovos batidos na frigideira sobre o atum e deixe cozinhar até firmar.
      • Vire a omelete para dourar do outro lado e sirva em seguida.
  `
  },
  {
    name: 'Omelete de Ovo Com Salsicha',
    type: 'breakfast',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 ovos',
      '1 salsicha picada',
      '1/4 cebola picada',
      '1 colher (sopa) de azeite de oliva',
      'Sal e pimenta do reino a gosto'
    ],
    nutrition: {
      calories: 180,
      carbs: '3g',
      protein: '12g',
      fat: '14g',
      fiber: '1g'
    },
    instructions: `
      • Em uma frigideira, aqueça o azeite e refogue a cebola até dourar.
      • Adicione a salsicha picada e refogue por alguns minutos.
      • Em um recipiente, bata os ovos e tempere com sal e pimenta do reino.
      • Despeje os ovos batidos na frigideira sobre a salsicha e deixe cozinhar até firmar.
      • Vire a omelete para dourar do outro lado e sirva em seguida.
  `
  },
  {
    name: 'Omelete de Berinjela de Forno',
    type: 'breakfast',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 berinjela média em cubos',
      '4 ovos',
      '1/2 cebola picada',
      '1 tomate picado',
      '1/2 xícara (chá) de queijo mussarela ralado',
      'Sal e pimenta do reino a gosto'
    ],
    nutrition: {
      calories: 250,
      carbs: '8g',
      protein: '15g',
      fat: '18g',
      fiber: '4g'
    },
    instructions: `
      • Em uma frigideira, refogue a berinjela com a cebola até ficarem macias.
      • Em um recipiente, bata os ovos, junte o tomate, a berinjela refogada e tempere com sal e pimenta do reino.
      • Despeje a mistura em uma forma untada e polvilhe o queijo mussarela por cima.
      • Leve ao forno pré-aquecido a 180°C por aproximadamente 20 minutos ou até dourar.
      • Sirva quente.
  `
  },
  {
    name: 'Ovos Mexidos Com Queijo e Bacon',
    type: 'breakfast',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '3 ovos',
      '2 fatias de bacon picado',
      '1/4 xícara (chá) de queijo mussarela ralado',
      '1 colher (sopa) de manteiga',
      'Sal e pimenta do reino a gosto'
    ],
    nutrition: {
      calories: 200,
      carbs: '2g',
      protein: '15g',
      fat: '15g',
      fiber: '1g'
    },
    instructions: `
      • Em uma frigideira, frite o bacon até ficar crocante e reserve.
      • Na mesma frigideira, derreta a manteiga.
      • Em um recipiente, bata os ovos e tempere com sal e pimenta do reino.
      • Despeje os ovos batidos na frigideira e mexa até começarem a cozinhar.
      • Adicione o bacon e o queijo e continue mexendo até os ovos estarem cozidos e o queijo derretido.
      • Sirva em seguida.
  `
  },
  {
    name: 'Ovos em Aros de Cebola',
    type: 'breakfast',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 ovos',
      '1 cebola grande cortada em rodelas grossas',
      '1 colher (sopa) de azeite de oliva',
      'Sal e pimenta do reino a gosto'
    ],
    nutrition: {
      calories: 120,
      carbs: '4g',
      protein: '7g',
      fat: '9g',
      fiber: '2g'
    },
    instructions: `
      • Aqueça uma frigideira com azeite de oliva.
      • Coloque as rodelas de cebola na frigideira e quebre um ovo no centro de cada aro.
      • Tempere com sal e pimenta do reino a gosto.
      • Cozinhe até o ovo firmar e a cebola amolecer levemente.
      • Sirva em seguida.
  `
  },
  {
    name: 'Ovos de Codorna Com Ervas',
    type: 'breakfast',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '10 ovos de codorna',
      '1 colher (sopa) de azeite de oliva',
      '1 colher (sopa) de ervas frescas picadas (salsinha, cebolinha, coentro)',
      'Sal e pimenta do reino a gosto'
    ],
    nutrition: {
      calories: 80,
      carbs: '1g',
      protein: '6g',
      fat: '5g',
      fiber: '1g'
    },
    instructions: `
      • Cozinhe os ovos de codorna em água fervente por cerca de 4 minutos.
      • Descasque os ovos e reserve.
      • Em uma frigideira, aqueça o azeite de oliva e adicione os ovos de codorna.
      • Tempere com sal, pimenta do reino e as ervas frescas picadas.
      • Refogue por alguns minutos e sirva em seguida.
  `
  },
  {
    name: 'Muffin de Ovo',
    type: 'snack',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 ovos',
      '1/2 xícara (chá) de espinafre picado',
      '1/4 xícara (chá) de queijo mussarela ralado',
      '1/4 xícara (chá) de tomate picado',
      'Sal e pimenta do reino a gosto'
    ],
    nutrition: {
      calories: 150,
      carbs: '3g',
      protein: '10g',
      fat: '10g',
      fiber: '2g'
    },
    instructions: `
      • Em um recipiente, bata os ovos e tempere com sal e pimenta do reino.
      • Adicione o espinafre, o queijo e o tomate e misture bem.
      • Distribua a mistura em formas de muffin untadas.
      • Leve ao forno pré-aquecido a 180°C por cerca de 15 minutos ou até dourar.
      • Sirva em seguida.
  `
  },
  {
    name: 'Cupcake de Ovo Com Bacon',
    type: 'snack',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 ovos',
      '4 fatias de bacon picado',
      '1/4 xícara (chá) de queijo cheddar ralado',
      'Sal e pimenta do reino a gosto'
    ],
    nutrition: {
      calories: 200,
      carbs: '2g',
      protein: '15g',
      fat: '15g',
      fiber: '1g'
    },
    instructions: `
      • Em uma frigideira, frite o bacon até ficar crocante e reserve.
      • Em um recipiente, bata os ovos e tempere com sal e pimenta do reino.
      • Adicione o bacon e o queijo cheddar e misture bem.
      • Distribua a mistura em formas de muffin untadas.
      • Leve ao forno pré-aquecido a 180°C por cerca de 15 minutos ou até dourar.
      • Sirva em seguida.
  `
  },
  {
    name: 'Claras de Ovos Com Atum',
    type: 'snack',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 claras de ovos',
      '1/2 lata de atum em água, escorrido',
      '1/4 cebola picada',
      '1 colher (sopa) de azeite de oliva',
      'Sal e pimenta do reino a gosto'
    ],
    nutrition: {
      calories: 100,
      carbs: '1g',
      protein: '10g',
      fat: '6g',
      fiber: '1g'
    },
    instructions: `
      • Em uma frigideira, aqueça o azeite e refogue a cebola até dourar.
      • Adicione o atum e refogue rapidamente.
      • Em um recipiente, bata as claras de ovos e tempere com sal e pimenta do reino.
      • Despeje as claras batidas na frigideira sobre o atum e mexa até estarem completamente cozidas.
      • Sirva em seguida.
  `
  },
  {
    name: 'Chips de Abobrinha',
    type: 'snack',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 abobrinhas médias fatiadas finamente',
      '2 colheres (sopa) de azeite de oliva',
      'Sal e pimenta do reino a gosto'
    ],
    nutrition: {
      calories: 60,
      carbs: '4g',
      protein: '1g',
      fat: '4g',
      fiber: '2g'
    },
    instructions: `
      • Pré-aqueça o forno a 200°C.
      • Em uma tigela, misture as fatias de abobrinha com azeite de oliva, sal e pimenta do reino.
      • Distribua as fatias de abobrinha em uma assadeira forrada com papel manteiga.
      • Asse por cerca de 20 minutos ou até ficarem crocantes.
      • Deixe esfriar e sirva em seguida.
  `
  },
  {
    name: 'Palitos de Abobrinha',
    type: 'snack',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 abobrinhas médias cortadas em palitos',
      '2 colheres (sopa) de azeite de oliva',
      '1/4 xícara (chá) de queijo parmesão ralado',
      'Sal e pimenta do reino a gosto'
    ],
    nutrition: {
      calories: 80,
      carbs: '3g',
      protein: '3g',
      fat: '6g',
      fiber: '2g'
    },
    instructions: `
      • Pré-aqueça o forno a 200°C.
      • Em uma tigela, misture os palitos de abobrinha com azeite de oliva, queijo parmesão, sal e pimenta do reino.
      • Distribua os palitos de abobrinha em uma assadeira forrada com papel manteiga.
      • Asse por cerca de 20 minutos ou até dourar.
      • Deixe esfriar e sirva em seguida.
  `
  },
  {
    name: 'Massa de Couve-Flor Para Pizza',
    type: 'pizza',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 couve-flor média',
      '1 ovo',
      '1/2 xícara (chá) de queijo parmesão ralado',
      '1/2 xícara (chá) de queijo mussarela ralado',
      'Sal e pimenta a gosto'
    ],
    nutrition: {
      calories: 150,
      carbs: '5g',
      protein: '10g',
      fat: '10g',
      fiber: '3g'
    },
    instructions: `
      • Preaqueça o forno a 180°C.
      • Triture a couve-flor em um processador até obter uma textura de arroz.
      • Cozinhe a couve-flor no micro-ondas por 8 minutos ou até ficar macia.
      • Em uma tigela, misture a couve-flor cozida, o ovo, os queijos, sal e pimenta.
      • Espalhe a massa em uma assadeira forrada com papel manteiga.
      • Asse por 20 minutos ou até dourar.
      • Retire do forno e adicione os ingredientes de sua preferência.
      • Asse por mais 10 minutos.
  `
  },
  {
    name: 'Pizza Cetogênica',
    type: 'pizza',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 e 1/2 xícara (chá) de farinha de amêndoas',
      '2 colheres (sopa) de queijo parmesão ralado',
      '1 colher (chá) de fermento químico',
      '2 ovos',
      '2 colheres (sopa) de azeite de oliva',
      'Sal a gosto'
    ],
    nutrition: {
      calories: 200,
      carbs: '4g',
      protein: '8g',
      fat: '16g',
      fiber: '3g'
    },
    instructions: `
      • Preaqueça o forno a 200°C.
      • Misture todos os ingredientes em uma tigela até formar uma massa homogênea.
      • Espalhe a massa em uma forma de pizza forrada com papel manteiga.
      • Asse por 15 minutos ou até dourar.
      • Retire do forno, adicione os ingredientes de sua preferência e asse por mais 10 minutos.
  `
  },
  {
    name: 'Mini Pizza de Berinjela',
    type: 'pizza',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 berinjela grande',
      '1/2 xícara (chá) de molho de tomate caseiro',
      '1 xícara (chá) de queijo mussarela ralado',
      'Orégano a gosto'
    ],
    nutrition: {
      calories: 100,
      carbs: '5g',
      protein: '8g',
      fat: '5g',
      fiber: '3g'
    },
    instructions: `
      • Preaqueça o forno a 180°C.
      • Corte a berinjela em rodelas grossas.
      • Espalhe o molho de tomate sobre as rodelas de berinjela.
      • Polvilhe o queijo mussarela e o orégano por cima.
      • Asse por 20 minutos ou até o queijo derreter.
  `
  },
  {
    name: 'Muffin de Queijo e Bacon',
    type: 'snack',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 ovos',
      '1/2 xícara (chá) de queijo mussarela ralado',
      '1/4 xícara (chá) de queijo parmesão ralado',
      '1/4 xícara (chá) de bacon picado e frito',
      'Sal e pimenta a gosto'
    ],
    nutrition: {
      calories: 200,
      carbs: '2g',
      protein: '15g',
      fat: '15g',
      fiber: '1g'
    },
    instructions: `
      • Preaqueça o forno a 180°C.
      • Em uma tigela, bata os ovos e adicione os queijos, o bacon, sal e pimenta.
      • Distribua a mistura em formas de muffin untadas.
      • Asse por 20 minutos ou até dourar.
  `
  },
  {
    name: 'Tortinha de Brócolis',
    type: 'snack',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 xícaras (chá) de brócolis cozidos e picados',
      '4 ovos',
      '1/2 xícara (chá) de queijo cottage',
      '1/2 xícara (chá) de queijo parmesão ralado',
      'Sal e pimenta a gosto'
    ],
    nutrition: {
      calories: 180,
      carbs: '5g',
      protein: '12g',
      fat: '13g',
      fiber: '4g'
    },
    instructions: `
      • Preaqueça o forno a 180°C.
      • Em uma tigela, misture todos os ingredientes.
      • Distribua a mistura em formas de muffin untadas.
      • Asse por 25 minutos ou até dourar.
  `
  },
  {
    name: 'Cestinha de Peito de Peru',
    type: 'snack',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '8 fatias de peito de peru',
      '4 ovos',
      '1/2 xícara (chá) de queijo cottage',
      'Sal e pimenta a gosto'
    ],
    nutrition: {
      calories: 150,
      carbs: '2g',
      protein: '15g',
      fat: '10g',
      fiber: '1g'
    },
    instructions: `
      • Preaqueça o forno a 180°C.
      • Em uma forma de muffin, coloque as fatias de peito de peru, formando cestinhas.
      • Bata os ovos, misture o queijo cottage, sal e pimenta.
      • Despeje a mistura nas cestinhas de peito de peru.
      • Asse por 20 minutos ou até dourar.
  `
  },
  {
    name: 'Biscoitinho de Abobrinha e Queijo',
    type: 'snack',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 abobrinha ralada',
      '1 xícara (chá) de queijo parmesão ralado',
      '1 xícara (chá) de queijo mussarela ralado',
      '1 ovo',
      'Sal e pimenta a gosto'
    ],
    nutrition: {
      calories: 100,
      carbs: '3g',
      protein: '8g',
      fat: '5g',
      fiber: '2g'
    },
    instructions: `
      • Preaqueça o forno a 180°C.
      • Em uma tigela, misture todos os ingredientes.
      • Faça bolinhas com a massa e coloque em uma assadeira forrada com papel manteiga.
      • Asse por 20 minutos ou até dourar.
  `
  },
  {
    name: 'Cream Cracker de Linhaça',
    type: 'snack',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara (chá) de farinha de linhaça',
      '1/2 xícara (chá) de queijo parmesão ralado',
      '1/4 xícara (chá) de água',
      'Sal a gosto'
    ],
    nutrition: {
      calories: 90,
      carbs: '3g',
      protein: '5g',
      fat: '7g',
      fiber: '3g'
    },
    instructions: `
      • Preaqueça o forno a 180°C.
      • Misture todos os ingredientes em uma tigela até formar uma massa homogênea.
      • Abra a massa em uma superfície enfarinhada até ficar bem fina.
      • Corte em quadradinhos e coloque em uma assadeira forrada com papel manteiga.
      • Asse por 15 minutos ou até dourar.
  `
  },
  {
    name: 'Bolinho de Caranguejo',
    type: 'snack',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '300g de carne de caranguejo',
      '1 ovo',
      '1/4 xícara (chá) de farinha de amêndoas',
      '2 colheres (sopa) de cebolinha picada',
      'Sal e pimenta a gosto'
    ],
    nutrition: {
      calories: 150,
      carbs: '3g',
      protein: '12g',
      fat: '10g',
      fiber: '2g'
    },
    instructions: `
      • Preaqueça o forno a 180°C.
      • Em uma tigela, misture todos os ingredientes.
      • Forme bolinhos e coloque em uma assadeira forrada com papel manteiga.
      • Asse por 20 minutos ou até dourar.
  `
  },
  {
    name: 'Bolinho de Abobrinha e Queijo',
    type: 'snack',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 abobrinhas raladas',
      '1 xícara (chá) de queijo parmesão ralado',
      '1 xícara (chá) de queijo mussarela ralado',
      '2 ovos',
      'Sal e pimenta a gosto'
    ],
    nutrition: {
      calories: 100,
      carbs: '3g',
      protein: '8g',
      fat: '5g',
      fiber: '2g'
    },
    instructions: `
      • Preaqueça o forno a 180°C.
      • Em uma tigela, misture todos os ingredientes.
      • Faça bolinhos com a massa e coloque em uma assadeira forrada com papel manteiga.
      • Asse por 20 minutos ou até dourar.
  `
  },
  {
    name: 'Bolinho de Ricota',
    type: 'snack',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '250g de ricota amassada',
      '2 ovos',
      '1/2 xícara (chá) de queijo parmesão ralado',
      '1 colher (sopa) de farinha de linhaça',
      'Sal e pimenta a gosto'
    ],
    nutrition: {
      calories: 120,
      carbs: '3g',
      protein: '10g',
      fat: '8g',
      fiber: '2g'
    },
    instructions: `
      • Preaqueça o forno a 180°C.
      • Em uma tigela, misture todos os ingredientes até formar uma massa homogênea.
      • Faça bolinhos com a massa e coloque em uma assadeira forrada com papel manteiga.
      • Asse por 20 minutos ou até dourar.
  `
  },
  {
    name: 'Pão Low Carb',
    type: 'bread',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara (chá) de farinha de amêndoas',
      '1/4 xícara (chá) de farinha de linhaça',
      '2 colheres (sopa) de psyllium',
      '1 colher (sopa) de fermento químico em pó',
      '4 ovos',
      '1/2 xícara (chá) de água morna',
      '1/4 xícara (chá) de azeite de oliva',
      '1 pitada de sal'
    ],
    nutrition: {
      calories: 180,
      carbs: '5g',
      protein: '8g',
      fat: '15g',
      fiber: '4g'
    },
    instructions: `
      • Preaqueça o forno a 180°C.
      • Em uma tigela, misture as farinhas, o psyllium e o sal.
      • Adicione os ovos, o azeite e a água morna, misturando bem até obter uma massa homogênea.
      • Acrescente o fermento e misture delicadamente.
      • Despeje a massa em uma forma untada.
      • Asse por aproximadamente 40 minutos ou até dourar.
  `
  },
  {
    name: 'Pão de Queijo de Farinha de Amêndoas',
    type: 'breakfast',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '3/4 de copo de queijo parmesão ralado',
      '4 ovos grandes',
      '250g de farinha de amêndoas',
      '1 colher (chá) de fermento em pó',
      '60g de farinha de coco',
      '1/2 colher (chá) de sal',
      '2 colheres (sopa) de creme de leite light'
    ],
    nutrition: {
      calories: 250,
      carbs: '10g',
      protein: '15g',
      fat: '20g',
      fiber: '5g'
    },
    instructions: `
  1. No liquidificador, bata os ovos, o queijo parmesão, a farinha de amêndoas, a farinha de coco, o sal e o creme de leite até obter uma mistura homogênea.
  2. Acrescente o fermento em pó e misture delicadamente.
  3. Modele as bolinhas de pão de queijo e disponha em uma forma untada com papel manteiga.
  4. Leve ao forno pré-aquecido a 180ºC por aproximadamente 20 minutos ou até dourar bem.
  5. Sirva em seguida.
  `
  },
  {
    name: 'Costela Assada',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 peça de costela (aproximadamente 1,5 kg)',
      'Ramos de tomilho',
      '1 alho-poró',
      '1 colher (sopa) de azeite de oliva extra-virgem',
      'Sal e pimenta do reino a gosto'
    ],
    nutrition: {
      calories: 450,
      carbs: '5g',
      protein: '35g',
      fat: '30g',
      fiber: '2g'
    },
    instructions: `
  1. Corte o alho-poró em rodelas e acomode no fundo de um refratário.
  2. Tempere a carne com o sal e a pimenta do reino a gosto e pincele com o azeite de oliva.
  3. Acomode a costela em cima do alho-poró no refratário.
  4. Coloque os ramos de tomilho em cima da carne e cubra com papel alumínio.
  5. Leve ao forno pré-aquecido a 180ºC por cerca de 1 hora e 20 minutos.
  6. Retire o papel alumínio e deixe a carne dourar por mais 20 minutos.
  7. Retire do forno e sirva em seguida.
  `
  },
  {
    name: 'Filé Mignon',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 filés mignon',
      '4 colheres (sopa) de creme de leite light',
      '4 colheres (sopa) de manteiga',
      '1/2 colher (sopa) de suco puro de limão',
      'Sal grosso e pimenta do reino a gosto'
    ],
    nutrition: {
      calories: 300,
      carbs: '2g',
      protein: '25g',
      fat: '22g',
      fiber: '1g'
    },
    instructions: `
  1. Tempere os filés com o sal e a pimenta do reino a gosto.
  2. Em uma frigideira aquecida com duas colheres de manteiga, grelhe os filés dos dois lados até ficarem bem dourados.
  3. Na mesma frigideira, acrescente o restante da manteiga e o creme de leite, misture bem.
  4. Acrescente o suco de limão e misture novamente.
  5. Disponha os filés em um refratário e cubra com o molho de creme de leite.
  6. Sirva em seguida.
  `
  },
  {
    name: 'Fraldinha ao Alho',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 peça de fraldinha (aproximadamente 1 kg)',
      '2 dentes de alho',
      '1 e 1/2 colher (sopa) de azeite de oliva extra-virgem',
      'Sal e pimenta do reino a gosto'
    ],
    nutrition: {
      calories: 350,
      carbs: '1g',
      protein: '30g',
      fat: '25g',
      fiber: '0g'
    },
    instructions: `
  1. Limpe a fraldinha, retirando o excesso de gordura.
  2. Coloque a fraldinha em uma assadeira e regue com o azeite de oliva.
  3. Esprema os dentes de alho sobre a carne e tempere com a pimenta do reino a gosto.
  4. Espalhe bem os temperos pela carne.
  5. Leve ao forno pré-aquecido a 200ºC por aproximadamente 40 minutos ou até a carne estar no ponto desejado.
  6. Sirva em seguida.
  `
  },
  {
    name: 'Cupim Com Provolone',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2,5 kg de cupim',
      '150g de provolone em tiras',
      '2 colheres (sopa) de alecrim picado',
      '2 colheres (sopa) de manteiga',
      '1 xícara (chá) de água',
      '3 dentes de alho picado',
      'Sal e pimenta do reino a gosto'
    ],
    nutrition: {
      calories: 500,
      carbs: '2g',
      protein: '35g',
      fat: '40g',
      fiber: '1g'
    },
    instructions: `
  1. Em um recipiente, misture a manteiga, o alho, o alecrim, o sal e a pimenta do reino.
  2. Faça furos por toda a extensão da carne e coloque as tiras de provolone em cada furo.
  3. Espalhe a mistura de manteiga reservada por toda a peça e disponha o cupim em uma assadeira.
  4. Cubra a assadeira com papel alumínio e leve ao forno pré-aquecido a 200ºC por aproximadamente 1 hora.
  5. Retire o papel alumínio, despeje a água na assadeira e asse por mais 30 minutos.
  6. Sirva em seguida.
  `
  },
  {
    name: 'Frango Picante ao Molho de Abacate',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 kg de peito de frango em cubos',
      '1 abacate grande maduro',
      'Suco de 1 limão',
      '1 pimenta dedo-de-moça picada',
      '2 dentes de alho picados',
      '2 colheres (sopa) de azeite de oliva',
      'Sal e pimenta do reino a gosto'
    ],
    nutrition: {
      calories: 300,
      carbs: '10g',
      protein: '30g',
      fat: '18g',
      fiber: '7g'
    },
    instructions: `
  1. Tempere os cubos de frango com sal, pimenta do reino, alho e a pimenta dedo-de-moça.
  2. Aqueça o azeite de oliva em uma frigideira e refogue os cubos de frango até dourarem.
  3. Enquanto isso, amasse o abacate com o suco de limão até formar um purê.
  4. Adicione o purê de abacate aos cubos de frango dourados e misture bem.
  5. Cozinhe por mais 5 minutos e sirva em seguida.
  `
  },
  {
    name: 'Frango Com Presunto e Cebola',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 kg de coxas de frango',
      '100g de presunto em cubos',
      '1 cebola grande picada',
      '2 dentes de alho picados',
      '2 colheres (sopa) de azeite de oliva',
      'Sal e pimenta do reino a gosto'
    ],
    nutrition: {
      calories: 350,
      carbs: '5g',
      protein: '30g',
      fat: '20g',
      fiber: '2g'
    },
    instructions: `
  1. Tempere as coxas de frango com sal e pimenta do reino.
  2. Em uma panela, aqueça o azeite e doure as coxas de frango.
  3. Adicione o presunto, a cebola e o alho, refogando até a cebola ficar macia.
  4. Tampe a panela e cozinhe em fogo baixo por aproximadamente 30 minutos, mexendo ocasionalmente.
  5. Sirva em seguida.
  `
  },
  {
    name: 'Frango ao Molho Champignon',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 filés de peito de frango',
      '200g de champignon fatiado',
      '1/2 xícara (chá) de creme de leite light',
      '2 colheres (sopa) de azeite de oliva',
      '1 dente de alho picado',
      'Sal e pimenta do reino a gosto'
    ],
    nutrition: {
      calories: 280,
      carbs: '4g',
      protein: '30g',
      fat: '16g',
      fiber: '1g'
    },
    instructions: `
  1. Tempere os filés de frango com sal e pimenta do reino.
  2. Em uma frigideira, aqueça o azeite e doure os filés de frango dos dois lados.
  3. Retire os filés da frigideira e reserve.
  4. Na mesma frigideira, adicione o alho e os champignons, refogando por alguns minutos.
  5. Acrescente o creme de leite, misture bem e tempere com sal e pimenta do reino.
  6. Coloque os filés de frango de volta na frigideira, cubra com o molho de champignon e cozinhe por mais 5 minutos.
  7. Sirva em seguida.
  `
  },
  {
    name: 'Frango Aromatizado Com Alho',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 kg de coxas de frango',
      '1 cabeça de alho picada',
      '1/4 xícara (chá) de azeite de oliva',
      '1/2 xícara (chá) de vinho branco seco',
      'Sal e pimenta do reino a gosto'
    ],
    nutrition: {
      calories: 320,
      carbs: '2g',
      protein: '28g',
      fat: '20g',
      fiber: '1g'
    },
    instructions: `
  1. Tempere as coxas de frango com sal e pimenta do reino.
  2. Em uma frigideira, aqueça o azeite e doure as coxas de frango.
  3. Adicione o alho picado e refogue até dourar.
  4. Acrescente o vinho branco e deixe cozinhar em fogo baixo por 30 minutos ou até o frango estar cozido e macio.
  5. Sirva em seguida.
  `
  },
  {
    name: 'Frango Ensopado',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 kg de coxas de frango',
      '2 tomates picados',
      '1 cebola picada',
      '2 dentes de alho picados',
      '1 pimentão verde picado',
      '1 colher (sopa) de azeite de oliva',
      'Sal e pimenta do reino a gosto',
      '1 xícara (chá) de água'
    ],
    nutrition: {
      calories: 250,
      carbs: '6g',
      protein: '28g',
      fat: '14g',
      fiber: '2g'
    },
    instructions: `
  1. Em uma panela, aqueça o azeite e refogue o alho e a cebola até dourar.
  2. Adicione as coxas de frango e doure de todos os lados.
  3. Acrescente o tomate, o pimentão, o sal, a pimenta do reino e a água.
  4. Tampe a panela e cozinhe em fogo baixo por cerca de 40 minutos, mexendo ocasionalmente, até o frango estar cozido e o molho encorpado.
  5. Sirva em seguida.
  `
  },
  {
    name: 'Frango Assado',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 frango inteiro (aproximadamente 1,5 kg)',
      '1 colher (sopa) de azeite de oliva',
      '4 dentes de alho picados',
      'Ramos de alecrim a gosto',
      'Sal e pimenta do reino a gosto'
    ],
    nutrition: {
      calories: 400,
      carbs: '2g',
      protein: '35g',
      fat: '28g',
      fiber: '1g'
    },
    instructions: `
  1. Preaqueça o forno a 180ºC.
  2. Tempere o frango com sal, pimenta do reino, alho e o azeite de oliva.
  3. Coloque os ramos de alecrim dentro do frango e sobre a pele.
  4. Disponha o frango em uma assadeira e cubra com papel alumínio.
  5. Asse por cerca de 1 hora.
  6. Retire o papel alumínio e asse por mais 20 minutos ou até dourar.
  7. Sirva em seguida.
  `
  },
  {
    name: 'Frango na Mostarda',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 kg de coxas de frango',
      '1/4 xícara (chá) de mostarda Dijon',
      '2 colheres (sopa) de mel',
      '2 dentes de alho picados',
      'Sal e pimenta do reino a gosto'
    ],
    nutrition: {
      calories: 350,
      carbs: '8g',
      protein: '30g',
      fat: '22g',
      fiber: '1g'
    },
    instructions: `
  1. Preaqueça o forno a 180ºC.
  2. Em um recipiente, misture a mostarda, o mel, o alho, o sal e a pimenta do reino.
  3. Tempere as coxas de frango com a mistura de mostarda.
  4. Coloque as coxas de frango em uma assadeira e cubra com papel alumínio.
  5. Asse por cerca de 40 minutos.
  6. Retire o papel alumínio e asse por mais 20 minutos ou até dourar.
  7. Sirva em seguida.
  `
  },
  {
    name: 'Frango ao Alho',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 kg de coxas de frango',
      '2 colheres (sopa) de azeite de oliva extra virgem',
      '8 dentes de alho, cortados',
      'Suco de 1 limão',
      '1/2 xícara (chá) de salsa picada',
      '4 colheres (sopa) de manteiga',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 350,
      carbs: '3g',
      protein: '28g',
      fat: '24g',
      fiber: '1g'
    },
    instructions: `
  1. Pré-aqueça o forno a 180ºC.
  2. Coloque os pedaços de frango em uma assadeira untada com manteiga.
  3. Tempere com sal e pimenta-do-reino a gosto.
  4. Polvilhe o alho e a salsa sobre os pedaços de frango e regue com o suco de limão e o azeite por cima.
  5. Leve ao forno e asse por aproximadamente 40 minutos ou até o frango ficar dourado e cozido.
  6. Sirva em seguida.
  `
  },
  {
    name: 'Filé de Frango com Cúrcuma',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '400g de filé de frango',
      '1 colher (chá) de cúrcuma',
      '1 punhado de tomilho',
      '1 colher (sopa) de vinho branco',
      '1 colher (sopa) de azeite de oliva extra virgem',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 250,
      carbs: '1g',
      protein: '28g',
      fat: '14g',
      fiber: '1g'
    },
    instructions: `
  1. Em um recipiente, misture a cúrcuma, o sal, a pimenta-do-reino, o tomilho, o azeite de oliva e o vinho branco.
  2. Passe a mistura nos filés com os dedos para incorporar bem os ingredientes no frango.
  3. Em uma frigideira antiaderente, grelhe os filés dos dois lados até dourarem.
  4. Sirva em seguida.
  `
  },
  {
    name: 'Frango ao Molho de Salsa e Limão',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 colheres (sopa) de manteiga',
      '6 filés de peito de frango',
      '4 colheres (sopa) de suco puro de limão',
      '1/3 xícara (chá) de salsa picada',
      '1/4 xícara (chá) de água',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 280,
      carbs: '2g',
      protein: '30g',
      fat: '18g',
      fiber: '1g'
    },
    instructions: `
  1. Em uma panela, derreta a manteiga e reserve.
  2. Tempere o peito de frango com sal e pimenta-do-reino a gosto.
  3. Disponha os filés em uma assadeira e regue com metade da manteiga.
  4. Leve ao forno pré-aquecido a 220ºC por aproximadamente 30 minutos ou até que estejam bem dourados.
  5. Transfira os filés de frango para um refratário e reserve. Na assadeira, coloque o suco de limão e a manteiga restante.
  6. Raspe o fundo com uma colher de pau, junte a salsa picada e a água.
  7. Aqueça bem e disponha o molho sobre os filés de frango.
  8. Sirva em seguida.
  `
  },
  {
    name: 'Escalope de Frango com Muçarela',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '10 peitos de frango cortados em escalopes',
      '10 fatias de presunto',
      '10 fatias de queijo prato',
      '10 fatias de queijo muçarela',
      '4 colheres (sopa) de azeite de oliva extra virgem',
      '2 colheres (sopa) de manteiga',
      '10 folhas de sálvia',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 350,
      carbs: '2g',
      protein: '32g',
      fat: '22g',
      fiber: '1g'
    },
    instructions: `
  1. Achate levemente os escalopes entre dois pedaços de filme plástico e tempere com sal e pimenta-do-reino a gosto.
  2. Cubra cada escalope com uma fatia de presunto dobrada ao meio, uma de queijo prato e uma de muçarela.
  3. Junte as pontas de cada escalope e prenda-as com dois palitos.
  4. Em uma frigideira, aqueça o azeite e a manteiga em fogo alto e refogue a sálvia até ficar macia.
  5. Retire com uma escumadeira e reserve.
  6. Na mesma frigideira, frite os escalopes de todos os lados.
  7. Retire da frigideira e remova os palitos.
  8. Transfira para uma travessa, regue com o molho e disponha por cima a sálvia.
  9. Sirva em seguida.
  `
  },
  {
    name: 'Espetinho de Frango ao Pesto',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '600g de peito de frango em cubos',
      '1 xícara (chá) de folhas de manjericão picadas',
      '1 dente de alho',
      '1/2 xícara de queijo parmesão ralado',
      '3 colheres (sopa) de azeite de oliva extra virgem',
      'Tomates cereja a gosto',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 300,
      carbs: '4g',
      protein: '32g',
      fat: '18g',
      fiber: '2g'
    },
    instructions: `
  1. Em um processador, triture o manjericão, o alho, o queijo parmesão, o sal e a pimenta-do-reino até obter uma mistura homogênea.
  2. Lentamente, adicione o azeite com o aparelho ligado e bata bem.
  3. Em um recipiente, misture o frango com o molho pesto e deixe marinar por aproximadamente 2 horas.
  4. Monte os espetos, alternando entre um cubinho de frango com pesto e um tomate cereja.
  5. Repita o processo até terminar todo o frango.
  6. Asse os espetinhos de frango ao pesto em uma grelha até ficarem bem dourados e cozidos.
  7. Sirva em seguida.
  `
  },
  {
    name: 'Caçarola de Galinha com Queijo Feta',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1/2 kg de peitos de frango',
      '1 e 1/2 xícara (chá) de creme de leite light',
      '1/2 xícara (chá) de azeitonas sem caroço',
      '2 xícaras (chá) de queijo feta em cubos',
      '1 dente de alho, finamente picado',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de manteiga'
    ],
    nutrition: {
      calories: 400,
      carbs: '6g',
      protein: '32g',
      fat: '26g',
      fiber: '2g'
    },
    instructions: `
  1. Pré-aqueça o forno a 200ºC.
  2. Corte os peitos de frango em pedaços.
  3. Tempere com sal e pimenta-do-reino a gosto.
  4. Em uma frigideira aquecida com manteiga, refogue o frango até ficar bem dourado.
  5. Coloque os pedaços de frango em uma assadeira, juntamente com as azeitonas, o queijo feta e o alho. Adicione o creme de leite.
  6. Asse no forno por aproximadamente 30 minutos ou até ficar bem dourado.
  7. Sirva em seguida.
  `
  },
  {
    name: 'Bolinho de Ricota',
    type: 'snack',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '100g de ricota',
      '1 colher (sopa) de farinha de amêndoas',
      '2 colheres (sopa) de peito de peru cortado em quadradinhos',
      '1 ovo',
      '1 colher (sopa) de salsinha',
      '1 colher (chá) de azeite de oliva extra virgem',
      '1 colher (chá) de orégano',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 150,
      carbs: '3g',
      protein: '12g',
      fat: '10g',
      fiber: '2g'
    },
    instructions: `
  1. Em um recipiente, misture todos os ingredientes até obter uma massa homogênea.
  2. Modele os bolinhos e coloque-os em uma assadeira untada com azeite de oliva.
  3. Leve ao forno pré-aquecido a 180ºC por aproximadamente 20 minutos ou até que os bolinhos estejam dourados.
  4. Sirva em seguida.
  `
  },
  {
    name: 'Pão de Queijo com Farinha de Amêndoas',
    type: 'breakfast',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 xícaras (chá) de farinha de amêndoas',
      '1 xícara (chá) de queijo parmesão ralado',
      '2 ovos',
      '1/4 xícara (chá) de manteiga derretida',
      '1 colher (chá) de fermento em pó',
      'Sal a gosto'
    ],
    nutrition: {
      calories: 250,
      carbs: '5g',
      protein: '12g',
      fat: '20g',
      fiber: '3g'
    },
    instructions: `
  1. Em um recipiente, misture todos os ingredientes até obter uma massa homogênea.
  2. Modele bolinhas com a massa e coloque-as em uma assadeira untada com manteiga.
  3. Leve ao forno pré-aquecido a 180ºC por aproximadamente 20 minutos ou até que estejam douradas.
  4. Sirva em seguida.
  `
  },
  {
    name: 'Frango à Moda Basca',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 frango de 1,5 kg, cortado em pedaços',
      '2 colheres (sopa) de azeite de oliva',
      '4 cebolas, picadas',
      '3 dentes de alho, picados',
      '3 tomates, sem pele e sem sementes, picados',
      '4 pimentões, grelhados, sem pele, cortados em tiras finas',
      '200 g de presunto, cortado em cubos',
      '1/2 pimenta dedo-de-moça, picada',
      '200 ml de vinho branco seco',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 400,
      carbs: '10g',
      protein: '35g',
      fat: '22g',
      fiber: '4g'
    },
    instructions: `
  1. Doure o frango em uma panela com 2 colheres (sopa) de azeite. Retire o frango e despreze a gordura.
  2. Adicione o restante do azeite na panela e refogue a cebola e o presunto até dourar.
  3. Acrescente o alho, os pimentões, os tomates, a pimenta e o vinho. Tempere com sal e pimenta a gosto.
  4. Cozinhe por 10-12 minutos, sem tampar, mexendo de vez em quando.
  5. Adicione os pedaços de frango, tampe a panela e cozinhe por 30-40 minutos.
  6. Sirva em seguida.
  `
  },
  {
    name: 'Strogonoff de Coração de Frango',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 kg de coração de frango limpos',
      '2 dentes de alho picados',
      '1 cebola picada',
      '300 g de champignon',
      '1/2 xícara (chá) de molho de tomate zero açúcar',
      '200 g de creme de leite light',
      '3 colheres (sopa) de azeite de oliva extra virgem',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 300,
      carbs: '5g',
      protein: '25g',
      fat: '20g',
      fiber: '2g'
    },
    instructions: `
  1. Em uma panela aquecida com azeite, refogue o alho e a cebola.
  2. Adicione o coração de frango e refogue até ficar macio.
  3. Acrescente os champignons, o molho de tomate, o creme de leite e tempere com sal e pimenta a gosto.
  4. Cozinhe até o molho engrossar.
  5. Sirva em seguida.
  `
  },
  {
    name: 'Peito de Peru em Papelotes',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '6 peitos de peru (100 g cada)',
      '6 colheres (sopa) de mostarda zero açúcar',
      '6 fatias de presunto magro',
      'Mistura de ervas a gosto',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 200,
      carbs: '3g',
      protein: '30g',
      fat: '8g',
      fiber: '1g'
    },
    instructions: `
  1. Pré-aqueça o forno a 180°C.
  2. Tempere os peitos de peru com sal, pimenta e mostarda.
  3. Envolva cada peito de peru com uma fatia de presunto.
  4. Coloque os peitos de peru em papelotes de papel-alumínio, adicione um pouco de água e feche os papelotes.
  5. Asse por 30 minutos.
  6. Sirva em seguida.
  `
  },
  {
    name: 'Frango à Pizzaiolo',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 peito de frango cortado em filés finos',
      '2 dentes de alho amassados',
      '1 cebola pequena picada',
      '2 tomates médios sem pele, picados',
      'Suco de 1 limão',
      '1/2 xícara (chá) de queijo muçarela ralado',
      'Azeite, sal, pimenta-do-reino e orégano a gosto'
    ],
    nutrition: {
      calories: 300,
      carbs: '5g',
      protein: '28g',
      fat: '18g',
      fiber: '2g'
    },
    instructions: `
  1. Tempere os filés com sal, pimenta, alho e suco de limão. Deixe marinar por 30 minutos.
  2. Em uma panela, refogue a cebola em azeite, adicione o alho e os tomates, e cozinhe até formar um molho.
  3. Tempere o molho com sal e pimenta a gosto.
  4. Grelhe os filés de frango até dourarem.
  5. Coloque os filés sobre o molho em uma travessa e polvilhe com queijo muçarela e orégano.
  6. Leve ao forno para gratinar.
  7. Sirva em seguida.
  `
  },
  {
    name: 'Almôndegas de Peru',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '300 g de carne de peru moída',
      '1 ovo cozido picado',
      '1 ovo cru',
      '1 cebola pequena picada',
      'Gengibre picado a gosto',
      '1 colher (sopa) de azeite de oliva extra virgem',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 200,
      carbs: '3g',
      protein: '20g',
      fat: '12g',
      fiber: '1g'
    },
    instructions: `
  1. Em um recipiente, misture a carne de peru, a cebola, o gengibre, o ovo cozido e o ovo cru. Tempere com sal e pimenta.
  2. Modele bolinhas e disponha em uma assadeira untada com azeite.
  3. Asse em forno pré-aquecido a 180°C por 20 minutos ou até dourar.
  4. Sirva em seguida.
  `
  },
  {
    name: 'Coxa de Peru Assado com Louro',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 coxas de peru',
      '2 cebolas cortadas em pedaços',
      '4 dentes de alho',
      '1 xícara (chá) de vinagre de maçã',
      '1 xícara (chá) de água',
      '6 folhas de louro',
      '1 colher (sopa) de sal'
    ],
    nutrition: {
      calories: 350,
      carbs: '4g',
      protein: '32g',
      fat: '20g',
      fiber: '2g'
    },
    instructions: `
  1. Bata no liquidificador a cebola, o alho, o vinagre, a água, o louro e o sal.
  2. Transfira a mistura para um recipiente e coloque as coxas de peru por cima. Cubra e deixe marinar na geladeira por 24 horas.
  3. Coloque as coxas de peru em uma assadeira e leve ao forno pré-aquecido a 190°C por 60 minutos ou até ficarem macias, regando com o molho da assadeira.
  4. Sirva em seguida.
  `
  },
  {
    name: 'Coxa de Peru Recheada',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 coxas de peru desossadas',
      '3 xícaras (chá) de buquês de brócolis cozido',
      '1/2 xícara (chá) de suco de maracujá',
      '1 colher (sopa) de manteiga',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 320,
      carbs: '6g',
      protein: '30g',
      fat: '18g',
      fiber: '4g'
    },
    instructions: `
  1. Tempere o peru com suco de maracujá, sal e pimenta. Deixe marinar por 20 minutos.
  2. Misture o brócolis cozido com manteiga, sal e pimenta.
  3. Recheie as coxas de peru com a mistura de brócolis e feche com barbante.
  4. Coloque as coxas em uma assadeira, cubra com papel-alumínio e asse em forno pré-aquecido a 180°C por 60 minutos. Retire o papel-alumínio e asse até dourar.
  5. Sirva em seguida.
  `
  },
  {
    name: 'Pato Recheado com Cebola',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 pato de 2 kg',
      '4 cebolas picadas',
      '4 dentes de alho picados',
      '1 xícara (chá) de vinho branco seco',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 400,
      carbs: '5g',
      protein: '35g',
      fat: '25g',
      fiber: '2g'
    },
    instructions: `
  1. Tempere o pato com sal e pimenta. Reserve.
  2. Refogue a cebola e o alho até dourarem. Recheie o pato com a mistura de cebola e alho.
  3. Coloque o pato em uma assadeira e regue com vinho branco.
  4. Cubra com papel-alumínio e asse em forno pré-aquecido a 180°C por 2 horas. Retire o papel-alumínio e asse até dourar.
  5. Sirva em seguida.
  `
  },
  {
    name: 'Frango ao Limão com Alcaparras',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 filés de peito de frango',
      'Suco de 2 limões',
      '2 colheres (sopa) de alcaparras',
      '2 colheres (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 280,
      carbs: '3g',
      protein: '28g',
      fat: '16g',
      fiber: '1g'
    },
    instructions: `
  1. Tempere os filés de frango com sal, pimenta e suco de limão. Deixe marinar por 30 minutos.
  2. Aqueça o azeite em uma frigideira e grelhe os filés até dourarem.
  3. Adicione as alcaparras e cozinhe por mais 2 minutos.
  4. Sirva em seguida.
  `
  },
  {
    name: 'Frango à Passarinho',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 kg de frango à passarinho',
      'Suco de 2 limões',
      '4 dentes de alho amassados',
      'Sal e pimenta-do-reino a gosto',
      'Óleo para fritar'
    ],
    nutrition: {
      calories: 300,
      carbs: '3g',
      protein: '28g',
      fat: '20g',
      fiber: '1g'
    },
    instructions: `
  1. Tempere o frango com suco de limão, alho, sal e pimenta. Deixe marinar por 1 hora.
  2. Aqueça o óleo em uma panela e frite o frango até dourar.
  3. Escorra em papel-toalha e sirva em seguida.
  `
  },
  {
    name: 'Frango ao Molho de Cogumelos',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 peito de frango em tiras',
      '1 xícara (chá) de cogumelos fatiados',
      '1 xícara (chá) de bacon em cubos',
      '1 e 1/2 xícara (chá) de creme de leite light',
      '100 g de queijo parmesão ralado',
      '1 colher (sopa) de mostarda zero açúcar',
      '1 cebola pequena picada',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 350,
      carbs: '6g',
      protein: '30g',
      fat: '22g',
      fiber: '2g'
    },
    instructions: `
  1. Tempere o frango com sal, alho e pimenta. Reserve.
  2. Frite o bacon até dourar. Adicione o frango e cozinhe até dourar.
  3. Acrescente a cebola e os cogumelos e cozinhe por mais 5 minutos.
  4. Adicione o creme de leite, a mostarda e o queijo parmesão, mexendo até incorporar.
  5. Sirva em seguida.
  `
  },
  {
    name: 'Peru Marroquino à Moda Kebab',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '600 g de coxa de peru em cubos',
      'Suco de 1 limão',
      '2 dentes de alho amassados',
      '2 colheres (chá) de curry',
      '1/2 colher (chá) de gengibre em pó',
      '1/3 colher (chá) de açafrão',
      '1 colher (sopa) de óleo de coco',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 280,
      carbs: '4g',
      protein: '30g',
      fat: '16g',
      fiber: '2g'
    },
    instructions: `
  1. Misture todos os ingredientes e deixe marinar por 1 hora.
  2. Refogue os cubos de peru em óleo de coco até dourar.
  3. Adicione um pouco de água para soltar o molho.
  4. Sirva quente.
  `
  },
  {
    name: 'Bife de Picanha ao Alho e Óleo',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '3 bifes de picanha (300 g cada)',
      '5 dentes de alho picados',
      '1 colher (sopa) de manteiga',
      '1 maço de salsinha picada',
      '1 colher (sopa) de azeite de oliva extra virgem',
      'Suco de 1/2 limão',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 450,
      carbs: '2g',
      protein: '35g',
      fat: '30g',
      fiber: '1g'
    },
    instructions: `
  1. Tempere os bifes com sal e pimenta.
  2. Frite os bifes em manteiga até o ponto desejado. Reserve.
  3. Na mesma frigideira, adicione o azeite e doure o alho.
  4. Acrescente a salsinha e o suco de limão, mexendo bem.
  5. Coloque o molho sobre os bifes.
  6. Sirva em seguida.
  `
  },
  {
    name: 'Bisteca de Boi com Maionese de Alho',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 bistecas de boi',
      '4 dentes de alho amassados',
      '1 xícara (chá) de maionese light',
      '1 colher (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 350,
      carbs: '3g',
      protein: '30g',
      fat: '22g',
      fiber: '1g'
    },
    instructions: `
  1. Tempere as bistecas com sal, pimenta e alho. Deixe marinar por 1 hora.
  2. Grelhe as bistecas até o ponto desejado.
  3. Misture a maionese com azeite e sirva com as bistecas.
  4. Sirva em seguida.
  `
  },
  {
    name: 'Carne Assada Recheada com Calabresa',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 kg de carne de sua preferência',
      '200 g de linguiça calabresa picada',
      '2 cebolas picadas',
      '3 dentes de alho picados',
      '1/2 xícara (chá) de cheiro-verde picado',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 450,
      carbs: '4g',
      protein: '35g',
      fat: '30g',
      fiber: '2g'
    },
    instructions: `
  1. Abra a carne como um bife grande e tempere com sal e pimenta.
  2. Recheie com calabresa, cebola, alho e cheiro-verde. Enrole e amarre com barbante.
  3. Asse em forno pré-aquecido a 180°C por 1 hora ou até dourar.
  4. Sirva em seguida.
  `
  },
  {
    name: 'Carne de Panela com Cogumelos',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1,5 kg de contrafilé com uma capa fina de gordura',
      '1/2 colher (sopa) de sal',
      '1 colher (sopa) de temperos secos (salsa, louro, pimenta calabresa moída, cebola e alho)',
      '3 colheres (sopa) de óleo de coco',
      '1 e 1/2 xícara (chá) de caldo de carne caseiro',
      'Suco puro de 1 limão'
    ],
    nutrition: {
      calories: 450,
      carbs: '3g',
      protein: '35g',
      fat: '30g',
      fiber: '1g'
    },
    instructions: `
  1. Tempere o contrafilé com o sal e os temperos secos, esfregando bem.
  2. Transfira a carne para um recipiente com tampa e leve à geladeira por aproximadamente 12 horas.
  3. Retire o contrafilé e reserve o líquido do tempero.
  4. Em uma panela aquecida com o óleo de coco, doure bem a carne.
  5. Junte o líquido reservado e o caldo de carne quente, aos poucos.
  6. Cozinhe em fogo médio por cerca de 50 minutos, ou até chegar ao ponto de sua preferência.
  7. Acrescente o suco de limão e cozinhe por mais 5 minutos.
  8. Sirva em seguida.
  `
  },
  {
    name: 'Carne de Panela com Limão',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de alcatra',
      '200g de creme de leite light',
      '1 xícara (chá) de suco de maracujá natural',
      '1 colher (sopa) de azeite de oliva extra-virgem',
      'Salsa a gosto',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 350,
      carbs: '4g',
      protein: '32g',
      fat: '20g',
      fiber: '1g'
    },
    instructions: `
  1. Tempere a alcatra com sal, pimenta-do-reino e salsa a gosto.
  2. Em uma panela aquecida com azeite de oliva, doure a carne.
  3. Separe a carne em uma outra panela.
  4. Na mesma panela, acrescente o creme de leite e o suco de maracujá.
  5. Mexa por alguns minutos.
  6. Coloque a carne junto com o molho de maracujá e deixe cozinhar por cerca de 15 minutos.
  7. Sirva em seguida.
  `
  },
  {
    name: 'Alcatra com Molho de Maracujá',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de alcatra em bifes',
      '6 tomates picados, sem pele nem sementes',
      '2 colheres (sopa) de óleo de coco',
      '150g de creme de leite light',
      '1 cebola picada',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 350,
      carbs: '6g',
      protein: '30g',
      fat: '20g',
      fiber: '2g'
    },
    instructions: `
  1. Em uma panela aquecida com óleo de coco, doure bem os bifes de alcatra.
  2. Tempere com sal a gosto.
  3. Retire os bifes da panela e disponha em um recipiente.
  4. Na mesma panela, refogue a cebola e o tomate.
  5. Em fogo baixo, cozinhe até o tomate desmanchar.
  6. Tempere com sal e pimenta-do-reino a gosto e mexa bem.
  7. Retire do fogo e adicione o creme de leite, misturando bem.
  8. Disponha o molho sobre os bifes e sirva em seguida.
  `
  },
  {
    name: 'Alcatra ao Molho de Tomate',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de alcatra em bifes',
      '6 tomates picados, sem pele nem sementes',
      '2 colheres (sopa) de óleo de coco',
      '150g de creme de leite light',
      '1 cebola picada',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 350,
      carbs: '6g',
      protein: '30g',
      fat: '20g',
      fiber: '2g'
    },
    instructions: `
  1. Em uma panela aquecida com óleo de coco, doure bem os bifes de alcatra.
  2. Tempere com sal a gosto.
  3. Retire os bifes da panela e disponha em um recipiente.
  4. Na mesma panela, refogue a cebola e o tomate.
  5. Em fogo baixo, cozinhe até o tomate desmanchar.
  6. Tempere com sal e pimenta-do-reino a gosto e mexa bem.
  7. Retire do fogo e adicione o creme de leite, misturando bem.
  8. Disponha o molho sobre os bifes e sirva em seguida.
  `
  },
  {
    name: 'Bife à Cavalo',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '3 bifes de contrafilé',
      '3 ovos',
      '2 colheres (sopa) de óleo de coco',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 450,
      carbs: '2g',
      protein: '35g',
      fat: '32g',
      fiber: '1g'
    },
    instructions: `
  1. Tempere os bifes com sal e pimenta-do-reino a gosto.
  2. Em uma frigideira aquecida com óleo de coco, grelhe os bifes de todos os lados.
  3. Reserve.
  4. Frite os ovos em azeite quente e disponha um ovo em cima de cada bife.
  5. Sirva em seguida.
  `
  },
  {
    name: 'Contra Filé com Ervas Finas',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 bifes (200g cada) de contra filé',
      '1 xícara (chá) de vinagre de maçã',
      '1/2 colher (sopa) de manjericão',
      '1/2 colher (sopa) de alecrim',
      '1/2 colher (sopa) de orégano',
      '1/2 colher (sopa) de tomilho',
      '1/2 colher (sopa) de manjerona',
      'Azeite de oliva extra-virgem a gosto',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 400,
      carbs: '2g',
      protein: '35g',
      fat: '28g',
      fiber: '1g'
    },
    instructions: `
  1. Em um recipiente, adicione o manjericão, o alecrim, o orégano, o tomilho, a manjerona, o sal, a pimenta-do-reino e o vinagre de maçã (suficiente para cobrir as ervas), misture bem e deixe descansar por alguns minutos.
  2. Coloque a mistura em uma frigideira e aqueça até reduzir.
  3. Em uma frigideira, grelhe os bifes até que estejam dourados no azeite.
  4. Acomode os bifes em um prato e acrescente o molho por cima.
  5. Sirva em seguida.
  `
  },
  {
    name: 'Carne Seca Desfiada',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 kg de carne de sol',
      '2 colheres (chá) de azeite de oliva',
      '2 cebolas cortadas em rodelas finas',
      '1/3 xícara (chá) de salsa picada'
    ],
    nutrition: {
      calories: 350,
      carbs: '4g',
      protein: '32g',
      fat: '22g',
      fiber: '2g'
    },
    instructions: `
  1. Coloque a carne seca de molho em um recipiente com água fria e deixe na geladeira por 24 horas. Troque a água durante esse tempo no mínimo seis vezes.
  2. Escorra e corte a carne em pedaços pequenos. Aqueça o azeite de oliva e refogue bem a cebola. Retire metade da cebola e reserve.
  3. Na mesma panela, com o restante da cebola, junte a carne seca e cubra com água fria. Cozinhe até que a carne fique bem macia.
  4. Retire a carne do fogo e desfie bem. Coloque a carne novamente na panela, adicione a cebola reservada e mexa delicadamente para aquecer.
  5. Polvilhe com a salsinha picada e sirva em seguida.
  `
  },
  {
    name: 'Carne de Panela com Legumes',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1,5 kg de alcatra em cubos',
      '2 cebolas em cubos',
      '2 tomates em cubos',
      '1/2 xícara (chá) de cheiro-verde picado',
      '2 colheres (sopa) de óleo de coco',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 400,
      carbs: '6g',
      protein: '35g',
      fat: '24g',
      fiber: '2g'
    },
    instructions: `
  1. Tempere a carne com sal e pimenta-do-reino a gosto.
  2. Em uma panela aquecida com óleo de coco, doure a carne.
  3. Adicione as cebolas e os tomates e refogue até murcharem.
  4. Acrescente o cheiro-verde e misture bem.
  5. Tampe a panela e cozinhe em fogo baixo por cerca de 1 hora, ou até a carne ficar macia.
  6. Sirva em seguida.
  `
  },
  {
    name: 'Cupim Assado com Provolone',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 kg de cupim',
      '300 g de provolone ralado',
      '3 colheres (sopa) de manteiga',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 500,
      carbs: '3g',
      protein: '40g',
      fat: '35g',
      fiber: '1g'
    },
    instructions: `
  1. Tempere o cupim com sal e pimenta-do-reino a gosto.
  2. Em uma panela de pressão, aqueça a manteiga e doure o cupim de todos os lados.
  3. Tampe a panela e cozinhe na pressão por cerca de 1 hora, ou até ficar macio.
  4. Retire o cupim da panela e coloque em uma assadeira.
  5. Polvilhe o provolone ralado por cima e leve ao forno pré-aquecido a 180°C até gratinar.
  6. Sirva em seguida.
  `
  },
  {
    name: 'Fraldinha Recheada com Calabresa',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1,5 kg de fraldinha',
      '200 g de linguiça calabresa picada',
      '1 cebola picada',
      '2 dentes de alho picados',
      '1/2 xícara (chá) de cheiro-verde picado',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 450,
      carbs: '4g',
      protein: '35g',
      fat: '30g',
      fiber: '2g'
    },
    instructions: `
  1. Abra a fraldinha como um bife grande e tempere com sal e pimenta.
  2. Recheie com a linguiça calabresa, a cebola, o alho e o cheiro-verde. Enrole e amarre com barbante.
  3. Asse em forno pré-aquecido a 180°C por 1 hora, ou até dourar.
  4. Sirva em seguida.
  `
  },
  {
    name: 'Fraldinha com Tomate e Queijo',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1,5 kg de fraldinha',
      '200 g de queijo muçarela ralado',
      '4 tomates cortados em rodelas',
      '3 colheres (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 450,
      carbs: '7g',
      protein: '40g',
      fat: '30g',
      fiber: '2g'
    },
    instructions: `
    1. Tempere a fraldinha com sal e pimenta-do-reino a gosto.
    2. Em uma assadeira, disponha a fraldinha e regue com azeite de oliva.
    3. Coloque as rodelas de tomate por cima da carne.
    4. Cubra com o queijo muçarela ralado.
    5. Leve ao forno pré-aquecido a 200ºC e asse por aproximadamente 40 minutos, ou até a carne estar cozida e o queijo gratinado.
    6. Sirva em seguida.
  `
  },
  {
    name: 'Fraldinha na Manteiga',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1,5 kg de fraldinha',
      '3 colheres (sopa) de manteiga',
      '4 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 480,
      carbs: '5g',
      protein: '42g',
      fat: '35g',
      fiber: '1g'
    },
    instructions: `
    1. Tempere a fraldinha com sal e pimenta-do-reino a gosto.
    2. Derreta a manteiga em uma frigideira e doure o alho.
    3. Coloque a fraldinha na frigideira e grelhe dos dois lados até ficar bem dourada.
    4. Transfira para uma assadeira e leve ao forno pré-aquecido a 180ºC por aproximadamente 30 minutos, ou até a carne estar no ponto desejado.
    5. Sirva em seguida.
  `
  },
  {
    name: 'Filé Mignon ao Molho Chimichurri',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 filés de filé mignon',
      '1/2 xícara (chá) de chimichurri',
      '3 colheres (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 420,
      carbs: '4g',
      protein: '44g',
      fat: '24g',
      fiber: '1g'
    },
    instructions: `
    1. Tempere os filés de filé mignon com sal e pimenta-do-reino a gosto.
    2. Aqueça o azeite de oliva em uma frigideira e grelhe os filés dos dois lados até atingir o ponto desejado.
    3. Retire os filés da frigideira e reserve.
    4. Na mesma frigideira, adicione o chimichurri e aqueça por alguns minutos.
    5. Sirva os filés com o molho chimichurri por cima.
  `
  },
  {
    name: 'Costelas com Repolho',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 kg de costelas de boi',
      '1 repolho médio, cortado em tiras',
      '2 colheres (sopa) de azeite de oliva',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 450,
      carbs: '10g',
      protein: '35g',
      fat: '30g',
      fiber: '3g'
    },
    instructions: `
    1. Tempere as costelas com sal e pimenta-do-reino a gosto.
    2. Em uma panela grande, aqueça o azeite de oliva e doure o alho.
    3. Adicione as costelas e doure bem de todos os lados.
    4. Acrescente o repolho e misture bem.
    5. Tampe a panela e cozinhe em fogo baixo por aproximadamente 1 hora, ou até a carne e o repolho estarem macios.
    6. Sirva em seguida.
  `
  },
  {
    name: 'Lagarto Recheado com Cenoura',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 kg de lagarto',
      '2 cenouras cortadas em tiras',
      '2 colheres (sopa) de azeite de oliva',
      '1 cebola picada',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 380,
      carbs: '6g',
      protein: '38g',
      fat: '22g',
      fiber: '3g'
    },
    instructions: `
    1. Com uma faca afiada, faça cortes no lagarto e insira as tiras de cenoura.
    2. Tempere a carne com sal e pimenta-do-reino a gosto.
    3. Em uma panela de pressão, aqueça o azeite de oliva e doure a cebola e o alho.
    4. Adicione a carne e doure bem de todos os lados.
    5. Cubra com água, tampe a panela e cozinhe na pressão por aproximadamente 40 minutos, ou até a carne estar macia.
    6. Sirva em seguida.
  `
  },
  {
    name: 'Lagarto à Roquefort',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 kg de lagarto',
      '200 g de queijo roquefort',
      '1 xícara (chá) de creme de leite light',
      '2 colheres (sopa) de azeite de oliva',
      '1 cebola picada',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 420,
      carbs: '5g',
      protein: '36g',
      fat: '28g',
      fiber: '2g'
    },
    instructions: `
    1. Tempere o lagarto com sal e pimenta-do-reino a gosto.
    2. Em uma panela de pressão, aqueça o azeite de oliva e doure a cebola.
    3. Adicione a carne e doure bem de todos os lados.
    4. Cubra com água, tampe a panela e cozinhe na pressão por aproximadamente 40 minutos, ou até a carne estar macia.
    5. Retire a carne da panela e reserve.
    6. Na mesma panela, adicione o queijo roquefort e o creme de leite, mexendo até obter um molho homogêneo.
    7. Sirva a carne com o molho por cima.
  `
  },
  {
    name: 'Medalhão ao Molho de Requeijão',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 medalhões de filé mignon',
      '1 xícara (chá) de requeijão light',
      '1/2 xícara (chá) de creme de leite light',
      '2 colheres (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 410,
      carbs: '6g',
      protein: '35g',
      fat: '26g',
      fiber: '2g'
    },
    instructions: `
    1. Tempere os medalhões com sal e pimenta-do-reino a gosto.
    2. Aqueça o azeite de oliva em uma frigideira e grelhe os medalhões dos dois lados até atingir o ponto desejado.
    3. Retire os medalhões da frigideira e reserve.
    4. Na mesma frigideira, adicione o requeijão e o creme de leite, mexendo até obter um molho homogêneo.
    5. Sirva os medalhões com o molho por cima.
  `
  },
  {
    name: 'Maminha com Manjericão',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 kg de maminha',
      '1/2 xícara (chá) de folhas de manjericão fresco',
      '2 colheres (sopa) de azeite de oliva',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 390,
      carbs: '4g',
      protein: '36g',
      fat: '25g',
      fiber: '2g'
    },
    instructions: `
    1. Tempere a maminha com sal e pimenta-do-reino a gosto.
    2. Aqueça o azeite de oliva em uma frigideira e doure o alho.
    3. Adicione a maminha e grelhe bem de todos os lados.
    4. Transfira para uma assadeira, cubra com as folhas de manjericão e leve ao forno pré-aquecido a 180ºC por aproximadamente 30 minutos, ou até a carne estar no ponto desejado.
    5. Sirva em seguida.
  `
  },
  {
    name: 'Picanha do Avesso',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 picanha de aproximadamente 1,5 kg',
      '200 g de queijo provolone ralado',
      '1 xícara (chá) de bacon picado',
      '3 colheres (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 480,
      carbs: '6g',
      protein: '40g',
      fat: '35g',
      fiber: '2g'
    },
    instructions: `
    1. Com uma faca afiada, faça um corte no centro da picanha, formando um bolso.
    2. Recheie com o queijo provolone e o bacon.
    3. Tempere com sal e pimenta-do-reino a gosto.
    4. Aqueça o azeite de oliva em uma frigideira e sele a picanha de todos os lados.
    5. Transfira para uma assadeira e leve ao forno pré-aquecido a 200ºC por aproximadamente 40 minutos, ou até a carne estar no ponto desejado.
    6. Sirva em seguida.
  `
  },
  {
    name: 'Hambúrguer com Picles e Cottage',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 hambúrgueres de carne bovina',
      '4 colheres (sopa) de queijo cottage',
      '4 fatias de picles',
      '4 folhas de alface',
      '4 fatias de tomate',
      '4 pães de hambúrguer integrais',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 450,
      carbs: '35g',
      protein: '30g',
      fat: '20g',
      fiber: '5g'
    },
    instructions: `
    1. Tempere os hambúrgueres com sal e pimenta-do-reino a gosto.
    2. Grelhe os hambúrgueres até o ponto desejado.
    3. Monte os hambúrgueres colocando uma folha de alface, uma fatia de tomate, uma fatia de picles e uma colher de queijo cottage em cada pão.
    4. Sirva em seguida.
  `
  },
  {
    name: 'Hambúrguer ao Molho de Tomate',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 hambúrgueres de carne bovina',
      '2 xícaras (chá) de molho de tomate caseiro',
      '1 cebola picada',
      '2 colheres (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 410,
      carbs: '15g',
      protein: '32g',
      fat: '22g',
      fiber: '4g'
    },
    instructions: `
    1. Tempere os hambúrgueres com sal e pimenta-do-reino a gosto.
    2. Aqueça o azeite de oliva em uma frigideira e grelhe os hambúrgueres até o ponto desejado.
    3. Retire os hambúrgueres da frigideira e reserve.
    4. Na mesma frigideira, refogue a cebola até dourar.
    5. Adicione o molho de tomate e cozinhe por alguns minutos.
    6. Sirva os hambúrgueres com o molho de tomate por cima.
  `
  },
  {
    name: 'Rocambole de Carne Recheado com Ricota',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 kg de carne moída',
      '200 g de ricota esfarelada',
      '1 cebola picada',
      '2 dentes de alho picados',
      '1 ovo',
      '2 colheres (sopa) de farinha de rosca integral',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 380,
      carbs: '12g',
      protein: '40g',
      fat: '20g',
      fiber: '4g'
    },
    instructions: `
    1. Em uma tigela, misture a carne moída, a cebola, o alho, o ovo, a farinha de rosca, o sal e a pimenta-do-reino.
    2. Abra a mistura sobre um pedaço de papel-alumínio, formando um retângulo.
    3. Distribua a ricota esfarelada sobre a carne.
    4. Enrole a carne como um rocambole, com a ajuda do papel-alumínio.
    5. Coloque em uma assadeira e leve ao forno pré-aquecido a 180ºC por aproximadamente 40 minutos, ou até a carne estar cozida.
    6. Sirva em seguida.
  `
  },
  {
    name: 'Pizza de Carne Moída',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500 g de carne moída',
      '1 cebola picada',
      '2 dentes de alho picados',
      '1 xícara (chá) de molho de tomate caseiro',
      '1 xícara (chá) de queijo muçarela ralado',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 410,
      carbs: '8g',
      protein: '40g',
      fat: '22g',
      fiber: '3g'
    },
    instructions: `
    1. Em uma tigela, misture a carne moída, a cebola, o alho, o sal e a pimenta-do-reino.
    2. Pressione a mistura de carne em uma forma de pizza, formando a base.
    3. Leve ao forno pré-aquecido a 200ºC por 20 minutos.
    4. Retire do forno, espalhe o molho de tomate e cubra com o queijo muçarela.
    5. Volte ao forno até o queijo derreter.
    6. Sirva em seguida.
  `
  },
  {
    name: 'Carne Moída com Ovo',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500 g de carne moída',
      '1 cebola picada',
      '2 dentes de alho picados',
      '4 ovos',
      '2 colheres (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 380,
      carbs: '6g',
      protein: '35g',
      fat: '22g',
      fiber: '2g'
    },
    instructions: `
    1. Em uma frigideira, aqueça o azeite de oliva e refogue a cebola e o alho.
    2. Adicione a carne moída e cozinhe até dourar.
    3. Tempere com sal e pimenta-do-reino a gosto.
    4. Faça quatro cavidades na carne e quebre um ovo em cada uma.
    5. Tampe a frigideira e cozinhe até os ovos estarem no ponto desejado.
    6. Sirva em seguida.
  `
  },
  {
    name: 'Carne Moída com Quiabo',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500 g de carne moída',
      '200 g de quiabo, cortado em rodelas',
      '1 cebola picada',
      '2 dentes de alho picados',
      '2 colheres (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 390,
      carbs: '8g',
      protein: '34g',
      fat: '24g',
      fiber: '4g'
    },
    instructions: `
    1. Em uma frigideira, aqueça o azeite de oliva e refogue a cebola e o alho.
    2. Adicione a carne moída e cozinhe até dourar.
    3. Acrescente o quiabo e cozinhe por mais 10 minutos.
    4. Tempere com sal e pimenta-do-reino a gosto.
    5. Sirva em seguida.
  `
  },
  {
    name: 'Espetinho Misto de Carne',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500 g de carne bovina em cubos',
      '500 g de peito de frango em cubos',
      '1 pimentão vermelho em pedaços',
      '1 pimentão verde em pedaços',
      '1 cebola em pedaços',
      '2 colheres (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 400,
      carbs: '6g',
      protein: '38g',
      fat: '22g',
      fiber: '3g'
    },
    instructions: `
    1. Tempere a carne e o frango com sal e pimenta-do-reino a gosto.
    2. Monte os espetinhos alternando carne, frango, pimentão e cebola.
    3. Pincele com azeite de oliva.
    4. Grelhe os espetinhos até a carne e o frango estarem cozidos.
    5. Sirva em seguida.
  `
  },
  {
    name: 'Almôndegas Recheadas com Muçarela',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500 g de carne moída',
      '100 g de queijo muçarela em cubos',
      '1 cebola picada',
      '2 dentes de alho picados',
      '1 ovo',
      '2 colheres (sopa) de farinha de rosca integral',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 400,
      carbs: '8g',
      protein: '35g',
      fat: '25g',
      fiber: '3g'
    },
    instructions: `
    1. Em uma tigela, misture a carne moída, a cebola, o alho, o ovo, a farinha de rosca, o sal e a pimenta-do-reino.
    2. Modele bolinhas com a carne e coloque um cubo de queijo muçarela no centro de cada uma.
    3. Disponha as almôndegas em uma assadeira untada com azeite.
    4. Asse em forno pré-aquecido a 180ºC por aproximadamente 30 minutos, ou até estarem douradas e cozidas.
    5. Sirva em seguida.
  `
  },
  {
    name: 'Bolinhos de Carne Moída com Ovos',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500 g de carne moída',
      '4 ovos',
      '1 cebola picada',
      '2 dentes de alho picados',
      '2 colheres (sopa) de farinha de rosca integral',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 410,
      carbs: '7g',
      protein: '34g',
      fat: '26g',
      fiber: '2g'
    },
    instructions: `
    1. Em uma tigela, misture a carne moída, a cebola, o alho, a farinha de rosca, o sal e a pimenta-do-reino.
    2. Modele bolinhas com a carne e faça um buraco no centro de cada uma.
    3. Quebre um ovo em cada bolinho.
    4. Disponha os bolinhos em uma assadeira untada com azeite.
    5. Asse em forno pré-aquecido a 180ºC por aproximadamente 30 minutos, ou até estarem douradas e cozidas.
    6. Sirva em seguida.
  `
  },
  {
    name: 'Bisteca de Porco ao Creme Rosê',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 bistecas de porco',
      '1 xícara (chá) de creme de leite light',
      '1/2 xícara (chá) de molho de tomate zero açúcar',
      '2 colheres (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 400,
      carbs: '7g',
      protein: '30g',
      fat: '26g',
      fiber: '2g'
    },
    instructions: `
    1. Tempere as bistecas com sal e pimenta-do-reino a gosto.
    2. Aqueça o azeite de oliva em uma frigideira e grelhe as bistecas até estarem bem douradas.
    3. Retire as bistecas da frigideira e reserve.
    4. Na mesma frigideira, adicione o creme de leite e o molho de tomate, mexendo bem até formar um molho homogêneo.
    5. Volte as bistecas para a frigideira e cozinhe por mais alguns minutos, até estarem bem aquecidas.
    6. Sirva em seguida.
  `
  },
  {
    name: 'Costelinha com Quiabo',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 kg de costelinha de porco',
      '200 g de quiabo, cortado em rodelas',
      '2 colheres (sopa) de azeite de oliva',
      '1 cebola picada',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 430,
      carbs: '8g',
      protein: '34g',
      fat: '30g',
      fiber: '3g'
    },
    instructions: `
    1. Tempere a costelinha com sal e pimenta-do-reino a gosto.
    2. Aqueça o azeite de oliva em uma panela e doure a cebola e o alho.
    3. Adicione a costelinha e doure bem de todos os lados.
    4. Acrescente o quiabo e cozinhe por mais 10 minutos.
    5. Tampe a panela e cozinhe em fogo baixo por cerca de 40 minutos, ou até a costelinha estar macia.
    6. Sirva em seguida.
  `
  },
  {
    name: 'Costelinha de Porco na Brasa',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 kg de costelinha de porco',
      '1/4 xícara (chá) de molho de soja',
      '1/4 xícara (chá) de vinagre de maçã',
      '3 dentes de alho picados',
      '1 colher (sopa) de mel',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 460,
      carbs: '10g',
      protein: '32g',
      fat: '32g',
      fiber: '2g'
    },
    instructions: `
    1. Em uma tigela, misture o molho de soja, vinagre, alho, mel, sal e pimenta.
    2. Tempere a costelinha com essa mistura e deixe marinar por pelo menos 2 horas.
    3. Asse a costelinha em uma churrasqueira pré-aquecida, virando ocasionalmente, até estar completamente cozida e dourada.
    4. Sirva em seguida.
  `
  },
  {
    name: 'Lombo com Limão e Mostarda',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 kg de lombo de porco',
      'Suco de 2 limões',
      '3 colheres (sopa) de mostarda',
      '2 dentes de alho picados',
      '2 colheres (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 400,
      carbs: '5g',
      protein: '35g',
      fat: '25g',
      fiber: '2g'
    },
    instructions: `
    1. Tempere o lombo com suco de limão, mostarda, alho, sal e pimenta.
    2. Deixe marinar por pelo menos 1 hora.
    3. Aqueça o azeite em uma panela e doure o lombo de todos os lados.
    4. Transfira para uma assadeira e leve ao forno pré-aquecido a 180ºC por aproximadamente 40 minutos, ou até estar completamente cozido.
    5. Sirva em seguida.
  `
  },
  {
    name: 'Lombo de Porco com Parmesão',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 kg de lombo de porco',
      '100 g de queijo parmesão ralado',
      '1/2 xícara (chá) de farinha de rosca integral',
      '2 colheres (sopa) de azeite de oliva',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 420,
      carbs: '7g',
      protein: '34g',
      fat: '28g',
      fiber: '3g'
    },
    instructions: `
    1. Tempere o lombo com sal, pimenta e alho.
    2. Misture o queijo parmesão com a farinha de rosca.
    3. Passe o lombo na mistura de parmesão e farinha de rosca.
    4. Aqueça o azeite em uma panela e doure o lombo de todos os lados.
    5. Transfira para uma assadeira e leve ao forno pré-aquecido a 180ºC por aproximadamente 40 minutos, ou até estar completamente cozido.
    6. Sirva em seguida.
  `
  },
  {
    name: 'Bisteca com Tomate',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 bistecas de porco',
      '4 tomates cortados em rodelas',
      '1 cebola cortada em rodelas',
      '2 colheres (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 380,
      carbs: '8g',
      protein: '32g',
      fat: '24g',
      fiber: '3g'
    },
    instructions: `
    1. Tempere as bistecas com sal e pimenta.
    2. Aqueça o azeite em uma frigideira e doure as bistecas de ambos os lados.
    3. Adicione a cebola e o tomate, e cozinhe por mais 10 minutos.
    4. Sirva em seguida.
  `
  },
  {
    name: 'Bisteca de Boi ao Gorgonzola',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 bistecas de boi',
      '100 g de queijo gorgonzola',
      '1/2 xícara (chá) de creme de leite light',
      '2 colheres (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 410,
      carbs: '5g',
      protein: '36g',
      fat: '26g',
      fiber: '2g'
    },
    instructions: `
    1. Tempere as bistecas com sal e pimenta.
    2. Aqueça o azeite em uma frigideira e doure as bistecas de ambos os lados.
    3. Retire as bistecas da frigideira e reserve.
    4. Na mesma frigideira, adicione o creme de leite e o queijo gorgonzola, mexendo até obter um molho homogêneo.
    5. Sirva as bistecas com o molho de gorgonzola por cima.
  `
  },
  {
    name: 'Bisteca à Forentina',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 bistecas de porco',
      '2 dentes de alho picados',
      '2 colheres (sopa) de azeite de oliva',
      '1 colher (sopa) de alecrim fresco picado',
      'Suco de 1 limão',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 390,
      carbs: '4g',
      protein: '34g',
      fat: '26g',
      fiber: '2g'
    },
    instructions: `
    1. Tempere as bistecas com alho, sal, pimenta e alecrim.
    2. Aqueça o azeite em uma frigideira e doure as bistecas de ambos os lados.
    3. Adicione o suco de limão e cozinhe por mais 5 minutos.
    4. Sirva em seguida.
  `
  },
  {
    name: 'Costelinha de Porco Frita',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 kg de costelinha de porco',
      '2 dentes de alho picados',
      '1 colher (sopa) de vinagre',
      '1 colher (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 440,
      carbs: '5g',
      protein: '35g',
      fat: '30g',
      fiber: '2g'
    },
    instructions: `
    1. Tempere a costelinha com alho, vinagre, sal e pimenta.
    2. Aqueça o azeite em uma frigideira grande e frite a costelinha até estar bem dourada e cozida.
    3. Sirva em seguida.
  `
  },
  {
    name: 'Cabrito com Molho Picante',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 kg de carne de cabrito em pedaços',
      '2 pimentas vermelhas picadas',
      '3 dentes de alho picados',
      '1 colher (sopa) de azeite de oliva',
      'Suco de 1 limão',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 420,
      carbs: '6g',
      protein: '38g',
      fat: '28g',
      fiber: '3g'
    },
    instructions: `
    1. Tempere o cabrito com alho, pimentas, suco de limão, sal e pimenta.
    2. Deixe marinar por pelo menos 2 horas.
    3. Aqueça o azeite em uma panela grande e doure a carne de todos os lados.
    4. Cozinhe em fogo baixo até a carne estar macia.
    5. Sirva em seguida.
  `
  },
  {
    name: 'Cabrito à Vicentina',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 kg de carne de cabrito em pedaços',
      '2 colheres (sopa) de azeite de oliva',
      '1 cebola picada',
      '2 tomates picados',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 410,
      carbs: '10g',
      protein: '36g',
      fat: '26g',
      fiber: '4g'
    },
    instructions: `
    1. Tempere o cabrito com sal e pimenta.
    2. Aqueça o azeite em uma panela grande e doure a carne de todos os lados.
    3. Adicione a cebola, o alho e os tomates, e cozinhe até os tomates se desmancharem.
    4. Tampe a panela e cozinhe em fogo baixo até a carne estar macia.
    5. Sirva em seguida.
  `
  },
  {
    name: 'Pernil ao Molho Vinagrete',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 kg de pernil de porco',
      '1/2 xícara (chá) de vinagre de vinho tinto',
      '1/4 xícara (chá) de azeite de oliva',
      '1 cebola picada',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 430,
      carbs: '6g',
      protein: '36g',
      fat: '28g',
      fiber: '3g'
    },
    instructions: `
    1. Tempere o pernil com sal, pimenta, alho, vinagre e azeite.
    2. Deixe marinar por pelo menos 2 horas.
    3. Asse o pernil em forno pré-aquecido a 180ºC por aproximadamente 1 hora, ou até estar completamente cozido.
    4. Sirva em seguida.
  `
  },
  {
    name: 'Pernil de Cordeiro Assado ao Alho',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 pernil de cordeiro de aproximadamente 2 kg',
      '6 dentes de alho picados',
      '1/4 xícara (chá) de azeite de oliva',
      'Suco de 2 limões',
      '1 ramo de alecrim fresco',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 460,
      carbs: '7g',
      protein: '42g',
      fat: '30g',
      fiber: '2g'
    },
    instructions: `
    1. Tempere o pernil com alho, azeite, suco de limão, alecrim, sal e pimenta.
    2. Deixe marinar por pelo menos 2 horas.
    3. Asse o pernil em forno pré-aquecido a 180ºC por aproximadamente 1 hora e 30 minutos, ou até estar completamente cozido.
    4. Sirva em seguida.
  `
  },
  {
    name: 'Costela de Cordeiro com Limão',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 kg de costela de cordeiro',
      'Suco de 2 limões',
      '2 dentes de alho picados',
      '1 colher (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 440,
      carbs: '5g',
      protein: '40g',
      fat: '28g',
      fiber: '2g'
    },
    instructions: `
    1. Tempere a costela com alho, suco de limão, sal e pimenta.
    2. Deixe marinar por pelo menos 1 hora.
    3. Aqueça o azeite em uma frigideira e doure a costela de todos os lados.
    4. Transfira para uma assadeira e leve ao forno pré-aquecido a 180ºC por aproximadamente 40 minutos, ou até estar completamente cozida.
    5. Sirva em seguida.
  `
  },
  {
    name: 'Rim Bovino com Pimentões',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500 g de rim bovino, limpo e cortado em pedaços',
      '2 pimentões (um verde e um vermelho) cortados em tiras',
      '1 cebola picada',
      '2 colheres (sopa) de azeite de oliva',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 370,
      carbs: '8g',
      protein: '34g',
      fat: '24g',
      fiber: '3g'
    },
    instructions: `
    1. Tempere o rim com sal e pimenta.
    2. Aqueça o azeite em uma frigideira e doure a cebola e o alho.
    3. Adicione o rim e cozinhe até dourar.
    4. Acrescente os pimentões e cozinhe por mais 10 minutos.
    5. Sirva em seguida.
  `
  },
  {
    name: 'Cabrito no Leite e Coco',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 kg de carne de cabrito em pedaços',
      '400 ml de leite de coco',
      '1 cebola picada',
      '2 dentes de alho picados',
      '2 colheres (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 430,
      carbs: '6g',
      protein: '38g',
      fat: '28g',
      fiber: '3g'
    },
    instructions: `
    1. Tempere o cabrito com sal e pimenta.
    2. Aqueça o azeite em uma panela grande e doure a cebola e o alho.
    3. Adicione o cabrito e cozinhe até dourar.
    4. Acrescente o leite de coco, tampe a panela e cozinhe em fogo baixo até a carne estar macia.
    5. Sirva em seguida.
  `
  },
  {
    name: 'Frango com Quiabo',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 kg de frango cortado em pedaços',
      '200 g de quiabo cortado em rodelas',
      '2 dentes de alho picados',
      '1 cebola picada',
      '2 colheres (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 400,
      carbs: '6g',
      protein: '35g',
      fat: '24g',
      fiber: '3g'
    },
    instructions: `
    1. Tempere o frango com sal e pimenta.
    2. Aqueça o azeite em uma panela grande e doure a cebola e o alho.
    3. Adicione o frango e cozinhe até dourar.
    4. Acrescente o quiabo e cozinhe por mais 10 minutos.
    5. Tampe a panela e cozinhe em fogo baixo por cerca de 40 minutos, ou até o frango estar macio.
    6. Sirva em seguida.
  `
  },
  {
    name: 'Frango Xadrez',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500 g de peito de frango em cubos',
      '1 pimentão vermelho em cubos',
      '1 pimentão verde em cubos',
      '1 cebola em cubos',
      '2 dentes de alho picados',
      '2 colheres (sopa) de molho de soja',
      '1 colher (sopa) de óleo de gergelim',
      '2 colheres (sopa) de amido de milho',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 350,
      carbs: '10g',
      protein: '30g',
      fat: '18g',
      fiber: '4g'
    },
    instructions: `
    1. Tempere o frango com sal e pimenta.
    2. Aqueça o óleo de gergelim em uma frigideira e doure o frango.
    3. Adicione o alho, a cebola e os pimentões, e refogue por mais 5 minutos.
    4. Dissolva o amido de milho no molho de soja e acrescente à frigideira, mexendo até engrossar.
    5. Sirva em seguida.
  `
  },
  {
    name: 'Asas de Frango com Mostarda',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 kg de asas de frango',
      '3 colheres (sopa) de mostarda',
      '2 dentes de alho picados',
      '1 colher (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 420,
      carbs: '6g',
      protein: '35g',
      fat: '28g',
      fiber: '2g'
    },
    instructions: `
    1. Tempere as asas de frango com mostarda, alho, sal e pimenta.
    2. Aqueça o azeite em uma frigideira grande e doure as asas de frango de todos os lados.
    3. Transfira para uma assadeira e leve ao forno pré-aquecido a 180ºC por aproximadamente 30 minutos, ou até estarem completamente cozidas.
    4. Sirva em seguida.
  `
  },
  {
    name: 'Asinha de Frango Picante',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 kg de asinhas de frango',
      '2 colheres (sopa) de pimenta vermelha em pó',
      '2 dentes de alho picados',
      '1 colher (sopa) de azeite de oliva',
      'Suco de 1 limão',
      'Sal a gosto'
    ],
    nutrition: {
      calories: 430,
      carbs: '5g',
      protein: '36g',
      fat: '29g',
      fiber: '3g'
    },
    instructions: `
    1. Tempere as asinhas com pimenta, alho, suco de limão e sal.
    2. Aqueça o azeite em uma frigideira grande e doure as asinhas de todos os lados.
    3. Transfira para uma assadeira e leve ao forno pré-aquecido a 180ºC por aproximadamente 30 minutos, ou até estarem completamente cozidas.
    4. Sirva em seguida.
  `
  },
  {
    name: 'Sobrecoxas com Ervas Finas',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 kg de sobrecoxas de frango',
      '2 colheres (sopa) de azeite de oliva',
      '2 dentes de alho picados',
      '1 colher (sopa) de ervas finas secas (manjericão, tomilho, orégano)',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 440,
      carbs: '4g',
      protein: '38g',
      fat: '30g',
      fiber: '2g'
    },
    instructions: `
    1. Tempere as sobrecoxas com sal, pimenta, alho e ervas finas.
    2. Aqueça o azeite em uma frigideira grande e doure as sobrecoxas de todos os lados.
    3. Transfira para uma assadeira e leve ao forno pré-aquecido a 180ºC por aproximadamente 40 minutos, ou até estarem completamente cozidas.
    4. Sirva em seguida.
  `
  },
  {
    name: 'Isca de Fígado',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de fígado de boi',
      '1 cebola grande cortada em rodelas finas',
      '2 dentes de alho picados',
      '2 colheres (sopa) de óleo de coco',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 380,
      carbs: '6g',
      protein: '32g',
      fat: '26g',
      fiber: '2g'
    },
    instructions: `
    1. Limpe bem os bifes de fígado. Tempere-os com sal, pimenta-do-reino e alho, e deixe marinar por aproximadamente 10 minutos.
    2. Em uma frigideira, aqueça o óleo em fogo médio.
    3. Frite as cebolas até ficarem douradas e reserve.
    4. Na mesma frigideira, frite os bifes de fígado até estarem bem dourados.
    5. Coloque os bifes em um refratário, cubra com as cebolas fritas e sirva em seguida.
  `
  },
  {
    name: 'Coração de Frango ao Molho',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de coração de frango limpo',
      '2 dentes de alho picados',
      '1 cebola picada',
      '2 colheres (sopa) de óleo de coco',
      '1 xícara (chá) de molho de tomate zero açúcar',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 350,
      carbs: '8g',
      protein: '30g',
      fat: '22g',
      fiber: '2g'
    },
    instructions: `
    1. Em uma panela, aqueça o óleo e refogue a cebola e o alho até dourarem.
    2. Adicione os corações de frango e cozinhe até que estejam dourados.
    3. Acrescente o molho de tomate, sal e pimenta, misture bem e cozinhe por mais 10 minutos.
    4. Sirva quente, acompanhado de arroz integral ou uma salada verde.
  `
  },
  {
    name: 'Frango Recheado com Espinafre',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 filés de peito de frango',
      '1 maço de espinafre',
      '1 dente de alho picado',
      '2 colheres (sopa) de óleo de coco',
      '100g de queijo cottage',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 360,
      carbs: '4g',
      protein: '34g',
      fat: '22g',
      fiber: '2g'
    },
    instructions: `
    1. Refogue o alho no óleo de coco, acrescente o espinafre e cozinhe até murchar. Tempere com sal e pimenta.
    2. Abra os filés de frango, tempere-os e recheie com o espinafre e o queijo cottage.
    3. Enrole os filés e prenda com palitos.
    4. Coloque os rolinhos em uma assadeira e leve ao forno pré-aquecido a 200°C por 25 minutos.
    5. Sirva com legumes assados ou uma salada.
  `
  },
  {
    name: 'Frango ao Leite de Coco',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de peito de frango em cubos',
      '200ml de leite de coco',
      '1 cebola picada',
      '2 dentes de alho picados',
      '2 colheres (sopa) de óleo de coco',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 380,
      carbs: '6g',
      protein: '30g',
      fat: '26g',
      fiber: '3g'
    },
    instructions: `
    1. Aqueça o óleo de coco em uma panela e refogue a cebola e o alho até dourarem.
    2. Adicione os cubos de frango e cozinhe até dourarem.
    3. Acrescente o leite de coco, sal e pimenta, misture bem e cozinhe por mais 10 minutos.
    4. Sirva quente com arroz integral ou quinoa.
  `
  },
  {
    name: 'Frango Mineiro',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de coxa e sobrecoxa de frango',
      '2 dentes de alho picados',
      '1 cebola picada',
      '2 colheres (sopa) de óleo de coco',
      '1 xícara (chá) de molho de tomate zero açúcar',
      '1/2 xícara (chá) de água',
      'Sal e pimenta-do-reino a gosto',
      'Cheiro-verde a gosto'
    ],
    nutrition: {
      calories: 370,
      carbs: '7g',
      protein: '33g',
      fat: '24g',
      fiber: '2g'
    },
    instructions: `
    1. Em uma panela, aqueça o óleo e refogue o alho e a cebola até dourarem.
    2. Adicione o frango e cozinhe até dourar.
    3. Acrescente o molho de tomate, água, sal e pimenta, misture bem e cozinhe por 20 minutos ou até o frango estar macio.
    4. Finalize com cheiro-verde e sirva quente.
  `
  },
  {
    name: 'Frango com Gengibre',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de peito de frango em tiras',
      '1 pedaço de gengibre ralado (cerca de 2cm)',
      '2 dentes de alho picados',
      '1 cebola picada',
      '2 colheres (sopa) de óleo de coco',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 360,
      carbs: '5g',
      protein: '32g',
      fat: '23g',
      fiber: '2g'
    },
    instructions: `
    1. Aqueça o óleo de coco em uma panela e refogue a cebola e o alho até dourarem.
    2. Adicione o gengibre ralado e as tiras de frango, cozinhando até dourarem.
    3. Tempere com sal e pimenta a gosto e cozinhe por mais 5 minutos.
    4. Sirva com legumes salteados ou uma salada verde.
  `
  },
  {
    name: 'Frango com Repolho Cremoso',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de peito de frango em tiras',
      '1/2 repolho cortado em tiras finas',
      '1 cebola picada',
      '2 dentes de alho picados',
      '2 colheres (sopa) de óleo de coco',
      '200ml de creme de leite light',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 380,
      carbs: '7g',
      protein: '32g',
      fat: '25g',
      fiber: '3g'
    },
    instructions: `
    1. Em uma panela, aqueça o óleo e refogue a cebola e o alho até dourarem.
    2. Adicione as tiras de frango e cozinhe até dourarem.
    3. Acrescente o repolho e cozinhe até murchar.
    4. Adicione o creme de leite, sal e pimenta, misture bem e cozinhe por mais 5 minutos.
    5. Sirva quente com arroz integral ou quinoa.
  `
  },
  {
    name: 'Hambúrguer de Frango',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de peito de frango moído',
      '1 cebola ralada',
      '2 dentes de alho picados',
      '2 colheres (sopa) de cheiro-verde picado',
      'Sal e pimenta-do-reino a gosto',
      '1 colher (sopa) de farelo de aveia'
    ],
    nutrition: {
      calories: 320,
      carbs: '6g',
      protein: '30g',
      fat: '18g',
      fiber: '3g'
    },
    instructions: `
    1. Em um recipiente, misture todos os ingredientes até obter uma massa homogênea.
    2. Molde os hambúrgueres e grelhe em uma frigideira antiaderente até dourarem dos dois lados.
    3. Sirva com pão integral e salada.
  `
  },
  {
    name: 'Moqueca de Frango',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de peito de frango em cubos',
      '1 pimentão vermelho em tiras',
      '1 pimentão verde em tiras',
      '1 cebola em rodelas',
      '2 tomates em rodelas',
      '200ml de leite de coco',
      '2 colheres (sopa) de azeite de dendê',
      'Sal e pimenta-do-reino a gosto',
      'Coentro picado a gosto'
    ],
    nutrition: {
      calories: 400,
      carbs: '10g',
      protein: '32g',
      fat: '28g',
      fiber: '4g'
    },
    instructions: `
    1. Em uma panela, aqueça o azeite de dendê e refogue os pimentões, a cebola e os tomates.
    2. Adicione o frango, tempere com sal e pimenta, e cozinhe até dourar.
    3. Acrescente o leite de coco, tampe a panela e cozinhe em fogo baixo por 20 minutos.
    4. Finalize com coentro picado e sirva com arroz integral.
  `
  },
  {
    name: 'Lagarto ao Molho de Azeitona',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1kg de lagarto em peça',
      '2 dentes de alho picados',
      '1 cebola picada',
      '1 xícara (chá) de azeitonas verdes picadas',
      '2 colheres (sopa) de azeite de oliva',
      '1 xícara (chá) de água',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 450,
      carbs: '8g',
      protein: '40g',
      fat: '28g',
      fiber: '2g'
    },
    instructions: `
    1. Em uma panela de pressão, aqueça o azeite e refogue o alho e a cebola até dourarem.
    2. Adicione a carne e sele todos os lados.
    3. Acrescente as azeitonas, a água, sal e pimenta, tampe a panela e cozinhe por 40 minutos após pegar pressão.
    4. Retire a pressão, fatie a carne e sirva com o molho.
  `
  },
  {
    name: 'Medalhão ao Gengibre',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 medalhões de filé mignon',
      '1 pedaço de gengibre ralado (cerca de 2cm)',
      '2 dentes de alho picados',
      '2 colheres (sopa) de óleo de coco',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 370,
      carbs: '4g',
      protein: '32g',
      fat: '24g',
      fiber: '2g'
    },
    instructions: `
    1. Tempere os medalhões com sal, pimenta e gengibre.
    2. Em uma frigideira, aqueça o óleo de coco e sele os medalhões até o ponto desejado.
    3. Retire da frigideira e reserve.
    4. Na mesma frigideira, adicione o alho picado e refogue rapidamente.
    5. Sirva os medalhões com o alho refogado por cima.
  `
  },
  {
    name: 'Rosbife Caseiro',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1kg de lagarto em peça',
      '2 dentes de alho picados',
      '2 colheres (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto',
      'Alecrim a gosto'
    ],
    nutrition: {
      calories: 420,
      carbs: '6g',
      protein: '38g',
      fat: '26g',
      fiber: '2g'
    },
    instructions: `
    1. Tempere a carne com alho, sal, pimenta e alecrim.
    2. Aqueça o azeite em uma panela e sele a carne de todos os lados.
    3. Transfira para uma assadeira e leve ao forno pré-aquecido a 180°C por 30 minutos.
    4. Retire do forno, deixe descansar por 10 minutos antes de fatiar.
    5. Sirva fatiado, acompanhado de salada ou legumes assados.
  `
  },
  {
    name: 'Strogonoff de Carne',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de filé mignon em tiras',
      '1 cebola picada',
      '2 dentes de alho picados',
      '200ml de creme de leite light',
      '1 xícara (chá) de molho de tomate zero açúcar',
      '1 colher (sopa) de mostarda dijon',
      '2 colheres (sopa) de óleo de coco',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 390,
      carbs: '7g',
      protein: '35g',
      fat: '24g',
      fiber: '2g'
    },
    instructions: `
    1. Aqueça o óleo de coco em uma panela e refogue a cebola e o alho até dourarem.
    2. Adicione a carne e cozinhe até dourar.
    3. Acrescente o molho de tomate, a mostarda, sal e pimenta, e misture bem.
    4. Adicione o creme de leite e cozinhe por mais 5 minutos.
    5. Sirva quente, acompanhado de arroz integral ou quinoa.
  `
  },
  {
    name: 'Kafta',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de carne moída',
      '1 cebola ralada',
      '2 dentes de alho picados',
      '2 colheres (sopa) de cheiro-verde picado',
      'Sal e pimenta-do-reino a gosto',
      'Palitos de churrasco'
    ],
    nutrition: {
      calories: 340,
      carbs: '6g',
      protein: '30g',
      fat: '22g',
      fiber: '2g'
    },
    instructions: `
    1. Em um recipiente, misture todos os ingredientes até obter uma massa homogênea.
    2. Modele a carne em volta dos palitos de churrasco, formando espetinhos.
    3. Grelhe os espetinhos em uma frigideira ou churrasqueira até dourarem de todos os lados.
    4. Sirva com salada de tomates e pepinos.
  `
  },
  {
    name: 'Rocambole de Carne Moída',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de carne moída',
      '1 ovo',
      '1 cebola picada',
      '2 colheres (sopa) de molho de tomate zero açúcar',
      '2 dentes de alho triturados',
      '3 colheres (sopa) de cheiro-verde picado',
      '4 colheres (sopa) de farinha de amêndoas',
      '6 colheres (sopa) de catupiry',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 410,
      carbs: '8g',
      protein: '32g',
      fat: '28g',
      fiber: '3g'
    },
    instructions: `
    1. Em um recipiente, misture a carne moída, a cebola, o alho, o ovo levemente batido, o molho de tomate, o cheiro-verde, o sal, a pimenta e a farinha aos poucos.
    2. Preencha com a massa de carne moída o fundo e as laterais de forminhas de muffins untadas com manteiga.
    3. Coloque o catupiry no meio e finalize fechando com a massa de carne, apertando suavemente.
    4. Leve ao forno pré-aquecido a 200°C por aproximadamente 15 minutos, ou até que esteja levemente dourado.
    5. Desenforme e sirva em seguida.
  `
  },
  {
    name: 'Muffin de Carne e Catupiry',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de carne moída',
      '1 ovo',
      '1 cebola picada',
      '2 colheres (sopa) de molho de tomate zero açúcar',
      '2 dentes de alho triturados',
      '3 colheres (sopa) de cheiro-verde picado',
      '4 colheres (sopa) de farinha de amêndoas',
      '6 colheres (sopa) de catupiry',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 410,
      carbs: '8g',
      protein: '32g',
      fat: '28g',
      fiber: '3g'
    },
    instructions: `
    1. Em um recipiente, misture a carne moída, a cebola, o alho, o ovo levemente batido, o molho de tomate, o cheiro-verde, o sal, a pimenta e a farinha aos poucos.
    2. Preencha com a massa de carne moída o fundo e as laterais de forminhas de muffins untadas com manteiga.
    3. Coloque o catupiry no meio e finalize fechando com a massa de carne, apertando suavemente.
    4. Leve ao forno pré-aquecido a 200°C por aproximadamente 15 minutos, ou até que esteja levemente dourado.
    5. Desenforme e sirva em seguida.
  `
  },
  {
    name: 'Costela aos 4 Queijos',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1kg de costela de porco',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto',
      '100g de queijo mussarela ralado',
      '100g de queijo parmesão ralado',
      '100g de queijo gorgonzola esfarelado',
      '100g de queijo provolone ralado',
      '2 colheres (sopa) de óleo de coco'
    ],
    nutrition: {
      calories: 580,
      carbs: '8g',
      protein: '42g',
      fat: '42g',
      fiber: '1g'
    },
    instructions: `
    1. Tempere a costela com alho, sal e pimenta-do-reino.
    2. Em uma assadeira, coloque a costela e regue com o óleo de coco.
    3. Cubra a costela com papel alumínio e leve ao forno pré-aquecido a 180°C por 1 hora.
    4. Retire o papel alumínio e salpique os queijos sobre a costela.
    5. Volte ao forno sem o papel alumínio por mais 20 minutos ou até gratinar.
    6. Sirva quente.
  `
  },
  {
    name: 'Hambúrguer Recheado',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de carne moída',
      '1 cebola picada',
      '2 dentes de alho picados',
      '1 ovo',
      '2 colheres (sopa) de cheiro-verde picado',
      '4 colheres (sopa) de farinha de amêndoas',
      '100g de queijo mussarela em cubos',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 420,
      carbs: '6g',
      protein: '36g',
      fat: '28g',
      fiber: '2g'
    },
    instructions: `
    1. Em um recipiente, misture a carne moída, a cebola, o alho, o ovo, o cheiro-verde, a farinha de amêndoas, o sal e a pimenta.
    2. Molde a mistura de carne em hambúrgueres e coloque um cubo de queijo no centro de cada um, fechando bem.
    3. Aqueça uma frigideira antiaderente e grelhe os hambúrgueres até dourarem dos dois lados.
    4. Sirva com salada ou pão integral.
  `
  },
  {
    name: 'Bisteca de Porco Assada',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 bistecas de porco',
      '2 dentes de alho picados',
      '1 cebola picada',
      '2 colheres (sopa) de óleo de coco',
      'Sal e pimenta-do-reino a gosto',
      '1 xícara (chá) de molho de tomate zero açúcar',
      '100g de queijo mussarela ralado'
    ],
    nutrition: {
      calories: 450,
      carbs: '6g',
      protein: '40g',
      fat: '30g',
      fiber: '2g'
    },
    instructions: `
    1. Tempere as bistecas com alho, sal e pimenta-do-reino.
    2. Em uma frigideira, aqueça o óleo de coco e doure as bistecas dos dois lados.
    3. Transfira as bistecas para uma assadeira, cubra com o molho de tomate e polvilhe o queijo ralado.
    4. Leve ao forno pré-aquecido a 180°C por 25 minutos ou até gratinar.
    5. Sirva com legumes assados ou uma salada.
  `
  },
  {
    name: 'Lombo na Manteiga',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1kg de lombo de porco',
      '2 dentes de alho picados',
      '2 colheres (sopa) de manteiga',
      'Sal e pimenta-do-reino a gosto',
      'Suco de 1 limão',
      '1 ramo de alecrim'
    ],
    nutrition: {
      calories: 480,
      carbs: '5g',
      protein: '38g',
      fat: '34g',
      fiber: '1g'
    },
    instructions: `
    1. Tempere o lombo com alho, sal, pimenta-do-reino, suco de limão e alecrim.
    2. Em uma frigideira, aqueça a manteiga e sele o lombo de todos os lados.
    3. Transfira o lombo para uma assadeira e leve ao forno pré-aquecido a 180°C por 45 minutos ou até estar bem assado.
    4. Fatie o lombo e sirva com o molho formado na assadeira.
  `
  },
  {
    name: 'Lombo de Porco com Berinjela',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1kg de lombo de porco',
      '1 berinjela média cortada em cubos',
      '2 dentes de alho picados',
      '1 cebola picada',
      '2 colheres (sopa) de óleo de coco',
      'Sal e pimenta-do-reino a gosto',
      '1 xícara (chá) de molho de tomate zero açúcar'
    ],
    nutrition: {
      calories: 440,
      carbs: '9g',
      protein: '36g',
      fat: '28g',
      fiber: '4g'
    },
    instructions: `
    1. Tempere o lombo com alho, sal e pimenta-do-reino.
    2. Em uma frigideira, aqueça o óleo de coco e doure o lombo de todos os lados.
    3. Adicione a cebola e a berinjela à frigideira e refogue até a berinjela amolecer.
    4. Transfira tudo para uma assadeira, cubra com o molho de tomate e leve ao forno pré-aquecido a 180°C por 30 minutos.
    5. Sirva quente.
  `
  },
  {
    name: 'Bisteca à Pizzaiolo',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 bistecas de porco',
      '2 dentes de alho picados',
      '1 cebola picada',
      '2 colheres (sopa) de óleo de coco',
      '1 xícara (chá) de molho de tomate zero açúcar',
      '100g de queijo mussarela ralado',
      'Orégano a gosto',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 460,
      carbs: '6g',
      protein: '40g',
      fat: '32g',
      fiber: '2g'
    },
    instructions: `
     1. Tempere as bistecas com alho, sal e pimenta-do-reino.
     2. Em uma frigideira, aqueça o óleo de coco e doure as bistecas dos dois lados.
     3. Transfira as bistecas para uma assadeira, cubra com o molho de tomate, polvilhe o queijo ralado e o orégano.
     4. Leve ao forno pré-aquecido a 180°C por 25 minutos ou até gratinar.
     5. Sirva com salada verde ou legumes assados.
  `
  },
  {
    name: 'Lombo de Porco Recheado',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1kg de lombo de porco',
      '100g de queijo mussarela ralado',
      '100g de presunto picado',
      '2 dentes de alho picados',
      '1 cebola picada',
      '2 colheres (sopa) de óleo de coco',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 460,
      carbs: '7g',
      protein: '42g',
      fat: '28g',
      fiber: '1g'
    },
    instructions: `
    1. Abra o lombo em um grande bife e tempere com alho, sal e pimenta-do-reino.
    2. Espalhe o queijo e o presunto sobre o lombo e enrole como um rocambole, amarrando com barbante.
    3. Em uma frigideira, aqueça o óleo de coco e doure o lombo de todos os lados.
    4. Transfira para uma assadeira e leve ao forno pré-aquecido a 180°C por 45 minutos ou até estar bem assado.
    5. Fatie e sirva com salada ou purê de legumes.
  `
  },
  {
    name: 'Cordeiro com Ervas',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1kg de pernil de cordeiro',
      '2 dentes de alho picados',
      '1 ramo de alecrim',
      '1 ramo de tomilho',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 450,
      carbs: '5g',
      protein: '38g',
      fat: '32g',
      fiber: '1g'
    },
    instructions: `
    1. Tempere o pernil com alho, sal, pimenta-do-reino, alecrim e tomilho.
    2. Em uma assadeira, regue o pernil com azeite e cubra com papel alumínio.
    3. Leve ao forno pré-aquecido a 180°C por 2 horas.
    4. Retire o papel alumínio e deixe dourar por mais 30 minutos.
    5. Fatie e sirva com legumes assados.
  `
  },
  {
    name: 'Bife de Fígado Acebolado',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de fígado de boi em bifes',
      '1 cebola grande cortada em rodelas finas',
      '2 dentes de alho picados',
      '2 colheres (sopa) de óleo de coco',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 300,
      carbs: '7g',
      protein: '30g',
      fat: '18g',
      fiber: '2g'
    },
    instructions: `
    1. Tempere os bifes de fígado com sal, pimenta-do-reino e alho, e deixe marinar por 10 minutos.
    2. Em uma frigideira, aqueça o óleo de coco e frite os bifes até dourarem.
    3. Retire os bifes e reserve.
    4. Na mesma frigideira, frite as cebolas até dourarem.
    5. Sirva os bifes cobertos com as cebolas.
  `
  },
  {
    name: 'Carne Seca Acebolada',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de carne seca dessalgada e desfiada',
      '2 cebolas grandes cortadas em rodelas finas',
      '2 dentes de alho picados',
      '2 colheres (sopa) de óleo de coco',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 320,
      carbs: '8g',
      protein: '32g',
      fat: '18g',
      fiber: '2g'
    },
    instructions: `
    1. Em uma frigideira, aqueça o óleo de coco e frite o alho até dourar.
    2. Adicione a carne seca e refogue até aquecer bem.
    3. Retire a carne e reserve.
    4. Na mesma frigideira, frite as cebolas até dourarem.
    5. Misture a carne com as cebolas e sirva.
  `
  },
  {
    name: 'Iscas de Peixe',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de filé de peixe cortado em tiras',
      'Suco de 1 limão',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de farinha de linhaça',
      '2 colheres (sopa) de óleo de coco'
    ],
    nutrition: {
      calories: 280,
      carbs: '6g',
      protein: '30g',
      fat: '14g',
      fiber: '3g'
    },
    instructions: `
    1. Tempere as tiras de peixe com suco de limão, alho, sal e pimenta-do-reino.
    2. Passe as tiras na farinha de linhaça.
    3. Em uma frigideira, aqueça o óleo de coco e frite as tiras de peixe até dourarem.
    4. Sirva com salada ou arroz integral.
  `
  },
  {
    name: 'Cação ao Molho Verde',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de cação em postas',
      '1 xícara (chá) de molho verde (coentro, cebolinha e salsinha batidos com azeite e limão)',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de óleo de coco'
    ],
    nutrition: {
      calories: 350,
      carbs: '4g',
      protein: '34g',
      fat: '22g',
      fiber: '2g'
    },
    instructions: `
    1. Tempere as postas de cação com alho, sal e pimenta-do-reino.
    2. Em uma frigideira, aqueça o óleo de coco e doure as postas de cação dos dois lados.
    3. Acrescente o molho verde e deixe cozinhar por mais 5 minutos.
    4. Sirva com legumes assados ou arroz integral.
  `
  },
  {
    name: 'Bisteca de Porco',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 bistecas de porco',
      '2 dentes de alho picados',
      '1 cebola picada',
      '2 colheres (sopa) de óleo de coco',
      'Sal e pimenta-do-reino a gosto',
      '1 xícara (chá) de molho de tomate zero açúcar'
    ],
    nutrition: {
      calories: 420,
      carbs: '6g',
      protein: '38g',
      fat: '28g',
      fiber: '2g'
    },
    instructions: `
    1. Tempere as bistecas com alho, sal e pimenta-do-reino.
    2. Em uma frigideira, aqueça o óleo de coco e doure as bistecas dos dois lados.
    3. Adicione a cebola e refogue até dourar.
    4. Acrescente o molho de tomate e cozinhe por mais 10 minutos.
    5. Sirva com salada ou arroz integral.
  `
  },
  {
    name: 'Picanha ao Molho Gorgonzola',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 peça de picanha (aproximadamente 1kg)',
      '200g de queijo gorgonzola esfarelado',
      '200ml de creme de leite light',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de óleo de coco'
    ],
    nutrition: {
      calories: 520,
      carbs: '6g',
      protein: '42g',
      fat: '38g',
      fiber: '2g'
    },
    instructions: `
    1. Tempere a picanha com sal, pimenta-do-reino e alho.
    2. Em uma frigideira grande, aqueça o óleo de coco e sele a picanha de todos os lados.
    3. Transfira a picanha para uma assadeira e leve ao forno pré-aquecido a 180°C por 30 minutos.
    4. Em uma panela, derreta o queijo gorgonzola com o creme de leite em fogo baixo.
    5. Sirva a picanha fatiada com o molho gorgonzola por cima.
  `
  },
  {
    name: 'Peixe Recheado',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 peixe inteiro limpo (aproximadamente 1kg)',
      '2 dentes de alho picados',
      '1 limão',
      '1 cebola picada',
      '1 tomate picado',
      '1 cenoura ralada',
      '100g de queijo cottage',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 380,
      carbs: '7g',
      protein: '40g',
      fat: '20g',
      fiber: '2g'
    },
    instructions: `
    1. Tempere o peixe com alho, sal, pimenta-do-reino e suco de limão.
    2. Em uma tigela, misture a cebola, tomate, cenoura e queijo cottage.
    3. Recheie o peixe com a mistura de vegetais e queijo.
    4. Coloque o peixe em uma assadeira, regue com azeite de oliva e cubra com papel alumínio.
    5. Leve ao forno pré-aquecido a 180°C por 40 minutos.
    6. Retire o papel alumínio e deixe dourar por mais 10 minutos.
    7. Sirva com arroz integral ou quinoa.
  `
  },
  {
    name: 'Atum com Gergelim',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 filés de atum (aproximadamente 200g cada)',
      '2 colheres (sopa) de gergelim branco',
      '2 colheres (sopa) de gergelim preto',
      '2 colheres (sopa) de óleo de coco',
      'Sal e pimenta-do-reino a gosto',
      'Molho shoyu para servir'
    ],
    nutrition: {
      calories: 300,
      carbs: '4g',
      protein: '34g',
      fat: '16g',
      fiber: '2g'
    },
    instructions: `
    1. Tempere os filés de atum com sal e pimenta-do-reino.
    2. Passe os filés na mistura de gergelim branco e preto.
    3. Em uma frigideira, aqueça o óleo de coco e sele os filés de atum por 1 minuto de cada lado.
    4. Sirva os filés com molho shoyu.
  `
  },
  {
    name: 'Cação com Mostarda',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de cação em postas',
      '2 colheres (sopa) de mostarda dijon',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de óleo de coco',
      'Suco de 1 limão'
    ],
    nutrition: {
      calories: 350,
      carbs: '5g',
      protein: '34g',
      fat: '22g',
      fiber: '2g'
    },
    instructions: `
    1. Tempere as postas de cação com alho, sal, pimenta-do-reino, mostarda e suco de limão.
    2. Em uma frigideira, aqueça o óleo de coco e doure as postas de cação dos dois lados.
    3. Sirva com salada verde ou legumes assados.
  `
  },
  {
    name: 'Robalo Grelhado',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 filés de robalo',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto',
      'Suco de 1 limão',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 320,
      carbs: '4g',
      protein: '32g',
      fat: '18g',
      fiber: '1g'
    },
    instructions: `
    1. Tempere os filés de robalo com alho, sal, pimenta-do-reino e suco de limão.
    2. Em uma frigideira, aqueça o azeite de oliva e grelhe os filés de robalo até dourarem dos dois lados.
    3. Sirva com salada ou arroz integral.
  `
  },
  {
    name: 'Peixe ao Vinagrete',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de filé de peixe (tilápia, linguado ou outro de sua preferência)',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto',
      'Suco de 1 limão',
      '1 tomate picado',
      '1 cebola picada',
      '1 pimentão verde picado',
      '2 colheres (sopa) de azeite de oliva',
      '2 colheres (sopa) de vinagre de maçã'
    ],
    nutrition: {
      calories: 290,
      carbs: '6g',
      protein: '30g',
      fat: '16g',
      fiber: '2g'
    },
    instructions: `
    1. Tempere os filés de peixe com alho, sal, pimenta-do-reino e suco de limão.
    2. Em uma frigideira, aqueça o azeite de oliva e grelhe os filés de peixe até dourarem dos dois lados.
    3. Em uma tigela, misture o tomate, a cebola, o pimentão e o vinagre de maçã.
    4. Sirva os filés de peixe cobertos com o vinagrete.
  `
  },
  {
    name: 'Peixe Assado com Creme de Espinafre',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de filé de peixe (tilápia, linguado ou outro de sua preferência)',
      '1 maço de espinafre',
      '1 dente de alho picado',
      '2 colheres (sopa) de óleo de coco',
      '200ml de creme de leite light',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 340,
      carbs: '7g',
      protein: '32g',
      fat: '20g',
      fiber: '3g'
    },
    instructions: `
    1. Tempere os filés de peixe com sal e pimenta-do-reino.
    2. Em uma frigideira, aqueça o óleo de coco e grelhe os filés de peixe até dourarem dos dois lados. Reserve.
    3. Na mesma frigideira, refogue o alho e o espinafre até murchar.
    4. Adicione o creme de leite, sal e pimenta, misture bem e cozinhe por mais 2 minutos.
    5. Coloque os filés de peixe em uma assadeira, cubra com o creme de espinafre e leve ao forno pré-aquecido a 180°C por 10 minutos.
    6. Sirva quente.
  `
  },
  {
    name: 'Filé de Atum Assado',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 filés de atum (aproximadamente 200g cada)',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto',
      'Suco de 1 limão',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 290,
      carbs: '4g',
      protein: '34g',
      fat: '14g',
      fiber: '1g'
    },
    instructions: `
    1. Tempere os filés de atum com alho, sal, pimenta-do-reino e suco de limão.
    2. Coloque os filés em uma assadeira e regue com azeite de oliva.
    3. Leve ao forno pré-aquecido a 180°C por 15 minutos.
    4. Sirva com salada ou legumes assados.
  `
  },
  {
    name: 'Camarão na Mostarda',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de camarão limpo',
      '2 colheres (sopa) de mostarda dijon',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de óleo de coco'
    ],
    nutrition: {
      calories: 320,
      carbs: '5g',
      protein: '34g',
      fat: '18g',
      fiber: '1g'
    },
    instructions: `
    1. Tempere os camarões com alho, sal, pimenta-do-reino e mostarda.
    2. Em uma frigideira, aqueça o óleo de coco e refogue os camarões até dourarem.
    3. Sirva com arroz integral ou quinoa.
  `
  },
  {
    name: 'Refogadinho de Atum',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 latas de atum em água',
      '1 cebola picada',
      '2 dentes de alho picados',
      '2 colheres (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto',
      '1 tomate picado',
      '1 cenoura ralada'
    ],
    nutrition: {
      calories: 240,
      carbs: '8g',
      protein: '28g',
      fat: '10g',
      fiber: '3g'
    },
    instructions: `
    1. Em uma frigideira, aqueça o azeite e refogue a cebola e o alho até dourarem.
    2. Adicione o atum, o tomate e a cenoura, tempere com sal e pimenta e refogue por mais 5 minutos.
    3. Sirva com salada verde ou pão integral.
  `
  },
  {
    name: 'Rolinhos de Salmão Recheados',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 filés de salmão',
      '100g de queijo cottage',
      '1 cenoura ralada',
      '1 pepino cortado em tiras finas',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 330,
      carbs: '6g',
      protein: '36g',
      fat: '18g',
      fiber: '2g'
    },
    instructions: `
    1. Tempere os filés de salmão com sal e pimenta-do-reino.
    2. Recheie os filés com queijo cottage, cenoura e pepino, enrolando como rocambole e prendendo com palitos.
    3. Em uma frigideira, aqueça o azeite de oliva e sele os rolinhos de salmão até dourarem.
    4. Sirva com salada verde ou arroz integral.
  `
  },
  {
    name: 'Moqueca de Peixe Low Carb',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de filé de peixe (tilápia, linguado ou outro de sua preferência)',
      '1 pimentão vermelho em tiras',
      '1 pimentão verde em tiras',
      '1 cebola em rodelas',
      '2 tomates em rodelas',
      '200ml de leite de coco',
      '2 colheres (sopa) de azeite de dendê',
      'Sal e pimenta-do-reino a gosto',
      'Coentro picado a gosto'
    ],
    nutrition: {
      calories: 370,
      carbs: '10g',
      protein: '36g',
      fat: '20g',
      fiber: '3g'
    },
    instructions: `
    1. Em uma panela, aqueça o azeite de dendê e refogue os pimentões, a cebola e os tomates.
    2. Adicione o peixe, tempere com sal e pimenta, e cozinhe até dourar.
    3. Acrescente o leite de coco, tampe a panela e cozinhe em fogo baixo por 20 minutos.
    4. Finalize com coentro picado e sirva com arroz integral.
  `
  },
  {
    name: 'Salmão ao Requeijão',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 filés de salmão (aproximadamente 200g cada)',
      '100g de requeijão light',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto',
      'Suco de 1 limão',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 360,
      carbs: '4g',
      protein: '34g',
      fat: '20g',
      fiber: '1g'
    },
    instructions: `
    1. Tempere os filés de salmão com alho, sal, pimenta-do-reino e suco de limão.
    2. Em uma frigideira, aqueça o azeite de oliva e grelhe os filés de salmão até dourarem dos dois lados.
    3. Espalhe o requeijão sobre os filés e leve ao forno pré-aquecido a 180°C por 10 minutos.
    4. Sirva com salada ou legumes assados.
  `
  },
  {
    name: 'Tainha Assada',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 tainha inteira limpa (aproximadamente 1kg)',
      '2 dentes de alho picados',
      '1 limão',
      '1 cebola picada',
      '1 tomate picado',
      '1 cenoura ralada',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 380,
      carbs: '8g',
      protein: '36g',
      fat: '20g',
      fiber: '2g'
    },
    instructions: `
    1. Tempere a tainha com alho, sal, pimenta-do-reino e suco de limão.
    2. Em uma tigela, misture a cebola, tomate e cenoura.
    3. Recheie a tainha com a mistura de vegetais.
    4. Coloque a tainha em uma assadeira, regue com azeite de oliva e cubra com papel alumínio.
    5. Leve ao forno pré-aquecido a 180°C por 40 minutos.
    6. Retire o papel alumínio e deixe dourar por mais 10 minutos.
    7. Sirva com arroz integral ou quinoa.
  `
  },
  {
    name: 'Ceviche',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de filé de peixe branco (tilápia, linguado ou outro de sua preferência) cortado em cubos',
      'Suco de 4 limões',
      '1 cebola roxa fatiada',
      '1 pimentão vermelho picado',
      '1 pimentão amarelo picado',
      '1 tomate picado',
      'Coentro picado a gosto',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 220,
      carbs: '12g',
      protein: '28g',
      fat: '6g',
      fiber: '3g'
    },
    instructions: `
    1. Em uma tigela, misture o peixe, suco de limão, cebola, pimentões, tomate e coentro.
    2. Tempere com sal e pimenta-do-reino.
    3. Deixe marinar na geladeira por 30 minutos.
    4. Sirva frio.
  `
  },
  {
    name: 'Peixe com Leite de Coco',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de filé de peixe (tilápia, linguado ou outro de sua preferência)',
      '200ml de leite de coco',
      '2 dentes de alho picados',
      '1 cebola picada',
      '1 pimentão verde picado',
      '2 tomates picados',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 350,
      carbs: '10g',
      protein: '34g',
      fat: '20g',
      fiber: '3g'
    },
    instructions: `
    1. Tempere os filés de peixe com sal e pimenta-do-reino.
    2. Em uma frigideira, aqueça o azeite de oliva e refogue o alho e a cebola até dourarem.
    3. Adicione o pimentão e os tomates e refogue por mais 5 minutos.
    4. Acrescente o leite de coco e misture bem.
    5. Coloque os filés de peixe na frigideira e cozinhe em fogo baixo por 10 minutos.
    6. Sirva com arroz integral ou quinoa.
  `
  },
  {
    name: 'Salmão ao Molho de Maracujá',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 filés de salmão (aproximadamente 200g cada)',
      'Polpa de 2 maracujás',
      '2 colheres (sopa) de mel',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 370,
      carbs: '12g',
      protein: '34g',
      fat: '20g',
      fiber: '3g'
    },
    instructions: `
    1. Tempere os filés de salmão com alho, sal e pimenta-do-reino.
    2. Em uma frigideira, aqueça o azeite de oliva e grelhe os filés de salmão até dourarem dos dois lados. Reserve.
    3. Na mesma frigideira, adicione a polpa de maracujá e o mel, misture bem e cozinhe por 5 minutos.
    4. Sirva o salmão com o molho de maracujá por cima.
  `
  },
  {
    name: 'Bacalhau Fresco com Açafrão',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de bacalhau fresco em postas',
      '1 cebola picada',
      '2 dentes de alho picados',
      '1 pimentão vermelho picado',
      '1 tomate picado',
      '200ml de leite de coco',
      '1 colher (chá) de açafrão',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 360,
      carbs: '8g',
      protein: '36g',
      fat: '20g',
      fiber: '3g'
    },
    instructions: `
    1. Tempere as postas de bacalhau com sal e pimenta-do-reino.
    2. Em uma frigideira, aqueça o azeite de oliva e refogue a cebola, o alho, o pimentão e o tomate até dourarem.
    3. Adicione o leite de coco e o açafrão, misture bem e cozinhe por 5 minutos.
    4. Coloque as postas de bacalhau na frigideira e cozinhe em fogo baixo por 10 minutos.
    5. Sirva com arroz integral ou quinoa.
  `
  },
  {
    name: 'Lula Recheada',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de lulas limpas',
      '100g de queijo cottage',
      '1 cenoura ralada',
      '1 pimentão vermelho picado',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 290,
      carbs: '7g',
      protein: '30g',
      fat: '14g',
      fiber: '2g'
    },
    instructions: `
    1. Em uma tigela, misture o queijo cottage, a cenoura e o pimentão.
    2. Recheie as lulas com a mistura e feche com palitos.
    3. Em uma frigideira, aqueça o azeite de oliva e refogue o alho até dourar.
    4. Adicione as lulas recheadas e cozinhe até dourarem de todos os lados.
    5. Sirva com arroz integral ou salada verde.
  `
  },
  {
    name: 'Camarão ao Catupiry',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de camarão limpo',
      '200g de catupiry',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 330,
      carbs: '6g',
      protein: '32g',
      fat: '18g',
      fiber: '1g'
    },
    instructions: `
    1. Tempere os camarões com alho, sal e pimenta-do-reino.
    2. Em uma frigideira, aqueça o azeite de oliva e refogue os camarões até dourarem.
    3. Acrescente o catupiry e misture até derreter e formar um molho.
    4. Sirva com arroz integral ou quinoa.
  `
  },
  {
    name: 'Espetinho de Camarão',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de camarão limpo',
      'Suco de 1 limão',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva',
      'Palitos de churrasco'
    ],
    nutrition: {
      calories: 280,
      carbs: '4g',
      protein: '30g',
      fat: '16g',
      fiber: '1g'
    },
    instructions: `
    1. Tempere os camarões com suco de limão, alho, sal e pimenta-do-reino.
    2. Espete os camarões nos palitos de churrasco.
    3. Em uma frigideira, aqueça o azeite de oliva e grelhe os espetinhos até dourarem.
    4. Sirva com salada verde ou arroz integral.
  `
  },
  {
    name: 'Mexilhão ao Vinagrete',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de mexilhão limpo',
      '1 cebola picada',
      '1 tomate picado',
      '1 pimentão verde picado',
      '2 colheres (sopa) de vinagre de maçã',
      '2 colheres (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 250,
      carbs: '8g',
      protein: '28g',
      fat: '10g',
      fiber: '2g'
    },
    instructions: `
    1. Em uma tigela, misture a cebola, o tomate, o pimentão, o vinagre e o azeite.
    2. Tempere com sal e pimenta-do-reino.
    3. Adicione os mexilhões e misture bem.
    4. Deixe marinar na geladeira por 30 minutos.
    5. Sirva frio.
  `
  },
  {
    name: 'Wrap de Alface Recheado com Frango',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '8 folhas de alface grandes',
      '500g de peito de frango cozido e desfiado',
      '1 cenoura ralada',
      '1 pepino cortado em tiras finas',
      '2 colheres (sopa) de molho de iogurte light',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 200,
      carbs: '8g',
      protein: '26g',
      fat: '8g',
      fiber: '3g'
    },
    instructions: `
    1. Em uma tigela, misture o frango desfiado, a cenoura, o pepino, o molho de iogurte, o sal e a pimenta.
    2. Coloque a mistura de frango no centro de cada folha de alface.
    3. Enrole as folhas de alface como um wrap.
    4. Sirva frio.
  `
  },
  {
    name: 'Berinjela Recheada com Frango',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 berinjelas médias cortadas ao meio',
      '500g de peito de frango cozido e desfiado',
      '1 cebola picada',
      '2 dentes de alho picados',
      '2 colheres (sopa) de azeite de oliva',
      '100g de queijo mussarela ralado',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 320,
      carbs: '10g',
      protein: '34g',
      fat: '16g',
      fiber: '4g'
    },
    instructions: `
    1. Retire o miolo das berinjelas e reserve.
    2. Em uma frigideira, aqueça o azeite de oliva e refogue a cebola e o alho até dourarem.
    3. Adicione o frango desfiado e o miolo das berinjelas picado, tempere com sal e pimenta e refogue por mais 5 minutos.
    4. Recheie as berinjelas com a mistura de frango e cubra com o queijo ralado.
    5. Coloque as berinjelas em uma assadeira e leve ao forno pré-aquecido a 180°C por 30 minutos.
    6. Sirva quente.
  `
  },
  {
    name: 'Macarrão de Abobrinha',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 abobrinhas médias',
      '2 dentes de alho picados',
      '2 colheres (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto',
      '1 xícara (chá) de molho de tomate zero açúcar'
    ],
    nutrition: {
      calories: 180,
      carbs: '10g',
      protein: '6g',
      fat: '12g',
      fiber: '4g'
    },
    instructions: `
    1. Corte as abobrinhas em tiras finas, como macarrão.
    2. Em uma frigideira, aqueça o azeite de oliva e refogue o alho até dourar.
    3. Adicione as tiras de abobrinha, tempere com sal e pimenta e refogue por 2 minutos.
    4. Acrescente o molho de tomate e misture bem.
    5. Sirva quente.
  `
  },
  {
    name: 'Acelga Recheada com Ricota',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '8 folhas de acelga',
      '200g de ricota amassada',
      '1 cenoura ralada',
      '1 pimentão vermelho picado',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 240,
      carbs: '8g',
      protein: '12g',
      fat: '18g',
      fiber: '4g'
    },
    instructions: `
    1. Em uma tigela, misture a ricota, a cenoura, o pimentão, o sal e a pimenta.
    2. Coloque a mistura de ricota no centro de cada folha de acelga.
    3. Enrole as folhas de acelga como um wrap.
    4. Em uma frigideira, aqueça o azeite de oliva e grelhe os rolinhos de acelga até dourarem.
    5. Sirva quente ou frio.
  `
  },
  {
    name: 'Lasanha de Berinjela',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 berinjelas médias cortadas em fatias finas',
      '500g de carne moída',
      '1 cebola picada',
      '2 dentes de alho picados',
      '2 xícaras (chá) de molho de tomate zero açúcar',
      '200g de queijo mussarela ralado',
      '2 colheres (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 380,
      carbs: '12g',
      protein: '38g',
      fat: '20g',
      fiber: '6g'
    },
    instructions: `
    1. Em uma frigideira, aqueça o azeite de oliva e refogue a cebola e o alho até dourarem.
    2. Adicione a carne moída, tempere com sal e pimenta e cozinhe até dourar.
    3. Acrescente o molho de tomate e cozinhe por mais 10 minutos.
    4. Em uma assadeira, monte a lasanha alternando camadas de berinjela, molho de carne e queijo ralado.
    5. Leve ao forno pré-aquecido a 180°C por 30 minutos ou até gratinar.
    6. Sirva quente.
  `
  },
  {
    name: 'Arroz de Couve-Flor',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 couve-flor média',
      '1 cebola picada',
      '2 dentes de alho picados',
      '2 colheres (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 100,
      carbs: '10g',
      protein: '4g',
      fat: '6g',
      fiber: '4g'
    },
    instructions: `
    1. Separe a couve-flor em floretes e processe até obter a textura de arroz.
    2. Em uma frigideira, aqueça o azeite de oliva e refogue a cebola e o alho até dourarem.
    3. Adicione a couve-flor, tempere com sal e pimenta e refogue por 5 minutos.
    4. Sirva quente.
  `
  },
  {
    name: 'Lasanha de Abobrinha',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 abobrinhas médias cortadas em fatias finas',
      '500g de carne moída',
      '1 cebola picada',
      '2 dentes de alho picados',
      '2 xícaras (chá) de molho de tomate zero açúcar',
      '200g de queijo mussarela ralado',
      '2 colheres (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 360,
      carbs: '10g',
      protein: '38g',
      fat: '20g',
      fiber: '6g'
    },
    instructions: `
    1. Em uma frigideira, aqueça o azeite de oliva e refogue a cebola e o alho até dourarem.
    2. Adicione a carne moída, tempere com sal e pimenta e cozinhe até dourar.
    3. Acrescente o molho de tomate e cozinhe por mais 10 minutos.
    4. Em uma assadeira, monte a lasanha alternando camadas de abobrinha, molho de carne e queijo ralado.
    5. Leve ao forno pré-aquecido a 180°C por 30 minutos ou até gratinar.
    6. Sirva quente.
  `
  },
  {
    name: 'Antepasto de Berinjela',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 berinjelas médias cortadas em cubos',
      '1 pimentão vermelho picado',
      '1 pimentão amarelo picado',
      '1 cebola picada',
      '2 dentes de alho picados',
      '2 colheres (sopa) de azeite de oliva',
      '1/2 xícara (chá) de vinagre de maçã',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 150,
      carbs: '18g',
      protein: '3g',
      fat: '8g',
      fiber: '6g'
    },
    instructions: `
    1. Em uma assadeira, misture todos os ingredientes e tempere com sal e pimenta.
    2. Leve ao forno pré-aquecido a 180°C por 40 minutos, mexendo ocasionalmente.
    3. Sirva quente ou frio com torradas ou pão integral.
  `
  },
  {
    name: 'Purê de Couve-Flor',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 couve-flor média',
      '2 dentes de alho picados',
      '1/2 xícara (chá) de creme de leite light',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 100,
      carbs: '10g',
      protein: '4g',
      fat: '6g',
      fiber: '4g'
    },
    instructions: `
    1. Cozinhe a couve-flor em água fervente até ficar macia. Escorra.
    2. Em uma frigideira, aqueça o azeite de oliva e refogue o alho até dourar.
    3. No processador, bata a couve-flor com o alho refogado e o creme de leite até obter um purê.
    4. Tempere com sal e pimenta e sirva quente.
  `
  },
  {
    name: 'Cebola Caramelizada',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 cebolas grandes fatiadas',
      '2 colheres (sopa) de azeite de oliva',
      '2 colheres (sopa) de adoçante culinário',
      '1 colher (sopa) de vinagre balsâmico',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 80,
      carbs: '14g',
      protein: '1g',
      fat: '3g',
      fiber: '3g'
    },
    instructions: `
    1. Em uma frigideira, aqueça o azeite de oliva e refogue as cebolas até começarem a dourar.
    2. Adicione o adoçante e o vinagre balsâmico, misture bem e cozinhe em fogo baixo até caramelizar.
    3. Tempere com sal e pimenta e sirva quente ou frio.
  `
  },
  {
    name: 'Cebola Recheada',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 cebolas grandes',
      '200g de carne moída',
      '1 dente de alho picado',
      '1 cenoura ralada',
      '1/2 xícara (chá) de queijo cottage',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 210,
      carbs: '12g',
      protein: '14g',
      fat: '12g',
      fiber: '3g'
    },
    instructions: `
    1. Corte a parte superior das cebolas e retire o miolo, deixando uma cavidade para o recheio.
    2. Em uma frigideira, aqueça o azeite de oliva e refogue o alho até dourar.
    3. Adicione a carne moída, tempere com sal e pimenta e cozinhe até dourar.
    4. Acrescente a cenoura e o queijo cottage, misture bem e cozinhe por mais 2 minutos.
    5. Recheie as cebolas com a mistura de carne e coloque em uma assadeira.
    6. Leve ao forno pré-aquecido a 180°C por 30 minutos.
    7. Sirva quente.
  `
  },
  {
    name: 'Alcachofra Recheada',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 alcachofras médias',
      '1 xícara (chá) de queijo cottage',
      '1 cenoura ralada',
      '1 pimentão vermelho picado',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 160,
      carbs: '14g',
      protein: '10g',
      fat: '7g',
      fiber: '7g'
    },
    instructions: `
    1. Retire as folhas externas e o miolo das alcachofras, deixando uma cavidade para o recheio.
    2. Em uma tigela, misture o queijo cottage, a cenoura, o pimentão, o alho, o sal e a pimenta.
    3. Recheie as alcachofras com a mistura de queijo e coloque em uma assadeira.
    4. Regue com azeite de oliva e cubra com papel alumínio.
    5. Leve ao forno pré-aquecido a 180°C por 40 minutos.
    6. Retire o papel alumínio e deixe dourar por mais 10 minutos.
    7. Sirva quente.
  `
  },
  {
    name: 'Panqueca de Abobrinha',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 abobrinhas médias raladas',
      '2 ovos',
      '1/2 xícara (chá) de farinha de amêndoas',
      '1 dente de alho picado',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 220,
      carbs: '8g',
      protein: '10g',
      fat: '18g',
      fiber: '4g'
    },
    instructions: `
    1. Em uma tigela, misture a abobrinha ralada, os ovos, a farinha de amêndoas, o alho, o sal e a pimenta.
    2. Aqueça o azeite de oliva em uma frigideira e coloque pequenas porções da massa de abobrinha.
    3. Frite as panquecas até dourarem dos dois lados.
    4. Sirva quente.
  `
  },
  {
    name: 'Farofa Low Carb',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 xícara (chá) de farinha de amêndoas',
      '1 cebola picada',
      '2 dentes de alho picados',
      '2 colheres (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto',
      'Cheiro-verde picado a gosto'
    ],
    nutrition: {
      calories: 190,
      carbs: '6g',
      protein: '6g',
      fat: '16g',
      fiber: '4g'
    },
    instructions: `
    1. Em uma frigideira, aqueça o azeite de oliva e refogue a cebola e o alho até dourarem.
    2. Adicione a farinha de amêndoas, tempere com sal e pimenta e misture bem.
    3. Cozinhe em fogo baixo por 5 minutos, mexendo sempre.
    4. Acrescente o cheiro-verde e sirva quente.
  `
  },
  {
    name: 'Farofa de Brócolis',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 maço de brócolis picado',
      '1 cebola picada',
      '2 dentes de alho picados',
      '2 colheres (sopa) de azeite de oliva',
      '1/2 xícara (chá) de farinha de amêndoas',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 160,
      carbs: '8g',
      protein: '8g',
      fat: '12g',
      fiber: '5g'
    },
    instructions: `
    1. Em uma frigideira, aqueça o azeite de oliva e refogue a cebola e o alho até dourarem.
    2. Adicione o brócolis picado, tempere com sal e pimenta e refogue por 5 minutos.
    3. Acrescente a farinha de amêndoas e misture bem.
    4. Cozinhe em fogo baixo por mais 5 minutos, mexendo sempre.
    5. Sirva quente.
  `
  },
  {
    name: 'Abóbora Recheada com Carne Seca',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 abóbora japonesa pequena',
      '200g de carne seca dessalgada e desfiada',
      '1 cebola picada',
      '2 dentes de alho picados',
      '2 colheres (sopa) de azeite de oliva',
      '1/2 xícara (chá) de queijo cottage',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 260,
      carbs: '18g',
      protein: '20g',
      fat: '12g',
      fiber: '6g'
    },
    instructions: `
    1. Corte a parte superior da abóbora e retire as sementes.
    2. Cozinhe a abóbora em água fervente por 10 minutos. Escorra e reserve.
    3. Em uma frigideira, aqueça o azeite de oliva e refogue a cebola e o alho até dourarem.
    4. Adicione a carne seca, tempere com sal e pimenta e refogue por mais 5 minutos.
    5. Acrescente o queijo cottage e misture bem.
    6. Recheie a abóbora com a mistura de carne seca e coloque em uma assadeira.
    7. Leve ao forno pré-aquecido a 180°C por 30 minutos.
    8. Sirva quente.
  `
  },
  {
    name: 'Purê de Abóbora com Gengibre',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de abóbora descascada e cortada em cubos',
      '1 pedaço de gengibre ralado (cerca de 2cm)',
      '2 colheres (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 130,
      carbs: '24g',
      protein: '2g',
      fat: '6g',
      fiber: '5g'
    },
    instructions: `
    1. Cozinhe a abóbora em água fervente até ficar macia. Escorra.
    2. Em uma panela, aqueça o azeite de oliva e refogue o gengibre ralado por 2 minutos.
    3. Adicione a abóbora, tempere com sal e pimenta e amasse até obter um purê.
    4. Sirva quente.
  `
  },
  {
    name: 'Cogumelos Recheados',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '200g de cogumelos grandes',
      '100g de queijo cottage',
      '1 cenoura ralada',
      '1 dente de alho picado',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 140,
      carbs: '10g',
      protein: '7g',
      fat: '8g',
      fiber: '4g'
    },
    instructions: `
    1. Retire os talos dos cogumelos e reserve.
    2. Em uma tigela, misture o queijo cottage, a cenoura, o alho, o sal e a pimenta.
    3. Recheie os cogumelos com a mistura de queijo.
    4. Em uma frigideira, aqueça o azeite de oliva e doure os cogumelos recheados.
    5. Sirva quente.
  `
  },
  {
    name: 'Pepino Recheado com Atum',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 pepinos médios cortados ao meio e sem sementes',
      '2 latas de atum em água',
      '1 cenoura ralada',
      '1 colher (sopa) de maionese light',
      'Sal e pimenta-do-reino a gosto',
      '1 colher (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 120,
      carbs: '6g',
      protein: '14g',
      fat: '4g',
      fiber: '3g'
    },
    instructions: `
    1. Em uma tigela, misture o atum, a cenoura, a maionese, o sal e a pimenta.
    2. Recheie os pepinos com a mistura de atum.
    3. Em uma frigideira, aqueça o azeite de oliva e grelhe os pepinos recheados rapidamente.
    4. Sirva quente ou frio.
  `
  },
  {
    name: 'Enroladinho de Couve com Atum',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '8 folhas de couve',
      '2 latas de atum em água, escorridas',
      '1 cenoura ralada',
      '1 cebola pequena picada',
      '2 colheres (sopa) de maionese light',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 150,
      carbs: '10g',
      protein: '15g',
      fat: '6g',
      fiber: '3g'
    },
    instructions: `
    1. Cozinhe as folhas de couve em água fervente por 1 minuto. Escorra e reserve.
    2. Em uma tigela, misture o atum, a cenoura, a cebola e a maionese. Tempere com sal e pimenta.
    3. Coloque uma porção do recheio no centro de cada folha de couve e enrole como um rocambole.
    4. Sirva frio.
  `
  },
  {
    name: 'Pimentão Recheado com Carne Moída',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 pimentões vermelhos',
      '500g de carne moída magra',
      '1 cebola picada',
      '2 dentes de alho picados',
      '1 tomate picado',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 250,
      carbs: '15g',
      protein: '20g',
      fat: '15g',
      fiber: '5g'
    },
    instructions: `
    1. Corte a parte superior dos pimentões e retire as sementes. Reserve.
    2. Em uma panela, aqueça o azeite e refogue a cebola e o alho até dourarem.
    3. Adicione a carne moída e cozinhe até dourar. Junte o tomate, sal e pimenta e cozinhe por mais 5 minutos.
    4. Recheie os pimentões com a carne moída e coloque-os em uma assadeira.
    5. Leve ao forno pré-aquecido a 180°C por 20 minutos.
    6. Sirva quente.
  `
  },
  {
    name: 'Molho de Tomate Fresco',
    type: 'lunch',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '6 tomates maduros',
      '2 dentes de alho picados',
      '1 cebola picada',
      '2 colheres (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto',
      'Manjericão fresco a gosto'
    ],
    nutrition: {
      calories: 50,
      carbs: '10g',
      protein: '1g',
      fat: '2g',
      fiber: '3g'
    },
    instructions: `
    1. Retire a pele e as sementes dos tomates e corte-os em pedaços pequenos.
    2. Em uma panela, aqueça o azeite e refogue a cebola e o alho até dourarem.
    3. Adicione os tomates, tempere com sal e pimenta, e cozinhe em fogo baixo por 20 minutos, mexendo ocasionalmente.
    4. Acrescente o manjericão fresco e sirva com massas ou outros pratos de sua preferência.
  `
  },
  {
    name: 'Abobrinha Recheada com Atum',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 abobrinhas médias',
      '2 latas de atum em água, escorridas',
      '1 cebola picada',
      '2 dentes de alho picados',
      '2 colheres (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 200,
      carbs: '10g',
      protein: '20g',
      fat: '10g',
      fiber: '4g'
    },
    instructions: `
    1. Corte as abobrinhas ao meio no sentido do comprimento e retire a polpa, deixando uma cavidade para o recheio.
    2. Em uma panela, aqueça o azeite e refogue a cebola e o alho até dourarem.
    3. Adicione a polpa das abobrinhas, o atum, sal e pimenta, e cozinhe por 5 minutos.
    4. Recheie as abobrinhas com a mistura de atum e coloque-as em uma assadeira.
    5. Leve ao forno pré-aquecido a 180°C por 20 minutos.
    6. Sirva quente.
  `
  },
  {
    name: 'Purê de Abobrinha',
    type: 'lunch',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 abobrinhas médias',
      '2 dentes de alho picados',
      '1 colher (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 100,
      carbs: '5g',
      protein: '2g',
      fat: '7g',
      fiber: '2g'
    },
    instructions: `
    1. Cozinhe as abobrinhas em água fervente até ficarem macias. Escorra.
    2. Em uma panela, aqueça o azeite e refogue o alho até dourar.
    3. Amasse as abobrinhas cozidas e misture com o alho refogado.
    4. Tempere com sal e pimenta a gosto.
    5. Sirva quente.
  `
  },
  {
    name: 'Legumes Gratinados',
    type: 'lunch',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 cenoura em rodelas',
      '1 abobrinha em rodelas',
      '1 brócolis em buquês',
      '1 couve-flor em buquês',
      '2 colheres (sopa) de azeite de oliva',
      '200ml de creme de leite light',
      '100g de queijo parmesão ralado',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 250,
      carbs: '15g',
      protein: '8g',
      fat: '18g',
      fiber: '6g'
    },
    instructions: `
    1. Cozinhe os legumes em água fervente até ficarem al dente. Escorra e reserve.
    2. Em uma tigela, misture o creme de leite, o queijo parmesão, sal e pimenta.
    3. Coloque os legumes em uma assadeira, regue com o azeite e cubra com a mistura de creme de leite.
    4. Leve ao forno pré-aquecido a 180°C até gratinar.
    5. Sirva quente.
  `
  },
  {
    name: 'Agrião na Manteiga',
    type: 'lunch',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 maço de agrião',
      '2 colheres (sopa) de manteiga',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 80,
      carbs: '4g',
      protein: '2g',
      fat: '7g',
      fiber: '2g'
    },
    instructions: `
    1. Lave bem o agrião e seque.
    2. Em uma frigideira, derreta a manteiga e refogue o alho até dourar.
    3. Adicione o agrião e refogue rapidamente até murchar.
    4. Tempere com sal e pimenta a gosto.
    5. Sirva quente.
  `
  },
  {
    name: 'Aipo Apimentado',
    type: 'lunch',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 talos de aipo picados',
      '2 pimentas dedo-de-moça sem sementes e picadas',
      '2 dentes de alho picados',
      '2 colheres (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 60,
      carbs: '5g',
      protein: '1g',
      fat: '4g',
      fiber: '2g'
    },
    instructions: `
    1. Em uma frigideira, aqueça o azeite e refogue o alho até dourar.
    2. Adicione o aipo e a pimenta dedo-de-moça, e refogue por 5 minutos.
    3. Tempere com sal e pimenta a gosto.
    4. Sirva quente.
  `
  },
  {
    name: 'Barquetes de Chuchu Recheados',
    type: 'lunch',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 chuchus médios',
      '1 cebola picada',
      '2 dentes de alho picados',
      '2 colheres (sopa) de azeite de oliva',
      '100g de queijo cottage',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 120,
      carbs: '10g',
      protein: '4g',
      fat: '7g',
      fiber: '3g'
    },
    instructions: `
    1. Cozinhe os chuchus em água fervente até ficarem macios. Corte ao meio e retire o miolo, formando barquinhas.
    2. Em uma panela, aqueça o azeite e refogue a cebola e o alho até dourarem.
    3. Misture o queijo cottage, sal e pimenta.
    4. Recheie os chuchus com a mistura e coloque em uma assadeira.
    5. Leve ao forno pré-aquecido a 180°C por 15 minutos.
    6. Sirva quente.
  `
  },
  {
    name: 'Cenoura Recheada com Ricota',
    type: 'lunch',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 cenouras grandes',
      '200g de ricota amassada',
      '1 colher (sopa) de azeite de oliva',
      '1 dente de alho picado',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 130,
      carbs: '12g',
      protein: '6g',
      fat: '7g',
      fiber: '4g'
    },
    instructions: `
    1. Cozinhe as cenouras em água fervente até ficarem macias. Corte ao meio e retire o miolo, formando barquinhas.
    2. Em uma tigela, misture a ricota, o alho, sal e pimenta.
    3. Recheie as cenouras com a mistura de ricota e coloque em uma assadeira.
    4. Leve ao forno pré-aquecido a 180°C por 15 minutos.
    5. Sirva quente.
  `
  },
  {
    name: 'Chuchu Gratinado',
    type: 'lunch',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 chuchus médios',
      '2 colheres (sopa) de azeite de oliva',
      '100g de queijo parmesão ralado',
      '200ml de creme de leite light',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 200,
      carbs: '10g',
      protein: '5g',
      fat: '15g',
      fiber: '4g'
    },
    instructions: `
    1. Cozinhe os chuchus em água fervente até ficarem macios. Corte ao meio e retire o miolo.
    2. Em uma tigela, misture o creme de leite, o queijo parmesão, sal e pimenta.
    3. Coloque os chuchus em uma assadeira, regue com o azeite e cubra com a mistura de creme de leite.
    4. Leve ao forno pré-aquecido a 180°C até gratinar.
    5. Sirva quente.
  `
  },
  {
    name: 'Jiló Recheado',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '8 jilós',
      '200g de carne moída',
      '1 cebola picada',
      '2 dentes de alho picados',
      '2 colheres (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 180,
      carbs: '8g',
      protein: '15g',
      fat: '10g',
      fiber: '4g'
    },
    instructions: `
    1. Corte os jilós ao meio e retire a polpa, formando barquinhas.
    2. Em uma panela, aqueça o azeite e refogue a cebola e o alho até dourarem.
    3. Adicione a carne moída, tempere com sal e pimenta, e cozinhe até dourar.
    4. Recheie os jilós com a carne moída e coloque em uma assadeira.
    5. Leve ao forno pré-aquecido a 180°C por 20 minutos.
    6. Sirva quente.
  `
  },
  {
    name: 'Estrogonofe de Cogumelos',
    type: 'lunch',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de cogumelos variados (shitake, shimeji, champignon)',
      '1 cebola picada',
      '2 dentes de alho picados',
      '200ml de creme de leite light',
      '2 colheres (sopa) de azeite de oliva',
      '2 colheres (sopa) de ketchup sem açúcar',
      '1 colher (sopa) de mostarda',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 220,
      carbs: '12g',
      protein: '5g',
      fat: '16g',
      fiber: '4g'
    },
    instructions: `
    1. Em uma panela, aqueça o azeite e refogue a cebola e o alho até dourarem.
    2. Adicione os cogumelos e refogue até murcharem.
    3. Acrescente o ketchup, a mostarda, o creme de leite, sal e pimenta, e cozinhe por mais 5 minutos.
    4. Sirva quente, acompanhado de arroz integral ou purê de couve-flor.
  `
  },
  {
    name: 'Brócolis Assado',
    type: 'lunch',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 maço de brócolis',
      '2 colheres (sopa) de azeite de oliva',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 80,
      carbs: '6g',
      protein: '3g',
      fat: '6g',
      fiber: '3g'
    },
    instructions: `
    1. Separe os buquês do brócolis e lave bem.
    2. Em uma assadeira, misture o brócolis com o azeite, o alho, sal e pimenta.
    3. Leve ao forno pré-aquecido a 180°C por 20 minutos ou até dourar.
    4. Sirva quente.
  `
  },
  {
    name: 'Chips de Tomate',
    type: 'lunch',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 tomates maduros',
      '2 colheres (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto',
      'Orégano a gosto'
    ],
    nutrition: {
      calories: 60,
      carbs: '5g',
      protein: '1g',
      fat: '4g',
      fiber: '2g'
    },
    instructions: `
    1. Corte os tomates em fatias finas.
    2. Em uma assadeira, disponha as fatias de tomate e regue com azeite.
    3. Tempere com sal, pimenta e orégano.
    4. Leve ao forno pré-aquecido a 120°C por 2 horas ou até ficarem crocantes.
    5. Sirva como aperitivo ou acompanhamento.
  `
  },
  {
    name: 'Tomatinhos Recheados com 3 Queijos',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '12 tomates cereja',
      '50g de queijo cottage',
      '50g de queijo parmesão ralado',
      '50g de queijo mussarela ralado',
      'Sal e pimenta-do-reino a gosto',
      'Manjericão fresco a gosto'
    ],
    nutrition: {
      calories: 100,
      carbs: '4g',
      protein: '7g',
      fat: '7g',
      fiber: '2g'
    },
    instructions: `
    1. Corte a parte superior dos tomates e retire as sementes.
    2. Em uma tigela, misture os queijos, sal, pimenta e manjericão.
    3. Recheie os tomates com a mistura de queijos.
    4. Leve ao forno pré-aquecido a 180°C por 10 minutos.
    5. Sirva quente.
  `
  },
  {
    name: 'Tomate Recheado com Frango',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 tomates grandes',
      '200g de peito de frango cozido e desfiado',
      '1 cebola picada',
      '2 dentes de alho picados',
      '2 colheres (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 180,
      carbs: '8g',
      protein: '15g',
      fat: '10g',
      fiber: '3g'
    },
    instructions: `
    1. Corte a parte superior dos tomates e retire as sementes.
    2. Em uma panela, aqueça o azeite e refogue a cebola e o alho até dourarem.
    3. Adicione o frango desfiado, tempere com sal e pimenta, e cozinhe por mais 5 minutos.
    4. Recheie os tomates com o frango e coloque em uma assadeira.
    5. Leve ao forno pré-aquecido a 180°C por 15 minutos.
    6. Sirva quente.
  `
  },
  {
    name: 'Repolho à Carbonara',
    type: 'lunch',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 repolho pequeno fatiado',
      '100g de bacon picado',
      '2 ovos',
      '50g de queijo parmesão ralado',
      '2 colheres (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 250,
      carbs: '8g',
      protein: '12g',
      fat: '20g',
      fiber: '4g'
    },
    instructions: `
    1. Cozinhe o repolho em água fervente até ficar al dente. Escorra e reserve.
    2. Em uma frigideira, aqueça o azeite e frite o bacon até dourar.
    3. Em uma tigela, bata os ovos com o queijo parmesão, sal e pimenta.
    4. Adicione o repolho e o bacon à mistura de ovos e mexa bem.
    5. Volte à frigideira e cozinhe em fogo baixo até os ovos cozinharem.
    6. Sirva quente.
  `
  },
  {
    name: 'Guacamole',
    type: 'lunch',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 avocados maduros',
      '1 tomate picado',
      '1 cebola roxa picada',
      '1 pimenta dedo-de-moça picada',
      'Suco de 1 limão',
      'Coentro picado a gosto',
      'Sal a gosto'
    ],
    nutrition: {
      calories: 150,
      carbs: '12g',
      protein: '2g',
      fat: '11g',
      fiber: '7g'
    },
    instructions: `
    1. Amasse os avocados com um garfo.
    2. Adicione o tomate, a cebola, a pimenta, o suco de limão, o coentro e o sal.
    3. Misture bem e sirva como acompanhamento ou aperitivo.
  `
  },
  {
    name: 'Purê de Chuchu',
    type: 'lunch',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 chuchus médios',
      '2 dentes de alho picados',
      '1 colher (sopa) de azeite de oliva',
      '200ml de creme de leite light',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 150,
      carbs: '10g',
      protein: '2g',
      fat: '12g',
      fiber: '3g'
    },
    instructions: `
    1. Cozinhe os chuchus em água fervente até ficarem macios. Escorra e amasse bem.
    2. Em uma panela, aqueça o azeite e refogue o alho até dourar.
    3. Adicione o chuchu amassado e o creme de leite, tempere com sal e pimenta, e cozinhe por mais 5 minutos.
    4. Sirva quente.
  `
  },
  {
    name: 'Tabule de Couve-Flor',
    type: 'lunch',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 couve-flor pequena',
      '1 tomate picado',
      '1 pepino picado',
      '1 cebola picada',
      'Suco de 1 limão',
      '2 colheres (sopa) de azeite de oliva',
      'Hortelã picada a gosto',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 100,
      carbs: '8g',
      protein: '3g',
      fat: '7g',
      fiber: '4g'
    },
    instructions: `
    1. Separe a couve-flor em buquês e processe até obter a textura de arroz.
    2. Em uma tigela, misture a couve-flor com o tomate, o pepino, a cebola, o suco de limão, o azeite, a hortelã, o sal e a pimenta.
    3. Sirva frio como salada.
  `
  },
  {
    name: 'Alcatra Brasileira',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 bifes de alcatra',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 250,
      carbs: '0g',
      protein: '25g',
      fat: '15g',
      fiber: '0g'
    },
    instructions: `
    1. Tempere os bifes com alho, sal e pimenta.
    2. Em uma frigideira, aqueça o azeite e frite os bifes até o ponto desejado.
    3. Sirva com arroz integral e salada.
  `
  },
  {
    name: 'Alcatra de Forno com Cebola',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 bifes de alcatra',
      '2 cebolas fatiadas',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 270,
      carbs: '5g',
      protein: '25g',
      fat: '16g',
      fiber: '2g'
    },
    instructions: `
    1. Tempere os bifes com alho, sal e pimenta.
    2. Em uma assadeira, coloque os bifes e cubra com as cebolas fatiadas.
    3. Regue com azeite e leve ao forno pré-aquecido a 180°C por 20 minutos.
    4. Sirva quente.
  `
  },
  {
    name: 'Bife à Milanesa com Linhaça',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 bifes de carne magra',
      '1 ovo batido',
      '1 xícara de farinha de linhaça',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 300,
      carbs: '5g',
      protein: '30g',
      fat: '18g',
      fiber: '4g'
    },
    instructions: `
    1. Tempere os bifes com sal e pimenta.
    2. Passe os bifes no ovo batido e depois na farinha de linhaça.
    3. Em uma frigideira, aqueça o azeite e frite os bifes até dourarem.
    4. Sirva com salada verde.
  `
  },
  {
    name: 'Lombo de Porco ao Molho de Maracujá',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 kg de lombo de porco',
      'Suco de 2 maracujás',
      '2 colheres (sopa) de mel',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 350,
      carbs: '10g',
      protein: '30g',
      fat: '20g',
      fiber: '2g'
    },
    instructions: `
    1. Tempere o lombo com alho, sal e pimenta.
    2. Em uma assadeira, coloque o lombo e regue com o suco de maracujá e o mel.
    3. Regue com azeite e cubra com papel alumínio.
    4. Leve ao forno pré-aquecido a 180°C por 1 hora. Retire o papel alumínio e deixe dourar por mais 20 minutos.
    5. Sirva quente.
  `
  },
  {
    name: 'Costela de Porco com Repolho',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 kg de costela de porco',
      '1 repolho fatiado',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 400,
      carbs: '8g',
      protein: '25g',
      fat: '30g',
      fiber: '4g'
    },
    instructions: `
    1. Tempere as costelas com alho, sal e pimenta.
    2. Em uma assadeira, coloque as costelas e cubra com o repolho fatiado.
    3. Regue com azeite e leve ao forno pré-aquecido a 180°C por 1 hora.
    4. Sirva quente.
  `
  },
  {
    name: 'Picanha ao Molho de Gorgonzola',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 peça de picanha',
      '100g de queijo gorgonzola',
      '200ml de creme de leite light',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 450,
      carbs: '2g',
      protein: '30g',
      fat: '35g',
      fiber: '0g'
    },
    instructions: `
    1. Tempere a picanha com sal e pimenta.
    2. Em uma assadeira, coloque a picanha e leve ao forno pré-aquecido a 200°C por 30 minutos.
    3. Em uma panela, aqueça o azeite e derreta o gorgonzola com o creme de leite até obter um molho cremoso.
    4. Sirva a picanha com o molho de gorgonzola.
  `
  },
  {
    name: 'Filé de Dourado com Cottage',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 filés de dourado',
      '200g de queijo cottage',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 220,
      carbs: '2g',
      protein: '30g',
      fat: '10g',
      fiber: '0g'
    },
    instructions: `
    1. Tempere os filés de dourado com alho, sal e pimenta.
    2. Em uma frigideira, aqueça o azeite e grelhe os filés até dourarem.
    3. Sirva os filés com o queijo cottage por cima.
  `
  },
  {
    name: 'Filé de Robalo com Menta e Canela',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 filés de robalo',
      '2 colheres (sopa) de folhas de menta picadas',
      '1 colher (chá) de canela em pó',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 230,
      carbs: '2g',
      protein: '28g',
      fat: '12g',
      fiber: '0g'
    },
    instructions: `
    1. Tempere os filés de robalo com alho, menta, canela, sal e pimenta.
    2. Em uma frigideira, aqueça o azeite e grelhe os filés até dourarem.
    3. Sirva quente.
  `
  },
  {
    name: 'Filé de Pescada ao Forno',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 filés de pescada',
      '2 dentes de alho picados',
      '1 limão (suco)',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 200,
      carbs: '2g',
      protein: '25g',
      fat: '10g',
      fiber: '0g'
    },
    instructions: `
    1. Tempere os filés de pescada com alho, suco de limão, sal e pimenta.
    2. Em uma assadeira, coloque os filés e regue com azeite.
    3. Leve ao forno pré-aquecido a 180°C por 20 minutos.
    4. Sirva quente.
  `
  },
  {
    name: 'Atum ao Molho de Abacate',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 latas de atum em água, escorridas',
      '1 abacate maduro',
      'Suco de 1 limão',
      '1 cebola roxa picada',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 250,
      carbs: '10g',
      protein: '20g',
      fat: '15g',
      fiber: '6g'
    },
    instructions: `
    1. Em uma tigela, amasse o abacate e misture com o suco de limão, a cebola, sal e pimenta.
    2. Adicione o atum e misture bem.
    3. Sirva frio.
  `
  },
  {
    name: 'Atum com Tomate Cereja',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 latas de atum em água, escorridas',
      '200g de tomate cereja cortados ao meio',
      '1 cebola roxa picada',
      '2 colheres (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 180,
      carbs: '8g',
      protein: '20g',
      fat: '8g',
      fiber: '4g'
    },
    instructions: `
    1. Em uma tigela, misture o atum, o tomate cereja, a cebola, sal e pimenta.
    2. Regue com azeite e misture bem.
    3. Sirva frio.
  `
  },
  {
    name: 'Atum Selado com Gergelim',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 filés de atum',
      '4 colheres (sopa) de sementes de gergelim',
      '2 colheres (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 300,
      carbs: '3g',
      protein: '30g',
      fat: '18g',
      fiber: '3g'
    },
    instructions: `
    1. Tempere os filés de atum com sal e pimenta.
    2. Passe os filés nas sementes de gergelim, pressionando bem.
    3. Em uma frigideira, aqueça o azeite e sele os filés por 2 minutos de cada lado.
    4. Sirva quente.
  `
  },
  {
    name: 'Cação com Creme de Queijo',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 postas de cação',
      '200g de cream cheese light',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 300,
      carbs: '2g',
      protein: '28g',
      fat: '20g',
      fiber: '0g'
    },
    instructions: `
    1. Tempere as postas de cação com alho, sal e pimenta.
    2. Em uma assadeira, coloque as postas e cubra com o cream cheese.
    3. Regue com azeite e leve ao forno pré-aquecido a 180°C por 20 minutos.
    4. Sirva quente.
  `
  },
  {
    name: 'Filé de Peixe ao Molho de Alcaparras',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 filés de peixe branco',
      '2 colheres (sopa) de alcaparras',
      '200ml de creme de leite light',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 260,
      carbs: '3g',
      protein: '28g',
      fat: '15g',
      fiber: '0g'
    },
    instructions: `
    1. Tempere os filés de peixe com alho, sal e pimenta.
    2. Em uma frigideira, aqueça o azeite e grelhe os filés até dourarem. Reserve.
    3. Na mesma frigideira, adicione as alcaparras e o creme de leite, e cozinhe até formar um molho.
    4. Sirva os filés com o molho de alcaparras.
  `
  },
  {
    name: 'Escabeche com Sardinha',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de sardinhas limpas',
      '1 cebola fatiada',
      '2 dentes de alho picados',
      '1 pimentão vermelho fatiado',
      '1 cenoura fatiada',
      '200ml de vinagre de maçã',
      '2 colheres (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 300,
      carbs: '8g',
      protein: '25g',
      fat: '18g',
      fiber: '2g'
    },
    instructions: `
    1. Tempere as sardinhas com sal e pimenta.
    2. Em uma panela, aqueça o azeite e refogue a cebola, o alho, o pimentão e a cenoura até amaciarem.
    3. Adicione o vinagre e deixe ferver.
    4. Coloque as sardinhas em um recipiente e despeje a mistura de vinagre por cima.
    5. Deixe marinar na geladeira por 24 horas.
    6. Sirva frio.
  `
  },
  {
    name: 'Filé de Peixe com Creme de Abóbora',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 filés de peixe branco',
      '200g de abóbora cozida e amassada',
      '2 dentes de alho picados',
      '200ml de creme de leite light',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 280,
      carbs: '8g',
      protein: '25g',
      fat: '15g',
      fiber: '2g'
    },
    instructions: `
    1. Tempere os filés de peixe com alho, sal e pimenta.
    2. Em uma assadeira, coloque os filés e cubra com a abóbora amassada.
    3. Regue com azeite e leve ao forno pré-aquecido a 180°C por 20 minutos.
    4. Sirva quente com o creme de leite por cima.
  `
  },
  {
    name: 'Filé de Peixe com Ervas',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 filés de peixe branco',
      '2 colheres (sopa) de ervas frescas picadas (salsa, cebolinha, tomilho)',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 210,
      carbs: '2g',
      protein: '25g',
      fat: '12g',
      fiber: '0g'
    },
    instructions: `
    1. Tempere os filés de peixe com alho, ervas, sal e pimenta.
    2. Em uma assadeira, coloque os filés e regue com azeite.
    3. Leve ao forno pré-aquecido a 180°C por 20 minutos.
    4. Sirva quente.
  `
  },
  {
    name: 'Salmão Assado em Crosta de Gergelim',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 filés de salmão',
      '4 colheres (sopa) de sementes de gergelim',
      '2 colheres (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 300,
      carbs: '2g',
      protein: '25g',
      fat: '20g',
      fiber: '1g'
    },
    instructions: `
    1. Tempere os filés de salmão com sal e pimenta.
    2. Passe os filés nas sementes de gergelim, pressionando bem.
    3. Em uma assadeira, coloque os filés e regue com azeite.
    4. Leve ao forno pré-aquecido a 200°C por 15 minutos.
    5. Sirva quente.
  `
  },
  {
    name: 'Salmão com Pasta de Pimentão e Espinafre',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 filés de salmão',
      '1 pimentão vermelho assado e descascado',
      '200g de espinafre cozido e escorrido',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 320,
      carbs: '5g',
      protein: '28g',
      fat: '18g',
      fiber: '3g'
    },
    instructions: `
    1. Tempere os filés de salmão com alho, sal e pimenta.
    2. Em uma assadeira, coloque os filés e regue com azeite.
    3. No processador, bata o pimentão assado com o espinafre até formar uma pasta.
    4. Cubra os filés com a pasta de pimentão e espinafre.
    5. Leve ao forno pré-aquecido a 200°C por 15 minutos.
    6. Sirva quente.
  `
  },
  {
    name: 'Salmão com Pimenta da Jamaica',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 filés de salmão',
      '1 colher (chá) de pimenta da Jamaica moída',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 310,
      carbs: '2g',
      protein: '27g',
      fat: '19g',
      fiber: '1g'
    },
    instructions: `
    1. Tempere os filés de salmão com alho, pimenta da Jamaica, sal e pimenta.
    2. Em uma assadeira, coloque os filés e regue com azeite.
    3. Leve ao forno pré-aquecido a 200°C por 15 minutos.
    4. Sirva quente.
  `
  },
  {
    name: 'Salmão Grelhado com Ovo Pochê',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 filés de salmão',
      '4 ovos',
      '2 colheres (sopa) de vinagre',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 350,
      carbs: '1g',
      protein: '30g',
      fat: '24g',
      fiber: '0g'
    },
    instructions: `
    1. Tempere os filés de salmão com sal e pimenta.
    2. Em uma frigideira, aqueça o azeite e grelhe os filés até dourarem.
    3. Em uma panela com água fervente, adicione o vinagre e cozinhe os ovos por 3 minutos para fazer ovos pochê.
    4. Sirva os filés de salmão com os ovos pochê por cima.
  `
  },
  {
    name: 'Truta ao Molho de Alcaparras',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 filés de truta',
      '2 colheres (sopa) de alcaparras',
      '200ml de creme de leite light',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 280,
      carbs: '3g',
      protein: '27g',
      fat: '17g',
      fiber: '0g'
    },
    instructions: `
    1. Tempere os filés de truta com alho, sal e pimenta.
    2. Em uma frigideira, aqueça o azeite e grelhe os filés até dourarem. Reserve.
    3. Na mesma frigideira, adicione as alcaparras e o creme de leite, e cozinhe até formar um molho.
    4. Sirva os filés com o molho de alcaparras.
  `
  },
  {
    name: 'Sardinha na Panela de Pressão',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1 kg de sardinhas limpas',
      '2 cebolas fatiadas',
      '2 dentes de alho picados',
      '1 pimentão vermelho fatiado',
      '200ml de vinagre de maçã',
      '2 colheres (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 350,
      carbs: '5g',
      protein: '30g',
      fat: '22g',
      fiber: '2g'
    },
    instructions: `
    1. Tempere as sardinhas com sal e pimenta.
    2. Na panela de pressão, coloque camadas de sardinha, cebola, alho e pimentão.
    3. Adicione o vinagre e o azeite.
    4. Tampe a panela e cozinhe por 20 minutos após pegar pressão.
    5. Sirva quente ou frio.
  `
  },
  {
    name: 'Espetinho de Peixe',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de filé de peixe cortado em cubos',
      '1 pimentão vermelho cortado em cubos',
      '1 cebola cortada em cubos',
      '2 dentes de alho picados',
      'Suco de 1 limão',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 200,
      carbs: '4g',
      protein: '25g',
      fat: '10g',
      fiber: '2g'
    },
    instructions: `
    1. Tempere os cubos de peixe com alho, suco de limão, sal e pimenta.
    2. Monte os espetinhos alternando cubos de peixe, pimentão e cebola.
    3. Em uma grelha, aqueça o azeite e grelhe os espetinhos até dourarem.
    4. Sirva quente.
  `
  },
  {
    name: 'Camarão à Moda Sueca',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de camarões limpos',
      '200ml de creme de leite light',
      '1 cebola picada',
      '2 dentes de alho picados',
      '1 colher (sopa) de mostarda',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 250,
      carbs: '3g',
      protein: '20g',
      fat: '17g',
      fiber: '0g'
    },
    instructions: `
    1. Em uma panela, aqueça o azeite e refogue a cebola e o alho até dourarem.
    2. Adicione os camarões e cozinhe até ficarem rosados.
    3. Acrescente o creme de leite, a mostarda, sal e pimenta, e cozinhe por mais 5 minutos.
    4. Sirva quente.
  `
  },
  {
    name: 'Camarão com Maionese',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de camarões limpos',
      '4 colheres (sopa) de maionese light',
      'Suco de 1 limão',
      '1 cebola picada',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 240,
      carbs: '2g',
      protein: '22g',
      fat: '16g',
      fiber: '0g'
    },
    instructions: `
    1. Tempere os camarões com suco de limão, sal e pimenta.
    2. Em uma frigideira, aqueça o azeite e refogue a cebola até dourar.
    3. Adicione os camarões e cozinhe até ficarem rosados.
    4. Acrescente a maionese e misture bem.
    5. Sirva quente.
  `
  },
  {
    name: 'Camarão Grelhado com Ervas',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de camarões limpos',
      '2 colheres (sopa) de ervas frescas picadas (salsa, cebolinha, tomilho)',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 220,
      carbs: '1g',
      protein: '24g',
      fat: '14g',
      fiber: '0g'
    },
    instructions: `
    1. Tempere os camarões com alho, ervas, sal e pimenta.
    2. Em uma grelha, aqueça o azeite e grelhe os camarões até ficarem rosados.
    3. Sirva quente.
  `
  },
  {
    name: 'Camarão com Chuchu e Ervas',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de camarões limpos',
      '2 chuchus médios cortados em cubos',
      '2 colheres (sopa) de ervas frescas picadas (salsa, cebolinha, tomilho)',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 230,
      carbs: '5g',
      protein: '23g',
      fat: '14g',
      fiber: '2g'
    },
    instructions: `
    1. Cozinhe os cubos de chuchu em água fervente até ficarem macios. Escorra.
    2. Em uma frigideira, aqueça o azeite e refogue o alho até dourar.
    3. Adicione os camarões e cozinhe até ficarem rosados.
    4. Acrescente o chuchu cozido e as ervas, tempere com sal e pimenta, e cozinhe por mais 5 minutos.
    5. Sirva quente.
  `
  },
  {
    name: 'Espetinho de Camarão',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de camarões limpos',
      '1 pimentão vermelho cortado em cubos',
      '1 cebola cortada em cubos',
      '2 dentes de alho picados',
      'Suco de 1 limão',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 220,
      carbs: '3g',
      protein: '22g',
      fat: '14g',
      fiber: '1g'
    },
    instructions: `
    1. Tempere os camarões com alho, suco de limão, sal e pimenta.
    2. Monte os espetinhos alternando camarões, pimentão e cebola.
    3. Em uma grelha, aqueça o azeite e grelhe os espetinhos até os camarões ficarem rosados.
    4. Sirva quente.
  `
  },
  {
    name: 'Camarão com Tomate e Espinafre',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de camarões limpos',
      '200g de tomate cereja cortados ao meio',
      '200g de espinafre cozido e escorrido',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 240,
      carbs: '5g',
      protein: '23g',
      fat: '14g',
      fiber: '2g'
    },
    instructions: `
    1. Em uma frigideira, aqueça o azeite e refogue o alho até dourar.
    2. Adicione os camarões e cozinhe até ficarem rosados.
    3. Acrescente o tomate cereja e o espinafre, tempere com sal e pimenta, e cozinhe por mais 5 minutos.
    4. Sirva quente.
  `
  },
  {
    name: 'Camarão ao Leite de Coco',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de camarões limpos',
      '200ml de leite de coco',
      '2 dentes de alho picados',
      '1 cebola picada',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 260,
      carbs: '3g',
      protein: '22g',
      fat: '18g',
      fiber: '1g'
    },
    instructions: `
    1. Em uma panela, aqueça o azeite e refogue a cebola e o alho até dourarem.
    2. Adicione os camarões e cozinhe até ficarem rosados.
    3. Acrescente o leite de coco, sal e pimenta, e cozinhe por mais 5 minutos.
    4. Sirva quente.
  `
  },
  {
    name: 'Lula à Provençal',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de lulas limpas e cortadas em anéis',
      '2 dentes de alho picados',
      '1 colher (sopa) de salsa picada',
      'Suco de 1 limão',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 200,
      carbs: '2g',
      protein: '23g',
      fat: '12g',
      fiber: '0g'
    },
    instructions: `
    1. Tempere as lulas com alho, salsa, suco de limão, sal e pimenta.
    2. Em uma frigideira, aqueça o azeite e refogue as lulas até ficarem macias.
    3. Sirva quente.
  `
  },
  {
    name: 'Lulas com Cogumelos',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de lulas limpas e cortadas em anéis',
      '200g de cogumelos variados (shitake, shimeji, champignon)',
      '2 dentes de alho picados',
      '1 cebola picada',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 230,
      carbs: '5g',
      protein: '25g',
      fat: '14g',
      fiber: '2g'
    },
    instructions: `
    1. Em uma frigideira, aqueça o azeite e refogue a cebola e o alho até dourarem.
    2. Adicione as lulas e os cogumelos, tempere com sal e pimenta, e cozinhe até ficarem macios.
    3. Sirva quente.
  `
  },
  {
    name: 'Lula Recheada com Carne Moída',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '8 lulas limpas',
      '200g de carne moída',
      '1 cebola picada',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 280,
      carbs: '4g',
      protein: '30g',
      fat: '16g',
      fiber: '1g'
    },
    instructions: `
    1. Em uma panela, aqueça o azeite e refogue a cebola e o alho até dourarem.
    2. Adicione a carne moída, tempere com sal e pimenta, e cozinhe até dourar.
    3. Recheie as lulas com a carne moída e feche com palitos.
    4. Em uma frigideira, aqueça mais azeite e cozinhe as lulas até ficarem macias.
    5. Sirva quente.
  `
  },
  {
    name: 'Lulas Grelhadas',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de lulas limpas e cortadas em anéis',
      '2 dentes de alho picados',
      'Suco de 1 limão',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 210,
      carbs: '2g',
      protein: '24g',
      fat: '12g',
      fiber: '0g'
    },
    instructions: `
    1. Tempere as lulas com alho, suco de limão, sal e pimenta.
    2. Em uma frigideira, aqueça o azeite e grelhe as lulas até ficarem macias.
    3. Sirva quente.
  `
  },
  {
    name: 'Casquinha de Siri',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de carne de siri',
      '1 cebola picada',
      '2 dentes de alho picados',
      '1 tomate picado',
      '1 pimentão verde picado',
      '2 colheres (sopa) de azeite de oliva',
      '200ml de leite de coco',
      'Sal e pimenta-do-reino a gosto',
      '1 colher (sopa) de coentro picado'
    ],
    nutrition: {
      calories: 260,
      carbs: '4g',
      protein: '23g',
      fat: '16g',
      fiber: '2g'
    },
    instructions: `
    1. Em uma panela, aqueça o azeite e refogue a cebola e o alho até dourarem.
    2. Adicione o tomate e o pimentão, e refogue por mais 5 minutos.
    3. Acrescente a carne de siri, o leite de coco, sal e pimenta, e cozinhe por 10 minutos.
    4. Polvilhe o coentro por cima e sirva quente em casquinhas.
  `
  },
  {
    name: 'Lula Recheada com Tomate',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '8 lulas grandes limpas',
      '2 tomates picados',
      '1 cebola picada',
      '2 dentes de alho picados',
      '2 colheres (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 240,
      carbs: '5g',
      protein: '28g',
      fat: '12g',
      fiber: '1g'
    },
    instructions: `
    1. Em uma tigela, misture os tomates, a cebola, o alho, sal e pimenta.
    2. Recheie as lulas com essa mistura e feche com palitos.
    3. Em uma frigideira, aqueça o azeite e grelhe as lulas até ficarem macias.
    4. Sirva quente.
  `
  },
  {
    name: 'Bacalhau ao Leite de Coco',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de bacalhau dessalgado e desfiado',
      '1 cebola picada',
      '2 dentes de alho picados',
      '1 pimentão vermelho picado',
      '1 tomate picado',
      '200ml de leite de coco',
      '2 colheres (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 300,
      carbs: '6g',
      protein: '27g',
      fat: '18g',
      fiber: '2g'
    },
    instructions: `
    1. Em uma panela, aqueça o azeite e refogue a cebola e o alho até dourarem.
    2. Adicione o pimentão e o tomate, e refogue por mais 5 minutos.
    3. Acrescente o bacalhau, o leite de coco, sal e pimenta, e cozinhe por 10 minutos.
    4. Sirva quente.
  `
  },
  {
    name: 'Bacalhau Fresco com Linguiça',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de bacalhau fresco',
      '200g de linguiça calabresa em rodelas',
      '1 cebola picada',
      '2 dentes de alho picados',
      '1 pimentão verde picado',
      '2 colheres (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 320,
      carbs: '5g',
      protein: '28g',
      fat: '18g',
      fiber: '2g'
    },
    instructions: `
    1. Em uma frigideira, aqueça o azeite e refogue a cebola e o alho até dourarem.
    2. Adicione a linguiça e o pimentão, e refogue por mais 5 minutos.
    3. Acrescente o bacalhau, sal e pimenta, e cozinhe até o peixe ficar macio.
    4. Sirva quente.
  `
  },
  {
    name: 'Salmão ao Molho de Mostarda',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 filés de salmão',
      '2 colheres (sopa) de mostarda',
      '200ml de creme de leite light',
      '1 cebola picada',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 310,
      carbs: '3g',
      protein: '28g',
      fat: '18g',
      fiber: '1g'
    },
    instructions: `
    1. Tempere os filés de salmão com sal e pimenta.
    2. Em uma frigideira, aqueça o azeite e grelhe os filés até dourarem. Reserve.
    3. Na mesma frigideira, adicione a cebola e o alho, e refogue até dourarem.
    4. Acrescente a mostarda e o creme de leite, e cozinhe até formar um molho.
    5. Sirva os filés com o molho por cima.
  `
  },
  {
    name: 'Linguado com Molho Aveludado',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 filés de linguado',
      '2 colheres (sopa) de farinha de amêndoas',
      '200ml de leite desnatado',
      '1 cebola picada',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 280,
      carbs: '4g',
      protein: '25g',
      fat: '15g',
      fiber: '1g'
    },
    instructions: `
    1. Tempere os filés de linguado com sal e pimenta.
    2. Passe os filés na farinha de amêndoas.
    3. Em uma frigideira, aqueça o azeite e frite os filés até dourarem. Reserve.
    4. Na mesma frigideira, adicione a cebola e o alho, e refogue até dourarem.
    5. Acrescente o leite e cozinhe até formar um molho aveludado.
    6. Sirva os filés com o molho por cima.
  `
  },
  {
    name: 'Filé de Peixe ao Molho de Tomate',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 filés de peixe branco',
      '2 tomates picados',
      '1 cebola picada',
      '2 dentes de alho picados',
      '2 colheres (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 250,
      carbs: '6g',
      protein: '23g',
      fat: '14g',
      fiber: '2g'
    },
    instructions: `
    1. Tempere os filés de peixe com sal e pimenta.
    2. Em uma frigideira, aqueça o azeite e grelhe os filés até dourarem. Reserve.
    3. Na mesma frigideira, adicione a cebola e o alho, e refogue até dourarem.
    4. Acrescente os tomates e cozinhe até formar um molho.
    5. Sirva os filés com o molho de tomate por cima.
  `
  },
  {
    name: 'Filé de Truta ao Molho de Almôndega',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 filés de truta',
      '200g de almôndegas prontas',
      '1 cebola picada',
      '2 dentes de alho picados',
      '200ml de molho de tomate zero açúcar',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 320,
      carbs: '5g',
      protein: '30g',
      fat: '18g',
      fiber: '2g'
    },
    instructions: `
    1. Tempere os filés de truta com sal e pimenta.
    2. Em uma frigideira, aqueça o azeite e grelhe os filés até dourarem. Reserve.
    3. Na mesma frigideira, adicione a cebola e o alho, e refogue até dourarem.
    4. Acrescente as almôndegas e o molho de tomate, e cozinhe por 10 minutos.
    5. Sirva os filés com as almôndegas e o molho por cima.
  `
  },
  {
    name: 'Salmão com Creme de Brócolis',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 filés de salmão',
      '200g de brócolis cozido',
      '200ml de creme de leite light',
      '1 cebola picada',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 330,
      carbs: '6g',
      protein: '28g',
      fat: '20g',
      fiber: '3g'
    },
    instructions: `
    1. Tempere os filés de salmão com sal e pimenta.
    2. Em uma frigideira, aqueça o azeite e grelhe os filés até dourarem. Reserve.
    3. No processador, bata o brócolis com o creme de leite até obter um creme.
    4. Na mesma frigideira, adicione a cebola e o alho, e refogue até dourarem.
    5. Acrescente o creme de brócolis e cozinhe por 5 minutos.
    6. Sirva os filés com o creme de brócolis por cima.
  `
  },
  {
    name: 'Iscas de Peixe',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de filé de peixe cortado em tiras',
      '1 limão (suco)',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 240,
      carbs: '2g',
      protein: '27g',
      fat: '14g',
      fiber: '0g'
    },
    instructions: `
    1. Tempere as tiras de peixe com suco de limão, alho, sal e pimenta.
    2. Em uma frigideira, aqueça o azeite e frite as tiras até dourarem.
    3. Sirva quente.
  `
  },
  {
    name: 'Isca de Peixe ao Suco de Maracujá',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de filé de peixe cortado em tiras',
      'Suco de 2 maracujás',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 250,
      carbs: '4g',
      protein: '25g',
      fat: '14g',
      fiber: '2g'
    },
    instructions: `
    1. Tempere as tiras de peixe com suco de maracujá, alho, sal e pimenta.
    2. Em uma frigideira, aqueça o azeite e frite as tiras até dourarem.
    3. Sirva quente.
  `
  },
  {
    name: 'Abobrinha Marinada',
    type: 'lunch',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 abobrinhas médias em rodelas finas',
      '2 dentes de alho picados',
      'Suco de 1 limão',
      '2 colheres (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 120,
      carbs: '5g',
      protein: '1g',
      fat: '10g',
      fiber: '2g'
    },
    instructions: `
    1. Em uma tigela, misture o alho, suco de limão, azeite, sal e pimenta.
    2. Adicione as rodelas de abobrinha e misture bem.
    3. Deixe marinar na geladeira por 30 minutos antes de servir.
  `
  },
  {
    name: 'Aipo com Alcaparras de Mostarda',
    type: 'lunch',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 talos de aipo picados',
      '2 colheres (sopa) de alcaparras',
      '1 colher (sopa) de mostarda',
      '2 dentes de alho picados',
      '2 colheres (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 140,
      carbs: '4g',
      protein: '2g',
      fat: '12g',
      fiber: '2g'
    },
    instructions: `
    1. Em uma frigideira, aqueça o azeite e refogue o alho até dourar.
    2. Adicione o aipo, as alcaparras e a mostarda, e cozinhe por 5 minutos.
    3. Tempere com sal e pimenta a gosto.
    4. Sirva quente.
  `
  },
  {
    name: 'Alcachofras ao Limão',
    type: 'lunch',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 alcachofras',
      'Suco de 2 limões',
      '2 dentes de alho picados',
      '2 colheres (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 180,
      carbs: '8g',
      protein: '4g',
      fat: '14g',
      fiber: '5g'
    },
    instructions: `
    1. Cozinhe as alcachofras em água com sal e suco de 1 limão por 20 minutos.
    2. Escorra e reserve.
    3. Em uma tigela, misture o alho, suco de limão, azeite, sal e pimenta.
    4. Regue as alcachofras com essa mistura e sirva quente.
  `
  },
  {
    name: 'Alho Assado com Orégano',
    type: 'lunch',
    highProtein: false,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 cabeças de alho',
      '2 colheres (sopa) de azeite de oliva',
      '1 colher (sopa) de orégano',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 120,
      carbs: '10g',
      protein: '2g',
      fat: '8g',
      fiber: '1g'
    },
    instructions: `
    1. Corte o topo das cabeças de alho e coloque-as em uma assadeira.
    2. Regue com azeite, salpique orégano, sal e pimenta.
    3. Cubra com papel alumínio e leve ao forno pré-aquecido a 180°C por 30 minutos.
    4. Sirva quente.
  `
  },
  {
    name: 'Barquete de Aipo',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 talos de aipo cortados ao meio',
      '200g de queijo cottage',
      '1 cenoura ralada',
      'Sal e pimenta-do-reino a gosto',
      '1 colher (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 150,
      carbs: '5g',
      protein: '7g',
      fat: '10g',
      fiber: '3g'
    },
    instructions: `
    1. Em uma tigela, misture o queijo cottage, a cenoura, sal e pimenta.
    2. Recheie os talos de aipo com essa mistura.
    3. Regue com azeite e sirva.
  `
  },
  {
    name: 'Costela Assada',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '1kg de costela bovina',
      '4 dentes de alho picados',
      'Suco de 1 limão',
      '2 colheres (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 450,
      carbs: '2g',
      protein: '30g',
      fat: '35g',
      fiber: '0g'
    },
    instructions: `
    1. Tempere a costela com alho, suco de limão, sal e pimenta.
    2. Coloque a costela em uma assadeira e regue com azeite.
    3. Cubra com papel alumínio e leve ao forno pré-aquecido a 180°C por 2 horas.
    4. Retire o papel alumínio e asse por mais 30 minutos para dourar.
    5. Sirva quente.
  `
  },
  {
    name: 'Medalhão de Frango Recheado',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 filés de peito de frango',
      '200g de queijo cottage',
      '1 cenoura ralada',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 280,
      carbs: '3g',
      protein: '30g',
      fat: '15g',
      fiber: '1g'
    },
    instructions: `
    1. Tempere os filés de frango com alho, sal e pimenta.
    2. Recheie os filés com queijo cottage e cenoura, e enrole como medalhões.
    3. Em uma frigideira, aqueça o azeite e doure os medalhões de todos os lados.
    4. Sirva quente.
  `
  },
  {
    name: 'Caçarola de Galinha com Queijo Feta',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de peito de galinha em cubos',
      '200g de queijo feta esfarelado',
      '1 cebola picada',
      '2 dentes de alho picados',
      '200ml de creme de leite light',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 320,
      carbs: '4g',
      protein: '28g',
      fat: '20g',
      fiber: '1g'
    },
    instructions: `
    1. Em uma panela, aqueça o azeite e refogue a cebola e o alho até dourarem.
    2. Adicione o peito de galinha e cozinhe até dourar.
    3. Acrescente o queijo feta, o creme de leite, sal e pimenta, e cozinhe por mais 5 minutos.
    4. Sirva quente.
  `
  },
  {
    name: 'Rolinho de Frango com Presunto e Queijo',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 filés de peito de frango',
      '4 fatias de presunto',
      '4 fatias de queijo mussarela',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 300,
      carbs: '2g',
      protein: '32g',
      fat: '18g',
      fiber: '0g'
    },
    instructions: `
    1. Tempere os filés de frango com alho, sal e pimenta.
    2. Coloque uma fatia de presunto e uma de queijo sobre cada filé e enrole.
    3. Em uma frigideira, aqueça o azeite e doure os rolinhos de todos os lados.
    4. Sirva quente.
  `
  },
  {
    name: 'Coxas de Frango em Papelotes',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 coxas de frango',
      '2 dentes de alho picados',
      '1 cebola picada',
      '1 pimentão vermelho picado',
      '2 colheres (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 340,
      carbs: '3g',
      protein: '28g',
      fat: '22g',
      fiber: '1g'
    },
    instructions: `
    1. Tempere as coxas de frango com alho, sal e pimenta.
    2. Em uma frigideira, aqueça o azeite e doure as coxas de todos os lados. Reserve.
    3. Em papelotes de alumínio, coloque a cebola, o pimentão e as coxas de frango.
    4. Feche bem os papelotes e leve ao forno pré-aquecido a 180°C por 30 minutos.
    5. Sirva quente.
  `
  },
  {
    name: 'Coxas com Requeijão e Bacon',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '4 coxas de frango',
      '4 colheres (sopa) de requeijão light',
      '4 fatias de bacon',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 380,
      carbs: '2g',
      protein: '30g',
      fat: '26g',
      fiber: '0g'
    },
    instructions: `
    1. Tempere as coxas de frango com alho, sal e pimenta.
    2. Recheie as coxas com requeijão e enrole cada uma com uma fatia de bacon.
    3. Em uma frigideira, aqueça o azeite e doure as coxas de todos os lados.
    4. Sirva quente.
  `
  },
  {
    name: 'Asinha com Tomate e Pimentão',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de asinhas de frango',
      '1 tomate picado',
      '1 pimentão verde picado',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 320,
      carbs: '4g',
      protein: '28g',
      fat: '20g',
      fiber: '1g'
    },
    instructions: `
    1. Tempere as asinhas com alho, sal e pimenta.
    2. Em uma frigideira, aqueça o azeite e doure as asinhas de todos os lados.
    3. Acrescente o tomate e o pimentão, e cozinhe por mais 10 minutos.
    4. Sirva quente.
  `
  },
  {
    name: 'Asinha de Frango ao Molho',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '500g de asinhas de frango',
      '200ml de molho de tomate zero açúcar',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 330,
      carbs: '4g',
      protein: '28g',
      fat: '22g',
      fiber: '1g'
    },
    instructions: `
    1. Tempere as asinhas com alho, sal e pimenta.
    2. Em uma frigideira, aqueça o azeite e doure as asinhas de todos os lados.
    3. Acrescente o molho de tomate e cozinhe por mais 10 minutos.
    4. Sirva quente.
  `
  },
  {
    name: 'Abacate ao Forno Recheado',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '2 abacates maduros cortados ao meio e sem caroço',
      '200g de queijo cottage',
      '1 tomate picado',
      '1 cebola picada',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 260,
      carbs: '8g',
      protein: '10g',
      fat: '22g',
      fiber: '7g'
    },
    instructions: `
    1. Em uma tigela, misture o queijo cottage, o tomate, a cebola, sal e pimenta.
    2. Recheie as metades dos abacates com essa mistura.
    3. Coloque os abacates em uma assadeira, regue com azeite e leve ao forno pré-aquecido a 180°C por 15 minutos.
    4. Sirva quente.
  `
  },
  {
    name: 'Endívia Recheada com Ricota',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '10 folhas de endívia',
      '200g de ricota amassada',
      '1 cenoura ralada',
      '1 dente de alho picado',
      'Sal e pimenta-do-reino a gosto',
      '1 colher (sopa) de azeite de oliva'
    ],
    nutrition: {
      calories: 140,
      carbs: '5g',
      protein: '8g',
      fat: '10g',
      fiber: '3g'
    },
    instructions: `
    1. Em uma tigela, misture a ricota, a cenoura, o alho, sal e pimenta.
    2. Recheie as folhas de endívia com essa mistura.
    3. Regue com azeite e sirva.
  `
  },
  {
    name: 'Endívias Recheadas com Salmão',
    type: 'lunch',
    highProtein: true,
    category: 'Diabetic Friendly',
    lowGlycemic: true,
    ingredients: [
      '10 folhas de endívia',
      '200g de salmão defumado em fatias',
      '200g de cream cheese light',
      '1 colher (sopa) de suco de limão',
      'Sal e pimenta-do-reino a gosto'
    ],
    nutrition: {
      calories: 180,
      carbs: '5g',
      protein: '18g',
      fat: '12g',
      fiber: '2g'
    },
    instructions:  `
    Recheie as folhas de endívia com fatias de salmão defumado.,
    Em uma tigela, misture o cream cheese, o suco de limão, sal e pimenta.,
    Coloque uma colher dessa mistura sobre cada folha de endívia.,
    Sirva frio.
    `

  },
  {
    'name': 'Couve-Flor Gratinada',
    'type': 'lunch',
    'highProtein': false,
    'category': 'Diabetic Friendly',
    'lowGlycemic': true,
    'ingredients': [
      '1 cabeça de couve-flor separada em buquês',
      '200ml de creme de leite light',
      '100g de queijo parmesão ralado',
      '1 dente de alho picado',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    'nutrition': {
      'calories': 220,
      'carbs': '10g',
      'protein': '8g',
      'fat': '18g',
      'fiber': '4g'
    },
    'instructions': [
      'Cozinhe a couve-flor em água com sal até ficar al dente. Escorra e reserve.',
      'Em uma panela, aqueça o azeite e refogue o alho até dourar.',
      'Adicione o creme de leite, sal e pimenta, e cozinhe por 5 minutos.',
      'Coloque a couve-flor em um refratário, cubra com o molho e polvilhe queijo parmesão.',
      'Leve ao forno pré-aquecido a 180°C por 20 minutos ou até gratinar.',
      'Sirva quente.'
    ]
  },
  {
    'name': 'Couve Refogada com Bacon',
    'type': 'lunch',
    'highProtein': true,
    'category': 'Diabetic Friendly',
    'lowGlycemic': true,
    'ingredients': [
      '1 maço de couve fatiada',
      '100g de bacon picado',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    'nutrition': {
      'calories': 180,
      'carbs': '6g',
      'protein': '10g',
      'fat': '12g',
      'fiber': '4g'
    },
    'instructions': [
      'Em uma frigideira, aqueça o azeite e frite o bacon até dourar.',
      'Adicione o alho e refogue até dourar.',
      'Acrescente a couve, tempere com sal e pimenta, e refogue até murchar.',
      'Sirva quente.'
    ]
  },
  {
    'name': 'Berinjela Refogada',
    'type': 'lunch',
    'highProtein': false,
    'category': 'Diabetic Friendly',
    'lowGlycemic': true,
    'ingredients': [
      '2 berinjelas médias cortadas em cubos',
      '1 cebola picada',
      '2 dentes de alho picados',
      '2 colheres (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto'
    ],
    'nutrition': {
      'calories': 140,
      'carbs': '10g',
      'protein': '2g',
      'fat': '10g',
      'fiber': '4g'
    },
    'instructions': [
      'Em uma frigideira, aqueça o azeite e refogue a cebola e o alho até dourarem.',
      'Adicione a berinjela, tempere com sal e pimenta, e refogue até ficar macia.',
      'Sirva quente.'
    ]
  },
  {
    'name': 'Espetinho de Abobrinha com Bacon',
    'type': 'lunch',
    'highProtein': true,
    'category': 'Diabetic Friendly',
    'lowGlycemic': true,
    'ingredients': [
      '2 abobrinhas médias cortadas em rodelas grossas',
      '100g de bacon em fatias',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    'nutrition': {
      'calories': 220,
      'carbs': '6g',
      'protein': '10g',
      'fat': '18g',
      'fiber': '2g'
    },
    'instructions': [
      'Tempere as rodelas de abobrinha com alho, sal e pimenta.',
      'Envolva cada rodela de abobrinha com uma fatia de bacon.',
      'Monte os espetinhos alternando rodelas de abobrinha e bacon.',
      'Em uma grelha, aqueça o azeite e grelhe os espetinhos até dourarem.',
      'Sirva quente.'
    ]
  },
  {
    'name': 'Tomate Seco e Ovos Cozidos',
    'type': 'lunch',
    'highProtein': true,
    'category': 'Diabetic Friendly',
    'lowGlycemic': true,
    'ingredients': [
      '4 ovos',
      '200g de tomate seco',
      '1 colher (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto'
    ],
    'nutrition': {
      'calories': 200,
      'carbs': '5g',
      'protein': '12g',
      'fat': '16g',
      'fiber': '3g'
    },
    'instructions': [
      'Cozinhe os ovos em água fervente por 10 minutos. Descasque e corte ao meio.',
      'Em uma tigela, misture os tomates secos, azeite, sal e pimenta.',
      'Coloque os ovos em um prato e cubra com a mistura de tomate seco.',
      'Sirva frio.'
    ]
  },
  {
    'name': 'Tomates Tostados com Alho',
    'type': 'lunch',
    'highProtein': false,
    'category': 'Diabetic Friendly',
    'lowGlycemic': true,
    'ingredients': [
      '4 tomates cortados ao meio',
      '4 dentes de alho picados',
      '2 colheres (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto'
    ],
    'nutrition': {
      'calories': 120,
      'carbs': '8g',
      'protein': '2g',
      'fat': '10g',
      'fiber': '3g'
    },
    'instructions': [
      'Tempere os tomates com alho, sal e pimenta.',
      'Em uma frigideira, aqueça o azeite e toste os tomates com o lado cortado para baixo até dourarem.',
      'Sirva quente.'
    ]
  },
  {
    'name': 'Quiabo com Bacon e Tomate',
    'type': 'lunch',
    'highProtein': true,
    'category': 'Diabetic Friendly',
    'lowGlycemic': true,
    'ingredients': [
      '500g de quiabo cortado em pedaços',
      '100g de bacon picado',
      '1 tomate picado',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    'nutrition': {
      'calories': 180,
      'carbs': '6g',
      'protein': '8g',
      'fat': '14g',
      'fiber': '4g'
    },
    'instructions': [
      'Em uma frigideira, aqueça o azeite e frite o bacon até dourar.',
      'Adicione o alho e refogue até dourar.',
      'Acrescente o quiabo, tempere com sal e pimenta, e refogue até ficar macio.',
      'Adicione o tomate e cozinhe por mais 5 minutos.',
      'Sirva quente.'
    ]
  },
  {
    'name': 'Barca de Abacate com Camarão',
    'type': 'lunch',
    'highProtein': true,
    'category': 'Diabetic Friendly',
    'lowGlycemic': true,
    'ingredients': [
      '2 abacates cortados ao meio e sem caroço',
      '200g de camarões limpos',
      '1 dente de alho picado',
      'Suco de 1 limão',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    'nutrition': {
      'calories': 250,
      'carbs': '8g',
      'protein': '18g',
      'fat': '18g',
      'fiber': '6g'
    },
    'instructions': [
      'Tempere os camarões com alho, suco de limão, sal e pimenta.',
      'Em uma frigideira, aqueça o azeite e refogue os camarões até ficarem rosados.',
      'Recheie as metades dos abacates com os camarões.',
      'Sirva frio.'
    ]
  },
  {
    'name': 'Macarrão de Abobrinha ao Pesto',
    'type': 'lunch',
    'highProtein': false,
    'category': 'Diabetic Friendly',
    'lowGlycemic': true,
    'ingredients': [
      '2 abobrinhas médias fatiadas no sentido do comprimento',
      '2 colheres (sopa) de pesto',
      '2 dentes de alho picados',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    'nutrition': {
      'calories': 160,
      'carbs': '6g',
      'protein': '4g',
      'fat': '14g',
      'fiber': '2g'
    },
    'instructions': [
      'Em uma frigideira, aqueça o azeite e refogue o alho até dourar.',
      'Adicione as fatias de abobrinha e cozinhe até ficarem al dente.',
      'Tempere com sal e pimenta e adicione o pesto.',
      'Misture bem e sirva quente.'
    ]
  },
  {
    'name': 'Acelga com Alho e Gengibre',
    'type': 'lunch',
    'highProtein': false,
    'category': 'Diabetic Friendly',
    'lowGlycemic': true,
    'ingredients': [
      '1 acelga cortada em tiras',
      '2 dentes de alho picados',
      '1 colher (chá) de gengibre ralado',
      '2 colheres (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto'
    ],
    'nutrition': {
      'calories': 120,
      'carbs': '4g',
      'protein': '2g',
      'fat': '10g',
      'fiber': '2g'
    },
    'instructions': [
      'Em uma frigideira, aqueça o azeite e refogue o alho e o gengibre até dourarem.',
      'Adicione a acelga, tempere com sal e pimenta, e cozinhe até murchar.',
      'Sirva quente.'
    ]
  },
  {
    'name': 'Barquete de Endívia com Carne Moída',
    'type': 'lunch',
    'highProtein': true,
    'category': 'Diabetic Friendly',
    'lowGlycemic': true,
    'ingredients': [
      '10 folhas de endívia',
      '200g de carne moída',
      '1 cebola picada',
      '2 dentes de alho picados',
      '1 colher (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto'
    ],
    'nutrition': {
      'calories': 200,
      'carbs': '4g',
      'protein': '18g',
      'fat': '14g',
      'fiber': '2g'
    },
    'instructions': [
      'Em uma frigideira, aqueça o azeite e refogue a cebola e o alho até dourarem.',
      'Adicione a carne moída, tempere com sal e pimenta, e cozinhe até dourar.',
      'Recheie as folhas de endívia com a carne moída.',
      'Sirva quente.'
    ]
  },
  {
    'name': 'Arroz de Couve-Flor Cremoso',
    'type': 'lunch',
    'highProtein': false,
    'category': 'Diabetic Friendly',
    'lowGlycemic': true,
    'ingredients': [
      '1 couve-flor ralada',
      '200ml de creme de leite light',
      '1 cebola picada',
      '2 dentes de alho picados',
      '100g de queijo parmesão ralado',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    'nutrition': {
      'calories': 220,
      'carbs': '8g',
      'protein': '8g',
      'fat': '18g',
      'fiber': '4g'
    },
    'instructions': [
      'Em uma frigideira, aqueça o azeite e refogue a cebola e o alho até dourarem.',
      'Adicione a couve-flor ralada e cozinhe até ficar macia.',
      'Acrescente o creme de leite, o queijo parmesão, sal e pimenta, e cozinhe por mais 5 minutos.',
      'Sirva quente.'
    ]
  },
  {
    'name': 'Torta de Café',
    'type': 'lunch',
    'highProtein': false,
    'category': 'Diabetic Friendly',
    'lowGlycemic': true,
    'ingredients': [
      '200g de farelo de aveia',
      '4 ovos',
      '1 xícara (chá) de óleo de coco',
      '1 xícara (chá) de água',
      '2 colheres (sopa) de café solúvel',
      '1 colher (sopa) de fermento químico',
      '100g de castanha de caju laminada',
      '1 colher (sopa) de cacau em pó',
      '1 xícara (chá) de xilitol'
    ],
    'nutrition': {
      'calories': 250,
      'carbs': '12g',
      'protein': '6g',
      'fat': '20g',
      'fiber': '4g'
    },
    'instructions': [
      'Em um liquidificador, bata o óleo de coco, os ovos, o café, o xilitol, o farelo de aveia e o fermento até obter uma massa homogênea.',
      'Adicione as castanhas laminadas e misture bem.',
      'Despeje a massa em uma forma untada e enfarinhada, e leve ao forno pré-aquecido a 180°C por 40 minutos ou até que, ao enfiar um palito, ele saia limpo.',
      'Sirva.'
    ]
  },
  {
    'name': 'Rocambole de Frango com Cenoura',
    'type': 'lunch',
    'highProtein': true,
    'category': 'Diabetic Friendly',
    'lowGlycemic': true,
    'ingredients': [
      '500g de peito de frango moído',
      '1 cenoura ralada',
      '1 cebola picada',
      '2 dentes de alho picados',
      '2 colheres (sopa) de farinha de amêndoas',
      '1 ovo',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    'nutrition': {
      'calories': 280,
      'carbs': '6g',
      'protein': '26g',
      'fat': '16g',
      'fiber': '2g'
    },
    'instructions': [
      'Em uma tigela, misture o frango moído, a cenoura, a cebola, o alho, a farinha de amêndoas, o ovo, sal e pimenta até obter uma massa homogênea.',
      'Abra a massa sobre um filme plástico, formando um retângulo.',
      'Enrole a massa como um rocambole, usando o filme plástico para ajudar.',
      'Em uma assadeira, coloque o rocambole, regue com azeite e leve ao forno pré-aquecido a 180°C por 40 minutos ou até dourar.',
      'Sirva quente.'
    ]
  },
  {
    'name': 'Batata Suíça com Frango Desfiado e Milho',
    'type': 'lunch',
    'highProtein': true,
    'category': 'Diabetic Friendly',
    'lowGlycemic': true,
    'ingredients': [
      '4 batatas grandes raladas',
      '200g de frango desfiado',
      '1 lata de milho verde escorrida',
      '1 cebola picada',
      '2 dentes de alho picados',
      '2 colheres (sopa) de azeite de oliva',
      'Sal e pimenta-do-reino a gosto'
    ],
    'nutrition': {
      'calories': 300,
      'carbs': '20g',
      'protein': '15g',
      'fat': '18g',
      'fiber': '4g'
    },
    'instructions': [
      'Em uma tigela, misture as batatas raladas com sal e pimenta.',
      'Em uma frigideira, aqueça o azeite e refogue a cebola e o alho até dourarem.',
      'Adicione o frango desfiado e o milho, e refogue por mais 5 minutos. Reserve.',
      'Em uma frigideira antiaderente, coloque metade das batatas raladas e pressione bem.',
      'Adicione o refogado de frango e milho, e cubra com o restante das batatas, pressionando novamente.',
      'Cozinhe em fogo médio até dourar dos dois lados.',
      'Sirva quente.'
    ]
  },
  {
    'name': 'Frango ao Creme de Queijo',
    'type': 'lunch',
    'highProtein': true,
    'category': 'Diabetic Friendly',
    'lowGlycemic': true,
    'ingredients': [
      '4 filés de peito de frango',
      '200g de queijo cottage',
      '1 cebola picada',
      '2 dentes de alho picados',
      '200ml de creme de leite light',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    'nutrition': {
      'calories': 320,
      'carbs': '6g',
      'protein': '28g',
      'fat': '20g',
      'fiber': '2g'
    },
    'instructions': [
      'Tempere os filés de frango com sal e pimenta.',
      'Em uma frigideira, aqueça o azeite e doure os filés dos dois lados. Reserve.',
      'Na mesma frigideira, adicione a cebola e o alho, e refogue até dourarem.',
      'Acrescente o queijo cottage e o creme de leite, e cozinhe até formar um creme.',
      'Sirva os filés de frango com o creme de queijo por cima.'
    ]
  },
  {
    'name': 'Filé de Frango Empanado',
    'type': 'lunch',
    'highProtein': true,
    'category': 'Diabetic Friendly',
    'lowGlycemic': true,
    'ingredients': [
      '4 filés de peito de frango',
      '2 ovos batidos',
      '1 xícara (chá) de farinha de linhaça',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    'nutrition': {
      'calories': 280,
      'carbs': '6g',
      'protein': '30g',
      'fat': '16g',
      'fiber': '4g'
    },
    'instructions': [
      'Tempere os filés de frango com sal e pimenta.',
      'Passe os filés nos ovos batidos e depois na farinha de linhaça, pressionando bem.',
      'Em uma frigideira, aqueça o azeite e frite os filés até dourarem.',
      'Sirva quente.'
    ]
  },
  {
    'name': 'Escondidinho de Abóbora com Frango',
    'type': 'lunch',
    'highProtein': true,
    'category': 'Diabetic Friendly',
    'lowGlycemic': true,
    'ingredients': [
      '500g de peito de frango desfiado',
      '500g de abóbora cozida e amassada',
      '1 cebola picada',
      '2 dentes de alho picados',
      '200ml de creme de leite light',
      '100g de queijo parmesão ralado',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    'nutrition': {
      'calories': 340,
      'carbs': '16g',
      'protein': '28g',
      'fat': '18g',
      'fiber': '6g'
    },
    'instructions': [
      'Em uma panela, aqueça o azeite e refogue a cebola e o alho até dourarem.',
      'Adicione o frango desfiado, tempere com sal e pimenta, e cozinhe por 5 minutos. Reserve.',
      'Em uma tigela, misture a abóbora amassada com o creme de leite e tempere com sal e pimenta.',
      'Em um refratário, coloque o frango refogado e cubra com a mistura de abóbora.',
      'Polvilhe queijo parmesão por cima e leve ao forno pré-aquecido a 180°C por 20 minutos ou até gratinar.',
      'Sirva quente.'
    ]
  },
  {
    'name': 'Frango Oriental',
    'type': 'lunch',
    'highProtein': true,
    'category': 'Diabetic Friendly',
    'lowGlycemic': true,
    'ingredients': [
      '500g de peito de frango em tiras',
      '1 cenoura em tiras',
      '1 pimentão vermelho em tiras',
      '1 cebola picada',
      '2 dentes de alho picados',
      '2 colheres (sopa) de molho shoyu light',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    'nutrition': {
      'calories': 260,
      'carbs': '10g',
      'protein': '28g',
      'fat': '12g',
      'fiber': '4g'
    },
    'instructions': [
      'Em uma frigideira, aqueça o azeite e refogue a cebola e o alho até dourarem.',
      'Adicione o frango, tempere com sal e pimenta, e cozinhe até dourar.',
      'Acrescente a cenoura e o pimentão, e refogue por mais 5 minutos.',
      'Adicione o molho shoyu e cozinhe por mais 2 minutos.',
      'Sirva quente.'
    ]
  },
  {
    'name': 'Rosbife de Filé Mignon',
    'type': 'lunch',
    'highProtein': true,
    'category': 'Diabetic Friendly',
    'lowGlycemic': true,
    'ingredients': [
      '1 peça de filé mignon (aprox. 1kg)',
      '4 dentes de alho picados',
      '2 colheres (sopa) de mostarda Dijon',
      'Sal e pimenta-do-reino a gosto',
      '2 colheres (sopa) de azeite de oliva'
    ],
    'nutrition': {
      'calories': 300,
      'carbs': '2g',
      'protein': '32g',
      'fat': '18g',
      'fiber': '0g'
    },
    'instructions': [
      'Tempere o filé mignon com alho, mostarda, sal e pimenta.',
      'Em uma frigideira, aqueça o azeite e sele o filé de todos os lados até dourar.',
      'Transfira para uma assadeira e leve ao forno pré-aquecido a 200°C por 20 minutos.',
      'Retire do forno, cubra com papel alumínio e deixe descansar por 10 minutos.',
      'Fatie e sirva quente.'
    ]
  },
  {
    'name': 'Chilli com Carne',
    'type': 'lunch',
    'highProtein': true,
    'category': 'Diabetic Friendly',
    'lowGlycemic': true,
    'ingredients': [
      '1/2 kg de carne moída',
      '1/2 kg de feijão cozido sem caldo',
      '3 tomates médios cortados em cubos médios',
      '1 pimentão verde pequeno cortado em cubos',
      '1 pimentão vermelho pequeno cortado em cubos',
      '1 cebola média cortada em cubinhos',
      '1 colher (sopa) de óleo de coco',
      'Sal a gosto',
      'Pimenta-do-reino a gosto'
    ],
    'nutrition': {
      'calories': 350,
      'carbs': '20g',
      'protein': '28g',
      'fat': '18g',
      'fiber': '8g'
    },
    'instructions': [
      'Em uma panela grande, doure a cebola com o alho e o óleo de coco.',
      'Acrescente a carne moída. Sempre mexendo, refogue por 3 a 4 minutos.',
      'Adicione os temperos de sua preferência. Em seguida, os tomates e pimentões e refogue por mais alguns minutos.',
      'Por último, acrescente os feijões e a água fervente.',
      'Cozinhe por mais alguns minutos, ajuste o sal e a pimenta.',
      'Sirva quente.'
    ]
  },
  {
    'name': 'Canoas de Abobrinha',
    'type': 'lunch',
    'highProtein': true,
    'category': 'Diabetic Friendly',
    'lowGlycemic': true,
    'ingredients': [
      '2 abobrinhas italianas grandes',
      'Pimenta-do-reino a gosto',
      'Sal a gosto',
      '1 xícara (chá) de presunto ralado',
      '1 xícara (chá) de ricota amassada',
      '1/2 cebola picada',
      '1 tomate sem sementes em cubos',
      'Folhas de manjericão a gosto',
      'Queijo parmesão ralado a gosto',
      'Azeite de oliva a gosto'
    ],
    'nutrition': {
      'calories': 280,
      'carbs': '10g',
      'protein': '20g',
      'fat': '18g',
      'fiber': '4g'
    },
    'instructions': [
      'Pré-aqueça o forno em temperatura média.',
      'Higienize as abobrinhas e corte-as ao meio no sentido do comprimento.',
      'Regue com azeite e leve ao forno por 5 minutos.',
      'Retire, deixe amornar e retire as sementes com o auxílio de uma colher.',
      'Em uma tigela, coloque a polpa da abobrinha, pimenta, sal, o presunto, a ricota, a cebola, o tomate, o manjericão e a azeitona.',
      'Recheie as abobrinhas e polvilhe com o queijo ralado.',
      'Leve novamente ao forno, agora alto, por 10 minutos para gratinar. Sirva.'
    ]
  },
  {
    'name': 'Escondidinho com Couve-Flor',
    'type': 'lunch',
    'highProtein': true,
    'category': 'Diabetic Friendly',
    'lowGlycemic': true,
    'ingredients': [
      '1 couve-flor grande',
      '2 colheres (sopa) de manteiga',
      '2/3 xícara de leite desnatado ou vegetal',
      '1/4 copo de requeijão light',
      '500g de carne moída',
      '4 dentes de alho picados',
      '1 cebola média picada',
      'Queijo parmesão ralado a gosto',
      'Cheiro-verde picado a gosto',
      'Sal e pimenta-do-reino a gosto'
    ],
    'nutrition': {
      'calories': 320,
      'carbs': '12g',
      'protein': '28g',
      'fat': '18g',
      'fiber': '6g'
    },
    'instructions': [
      'Para o purê: lave bem a couve-flor e corte-a em buquês. Em uma panela média, coloque água até cobri-la. Espere levantar fervura e cozinhe até que fique macia. Escorra bem a água e pique em pedaços menores.',
      'No liquidificador, bata a couve-flor, a manteiga e o leite até obter um purê cremoso. Coloque em uma panela, acrescente o requeijão e o sal, mexa até obter um creme homogêneo. Reserve.',
      'Para a carne moída: refogue o alho até dourar. Acrescente a carne e a cebola e deixe refogando. Coloque sal e pimenta a gosto. Quando a carne estiver cozida, acrescente o cheiro-verde e deixe até secar quase toda a água.',
      'Em uma travessa, coloque a carne moída, cubra com o purê e coloque o queijo parmesão por cima. Leve ao forno até dourar o queijo. Sirva em seguida.'
    ]
  },
  {
    'name': 'Escondidinho com Abóbora',
    'type': 'lunch',
    'highProtein': true,
    'category': 'Diabetic Friendly',
    'lowGlycemic': true,
    'ingredients': [
      '1kg de abóbora cambotiá sem casca',
      '400g de carne moída cozida e temperada a gosto',
      '200g de requeijão light',
      '100g de mussarela',
      'Queijo parmesão ralado'
    ],
    'nutrition': {
      'calories': 350,
      'carbs': '14g',
      'protein': '28g',
      'fat': '20g',
      'fiber': '8g'
    },
    'instructions': [
      'Cozinhe a abóbora com sal a gosto até que esteja bem macia. Utilize parte do creme para cobrir o fundo de uma assadeira.',
      'Cubra uma camada de abóbora com mussarela.',
      'Misture a carne moída com o requeijão até obter uma mistura homogênea. Espalhe essa mistura sobre a forma.',
      'Finalize cobrindo com mais queijo mussarela e queijo ralado por cima.',
      'Leve ao forno pré-aquecido em temperatura média por cerca de 10 minutos. Retire do forno e sirva em seguida.'
    ]
  },
  {
    'name': 'Escondidinho de Carne Seca com Abóbora',
    'type': 'lunch',
    'highProtein': true,
    'category': 'Diabetic Friendly',
    'lowGlycemic': true,
    'ingredients': [
      '1kg de carne seca dessalgada',
      '800g de abóbora descascada cortada em pedaços grandes',
      '2 cebolas médias',
      '5 dentes de alho picados',
      '1 xícara de cebolinha picada',
      '1 pedaço de canela em pau',
      'Sal e pimenta-do-reino a gosto',
      '1 colher (sopa) de azeite',
      '2 colheres (sopa) de manteiga'
    ],
    'nutrition': {
      'calories': 380,
      'carbs': '16g',
      'protein': '30g',
      'fat': '22g',
      'fiber': '8g'
    },
    'instructions': [
      'Para a carne seca: corte em cubos grandes e dessalgue por 24 horas em geladeira, trocando a água umas 4 a 5 vezes.',
      'Coloque a carne seca na panela de pressão, cubra com água e cozinhe por 30 minutos depois que começar a apitar. Retire a carne e desfie com um garfo.',
      'Em uma frigideira ou panela, coloque 1 colher de azeite, 2 colheres de manteiga, 1 cebola, dois dentes de alho e meia xícara da cebolinha. Refogue por 2 minutos e adicione a carne desfiada. Mexa, adicione pimenta-do-reino moída a gosto e misture tudo até ficar bem refogado.',
      'Cozinhe a abóbora com sal a gosto até que esteja bem macia. Utilize parte do creme para cobrir o fundo de uma assadeira.',
      'Cubra uma camada de abóbora com mussarela.',
      'Misture a carne seca com o requeijão até obter uma mistura homogênea. Espalhe essa mistura sobre a forma.',
      'Finalize cobrindo com mais queijo mussarela e queijo ralado por cima.',
      'Leve ao forno pré-aquecido em temperatura média por cerca de 10 minutos. Retire do forno e sirva em seguida.'
    ]
  },
  {
    'name': 'Maionese de Linhaça',
    'type': 'sauce',
    'ingredients': [
      '1/2 xícara (chá) de farinha de linhaça',
      '1/2 xícara (chá) de água filtrada',
      'Suco puro de 2 limões',
      '1 xícara (chá) de azeite de oliva extra-virgem',
      'Sal e pimenta do reino a gosto'
    ],
    'nutrition': {
      'calories': 120,
      'carbs': '2g',
      'protein': '1g',
      'fat': '12g',
      'fiber': '2g'
    },
    'instructions': [
      'Cubra a farinha de linhaça com a água e deixe de molho até que fique com a consistência de clara de ovo.',
      'Junte no liquidificador o suco de limão, o azeite de oliva e a mistura de farinha de linhaça.',
      'Bata bem até obter uma mistura homogênea.',
      'Tempere com sal e pimenta do reino a gosto.',
      'Sirva em seguida.'
    ]
  },
  {
    'name': 'Molho de Manteiga com Cheiro Verde',
    'type': 'sauce',
    'ingredients': [
      '100g de manteiga sem sal',
      '1/2 colher (café) de sal',
      '2 colheres (sopa) de salsa picada',
      '1 colher (sopa) de cebolinha picada',
      '1/2 colher (café) de pimenta do reino moída'
    ],
    'nutrition': {
      'calories': 180,
      'carbs': '1g',
      'protein': '0g',
      'fat': '18g',
      'fiber': '0g'
    },
    'instructions': [
      'Coloque a manteiga em uma panela, em fogo baixo.',
      'Quando começar a formar uma camada de espuma branca, vá retirando-a com uma peneirinha até que ela pare de produzir a espuma.',
      'Depois da manteiga clarificada, ainda em fogo baixo, acrescente a salsa, a cebolinha, o sal e a pimenta e deixe no fogo por aproximadamente 20 minutos ou até dourar.'
    ]
  },
  {
    'name': 'Molho de Maracujá Apimentado',
    'type': 'sauce',
    'ingredients': [
      '4 pimentas dedo de moça',
      '1 e 1/2 xícara (chá) de suco de maracujá natural',
      '1/3 xícara (chá) de azeite de oliva extra-virgem',
      'Suco puro de 1 limão',
      'Sal a gosto'
    ],
    'nutrition': {
      'calories': 60,
      'carbs': '4g',
      'protein': '0g',
      'fat': '5g',
      'fiber': '1g'
    },
    'instructions': [
      'Ferva as pimentas por cerca de 10-15 minutos.',
      'Coloque as pimentas em água gelada para esfriar.',
      'Retire a pele, as sementes e as veias das pimentas.',
      'Junte no liquidificador as pimentas, o suco de maracujá, o azeite de oliva e o suco de limão até obter um molho cremoso.',
      'Tempere com o sal e disponha em um recipiente.',
      'Leve à geladeira por aproximadamente 2 horas.'
    ]
  },
  {
    'name': 'Molho de Hortelã',
    'type': 'sauce',
    'ingredients': [
      '1 xícara (chá) de folhas de hortelã picada',
      'Suco de 1/2 limão taiti',
      '1/2 xícara (chá) de azeite de oliva extra-virgem',
      '1/2 dente de alho amassado',
      '1 colher (sopa) de cebola ralada',
      '1/2 colher (chá) de sal marinho'
    ],
    'nutrition': {
      'calories': 80,
      'carbs': '1g',
      'protein': '0g',
      'fat': '8g',
      'fiber': '0g'
    },
    'instructions': [
      'Junte no liquidificador as folhas de hortelã, o suco de limão, o azeite de oliva, o alho amassado e a cebola ralada.',
      'Bata bem até obter uma mistura homogênea.',
      'Tempere com sal e misture bem.',
      'Sirva em seguida.'
    ]
  },
  {
    'name': 'Molho de Ervas',
    'type': 'sauce',
    'ingredients': [
      '1 xícara (chá) de folhas de manjericão fresco',
      '1/2 xícara (chá) de salsinha picada',
      '1/2 xícara (chá) de cebolinha picada',
      '1 dente de alho picado',
      '1 pote de iogurte natural desnatado',
      'Suco de 1 limão',
      'Sal a gosto',
      'Pimenta-do-reino a gosto'
    ],
    'nutrition': {
      'calories': 50,
      'carbs': '2g',
      'protein': '1g',
      'fat': '4g',
      'fiber': '1g'
    },
    'instructions': [
      'Bata todos os ingredientes no liquidificador até obter uma mistura homogênea.',
      'Ajuste o sal e a pimenta a gosto.',
      'Sirva o molho gelado, como acompanhamento para carnes, peixes ou saladas.'
    ]
  },
  {
    'name': 'Molho de Queijo Parmesão',
    'type': 'sauce',
    'ingredients': [
      '100g de queijo parmesão ralado',
      '200ml de creme de leite light',
      '1 dente de alho picado',
      'Sal a gosto',
      'Pimenta-do-reino a gosto'
    ],
    'nutrition': {
      'calories': 100,
      'carbs': '2g',
      'protein': '5g',
      'fat': '8g',
      'fiber': '0g'
    },
    'instructions': [
      'Em uma panela, aqueça o creme de leite em fogo baixo.',
      'Adicione o alho picado e cozinhe por cerca de 2 minutos.',
      'Acrescente o queijo parmesão ralado e mexa até derreter completamente.',
      'Tempere com sal e pimenta a gosto.',
      'Sirva quente, como acompanhamento para massas ou carnes.'
    ]
  },
  {
    'name': 'Maionese Caseira Cetogênica',
    'type': 'sauce',
    'ingredients': [
      '2 gemas de ovo',
      '1 colher (sopa) de suco de limão',
      '1 colher (chá) de mostarda Dijon',
      '1 xícara (chá) de azeite de oliva extra-virgem',
      'Sal a gosto',
      'Pimenta-do-reino a gosto'
    ],
    'nutrition': {
      'calories': 90,
      'carbs': '0g',
      'protein': '1g',
      'fat': '10g',
      'fiber': '0g'
    },
    'instructions': [
      'Em um recipiente, bata as gemas com o suco de limão e a mostarda até obter uma mistura homogênea.',
      'Aos poucos, adicione o azeite em fio, batendo sempre, até a maionese adquirir consistência.',
      'Tempere com sal e pimenta a gosto.',
      'Sirva em seguida ou conserve na geladeira.'
    ]
  },
  {
    'name': 'Maionese de Abacate',
    'type': 'sauce',
    'ingredients': [
      '1 abacate maduro',
      '2 colheres (sopa) de suco de limão',
      '1 dente de alho picado',
      '1/4 xícara (chá) de azeite de oliva extra-virgem',
      'Sal a gosto',
      'Pimenta-do-reino a gosto'
    ],
    'nutrition': {
      'calories': 100,
      'carbs': '3g',
      'protein': '1g',
      'fat': '9g',
      'fiber': '3g'
    },
    'instructions': [
      'No liquidificador, bata a polpa do abacate com o suco de limão e o alho picado.',
      'Aos poucos, adicione o azeite em fio, batendo sempre, até obter uma mistura cremosa.',
      'Tempere com sal e pimenta a gosto.',
      'Sirva em seguida ou conserve na geladeira.'
    ]
  },
  {
    'name': 'Molho Verde',
    'type': 'sauce',
    'ingredients': [
      '1 xícara (chá) de folhas de coentro',
      '1/2 xícara (chá) de folhas de salsinha',
      '1 dente de alho picado',
      '1/2 xícara (chá) de iogurte natural desnatado',
      'Suco de 1 limão',
      'Sal a gosto',
      'Pimenta-do-reino a gosto'
    ],
    'nutrition': {
      'calories': 40,
      'carbs': '2g',
      'protein': '1g',
      'fat': '3g',
      'fiber': '1g'
    },
    'instructions': [
      'Bata todos os ingredientes no liquidificador até obter uma mistura homogênea.',
      'Ajuste o sal e a pimenta a gosto.',
      'Sirva gelado, como acompanhamento para saladas ou carnes.'
    ]
  },
  {
    'name': 'Molho Pesto',
    'type': 'sauce',
    'ingredients': [
      '1 xícara (chá) de folhas de manjericão fresco',
      '1/4 xícara (chá) de nozes ou pinhões',
      '1/2 xícara (chá) de queijo parmesão ralado',
      '1/2 xícara (chá) de azeite de oliva extra-virgem',
      '2 dentes de alho picados',
      'Sal a gosto'
    ],
    'nutrition': {
      'calories': 90,
      'carbs': '2g',
      'protein': '2g',
      'fat': '8g',
      'fiber': '1g'
    },
    'instructions': [
      'No liquidificador, bata o manjericão, as nozes, o queijo parmesão e o alho.',
      'Aos poucos, adicione o azeite em fio, batendo sempre, até obter uma mistura cremosa.',
      'Tempere com sal a gosto.',
      'Sirva em seguida ou conserve na geladeira.'
    ]
  },
  {
    'name': 'Molho Apimentado',
    'type': 'sauce',
    'ingredients': [
      '3 pimentas dedo-de-moça sem sementes',
      '1/2 xícara (chá) de azeite de oliva extra-virgem',
      '1 dente de alho picado',
      'Suco de 1 limão',
      'Sal a gosto'
    ],
    'nutrition': {
      'calories': 45,
      'carbs': '1g',
      'protein': '0g',
      'fat': '4g',
      'fiber': '0g'
    },
    'instructions': [
      'Bata todos os ingredientes no liquidificador até obter uma mistura homogênea.',
      'Ajuste o sal a gosto.',
      'Sirva em seguida ou conserve na geladeira.'
    ]
  },
  {
    'name': 'Molho Balsâmico para Saladas',
    'type': 'sauce',
    'ingredients': [
      '1/4 xícara (chá) de vinagre balsâmico',
      '1/2 xícara (chá) de azeite de oliva extra-virgem',
      '1 colher (sopa) de mostarda Dijon',
      '1 dente de alho picado',
      'Sal a gosto',
      'Pimenta-do-reino a gosto'
    ],
    'nutrition': {
      'calories': 90,
      'carbs': '2g',
      'protein': '0g',
      'fat': '8g',
      'fiber': '0g'
    },
    'instructions': [
      'Em um recipiente, misture o vinagre balsâmico, o azeite de oliva, a mostarda e o alho picado.',
      'Bata bem com um garfo ou batedor de arame até obter uma mistura homogênea.',
      'Tempere com sal e pimenta a gosto.',
      'Sirva em seguida ou conserve na geladeira.'
    ]
  },
  {
    'name': 'Patê de Tomate Seco',
    'type': 'sauce',
    'ingredients': [
      '200g de tomate seco',
      '1/2 xícara (chá) de cream cheese light',
      '1 dente de alho picado',
      'Sal a gosto',
      'Pimenta-do-reino a gosto'
    ],
    'nutrition': {
      'calories': 60,
      'carbs': '3g',
      'protein': '2g',
      'fat': '5g',
      'fiber': '1g'
    },
    'instructions': [
      'No liquidificador, bata o tomate seco, o cream cheese e o alho picado até obter uma mistura homogênea.',
      'Tempere com sal e pimenta a gosto.',
      'Sirva em seguida ou conserve na geladeira.'
    ]
  },
  {
    'name': 'Patê de Atum',
    'type': 'sauce',
    'ingredients': [
      '1 lata de atum em água, escorrido',
      '1/2 xícara (chá) de iogurte natural desnatado',
      '1 colher (sopa) de suco de limão',
      '1 dente de alho picado',
      'Sal a gosto',
      'Pimenta-do-reino a gosto'
    ],
    'nutrition': {
      'calories': 50,
      'carbs': '1g',
      'protein': '7g',
      'fat': '2g',
      'fiber': '0g'
    },
    'instructions': [
      'No liquidificador, bata todos os ingredientes até obter uma mistura homogênea.',
      'Ajuste o sal e a pimenta a gosto.',
      'Sirva em seguida ou conserve na geladeira.'
    ]
  },
  {
    'name': 'Patê de Alho',
    'type': 'sauce',
    'ingredients': [
      '1/2 xícara (chá) de ricota amassada',
      '1/4 xícara (chá) de iogurte natural desnatado',
      '3 dentes de alho picados',
      'Sal a gosto',
      'Pimenta-do-reino a gosto'
    ],
    'nutrition': {
      'calories': 40,
      'carbs': '2g',
      'protein': '2g',
      'fat': '3g',
      'fiber': '0g'
    },
    'instructions': [
      'No liquidificador, bata todos os ingredientes até obter uma mistura homogênea.',
      'Ajuste o sal e a pimenta a gosto.',
      'Sirva em seguida ou conserve na geladeira.'
    ]
  },
  {
    'name': 'Patê de Brócolis',
    'type': 'sauce',
    'ingredients': [
      '1 xícara (chá) de brócolis cozido',
      '1/2 xícara (chá) de iogurte natural desnatado',
      '1 dente de alho picado',
      'Sal a gosto',
      'Pimenta-do-reino a gosto'
    ],
    'nutrition': {
      'calories': 30,
      'carbs': '2g',
      'protein': '2g',
      'fat': '1g',
      'fiber': '1g'
    },
    'instructions': [
      'No liquidificador, bata todos os ingredientes até obter uma mistura homogênea.',
      'Ajuste o sal e a pimenta a gosto.',
      'Sirva em seguida ou conserve na geladeira.'
    ]
  },
  {
    'name': 'Patê de Peito de Peru',
    'type': 'sauce',
    'ingredients': [
      '200g de peito de peru fatiado',
      '1/2 xícara (chá) de cream cheese light',
      '1 colher (sopa) de suco de limão',
      '1 dente de alho picado',
      'Sal a gosto',
      'Pimenta-do-reino a gosto'
    ],
    'nutrition': {
      'calories': 70,
      'carbs': '1g',
      'protein': '6g',
      'fat': '4g',
      'fiber': '0g'
    },
    'instructions': [
      'No liquidificador, bata todos os ingredientes até obter uma mistura homogênea.',
      'Ajuste o sal e a pimenta a gosto.',
      'Sirva em seguida ou conserve na geladeira.'
    ]
  },
  {
    'name': 'Patê com Farinha de Berinjela',
    'type': 'sauce',
    'ingredients': [
      '1 xícara (chá) de berinjela assada e amassada',
      '1/2 xícara (chá) de iogurte natural desnatado',
      '1 colher (sopa) de suco de limão',
      '1 dente de alho picado',
      'Sal a gosto',
      'Pimenta-do-reino a gosto'
    ],
    'nutrition': {
      'calories': 30,
      'carbs': '2g',
      'protein': '1g',
      'fat': '1g',
      'fiber': '1g'
    },
    'instructions': [
      'No liquidificador, bata todos os ingredientes até obter uma mistura homogênea.',
      'Ajuste o sal e a pimenta a gosto.',
      'Sirva em seguida ou conserve na geladeira.'
    ]
  },
  {
    'name': 'Patê de Pepino com Cream Cheese',
    'type': 'sauce',
    'ingredients': [
      '1 pepino médio ralado',
      '1/2 xícara (chá) de cream cheese light',
      '1 dente de alho picado',
      'Sal a gosto',
      'Pimenta-do-reino a gosto'
    ],
    'nutrition': {
      'calories': 40,
      'carbs': '1g',
      'protein': '1g',
      'fat': '3g',
      'fiber': '0g'
    },
    'instructions': [
      'No liquidificador, bata todos os ingredientes até obter uma mistura homogênea.',
      'Ajuste o sal e a pimenta a gosto.',
      'Sirva em seguida ou conserve na geladeira.'
    ]
  },
  {
    'name': 'Molho de Maracujá Salgado',
    'type': 'sauce',
    'ingredients': [
      '1 xícara (chá) de suco de maracujá',
      '1/2 xícara (chá) de azeite de oliva extra-virgem',
      '1 dente de alho picado',
      'Sal a gosto',
      'Pimenta-do-reino a gosto'
    ],
    'nutrition': {
      'calories': 45,
      'carbs': '2g',
      'protein': '0g',
      'fat': '4g',
      'fiber': '1g'
    },
    'instructions': [
      'No liquidificador, bata todos os ingredientes até obter uma mistura homogênea.',
      'Ajuste o sal e a pimenta a gosto.',
      'Sirva em seguida ou conserve na geladeira.'
    ]
  },
  {
    'name': 'Requeijão de Castanha de Caju',
    'type': 'sauce',
    'ingredients': [
      '1 xícara (chá) de castanhas de caju cruas e sem sal',
      '1/2 xícara (chá) de água filtrada',
      '2 colheres (sopa) de azeite de oliva extra-virgem',
      'Suco de 1 limão',
      'Sal a gosto'
    ],
    'nutrition': {
      'calories': 60,
      'carbs': '3g',
      'protein': '2g',
      'fat': '5g',
      'fiber': '1g'
    },
    'instructions': [
      'Deixe as castanhas de molho em água por pelo menos 4 horas.',
      'Escorra as castanhas e coloque-as no liquidificador junto com a água filtrada, o azeite de oliva, o suco de limão e o sal.',
      'Bata até obter uma mistura homogênea.',
      'Sirva em seguida ou conserve na geladeira.'
    ]
  },
  {
    'name': 'Molho de Mostarda e Limão',
    'type': 'sauce',
    'ingredients': [
      '1/4 xícara (chá) de mostarda Dijon',
      '1/4 xícara (chá) de suco de limão',
      '1/2 xícara (chá) de azeite de oliva extra-virgem',
      '1 dente de alho picado',
      'Sal a gosto',
      'Pimenta-do-reino a gosto'
    ],
    'nutrition': {
      'calories': 70,
      'carbs': '2g',
      'protein': '0g',
      'fat': '7g',
      'fiber': '0g'
    },
    'instructions': [
      'Em um recipiente, misture a mostarda, o suco de limão, o azeite de oliva e o alho picado.',
      'Bata bem com um garfo ou batedor de arame até obter uma mistura homogênea.',
      'Tempere com sal e pimenta a gosto.',
      'Sirva em seguida ou conserve na geladeira.'
    ]
  }

]
