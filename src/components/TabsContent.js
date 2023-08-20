const TabsContent = ({ isActiveTabContent }) => {
  return (
    <>
      <section>
        <div
          className={`${
            isActiveTabContent === 1 ? "content active-content" : "content"
          }`}
        >
          <h2>JavaScript</h2>
          <p>
            JS, is a programming language that is one of the core technologies
            of the World Wide Web, alongside HTML and CSS.object-oriented
            programming language used by developers to make web pages
            interactive.
          </p>
        </div>

        <div
          className={`${
            isActiveTabContent === 2 ? "content active-content" : "content"
          }`}
        >
          <h2>React Js</h2>
          <p>
            React is a free and open-source front-end JavaScript library for
            building user interfaces based on components. It is maintained by
            Meta and a community of individual developers and companies. React
            can be used to develop single-page, mobile, or server-rendered
            applications with frameworks like Next.js.
          </p>
        </div>

        <div
          className={`${
            isActiveTabContent === 3 ? "content active-content" : "content"
          }`}
        >
          <h2>Next Js</h2>
          <p>
            Next.js is an open-source web development framework created by the
            private company Vercel providing React-based web applications with
            server-side rendering and static website generation.
          </p>
        </div>
      </section>
    </>
  );
};

export default TabsContent;
