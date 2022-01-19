export const originals = [
    {
        id: "0f47a263",
        title: "Receita de mim",
        author: "Maria Efigênia",
        creation: "01-19-2022",
        questions: [
            {
                id: "a697dc6b",
                text: "Qual é o seu nome?",
                value: "",
                onChange: "setName",
            },
            {
                id: "5269568d",
                text: "Um fenômeno natural que representa você nesse momento?",
                value: "",
                build: (value) => [`Se você misturar meio quilo de ${value}`],
            },
            {
                id: "6a734985",
                text: "Algo que representa uma alegria para você?",
                value: "",
                build: (value) => [`Meia dúzia de ${value}`],
            },
            {
                id: "3c1ebde2",
                text: "Qual sentimento surge ao lembrar do passado?",
                value: "",
                build: (value) => [`Duas xícaras de ${value}`],
            },
            {
                id: "a1e0621c",
                text: "Um defeito seu?",
                value: "",
                build: (value) => [`03 colheres de sopa de ${value}`],
            },
            {
                id: "c86f8892",
                text: "Uma qualidade sua?",
                value: "",
                build: (value) => [`04 copos de ${value}`],
            },
            {
                id: "0121492d",
                text: "Um dos medos que mais te atormenta?",
                value: "",
                build: (value) => [`02 litros de ${value}`],
            },
            {
                id: "03939f48",
                text: "Um valor que é referência para você?",
                value: "",
                build: (value) => [`03 pitadas de ${value}`],
            },
            {
                id: "d203ff8b",
                text: "O que mais lhe cansa?",
                value: "",
                build: (value) => [`Bater tudo na ${value}`],
            },
            {
                id: "6512deff",
                text: "O que mais lhe impede de desistir?",
                value: "",
                build: (value) => [`Cozinhar em fogo baixo com ${value}`],
            },
            {
                id: "3ddc6269",
                text: "O que melhor representa um sonho seu?",
                value: "",
                build: (value) => [`E refogar bem em ${value}`],
            },
            {
                id: "f3e6c078",
                text: "O que representa seu sucesso daqui a 10 anos?",
                value: "",
                build: (value) => [
                    `Talvez assim, seguindo a receita, entenda em imagens como me sinto...`,
                    `Agora bastar servir numa travessa de ${value}`,
                ],
            },
        ],
    },
    {
        id: "b4c36f3-be5-c7de-7a3b-d84640fe0c",
        title: "Minha história inventada",
        questions: [
            {
                id: "e1a1f21-0f0e-b8eb-d32-83228af2e8",
                text: "Qual é o seu nome?",
                value: "",
                onChange: "setName",
            },
            {
                id: "3b65df3-82b0-5a85-dae0-478f84be4fc2",
                text: "Nesta história sobre você prefere?",
                value: "",
                options: [
                    {
                        id: "42133e3-3aae-4fc-2fd7-21a6b53b7460",
                        text: `Pronomes masculinos`,
                        value: "M",
                    },
                    {
                        id: "152624-65f8-08ae-81a1-77006e7a0b65",
                        text: `Pronomes femininos`,
                        value: "F",
                    },
                ],
                onChange: "setSex",
            },
            {
                id: "715d84-c1ff-bfec-2ac8-1abf47738544",
                text: "Qual super-herói ou super-heroína você seria?",
                value: "",
                build: (value, sex) => [
                    `Se eu fosse ${
                        sex === "M" ? "um super-herói" : "uma super-heroína"
                    }`,
                    `Seria ${sex === "M" ? "o" : "a"} ${value}`,
                ],
            },
            {
                id: "04acd2f-0a78-7aa7-ee13-f270f4be576",
                text: "Qual vilão ou vilã você seria?",
                value: "",
                build: (value, sex) => [
                    `Mas se fosse ${sex === "M" ? "vilão" : "vilã"}`,
                    `Seria tipo ${value}`,
                ],
                breakLine: true,
            },
            {
                id: "cd6e-2b7-abc-3baf-576fe668cc8",
                text: "Qual conto de fadas surge na sua mente agora?",
                value: "",
                build: (value) => [
                    `Se eu vivesse um conto de fadas`,
                    `Viveria a história de ${value}`,
                ],
            },
            {
                id: "6a1588f-b166-85eb-6746-ef687cc6043c",
                text: "Pense num monstro que você temia quando criança, qual seria?",
                value: "",
                build: (value) => [
                    `E se tem um monstro que eu temi`,
                    `Certamente, foi ${value}`,
                ],
                breakLine: true,
            },
            {
                id: "8b8ff68-5e2-00f1-1201-bc668e42fea7",
                text: "E desenhado animado, cite um que lhe marcou",
                value: "",
                build: (value) => [`Cresci assistindo ${value}`],
            },
            {
                id: "2e1abe-18d-6b4a-cf7-f2b3b2f660c",
                text: "Uma novela ou série, lembre alguma que foi importante para você.",
                value: "",
                build: (value) => [`E chorei assistindo ${value}`],
            },
            {
                id: "8f5b7c-70ce-62d5-2735-0da7ae38c481",
                text: "Cite um personagem fictício que, a seu ver, é muito estranho.",
                value: "",
                build: (value) => [`Porque quando sou ${value}`],
            },
            {
                id: "5de4a4-fa18-dfdc-14e3-36efdc2a5bc",
                text: "Cite um personagem com o qual você aprendeu algo importante.",
                value: "",
                build: (value) => [`Sou tipo ${value}`],
                breakLine: true,
            },
            {
                id: "81b3f0a-033-4f1-5ec7-fd4b87887505",
                text: "Se a história da sua vida fosse um filme, de que gênero seria? Exemplo: ação, drama, comédia, romance...",
                value: "",
                build: (value) => [
                    `Sabe, minha história, seria um filme de ${value}`,
                ],
            },
            {
                id: "810b011-28a-265e-ad13-3a482065a188",
                text: "Agora pense bem. Não tenha pressa nessa pergunta. Se você fosse um personagem inventado, qual nome você teria? Crie um nome de mentira para você.",
                value: "",
                build: (value) => [
                    ` Quando nasci, deram-me um nome`,
                    `Mas se eu pudesse inventar outro`,
                    `Talvez o mais adequado seria ${value}`,
                ],
            },
        ],
    },

    {
        id: "01b3237-cc16-c1c5-4a06-ef021362563",
        title: "A vida que não cabe em números",
        questions: [
            {
                id: "2548eee-8c8a-0612-5db0-8f23fa35e5c",
                text: "Qual é o seu nome?",
                value: "",
                onChange: "setName",
            },
            {
                id: "20ce74f-eb21-132-573-2cbfcfe1c2b",
                text: "Em uma palavra, o que a pandemia tirou de você?",
                value: "",
                build: (value) => [`Em números não cabem ${value}`],
            },
            {
                id: "613cb4c-f2cb-2d17-c27-f888e53f428",
                text: "Em uma palavra, o que a pandemia tirou de algum conhecido seu e que lhe tocou saber?",
                value: "",
                build: (value) => [
                    `Os gráficos não bastam`,
                    `Para descrever ${value}`,
                ],
            },
            {
                id: "6bddf80-384c-b04b-0d80-7773dcd6105",
                text: "Qual sentimento predomina em você ao falar desse tema?",
                value: "",
                build: (value) => [`Tampouco as manchetes dão conta ${value}`],
                breakLine: true,
            },
            {
                id: "606c5fb-e6f3-056f-7610-ef80c7c75d10",
                text: "Qual notícia mais lhe impactou?",
                value: "",
                build: (value) => [`É difícil acreditar ${value}`],
            },
            {
                id: "2afa63-d315-1610-67eb-c087bd7f5e",
                text: "O que lhe causa revolta em relação à pandemia?",
                value: "",
                build: (value) => [
                    `É impossível aceitar`,
                    `Perante a morte das pessoas ${value}`,
                ],
            },
            {
                id: "e766536-4b21-46cb-ccf0-7875025d31cf",
                text: "Qual sentimento você quer alimentar depois da pandemia?",
                value: "",
                build: (value) => [
                    `Mas o que me resta? Se não lutar`,
                    `E buscar alimentar em mim ${value}`,
                ],
                breakLine: true,
            },
            {
                id: "5d1a2e-15e2-b73d-ab6-183db144aba1",
                text: "O que você vai fazer diferente do que antes, quando tudo isso passar?",
                value: "",
                build: (value) => [`E, tomara, depois disso buscar ${value}`],
            },
            {
                id: "f442c0-ff81-a3c7-7244-dd62afa674e3",
                text: "Em uma frase curta, como você quer que seu país esteja quando isso passar?",
                value: "",
                build: (value) => [
                    `E acreditar que eu ainda possa ser ${value}`,
                ],
            },
            {
                id: "85b8f3a-e0d5-34f5-247-5877a4d7dbb",
                text: "Em uma palavra, como você quer que sua vida seja quando tudo isso passar?",
                value: "",
                build: (value) => [`E ver meu país novamente ${value}`],
            },
        ],
    },
];
