import { Typography } from "antd";
import SyntaxHighlighter from "react-syntax-highlighter";
import { DefaultSidebar } from "../../ui/organisms";
import { MainTemplate } from "../../ui/templates";

export function SnippetsPage({ snipet }) {
  return (
    <MainTemplate sidebar={<DefaultSidebar />}>
      <Typography.Title level={4} id={snipet.id}>
        {snipet.title}
      </Typography.Title>
      <SyntaxHighlighter language="javascript">{snipet.code}</SyntaxHighlighter>
    </MainTemplate>
  );
}
