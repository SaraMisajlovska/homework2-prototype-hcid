(function(window, undefined) {
  var dictionary = {
    "9d9312e0-609b-4eb7-89b4-19dd5e5001ff": "typing page",
    "8cd112e6-eb88-4676-b734-ffb475ea9c9a": "my profile page",
    "a4946311-1476-47d9-9458-f8a9b1126ca3": "home page",
    "616a0412-334a-44cf-bec8-92c72bdd9860": "sign up page",
    "fe0d9ee2-bec2-433c-8956-c18ae37b0f24": "courses page",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "sign in page",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);