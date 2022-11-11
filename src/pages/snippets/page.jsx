import { CopyOutlined, CaretRightOutlined } from "@ant-design/icons";
import { Button, PageHeader, message } from "antd";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { DefaultSidebar } from "../../ui/organisms";
import { MainTemplate } from "../../ui/templates";
import { useCopyToClipboard } from "./use-copy";

const tryCode = (code) => {
  // eslint-disable-next-line
  const foo = new Function(code);

  const r = foo();

  return JSON.stringify(r, null, 2);
};

export function SnippetsPage({ snipet }) {
  const [value, copy] = useCopyToClipboard();
  const [code, setCode] = useState(null);

  const location = useLocation();

  useEffect(() => {
    return () => {
      setCode(null);
    };
  }, [location]);

  useEffect(() => {
    if (value) {
      message.success("Copied");
    }
  }, [value]);

  const handleTryCode = () => {
    const result = tryCode(snipet.code);

    setCode(result);
  };

  const stringCode = `
// Code result:
${code}
  `;

  return (
    <MainTemplate sidebar={<DefaultSidebar />}>
      <PageHeader
        title={snipet.title}
        subTitle={snipet.description}
        extra={[
          <Button
            key="3"
            icon={<CopyOutlined />}
            onClick={() => copy(snipet.code)}
          >
            Copy
          </Button>,
          <Button icon={<CaretRightOutlined />} key="2" onClick={handleTryCode}>
            Try it
          </Button>,
        ]}
      />

      {!!code && (
        <SyntaxHighlighter
          customStyle={{
            backgroundColor: "transparent",
            borderTop: "1px solid #d9d9d9",
          }}
          language="javascript"
        >
          {stringCode}
        </SyntaxHighlighter>
      )}

      <SyntaxHighlighter
        customStyle={{
          backgroundColor: "transparent",
          borderTop: "1px solid #d9d9d9",
        }}
        language="javascript"
      >
        {snipet.code.split("//<!!>")[0]}
      </SyntaxHighlighter>
    </MainTemplate>
  );
}
