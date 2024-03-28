// console.log(process.env);


const { SHELL, TERM, PROMPT, USERNAME } = process.env;

// console.table({ SHELL, TERM, PROMPT, USERNAME });

const characters = ['Batman', 'Superman', 'Robin', 'Flash'];

const [, , , Flash] = characters;

// console.log(Flash);