Vue.component("right-panel", {
  props: ["rightData", "progressData", "leftData"],
  template: `
  <div class="right-panel-wrapper">
  <div class="right-panel clearfix">
    <progress-panel ref="prsPanel" :progress-data="progressData"></progress-panel>
    <div class="survey-wrapper"> 
      <div class="scrollable">
      <div class="questions-inner" v-for="qType of rightData" v-if="qType.catType ===1">
          <h2 class="ques-heading" v-html='qType.heading'></h2>
          <div class="question-type1">
            <h4 class="sub-heading" v-html='qType.subheading'></h4>
            <p class="question-line" v-html='qType.categoryHeading'></p>
            <div class="q-gutter">
            <div class="question-row" v-for="(question,quesIndex) of qType.questions">
              <div class="question-group" v-if="question.type=='dd'">
                <div class="text-label"><span v-html='question.optionName'></span> 
                  <span class="tooltips">
                      <div class="tooltip">
                        <span class="custom-infoicon"  @click="toltiptoggle"></span>
                        <span class="tooltiptext" v-html="question.description"></span>
                      </div>
                  </span>
                </div>
                <div class="input-box">
                  <select class="cst-form-control" @change="handleSelect(qType.catType, quesIndex, null, $event)" >
                    <option  disabled  v-html="question.placeholder" :selected="question.selectedId==''" ></option>
                    <option v-for="option of question.options" v-html="option.ddName" :value="option.ddId" :selected="option.ddId==question.selectedId">                   
                    </option>
                  </select>
                </div>
              </div>
              <div class="question-group" v-if="question.type=='txt' || question.type=='num'">
                <div class="text-label"><span v-html="question.optionName"></span>
                  <span class="tooltips">
                    <div class="tooltip">
                      <span class="custom-infoicon"  @click="toltiptoggle"></span>
                      <span class="tooltiptext" v-html="question.description"></span>
                    </div>
                  </span>
                </div>
                <div class="input-box">
                  <input type="text" class="cst-form-control" :placeholder="question.placeholder" @input="handleInput(question,qType.catType,quesIndex,null ,$event)" :value="question.selectedText" />
                </div>
                <div v-html="question.afterText" class="after-text"></div>
              </div>
              <div class="question-group" v-if="question.type=='numlist'">
                <div class="text-label"><span v-html='question.optionName'></span> 
                  <span class="tooltips">
                      <div class="tooltip">
                        <span class="custom-infoicon"  @click="toltiptoggle"></span>
                        <span class="tooltiptext" v-html="question.description"></span>
                      </div>
                  </span>
                </div>
                <div class="input-box">
                  <select class="cst-form-control numlist-select" @change="handleNumlist(quesIndex,$event)" >
                    <option  disabled  v-html="question.placeholder" :selected="question.selectedId==''" ></option>
                    <option v-for="option of question.options" v-html="option.ddName" :value="option.ddId" :selected="option.ddId==question.selectedId" :data-input-id="option.textId">                   
                    </option>
                  </select>
                  <input type="text" :disabled="question.selectedId==''" class="numlist-input cst-form-control" :value="question.selectedText" :data-text="question.selectTextId" placeholder="%" @input="numListInput(question,quesIndex,$event)" />
                </div>
              </div>
              <div class="question-group cus-ddd" v-if="question.type=='ddd'">

               <div class="multiselect-row">
                  <div class="text-label">
                    <div class="tool-wrapper-ddd">
                      <span v-html='question.optionName'></span> 
                      <span class="tooltips">
                          <div class="tooltip">
                            <span class="custom-infoicon"  @click="toltiptoggle"></span>
                            <span class="tooltiptext" v-html="question.description"></span>
                          </div>
                      </span>
                    </div>
                  </div>
                  <div class="input-box">
                    <select id="cars" :dependent-one="'cars2_'+quesIndex" :dependent-two="'cars3_'+quesIndex" class="cst-form-control" @change="handleSelect(qType.catType, quesIndex, null, $event)" >
                      <option  disabled  v-html="question.placeholder" :selected="question.selectedId==''" ></option>
                      <option v-for="(option,optionIndex) of question.options" :data-valid="yoman(optionIndex,question.map)" v-html="option.ddName" :value="option.ddId" :selected="option.ddId==question.selectedId">                   
                      </option>
                    </select>
                  </div>
               </div>
               <div class="multiselect-row">
                <div class="text-label">
                  <div class="tool-wrapper-ddd">
                    <span v-html='question.optionName'></span> 
                    <span class="tooltips">
                        <div class="tooltip">
                          <span class="custom-infoicon"  @click="toltiptoggle"></span>
                          <span class="tooltiptext" v-html="question.description"></span>
                        </div>
                    </span>
                  </div>
                </div>
                <div class="input-box">
                  <div class="multiselect" :id="'cars2_'+quesIndex" :dependent-two="'cars3_'+quesIndex" >
                    <div class="multiselectBox-container">
                    <select class="cst-form-control">
                      <option v-html="question.placeholder"></option>
                    </select>
                    <div class="overSelect"></div>
                      <div id="checkboxes" class="cus-ddd level_1_dd">
                        <label v-for="(option,optionIndex) of question.options2" :for="'level1_'+option.ddId" :data-attr="'level1_'+option.ddId">
                          <input type="checkbox" :id="'level1_'+option.ddId" :data-valid="yoman(optionIndex,question.map2)"/><span v-html="option.ddName">First checkbox</span></label>
                      </div>
                    </div>
                  </div>
                </div>
               </div>
               <div class="multiselect-row">
                 <div class="text-label">&nbsp;</div>
                  <div class="input-box">
                    <div class="multiselect" :id="'cars3_'+quesIndex">
                      <div class="multiselectBox-container">
                      <select class="cst-form-control">
                        <option v-html="question.placeholder"></option>
                      </select>
                      <div class="overSelect"></div>
                        <div id="checkboxes2" class="cus-ddd level_2_dd">
                            <label v-for="(option,optionIndex) of question.options3" :for="'level2_'+option.ddId" :data-attr="'level2_'+option.ddId">
                            <input type="checkbox" :id="'level2_'+option.ddId"  /><span v-html="option.ddName">First checkbox</span></label>
                        </div>
                      </div>
                    </div>
                  </div>
               </div>
              </div>
            </div>
            </div>
          </div>          
        </div>
        <div class="questions-inner" v-for="qType of rightData" v-if="qType.catType ===2">
          <h2 class="ques-heading" v-html='qType.heading'></h2>
          <div class="question-type2" >
            <h4 class="sub-heading" v-html='qType.subheading'></h4>           
            <div class="question-row" v-for="(question,quesIndex) of qType.questions" :class="{'wide': question.quesLength>1 }">                          
            <div class="question-line" v-html='question.questionHeading'></div>
              <div class="question-group" v-for="(option,optionIndex) of question.options">
                <div class="text-label"><span v-html='option.optionName'></span>
                  <span class="tooltips">
                      <div class="tooltip">
                        <span class="custom-infoicon"  @click="toltiptoggle"></span>
                        <span class="tooltiptext" v-html="option.description"></span>
                      </div>
                  </span>
                </div>
                <div class="input-box">
                  <input v-if="option.type=='num' || option.type=='txt'" type="text" :placeholder="option.placeholder"
                  class="cst-form-control"  :value="option.selectedText" @input="handleInput(option,qType.catType, quesIndex,optionIndex ,$event)">
                  <div  v-if="option.type=='num' || option.type=='txt'" type="text" v-html="option.afterText" class="after-text"></div>
                  <select v-if="option.type=='dd' " class="cst-form-control" @change="handleSelect(qType.catType, quesIndex,optionIndex,$event)" >
                      <option disabled v-html="option.placeholder" :selected="option.selectedId==''"></option>
                      <option v-for="quesOption of option.options" v-html="quesOption.ddName" :value="quesOption.ddId" :selected="option.selectedId==quesOption.ddId"></option>
                    </select>
                </div>
              </div>
            </div>
          </div>          
        </div> 
      </div>
    </div>
  </div>
</div>
  `,
  mounted: function () {
    // this.setHeight();
    // window.addEventListener("resize", this.setHeight);
    document.addEventListener("DOMContentLoaded", () => {
      //The first argument are the elements to which the plugin shall be initialized
      //The second argument has to be at least a empty object or a object with your desired options
      // OverlayScrollbars(document.querySelector('.side-nav-scroll'), { });

      var instance = OverlayScrollbars(
        document.querySelector(".scrollable"),
        {}
      );
      // instance.scroll({ el: document.getElementById('hellomoto'), block : "center"}, 100);
      let scrollHeight = this.rightData[0].scrollPosition;
      console.log(this.rightData);
      if (scrollHeight == "") {
        scrollHeight = 0;
      }
      instance.scroll({ x: 0, y: scrollHeight }, 100);
      // setTimeout(function(){console.log(instance.scroll().position.y)},1000);
    });
    document.addEventListener("click", () => {
      document
        .querySelectorAll(".tooltip-show")
        .forEach((elem) => elem.classList.remove("tooltip-show"));
    });

    $(".numlist-select").trigger("change");

    //All code for dependednt drop down level 2

    $("#checkboxes").find("label").hide(0);
    $("#checkboxes2").find("label").hide(0);
    $(document).mouseup(function (e) {
      var container = $(".multiselect");

      // if the target of the click isn't the container nor a descendant of the container
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
      console.log("called");

      var dependednt1Id = $(this).attr("dependent-one");
      var dependednt2Id = $(this).attr("dependent-two");
      var getSelected = $(this).find(":selected").attr("data-valid");
      console.log("getSelected::" + getSelected);
      var dataValidArr = getSelected.split("|");

      console.log("dataValidArr::" + dataValidArr);

      //remove all data
      $("#" + dependednt1Id + " #checkboxes")
        .find("label")
        .hide(0);
      $("#" + dependednt1Id + " #checkboxes")
        .find("input")
        .prop("checked", false);
      $("#" + dependednt1Id)
        .find("select")
        .empty();
      $("#" + dependednt1Id)
        .find("select")
        .append("<option selected disabled>Please select</option>");

      $("#" + dependednt2Id + " #checkboxes2")
        .find("label")
        .hide(0);
      $("#" + dependednt2Id + " #checkboxes2")
        .find("input")
        .prop("checked", false);
      $("#" + dependednt2Id)
        .find("select")
        .empty();
      $("#" + dependednt2Id)
        .find("select")
        .append("<option selected disabled>Please select</option>");

      //remove from confirmitr as well
      //remove all data

      if (dataValidArr[0] != "") {
        dataValidArr.forEach(function (value, index) {
          $("#" + dependednt1Id + " #checkboxes")
            .find("[data-attr=level1_" + value + "]")
            .show(0);
        });
      }
    });

    $(".level_1_dd input").click(function (event) {
      var getId = $(this)
        .parent()
        .parent()
        .find("input:checked:last")
        .attr("id");
      var getText = $(this)
        .parent()
        .parent()
        .find("input:checked:last")
        .parent()
        .text();
      console.log($(this).parent().parent().find("input:checked:last"));
      console.log(getText);
      $(this).closest(".multiselect").find("select").empty();
      if (getId != undefined) {
        getId = getId.split("_")[1];
        $(this)
          .closest(".multiselect")
          .find("select")
          .append("<option>" + getText + "</option>");
        // if($(this).closest(".multiselect").find("select [data-show="+getId+"]").length==0){

        // }
      } else {
        $(this)
          .closest(".multiselect")
          .find("select")
          .append("<option>Please select</option>");
      }

      var dd3 = $(this).closest(".multiselect").attr("dependent-two");
      $("#" + dd3 + " #checkboxes2")
        .find("label")
        .hide(0);
      $("#" + dd3 + " #checkboxes2")
        .find("input")
        .prop("checked", false);
      $("#" + dd3)
        .find("select")
        .empty();
      $("#" + dd3)
        .find("select")
        .append("<option>Please select</option>");

      checkfornextDD(dd3, $(this).closest(".multiselect").prop("id"));
    });

    function checkfornextDD(thirdId, level1Id) {
      var totalIndex = [];
      $("#" + level1Id)
        .find("input:checked")
        .each(function () {
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
        $("#" + thirdId)
          .find("[data-attr=level2_" + el + "]")
          .show(0);
      });
    }
    //All code for dependednt drop down level 2
  },
  methods: {
    yoman: function (optionIndex, mapping) {
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

      return dependecnyVar;
      //console.log("yo man called");
    },
    openAccordion: function (e) {
      e.stopPropagation();

      if (e.target.className.split(" ").indexOf("active") == -1) {
        e.target.className += " active";
        e.target.nextElementSibling.style.maxHeight =
          e.target.nextElementSibling.scrollHeight + "px";
      } else {
        e.target.className = e.target.className.replace(" active", "");
        e.target.nextElementSibling.style.maxHeight = null;
      }
    },

    handleSelect: function (catType, quesIndex, optionIndex, e) {
      //dropdown
      if (catType == 1) {
        this.rightData.forEach((category) => {
          if (category.catType == 1) {
            category.questions[quesIndex].selectedId = e.target.value;
          }
        });
      }
      if (catType == 2) {
        this.rightData.forEach((category) => {
          if (category.catType == 2) {
            category.questions[quesIndex].options[optionIndex].selectedId =
              e.target.value;
          }
        });
      }
      this.updateProgressData();
      document.getElementById(e.target.value).click();
    },

    handleInput: function (question, catType, quesIndex, optionIndex, e) {
      let { type, maxLength, selectedId } = question;
      let val, valArr;

      if (type == "num") {
        val = e.target.value.trim();
        valArr = val.split("");
        if (isNaN(val)) {
          valArr = valArr.filter((ch) => !isNaN(ch));
        }
      }

      if (type == "txt") {
        val = e.target.value;
        valArr = val.split("");
        for (let i = 0; i < valArr.length; i++) {
          const ch = valArr[i];
          if (ch == " ") {
            valArr.splice(i, 1);
            console.log(valArr);
          } else {
            break;
          }
        }

        valArr = valArr.filter((ch) => /^[a-zA-Z\s]*$/.test(ch));
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
        this.rightData.forEach((category) => {
          if (category.catType == 1) {
            category.questions[quesIndex].selectedText = val;
          }
        });
      }
      if (catType == 2) {
        this.rightData.forEach((category) => {
          if (category.catType == 2) {
            category.questions[quesIndex].options[
              optionIndex
            ].selectedText = val;
          }
        });
      }
      this.updateProgressData();
      e.target.value = val;

      document.getElementById(selectedId).value = val;
    },

    updateProgressData: function () {
      let totalAttempted = 0;

      this.rightData.forEach((data) => {
        if (data.catType == 1) {
          data.questions.forEach((question) => {
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
          data.questions.forEach((question) => {
            question.options.forEach((option) => {
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
      });
      // this.progressData.answrdQues = totalAttempted;
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
    enabDisSubmit: function (endis) {
      this.$refs.prsPanel.enabDisSubmit(endis); //calling child component
    },
    toltiptoggle: (e) => {
      let isClass = false;
      if (e.target.parentNode.classList.contains("tooltip-show")) {
        isClass = true;
      }

      document
        .querySelectorAll(".tooltip-show")
        .forEach((elem) => elem.classList.remove("tooltip-show"));
      const list = e.target.parentNode.classList;
      if (isClass) {
        e.target.parentNode.classList.remove("tooltip-show");
      } else {
        setTimeout(() => {
          e.target.parentNode.classList.add("tooltip-show");
        }, 0);
      }
    },
    setScrollHeight: () => {
      let instance = OverlayScrollbars(
        document.querySelector(".scrollable"),
        {}
      );
      let scrollHeight = instance.scroll().position.y;
      document.getElementById("scroll-value").value = scrollHeight;
    },

    handleNumlist: function (quesIndex, e) {
      console.log(quesIndex);
      $(e.target)
        .find("option")
        .each(function (index, elem) {
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
    numListInput: function (question, quesIndex, e) {
      let { type, maxLength, maxRange, minRange } = question;
      let val = e.target.value.trim();
      //console.log(val)
      let valArr = val.split("");
      if (isNaN(val)) {
        valArr = valArr.filter((ch) => !isNaN(ch));
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
      //console.log(val)
      this.rightData[0].questions[quesIndex].selectedText = val;
      var getId = $(e.target).attr("data-text");
      e.target.value = val;
      $("#" + getId).val(val);
      this.updateProgressData();
    },
  },
});

Vue.component("progress-panel", {
  props: ["progressData"],
  data: function () {
    return {
      submitStatus: false,
      badgStatus: 0, //0 for not started //1 for in progess and 2 for completed
      badgeText: "Not started",
    };
  },
  template: `<div class='progress-panel'>
        <div class='progress-panel-inner'>
          <div class="badge-status">
            <span class="badge" :class="[badgStatus==0?'badge-not':'',badgStatus==1?'badge-progress':'',badgStatus==2?'badge-completed':'']" v-html="badgeText">Not started</span>
          </div>
            <div class='progress'>
                <div class='perc-data'>
                    <span v-html='progressData.answerTxt'>Answered</span>
                    <span v-html='progressData.answrdQues'>1</span>
                    <span v-html='progressData.of'>of</span>
                    <span v-html='progressData.totalQues'>12</span>
                    <span>(</span><span v-html='progressData.percentge'>12</span><span>%</span><span>)</span>
                </div>
                <div class='progress-bar'>
                    <div id="myProgress">
                        <div id="myBar" :style="{ width: progressData.percentge+'%'}"></div>
                    </div>
                </div>
            </div>
            <div class='btn-outer'>
                    <div class='btn-item save' v-html='progressData.saveTxt' @click=savePage()>Save</div>
                    <div class='btn-item submit' :class="this.submitStatus == false?'disable':''" @click=checkSubmitStatus(this.submitStatus) v-html='progressData.submitTxt' >Submit</div>
            </div>
        </div>
    
    </div>`,

  mounted: function () {
    document.querySelector("#ttl-attmpt").value = this.progressData.answrdQues;
    document.querySelector("#cur-prcntge").value = this.progressData.percentge;
    document.querySelector("#cur-state").value = this.getBadgeIconValue(
      this.progressData.answrdQues,
      this.progressData.totalQues
    );

    this.updateProgresbar(this.progressData.answrdQues); // this  is called from questions above on every question attempt
  },
  methods: {
    nextPage: function (forwardBtnVal) {
      console.log("called");
      document.getElementById("left-panel-menu-slctn").value = forwardBtnVal;
      document.getElementById("forwardbutton").click();
    },
    savePage: function () {
      this.$parent.setScrollHeight(); //calling parent
      document.getElementById("forwardbutton").click();
    },
    updateProgresbar: function (ttlAttempt) {
      console.log("update progress bar called");
      console.log(ttlAttempt);
      this.progressData.answrdQues = ttlAttempt;
      var percentage = parseInt(
        (ttlAttempt / Number(this.progressData.totalQues)) * 100
      );
      this.progressData.percentge = percentage;

      document.querySelector("#ttl-attmpt").value = ttlAttempt;
      document.querySelector("#cur-prcntge").value = percentage;
      document.querySelector("#cur-state").value = this.getBadgeIconValue(
        Number(ttlAttempt),
        Number(this.progressData.totalQues)
      );

      if (Number(ttlAttempt) == 0) {
        this.badgeText = this.progressData.notstarted;
        this.badgStatus = 0;
      } else if (
        Number(ttlAttempt) > 0 &&
        Number(ttlAttempt) < Number(this.progressData.totalQues)
      ) {
        this.badgeText = this.progressData.inprogress;
        this.badgStatus = 1;
      } else if (Number(ttlAttempt) == Number(this.progressData.totalQues)) {
        this.badgeText = this.progressData.complete;
        this.badgStatus = 2;
      }
    },
    enabDisSubmit: function (endis) {
      if (endis == "enable") {
        this.submitStatus = true;
      } else {
        this.submitStatus = false;
      }
    },
    checkSubmitStatus: function (submitStatus) {
      //v-on="this.submitStatus == false ? {} : {click:()=>nextPage(progressData.submitVal)}"
      if (submitStatus != false) {
        this.nextPage(this.progressData.submitVal);
      }
    },
    getBadgeIconValue: function (initialQAnsd, ttlQAnsd) {
      if (initialQAnsd == 0) {
        return 0;
      } else if (initialQAnsd > 0 && initialQAnsd < ttlQAnsd) {
        return 1;
      } else if (initialQAnsd == ttlQAnsd) {
        return 2;
      }
    },
  },
});

/*{
   <input v-for="option of question.options" type="radio" :name="qType+'_'+quesIndex" :id="option.ddId" /> 
}*/
