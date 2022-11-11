import { Route, Routes } from "react-router-dom";
import { snipetsList } from "../features/snipets";
import { SnippetsPage } from "./snippets";
import { VCPage } from "./vc";
import { FromGithubPage } from "./from-git";

const fromGithub = [
  {
    path: "/graph",
    page: <FromGithubPage url="https://bogdanq.github.io/algorithms/" />,
  },
  {
    path: "/react",
    page: <FromGithubPage url="https://codesandbox.io/s/my-react-dhuzx" />,
  },
  {
    path: "/styled",
    page: <FromGithubPage url="https://codesandbox.io/s/mystyled-t7p2d" />,
  },
];

export const routes = (
  <Routes>
    <Route path="/" element={<VCPage />} />

    {fromGithub.map((it) => (
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
