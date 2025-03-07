import React, { useState, useContext, useEffect } from "react";
import styles from "./AddTest.module.css";
import { Row, Col, Tabs, Button } from "antd";
import { AppHeader } from "../../components/AppHeader";
import type { TabsProps } from "antd";

import ReadingParagraph from "components/ReadingParagraph";
import QuestionSection from "components/QuestionSection";
import {
  QuestionGroupInfo,
  generateReadingQuestionDetails,
  generateReadingParagraphs,
  IReadingParagraph,
} from "services/QuestionTypeService";
import ReadingTestContext from "context/ReadingTestContext";
import { useNavigate } from "react-router";

const AddingTestPage = () => {  
  const navigate = useNavigate();
  const [questionSectionKey, setQuestionSectionKey] = useState<number>(1);
  const [paragraphs, setParagraphs] = useState(generateReadingParagraphs);
  const [questionDetails, setQuestionDetails] = useState(
    generateReadingQuestionDetails
  );

  const [firstQuestionGroup, setFirstQuestionGroup] = useState<
    QuestionGroupInfo[]
  >([]);
  const [secondQuestionGroup, setSecondQuestionGroup] = useState<
    QuestionGroupInfo[]
  >([]);
  const [thirdQuestionGroup, setThirdQuestionGroup] = useState<
    QuestionGroupInfo[]
  >([]);
  const [forthQuestionGroup, setForthQuestionGroup] = useState<
    QuestionGroupInfo[]
  >([]);

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Section 1`,
      children: <ReadingParagraph sectionKey={1} setReadingParagraphsCallback={setParagraphs}/>,
    },
    {
      key: "2",
      label: `Section 2`,
      children: <ReadingParagraph sectionKey={2} setReadingParagraphsCallback={setParagraphs}/>,
    },
    {
      key: "3",
      label: `Section 3`,
      children: <ReadingParagraph sectionKey={3} setReadingParagraphsCallback={setParagraphs}/>,
    },
    // {
    //   key: "4",
    //   label: `Section 4`,
    //   children: <ReadingParagraph sectionKey={4} setReadingParagraphsCallback={setParagraphs}/>,
    // },
  ];

  const onSectionChange = (key: string) => {
    setQuestionSectionKey(parseInt(key, 10));
  };

  const handleSubmit = () => {
    console.log('PARAGRAPHS: ',paragraphs);
    console.log('QUESTION DETAILS');
    console.table(questionDetails);

    navigate("/post-test");
  };

  useEffect(() => {
    setQuestionDetails(generateReadingQuestionDetails);
    setParagraphs(generateReadingParagraphs);
  }, []);

  return (
    <div style={{ background: "#FFF" }}>
      <AppHeader />
      <Row>
        <Col className={`${styles.column} ${styles.left}`} xs={{ span: 24 }} lg={{ span: 12 }} style={{
            height: "83vh",
            maxHeight: "83vh",
            overflowY: "auto"
          }}>
          <Row>
            <Col span={24}>
              <Tabs
                defaultActiveKey="1"
                items={items}
                onChange={onSectionChange}
                className={`${styles.tabs}`}
              />
            </Col>
          </Row>
        </Col>

        <Col
          className={`${styles.column} ${styles.right}`}
          xs={{ span: 24 }} lg={{ span: 12 }}
          style={{
            borderLeft: "2px solid #9F9F9F",
            height: "83vh",
            maxHeight: "83vh",
            overflowY: "auto"
          }}
        >
          <ReadingTestContext.Provider
            value={{ questionDetails, setQuestionDetails }}
          >
            {questionSectionKey === 1 && (
              <QuestionSection
                sectionKey={1}
                questionGroup={firstQuestionGroup}
                setQuestionGroupCallback={setFirstQuestionGroup}
              />
            )}
            {questionSectionKey === 2 && (
              <QuestionSection
                sectionKey={2}
                questionGroup={secondQuestionGroup}
                setQuestionGroupCallback={setSecondQuestionGroup}
              />
            )}
            {questionSectionKey === 3 && (
              <QuestionSection
                sectionKey={3}
                questionGroup={thirdQuestionGroup}
                setQuestionGroupCallback={setThirdQuestionGroup}
              />
            )}
            {questionSectionKey === 4 && (
              <QuestionSection
                sectionKey={4}
                questionGroup={forthQuestionGroup}
                setQuestionGroupCallback={setForthQuestionGroup}
              />
            )}
          </ReadingTestContext.Provider>
        </Col>
      </Row>

      <div className={`${styles["footer"]}`}>
        <div className={`${styles["footer-children"]}`}>
          <img
            src="default.png"
            style={{ width: "30px", height: "30px", marginRight: "0.5rem" }}
          />
          <p style={{ color: "white" }}>IELTS Recent mock test</p>
        </div>

        <div
          className={`${styles["footer-children"]} ${styles["button-group"]}`}
        >
          {/* <Button className={`${styles["button"]} ${styles["secondary"]}`}>
            Previous
          </Button>
          <Button className={`${styles["button"]} ${styles["secondary"]}`}>
            Next
          </Button> */}
          <Button
            icon={<img src="save_icon.png" />}
            className={`${styles["button"]} ${styles["primary"]}`}
            onClick={handleSubmit}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddingTestPage;