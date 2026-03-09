import { MostTextPattern } from "../MostTextPattern";
import { InternshipBox } from "./InternshipBox";
const internships = [
  {
    title: "Undergraduates Program",
    des: "This program is designed to prepare the undergraduates for the market, and to be up to date with the new trends at field of construction. This program is designed mainly for:",
    point: [
      "Civil engineering 3rd and last year students.",
      "Architecture engineering 3rd and last year students.",
    ],
  },
  {
    title: "Postgraduates Program",
    des: "This program is designed to help the postgraduates in preparing their Masters and PHDs. Also to help them adapt rapidly with the market. This program includes: ",
    point: [
      "Provide the required material of post tension for the masters.",
      "Participating in research that could help in construction field.",
    ],
  },
];
export function InternshipsSection() {
  return (
    <div className="p-[var(--sectionPadding)] bg-cover bg-no-repeat bg-[url('/community/communityInter.webp')] flex flex-col items-center justify-center gap-8">
      <MostTextPattern
        isCenter
        moreWidth
        redText="Internship Programs"
        whiteText="Our Internship Programs"
        pra={
          <span>
            Our internship programs are designed to bridge the gap between
            academic learning and real-world construction experience. <br />
            Interns at EGY Smart gain hands-on exposure to live projects, site
            operations, and professional engineering practices in a <br />{" "}
            supportive learning environment.
          </span>
        }
      />
      <div className="flex gap-4 max-[900px]:flex-col">
        {internships.map((internship) => (
          <InternshipBox
            points={internship.point}
            des={internship.des}
            title={internship.title}
            key={internship.des}
          />
        ))}
      </div>
    </div>
  );
}
