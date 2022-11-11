import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { CaretRightOutlined, SearchOutlined } from "@ant-design/icons";
import { snipetsList } from "../../features/snipets";

export function DefaultSidebar() {
  const { pathname, hash } = useLocation();

  return (
    <Menu
      mode="inline"
      selectedKeys={[`${pathname}${hash}`]}
      openKeys={["sub1"]}
    >
      <Menu.ItemGroup title="Демки из гитхаба" />
      <Menu.Item icon={<SearchOutlined />} key="/graph">
        <Link to="/graph">graph search path</Link>
      </Menu.Item>
      <Menu.Item icon={<SearchOutlined />} key="/react">
        <Link to="/react">my react</Link>
      </Menu.Item>
      <Menu.Item icon={<SearchOutlined />} key="/styled">
        <Link to="/styled">my styled</Link>
      </Menu.Item>

      <Menu.SubMenu title="Снипеты" key="sub1">
        {snipetsList.map((it) => (
          <Menu.Item icon={<CaretRightOutlined />} key={`/snipets/${it.id}`}>
            <Link to={`/snipets/${it.id}`}>{it.title}</Link>
          </Menu.Item>
        ))}
      </Menu.SubMenu>
    </Menu>
  );
}
