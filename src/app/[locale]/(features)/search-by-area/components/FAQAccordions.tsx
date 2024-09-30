import { Accordion } from "~/shared/components/base/accordion";
import FAQAccordionItem from "./FAQAccordionItem";

const FAQAccordions = () => {
  const FAQs = [
    {
      id: 1,
      questionContent: "Question Content",
      guidelineTitle: "Guideline Title",
      guidelineContents: ["Guideline 1", "Guideline 2", "Guideline 3"],
    },
    {
      id: 2,
      questionContent: "Question Content 2",
      guidelineTitle: "Guideline Title 2",
      guidelineContents: ["Guideline 1", "Guideline 2", "Guideline 3"],
    },
    {
      id: 3,
      questionContent: "Question Content 3",
      guidelineTitle: "Guideline Title 3",
      guidelineContents: ["Guideline 1", "Guideline 2", "Guideline 3"],
    },
  ];
  return (
    <Accordion type="multiple" className="mt-5">
      {FAQs.map((FAQ) => (
        <FAQAccordionItem
          key={FAQ.id}
          accordionKey={FAQ.id}
          questionContent={FAQ.questionContent}
          guidelineTitle={FAQ.guidelineTitle}
          guidelineContents={FAQ.guidelineContents}
        />
      ))}
    </Accordion>
  );
};

export default FAQAccordions;
