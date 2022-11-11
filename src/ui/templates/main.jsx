import { useEffect, useState } from "react";
import { Layout } from "antd";
import { useMediaQuery } from "react-responsive";
import styled, { css } from "styled-components";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Content, SideBarProfile } from "../atoms";

const { Sider } = Layout;

const CommonSider = styled(Sider)`
  z-index: 20;
  background-color: transparent;
  overflow-x: hidden;
  top: 0;
  height: 100vh;
  height: -webkit-fill-available;

  ${(p) =>
    p.isLeftSider &&
    css`
      position: fixed;
      background: var(--hub-menu-bg);
      left: 0;

      .ant-layout-sider-children {
        padding: 14px;
      }

      @media (max-width: calc(1024px - 1px)) {
        &.ant-layout-sider-collapsed {
          transform: translateX(-50px);
        }
      }
    `};
`;

const Header = styled(Layout.Header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--hub-menu-bg);
  box-shadow: 0 8px 24px -2px rgb(0 0 0 / 5%);
  z-index: 19;
  padding: 0 24px;
  transition: all 0.2s;
  position: sticky;
  top: 0;
  color: var(--hub-menu-item-color);
`;

const ContentWrapper = styled(Layout)`
  z-index: 10;
  transition: all 0.2s;
  background: transparent;
  min-height: 100%;

  @media (min-width: 1024px) {
    padding-left: 50px;
  }

  @media (min-width: calc(1300px - 1px)) {
    padding-right: 0;

    ${(p) =>
      p.leftSiderVisibility &&
      css`
        padding-left: 320px;
      `};
  }
`;

export function MainTemplate({ sidebar, children, noPadding }) {
  const isDesktop = useMediaQuery({
    query: `(min-width: 1300px)`,
  });

  const isLaptopAndBelow = useMediaQuery({
    query: `(max-width: calc(1300px - 1px))`,
  });

  const isTabletAndBelow = useMediaQuery({
    query: `(max-width: calc(1024px - 1px))`,
  });

  const [leftSiderVisibility, setLeftSiderVisibility] = useState(isDesktop);

  function toggleLeftSider() {
    setLeftSiderVisibility((prev) => !prev);
  }

  useEffect(() => {
    if (isDesktop) {
      setLeftSiderVisibility(true);
    }

    if (isLaptopAndBelow) {
      setLeftSiderVisibility(false);
    }
  }, [isDesktop, isLaptopAndBelow]);

  return (
    <Layout
      style={{ minHeight: "100%", backgroundColor: "transparent" }}
      hasSider
    >
      <CommonSider
        isLeftSider
        collapsible
        collapsedWidth={50}
        collapsed={!leftSiderVisibility}
        theme="light"
        width={320}
        onCollapse={toggleLeftSider}
      >
        <SideBarProfile userName="Шеломанов Богдан" />
        {sidebar}
      </CommonSider>

      <ContentWrapper
        hasSider={false}
        leftSiderVisibility={leftSiderVisibility}
      >
        {isTabletAndBelow && (
          <Header leftSiderVisibility={leftSiderVisibility}>
            {!leftSiderVisibility ? (
              <MenuUnfoldOutlined
                className="trigger"
                onClick={toggleLeftSider}
              />
            ) : (
              <MenuFoldOutlined className="trigger" onClick={toggleLeftSider} />
            )}
          </Header>
        )}

        <Content noPadding={noPadding}>{children}</Content>
      </ContentWrapper>
    </Layout>
  );
}
