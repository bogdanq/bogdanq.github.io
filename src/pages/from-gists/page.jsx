import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Button, PageHeader, message } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import SyntaxHighlighter from "react-syntax-highlighter";
import { MainTemplate } from "../../ui/templates";
import { DefaultSidebar } from "../../ui/organisms";
import { useCopyToClipboard } from "../snippets/use-copy";

export function FromGistPage({ url, name, description, isMardDown }) {
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

  useEffect(() => {
    return () => {
      setData(null);
    };
  }, [url]);

  return (
    <MainTemplate sidebar={<DefaultSidebar />}>
      <PageHeader
        style={{ borderBottom: "1px solid #d9d9d9", marginBottom: "15px" }}
        title={name}
        subTitle={description}
        extra={[
          <Button key="3" icon={<CopyOutlined />} onClick={() => copy(data)}>
            Copy
          </Button>,
        ]}
      />

      {isMardDown && data ? (
        <ReactMarkdown
          children={data}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, "")}
                  language="typescript"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
      ) : (
        <SyntaxHighlighter
          customStyle={{
            backgroundColor: "transparent",
            // borderTop: "1px solid #d9d9d9",
          }}
          language="typescript"
        >
          {data}
        </SyntaxHighlighter>
      )}
    </MainTemplate>
  );
}
