import { TitleProps } from "@/components/types";

const HeaderTitle: React.FC<TitleProps> = ({ heading, generalText }) => {
  return (
    <div className="mx-auto text-center md:w-4/12 my-8">
      <h3
        className="text-[48px] leading-[56.88px] font-[Rubik] font-medium tracking-[-2%]"
        style={{ letterSpacing: "-1px" }}
      >
        {heading}
      </h3>
      <p className="font-[Questrial] text-center">{generalText}</p>
    </div>
  );
};

export default HeaderTitle;
