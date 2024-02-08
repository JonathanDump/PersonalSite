import Link from "next/link";
import cl from "./contacts.module.scss";
import { socials } from "./socials";
import { getValidClassNames } from "@/helpers/getValidClassNames";

const Contacts = () => {
  return (
    <div className={cl.contacts}>
      <div className="header" id="contact">
        Contacts
      </div>
      <div className={cl.info}>
        {socials.map((social, i) => {
          if (social.href) {
            return (
              <Link
                key={i}
                href={social.href}
                target="_blank"
                className={getValidClassNames(cl.social, cl.link)}
              >
                {social.value}
              </Link>
            );
          }

          return (
            <div key={i} className={cl.social}>
              {social.value}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contacts;
