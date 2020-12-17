Vue.component("right-panel", {
  props: ["rightData", "progressData", "leftData"],
  data: function () {
    return {
      dd2Options: [],
    };
  },
  template: `
  <div class="right-panel-wrapper">
  <div class="right-panel clearfix">
    <progress-panel
      ref="prsPanel"
      :progress-data="progressData"
    ></progress-panel>
    <div class="survey-wrapper">
      <div class="scrollable">
        <div
          class="questions-inner"
          v-for="qType of rightData"
          v-if="qType.catType ===1"
        >
          <h2 class="ques-heading" v-html="qType.heading"></h2>
          <div class="question-type1">
            <h4 class="sub-heading" v-html="qType.subheading"></h4>
            <p class="question-line" v-html="qType.categoryHeading"></p>
            <div
              class="question-row"
              v-for="(question,quesIndex) of qType.questions"
            >
              <div class="question-group" v-if="question.type=='dd'">
                <div class="text-label">
                  <span v-html="question.optionName"></span>
                  <span class="tooltips">
                    <div class="tooltip">
                      <span
                        class="custom-infoicon"
                        @click="toltiptoggle"
                      ></span>
                      <span
                        class="tooltiptext"
                        v-html="question.description"
                      ></span>
                    </div>
                  </span>
                </div>
                <div class="input-box">
                  <select
                    class="cst-form-control"
                    @change="handleSelect(qType.catType, quesIndex, null, $event)"
                  >
                    <option
                      disabled
                      v-html="question.placeholder"
                      :selected="question.selectedId==''"
                    ></option>
                    <option
                      v-for="option of question.options"
                      v-html="option.ddName"
                      :value="option.ddId"
                      :selected="option.ddId==question.selectedId"
                    ></option>
                  </select>
                </div>
              </div>

              <div
                class="question-group"
                v-if="question.type=='txt' || question.type=='num'"
              >
                <div class="text-label">
                  <span v-html="question.optionName"></span>
                  <span class="tooltips">
                    <div class="tooltip">
                      <span
                        class="custom-infoicon"
                        @click="toltiptoggle"
                      ></span>
                      <span
                        class="tooltiptext"
                        v-html="question.description"
                      ></span>
                    </div>
                  </span>
                </div>
                <div class="input-box">
                  <input
                    type="text"
                    class="cst-form-control"
                    :placeholder="question.placeholder"
                    @input="handleInput(question,qType.catType,quesIndex,null ,$event)"
                    :value="question.selectedText"
                  />
                </div>
                <div v-html="question.afterText" class="after-text"></div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="questions-inner"
          v-for="qType of rightData"
          v-if="qType.catType ===2"
        >
          <h2 class="ques-heading" v-html="qType.heading"></h2>
          <div class="question-type2">
            <h4 class="sub-heading" v-html="qType.subheading"></h4>
            <div
              class="question-row"
              v-for="(question,quesIndex) of qType.questions"
              :class="{'wide': question.quesLength>1 }"
            >
              <div
                class="question-line"
                v-html="question.questionHeading"
              ></div>
              <div
                class="question-group"
                v-for="(option,optionIndex) of question.options"
              >
                <div class="text-label">
                  <span v-html="option.optionName"></span>
                  <span class="tooltips">
                    <div class="tooltip">
                      <span
                        class="custom-infoicon"
                        @click="toltiptoggle"
                      ></span>
                      <span
                        class="tooltiptext"
                        v-html="option.description"
                      ></span>
                    </div>
                  </span>
                </div>
                <div class="input-box">
                  <input
                    v-if="option.type=='num' || option.type=='txt'"
                    type="text"
                    :placeholder="option.placeholder"
                    class="cst-form-control"
                    :value="option.selectedText"
                    @input="handleInput(option,qType.catType, quesIndex,optionIndex ,$event)"
                  />
                  <div
                    v-if="option.type=='num' || option.type=='txt'"
                    type="text"
                    v-html="option.afterText"
                    class="after-text"
                  ></div>

                  <select
                    v-if="option.type=='dd' "
                    class="cst-form-control"
                    @change="handleSelect(qType.catType, quesIndex,optionIndex,$event)"
                  >
                    <option
                      disabled
                      v-html="option.placeholder"
                      :selected="option.selectedId==''"
                    ></option>
                    <option
                      v-for="quesOption of option.options"
                      v-html="quesOption.ddName"
                      :value="quesOption.ddId"
                      :selected="option.selectedId==quesOption.ddId"
                    ></option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="questions-inner"
          v-for="qType of rightData"
          v-if="qType.catType ===3"
        >
          <h2 class="ques-heading" v-html="qType.heading"></h2>
          <div class="question-type1">
            <h4 class="sub-heading" v-html="qType.subheading"></h4>
            <p class="question-line" v-html="qType.categoryHeading"></p>
            <div
              class="question-row"
              v-for="(question,quesIndex) of qType.questions"
            >
              <div class="question-group" v-if="question.type=='ddd'">
                <div class="text-label">
                  <span v-html="question.optionName"></span>
                  <span class="tooltips">
                    <div class="tooltip">
                      <span
                        class="custom-infoicon"
                        @click="toltiptoggle"
                      ></span>
                      <span
                        class="tooltiptext"
                        v-html="question.description"
                      ></span>
                    </div>
                  </span>
                </div>
                <div class="input-box">
                  <select
                    class="cst-form-control"
                    @change="handleSelect(qType.catType, quesIndex, null, $event)"
                  >
                    <option
                      disabled
                      v-html="question.placeholder"
                      :selected="question.selectedId==''"
                    ></option>
                    <option
                      v-for="option of question.options"
                      v-html="option.ddName"
                      :value="option.ddId"
                      :selected="option.ddId==question.selectedId"
                    ></option>
                  </select>
                </div>
              </div>
              <div
                class="question-group"
                v-if="question.type=='ddd'"
              >
                <div class="text-label">
                  <span v-html="question.optionName2"></span>
                  <span class="tooltips">
                    <div class="tooltip">
                      <span
                        class="custom-infoicon"
                        @click="toltiptoggle"
                      ></span>
                      <span
                        class="tooltiptext"
                        v-html="question.description2"
                      ></span>
                    </div>
                  </span>
                </div>
                <div class="input-box">
                  <div class="cst-form-control" style="position:relative">
                    <div v-html="question.placeholder2" @click="openDropDown($event)"></div>
                    <div class="dd2">
                      <div v-for="option of dd2Options[quesIndex]" class="option-wrapper">
                        <input
                          type="checkbox"
                          :checked="option.isChecked"
                          @click="handleDddSelect(qType.catType, quesIndex, null, option.ddId,$event)"
                        />
                        <span v-html="option.ddName"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="question-group" v-if="question.type=='numlist'">
                <div class="text-label">
                  <span v-html="question.optionName"></span>
                  <span class="tooltips">
                    <div class="tooltip">
                      <span
                        class="custom-infoicon"
                        @click="toltiptoggle"
                      ></span>
                      <span
                        class="tooltiptext"
                        v-html="question.description"
                      ></span>
                    </div>
                  </span>
                </div>
                <div class="input-box">
                  <select
                    class="cst-form-control"
                    @change="handleSelect(qType.catType, quesIndex, null, $event,question)"
                  >
                    <option
                      disabled
                      v-html="question.placeholder"
                      :selected="question.selectedId==''"
                    ></option>
                    <option
                      v-for="option of question.options"
                      v-html="option.ddName"
                      :value="option.ddId"
                      :selected="option.ddId==question.selectedId"
                    ></option>
                  </select>
                </div>
              </div>
              <div
                class="question-group"
                v-if="question.type=='numlist'"
              >
                <div class="text-label">
                  <span v-html="question.optionName2"></span>
                  <span class="tooltips">
                    <div class="tooltip">
                      <span
                        class="custom-infoicon"
                        @click="toltiptoggle"
                      ></span>
                      <span
                        class="tooltiptext"
                        v-html="question.description2"
                      ></span>
                    </div>
                  </span>
                </div>
                <div class="input-box">
                  <input
                    type="text"
                    class="cst-form-control"
                    :placeholder="question.placeholder"
                    @input="handleNumListInput(question,qType.catType,quesIndex,null ,$event)"
                    :value="question.selectedText"
                  />
                </div>
              </div>

              <div class="question-group" v-if="question.type=='dd'">
                <div class="text-label">
                  <span v-html="question.optionName"></span>
                  <span class="tooltips">
                    <div class="tooltip">
                      <span
                        class="custom-infoicon"
                        @click="toltiptoggle"
                      ></span>
                      <span
                        class="tooltiptext"
                        v-html="question.description"
                      ></span>
                    </div>
                  </span>
                </div>
                <div class="input-box">
                  <select
                    class="cst-form-control"
                    @change="handleSelect(qType.catType, quesIndex, null, $event)"
                  >
                    <option
                      disabled
                      v-html="question.placeholder"
                      :selected="question.selectedId==''"
                    ></option>
                    <option
                      v-for="option of question.options"
                      v-html="option.ddName"
                      :value="option.ddId"
                      :selected="option.ddId==question.selectedId"
                    ></option>
                  </select>
                </div>
              </div>

              <div
                class="question-group"
                v-if="question.type=='txt' || question.type=='num'"
              >
                <div class="text-label">
                  <span v-html="question.optionName"></span>
                  <span class="tooltips">
                    <div class="tooltip">
                      <span
                        class="custom-infoicon"
                        @click="toltiptoggle"
                      ></span>
                      <span
                        class="tooltiptext"
                        v-html="question.description"
                      ></span>
                    </div>
                  </span>
                </div>
                <div class="input-box">
                  <input
                    type="text"
                    class="cst-form-control"
                    :placeholder="question.placeholder"
                    @input="handleInput(question,qType.catType,quesIndex,null ,$event)"
                    :value="question.selectedText"
                  />
                </div>
                <div v-html="question.afterText" class="after-text"></div>
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
    document.body.addEventListener("click", function () {
      var elems = document.querySelectorAll(".dd2");
      for (let index = 0; index < elems.length; index++) {
        const element = elems[index];
        element.style.display = "none";
      }
    });
    var elems = document.querySelectorAll(".dd2");
    for (let index = 0; index < elems.length; index++) {
      const element = elems[index];
      element.addEventListener("click", function (e) {
        e.stopPropagation();
        console.log("bubbling stopped");
      });
    }
    this.populateOptions();
  },
  methods: {
    populateOptions: function () {
      var optionArr = [];
      var category = this.rightData.filter((cat) => cat.catType === 3)[0];

      category.questions.forEach((question, quesIndex) => {
        if (question.selectedId !== "") {
          var parentOptionIndex = -1;
          for (let index = 0; index < question.options.length; index++) {
            const option = question.options[index];
            if (option.ddId == question.selectedId) {
              parentOptionIndex = index;
            }
          }

          var subOptions = question.map
            .split("|")
            .filter((option) => option.charAt(0) == parentOptionIndex + 1)[0]
            .split(":")[1]
            .split("-")
            .map((value) => Number(value));

          var subOptionObject = question.options2.filter(
            (option, index) => subOptions.indexOf(index + 1) >= 0
          );
          var selectedValues = question.selectedId2.split("|");
          subOptionObject.forEach((option) => {
            if (selectedValues.indexOf(option.ddId) >= 0) {
              option.isChecked = true;
            } else {
              option.isChecked = false;
            }
          });

          console.log("myoptions", subOptionObject);

          if (subOptionObject) {
            optionArr.push([...subOptionObject]);
          } else {
            optionArr.push([]);
          }
        }
      });

      // console.log("category", optionArr);
      this.dd2Options = optionArr;
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

    openDropDown: function (e) {
      e.stopPropagation();
      console.log(e.target.closest(".cst-form-control").querySelector(".dd2"));
      e.target
        .closest(".cst-form-control")
        .querySelector(".dd2").style.display = "block";
    },

    handleSelect: function (catType, quesIndex, optionIndex, e, question) {
      //dropdown

      if (catType == 1) {
        this.rightData.forEach((category) => {
          if (category.catType == 1) {
            category.questions[quesIndex].selectedId = e.target.value;
            // if (
            //   category.questions[quesIndex].options2 &&
            //   category.questions[quesIndex].options2.length
            // ) {
            //   var parentOption = category.questions[quesIndex].options.filter(
            //     (option) => option.id == e.target.value
            //   );
            //   var parentOptionIndex = category.questions[
            //     quesIndex
            //   ].options.indexOf(parentOption);
            //   console.log("Parent index", parentOptionIndex);

            //   var optionIndexArray = category.questions[quesIndex].map[
            //     e.target.value
            //   ].map((index) => index - 1);
            //   var newOption = category.questions[quesIndex].options2.filter(
            //     (option, i) => optionIndexArray.indexOf(i) >= 0
            //   );
            //   this.dd2Options = newOption;
            //   category.questions[quesIndex].selectedId2 = "";
            // }
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
      if (catType == 3) {
        this.rightData.forEach((category) => {
          if (category.catType == 3) {
            category.questions[quesIndex].selectedId = e.target.value;
            if (question && question.type == "numlist") {
              category.questions[quesIndex].selectedText = "";
              category.questions[quesIndex].options.forEach((option) => {
                var textInputId = option.textId;
                document.getElementById(textInputId).value = "";
              });
            } else {
              if (
                category.questions[quesIndex].options2 &&
                category.questions[quesIndex].options2.length
              ) {
                var parentOptionIndex = -1;
                for (
                  let index = 0;
                  index < category.questions[quesIndex].options.length;
                  index++
                ) {
                  const option = category.questions[quesIndex].options[index];
                  if (option.ddId == e.target.value) {
                    parentOptionIndex = index;
                  }
                }

                var subOptions = category.questions[quesIndex].map
                  .split("|")
                  .filter(
                    (option) => option.charAt(0) == parentOptionIndex + 1
                  )[0]
                  .split(":")[1]
                  .split("-")
                  .map((value) => Number(value));

                var subOptionObject = category.questions[
                  quesIndex
                ].options2.filter(
                  (option, index) => subOptions.indexOf(index + 1) >= 0
                );
                subOptionObject.forEach((option) => {
                  option.isChecked = false;
                });
                this.dd2Options[quesIndex] = subOptionObject;
                category.questions[quesIndex].selectedId2 = "";
              }
            }
          }
        });
      }
      this.updateProgressData();
      console.log(e.target.value);
      document.getElementById(e.target.value).click();
    },

    handleDddSelect: function (catType, quesIndex, optionIndex, ddId, e) {
      //dropdown
      console.log("i am clicked", e);
      e.cancelBubble = true;
      e.stopPropagation();
      if (catType == 3) {
        this.rightData.forEach((category) => {
          if (category.catType == 3) {
            var selectedValueArray = category.questions[
              quesIndex
            ].selectedId2.split("|");
            if (selectedValueArray[0] == "") selectedValueArray.splice(0, 1);

            if (selectedValueArray.indexOf(ddId) >= 0) {
              selectedValueArray.splice(selectedValueArray.indexOf(ddId), 1);
            } else {
              selectedValueArray.push(ddId);
            }
            // console.log(selectedValueArray);
            category.questions[quesIndex].selectedId2 = selectedValueArray.join(
              "|"
            );

            this.dd2Options[quesIndex].forEach((option) => {
              if (option.ddId == ddId) {
                option.isChecked = !option.isChecked;
              }
            });
            console.log(this.dd2Options[quesIndex]);
          }
        });
      }

      this.updateProgressData();
      console.log(this.rightData);
      document.getElementById(ddId).click();
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

    handleNumListInput: function (
      question,
      catType,
      quesIndex,
      optionIndex,
      e
    ) {
      let { type, maxLength } = question;
      let val, valArr;

      if (type == "numlist") {
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

      var selectedId = "";
      if (catType == 3) {
        this.rightData.forEach((category) => {
          if (category.catType == 3) {
            category.questions[quesIndex].selectedText = val;
            var optionId = category.questions[quesIndex].selectedId;
            category.questions[quesIndex].options.forEach((option) => {
              if (option.ddId == optionId) {
                selectedId = option.textId;
              }
            });
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

        if (data.catType == 3) {
          data.questions.forEach((question) => {
            // if (question.type == "dd") {
            //   if (question.selectedId !== "") {
            //     totalAttempted++;
            //   }
            // }
            if (question.type == "ddd") {
              if (question.selectedId !== "" && question.selectedId2 !== "") {
                totalAttempted++;
              }
            }
            // if (question.type == "txt" || question.type == "num") {
            //   if (question.selectedText !== "") {
            //     totalAttempted++;
            //   }
            // }
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
      document.getElementById("left-panel-menu-slctn").value = forwardBtnVal;
      document.getElementById("forwardbutton").click();
    },
    savePage: function () {
      this.$parent.setScrollHeight(); //calling parent
      document.getElementById("forwardbutton").click();
    },
    updateProgresbar: function (ttlAttempt) {
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

{
  /* <input v-for="option of question.options" type="radio" :name="qType+'_'+quesIndex" :id="option.ddId" /> */
}