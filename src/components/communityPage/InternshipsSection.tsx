import { MostTextPattern } from "../MostTextPattern";
import { InternshipBox } from "./InternshipBox";
const internships = [
  {
    title: "internship title",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
  },
  {
    title: "internship title",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit",
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
            des={internship.des}
            title={internship.title}
            key={internship.des}
          />
        ))}
      </div>
    </div>
  );
}
