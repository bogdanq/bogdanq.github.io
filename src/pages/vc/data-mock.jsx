import { Tag } from "antd";

export const skils = {
  js: "JavaScript (ES6)",
  ts: "Typescript",
  flow: "Flow",
  react: "React js",
  rn: "React Native",
  rx: "Redux",
  er: "Effector",
  alo: "Apollo",
  gl: "GraphQL",
  nj: "Node js",
  gt: "Git",
  ws: "WebSockets",
  wk: "Webpack",
  sl: "Sql",
  sc: "Styled Components",
  ut: "Unit test",
  pr: "Puppeteer",
  dr: "Docker",
  html: "HTML5",
  ss: "stylus",
  sss: "sass",
  lss: "less",
  pg: "pug",
  gulp: "gulp",
  rp: "Rollup",
  psq: "Postgress",
  antd: "UI kit",
  rq: "React query",
  analitics: "Аналитика",
  next: "Next js",
};

export const works = [
  {
    title: "ПАО Сбербанк (руководитель направления)",
    subTitle: <p>март 2023 - текущее время</p>,
    status: "finish",
    description: (
      <>
        <div>
          <p>
            Разработка двух сервисов для сертификации и ввода/корректировки
            данных
          </p>
          <p>
            Ввел code review, единый стиль для работы с ветками. Занимался как
            написанием кода, так и помощью коллегам. Вместе с бизнес
            требованиями выполнена большая работа по <b>рефакторингу</b> и
            оптимизации производиьельности приложения (в некотрых местах прирост
            от 3-7 раз). Помимо оптимизации кода сделано обновление сборки,
            ускорена подача статики, уменьшен размер бандла (размер ~ 55%,
            скороксть до 2.5 раз, без использования SSG и SSR)
          </p>

          <p>
            Раработка <b>графовой</b> платформы для визуализации данных
          </p>
          <p>
            Участвовал в хакатонах, крайний в командной номинации "Лучший по
            профессии" 5 место из 60 команд
          </p>
          <p>
            Участие в постановке задач, обсуждении аналитики, оценки времени,
            code review
          </p>
        </div>
        {["ts", "react", "rq", "er", "rx", "sc", "ut", "antd", "analitics"].map(
          (skill) => (
            <Tag key={skill}>{skils[skill]}</Tag>
          )
        )}
      </>
    ),
  },
  {
    title: "ООО БК «Олимп» (frontend developer)",
    subTitle: <p>апрель 2021 - март 2023</p>,
    status: "finish",
    description: (
      <>
        <p>
          Разработка <b>конструктора</b> (плюс админки) лендингов (аналог
          Tilda). Придумал модель риализации приложения.
        </p>
        <p>Разработка клиента для работы с аналитикой.</p>
        <p>
          Участие в написании основного сайта и мобильной версии, поддержка и
          создание внутренних проектов (партнерские программы, сервисы для
          работы с различными данными). Создание
          <b> парсера, который парсит различные бк (puppeteer, effector)</b>,
          делает отчет и отправляет в kafka и в graylog. Создание мобильного
          приложения для быстрых ставок.
        </p>

        {["ts", "flow", "react", "rn", "er", "rx", "pr", "sc", "ut"].map(
          (skill) => (
            <Tag key={skill}>{skils[skill]}</Tag>
          )
        )}
      </>
    ),
  },
  {
    title: "ООО АДВ Технологии (fullstack developer)",
    subTitle: <p>июнь 2020 - апрель 2021 (11 месяцев)</p>,
    status: "finish",
    description: (
      <>
        <p>
          Разработка приложения <b>"Супермаркет данных"</b>. В обязанности так
          же входит создание API на Node js и написание тестов для UI кита,
          создание компонентов для библиотеки. Обучился работе с Docker, могу
          написать конфиги и настроить окружение.
        </p>
        {[
          "ts",
          "react",
          "alo",
          "gl",
          "antd",
          "ut",
          "nj",
          "sl",
          "dr",
          "psq",
        ].map((skill) => (
          <Tag key={skill}>{skils[skill]}</Tag>
        ))}
      </>
    ),
  },
  {
    title: "БК «1xBet» (fullstack developer)",
    subTitle: <p>июнь 2019 - июнь 2020 (1 год)</p>,
    status: "finish",
    description: (
      <>
        <p>
          Разработка кросдоменного SPA, как фронт части, так и прокси-сервиса на
          Nodejs, поддержание и создание внутренних проектов (партнерских
          программ, клиентов аналитики). Создание системы прав в приложении.
          Написание библиотеки над роутером.
        </p>

        {["ts", "react", "rx", "alo", "gl", "sc", "nj"].map((skill) => (
          <Tag key={skill}>{skils[skill]}</Tag>
        ))}
      </>
    ),
  },
  {
    title: "ООО Маркет-Софт (junior frontend developer)",
    subTitle: <p>февраль 2019 - май 2019 (4 месяца)</p>,
    status: "finish",
    description: (
      <>
        <p>
          Занимаюсь версткой лендингов, сайтов, верстаю под различные движки и
          фреймворки. Учавствовал в создании больших проектов. Могу создавать
          адаптивную, попиксельную верстку сайтов с помощью компонентов,
          использую различные шаблонизаторы(twig, jade, nunjucks, jsx) и
          припроцессоры (sass, stylus), дорабатывал и создавал функционал для
          сайтов js(ES6).
        </p>

        {["html", "js", "wk", "gulp", "pg", "ss", "sss", "lss"].map((skill) => (
          <Tag key={skill}>{skils[skill]}</Tag>
        ))}
      </>
    ),
  },
  {
    title: "ООО «Техно-софт» (Верстальщик)",
    subTitle: <p>июнь 2018 - январь 2019 (8 месяцев)</p>,
    status: "finish",
    description: (
      <>
        <p>
          верстка макетов, Pixel Perfect - верстка лендингов, наполнение их
          контентом. Создание уникальных статей, создание сайтов с помощью
          Wordpress
        </p>
        {["html", "gulp", "ss", "sss", "lss"].map((skill) => (
          <Tag key={skill}>{skils[skill]}</Tag>
        ))}
      </>
    ),
  },
];

