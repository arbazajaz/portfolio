import Head from "next/head";

const CustomHead = () => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* <link
        rel="shortcut icon"
        href="/assets/img/favicon.png"
        type="image/x-icon"
      /> */}
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="/assets/css/styles.css" />
      <title>Responsive Plants Website</title>
    </Head>
  );
};

export default CustomHead;
