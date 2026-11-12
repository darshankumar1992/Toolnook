import type { ContentDictionary } from "../../types";

const content: ContentDictionary = {
  categories: {
    "image-tools": {
      name: "Ferramentas de imagem",
      shortName: "Imagem",
      tagline: "Comprimir e redimensionar",
      description:
        "Ferramentas de imagem grátis que funcionam no navegador. Suas fotos são processadas no seu próprio dispositivo e nunca são enviadas para um servidor.",
    },
    "pdf-tools": {
      name: "Ferramentas de PDF",
      shortName: "PDF",
      tagline: "Juntar e converter",
      description:
        "Trabalhe com arquivos PDF sem instalar nenhum programa. Os arquivos ficam no seu dispositivo, e seus documentos privados continuam privados.",
    },
    calculators: {
      name: "Calculadoras",
      shortName: "Calculadoras",
      tagline: "Calcule de tudo",
      description:
        "Calculadoras rápidas e precisas para financiamentos, finanças e contas do dia a dia, com todos os detalhes por trás de cada resultado.",
    },
    "text-tools": {
      name: "Ferramentas de texto",
      shortName: "Texto",
      tagline: "Edite e formate textos",
      description:
        "Conte, limpe e transforme textos na hora. Útil para estudantes, redatores, blogueiros e qualquer pessoa com limite de palavras.",
    },
    "developer-tools": {
      name: "Ferramentas para desenvolvedores",
      shortName: "Dev",
      tagline: "JSON e codificação",
      description:
        "Utilitários do dia a dia para desenvolvedores: formate, valide e converta dados sem colar nada em um servidor remoto.",
    },
    "seo-tools": {
      name: "Ferramentas de SEO",
      shortName: "SEO",
      tagline: "Palavras-chave e snippets",
      description:
        "Encontre ideias de palavras-chave e veja como suas páginas aparecem nos resultados de busca, com ferramentas feitas para blogueiros e donos de sites.",
    },
  },

  tools: {
    "image-compressor": {
      name: "Comprimir imagem",
      summary: "Reduza imagens JPG, PNG e WebP sem perda visível de qualidade.",
      seoTitle: "Comprimir imagem – Diminuir tamanho de foto online grátis",
      seoDescription:
        "Comprima imagens JPG, PNG e WebP online e grátis. Diminua o tamanho, redimensione e converta no navegador. Suas fotos nunca são enviadas.",
      keywords: [
        "comprimir imagem",
        "diminuir tamanho de imagem",
        "reduzir tamanho de foto",
        "compressor de imagem",
        "comprimir jpg",
        "comprimir png",
        "redimensionar imagem",
        "diminuir kb de foto",
      ],
      howTo: [
        "Clique em “Escolha imagens” ou arraste seus arquivos JPG, PNG ou WebP para a caixa. Você pode adicionar vários de uma vez.",
        "Ajuste o controle de qualidade. 70% é um bom ponto de partida para fotos, e o novo tamanho do arquivo é atualizado automaticamente.",
        "Se quiser, escolha outro formato de saída ou defina uma largura máxima para reduzir fotos grandes.",
        "Baixe cada imagem separadamente ou clique em “Baixar todas”.",
      ],
      content: [
        { h2: "Por que comprimir imagens?" },
        {
          p: "Uma foto tirada com o celular costuma ter de 3 a 5 MB. É muito mais do que o necessário para um site, um anexo de e-mail ou um formulário online, em que 100 a 300 KB geralmente bastam. Imagens menores são enviadas mais rápido, carregam mais rápido para quem visita o seu site e ajudam você a respeitar o limite de tamanho em sites de concursos, do ENEM, do gov.br e de vagas de emprego.",
        },
        { h2: "Qual formato de saída escolher?" },
        {
          ul: [
            "**JPG** funciona em qualquer lugar e é a melhor escolha para fotografias.",
            "**WebP** é um formato moderno que costuma ser 25–35% menor que o JPG com a mesma qualidade visual. Todos os navegadores modernos são compatíveis, mas alguns aplicativos e formulários de envio mais antigos não aceitam.",
            "**PNG** é um formato sem perdas. Use para capturas de tela, logos e gráficos com transparência. Para fotos, ele gera arquivos bem maiores.",
          ],
        },
        { h2: "Privacidade em primeiro lugar" },
        {
          p: "Muitos compressores online enviam suas fotos para os servidores deles. Este não. Ele usa o mecanismo de imagens do próprio navegador, então seus arquivos nunca saem do seu dispositivo, e a ferramenta continua funcionando mesmo com internet lenta depois que a página carrega.",
        },
      ],
      faqs: [
        {
          q: "Comprimir a imagem reduz a qualidade?",
          a: "A compressão em JPG e WebP é com perdas, ou seja, alguns detalhes são removidos para economizar espaço. Com qualidade entre 60% e 80%, a diferença costuma ser invisível na tela. O arquivo original nunca é alterado, então você pode tentar de novo com uma qualidade maior.",
        },
        {
          q: "Como diminuir uma imagem para 100 KB ou 200 KB?",
          a: "Diminua o controle de qualidade e acompanhe o novo tamanho do arquivo. Se a imagem ainda estiver grande demais, defina uma largura máxima, como 1200 pixels. Fotos grandes de celular geralmente ficam abaixo de 200 KB quando redimensionadas para cerca de 1200 a 1600 pixels de largura.",
        },
        {
          q: "Minhas imagens são enviadas para algum servidor?",
          a: "Não. Toda a compressão acontece no seu navegador, no seu próprio dispositivo. Suas imagens nunca são enviadas para nós nem para ninguém, o que torna a ferramenta segura para RG, CNH, documentos e fotos pessoais.",
        },
        {
          q: "Por que meu PNG quase não diminuiu?",
          a: "O PNG é um formato sem perdas, então a configuração de qualidade não tem efeito sobre ele. Para deixar um PNG bem menor, converta para WebP ou JPG, ou reduza a largura. Use PNG para logos, ícones e capturas de tela que precisam de bordas nítidas ou transparência.",
        },
        {
          q: "Existe limite de quantas imagens posso comprimir?",
          a: "Não definimos nenhum limite. Você pode adicionar quantas imagens quiser. Imagens muito grandes (acima de 50 megapixels) podem demorar em celulares mais antigos, porque o processamento acontece no seu dispositivo.",
        },
      ],
    },

    "merge-pdf": {
      name: "Juntar PDF",
      summary: "Combine vários arquivos PDF em um só documento, na ordem que quiser.",
      seoTitle: "Juntar PDF online grátis – Unir arquivos PDF em um só",
      seoDescription:
        "Junte vários arquivos PDF em um só em segundos e escolha a ordem antes de unir. Grátis, sem cadastro, e seus PDFs nunca saem do seu dispositivo.",
      keywords: [
        "juntar pdf",
        "unir pdf",
        "juntar arquivos pdf",
        "mesclar pdf",
        "combinar pdf",
        "juntar pdf online",
        "juntar pdf grátis",
        "unir pdf em um só",
      ],
      howTo: [
        "Clique em “Escolha arquivos PDF” ou arraste dois ou mais PDFs para a caixa.",
        "Organize os arquivos na ordem que preferir usando as setas para cima e para baixo.",
        "Clique em “Juntar e baixar”. O arquivo combinado é salvo como merged.pdf.",
      ],
      content: [
        { h2: "Quando é útil juntar PDFs?" },
        {
          ul: [
            "Enviar vários documentos (RG, CPF, diplomas, histórico escolar) para um site de inscrição, matrícula ou concurso que aceita apenas um arquivo.",
            "Reunir páginas digitalizadas em um único documento.",
            "Mandar um único arquivo organizado com notas fiscais ou recibos para o seu contador.",
            "Unir capítulos ou relatórios em um só PDF para facilitar a leitura e a impressão.",
          ],
        },
        { h2: "O que é mantido no arquivo final?" },
        {
          p: "O conteúdo, o tamanho e a orientação de cada página são copiados exatamente. Recursos interativos, como campos de formulário, marcadores e o sumário dos arquivos originais, podem não ser transferidos para o documento final.",
        },
        { h2: "Privacidade em primeiro lugar" },
        {
          p: "A maioria dos sites de PDF envia seus documentos para os servidores deles para processá-los. Esta ferramenta usa a biblioteca de código aberto pdf-lib para fazer tudo no seu navegador, então seus arquivos nunca saem do seu dispositivo.",
        },
      ],
      faqs: [
        {
          q: "Existe limite de quantidade ou de tamanho dos PDFs?",
          a: "Não definimos limite. Como a junção acontece no seu dispositivo, o limite prático depende da memória dele. Documentos com centenas de páginas são unidos sem problemas na maioria dos computadores e celulares modernos.",
        },
        {
          q: "Posso juntar PDFs protegidos por senha?",
          a: "Não. PDFs criptografados só podem ser combinados depois que a proteção por senha for removida. Abra o arquivo em um leitor de PDF com a senha, salve uma cópia sem proteção e junte essa cópia.",
        },
        {
          q: "Juntar PDFs reduz a qualidade?",
          a: "Não. As páginas são copiadas exatamente como estão, sem recomprimir textos ou imagens, então o PDF final fica idêntico aos originais.",
        },
        {
          q: "Posso juntar PDFs pelo celular?",
          a: "Sim. A ferramenta funciona no Chrome, no Safari, no Firefox e em outros navegadores modernos para celular. Escolha os arquivos no armazenamento do celular, organize a ordem e toque em Juntar e baixar.",
        },
        {
          q: "Meus arquivos PDF são enviados para algum lugar?",
          a: "Não. Seus PDFs são lidos e combinados dentro do navegador e nunca são enviados para um servidor. Isso mantém privados documentos sensíveis, como RG, CPF, contratos e extratos bancários.",
        },
      ],
    },

    "emi-calculator": {
      name: "Calculadora de financiamento",
      summary: "Simule a parcela mensal, os juros e o saldo devedor do seu empréstimo.",
      seoTitle: "Calculadora de financiamento – Simulador de parcelas",
      seoDescription:
        "Simule a parcela mensal, o total de juros e o valor total do seu financiamento imobiliário, de veículo ou empréstimo pessoal, com tabela ano a ano.",
      keywords: [
        "calculadora de financiamento",
        "simulador de financiamento",
        "simulador de parcelas",
        "calculadora de empréstimo",
        "simulador de empréstimo",
        "tabela price",
        "calcular parcela de financiamento",
        "simulador de financiamento imobiliário",
      ],
      howTo: [
        "Digite o valor do empréstimo e escolha a moeda.",
        "Informe a taxa de juros anual oferecida pelo banco.",
        "Informe o prazo em anos ou meses.",
        "A parcela mensal, o total de juros e o total pago são atualizados na hora, junto com uma tabela ano a ano.",
      ],
      content: [
        { h2: "O que é a parcela fixa (Tabela Price)?" },
        {
          p: "Na **Tabela Price** (ou Sistema Francês de Amortização), você paga ao banco o mesmo valor todo mês até quitar o empréstimo: é a **parcela fixa**. Cada parcela tem duas partes: os juros sobre o saldo devedor e a amortização, que é a parte que abate a dívida. Nos primeiros anos, a maior parte da parcela é de juros; nos últimos, a maior parte é amortização. A Tabela Price é comum em empréstimos pessoais e financiamentos de veículos. Em financiamentos imobiliários, muitos bancos também usam o SAC, em que as parcelas começam mais altas e vão diminuindo.",
        },
        { h2: "A fórmula da parcela" },
        {
          p: "**Parcela = P × r × (1 + r)ⁿ ÷ ((1 + r)ⁿ − 1)**, em que P é o valor do empréstimo, r é a taxa de juros mensal (taxa anual ÷ 12 ÷ 100) e n é o número de parcelas mensais.",
        },
        {
          p: "Por exemplo, um empréstimo de R$ 300.000 a 10% ao ano por 30 anos dá r = 0,00833 e n = 360, então a parcela mensal fica em cerca de **R$ 2.633**. Em 30 anos, você pagaria cerca de R$ 947.777, dos quais aproximadamente R$ 647.777 são juros.",
        },
        { h2: "Como pagar menos juros" },
        {
          ul: [
            "**Escolha um prazo menor, se couber no seu orçamento.** Um prazo maior diminui a parcela, mas aumenta muito o total de juros.",
            "**Amortize quando puder.** Mesmo pagamentos extras ocasionais no início do contrato reduzem bastante o total de juros.",
            "**Compare bancos.** Uma diferença de apenas 0,5% ao ano na taxa pesa muito ao longo de um financiamento imobiliário.",
            "**Dê uma entrada maior** para reduzir o valor financiado.",
          ],
        },
        {
          p: "**Observação:** os resultados são estimativas para planejamento. Os valores exatos do seu banco podem ser um pouco diferentes por causa de tarifas, seguros, IOF, arredondamentos e mudanças na taxa. Isto não é aconselhamento financeiro.",
        },
      ],
      faqs: [
        {
          q: "Posso usar para financiamento imobiliário, de veículo e empréstimo pessoal?",
          a: "Sim. A calculadora funciona para qualquer empréstimo pela Tabela Price, com juros sobre o saldo devedor, como financiamentos de veículos, empréstimos pessoais, consignados, crédito estudantil e financiamentos imobiliários com parcelas fixas. Se o seu contrato usa o SAC, as parcelas começam mais altas e diminuem com o tempo.",
        },
        {
          q: "Funciona para taxa variável ou contratos corrigidos pela TR ou pelo IPCA?",
          a: "O cálculo considera que a taxa fica igual durante todo o prazo. Se o seu contrato tem taxa variável ou correção monetária (como TR ou IPCA), refaça a simulação com a taxa e o saldo atualizados sempre que houver mudança.",
        },
        {
          q: "A parcela inclui seguros, tarifas ou IOF?",
          a: "Não. O resultado considera apenas amortização e juros. Seguros, tarifas, IOF e outros encargos são cobrados à parte e dependem do banco. Para comparar propostas, peça sempre o CET (Custo Efetivo Total).",
        },
        {
          q: "O que acontece se eu antecipar parte do pagamento?",
          a: "Uma amortização extraordinária reduz o saldo devedor, então você passa a pagar menos juros daí em diante. Normalmente dá para escolher entre reduzir o prazo ou o valor da parcela, e reduzir o prazo costuma gerar mais economia. Pelo Código de Defesa do Consumidor, você tem direito à redução proporcional dos juros ao antecipar o pagamento.",
        },
        {
          q: "Por que, no início, a maior parte da parcela vai para os juros?",
          a: "Os juros são cobrados sobre o saldo devedor, que é maior no começo do contrato. À medida que você amortiza a dívida, a parte de juros de cada parcela diminui e a parte de amortização aumenta. Você pode ver isso na tabela anual acima.",
        },
      ],
    },

    "word-counter": {
      name: "Contador de palavras",
      summary: "Conte palavras, caracteres, frases e tempo de leitura enquanto digita.",
      seoTitle: "Contador de palavras e caracteres online grátis",
      seoDescription:
        "Contador de palavras online grátis: conte palavras, caracteres, frases e parágrafos e veja o tempo de leitura. Funciona com textos em qualquer idioma.",
      keywords: [
        "contador de palavras",
        "contador de caracteres",
        "contar palavras",
        "contar caracteres",
        "contador de letras",
        "contador de palavras online",
        "tempo de leitura",
      ],
      howTo: [
        "Digite na caixa ou cole o seu texto.",
        "A contagem de palavras, caracteres, frases e parágrafos é atualizada na hora, enquanto você digita.",
        "Confira o tempo estimado de leitura e de fala e veja quais palavras-chave você mais repete.",
        "Use “Copiar texto” para copiar o que escreveu ou “Limpar” para começar de novo.",
      ],
      content: [
        { h2: "O que este contador de palavras mede" },
        {
          ul: [
            "**Palavras e caracteres**, com e sem espaços.",
            "**Frases e parágrafos**: cada linha que não está vazia conta como um parágrafo.",
            "**Tempo de leitura e de fala**, útil para posts de blog, discursos e apresentações.",
            "**Densidade de palavras-chave**, que mostra quantas vezes você repete palavras importantes, para evitar exageros.",
          ],
        },
        { h2: "Limites comuns de palavras e caracteres" },
        {
          ul: [
            "Post no X (Twitter): 280 caracteres",
            "Meta description para SEO: cerca de 155–160 caracteres",
            "Legenda do Instagram: 2.200 caracteres",
            "Post no LinkedIn: 3.000 caracteres",
            "Redação do ENEM: no máximo 30 linhas",
          ],
        },
        { h2: "Feito para todos os idiomas" },
        {
          p: "Muitos contadores simples separam o texto apenas pelos espaços, o que dá resultados errados em vários idiomas. Esta ferramenta usa a segmentação de texto por idioma integrada aos navegadores modernos, então a contagem é precisa, seja em português, inglês, árabe, chinês ou japonês.",
        },
      ],
      faqs: [
        {
          q: "Como o contador conta as palavras?",
          a: "Ele usa a segmentação de texto do próprio navegador, que reconhece cada idioma: a mesma tecnologia usada para selecionar uma palavra com dois cliques. Números contam como palavras. Palavras com hífen, como “guarda-chuva”, contam como duas palavras, como acontece em vários editores de texto.",
        },
        {
          q: "Os espaços contam como caracteres?",
          a: "O número principal de Caracteres inclui espaços e quebras de linha. O número abaixo da caixa de texto mostra a contagem sem espaços, que alguns formulários e trabalhos pedem.",
        },
        {
          q: "Como o tempo de leitura é calculado?",
          a: "O tempo de leitura considera uma velocidade média de leitura silenciosa de 238 palavras por minuto para adultos. O tempo de fala considera um ritmo confortável de apresentação, de 140 palavras por minuto.",
        },
        {
          q: "Meu texto é salvo ou enviado para algum lugar?",
          a: "Não. Seu texto fica no seu navegador e nunca é enviado. Ele também não é salvo, então ele é apagado quando você atualiza a página. Copie o que quiser guardar.",
        },
        {
          q: "Funciona com outros idiomas além do português?",
          a: "Sim. Como usa segmentação por idioma, ele conta palavras e caracteres corretamente em português, espanhol, inglês, árabe, russo e muitos outros idiomas, inclusive nos que são escritos sem espaços, como chinês e japonês.",
        },
      ],
    },

    "json-formatter": {
      name: "Formatador JSON",
      summary: "Formate, valide e minifique JSON com a localização exata dos erros.",
      seoTitle: "Formatador JSON online – Validar, formatar e minificar",
      seoDescription:
        "Formate, valide e minifique JSON online. Encontre erros de sintaxe por linha e coluna e ordene as chaves. Seus dados ficam no seu navegador.",
      keywords: [
        "formatador json",
        "formatar json",
        "validador json",
        "validar json online",
        "json formatter",
        "json beautify",
        "minificar json",
        "json online",
      ],
      howTo: [
        "Cole seu JSON na caixa de entrada ou clique em “Exemplo” para testar.",
        "A ferramenta verifica o JSON enquanto você digita e mostra a linha e a coluna exatas de qualquer erro.",
        "Clique em “Formatar” para organizar o código (escolha 2 espaços, 4 espaços ou tab e, se quiser, ordene as chaves) ou em “Minificar” para compactá-lo.",
        "Copie o resultado ou baixe como arquivo .json.",
      ],
      content: [
        { h2: "O que é um formatador JSON?" },
        {
          p: "JSON (JavaScript Object Notation) é o formato mais usado para trocar dados entre aplicativos e APIs. Para economizar espaço, ele costuma ser enviado em uma única linha longa, difícil de ler. Um formatador JSON adiciona indentação e quebras de linha para deixar a estrutura clara, e um validador confere se a sintaxe está correta.",
        },
        { h2: "Erros comuns de JSON e como corrigir" },
        {
          ul: [
            "**Vírgulas sobrando:** remova a vírgula depois do último item de um objeto ou array.",
            "**Aspas simples:** troque `'text'` por `\"text\"`.",
            "**Chaves sem aspas:** escreva `{\"name\": 1}`, e não `{name: 1}`.",
            "**Comentários:** JSON não aceita comentários `//` nem `/* */`.",
            "**Vírgulas faltando** entre os itens, muitas vezes depois de copiar e colar.",
          ],
        },
        { h2: "Seus dados continuam privados" },
        {
          p: "Respostas de APIs e arquivos de configuração costumam conter tokens de acesso, e-mails ou outros dados sensíveis. Muitos formatadores online enviam o que você cola para um servidor. Este nunca faz isso: todo o processamento acontece no seu navegador.",
        },
      ],
      faqs: [
        {
          q: "Qual é a diferença entre formatar e minificar JSON?",
          a: "Formatar (também chamado de embelezar ou pretty print) adiciona quebras de linha e indentação para que o JSON fique fácil de ler. Minificar remove todos os espaços desnecessários para deixar os dados o menor possível para envio pela rede.",
        },
        {
          q: "Por que meu JSON é inválido se funciona em JavaScript?",
          a: "Os objetos literais do JavaScript são mais flexíveis que o JSON. O JSON exige aspas duplas em todas as chaves e strings e não permite vírgulas sobrando, comentários, aspas simples nem valores como undefined e NaN.",
        },
        {
          q: "A ferramenta aguenta arquivos JSON grandes?",
          a: "Sim. Arquivos de vários megabytes são formatados em bem menos de um segundo em um computador comum, porque tudo roda localmente no seu navegador, sem tempo de upload.",
        },
        {
          q: "Números muito grandes são mantidos exatamente?",
          a: "Inteiros maiores que 9.007.199.254.740.991 não podem ser representados com exatidão em JavaScript, então podem ser arredondados ao formatar. Se você trabalha com IDs muito grandes, guarde-os como strings no JSON.",
        },
        {
          q: "Meu JSON é enviado para um servidor?",
          a: "Não. A leitura, a validação e a formatação acontecem no seu navegador. Por isso, é seguro colar respostas de APIs que contêm tokens, chaves ou dados pessoais.",
        },
      ],
    },

    "meta-tag-checker": {
      name: "Verificador de meta title e description",
      summary: "Confira o tamanho do title e da description com prévia do snippet.",
      seoTitle: "Verificador de meta title e description – Simulador SERP",
      seoDescription:
        "Confira o tamanho do meta title e da meta description em caracteres e pixels, veja como sua página pode aparecer no Google e copie as tags HTML.",
      keywords: [
        "verificador de meta title",
        "tamanho da meta description",
        "simulador de serp",
        "tamanho do title seo",
        "prévia de snippet do google",
        "contador de caracteres meta description",
        "meta tags seo",
      ],
      howTo: [
        "Digite ou cole o título da página na caixa Meta title.",
        "Adicione a meta description e, se quiser, a URL da página.",
        "Acompanhe a contagem de caracteres e pixels e a prévia ao vivo. O ideal é ver “Tamanho ideal” nos dois campos.",
        "Clique em “Copiar código” e cole as tags na seção <head> da sua página.",
      ],
      content: [
        { h2: "Por que a largura em pixels importa" },
        {
          p: "Os buscadores cortam títulos e descrições pela largura na tela, e não pela quantidade de caracteres. Por isso este verificador mede as duas coisas: cerca de 580 pixels para títulos (geralmente 50–60 caracteres) e cerca de 920 pixels para descrições no desktop (geralmente 150–160 caracteres).",
        },
        { h2: "Dicas para escrever um meta title melhor" },
        {
          ul: [
            "Coloque a palavra-chave principal perto do começo.",
            "Dê a cada página um título único, que corresponda ao que as pessoas estão procurando.",
            "Adicione o nome da sua marca no final, separado por um traço ou uma barra vertical.",
            "Evite TUDO EM MAIÚSCULAS e não repita palavras-chave em excesso.",
          ],
        },
        { h2: "Dicas para escrever uma meta description melhor" },
        {
          ul: [
            "Resuma o valor da página em uma ou duas frases.",
            "Inclua a palavra-chave de forma natural. Os buscadores costumam destacar as palavras que correspondem à pesquisa.",
            "Termine com uma chamada para ação clara, como “Teste grátis” ou “Veja o guia completo”.",
          ],
        },
      ],
      faqs: [
        {
          q: "Qual é o tamanho ideal do meta title?",
          a: "Procure ficar entre 50 e 60 caracteres, ou abaixo de cerca de 580 pixels de largura. Títulos maiores que isso geralmente são cortados com reticências nos resultados de busca no desktop.",
        },
        {
          q: "Qual é o tamanho ideal da meta description?",
          a: "Algo entre 120 e 160 caracteres funciona bem. Descrições mais curtas podem não explicar bem a página, e as mais longas geralmente são cortadas.",
        },
        {
          q: "A meta description influencia o ranqueamento?",
          a: "O Google já afirmou que a meta description não é um fator direto de ranqueamento. Mesmo assim, ela é importante, porque uma descrição clara e relevante pode convencer mais pessoas a clicar no seu resultado.",
        },
        {
          q: "Por que o Google mostra um título ou uma descrição diferente da minha?",
          a: "Os buscadores às vezes reescrevem títulos e descrições para combinar melhor com a pesquisa de cada pessoa, usando outros trechos da sua página. Escrever tags precisas e específicas aumenta as chances de que as suas sejam usadas.",
        },
        {
          q: "Por que medir pixels em vez de caracteres?",
          a: "Os resultados de busca são cortados de acordo com o espaço que o texto ocupa, e não com o número de letras. Um título cheio de letras largas, como W e M, é cortado antes de um com letras estreitas, como i e l.",
        },
      ],
    },

    "keyword-generator": {
      name: "Gerador de palavras-chave",
      summary: "Centenas de ideias de palavras-chave para SEO, agrupadas por intenção.",
      seoTitle: "Gerador de palavras-chave grátis – Ideias para SEO",
      seoDescription:
        "Gere centenas de ideias de palavras-chave a partir de uma só: perguntas, cauda longa, palavras de compra e comparações em 7 idiomas. Grátis e sem cadastro.",
      keywords: [
        "gerador de palavras-chave",
        "ideias de palavras-chave",
        "ferramenta de palavras-chave",
        "palavras-chave de cauda longa",
        "palavras-chave seo",
        "pesquisa de palavras-chave",
        "gerador de keywords",
      ],
      howTo: [
        "Digite uma palavra-chave ou tema, como “financiamento imobiliário” ou “contador de palavras”. Separe várias palavras-chave com vírgulas.",
        "Escolha o idioma das ideias de palavras-chave.",
        "Navegue pelas ideias, agrupadas em perguntas, frases populares, ideias de cauda longa, palavras de compra e comparações.",
        "Filtre a lista, copie um grupo ou baixe tudo como arquivo CSV para usar na sua planilha.",
      ],
      content: [
        { h2: "O que é um gerador de palavras-chave?" },
        {
          p: "Um gerador de palavras-chave transforma uma palavra inicial em várias frases de busca relacionadas. Ele ajuda você a descobrir o que as pessoas podem digitar no Google, para planejar posts de blog, páginas de produto e perguntas frequentes com base em dúvidas reais, sem precisar adivinhar.",
        },
        { h2: "Entendendo a intenção de busca" },
        {
          ul: [
            "**Informacional:** a pessoa quer aprender algo, por exemplo “como funciona o financiamento imobiliário”. Responda com guias e perguntas frequentes.",
            "**Comercial:** a pessoa está comparando opções, por exemplo “melhor financiamento imobiliário” ou “financiamento ou consórcio”. Responda com análises e comparativos.",
            "**Transacional:** a pessoa está pronta para agir, por exemplo “simular financiamento imobiliário” ou “contratar”. Responda com páginas de produto, de preços ou de cadastro.",
          ],
        },
        { h2: "Como escolher as palavras-chave certas" },
        {
          ul: [
            "**Comece pelas ideias de cauda longa.** Frases mais longas e específicas têm menos concorrência e são mais fáceis de ranquear para um site novo.",
            "**Confira o volume de busca** das suas ideias favoritas no Planejador de palavras-chave do Google (grátis com uma conta do Google Ads) ou no Google Search Console, quando o seu site já tiver tráfego.",
            "**Veja os resultados atuais** no Google para cada palavra-chave. Se grandes marcas ocupam a primeira página, escolha uma frase mais específica.",
            "**Escreva uma página para cada tema principal** e use palavras-chave relacionadas de forma natural nos títulos e no texto.",
          ],
        },
      ],
      faqs: [
        {
          q: "Esta ferramenta mostra o volume de busca?",
          a: "Não. Ela gera ideias de palavras-chave a partir de padrões de busca comprovados, mas os dados de volume vêm de bancos de dados pagos. Confira o volume das suas melhores ideias de graça no Planejador de palavras-chave do Google ou no Google Search Console.",
        },
        {
          q: "Qual é a diferença para o Ahrefs ou o Semrush?",
          a: "Ferramentas pagas como Ahrefs e Semrush combinam ideias de palavras-chave com dados próprios de volume de busca e dificuldade. Esta ferramenta foca em gerar ideias de forma rápida e gratuita, que é o primeiro passo da pesquisa de palavras-chave.",
        },
        {
          q: "Posso gerar palavras-chave em outros idiomas?",
          a: "Sim. Escolha o idioma e as ideias são criadas a partir de frases naturais em português, inglês, espanhol, francês, alemão, italiano ou holandês.",
        },
        {
          q: "O que são palavras-chave de cauda longa?",
          a: "São frases mais longas e específicas, como “contador de palavras para estudantes”. Cada uma é pesquisada menos vezes, mas elas são mais fáceis de ranquear e geralmente trazem visitantes que sabem exatamente o que querem.",
        },
        {
          q: "É grátis?",
          a: "Sim. O gerador de palavras-chave é totalmente grátis, não exige conta e não tem limite diário. Ele funciona no seu navegador, então suas palavras-chave não são enviadas para nenhum servidor.",
        },
      ],
    },
  },

  keywordTemplates: {
    questions: [
      "o que é {k}",
      "como funciona {k}",
      "como usar {k}",
      "como escolher {k}",
      "quanto custa {k}",
      "para que serve {k}",
      "por que usar {k}",
      "{k} é bom",
      "{k} é confiável",
      "{k} é grátis",
      "{k} vale a pena",
      "qual {k} é melhor",
      "onde encontrar {k}",
      "quando usar {k}",
      "quem precisa de {k}",
      "como conseguir {k} de graça",
    ],
    modifiers: [
      "melhor {k}",
      "{k} grátis",
      "{k} online",
      "{k} online grátis",
      "melhor {k} grátis",
      "{k} em português",
      "{k} fácil",
      "{k} simples",
      "{k} profissional",
      "ferramenta de {k}",
      "app de {k}",
      "aplicativo de {k}",
      "programa de {k}",
      "site de {k}",
      "{k} {year}",
    ],
    longTail: [
      "{k} para iniciantes",
      "{k} para estudantes",
      "{k} para pequenas empresas",
      "{k} para profissionais",
      "{k} para windows",
      "{k} para mac",
      "{k} para android",
      "{k} para iphone",
      "{k} pelo celular",
      "{k} sem cadastro",
      "{k} sem baixar nada",
      "{k} passo a passo",
      "dicas de {k}",
      "tutorial de {k}",
      "exemplos de {k}",
      "guia completo de {k}",
    ],
    commercial: [
      "comprar {k}",
      "{k} preço",
      "preço de {k}",
      "onde comprar {k}",
      "{k} em promoção",
      "{k} cupom de desconto",
      "{k} custo-benefício",
      "{k} planos e preços",
      "{k} teste grátis",
      "assinatura de {k}",
      "{k} avaliações",
      "{k} reclame aqui",
      "{k} perto de mim",
    ],
    comparisons: [
      "{k} alternativas",
      "{k} alternativas grátis",
      "{k} similares",
      "{k} concorrentes",
      "comparativo de {k}",
      "{k} comparativo {year}",
      "{k} prós e contras",
      "{k} vantagens e desvantagens",
      "versão grátis ou paga de {k}",
      "melhores opções de {k}",
      "ranking de {k}",
      "{k} análise {year}",
    ],
  },
};

export default content;
