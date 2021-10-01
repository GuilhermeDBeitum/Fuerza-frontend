module.exports = {
  "extends": "airbnb",
  /*eslint linebreak-style: ["error", "windows"]*/
  "rules":{
    // Prevent warnings for webpack resolve aliases.
    "import/no-unresolved": "off",
    // Prevent warnings for webpack extension resolution.
    "import/extensions": "off",
    // Prevent warnings for import statements with aliases.
    "import/first": "off", "linebreak-style": 0
  },
  "globals": {
    "window": true,
    "document": true,
  }
  
};
