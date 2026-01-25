import { ContactInfoBox } from "./ContactInfoBox";

export function InformationBox() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-white text-[1.75rem] font-[350] ">
          Contact Information
        </h1>
        <p className="text-[1rem] leading-[160%] font-normal text-[#C9C9C9]">
          At EGY Smart, we believe strong projects start with clear
          communication. <br /> Whether you’re a client planning your next
          development or a supplier <br /> seeking a trusted partnership, our
          team is ready to listen, collaborate, and <br /> deliver. Reach out to
          us and let’s take the first step toward building lasting <br /> value
          together.
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
