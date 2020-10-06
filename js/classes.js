import Human from "./classes/Human.class";

const macedonian = new Human(20, "man");
const languages = ["macedonian", "albanian", "serbian"];

macedonian.setLanguage(languages);

console.log(macedonian.talk());
