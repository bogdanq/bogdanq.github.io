import { Menu } from "antd";
import { useMediaQuery } from "react-responsive";
import { Link, useLocation } from "react-router-dom";
import { CaretRightOutlined, SearchOutlined } from "@ant-design/icons";
import { snipetsList } from "../../features/snipets";
import { fromGithub, fromGist } from "../../pages";
import { useState } from "react";

export function DefaultSidebar() {
  const { pathname, hash } = useLocation();
  const [openKeys, setOpenKeys] = useState(["sub1"]);

  const isLaptopAndBelow = useMediaQuery({
    query: `(max-width: calc(1300px - 1px))`,
  });

  return (
    <Menu
      mode="inline"
      selectedKeys={[`${pathname}${hash}`]}
      openKeys={isLaptopAndBelow ? [] : openKeys}
      onOpenChange={(keys) => {
        setOpenKeys(keys);
      }}
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