export const paralelWorks = [
  {
    title: "Группа компаний «Просвещение»",
    subTitle: <p>июнь 2023 - январь 2024 (7 месяцев)</p>,
    status: "finish",
    description: (
      <>
        <p>
          Помощь в разработке основного сайта для
          <span>
            {" "}
            <a href="https://prosv.ru/" rel="noreferrer" target="_blank">
              «Просвещение»
            </a>{" "}
          </span>
        </p>

        {["ts", "react", "next", "alo"].map((skill) => (
          <Tag key={skill}>{skils[skill]}</Tag>
        ))}
      </>
    ),
  },
  {
    title: "Преподаватель курсов React в GeekBrains",
    subTitle: <p>апрель 2021 - сентябрь 2022 (19 месяцев)</p>,
    status: "finish",
    description: (
      <>
        <p>
          Проведение уроков, вебинаров. Ревью работ студентов и выставление
          оценок (средний балл 4.8).
        </p>
        {["js", "react", "rx"].map((skill) => (
          <Tag key={skill}>{skils[skill]}</Tag>
        ))}
      </>
    ),
  },
  {
    title: "Mobile app Explory",
    subTitle: <p>апрель 2020 - февраль 2021 (11 месяцев)</p>,
    status: "finish",
    description: (
      <>
        <p>
          Разработка мобильного приложения для поиска мероприятий
          <span>
            {" "}
            <a href="https://explory.io/" rel="noreferrer" target="_blank">
              Explory
            </a>{" "}
          </span>
          (более 80-ти экранов), используя методологию atomic design и feature
          slices
        </p>

        {["ts", "flow", "react", "rn", "er"].map((skill) => (
          <Tag key={skill}>{skils[skill]}</Tag>
        ))}
      </>
    ),
  },
];
