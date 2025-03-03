"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.undefined = mod.exports;
  }
})(void 0, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Styles = function Styles(nDays) {
    return "\n        .JDatePicker {\n            width: 300px;\n            min-height: 210px;\n            padding: 5px;\n            position: absolute;\n            background: #fff;\n            border-radius: 5px;\n            z-index: 1;\n        }\n        .days-titles div {\n            width: 14.28%;\n            display: inline-block;\n            font-size: 14px;\n            font-weight: 300;\n            text-align: center;\n        }\n        .JDatePicker .JC-months {\n            position: relative;\n            display: inline-block;\n            width: 100%;\n        }\n        .JDatePicker .monthPicker {\n            position: absolute;\n            right: -6px;\n            width: 100%;\n            background: #fff;\n            text-align: center;\n            padding: 5px;\n            border-radius: 5px;\n            top: 26px;\n            box-shadow: 0px 0px 7px -2px #000;\n            z-index: 1;\n        }\n        .JDatePicker .month-items:hover, .JDatePicker .month-items.selected {\n            background: aliceblue;\n            color: #ccc;\n        }\n        .JDatePicker .month-items {\n            width: 32.5%;\n            float: right;\n            text-align: center;\n            cursor: pointer;\n            padding: 4px 0px;\n            border: 1px solid #ccc;\n            font-size: 14px;\n        }\n        .JDatePicker .JC-months .prev,  .JDatePicker .JC-months .next{\n            float: right;\n            width: 20%;\n            text-align: center;\n            transform: rotate(180deg);\n            cursor: pointer;\n        }\n\t\t\n        .JDatePicker .JC-months span:first-child{\n            float: right;\n            width: 15%;\n        }\n        .JDatePicker .JC-months .holder:last-child{\n            float: right;\n            width: 85%;\n        }\n        .JDatePicker .JC-days {\n            position: relative;\n            display: inline-block;\n            background: #f7f7f7;\n        }\n        .JDatePicker .JC-days .holder {\n            line-height: 24px;\n        }\n        .JDatePicker .print-month {\n            width: 60%;\n            text-align: center;\n            float: right;\n            cursor: pointer;\n        }\n        .JDatePicker .day-items{\n            width: 14.28%;\n            float: right;\n            text-align: center;\n            cursor: pointer;\n            //border-bottom: solid #fff 1px;\n            //border-left: 1px solid #fff;\n        }\n        .JDatePicker .day-items:hover, .JDatePicker .day-items.selected {\n            background: #fff;\n        }\n        .JDatePicker .JDheader .right, .JDatePicker .JDheader .left {\n            display: inline-block;\n            width: 50%;\n        }\n        .JDatePicker .JDheader select {\n            width: 94%;\n            border: none;\n            border-bottom: 1px solid;\n            padding: 0 20%;\n        }\n        .JDatePicker .JDheader .left{\n            text-align: center;\n        }\n        .JDatePicker .JDheader .right .number {\n            width: 70%;\n            direction: ltr;\n            text-align: center;\n            display: inline-block;\n        }\n        .JDatePicker .JDheader .right .number:hover {\n            border: 1px solid #ccc;\n            cursor: text !important;\n        }\n        .JDatePicker .JDheader .right input[type=\"tel\"] {\n            width: 40%;\n            z-index: 2;\n            direction: ltr;\n            text-align: center;\n            display: inline-block;\n            top: 8px;\n            position: absolute;\n        }\n        .JDatePicker .JC-tooltip {\n            position: absolute;\n            background: #d9d9d9;\n            z-index: 1;\n            padding: 0px 10px;\n        }\n        .JDatePicker button {\n            border: none;\n            color: #fff;\n            font-size: 16px;\n            margin: 0 10px;\n            width: 40px;\n            height: 26px;\n            border-radius: 5px;\n        }\n        .JDatePicker .JDsubmit{\n            background: #7fc6ff;\n        }\n        .jdtrp > div {\n            display: initial;\n            margin: 0 6px;\n        }\n        ";
  };
  exports["default"] = Styles;
});