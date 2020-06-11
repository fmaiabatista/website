import React from "react";
import Layout from "../components/layout";
import Title from "../components/title";
import RichList from "../components/richList";

const lists = {
  webdev: [
    {
      name: "Visual Studio Code",
      link: "https://code.visualstudio.com/",
      description: "Excelent Code Editor",
    },
    {
      name: "Insomnia",
      link: "https://insomnia.rest/",
      description: "Solid tool for Designing & Debugging APIs",
    },
  ],
  utilities: {
    crossos: [
      {
        name: "Colorpicker",
        link: "https://github.com/Toinane/colorpicker",
        description: "Minimal OS-wide Color Picker",
      },
      {
        name: "CopyQ",
        link: "https://hluk.github.io/CopyQ/",
        description: "Simple & Easy Clipboard Manager",
      },
      {
        name: "espanso",
        link: "https://espanso.org/",
        description: "Awesome Text Expander",
      },
      {
        name: "PDF Split & Merge",
        link: "https://pdfsam.org/",
        description: "Multi-purpose PDF Editor",
      },
    ],
    windows: [
      {
        name: "AutoHotKey",
        link: "https://www.autohotkey.com/",
        description: "Automation Scripting Language for Windows",
      },
      {
        name: "ShareX",
        link: "https://getsharex.com/",
        description: "Very flexible Screenshot, Video and Gif capture tool",
      },
      {
        name: "XYPlorer",
        link: "https://www.xyplorer.com/",
        description: "Very powerful File Manager & Explorer",
      },
    ],
    mac: [
      {
        name: "HammerSpoon",
        link: "https://www.hammerspoon.org/",
        description: "Automation Scripting Language for Mac",
      },
      {
        name: "LightShot",
        link: "https://app.prntscr.com/pt-br/index.html",
        description: "Solid replacement for ShareX in Mac",
      },
    ],
  },
};

const Uses = () => (
  <Layout>
    <Title title="Uses" tagline="In search of the Cross-Platform dream" />
    <div
      className="content"
      style={{
        background: "#00000010",
        padding: "40px",
        borderRadius: "12px",
      }}
    >
      <section>
        <h4>Web Development</h4>
        <RichList data={lists.webdev} />
        <h4>Utilities</h4>
        <h6>Cross-Plaftorm (Windows, Mac, Linux)</h6>
        <RichList data={lists.utilities.crossos} />
        <h6>Windows</h6>
        <RichList data={lists.utilities.windows} />
        <h6>Mac</h6>
        <RichList data={lists.utilities.mac} />
      </section>
    </div>
  </Layout>
);

export default Uses;
