import { ContactInfoBox } from "./ContactInfoBox";

export function InformationBox() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-white text-[1.75rem] font-[350] ">
          Contact Information
        </h1>
        <p className="text-[1rem] leading-[160%] font-normal text-[#C9C9C9]">
          At EGY Smart, we believe that successful projects are built on the
          foundation <br /> of effective communication. Whether you are a client
          planning your next <br /> development venture or a supplier seeking a
          trusted partnership, our team is <br /> ready to collaborate with you,
          and deliver the results you aspire to achieve. <br /> Reach out to us
          today, and let your first step be toward creating lasting value <br />{" "}
          and enduring accomplishments.
        </p>
      </div>
      <div className="flex items-start">
        <ContactInfoBox
          icon="phone"
          title="Phone Number"
          info="+2 010 29444 280"
        />
        <ContactInfoBox
          icon="whatsapp"
          title="Whatsapp"
          info="+2 010 02518 690"
        />
        <ContactInfoBox
          icon="email"
          title="Email Address"
          info="egysmart.org"
        />
      </div>
      <div className="flex ">
        <ContactInfoBox
          icon="location"
          title="Location"
          info={
            <span>
              15D/5 Sayed Dawood Street, <br /> El Laselky District, New Maadi,
              Cair
            </span>
          }
        />
      </div>
    </div>
  );
}
