import React from "react";

const contactText = [
  {
      link: "https://open.kakao.com/me/jmsyaya",
      title: "Kakao : jmsyaya",
  },
  {
      link: "mailto:myeongsikjeong@gmail.com",
      title: "Mail : myeongsikjeong@gmail.com",
  },
];

const Contact = () => {
    return (
        <section id="contact">
            <div className="contact__inner">
                <h2 className="contact__title">Contact</h2>
                <div className="contact__lines top" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                <div className="contact__text">
                    <div className="text">
                      {contactText.map((contact, key) =>(
                        <div key={key}>
                        <a 
                          href={contact.link}
                          target="_blank" 
                          rel="noreferrer noopener"
                          >
                            {contact.title}
                        </a>
                    </div>
                      ))}
                    </div>
                </div>
                <div className="contact__lines" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </div>
        </section>
    );
};

export default Contact;   


//rafce -> 리엑트 기본 문법