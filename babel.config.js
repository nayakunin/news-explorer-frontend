const presets = [
  [
    "@babel/env",
    {
      targets: {
        android: "56",
        ios_saf: "11",
        edge: "15",
        firefox: "60",
        chrome: "64",
        safari: "11.1",
      },
      useBuiltIns: "usage",
      corejs: "3.0.0",
      "targets": {
        "esmodules": true,
        "ie": "11"
      }
    },
  ],
];

module.exports = { presets };