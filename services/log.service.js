import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
  console.log(chalk.bgRed(' ERROR ') + ' ' + error);
};

const printSuccess = (mesage) => {
  console.log(chalk.bgGreen(' SUCCESS ') + ' ' + mesage);
};

const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan(' HELP ')}
    Без параметров - вывод погоды
    -s [CITY] для установки города
    -h для вывода помощи
    -t [API_KEY] для сохранения токена
`
  );
};

const printWeather = (res, icon) => {
  console.log(
    dedent`${chalk.bgYellow(' Weather ')} погода в городе ${res.name}
    ${icon} ${res.weather[0].description}
    Температура ${res.main.temp} (Ощущается как ${res.main.feels_like})
    Влажность ${res.main.humidity}%
    Скорость ветра ${res.wind.speed}
`
  );
};

export { printError, printSuccess, printHelp, printWeather };
