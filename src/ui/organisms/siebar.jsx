import { Menu } from "antd";
import { useMediaQuery } from "react-responsive";
import { Link, useLocation } from "react-router-dom";
import { CaretRightOutlined, SearchOutlined } from "@ant-design/icons";
import { snipetsList } from "../../features/snipets";
import { fromGithub, fromGist } from "../../pages";

export function DefaultSidebar() {
  const { pathname, hash } = useLocation();

  const isMobile = useMediaQuery({
    query: `(max-width: calc(680px - 1px))`,
  });

  const isOpenSub = isMobile ? undefined : ["sub1", "sub2"];

  return (
    <Menu
      mode="inline"
      selectedKeys={[`${pathname}${hash}`]}
      openKeys={isOpenSub}
    >
      <Menu.ItemGroup title="Демки из гитхаба" />
      {fromGithub.map((item) => (
        <Menu.Item icon={<SearchOutlined />} key={item.path}>
          <Link to={item.path}>{item.name}</Link>
        </Menu.Item>
      ))}

      <Menu.SubMenu title="Снипеты" key="sub1">
        {snipetsList.map((it) => (
          <Menu.Item icon={<CaretRightOutlined />} key={`/snipets/${it.id}`}>
            <Link to={`/snipets/${it.id}`}>{it.title}</Link>
          </Menu.Item>
        ))}
      </Menu.SubMenu>

      <Menu.SubMenu title="Гисты" key="sub2">
        {fromGist.map((item) => (
          <Menu.Item icon={<CaretRightOutlined />} key={item.path}>
            <Link to={item.path}>{item.name}</Link>
          </Menu.Item>
        ))}
      </Menu.SubMenu>
    </Menu>
  );
}
