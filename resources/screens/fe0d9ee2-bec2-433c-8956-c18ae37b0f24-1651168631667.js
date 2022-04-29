jQuery("#simulation")
  .on("click", ".s-fe0d9ee2-bec2-433c-8956-c18ae37b0f24 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/fe0d9ee2-bec2-433c-8956-c18ae37b0f24"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8cd112e6-eb88-4676-b734-ffb475ea9c9a"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/a4946311-1476-47d9-9458-f8a9b1126ca3"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseup", ".s-fe0d9ee2-bec2-433c-8956-c18ae37b0f24 .mouseup", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-fe0d9ee2-bec2-433c-8956-c18ae37b0f24 #s-Text_4 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "transparent"
                    }
                  },{
                    "target": [ "#s-fe0d9ee2-bec2-433c-8956-c18ae37b0f24 #s-Text_4 .valign" ],
                    "attributes": {
                      "vertical-align": "middle",
                      "text-align": "center"
                    }
                  },{
                    "target": [ "#s-fe0d9ee2-bec2-433c-8956-c18ae37b0f24 #s-Text_4 span" ],
                    "attributes": {
                      "color": "#FFFFFF",
                      "text-align": "center",
                      "text-decoration": "none",
                      "font-family": "'OpenSans-Light_wgt200',Arial",
                      "font-size": "10.0pt"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-fe0d9ee2-bec2-433c-8956-c18ae37b0f24 #s-Text_5 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "transparent"
                    }
                  },{
                    "target": [ "#s-fe0d9ee2-bec2-433c-8956-c18ae37b0f24 #s-Text_5 .valign" ],
                    "attributes": {
                      "vertical-align": "middle",
                      "text-align": "center"
                    }
                  },{
                    "target": [ "#s-fe0d9ee2-bec2-433c-8956-c18ae37b0f24 #s-Text_5 span" ],
                    "attributes": {
                      "color": "#FFFFFF",
                      "text-align": "center",
                      "text-decoration": "none",
                      "font-family": "'OpenSans-Light_wgt200',Arial",
                      "font-size": "10.0pt"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-fe0d9ee2-bec2-433c-8956-c18ae37b0f24 #s-Text_7 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "transparent"
                    }
                  },{
                    "target": [ "#s-fe0d9ee2-bec2-433c-8956-c18ae37b0f24 #s-Text_7 .valign" ],
                    "attributes": {
                      "vertical-align": "middle",
                      "text-align": "center"
                    }
                  },{
                    "target": [ "#s-fe0d9ee2-bec2-433c-8956-c18ae37b0f24 #s-Text_7 span" ],
                    "attributes": {
                      "color": "#FFFFFF",
                      "text-align": "center",
                      "text-decoration": "none",
                      "font-family": "'OpenSans-Light_wgt200',Arial",
                      "font-size": "10.0pt"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mousedown", ".s-fe0d9ee2-bec2-433c-8956-c18ae37b0f24 .mousedown", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-fe0d9ee2-bec2-433c-8956-c18ae37b0f24 #s-Text_4 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#DDDDDD"
                    }
                  },{
                    "target": [ "#s-fe0d9ee2-bec2-433c-8956-c18ae37b0f24 #s-Text_4 span" ],
                    "attributes": {
                      "color": "#282828"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-fe0d9ee2-bec2-433c-8956-c18ae37b0f24 #s-Text_5 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#DDDDDD"
                    }
                  },{
                    "target": [ "#s-fe0d9ee2-bec2-433c-8956-c18ae37b0f24 #s-Text_5 span" ],
                    "attributes": {
                      "color": "#282828"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-fe0d9ee2-bec2-433c-8956-c18ae37b0f24 #s-Text_7 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#DDDDDD"
                    }
                  },{
                    "target": [ "#s-fe0d9ee2-bec2-433c-8956-c18ae37b0f24 #s-Text_7 span" ],
                    "attributes": {
                      "color": "#282828"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });