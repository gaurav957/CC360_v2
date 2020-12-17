"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

Vue.component("header-panel", {
  props: ["headerData"],
  template: "<div class=\"header-wrapper\">\n\t\t\t\t<div class=\"left-section\">\n\t\t\t\t\t<div class=\"burger-wrapper\">\n\t\t\t\t\t\t<div id=\"nav-icon3\" :class=\"headerData.leftPanelOpen=='true' ?'open':''\" @click=toggle>\n\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"logo-wrapper\">\n\t\t\t\t\t\t<img width=150 height=48 :src=\"headerData.logo\" />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"right-section\">\n\t\t\t\t\t<div><h3 v-html=\"headerData.headerTitle\">Contact Center Walkthrough</h3></div>\n\t\t\t\t</div>\n\t\t\t</div>",
  methods: {
    toggle: function toggle() {
      if (this.headerData.leftPanelOpen == "false") {
        this.headerData.leftPanelOpen = "true";
        document.getElementById("main-wrapper").classList.add("toggled");
      } else {
        this.headerData.leftPanelOpen = "false";
        document.getElementById("main-wrapper").classList.remove("toggled");
      }

      document.querySelector(".left-panel-open").value = this.headerData.leftPanelOpen; // setTimeout(()=>{this.$parent.updateRightHeight();},300);//calling parent
    }
  },
  mounted: function mounted() {
    //console.log(this.headerData.leftPanelOpen == 'true')
    if (this.headerData.leftPanelOpen == "true") {
      document.getElementById("main-wrapper").classList.add("toggled");
    } else {
      document.getElementById("main-wrapper").classList.remove("toggled");
    }

    document.querySelector(".left-panel-open").value = this.headerData.leftPanelOpen;
  }
});
Vue.component("footer-panel", {
  props: ["footerData"],
  data: function data() {
    return {
      nextEnable: true,
      prevEnable: true,
      intialQuestions: 0,
      totalQuestions: 0
    };
  },
  template: "<div class=\"footer clearfix\">\n  <div class=\"navigation-block clearfix\">\n    <div class=\"right question-footer\">\n      <span class=\"tt-ans\"><span v-html=\"footerData.ttlCnt\"></span> <span v-html=\"this.intialQuestions\"></span>/<span v-html=\"this.totalQuestions\"></span></span>\n\t\t   <div class=\"btn-item pre\" :class=\"prevEnable == true?'':'disable'\" v-html=footerData.prevTxt @click=\"prevEnable == true?PrevPage():''\" ></div>\n\t\t   <div class=\"btn-item frw\" :class=\"nextEnable == true?'':'disable'\" v-html=footerData.forwardTxt @click=\"nextEnable == true?nextPage(footerData.forwardVal):''\"></div>\n\t  </div>\n  </div>\n  <div class=\"copyright-block clearfix\"><div class=\"footer-mck f-left\"><img :src=\"footerData.footerLogo\" alt=\"\" title=\"\"></div><div class=\"copy-rt r-right\" v-html=footerData.copyrghtTxt></div></div>\n</div>",
  methods: {
    nextPage: function nextPage() {
      this.$parent.NextPageBtnClckParent(); //calling parent
    },
    PrevPage: function PrevPage() {
      this.$parent.PrevPageBtnClckParent(); //calling parent
    },
    disablePrev: function disablePrev() {
      this.prevEnable = false;
    },
    disableNext: function disableNext() {
      this.nextEnable = false;
    },
    setAllQuestions: function setAllQuestions(totalAnswered, totalQuestions) {
      this.intialQuestions = totalAnswered;
      this.totalQuestions = totalQuestions;
    }
  }
});
Vue.component("left-panel", {
  props: ["LeftData"],
  template: "\n              <div class='side-nav-wrapper'>\n              <div class='side-nav-scroll'>\n                <ul v-if=\"LeftData.links.length>0\" class=\"menu-list\">\n                  <li v-for=\"(item,index) in LeftData.links\" :key=\"item.menuVal\">\n                    <div class=\"nav-item\" :data-menuval = item.menuVal :id='\"menu_\"+index' :class=\"{selected:LeftData.seltdVal == item.menuVal,open:LeftData.seltdVal == item.menuVal}\"\n                    v-on:click.stop=\"navClick(item.menuVal,'')\">\n                      <span>{{item.menuTxt}}</span>\n                      <span class=\"prgs-notify-icon\" :class=\"[item.curState==0?'nc':'',item.curState==1?'prg':'',item.curState==2?'com':'']\"></span>\n                      <span class=\"rt-prgs\">\n                        <span v-if=\"item.initialQAnsd && item.totalQues\">\n                          {{item.initialQAnsd+\"\"+item.intialUponTtl+\"\"+item.totalQues}}\n                        </span>\n                      </span>\n                    </div>\n                  </li>\n                </ul>\n                </div>\n              </div>\n    ",
  mounted: function mounted() {
    document.getElementById("left-panel-menu-slctn").value = this.LeftData.seltdVal;
    var linksLen = this.LeftData.links.length;

    if (this.LeftData.links[0].menuVal == this.LeftData.seltdVal) {
      this.$parent.disPrevParent(); //calling parent
    }

    if (this.LeftData.links[linksLen - 1].menuVal == this.LeftData.seltdVal) {
      this.$parent.disNextParent(); //calling parent
    }

    this.checkSubmitBtn();
    this.updatteAllQuestions();
    document.addEventListener("DOMContentLoaded", function () {
      //The first argument are the elements to which the plugin shall be initialized
      //The second argument has to be at least a empty object or a object with your desired options
      OverlayScrollbars(document.querySelector(".side-nav-scroll"), {});
    });
  },
  methods: {
    navClick: function navClick(menuVal, sublinkVal) {
      document.getElementById("left-panel-menu-slctn").value = menuVal; // document.getElementById("left-panel-subMenu-slctn").value = sublinkVal;

      document.getElementById("forwardbutton").click();
    },
    openBelow: function openBelow(index, e) {// var node = e.target;
      // if(node.className.indexOf('nav-item') < 0){
      //   while ((node = node.parentNode) && node.className.indexOf('nav-item') < 0);
      // }
      // if(node.classList.contains('open')){
      //   node.classList.remove("open");
      // }else{
      //   node.classList.add("open");
      // }
      // var id = 'menu_'+index;
      // var el = document.getElementById(id).nextElementSibling;
      // if(el.classList.contains('open')){
      //   el.classList.remove("open");
      // }else{
      //   el.classList.add("open");
      // }
    },
    updateQuesAttempt: function updateQuesAttempt(ttlAttempt) {
      var _iterator = _createForOfIteratorHelper(this.LeftData.links),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var link = _step.value;

          if (this.LeftData.seltdVal == link.menuVal) {
            link.initialQAnsd = ttlAttempt.toString(); //setting badge icon

            if (link.initialQAnsd == 0) {
              link.curState = 0;
            } else if (link.initialQAnsd > 0 && link.initialQAnsd < link.totalQues) {
              link.curState = 1;
            } else if (link.initialQAnsd == link.totalQues) {
              link.curState = 2;
            } //setting badge icon

          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.checkSubmitBtn();
    },
    checkSubmitBtn: function checkSubmitBtn() {
      if (!Object.entries) {
        Object.entries = function (obj) {
          var ownProps = Object.keys(obj),
              i = ownProps.length,
              resArray = new Array(i); // preallocate the Array

          while (i--) {
            resArray[i] = [ownProps[i], obj[ownProps[i]]];
          }

          return resArray;
        };
      }

      var mandQuesVal = this.LeftData.mandatoryQuesVal;
      var ttlManAttempt = 0;
      var ttlManQues = 0;

      for (var _i = 0, _Object$entries = Object.entries(this.LeftData.links); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            linkIndex = _Object$entries$_i[0],
            link = _Object$entries$_i[1];

        linkIndex = Number(linkIndex);

        if (mandQuesVal.indexOf(link.menuVal) != -1) {
          ttlManAttempt += Number(link.initialQAnsd);
          ttlManQues += Number(link.totalQues);
        }
      } //this was condition when all question are answered now submimt button on last page
      // if (ttlManAttempt == ttlManQues) {
      //   this.$parent.updatePrgsSubmit("enable"); //calling parent
      // } else {
      //   this.$parent.updatePrgsSubmit("disable"); //calling parent
      // }

    },
    PrevbtnClick: function PrevbtnClick() {
      if (!Object.entries) {
        Object.entries = function (obj) {
          var ownProps = Object.keys(obj),
              i = ownProps.length,
              resArray = new Array(i); // preallocate the Array

          while (i--) {
            resArray[i] = [ownProps[i], obj[ownProps[i]]];
          }

          return resArray;
        };
      }

      for (var _i2 = 0, _Object$entries2 = Object.entries(this.LeftData.links); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
            linkIndex = _Object$entries2$_i[0],
            link = _Object$entries2$_i[1];

        linkIndex = Number(linkIndex);

        if (this.LeftData.seltdVal == link.menuVal) {
          document.getElementById("left-panel-menu-slctn").value = this.LeftData.links[linkIndex - 1].menuVal;
        }
      }

      document.getElementById("forwardbutton").click();
    },
    NextbtnClick: function NextbtnClick() {
      if (!Object.entries) {
        Object.entries = function (obj) {
          var ownProps = Object.keys(obj),
              i = ownProps.length,
              resArray = new Array(i); // preallocate the Array

          while (i--) {
            resArray[i] = [ownProps[i], obj[ownProps[i]]];
          }

          return resArray;
        };
      }

      for (var _i3 = 0, _Object$entries3 = Object.entries(this.LeftData.links); _i3 < _Object$entries3.length; _i3++) {
        var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 2),
            linkIndex = _Object$entries3$_i[0],
            link = _Object$entries3$_i[1];

        linkIndex = Number(linkIndex);

        if (this.LeftData.seltdVal == link.menuVal) {
          document.getElementById("left-panel-menu-slctn").value = this.LeftData.links[linkIndex + 1].menuVal;
        }
      }

      document.getElementById("forwardbutton").click();
    },
    updatteAllQuestions: function updatteAllQuestions() {
      if (!Object.entries) {
        Object.entries = function (obj) {
          var ownProps = Object.keys(obj),
              i = ownProps.length,
              resArray = new Array(i); // preallocate the Array

          while (i--) {
            resArray[i] = [ownProps[i], obj[ownProps[i]]];
          }

          return resArray;
        };
      }

      var totalQuestions = 0;
      var totalAnswered = 0;

      for (var _i4 = 0, _Object$entries4 = Object.entries(this.LeftData.links); _i4 < _Object$entries4.length; _i4++) {
        var _Object$entries4$_i = _slicedToArray(_Object$entries4[_i4], 2),
            linkIndex = _Object$entries4$_i[0],
            link = _Object$entries4$_i[1];

        linkIndex = Number(linkIndex);
        totalQuestions += Number(link.totalQues);
        totalAnswered += Number(link.initialQAnsd);
      }

      this.$parent.setTotalQuestions(totalAnswered, totalQuestions); //calling parent
    }
  }
});
Vue.component("right-panel", {
  props: ["rightData", "progressData", "leftData"],
  template: "\n  <div class=\"right-panel-wrapper\">\n  <div class=\"right-panel clearfix\">\n    <progress-panel ref=\"prsPanel\" :progress-data=\"progressData\"></progress-panel>\n    <div class=\"survey-wrapper\"> \n      <div class=\"scrollable\">\n      <div class=\"questions-inner\" v-for=\"qType of rightData\" v-if=\"qType.catType ===1\">\n          <h2 class=\"ques-heading\" v-html='qType.heading'></h2>\n          <div class=\"question-type1\">\n            <h4 class=\"sub-heading\" v-html='qType.subheading'></h4>\n            <p class=\"question-line\" v-html='qType.categoryHeading'></p>\n            <div class=\"q-gutter\">\n            <div class=\"question-row\" v-for=\"(question,quesIndex) of qType.questions\">\n              <div class=\"question-group\" v-if=\"question.type=='dd'\">\n                <div class=\"text-label\"><span v-html='question.optionName'></span> \n                  <span class=\"tooltips\">\n                      <div class=\"tooltip\">\n                        <span class=\"custom-infoicon\"  @click=\"toltiptoggle\"></span>\n                        <span class=\"tooltiptext\" v-html=\"question.description\"></span>\n                      </div>\n                  </span>\n                </div>\n                <div class=\"input-box\">\n                \n                  <select class=\"cst-form-control\" @change=\"handleSelect(qType.catType, quesIndex, null, $event)\" >\n                    <option  disabled  v-html=\"question.placeholder\" :selected=\"question.selectedId==''\" ></option>\n                    <option v-for=\"option of question.options\" v-html=\"option.ddName\" :value=\"option.ddId\" :selected=\"option.ddId==question.selectedId\">                   \n                    </option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"question-group\" v-if=\"question.type=='txt' || question.type=='num'\">\n                <div class=\"text-label\"><span v-html=\"question.optionName\"></span>\n                  <span class=\"tooltips\">\n                    <div class=\"tooltip\">\n                      <span class=\"custom-infoicon\"  @click=\"toltiptoggle\"></span>\n                      <span class=\"tooltiptext\" v-html=\"question.description\"></span>\n                    </div>\n                  </span>\n                </div>\n                <div class=\"input-box\">\n                  <input type=\"text\" class=\"cst-form-control\" :placeholder=\"question.placeholder\" @input=\"handleInput(question,qType.catType,quesIndex,null ,$event)\" :value=\"question.selectedText\" />\n                </div>\n                <div v-html=\"question.afterText\" class=\"after-text\"></div>\n              </div>\n              <div class=\"question-group\" v-if=\"question.type=='numlist'\">\n                <div class=\"text-label\"><span v-html='question.optionName'></span> \n                  <span class=\"tooltips\">\n                      <div class=\"tooltip\">\n                        <span class=\"custom-infoicon\"  @click=\"toltiptoggle\"></span>\n                        <span class=\"tooltiptext\" v-html=\"question.description\"></span>\n                      </div>\n                  </span>\n                </div>\n                <div class=\"input-box\">\n                \n                  <select class=\"cst-form-control numlist-select\" @change=\"handleNumlist(quesIndex,$event)\" >\n                    <option  disabled  v-html=\"question.placeholder\" :selected=\"question.selectedId==''\" ></option>\n                    <option v-for=\"option of question.options\" v-html=\"option.ddName\" :value=\"option.ddId\" :selected=\"option.ddId==question.selectedId\" :data-input-id=\"option.textId\">                   \n                    </option>\n                  </select>\n                  <input type=\"text\" :disabled=\"question.selectedId==''\" class=\"numlist-input cst-form-control\" :value=\"question.selectedText\" :data-text=\"question.selectTextId\" placeholder=\"%\" @input=\"numListInput(question,quesIndex,$event)\" />\n                </div>\n              </div>\n              <div class=\"question-group cus-ddd\" v-if=\"question.type=='ddd'\">\n                <div class=\"text-label\">\n                  <div class=\"tool-wrapper-ddd\">\n                    <span v-html='question.optionName'></span> \n                    <span class=\"tooltips\">\n                        <div class=\"tooltip\">\n                          <span class=\"custom-infoicon\"  @click=\"toltiptoggle\"></span>\n                          <span class=\"tooltiptext\" v-html=\"question.description\"></span>\n                        </div>\n                    </span>\n                  </div>\n                  <div class=\"tool-wrapper-ddd\">\n                    <span v-html='question.optionName'></span> \n                    <span class=\"tooltips\">\n                        <div class=\"tooltip\">\n                          <span class=\"custom-infoicon\"  @click=\"toltiptoggle\"></span>\n                          <span class=\"tooltiptext\" v-html=\"question.description\"></span>\n                        </div>\n                    </span>\n                  </div>\n                </div>\n                <div class=\"input-box\">\n                \n                  <select id=\"cars\" :dependent-one=\"'cars2_'+quesIndex\" :dependent-two=\"'cars3_'+quesIndex\" class=\"cst-form-control\" @change=\"handleSelect(qType.catType, quesIndex, null, $event)\" >\n                    <option  disabled  v-html=\"question.placeholder\" :selected=\"question.selectedId==''\" ></option>\n                    <option v-for=\"(option,optionIndex) of question.options\" :data-valid=\"yoman(optionIndex,question.map)\" v-html=\"option.ddName\" :value=\"option.ddId\" :selected=\"option.ddId==question.selectedId\">                   \n                    </option>\n                  </select>\n                  \n                  <div class=\"multiselect\" :id=\"'cars2_'+quesIndex\" :dependent-two=\"'cars3_'+quesIndex\" >\n                    <div class=\"multiselectBox-container\">\n                    <select class=\"cst-form-control\">\n                      <option v-html=\"question.placeholder\"></option>\n                    </select>\n                    <div class=\"overSelect\"></div>\n                      <div id=\"checkboxes\" class=\"cus-ddd level_1_dd\">\n                        <label v-for=\"(option,optionIndex) of question.options2\" :for=\"'level1-'+option.ddId\" :data-attr=\"'level1-'+option.ddId\">\n                          <input type=\"checkbox\" :id=\"'level1-'+option.ddId\" :data-valid=\"yoman(optionIndex,question.map2)\"/><span v-html=\"option.ddName\">First checkbox</span></label>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"multiselect\" :id=\"'cars3_'+quesIndex\">\n                    <div class=\"multiselectBox-container\">\n                    <select class=\"cst-form-control\">\n                      <option v-html=\"question.placeholder\"></option>\n                    </select>\n                    <div class=\"overSelect\"></div>\n                      <div id=\"checkboxes2\" class=\"cus-ddd level_2_dd\">\n                        <label v-for=\"(option,optionIndex) of question.options3\" :for=\"'level2-'+option.ddId\" :data-attr=\"'level2-'+option.ddId\">\n                          <input type=\"checkbox\" :id=\"'level2-'+option.ddId\"  /><span v-html=\"option.ddName\">First checkbox</span></label>\n                      </div>\n                    </div>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n            </div>\n          </div>          \n        </div>\n   \n        <div class=\"questions-inner\" v-for=\"qType of rightData\" v-if=\"qType.catType ===2\">\n          <h2 class=\"ques-heading\" v-html='qType.heading'></h2>\n          <div class=\"question-type2\" >\n            <h4 class=\"sub-heading\" v-html='qType.subheading'></h4>           \n            <div class=\"question-row\" v-for=\"(question,quesIndex) of qType.questions\" :class=\"{'wide': question.quesLength>1 }\">                          \n            <div class=\"question-line\" v-html='question.questionHeading'></div>\n              <div class=\"question-group\" v-for=\"(option,optionIndex) of question.options\">\n                <div class=\"text-label\"><span v-html='option.optionName'></span>\n                  <span class=\"tooltips\">\n                      <div class=\"tooltip\">\n                        <span class=\"custom-infoicon\"  @click=\"toltiptoggle\"></span>\n                        <span class=\"tooltiptext\" v-html=\"option.description\"></span>\n                      </div>\n                  </span>\n                </div>\n                <div class=\"input-box\">\n          \n                  <input v-if=\"option.type=='num' || option.type=='txt'\" type=\"text\" :placeholder=\"option.placeholder\"\n                  class=\"cst-form-control\"  :value=\"option.selectedText\" @input=\"handleInput(option,qType.catType, quesIndex,optionIndex ,$event)\">\n                  <div  v-if=\"option.type=='num' || option.type=='txt'\" type=\"text\" v-html=\"option.afterText\" class=\"after-text\"></div>\n                  <select v-if=\"option.type=='dd' \" class=\"cst-form-control\" @change=\"handleSelect(qType.catType, quesIndex,optionIndex,$event)\" >\n                      <option disabled v-html=\"option.placeholder\" :selected=\"option.selectedId==''\"></option>\n                      <option v-for=\"quesOption of option.options\" v-html=\"quesOption.ddName\" :value=\"quesOption.ddId\" :selected=\"option.selectedId==quesOption.ddId\"></option>\n                    </select>\n                </div>\n              </div>\n            </div>\n            \n          </div>          \n        </div> \n      </div>\n    </div>\n  </div>\n</div>\n  ",
  mounted: function mounted() {
    var _this = this;

    // this.setHeight();
    // window.addEventListener("resize", this.setHeight);
    document.addEventListener("DOMContentLoaded", function () {
      //The first argument are the elements to which the plugin shall be initialized
      //The second argument has to be at least a empty object or a object with your desired options
      // OverlayScrollbars(document.querySelector('.side-nav-scroll'), { });
      var instance = OverlayScrollbars(document.querySelector(".scrollable"), {}); // instance.scroll({ el: document.getElementById('hellomoto'), block : "center"}, 100);

      var scrollHeight = _this.rightData[0].scrollPosition;
      console.log(_this.rightData);

      if (scrollHeight == "") {
        scrollHeight = 0;
      }

      instance.scroll({
        x: 0,
        y: scrollHeight
      }, 100); // setTimeout(function(){console.log(instance.scroll().position.y)},1000);
    });
    document.addEventListener("click", function () {
      document.querySelectorAll(".tooltip-show").forEach(function (elem) {
        return elem.classList.remove("tooltip-show");
      });
    });
    $(".numlist-select").trigger("change"); //All code for dependednt drop down level 2

    $("#checkboxes").find("label").hide(0);
    $("#checkboxes2").find("label").hide(0);
    $(document).mouseup(function (e) {
      var container = $(".multiselect"); // if the target of the click isn't the container nor a descendant of the container

      if (!container.is(e.target) && container.has(e.target).length === 0) {
        //container.hide();
        $(".cus-ddd").removeClass("isopened");
      }
    });
    $(".multiselectBox-container").click(function () {
      //$(".cus-ddd").removeClass("isopened");
      if ($(this).find(".cus-ddd").hasClass("isopened")) {
        $(this).find(".cus-ddd").removeClass("isopened");
      } else {
        $(this).find(".cus-ddd").addClass("isopened");
      }
    });
    $("#cars").change(function () {
      //console.log("called");
      var dependednt1Id = $(this).attr("dependent-one");
      var dependednt2Id = $(this).attr("dependent-two");
      var getSelected = $(this).find(":selected").attr("data-valid"); //console.log("getSelected::"+getSelected);

      var dataValidArr = getSelected.split("|"); //console.log("dataValidArr::"+dataValidArr)
      //remove all data

      $("#" + dependednt1Id + " #checkboxes").find("label").hide(0);
      $("#" + dependednt1Id + " #checkboxes").find("input").prop("checked", false);
      $("#" + dependednt1Id).find("select").empty();
      $("#" + dependednt1Id).find("select").append('<option selected disabled>Please select</option>');
      $("#" + dependednt2Id + " #checkboxes2").find("label").hide(0);
      $("#" + dependednt2Id + " #checkboxes2").find("input").prop("checked", false);
      $("#" + dependednt2Id).find("select").empty();
      $("#" + dependednt2Id).find("select").append('<option selected disabled>Please select</option>'); //remove from confirmitr as well

      $("#" + dependednt1Id).find("input").each(function () {
        var getId = $(this).prop("id").split("-")[1];
        $("#" + getId).prop("checked", false);
      });
      $("#" + dependednt2Id).find("input").each(function () {
        var getId = $(this).prop("id").split("-")[1];
        $("#" + getId).prop("checked", false);
      }); //remove from confirmitr as well
      //remove all data

      if (dataValidArr[0] != "") {
        dataValidArr.forEach(function (value, index) {
          $("#" + dependednt1Id + " #checkboxes").find("[data-attr=level1-" + value + "]").show(0);
        });
      }
    });
    $(".level_1_dd input").click(function (event) {
      var getId = $(this).parent().parent().find("input:checked:last").attr("id");
      var getText = $(this).parent().parent().find("input:checked:last").parent().text(); // console.log($(this).parent().parent().find("input:checked:last"))
      // console.log(getText)

      $(this).closest(".multiselect").find("select").empty();

      if (getId != undefined) {
        getId = getId.split("_")[1];
        $(this).closest(".multiselect").find("select").append('<option>' + getText + '</option>'); // if($(this).closest(".multiselect").find("select [data-show="+getId+"]").length==0){
        // }
      } else {
        $(this).closest(".multiselect").find("select").append('<option>Please select</option>');
      }

      var dd3 = $(this).closest(".multiselect").attr("dependent-two");
      $("#" + dd3 + " #checkboxes2").find("label").hide(0);
      $("#" + dd3 + " #checkboxes2").find("input").prop("checked", false);
      $("#" + dd3).find("select").empty();
      $("#" + dd3).find("select").append('<option>Please select</option>');
      checkfornextDD(dd3, $(this).closest(".multiselect").prop("id"));
      console.log("kjdsfkds");
      $(this).parent().find("input").each(function () {
        var getId = $(this).prop("id").split("-")[1];

        if ($(this).is(":checked")) {
          $("#" + getId).prop("checked", true);
          console.log(getId);
        } else {
          $("#" + getId).prop("checked", false);
        }
      });
    });

    function checkfornextDD(thirdId, level1Id) {
      var totalIndex = [];
      $("#" + level1Id).find("input:checked").each(function () {
        var allData = $(this).attr("data-valid").split("|");

        if (allData[0] != "") {
          allData.forEach(function (cv, index) {
            totalIndex.push(cv);
          });
        }
      });
      var uniqueNames = [];
      $.each(totalIndex, function (i, el) {
        if ($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
      });
      console.log(uniqueNames);
      uniqueNames.forEach(function (el, index) {
        $("#" + thirdId).find("[data-attr=level2-" + el + "]").show(0);
      });
    }

    $(".level_2_dd input").click(function (event) {
      $(this).parent().find("input").each(function () {
        var getId = $(this).prop("id").split("-")[1];

        if ($(this).is(":checked")) {
          $("#" + getId).prop("checked", true);
        } else {
          $("#" + getId).prop("checked", false);
        }
      });
    }); //All code for dependednt drop down level 2
  },
  methods: {
    yoman: function yoman(optionIndex, mapping) {
      //console.log(optionIndex)
      //console.log(mapping)
      var optionIndex = optionIndex + 1; //for making new tab

      var dependecnyVar = "";
      mapping.split("|").forEach(function (value, index) {
        var indexing = value.split(":")[0];
        var dependency = value.split(":")[1];

        if (Number(optionIndex) == Number(indexing)) {
          dependecnyVar = dependency.replace(/-/g, "|");
        }
      });
      return dependecnyVar; //console.log("yo man called");
    },
    openAccordion: function openAccordion(e) {
      e.stopPropagation();

      if (e.target.className.split(" ").indexOf("active") == -1) {
        e.target.className += " active";
        e.target.nextElementSibling.style.maxHeight = e.target.nextElementSibling.scrollHeight + "px";
      } else {
        e.target.className = e.target.className.replace(" active", "");
        e.target.nextElementSibling.style.maxHeight = null;
      }
    },
    handleSelect: function handleSelect(catType, quesIndex, optionIndex, e) {
      //dropdown
      if (catType == 1) {
        this.rightData.forEach(function (category) {
          if (category.catType == 1) {
            category.questions[quesIndex].selectedId = e.target.value;
          }
        });
      }

      if (catType == 2) {
        this.rightData.forEach(function (category) {
          if (category.catType == 2) {
            category.questions[quesIndex].options[optionIndex].selectedId = e.target.value;
          }
        });
      }

      this.updateProgressData();
      document.getElementById(e.target.value).click();
    },
    handleInput: function handleInput(question, catType, quesIndex, optionIndex, e) {
      var type = question.type,
          maxLength = question.maxLength,
          selectedId = question.selectedId;
      var val, valArr;

      if (type == "num") {
        val = e.target.value.trim();
        valArr = val.split("");

        if (isNaN(val)) {
          valArr = valArr.filter(function (ch) {
            return !isNaN(ch);
          });
        }
      }

      if (type == "txt") {
        val = e.target.value;
        valArr = val.split("");

        for (var i = 0; i < valArr.length; i++) {
          var ch = valArr[i];

          if (ch == ' ') {
            valArr.splice(i, 1);
            console.log(valArr);
          } else {
            break;
          }
        }

        valArr = valArr.filter(function (ch) {
          return /^[a-zA-Z\s]*$/.test(ch);
        });
      }

      if (Number(valArr.join("")) > question.maxRange) {
        valArr.pop();
      }

      if (valArr.length > maxLength) {
        if (valArr[valArr.length - 1] == " ") {
          valArr = valArr.join("").trim().split("");
        } else {
          valArr.pop();
        }
      }

      val = valArr.join("");

      if (catType == 1) {
        this.rightData.forEach(function (category) {
          if (category.catType == 1) {
            category.questions[quesIndex].selectedText = val;
          }
        });
      }

      if (catType == 2) {
        this.rightData.forEach(function (category) {
          if (category.catType == 2) {
            category.questions[quesIndex].options[optionIndex].selectedText = val;
          }
        });
      }

      this.updateProgressData();
      e.target.value = val;
      document.getElementById(selectedId).value = val;
    },
    updateProgressData: function updateProgressData() {
      var totalAttempted = 0;
      this.rightData.forEach(function (data) {
        if (data.catType == 1) {
          data.questions.forEach(function (question) {
            if (question.type == "dd") {
              if (question.selectedId !== "") {
                totalAttempted++;
              }
            }

            if (question.type == "txt" || question.type == "num") {
              if (question.selectedText !== "") {
                totalAttempted++;
              }
            }
          });
        }

        if (data.catType == 2) {
          data.questions.forEach(function (question) {
            question.options.forEach(function (option) {
              if (option.type == "dd") {
                if (option.selectedId !== "") {
                  totalAttempted++;
                }
              }

              if (option.type == "txt" || option.type == "num") {
                if (option.selectedText !== "") {
                  totalAttempted++;
                }
              }
            });
          });
        }
      }); // this.progressData.answrdQues = totalAttempted;
      // this.progressData.percentge = parseInt(
      //   (totalAttempted / Number(this.progressData.totalQues)) * 100
      // );

      this.$parent.updateLeftQuestionAttempt(totalAttempted); //calling parent

      this.$parent.getTotalQuestions(); //calling parent

      this.$refs.prsPanel.updateProgresbar(totalAttempted); //calling child component
    },
    // handleKeyDown: function (catIn, subCatIn, quesInd, ques_id, e) {
    //   this.rightData.categories[catIn].subCategories[subCatIn].questions[
    //     quesInd
    //   ].detailVal = e.target.value;
    //   if (document.getElementById(ques_id)) {
    //     document.getElementById(ques_id).value = e.target.value;
    //   }
    // },
    // handleAnswerSelect: function (dataId, catIn, subCatIn, quesInd) {
    //   this.rightData.categories[catIn].subCategories[subCatIn].questions[
    //     quesInd
    //   ].selected = dataId;
    //   if (document.getElementById(dataId)) {
    //     document.getElementById(dataId).click();
    //   }
    //   let ttlAttempt = 0;
    //   for (let category of this.rightData.categories) {
    //     for (let subCat of category.subCategories) {
    //       for (let question of subCat.questions) {
    //         if (question.selected != "") {
    //           ttlAttempt++;
    //         }
    //       }
    //     }
    //   }
    //   this.$parent.updateLeftQuestionAttempt(ttlAttempt); //calling parent
    //   this.$refs.prsPanel.updateProgresbar(ttlAttempt); //calling child component
    // },
    // setHeight: function () {
    //   var surRows = document.getElementsByClassName("survey-row");
    //   for (let surRow of surRows) {
    //     var headHght = 0;
    //     var bodyHght = 0;
    //     for (let rowChild of surRow.children) {
    //       let srvyCard = rowChild.children[0];
    //       srvyCard.children[0].setAttribute("style", "height:auto");
    //       srvyCard.children[1].setAttribute("style", "height:auto");
    //       let sCradHeaderHght = srvyCard.children[0].offsetHeight;
    //       let sCradBodyHght = srvyCard.children[1].offsetHeight;
    //       if (headHght < sCradHeaderHght) {
    //         headHght = sCradHeaderHght;
    //       }
    //       if (bodyHght < sCradBodyHght) {
    //         bodyHght = sCradBodyHght;
    //       }
    //       //srvyCard.children[0].setAttribute("style","height:"+headHght+"px");
    //       //srvyCard.children[1].setAttribute("style","height:"+bodyHght+"px");
    //     }
    //     let rowHeaders = surRow.getElementsByClassName("s-crad-header");
    //     let rowBodies = surRow.getElementsByClassName("s-crad-body");
    //     let rowHeadersArr = [...rowHeaders];
    //     let rowBodiesArr = [...rowBodies];
    //     rowHeadersArr.map((el) => {
    //       el.setAttribute("style", "height:" + headHght + "px");
    //     });
    //     rowBodiesArr.map((el) => {
    //       el.setAttribute("style", "height:" + bodyHght + "px");
    //     });
    //   }
    // },
    enabDisSubmit: function enabDisSubmit(endis) {
      this.$refs.prsPanel.enabDisSubmit(endis); //calling child component
    },
    toltiptoggle: function toltiptoggle(e) {
      var isClass = false;

      if (e.target.parentNode.classList.contains("tooltip-show")) {
        isClass = true;
      }

      document.querySelectorAll(".tooltip-show").forEach(function (elem) {
        return elem.classList.remove("tooltip-show");
      });
      var list = e.target.parentNode.classList;

      if (isClass) {
        e.target.parentNode.classList.remove("tooltip-show");
      } else {
        setTimeout(function () {
          e.target.parentNode.classList.add("tooltip-show");
        }, 0);
      }
    },
    setScrollHeight: function setScrollHeight() {
      var instance = OverlayScrollbars(document.querySelector(".scrollable"), {});
      var scrollHeight = instance.scroll().position.y;
      document.getElementById("scroll-value").value = scrollHeight;
    },
    handleNumlist: function handleNumlist(quesIndex, e) {
      console.log(quesIndex);
      $(e.target).find("option").each(function (index, elem) {
        var getradio = $(this).attr("value");
        var getText = $(this).attr("data-input-id");
        $("#" + getradio).prop("checked", false);
        $("#" + getText).val("");
      });
      var selectedOption = $(e.target).find(":selected");
      var dataText = $(selectedOption).attr("data-input-id");
      var dataId = $(selectedOption).attr("value");
      $("#" + dataId).prop("checked", true);
      $(e.target).parent().find("input").attr("data-text", dataText).val("");
      this.rightData[0].questions[quesIndex].selectedId = dataId;
    },
    numListInput: function numListInput(question, quesIndex, e) {
      var type = question.type,
          maxLength = question.maxLength,
          maxRange = question.maxRange,
          minRange = question.minRange;
      var val = e.target.value.trim(); //console.log(val)

      var valArr = val.split("");

      if (isNaN(val)) {
        valArr = valArr.filter(function (ch) {
          return !isNaN(ch);
        });
      }

      if (Number(valArr.join("")) > question.maxRange) {
        valArr.pop();
      }

      if (valArr.length > maxLength) {
        if (valArr[valArr.length - 1] == " ") {
          valArr = valArr.join("").trim().split("");
        } else {
          valArr.pop();
        }
      }

      val = valArr.join(""); //console.log(val)

      this.rightData[0].questions[quesIndex].selectedText = val;
      var getId = $(e.target).attr("data-text");
      e.target.value = val;
      $("#" + getId).val(val);
      this.updateProgressData();
    }
  }
});
Vue.component("progress-panel", {
  props: ["progressData"],
  data: function data() {
    return {
      submitStatus: false,
      badgStatus: 0,
      //0 for not started //1 for in progess and 2 for completed
      badgeText: "Not started"
    };
  },
  template: "<div class='progress-panel'>\n        <div class='progress-panel-inner'>\n          <div class=\"badge-status\">\n            <span class=\"badge\" :class=\"[badgStatus==0?'badge-not':'',badgStatus==1?'badge-progress':'',badgStatus==2?'badge-completed':'']\" v-html=\"badgeText\">Not started</span>\n          </div>\n            <div class='progress'>\n                <div class='perc-data'>\n                    <span v-html='progressData.answerTxt'>Answered</span>\n                    <span v-html='progressData.answrdQues'>1</span>\n                    <span v-html='progressData.of'>of</span>\n                    <span v-html='progressData.totalQues'>12</span>\n                    <span>(</span><span v-html='progressData.percentge'>12</span><span>%</span><span>)</span>\n                </div>\n                <div class='progress-bar'>\n                    <div id=\"myProgress\">\n                        <div id=\"myBar\" :style=\"{ width: progressData.percentge+'%'}\"></div>\n                    </div>\n                </div>\n            </div>\n            <div class='btn-outer'>\n                    <div class='btn-item save' v-html='progressData.saveTxt' @click=savePage()>Save</div>\n                    <div class='btn-item submit' :class=\"this.submitStatus == false?'disable':''\" @click=checkSubmitStatus(this.submitStatus) v-html='progressData.submitTxt' >Submit</div>\n            </div>\n        </div>\n    \n    </div>",
  mounted: function mounted() {
    document.querySelector("#ttl-attmpt").value = this.progressData.answrdQues;
    document.querySelector("#cur-prcntge").value = this.progressData.percentge;
    document.querySelector("#cur-state").value = this.getBadgeIconValue(this.progressData.answrdQues, this.progressData.totalQues);
    this.updateProgresbar(this.progressData.answrdQues); // this  is called from questions above on every question attempt
  },
  methods: {
    nextPage: function nextPage(forwardBtnVal) {
      console.log("called");
      document.getElementById("left-panel-menu-slctn").value = forwardBtnVal;
      document.getElementById("forwardbutton").click();
    },
    savePage: function savePage() {
      this.$parent.setScrollHeight(); //calling parent

      document.getElementById("forwardbutton").click();
    },
    updateProgresbar: function updateProgresbar(ttlAttempt) {
      console.log("update progress bar called");
      console.log(ttlAttempt);
      this.progressData.answrdQues = ttlAttempt;
      var percentage = parseInt(ttlAttempt / Number(this.progressData.totalQues) * 100);
      this.progressData.percentge = percentage;
      document.querySelector("#ttl-attmpt").value = ttlAttempt;
      document.querySelector("#cur-prcntge").value = percentage;
      document.querySelector("#cur-state").value = this.getBadgeIconValue(Number(ttlAttempt), Number(this.progressData.totalQues));

      if (Number(ttlAttempt) == 0) {
        this.badgeText = this.progressData.notstarted;
        this.badgStatus = 0;
      } else if (Number(ttlAttempt) > 0 && Number(ttlAttempt) < Number(this.progressData.totalQues)) {
        this.badgeText = this.progressData.inprogress;
        this.badgStatus = 1;
      } else if (Number(ttlAttempt) == Number(this.progressData.totalQues)) {
        this.badgeText = this.progressData.complete;
        this.badgStatus = 2;
      }
    },
    enabDisSubmit: function enabDisSubmit(endis) {
      if (endis == "enable") {
        this.submitStatus = true;
      } else {
        this.submitStatus = false;
      }
    },
    checkSubmitStatus: function checkSubmitStatus(submitStatus) {
      //v-on="this.submitStatus == false ? {} : {click:()=>nextPage(progressData.submitVal)}"
      if (submitStatus != false) {
        this.nextPage(this.progressData.submitVal);
      }
    },
    getBadgeIconValue: function getBadgeIconValue(initialQAnsd, ttlQAnsd) {
      if (initialQAnsd == 0) {
        return 0;
      } else if (initialQAnsd > 0 && initialQAnsd < ttlQAnsd) {
        return 1;
      } else if (initialQAnsd == ttlQAnsd) {
        return 2;
      }
    }
  }
});
/*{
   <input v-for="option of question.options" type="radio" :name="qType+'_'+quesIndex" :id="option.ddId" /> 
}*/

document.addEventListener("DOMContentLoaded", function () {
  //The first argument are the elements to which the plugin shall be initialized
  //The second argument has to be at least a empty object or a object with your desired options
  OverlayScrollbars(document.querySelectorAll(".scrollable,.side-nav-scroll"), {});
});
var eventInputvueObj = new Vue({
  el: "#main-wrapper",
  data: {
    alldata: {},
    alldata2: {},
    headerdata: {},
    leftdata: {},
    rightdata: {},
    progressdata: {},
    footerdata: {}
  },
  methods: {
    handleSelect: function handleSelect() {
      var count = 0;
      this.rightdata.categories.forEach(function (cat) {
        cat.subCategories.forEach(function (subCat) {
          subCat.questions.forEach(function (ques) {
            if (ques.selected != "") {
              count++;
            }
          });
        });
      });
      this.progressdata.answrdQues = count;
      var percentage = count / Number(this.progressdata.totalQues) * 100;
      this.progressdata.percentge = percentage;
      document.getElementById("myBar").style.width = percentage + "%";
    },
    updateLeftQuestionAttempt: function updateLeftQuestionAttempt(ttlAttempt) {
      this.$refs.leftPanel.updateQuesAttempt(ttlAttempt);
    },
    PrevPageBtnClckParent: function PrevPageBtnClckParent() {
      this.$refs.leftPanel.PrevbtnClick();
    },
    NextPageBtnClckParent: function NextPageBtnClckParent() {
      this.$refs.leftPanel.NextbtnClick();
    },
    disPrevParent: function disPrevParent() {
      this.$refs.footerPanel.disablePrev();
    },
    disNextParent: function disNextParent() {
      this.$refs.footerPanel.disableNext();
      this.$refs.rightPanel.enabDisSubmit("enable");
    },
    // updatePrgsSubmit: function (endis) {
    //   this.$refs.rightPanel.enabDisSubmit(endis);
    // },
    // updateRightHeight: function () {
    //   this.$refs.rightPanel.setHeight();
    // },
    setTotalQuestions: function setTotalQuestions(totalAnswered, totalQuestions) {
      this.$refs.footerPanel.setAllQuestions(totalAnswered, totalQuestions);
    },
    setScrollHeight: function setScrollHeight() {
      this.$refs.rightPanel.setScrollHeight();
    },
    getTotalQuestions: function getTotalQuestions() {
      this.$refs.leftPanel.updatteAllQuestions();
    }
  },
  created: function created() {
    if (document.getElementById("jsonData")) {
      this.alldata = JSON.parse(document.getElementById("jsonData").innerText);
      this.headerdata = this.alldata.headerData;
      this.leftdata = this.alldata.leftData;
      this.rightdata = this.alldata.rightData;
      this.progressdata = this.alldata.progressData;
      this.footerdata = this.alldata.footerData;
    }
  }
});