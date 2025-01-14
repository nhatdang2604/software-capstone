import { useState } from "react";
import classes from "./AppHeader.module.less";
import { Avatar, Col, Image, Layout, Menu, Row } from "antd";
import { useAuth } from "hooks/useAuth";
import type { MenuProps } from "antd";
import { useNavigate } from "react-router";



export const AppHeader = () => {
  const [langDropdownVisible, setLangDropdownVisibleVisible] =
    useState<boolean>(false);
  const { userProfile } = useAuth();

  const username = `${userProfile?.firstName || ""} ${userProfile?.lastName || ""
    }`;

  const navigate = useNavigate();

  const items: MenuProps['items'] = [
    {
      label: 'IELTS Test',
      key: 'test',
      children: [
        {
          label: 'New Test',
          key: 'test:1',
          onClick: () => navigate('/post-test')
        },
        {
          label: 'IELTS Library',
          key: 'test:2',
          onClick: () => console.log('test:2')
        },
      ],
    },
    {
      label: "User Acounts",
      key: 'user',
      children: [
        {
          label: "New Account",
          key: "account:1"
        },
        {
          label: "User Accounts",
          key: "account:2"
        }
      ]
    },
  ];

  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <>
      <Layout.Header
        className={classes["top-header"]}
        style={{
          backgroundColor: "var(--mainColor)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "72px",
          borderBottom: "2px solid var(--mainGrayColor)",
        }}
      >
        <Row style={{ width: '100%' }}>
          <Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }}>
            <div
              style={{
                display: "flex",
                gap: 5,
                marginRight: "3rem",
              }}
            >
              <span
                style={{
                  color: "white",
                  fontSize: "32px",
                }}
              >
                ILETS
              </span>
              <Image src="sword.png" height={42} preview={false} />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    color: "white",
                    fontSize: "32px",
                  }}
                >
                  Warrior
                </div>
                <div
                  style={{
                    color: "white",
                    fontSize: "15px",
                    lineHeight: 0.5,
                    textAlign: "right",
                  }}
                >
                  Admin tools
                </div>
              </div>
            </div>
          </Col>

          <Col xs={{ span: 0, order: 4 }} lg={{ span: 14, order: 2 }}>
            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '100%' }}>
              {/* <Dropdown menu={{ items }}>
                <div
                  style={{
                    color: "white",
                    fontSize: "15px",
                    lineHeight: 0.5,
                    textAlign: "right",
                  }}
                >
                  IELTS Tests Library
                </div>
              </Dropdown> */}
              <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} style={{ backgroundColor: 'transparent', color: 'white', flexGrow: 1, borderBottom: 'none' }} className="menu" />
            </div>
          </Col>
          <Col xs={{ span: 11, order: 3 }} lg={{ span: 3, order: 3 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                cursor: "pointer",
                justifyContent: 'flex-end'
              }}
            >
              <Avatar src={"avatar.png"} size={50} />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ color: "white", fontSize: "15px" }}>Nam Pham</div>
                <div style={{ color: "white", fontSize: "15px" }}>Admin</div>
              </div>
            </div>
          </Col>
        </Row>

      </Layout.Header >
    </>
  );
};

const popupContainer = () =>
  document.getElementById("header-user") as HTMLElement;

export default AppHeader;
