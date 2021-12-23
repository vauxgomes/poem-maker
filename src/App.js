import { useState } from "react";
import uuid from "react-uuid";

import Builder from "./components/Builder";
import { StoryContext } from "./Context/StoryContext";

import "./App.css";
import Poem from "./components/Poem";

function App() {
    const [name, setName] = useState("");
    const [sex, setSex] = useState("M");

    const [stories, setStories] = useState([
        {
            id: uuid(),
            title: "Minha história inventada",
            questions: [
                {
                    id: uuid(),
                    text: "Qual é o seu nome?",
                    value: "",
                    onChange: setName,
                },
                {
                    id: uuid(),
                    text: "Nesta história sobre você prefere?",
                    value: "",
                    options: [
                        { id: uuid(), text: `Pronomes masculinos`, value: "M" },
                        { id: uuid(), text: `Pronomes femininos`, value: "F" },
                    ],
                    onChange: setSex,
                },
                {
                    id: uuid(),
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
                    id: uuid(),
                    text: "Qual vilão ou vilã você seria?",
                    value: "",
                    build: (value, sex) => [
                        `Mas se fosse ${sex === "M" ? "vilão" : "vilã"}`,
                        `Seria tipo ${value}`,
                    ],
                    breakLine: true,
                },
                {
                    id: uuid(),
                    text: "Qual conto de fadas surge na sua mente agora?",
                    value: "",
                    build: (value) => [
                        `Se eu vivesse um conto de fadas`,
                        `Viveria a história de ${value}`,
                    ],
                },
                {
                    id: uuid(),
                    text: "Pense num monstro que você temia quando criança, qual seria?",
                    value: "",
                    build: (value) => [
                        `E se tem um monstro que eu temi`,
                        `Certamente, foi ${value}`,
                    ],
                    breakLine: true,
                },
                {
                    id: uuid(),
                    text: "E desenhado animado, cite um que lhe marcou",
                    value: "",
                    build: (value) => [`Cresci assistindo ${value}`],
                },
                {
                    id: uuid(),
                    text: "Uma novela ou série, lembre alguma que foi importante para você.",
                    value: "",
                    build: (value) => [`E chorei assistindo ${value}`],
                },
                {
                    id: uuid(),
                    text: "Cite um personagem fictício que, a seu ver, é muito estranho.",
                    value: "",
                    build: (value) => [`Porque quando sou ${value}`],
                },
                {
                    id: uuid(),
                    text: "Cite um personagem com o qual você aprendeu algo importante.",
                    value: "",
                    build: (value) => [`Sou tipo ${value}`],
                    breakLine: true,
                },
                {
                    id: uuid(),
                    text: "Se a história da sua vida fosse um filme, de que gênero seria? Exemplo: ação, drama, comédia, romance...",
                    value: "",
                    build: (value) => [
                        `Sabe, minha história, seria um filme de ${value}`,
                    ],
                },
                {
                    id: uuid(),
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
            id: uuid(),
            title: "A vida que não cabe em números",
            questions: [
                {
                    id: uuid(),
                    text: "Qual é o seu nome?",
                    value: "",
                    onChange: setName,
                },
                {
                    id: uuid(),
                    text: "Em uma palavra, o que a pandemia tirou de você?",
                    value: "",
                    build: (value) => [`Em números não cabem ${value}`],
                },
                {
                    id: uuid(),
                    text: "Em uma palavra, o que a pandemia tirou de algum conhecido seu e que lhe tocou saber?",
                    value: "",
                    build: (value) => [
                        `Os gráficos não bastam`,
                        `Para descrever ${value}`,
                    ],
                },
                {
                    id: uuid(),
                    text: "Qual sentimento predomina em você ao falar desse tema?",
                    value: "",
                    build: (value) => [
                        `Tampouco as manchetes dão conta ${value}`,
                    ],
                    breakLine: true,
                },
                {
                    id: uuid(),
                    text: "Qual notícia mais lhe impactou?",
                    value: "",
                    build: (value) => [`É difícil acreditar ${value}`],
                },
                {
                    id: uuid(),
                    text: "O que lhe causa revolta em relação à pandemia?",
                    value: "",
                    build: (value) => [
                        `É impossível aceitar`,
                        `Perante a morte das pessoas ${value}`,
                    ],
                },
                {
                    id: uuid(),
                    text: "Qual sentimento você quer alimentar depois da pandemia?",
                    value: "",
                    build: (value) => [
                        `Mas o que me resta? Se não lutar`,
                        `E buscar alimentar em mim ${value}`,
                    ],
                    breakLine: true,
                },
                {
                    id: uuid(),
                    text: "O que você vai fazer diferente do que antes, quando tudo isso passar?",
                    value: "",
                    build: (value) => [
                        `E, tomara, depois disso buscar ${value}`,
                    ],
                },
                {
                    id: uuid(),
                    text: "Em uma frase curta, como você quer que seu país esteja quando isso passar?",
                    value: "",
                    build: (value) => [
                        `E acreditar que eu ainda possa ser ${value}`,
                    ],
                },
                {
                    id: uuid(),
                    text: "Em uma palavra, como você quer que sua vida seja quando tudo isso passar?",
                    value: "",
                    build: (value) => [`E ver meu país novamente ${value}`],
                },
            ],
        },
    ]);

    const [story, setStory] = useState(stories[0]);
    const [poem, setPoem] = useState(null);

    function handleChange(questionId, value) {
        let stories_ = [...stories];
        let storyIndex = stories_.findIndex((story_) => story_.id === story.id);

        let questionIndex = stories_[storyIndex].questions.findIndex(
            (question) => question.id === questionId
        );

        let question = stories_[storyIndex].questions[questionIndex];
        question.value = value;

        if (question.hasOwnProperty("onChange")) {
            question.onChange(value);
        }

        setStories(stories_);
    }

    function handleBuildPoem() {
        const questions = story.questions;
        const verses = [];

        if (questions.some((question) => question.value === "")) {
            return;
        }

        questions.forEach((question) => {
            if (question.hasOwnProperty("build")) {
                verses.push(...question?.build(question.value, sex));
                if (question.breakLine) {
                    verses.push("");
                }
            }
        });

        setPoem({
            title: story.title,
            author: name,
            verses,
        });
    }

    function handleChangeStory(id) {
        let idx = stories.findIndex((story) => story.id === id);
        setStory(stories[idx]);
    }

    return (
        <div className="App">
            {/* HEADER */}
            <header className="header noprint">
                <div className="header-container">
                    <div className="logo">
                        <span className="material-icons"> history_edu </span>
                        <span>Poemador</span>
                    </div>

                    <div className="menu">
                        <select
                            value={story.id}
                            onChange={(e) => handleChangeStory(e.target.value)}
                        >
                            {stories.map((story) => (
                                <option value={story.id} key={story.id}>
                                    {story.title}
                                </option>
                            ))}
                        </select>

                        <button onClick={handleBuildPoem}>
                            <span className="material-icons">play_arrow</span>
                        </button>
                    </div>
                </div>
            </header>

            <StoryContext.Provider value={{ poem, story, handleChange }}>
                <div className="container content">
                    {/* BUILDER */}
                    <Builder />
                    <Poem />
                </div>
            </StoryContext.Provider>
        </div>
    );
}

export default App;
