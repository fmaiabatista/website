import React, { useState } from "react";
import Layout from "../components/layout";
import Emoji from "../components/emoji";
import Title from "../components/title";
import Phone from "../components/phone";
import Email from "../components/email";
import Button from "../components/button";

const Contact = () => {
  const [phone, setPhone] = useState(false);
  const [email, setEmail] = useState(false);

  return (
    <Layout>
      <Title
        title="Contact"
        tagline="For professional matters such as Consultancy service, Freelancing and more"
      />
      <p>Please get in touch via</p>
      <p>
        <Emoji icon="💼" label="briefcase" margin="0 12px 0 0" />
        <a href="https://www.linkedin.com/in/fmaiabatista/">
          linkedin.com/in/fmaiabatista/
        </a>
      </p>
      <p>
        <Emoji icon="📱" label="mobile phone" margin="0 12px 0 0" />
        {!phone && (
          <Button onClickFn={() => setPhone(true)} label="Click to reveal" />
        )}
        {phone && <Phone />}
      </p>
      <p>
        <Emoji icon="✉️" label="envelope" margin="0 12px 0 0" />
        {!email && (
          <Button onClickFn={() => setEmail(true)} label="Click to reveal" />
        )}
        {email && <Email />}
      </p>
      <small>
        Note: Sorry for the trouble with the SVGs. It's to prevent abuse from
        spam bots.
      </small>
    </Layout>
  );
};

export default Contact;
