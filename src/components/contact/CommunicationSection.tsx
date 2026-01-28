import { Form } from "./Form";
import { InformationBox } from "./InformationBox";

export function CommunicationSection() {
  return (
    <div
      className=" p-[var(--sectionPadding)] bg-[#0A0A0A] flex gap-12 items-start justify-between"
      id="first"
    >
      <Form />
      <InformationBox />
    </div>
  );
}
