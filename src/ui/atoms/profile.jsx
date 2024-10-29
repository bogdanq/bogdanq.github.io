import { Typography, Col, Row } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import bio from "../../assets/bio.jpg";

const Wrapper = styled.div`
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  border-color: var(--hub-item-active-bg);
  padding: 16px;
  margin-bottom: 25px;
  min-width: 272px;
  transition: all 0.3s;

  img {
    width: 30px;
    height: 30px;
    border-radius: 50px;
    margin-right: 14px;
  }

  .name {
    font-size: 16px;
    font-weight: 400;
    color: var(--hub-menu-highlight-color);
  }

  .subtitle {
    font-size: 13px;
    color: var(--hub-menu-highlight-color);
    opacity: 0.5;
  }

  :global(.ant-layout-sider-collapsed) {
    min-width: auto;
    padding: 0;
    border-radius: 0;
    border-width: 0;
    margin-bottom: 10px;

    .name,
    .subtitle {
      visibility: hidden;
    }
  }
`;

export function SideBarProfile({ userName }) {
  return (
    <Wrapper>
      <Row>
        <Col span={4}>
          <img src={bio} alt="bio" />
        </Col>
        <Col span={18}>
          <Typography.Text className="name" ellipsis>
            <Link to="/">{userName}</Link>
          </Typography.Text>
        </Col>
      </Row>
    </Wrapper>
  );
}
