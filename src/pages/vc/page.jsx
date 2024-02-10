import { useRef } from "react";
import { SaveOutlined } from "@ant-design/icons";
import { Typography, Row, Col, Steps, PageHeader, Button } from "antd";
import styled from "styled-components";
import html2canvas from "jspdf-html2canvas";
import { DefaultSidebar } from "../../ui/organisms";
import { MainTemplate } from "../../ui/templates";
import bio from "../../assets/bio.jpeg";
import { useTimeWork } from "./use-time-work";
import { works, paralelWorks } from "./data-mock";

const Header = styled.div`
  /* height: 400px; */
  padding-top: 50px;
  padding-left: 50px;
  padding-right: 50px;
  /* background-color: #34353a; */
  /* box-shadow: 1px 10px 8px 0px rgba(52, 53, 58, 0.2); */

  & h3 {
    color: var(--hub-submenu-bg);
  }
  & h4 {
    margin-top: 0 !important;
  }

  img {
    width: 200px;
    height: 270px;
    border-radius: 10px;
    margin-left: 3%;
    transform: translateY(-45px);
  }

  @media (max-width: 600px) {
    padding-left: 20px;
    padding-right: 20px;

    img {
      display: none;
    }
  }
`;

const Footer = styled.div`
  padding-top: 50px;
  padding-left: 50px;
  padding-right: 50px;

  & h3 {
    color: var(--hub-submenu-bg);
  }
  & h4 {
    margin-top: 0 !important;
  }

  @media (max-width: 600px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const About = styled(Row)`
  padding-left: 50px;
  margin-top: 20px;
  padding-right: 50px;
  @media (max-width: 600px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export function VCPage({ snipet }) {
  const ref = useRef(null);
  const time = useTimeWork();

  function printDocument() {
    const input = ref.current;

    html2canvas(input, {
      allowTaint: true,
      windowHeight: window.outerHeight,
      height: window.outerHeight,
      output: "bogdan_shelomanov_vc.pdf",
    });
  }

  return (
    <MainTemplate noPadding sidebar={<DefaultSidebar />}>
      <div ref={ref}>
        <PageHeader
          title="Резюме"
          subTitle="Демки и примеры задач"
          extra={[
            <Button key="3" icon={<SaveOutlined />} onClick={printDocument}>
              download cv
            </Button>,
          ]}
        />
        <Header id="divToPrint">
          <Row>
            <Col xs={24} xl={5}>
              <img src={bio} alt="bio" />
            </Col>

            <Col xs={24} xl={19}>
              <Typography.Title level={3}>Шеломанов Богдан</Typography.Title>
              <Typography.Title level={4}>Frontend developer</Typography.Title>

              <p>
                На высоком уровне работаю с библиотекой React, видел множество
                подходов к разработке SPA. В свободное время изучаю реакт
                изнутри (работу хуков, стадии и режимы работы библиотеки).
                Владею различными стейт менеджерами: Effector, Redux (...и
                окружение), Apollo Client. Использую как препроцессоры, так и
                css-modules, styled-components, linaria, reshadow. Работаю с
                React hooks, но так же легко пишу и на классах. Умею писать
                ui-компоненты, знаком с различными методологиями. Так же могу
                использовать и фреймворк Nextjs. Умею тестировать свой код.
              </p>
              <p>
                Свободно пишу на Typescript и на хорошем уровне владею Git.
                Знаком с принципами ООП и ФП, использовал некоторые на практике.
                В свободное время изучаю различные паттерны проектирования и
                алгоритмы (поиск по графу). Могу поднять сервер на Node js
                (используя mongoDB или postgress), сделать как REST так и
                GraphQl API (но сервер интересует в меньшей степени).
              </p>
              <p>
                Так же делал реализацию
                <a
                  href="https://codesandbox.io/s/redux-timer-njlh5"
                  rel="noreferrer"
                  target="_blank"
                >
                  Redux
                </a>
                , пробовал сделать мини
                <a
                  href="https://codesandbox.io/s/my-react-dhuzx"
                  rel="noreferrer"
                  target="_blank"
                >
                  React
                </a>
                , выполнял реализацию
                <a
                  href="https://codesandbox.io/s/mystyled-t7p2d?file=/src/index.js:788-800"
                  rel="noreferrer"
                  target="_blank"
                >
                  Styled components
                </a>
                .
              </p>
              <p>
                Постоянно стараюсь улучшать свои навыки. Быстро осваиваюсь на
                новых проектах. Ищу компанию (команду разработчиков) в которой
                буду работать, расти как специалист и заниматься интересными
                проектами.
              </p>

              <a
                href="https://github.com/bogdanq"
                rel="noreferrer"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://teleg.run/bshelomanov"
                rel="noreferrer"
                target="_blank"
              >
                Telegram
              </a>
              <a
                href="https://codesandbox.io/u/bogdanq"
                rel="noreferrer"
                target="_blank"
              >
                Codesandbox
              </a>
              <a
                href="https://codestats.net/users/bogdan"
                rel="noreferrer"
                target="_blank"
              >
                Codestats
              </a>
            </Col>
          </Row>
        </Header>

        <About gutter={[10, 10]}>
          <Col xs={24} xl={12}>
            <Typography.Title level={4}>{time}</Typography.Title>
            <Steps progressDot direction="vertical" items={works} />
          </Col>

          <Col xs={24} xl={12}>
            <Typography.Title level={4}>
              Работа для саморазвития
            </Typography.Title>
            <Steps progressDot direction="vertical" items={paralelWorks} />
          </Col>
        </About>

        <Footer>
          <Typography.Title level={3}>Образование</Typography.Title>
          <Typography.Title level={4}>
            Среднее специальное образование Тппк (Трубчевский
            Профессионально-педагогический колледж) 2017
          </Typography.Title>
          <p>Прикладная информатика по отраслям</p>
        </Footer>
      </div>
    </MainTemplate>
  );
}
