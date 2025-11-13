(() => {
  // node_modules/lucide/dist/esm/createElement.js
  var createElement = function createElement2(tag, attrs, children) {
    if (children === void 0) {
      children = [];
    }
    var element = document.createElementNS("http://www.w3.org/2000/svg", tag);
    Object.keys(attrs).forEach(function(name) {
      element.setAttribute(name, attrs[name]);
    });
    if (children.length) {
      children = children.forEach(function(child) {
        var childElement = createElement2.apply(void 0, child);
        element.appendChild(childElement);
      });
    }
    return element;
  };
  var createElement_default = function(_ref) {
    var tag = _ref[0], attrs = _ref[1], children = _ref[2];
    return createElement(tag, attrs, children);
  };

  // node_modules/lucide/dist/esm/replaceElement.js
  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  var getAttrs = function getAttrs2(element) {
    return Array.from(element.attributes).reduce(function(attrs, attr) {
      attrs[attr.name] = attr.value;
      return attrs;
    }, {});
  };
  var getClassNames = function getClassNames2(attrs) {
    if (typeof attrs === "string")
      return attrs;
    if (!attrs || !attrs["class"])
      return "";
    if (attrs["class"] && typeof attrs["class"] === "string") {
      return attrs["class"].split(" ");
    }
    if (attrs["class"] && Array.isArray(attrs["class"])) {
      return attrs["class"];
    }
    return "";
  };
  var combineClassNames = function combineClassNames2(arrayOfClassnames) {
    var classNameArray = arrayOfClassnames.flatMap(getClassNames);
    return classNameArray.map(function(classItem) {
      return classItem.trim();
    }).filter(Boolean).filter(function(value, index, self) {
      return self.indexOf(value) === index;
    }).join(" ");
  };
  var toPascalCase = function toPascalCase2(string) {
    return string.replace(/(\w)(\w*)(_|-|\s*)/g, function(g0, g1, g2) {
      return g1.toUpperCase() + g2.toLowerCase();
    });
  };
  var replaceElement_default = function(element, _ref) {
    var nameAttr = _ref.nameAttr, icons = _ref.icons, attrs = _ref.attrs;
    var iconName = element.getAttribute(nameAttr);
    var ComponentName = toPascalCase(iconName);
    var iconNode = icons[ComponentName];
    if (!iconNode) {
      return console.warn(element.outerHTML + " icon name was not found in the provided icons object.");
    }
    var elementAttrs = getAttrs(element);
    var tag = iconNode[0], iconAttributes = iconNode[1], children = iconNode[2];
    var iconAttrs = _extends({}, iconAttributes, {
      "icon-name": iconName
    }, attrs, elementAttrs);
    var classNames = combineClassNames(["lucide", "lucide-" + iconName, elementAttrs, attrs]);
    if (classNames) {
      iconAttrs["class"] = classNames;
    }
    var svgElement = createElement_default([tag, iconAttrs, children]);
    return element.parentNode.replaceChild(svgElement, element);
  };

  // node_modules/lucide/dist/esm/defaultAttributes.js
  var defaultAttributes_default = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": 2,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  };

  // node_modules/lucide/dist/esm/icons/building.js
  var Building = ["svg", defaultAttributes_default, [["rect", {
    x: "4",
    y: "2",
    width: "16",
    height: "20",
    rx: "2",
    ry: "2"
  }], ["path", {
    d: "M9 22v-4h6v4"
  }], ["path", {
    d: "M8 6h.01"
  }], ["path", {
    d: "M16 6h.01"
  }], ["path", {
    d: "M12 6h.01"
  }], ["path", {
    d: "M12 10h.01"
  }], ["path", {
    d: "M12 14h.01"
  }], ["path", {
    d: "M16 10h.01"
  }], ["path", {
    d: "M16 14h.01"
  }], ["path", {
    d: "M8 10h.01"
  }], ["path", {
    d: "M8 14h.01"
  }]]];
  var building_default = Building;

  // node_modules/lucide/dist/esm/icons/factory.js
  var Factory = ["svg", defaultAttributes_default, [["path", {
    d: "M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
  }], ["path", {
    d: "M17 18h1"
  }], ["path", {
    d: "M12 18h1"
  }], ["path", {
    d: "M7 18h1"
  }]]];
  var factory_default = Factory;

  // node_modules/lucide/dist/esm/icons/file-code.js
  var FileCode = ["svg", defaultAttributes_default, [["path", {
    d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"
  }], ["polyline", {
    points: "14 2 14 8 20 8"
  }], ["path", {
    d: "m9 18 3-3-3-3"
  }], ["path", {
    d: "m5 12-3 3 3 3"
  }]]];
  var file_code_default = FileCode;

  // node_modules/lucide/dist/esm/icons/globe.js
  var Globe = ["svg", defaultAttributes_default, [["circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }], ["line", {
    x1: "2",
    y1: "12",
    x2: "22",
    y2: "12"
  }], ["path", {
    d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
  }]]];
  var globe_default = Globe;

  // node_modules/lucide/dist/esm/icons/graduation-cap.js
  var GraduationCap = ["svg", defaultAttributes_default, [["path", {
    d: "M22 10v6M2 10l10-5 10 5-10 5z"
  }], ["path", {
    d: "M6 12v5c3 3 9 3 12 0v-5"
  }]]];
  var graduation_cap_default = GraduationCap;

  // node_modules/lucide/dist/esm/icons/home.js
  var Home = ["svg", defaultAttributes_default, [["path", {
    d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
  }], ["polyline", {
    points: "9 22 9 12 15 12 15 22"
  }]]];
  var home_default = Home;

  // node_modules/lucide/dist/esm/icons/landmark.js
  var Landmark = ["svg", defaultAttributes_default, [["line", {
    x1: "3",
    y1: "22",
    x2: "21",
    y2: "22"
  }], ["line", {
    x1: "6",
    y1: "18",
    x2: "6",
    y2: "11"
  }], ["line", {
    x1: "10",
    y1: "18",
    x2: "10",
    y2: "11"
  }], ["line", {
    x1: "14",
    y1: "18",
    x2: "14",
    y2: "11"
  }], ["line", {
    x1: "18",
    y1: "18",
    x2: "18",
    y2: "11"
  }], ["polygon", {
    points: "12 2 20 7 4 7"
  }]]];
  var landmark_default = Landmark;

  // node_modules/lucide/dist/esm/icons/line-chart.js
  var LineChart = ["svg", defaultAttributes_default, [["path", {
    d: "M3 3v18h18"
  }], ["path", {
    d: "m19 9-5 5-4-4-3 3"
  }]]];
  var line_chart_default = LineChart;

  // node_modules/lucide/dist/esm/icons/link.js
  var Link = ["svg", defaultAttributes_default, [["path", {
    d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
  }], ["path", {
    d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
  }]]];
  var link_default = Link;

  // node_modules/lucide/dist/esm/icons/mail.js
  var Mail = ["svg", defaultAttributes_default, [["rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "2"
  }], ["path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
  }]]];
  var mail_default = Mail;

  // node_modules/lucide/dist/esm/icons/menu.js
  var Menu = ["svg", defaultAttributes_default, [["line", {
    x1: "4",
    y1: "12",
    x2: "20",
    y2: "12"
  }], ["line", {
    x1: "4",
    y1: "6",
    x2: "20",
    y2: "6"
  }], ["line", {
    x1: "4",
    y1: "18",
    x2: "20",
    y2: "18"
  }]]];
  var menu_default = Menu;

  // node_modules/lucide/dist/esm/icons/package.js
  var Package = ["svg", defaultAttributes_default, [["line", {
    x1: "16.5",
    y1: "9.4",
    x2: "7.5",
    y2: "4.21"
  }], ["path", {
    d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
  }], ["polyline", {
    points: "3.29 7 12 12 20.71 7"
  }], ["line", {
    x1: "12",
    y1: "22",
    x2: "12",
    y2: "12"
  }]]];
  var package_default = Package;

  // node_modules/lucide/dist/esm/icons/terminal-square.js
  var TerminalSquare = ["svg", defaultAttributes_default, [["path", {
    d: "m7 11 2-2-2-2"
  }], ["path", {
    d: "M11 13h4"
  }], ["rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2",
    ry: "2"
  }]]];
  var terminal_square_default = TerminalSquare;

  // node_modules/lucide/dist/esm/icons/user.js
  var User = ["svg", defaultAttributes_default, [["path", {
    d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"
  }], ["circle", {
    cx: "12",
    cy: "7",
    r: "4"
  }]]];
  var user_default = User;

  // node_modules/lucide/dist/esm/icons/users.js
  var Users = ["svg", defaultAttributes_default, [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
  }], ["circle", {
    cx: "9",
    cy: "7",
    r: "4"
  }], ["path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87"
  }], ["path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75"
  }]]];
  var users_default = Users;

  // node_modules/lucide/dist/esm/icons/x.js
  var X = ["svg", defaultAttributes_default, [["line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }], ["line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }]]];
  var x_default = X;

  // node_modules/lucide/dist/esm/lucide.js
  var createIcons = function createIcons2(_temp) {
    var _ref = _temp === void 0 ? {} : _temp, _ref$icons = _ref.icons, icons = _ref$icons === void 0 ? {} : _ref$icons, _ref$nameAttr = _ref.nameAttr, nameAttr = _ref$nameAttr === void 0 ? "icon-name" : _ref$nameAttr, _ref$attrs = _ref.attrs, attrs = _ref$attrs === void 0 ? {} : _ref$attrs;
    if (!Object.values(icons).length) {
      throw new Error("Please provide an icons object.\nIf you want to use all the icons you can import it like:\n `import { createIcons, icons } from 'lucide';\nlucide.createIcons({icons});`");
    }
    if (typeof document === "undefined") {
      throw new Error("`createIcons()` only works in a browser environment.");
    }
    var elementsToReplace = document.querySelectorAll("[" + nameAttr + "]");
    Array.from(elementsToReplace).forEach(function(element) {
      return replaceElement_default(element, {
        nameAttr,
        icons,
        attrs
      });
    });
  };

  // <stdin>
  createIcons({
    icons: {
      Menu: menu_default,
      X: x_default,
      Mail: mail_default,
      Landmark: landmark_default,
      TerminalSquare: terminal_square_default,
      LineChart: line_chart_default,
      Package: package_default,
      FileCode: file_code_default,
      Link: link_default,
      Home: home_default,
      User: user_default,
      Users: users_default,
      Globe: globe_default,
      GraduationCap: graduation_cap_default,
      Factory: factory_default,
      Building: building_default
    }
  });
})();
