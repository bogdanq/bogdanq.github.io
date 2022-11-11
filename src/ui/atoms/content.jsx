import { Layout } from "antd";
import styled, { css } from "styled-components";

export const Content = styled(Layout.Content)`
  display: flex;
  flex-direction: column;
  background: #fff;
  margin: 5px;
  height: auto;
  min-width: 320px;
  z-index: 2;
  box-sizing: border-box;
  border-radius: 0;
  margin: 0;
  margin-top: 0;
  padding: 16px;

  ${(p) =>
    p.noPadding &&
    css`
      padding: 0;
    `}

  ${(p) =>
    p.ai &&
    css`
      align-items: ${p.ai};
    `};

  ${(p) =>
    p.jc &&
    css`
      justify-content: ${p.jc};
    `};

  ${(p) =>
    p.fullPage
      ? css`
          border-radius: 0;
          margin: 0;
          margin-top: 0;
        `
      : css`
          @media (min-width: 1300px) {
            margin: 0 16px;
            margin-top: 16px;
          }
        `};
`;
