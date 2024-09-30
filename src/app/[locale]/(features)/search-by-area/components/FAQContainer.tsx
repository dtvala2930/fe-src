import FAQAccordions from "./FAQAccordions";

const FAQContainer = () => {
  return (
    <div className="mt-10 mb-5 w-full flex-col items-center justify-center">
      <div className="text-center font-bold text-2xl capitalize">Frequently Asked Questions</div>
      <FAQAccordions />
    </div>
  );
};

export default FAQContainer;
