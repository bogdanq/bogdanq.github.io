import { useEffect, useState } from "react";
import { Button, PageHeader, message } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import SyntaxHighlighter from "react-syntax-highlighter";
import { MainTemplate } from "../../ui/templates";
import { DefaultSidebar } from "../../ui/organisms";
import { useCopyToClipboard } from "../snippets/use-copy";

export function FromGistPage({ url, name, description }) {
  const [data, setData] = useState(null);
  const [value, copy] = useCopyToClipboard();

  useEffect(() => {
    const f = async () => {
      const result = await fetch(url);
      const blob = await result.blob();
      const code = await blob.text();

      setData(code);
    };

    f();
  }, [url]);

  useEffect(() => {
    if (value) {
      message.success("Copied");
    }
  }, [value]);

  return (
    <MainTemplate sidebar={<DefaultSidebar />}>
      <PageHeader
        title={name}
        subTitle={description}
        extra={[
          <Button key="3" icon={<CopyOutlined />} onClick={() => copy(data)}>
            Copy
          </Button>,
        ]}
      />

      <SyntaxHighlighter
        customStyle={{
          backgroundColor: "transparent",
          borderTop: "1px solid #d9d9d9",
        }}
        language="typescript"
      >
        {data}
      </SyntaxHighlighter>
    </MainTemplate>
  );
}
