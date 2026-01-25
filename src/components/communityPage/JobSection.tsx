import { MostTextPattern } from "../MostTextPattern";
import { JobBox } from "./JobBox";
const jobs = [
  {
    title: "Job Title",
    des: "Lorem ipsum dolor sit amet,consectetur elit consectetur",
  },
  {
    title: "Job Title",
    des: "Lorem ipsum dolor sit amet,consectetur elit consect",
  },
  {
    title: "Job Title",
    des: "Lorem ipsum dolor sit amet,consectetur elit consectet",
  },
  {
    title: "Job Title",
    des: "Lorem ipsum dolor sit amet,consectetur elit consectetu",
  },
];
export function JobsSection() {
  return (
    <div className="p-[var(--sectionPadding)] bg-cover bg-no-repeat bg-[url('/community/communityBg.webp')] flex flex-col items-center justify-center gap-6">
      <MostTextPattern
        isCenter
        moreWidth
        redText="Careers"
        whiteText="Careers at EGY Smart"
        pra={
          <span>
            At EGY Smart, you will work on impactful projects, collaborate with{" "}
            <br />
            experienced professionals, and grow within a dynamic engineering{" "}
            <br />
            environment.
          </span>
        }
      />
      <div className="grid grid-cols-4 gap-4">
        {jobs.map((job) => (
          <JobBox des={job.des} title={job.title} key={job.des} />
        ))}
      </div>
    </div>
  );
}
