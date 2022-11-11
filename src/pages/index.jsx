import { SearchOutlined } from "@ant-design/icons";
import { Route, Routes } from "react-router-dom";
import { snipetsList } from "../features/snipets";
import { SnippetsPage } from "./snippets";
import { VCPage } from "./vc";
import { FromGithubPage } from "./from-git";
import { FromGistPage } from "./from-gists";

export const fromGithub = [
  {
    path: "/graph",
    page: <FromGithubPage url="https://bogdanq.github.io/algorithms/" />,
    icon: <SearchOutlined />,
    name: "graph search path",
  },
  {
    path: "/react",
    page: <FromGithubPage url="https://codesandbox.io/s/my-react-dhuzx" />,
    icon: <SearchOutlined />,
    name: "my react",
  },
  {
    path: "/styled",
    page: <FromGithubPage url="https://codesandbox.io/s/mystyled-t7p2d" />,
    icon: <SearchOutlined />,
    name: "my styled",
  },
];

export const fromGist = [
  {
    path: "/gists/roles",
    name: "Роли",
    page: (
      <FromGistPage
        name="Роли"
        description="Способ проверки ролей"
        url="https://gist.githubusercontent.com/bogdanq/2b040891c81f2c46aa0b51081378e386/raw/e401c0d57099c60076d6d0c9911b3103ee7b6384/checkRoles.js"
      />
    ),
  },
  {
    path: "/gists/guard",
    name: "Guard",
    page: (
      <FromGistPage
        name="Guard"
        description="Способ проверки прав для роутов"
        url="https://gist.githubusercontent.com/bogdanq/b42c1ee085338245f7d10f1e2052212f/raw/bf040eeed1bb2393f559483bb341017cb4da2284/guard.js"
      />
    ),
  },
  {
    path: "/gists/styled",
    name: "Styled-components",
    page: (
      <FromGistPage
        name="Styled-components"
        description="Способ использования библиотеки без рантайма"
        url="https://gist.githubusercontent.com/bogdanq/a39b3d30334edfe30f7c65d50871e423/raw/f2d7c9bbdef4b38897173fe319799dc3bfb33223/styled-no-update.js"
      />
    ),
  },
  {
    path: "/gists/list",
    name: "conditional-list",
    page: (
      <FromGistPage
        name="Conditional-list"
        description="Способ представления списка в едином компоненте"
        url="https://gist.githubusercontent.com/bogdanq/47b263d6a07d956de5487ecba210742a/raw/b0654f4cde36c4f21fd74d2173c398199b2426bc/conditional-list.js"
      />
    ),
  },
  {
    path: "/gists/chart",
    name: "Chart JS",
    page: (
      <FromGistPage
        name="Chart JS"
        description="Способ конфигурации ChartJs"
        url="https://gist.githubusercontent.com/bogdanq/35849f82345f02779a4446e50d1a5d9c/raw/011ee6fca77f1ed03188c723a3adbff5a558b800/config-chart.js"
      />
    ),
  },
  {
    path: "/gists/gql",
    name: "Graphql",
    page: (
      <FromGistPage
        isMardDown
        name="Graphql"
        description="Заметки по Apollo и Graphql"
        url="https://raw.githubusercontent.com/bogdanq/apollo-graphQL/master/README.md"
      />
    ),
  },
];

export const routes = (
  <Routes>
    <Route path="/" element={<VCPage />} />

    {fromGithub.map((it) => (
      <Route key={it.path} path={it.path} element={it.page} />
    ))}

    {fromGist.map((it) => (
      <Route key={it.path} path={it.path} element={it.page} />
    ))}

    {snipetsList.map((it) => (
      <Route
        key={it.id}
        path={`/snipets/${it.id}`}
        element={<SnippetsPage snipet={it} />}
      />
    ))}
  </Routes>
);
