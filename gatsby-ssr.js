const React = require("react");

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="netlify"
      src="https://identity.netlify.com/v1/netlify-identity-widget.js"
      async
      />,
      <script
      key="alpinejs"
      src="https://identity.netlify.com/v1/netlify-identity-widget.js"
      async
      />,
  ]);
};