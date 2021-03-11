Vue.component("right-panel", {
  props: ["rightData", "progressData", "leftData"],
  template: `
  <div class="right-panel-wrapper">
  <div class="right-panel clearfix">
    <progress-panel ref="prsPanel" :progress-data="progressData"></progress-panel>
    <div class="survey-wrapper" :class="progressData.isLight ? 'isLight' : 'isFull'"> 
      <div class="scrollable">
      <div class="questions-inner" v-for="(qType,qTypeIndex) of rightData">
          <h2 class="ques-heading" v-html='qType.heading'></h2>
          <div class="question-type1">
            <h4 class="sub-heading" v-html='qType.subheading'></h4>
            <p class="question-line" v-html='qType.categoryHeading'></p>
            <div class="q-gutter">
            <div class="question-row" :class="[question.type=='numboxes'?'numboxes':'',question.type=='2Dnumboxes'?'numboxes':'',question.type=='NPS'?'numboxes':'']"  v-for="(question,quesIndex) of qType.questions">
              <div class="question-group" v-if="question.type=='dd'">
                <div class="text-label"><span v-html='question.optionName'></span> 
                  <span class="tooltips">
                      <div class="tooltip">
                        <span class="custom-infoicon"  @click="toltiptoggle"></span>
                        <span class="tooltiptext" v-html="question.description"></span>
                      </div>
                  </span>
                </div>
                <div class="input-box sdasd">
                
                  <select class="cst-form-control" @change="handleSelect(qType.catType, quesIndex, null, $event)" >
                    <option  disabled  v-html="question.placeholder" :selected="question.selectedId==''" ></option>
                    <option v-for="option of question.options" v-html="option.ddName" :value="option.ddId" :selected="option.ddId==question.selectedId">                   
                    </option>
                  </select>
                </div>
              </div>
              <div class="question-group" v-if="question.type=='txt' || question.type=='num' || question.type=='txtNum'">
                <div class="text-label"><span v-html="question.optionName"></span>
                  <span class="tooltips">
                    <div class="tooltip">
                      <span class="custom-infoicon"  @click="toltiptoggle"></span>
                      <span class="tooltiptext" v-html="question.description"></span>
                    </div>
                  </span>
                </div>
                <div class="input-box">
                  <input type="text" class="cst-form-control" :placeholder="question.placeholder" @input="handleInput(question,qType.catType,quesIndex,null ,$event,qTypeIndex)" :value="question.selectedText" />
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
              <div class="question-group cus-ddd cus-ddd-wrapper" v-if="question.type=='ddd'" :index-attr="quesIndex">
  
               <div class="multiselect-row multi-row-1">
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
                  <div class="input-box sdasd">
                    <select id="cars" :default-placeholder2="question.placeholder2" :default-placeholder3="question.placeholder3" :dependent-one="'cars2_'+quesIndex" :dependent-two="'cars3_'+quesIndex" class="cst-form-control" @change="handleSelect(qType.catType, quesIndex, null, $event)" >
                      <option  disabled  v-html="question.placeholder" :selected="question.selectedId==''" ></option>
                      <option v-for="(option,optionIndex) of question.options" :data-valid="yoman(optionIndex,question.map)" v-html="option.ddName" :value="option.ddId" :selected="option.ddId==question.selectedId">                   
                      </option>
                    </select>
                  </div>
               </div>
  
               <div class="multiselect-row multi-row-2">
                <div class="text-label">
                  <div class="tool-wrapper-ddd">
                    <span v-html='question.optionName2'></span> 
                    <span class="tooltips">
                        <div class="tooltip">
                          <span class="custom-infoicon"  @click="toltiptoggle"></span>
                          <span class="tooltiptext" v-html="question.description2"></span>
                        </div>
                    </span>
                  </div>
                </div>
                <div class="input-box as">
                  <div class="multiselect" :id="'cars2_'+quesIndex" :dependent-two="'cars3_'+quesIndex" :default-placeholder2="question.placeholder2" :default-placeholder3="question.placeholder3">
                    <div class="multiselectBox-container">
                    <select class="cst-form-control">
                      <option v-html="question.placeholder2"></option>
                    </select>
                    <div class="overSelect"></div>
                      <div id="checkboxes" class="cus-ddd level_1_dd">
                        <label v-for="(option,optionIndex) of question.options2" :for="'level1-'+option.ddId" :data-attr="'level1-'+option.ddId">
                          <input type="checkbox" :id="'level1-'+option.ddId" :data-valid="yoman(optionIndex,question.map2)"/><span v-html="option.ddName">First checkbox</span></label>
                      </div>
                    </div>
                  </div>
                </div>
               </div>
               <div class="multiselect-row multi-row-3">
                 <div class="text-label">&nbsp;</div>
                  <div class="input-box">
                    <div class="multiselect" :id="'cars3_'+quesIndex" :default-placeholder3="question.placeholder3">
                      <div class="multiselectBox-container">
                      <select class="cst-form-control">
                        <option v-html="question.placeholder3"></option>
                      </select>
                      <div class="overSelect"></div>
                        <div id="checkboxes2" class="cus-ddd level_2_dd">
                          <label v-for="(option,optionIndex) of question.options3" :for="'level2-'+option.ddId" :data-attr="'level2-'+option.ddId">
                            <input type="checkbox" :id="'level2-'+option.ddId"  /><span v-html="option.ddName">First checkbox</span></label>
                        </div>
                      </div>
                    </div>
                  </div>
               </div>              
              </div>
              <div class="question-group" v-if="question.type=='sdd'" :index-attr="quesIndex">
  
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
                    <select class="cst-form-control sdd1" @change="handlesdd(qType.catType, quesIndex, null, $event,1)" >
                      <option  disabled  v-html="question.placeholder" :selected="question.selectedId==''" ></option>
                      <option v-for="(option,optionIndex) of question.options" v-html="option.ddName" :value="option.ddId" :data-valid="yoman(optionIndex,question.map)" :selected="option.ddId==question.selectedId">                   
                      </option>
                    </select>
                  </div>
               </div>                          
               <div class="multiselect-row multiselect-row-2">
                  <div class="text-label">
                    <div class="tool-wrapper-ddd">
                      <span v-html='question.optionName2'></span> 
                      <span class="tooltips">
                          <div class="tooltip">
                            <span class="custom-infoicon"  @click="toltiptoggle"></span>
                            <span class="tooltiptext" v-html="question.description2"></span>
                          </div>
                      </span>
                    </div>
                  </div>
                  <div class="input-box">
                    <select class="cst-form-control sdd2" @change="handlesdd(qType.catType, quesIndex, null, $event,2)" >
                      <option  disabled  v-html="question.placeholder2" :selected="question.selectedId2==''" ></option>
                      <option v-for="(option,optionIndex) of question.options2" v-html="option.ddName" :value="option.ddId" :selected="option.ddId==question.selectedId2">                   
                      </option>
                    </select>
                  </div>
               </div>                          
              </div>
              <div class="question-group mb-block" v-if="question.type=='numboxes'">
                <div class="text-label"><span v-html="question.optionName"></span>
                  <span class="tooltips">
                    <div class="tooltip">
                      <span class="custom-infoicon"  @click="toltiptoggle"></span>
                      <span class="tooltiptext" v-html="question.description"></span>
                    </div>
                  </span>
                </div>
                <div class="middle-inputbox-wrapper clearfix">
                  <template v-for="(item,index) in question.inputsPlaceholder">
                    <div class="middle-inputbox">
                    <input :unique-id="quesIndex+'_'+index" type="text" class="cst-form-control" :placeholder="question.inputsPlaceholder[index]"  :value="question.inputsSelectedText[index]" @input="handleInputBoxes(question,quesIndex+'_'+index, question.inputIds[index],$event)" />
                    <div v-html="question.inputsLowerText[index]"></div>
                  </div>
                  </template>
                  </div>
                <div class="total-inputbox clearfix">
                <span class="equal-sign">=</span>
                <div class="final">
                  <input type="text" class="cst-form-control" :placeholder="question.outputPlaceholder"  :value="question.outputSelectedText" @input="handleInputBoxesTotal(question,quesIndex, question.outputId,$event)" />
                  <div v-html="question.outputLowerText"></div>
                </div>
                </div>
                <div v-html="question.afterText" class="after-text"></div>
              </div>
              <div class="question-group mb-block" v-if="question.type=='NPS'">
                <div class="text-label"><span v-html="question.optionName"></span>
                  <span class="tooltips">
                    <div class="tooltip">
                      <span class="custom-infoicon"  @click="toltiptoggle"></span>
                      <span class="tooltiptext" v-html="question.description"></span>
                    </div>
                  </span>
                </div>
                <div class="middle-inputbox-wrapper clearfix">
                  <template v-for="(item,index) in question.inputsPlaceholder">
                    <div class="middle-inputbox">
                    <input :unique-id="quesIndex+'_'+index" type="text" class="cst-form-control yohoney" :placeholder="question.inputsPlaceholder[index]"  :value="question.inputsSelectedText[index]" @input="handleInputBoxesNPS(question,quesIndex+'_'+index, question.inputIds[index],$event)" />
                    <div v-html="question.inputsLowerText[index]"></div>
                  </div>
                  </template>
                  </div>
                <div class="total-inputbox for-static-tooltip clearfix">
                  <span class="tooltips">
                    <div class="tooltip">
                      <span class="custom-infoicon"></span>
                      <span class="tooltiptext" v-html="question.outputdescription"></span>
                    </div>
                  </span>
                <span class="equal-sign">=</span>
                <div class="final">
                  <input type="text" class="cst-form-control" :placeholder="question.outputPlaceholder"  :value="question.outputSelectedText" @input="handleInputBoxesTotalNPS(question,quesIndex, question.outputId,$event)" />
                  <div v-html="question.outputLowerText"></div>
                </div>
                </div>
                <div v-html="question.afterText" class="after-text"></div>
              </div>
              <div class="question-group mb-block" v-if="question.type=='2Dnumboxes'">
                <div class='twodrowtable' style="" v-for="(row,rowIndex) in question.rows" >
                    <div class="text-label"><span v-html="row.optionName"></span>
                      <span class="tooltips">
                        <div class="tooltip">
                          <span class="custom-infoicon"  @click="toltiptoggle"></span>
                          <span class="tooltiptext" v-html="row.description"></span>
                        </div>
                      </span>
                    </div>
                    <div class="middle-inputbox-wrapper clearfix">
                      <template v-for="(item,index) in row.inputsPlaceholder">
                        <div class="middle-inputbox">
                        <input :unique-id="quesIndex+'_'+rowIndex+'_'+index" type="text" class="cst-form-control" :placeholder="row.inputsPlaceholder[index]"  :value="row.inputsSelectedText[index]" @input="handle2DInputBoxes(row,quesIndex+'_'+rowIndex+'_'+index, row.inputIds[index],$event)" />
                        <div v-html="row.inputsLowerText[index]"></div>
                      </div>
                      </template>
                    </div>
                    <div class="total-inputbox clearfix">
                      <span class="equal-sign">=</span>
                      <div class="final">
                        <input type="text" class="cst-form-control" :placeholder="row.outputPlaceholder"  :value="row.outputSelectedText" @input="handleInputBoxesTotal2D(question,quesIndex,rowIndex, row.outputId,$event)" />
                        <div v-html="row.outputLowerText"></div>
                      </div>
                    </div>
                    <div v-html="row.afterText" class="after-text"></div>
                </div>
                <div class='twodrowtable' style="" >
                    <div class="text-label"><span v-html="question.totalOptionName"></span>
                      <span class="tooltips">
                        <div class="tooltip">
                          <span class="custom-infoicon"  @click="toltiptoggle"></span>
                          <span class="tooltiptext" v-html="question.totalDescription"></span>
                        </div>
                      </span>
                    </div>
                    <div class="input-box totalfinal">
                      <input type="text" class="cst-form-control" :placeholder="question.totalOutputPlaceholder"  :value="question.totalOutputSelectedText" @input="handleInputBoxesTotalTotal2D(question,quesIndex,question.totalOutputId,$event)" />
                      <div v-html="question.totalOutputLowerText"></div>
                    </div>
                    <div v-html="question.afterText" class="after-text"></div>
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
            <div class="question-row"  v-for="(question,quesIndex) of qType.questions" :class="{'wide': question.quesLength>1 }">                          
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
      //console.log(this.rightData);
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
    $(".multi-row-2").hide(0);
    $(".multi-row-3").hide(0);

    $(document).mouseup(function(e){
      //console.log(e.target)
      var container = $(".multiselect");
      //console.log(container.is(e.target))
      //console.log(container.has(e.target).length)

      // if the target of the click isn't the container nor a descendant of the container
      if (!container.is(e.target) && container.has(e.target).length === 0) 
      {
          //container.hide();
          $(".cus-ddd").removeClass("isopened");
      }
    });

    // $(".overSelect").click(function(e){
    //   $(".cus-ddd").removeClass("isopened");
    // })

    $(".multiselectBox-container").click(function(){
      // console.log("called inside")
      //$(".cus-ddd").removeClass("isopened");

      $(".multiselectBox-container").not(this).find(".cus-ddd").removeClass("isopened");
      //console.log($(this).find(".cus-ddd").hasClass("isopened"))

      if($(this).find(".cus-ddd").hasClass("isopened")){
        //console.log("if");
          $(this).find(".cus-ddd").removeClass("isopened");
      }else{
        //console.log("else");
          $(this).find(".cus-ddd").addClass("isopened");
      }
    })

    $("#cars").change(function(){
      //console.log("called");
        
      var dependednt1Id = $(this).attr("dependent-one");
      var dependednt2Id = $(this).attr("dependent-two");
      var dependednt1IdPlaceholder = $(this).attr("default-placeholder2");
      var dependednt2IdPlaceholder = $(this).attr("default-placeholder3");
      var getSelected = $(this).find(":selected").attr("data-valid");
      //console.log("getSelected::"+getSelected);
      var dataValidArr = getSelected.split("|");

      //console.log("dataValidArr::"+dataValidArr)

      //remove all data
      $("#"+dependednt1Id+" #checkboxes").find("label").hide(0);
      $("#"+dependednt1Id+" #checkboxes").find("input").prop("checked",false);
      $("#"+dependednt1Id).find("select").empty();
      $("#"+dependednt1Id).find("select").append('<option selected disabled>'+dependednt1IdPlaceholder+'</option>');

      $("#"+dependednt2Id+" #checkboxes2").find("label").hide(0);
      $("#"+dependednt2Id+" #checkboxes2").find("input").prop("checked",false);
      $("#"+dependednt2Id).find("select").empty();
      $("#"+dependednt2Id).find("select").append('<option selected disabled>'+dependednt2IdPlaceholder+'</option>');

      //remove from confirmitr as well

      $("#"+dependednt1Id).find("input").each(function(){
        var getId = $(this).prop("id").split("-")[1];
          $("#"+getId).prop("checked",false);
      })
      $("#"+dependednt2Id).find("input").each(function(){
        var getId = $(this).prop("id").split("-")[1];
          $("#"+getId).prop("checked",false);
      })
      //remove from confirmitr as well
      //remove all data

    if(dataValidArr[0]!=""){

      $("#"+dependednt1Id).closest(".multiselect-row").show(0);

      dataValidArr.forEach(function(value,index){
        //console.log("maps"+value)
        //console.log(dependednt1Id)
          $("#"+dependednt1Id+" #checkboxes").find("[data-attr=level1-"+value+"]").css("display","block");
      })
    }else{
      $("#"+dependednt1Id).closest(".multiselect-row").hide(0);
      $("#"+dependednt2Id).closest(".multiselect-row").hide(0);
    }
  })


  

  $(".level_1_dd label").click(function(event){
    event.stopPropagation();
  })
  $(".level_1_dd input").click(function(event){
    event.stopPropagation();
      var allChecked = [];
      var allCheckedText = [];
      var dependednt1IdPlaceholder = $(this).closest(".multiselect").attr("default-placeholder2");
      var dependednt2IdPlaceholder = $(this).closest(".multiselect").attr("default-placeholder3");

      $(this).parent().parent().find("input:checked").each(function(index,value){
        allChecked.push($(value).prop("id"))
        allCheckedText.push($(value).parent().text())
      })
      var getId = $(this).parent().parent().find("input:checked:last").attr("id");
      var getText = $(this).parent().parent().find("input:checked:last").parent().text();
      $(this).closest(".multiselect").find("select").empty();
      if(allCheckedText.length != 0){
          //getId = getId.split("_")[1];
        $(this).closest(".multiselect").find("select").append('<option>'+allCheckedText+'</option>');
      }else{
          $(this).closest(".multiselect").find("select").append('<option>'+dependednt1IdPlaceholder+'</option>');
      }

      var dd3 = $(this).closest(".multiselect").attr("dependent-two");
      $("#"+dd3+" #checkboxes2").find("label").hide(0);
      $("#"+dd3+" #checkboxes2").find("input").prop("checked",false);
      $("#"+dd3).find("select").empty();
      $("#"+dd3).find("select").append('<option>'+dependednt2IdPlaceholder+'</option>');

      checkfornextDD(dd3,$(this).closest(".multiselect").prop("id"));

      //console.log("kjdsfkds")
      $(this).parent().find("input").each(function(){

        var getId = $(this).prop("id").split("-")[1];

        if($(this).is(":checked")){
          $("#"+getId).prop("checked",true);
        }else{
          $("#"+getId).prop("checked",false);
        }
        
      })
     
  })

  function checkfornextDD(thirdId,level1Id){
    var totalIndex = [];
    $("#"+level1Id).find("input:checked").each(function(){
        var allData = $(this).attr("data-valid").split("|");
        if(allData[0] != ""){
            allData.forEach(function(cv,index){
                totalIndex.push(cv);
            })
        }
    })

    var uniqueNames = [];
    $.each(totalIndex, function(i, el){
        if($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
    });

    if(uniqueNames.length != 0){
      $("#"+thirdId).closest(".multiselect-row").show(0);
        uniqueNames.forEach(function(el,index){
        $("#"+thirdId).find("[data-attr=level2-"+el+"]").css("display","block");
      })

    }else{
      $("#"+thirdId).closest(".multiselect-row").hide(0);
    }
    


      
  }
  $(".level_2_dd label").click(function(event){
    event.stopPropagation();
  })

    $(".level_2_dd input").click(function(event){
      event.stopPropagation();
      var dependednt2IdPlaceholder = $(this).closest(".multiselect").attr("default-placeholder3");

      // var getId = $(this).parent().parent().find("input:checked:last").attr("id");
      // var getText = $(this).parent().parent().find("input:checked:last").parent().text();
      // console.log($(this).parent().parent().find("input:checked:last"))
      // console.log(getText)
      $(this).closest(".multiselect").find("select").empty();
      // if(getId != undefined){
      //   getId = getId.split("_")[1];
      //   $(this).closest(".multiselect").find("select").append('<option>'+getText+'</option>');
      //   // if($(this).closest(".multiselect").find("select [data-show="+getId+"]").length==0){
          
      //   // }
      // }else{
      //   $(this).closest(".multiselect").find("select").append('<option>Please select</option>');
      // }

      var allChecked = [];
      var allCheckedText = [];
      $(this).parent().parent().find("input:checked").each(function(index,value){
        allChecked.push($(value).prop("id"))
        allCheckedText.push($(value).parent().text())
      })
      var getId = $(this).parent().parent().find("input:checked:last").attr("id");
      var getText = $(this).parent().parent().find("input:checked:last").parent().text();
      $(this).closest(".multiselect").find("select").empty();
      if(allCheckedText.length != 0){
          //getId = getId.split("_")[1];
        $(this).closest(".multiselect").find("select").append('<option>'+allCheckedText+'</option>');
      }else{
          $(this).closest(".multiselect").find("select").append('<option>'+dependednt2IdPlaceholder+'</option>');
      }
    
      $(this).parent().find("input").each(function(){

        var getId = $(this).prop("id").split("-")[1];

        if($(this).is(":checked")){
          $("#"+getId).prop("checked",true);
        }else{
          $("#"+getId).prop("checked",false);
        }
      
      })
    })


    //backpunch for dependednt dropdown
      var vueThis = this;
      $(".cus-ddd-wrapper").each(function(){
        var getIndex = $(this).attr("index-attr");
        //console.log("hello this");
        var jsonDDD = vueThis.rightData[0].questions[getIndex];

        
        if(jsonDDD.selectedId != ""){
          //console.log(jsonDDD.selectedId);
          $(this).find("#cars").trigger("change");
          if(jsonDDD.selectedId2 != ""){
            var getlevel1selected = jsonDDD.selectedId2.split("-");
            getlevel1selected.forEach(function(item,index){
              $(".cus-ddd-wrapper[index-attr="+getIndex+"]").find("#level1-"+item).trigger("click")
            })

            if(jsonDDD.selectedId3 != ""){
              var getlevel2selected = jsonDDD.selectedId3.split("-");
              getlevel2selected.forEach(function(item,index){
                //console.log("bc")
                //console.log(item)
                $(".cus-ddd-wrapper[index-attr="+getIndex+"]").find("#level2-"+item).trigger("click")
              })
            }
            
          }
        }

        $(".isopened").removeClass("isopened");
      })
    //backpunch for dependednt dropdown
    //All code for dependednt drop down level 2

    $(".question-row").eq(0).find(".tooltiptext").addClass("firstrow-desc");
    $(".question-row").eq(1).find(".tooltiptext").addClass("secondrow-desc");


    //for sdd
    
      $(".sdd1").change(function(){
        $(".sdd2").find("option[value]").hide(0);
        if($(this).find(":selected").attr("data-valid")==undefined){
          return false;
        }
        var validOptons = $(this).find(":selected").attr("data-valid");
        var nextEl = $(this).closest(".question-group").find(".sdd2");
        validOptons.split("|").forEach(function(cv,ind){
          $(nextEl).find("option[value="+cv+"]").show(0);
        })
      })
      $(".sdd1").trigger("change");
    //for sdd

      if(vueThis.progressData.isLight){
        $(".question-row:not(.numboxes)").each(function(index,element){ 
          if(vueThis.rightData[index]==index){
            if(index%2==0){
              $(".question-row:not(.numboxes):eq("+index+"),.question-row:not(.numboxes):eq("+[index+1]+")").wrapAll("<div class='questionrow-wrapper'></div>");
            }
          }
        });
      }else{

        $(".question-row:not(.numboxes)").each(function(index,element){ 
          
          if(index%2==0){        
            if(vueThis.rightData[0].questions[index].grayBG=="true"){
              $(".question-row:not(.numboxes):eq("+index+"),.question-row:not(.numboxes):eq("+[index+1]+")").wrapAll("<div class='questionrow-wrapper grayBg'></div>");
            }else{
              $(".question-row:not(.numboxes):eq("+index+"),.question-row:not(.numboxes):eq("+[index+1]+")").wrapAll("<div class='questionrow-wrapper'></div>");
            }
              
          }
        })

      }
      
  
  },
  methods: {
    yoman:function(optionIndex,mapping){
      //console.log(optionIndex)
      //console.log(mapping)
      var optionIndex = optionIndex+1; //for making new tab
      var dependecnyVar="";
      mapping.split("|").forEach(function(value,index){
        var indexing = value.split(":")[0];
        var dependency = value.split(":")[1];
        if(Number(optionIndex)==Number(indexing)){
          dependecnyVar =  dependency.replace(/-/g,"|")
        }
      })

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
    handlesdd: function (catType, quesIndex, optionIndex, e,ddIndex) {
      //dropdown
      if (ddIndex == 1) {
        this.rightData.forEach((category) => {
          if (category.catType == 1) {
            category.questions[quesIndex].selectedId = e.target.value;
            category.questions[quesIndex].options2.forEach(function(currentValue, index){
              $("#"+currentValue["ddId"]).prop("checked",false);
            })
            category.questions[quesIndex].selectedId2 = "";
          }
        });
      }
      if (ddIndex == 2) {
        this.rightData.forEach((category) => {
          if (category.catType == 1) {
            console.log(category.questions[quesIndex].options2);
            category.questions[quesIndex].options2.forEach(function(currentValue, index){
              $("#"+currentValue["ddId"]).prop("checked",false);
            })
            category.questions[quesIndex].selectedId2 = e.target.value;
          }
        });
      }
      this.updateProgressData();
      document.getElementById(e.target.value).click();
    },
    
    handleInput: function (question, catType, quesIndex, optionIndex, e,qTypeIndex) {
      console.log("handle input called")
      let { type, maxLength, selectedId } = question;
      let val, valArr;

      if (type == "num"||type == "numboxes") {
        val = e.target.value.trim();
        console.log(val)
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
          if(ch==' '){
            valArr.splice(i,1);
            //console.log(valArr)
          }else{
            break;
          }
        }
        
          valArr = valArr.filter((ch) => /^[a-zA-Z\s]*$/.test(ch));
        
      }
      if (type == "txtNum") {
        val = e.target.value.trim();
        valArr = val.split("");
        for (let i = 0; i < valArr.length; i++) {
          const ch = valArr[i];
          if(ch==' '){
            valArr.splice(i,1);
            //console.log(valArr)
          }else{
            break;
          }
        }
        
        valArr = valArr.filter((ch) => /^[a-zA-Z0-9!@#$%^&*()_+`~\s]*$/.test(ch));
        
      }
      

      // if (Number(valArr.join("")) > question.maxRange) {
      //   valArr.pop();
      // }
      while(Number(valArr.join("")) > question.maxRange){
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

      console.log(quesIndex);

      if (catType == 1) {
        this.rightData.forEach((category,index) => {
          if(qTypeIndex == index){
            if (category.catType == 1) {
              category.questions[quesIndex].selectedText = val;
            }
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

      console.log(selectedId)

      document.getElementById(selectedId).value = val;
    },
    handleInputBoxes: function (question, boxUnique, punchId,e) {
      console.log("hello 7");

      let uniqueBox = boxUnique;
      let boxIndex =  uniqueBox.split("_")[1];
      let quesIndex = uniqueBox.split("_")[0];
      var punchId = punchId;

      let { maxLength, maxRange, minRange } = question;
      let val = e.target.value.trim();

      val = this.numBoxesFilter(val,question.maxRange,maxLength);

      this.rightData[0].questions[quesIndex].inputsSelectedText[boxIndex] = val;

      var totalSum = this.numBoxesTotal(quesIndex);

      let valArr = val.split("");
      if(totalSum>maxRange){
        valArr.pop();
      }
      val = valArr.join("");

      this.rightData[0].questions[quesIndex].inputsSelectedText[boxIndex] = val;
      totalSum = this.numBoxesTotal(quesIndex);
      this.rightData[0].questions[quesIndex].outputSelectedText = totalSum;
      var totalPunch = this.rightData[0].questions[quesIndex].outputId;
      e.target.value = val;
      $("#"+punchId).val(val);
      $("#"+totalPunch).val(totalSum);
      this.updateProgressData();
    },

    handleInputBoxesNPS: function (question, boxUnique, punchId,e) {

      let uniqueBox = boxUnique;
      let boxIndex =  uniqueBox.split("_")[1];
      let quesIndex = uniqueBox.split("_")[0];
      var punchId = punchId;

      let maxLength = question.maxLength[boxIndex];
      let maxRange = question.maxRange[boxIndex];
      let minRange = question.minRange[boxIndex];

      let val = e.target.value.trim();

      val = this.numBoxesFilter(val,maxRange,maxLength);

      // this.rightData[0].questions[quesIndex].inputsSelectedText[boxIndex] = val;

      Vue.set(question.inputsSelectedText, boxIndex, val);

      var totalDifference = question.inputsSelectedText[0] - question.inputsSelectedText[1];
      question.outputSelectedText = totalDifference;

      $("#"+punchId).val(val);
      $("#"+question.outputId).val(totalDifference);
      this.updateProgressData();
    },

    handleInputBoxesTotalNPS: function (question, questionIndex, punchId,e) {
      //this field can hold negative values as well
      var punchId = punchId;

      Vue.set(question.inputsSelectedText, 0, '');
      Vue.set(question.inputsSelectedText, 1, '');

      $("#"+question.inputIds[0]).val('');
      $("#"+question.inputIds[1]).val('');

      let maxLength = question.outputMaxLength;
      let maxRange = question.outputMaxRange;
      let minRange = question.outputMinRange;

      let val = e.target.value.trim();

      if(val=='-'){
        question.outputSelectedText = '-';
        $("#"+punchId).val('-');
        this.updateProgressData();
        return false;
      }

      val = this.numBoxesFilter(val,maxRange,maxLength,minRange);

      question.outputSelectedText = val;

      $("#"+punchId).val(val);
      this.updateProgressData();
    },

    handleInputBoxesTotal:function(question, quesIndex, punchId,e){
      console.log("hello 6");
      var vueThis = this;
      var punchId = punchId;
      var allidsArr = this.rightData[0].questions[quesIndex].inputIds;
      allidsArr.forEach(function(cv,index){
        vueThis.rightData[0].questions[quesIndex].inputsSelectedText[index] = '';
        $("[unique-id="+quesIndex+'_'+[index]+"]").val('');
        $("#"+cv).val('');
      })
     

      let { maxLength, maxRange, minRange } = question;
      let val = e.target.value.trim();

      val = this.numBoxesFilter(val,question.maxRange,maxLength);

      e.target.value = val;
      question.outputSelectedText = val;
      $("#"+punchId).val(val);
      this.updateProgressData();
    },

    handleInputBoxesTotal2D:function(question, quesIndex,rowIndex, punchId,e){
      console.log("hello 5");
      var vueThis = this;
      var punchId = punchId;
      var allidsArr = this.rightData[0].questions[quesIndex].rows[rowIndex].inputIds;

      allidsArr.forEach(function(cv,index){
        vueThis.rightData[0].questions[quesIndex].rows[rowIndex].inputsSelectedText[index] = '';
        $("[unique-id="+quesIndex+'_'+[rowIndex]+'_'+[index]+"]").val('');
        $("#"+cv).val('');
      })
     

      let { maxLength, maxRange, minRange } = this.rightData[0].questions[quesIndex];
      let val = e.target.value.trim();

      val = this.numBoxesFilter(val,maxRange,maxLength);
      //now check with other rows final data
        let finalTotal = this.numBoxesFinalTotalTotal2D(quesIndex,rowIndex);
        console.log("finaltotal:"+finalTotal);
        console.log(finalTotal+val)
        if(Number(finalTotal)+Number(val)>maxRange){
          let valArr = val.split("");
          valArr.pop();
          val = valArr.join("");
        }
      //now check with other rows final data
      question.rows[rowIndex].outputSelectedText = val;
      e.target.value = val;
      $("#"+punchId).val(val);
      this.updateNumbbox2dTotaltotal(quesIndex);
      this.updateProgressData();
    },

    numBoxesTotal:function(quesIndex){
      console.log("hello 4");
      var total = 0;
      this.rightData[0].questions[quesIndex].inputsSelectedText.forEach(function(cv){
        total += Number(cv);
      })

      return total;
    },
    numBoxesTotal2D:function(quesIndex,rowIndex){
     // var vueThis = this;
      //console.log("hello 3");
      var total = 0;
      // this.rightData[0].questions[quesIndex].rows.forEach(function(cv,cvIndex){
      //   if(cvIndex==rowIndex){
      //     vueThis.rightData[0].questions[quesIndex].rows[rowIndex].inputsSelectedText.forEach(function(cv2){
      //       total += Number(cv2);
      //     })
      //   }else{
      //     total +=Number(cv.outputSelectedText);
      //   }
      // })

      this.rightData[0].questions[quesIndex].rows[rowIndex].inputsSelectedText.forEach(function(cv2){
            total += Number(cv2);
      })
    
      // this.rightData[0].questions[quesIndex].rows.forEach(function(cv){
      //   total += Number(cv);
      // })

      return total;
    },
    numBoxesTotalTotal2D:function(quesIndex,rowIndex){
      var vueThis = this;
      console.log("hello 3");
      var total = 0;
      this.rightData[0].questions[quesIndex].rows.forEach(function(cv,cvIndex){
        if(cvIndex==rowIndex){
          vueThis.rightData[0].questions[quesIndex].rows[rowIndex].inputsSelectedText.forEach(function(cv2){
            total += Number(cv2);
          })
        }else{
          total +=Number(cv.outputSelectedText);
        }
      })

      return total;

    },
    numBoxesFinalTotalTotal2D:function(quesIndex,rowIndex){
      var vueThis = this;
      var total = 0;
      this.rightData[0].questions[quesIndex].rows.forEach(function(cv,cvIndex){
        if(cvIndex==rowIndex){
        }else{
          total +=Number(cv.outputSelectedText);
        }
      })

      return total;

    },
    handle2DInputBoxes: function (question, boxUnique, punchId,e) {
      console.log("hello 2");
      let uniqueBox = boxUnique;
      let quesIndex = uniqueBox.split("_")[0];
      let rowIndex =  uniqueBox.split("_")[1];
      let boxIndex =  uniqueBox.split("_")[2];
      var punchId = punchId;

      let { maxLength, maxRange, minRange } = this.rightData[0].questions[quesIndex];
      let val = e.target.value.trim();

      val = this.numBoxesFilter(val,maxRange,maxLength);

      this.rightData[0].questions[quesIndex].rows[rowIndex].inputsSelectedText[boxIndex] = val;

      var totalSum = this.numBoxesTotal2D(quesIndex,rowIndex);
      var finalTotalSum = this.numBoxesTotalTotal2D(quesIndex,rowIndex);
      console.log("totalSum::"+totalSum);
      console.log(Number(totalSum)>Number(maxRange));

      let valArr = val.split("");
      if(finalTotalSum>maxRange){
        console.log("inside maxrange issue")
        valArr.pop();
      }
      else if(totalSum>maxRange){
        console.log("inside maxrange issue")
        valArr.pop();
      }
      
      val = valArr.join("");

      this.rightData[0].questions[quesIndex].rows[rowIndex].inputsSelectedText[boxIndex] = val;
      totalSum = this.numBoxesTotal2D(quesIndex,rowIndex);
      this.rightData[0].questions[quesIndex].rows[rowIndex].outputSelectedText = totalSum;
      var totalPunch = this.rightData[0].questions[quesIndex].rows[rowIndex].outputId;
      e.target.value = val;
      $("#"+punchId).val(val);
      $("#"+totalPunch).val(totalSum);
      this.updateNumbbox2dTotaltotal(quesIndex);
      this.updateProgressData();
    },
    updateNumbbox2dTotaltotal:function(quesIndex){
      console.log("hello 1");
      let total = 0;
      this.rightData[0].questions[quesIndex].rows.forEach(function(cv){
        total += Number(cv.outputSelectedText)
      })
      this.rightData[0].questions[quesIndex].totalOutputSelectedText = total;

      var punchId = this.rightData[0].questions[quesIndex].totalOutputId;
      console.log(total)
      $("#"+punchId).val(total);
    },

    handleInputBoxesTotalTotal2D:function(question,quesIndex,punchId,e){
      let allidsArr = question.rows;
      allidsArr.forEach(function(cv,index){
        // console.log(cv['inputsSelectedText'])
        cv['inputsSelectedText'].forEach(function(cv2,index2){
          cv.inputsSelectedText[index2] = "";
          $("[unique-id="+quesIndex+'_'+[index]+'_'+[index2]+"]").val('');
          $("#"+cv["inputIds"][index2]).val('');
          //console.log($("#"+cv["inputIds"][index2]));

          cv["outputSelectedText"] ="";
          $("#"+cv["outputId"]).val("");
        })
        
      })

      let { maxLength, maxRange, minRange } = question;
      let val = e.target.value.trim();
      console.log(val);
      val = this.numBoxesFilter(val,maxRange,maxLength);
      console.log(val);

      question["totalOutputSelectedText"]=val;
      e.target.value = val;
      
      $("#"+punchId).val(val);
      this.updateProgressData();

    },
    updateProgressData: function () {
      //console.log("progress data");
      //console.log(this.rightData)
      let totalAttempted = 0;

      this.rightData.forEach((data) => {
        if (data.catType == 1) {
          data.questions.forEach((question) => {
            if (question.type == "dd"||question.type == "ddd") {
              if (question.selectedId !== "") {
                totalAttempted++;
              }
            }
            if (question.type == "sdd") {
              if (question.selectedId !== "") {
                totalAttempted++;
              }
              if (question.selectedId2 !== "") {
                totalAttempted++;
              }
            }
            if (question.type == "txt" || question.type == "num"||question.type =="numlist") {
              if (question.selectedText !== "") {
                totalAttempted++;
              }
            }
            if(question.type=="numboxes"){
              console.log("inside");
              console.log(question.outputSelectedText);
              if(question.outputSelectedText != "" && Number(question.outputSelectedText) != 0){
                console.log("aur inside")
                totalAttempted++;
              }
            }
            if(question.type=="NPS"){
              if(question.outputSelectedText !== "" && question.outputSelectedText !== "-"){
                totalAttempted++;
              }
            }
            if(question.type=="2Dnumboxes"){
              if(question.totalOutputSelectedText != "" && Number(question.totalOutputSelectedText) != 0){
                totalAttempted++;
              }
            }
            // if (question.type == "numlist") {
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

    handleNumlist:function(quesIndex,e){
      //console.log(quesIndex)
      $(e.target).find("option").each(function(index, elem) {
        var getradio = $(this).attr("value");
        var getText = $(this).attr("data-input-id");
        $("#" + getradio).prop("checked", false);
        $("#" + getText).val("");
      })
      var selectedOption = $(e.target).find(":selected");
      var dataText = $(selectedOption).attr("data-input-id");
      var dataId = $(selectedOption).attr("value");

      $("#" + dataId).prop("checked", true);
      $(e.target).parent().find("input").attr("data-text", dataText).val("");
      this.rightData[0].questions[quesIndex].selectedId = dataId;
      
    },
    numListInput:function(question,quesIndex,e){
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
      var getId= $(e.target).attr("data-text");
      e.target.value = val;
      $("#"+getId).val(val);
      this.updateProgressData();
    },
    numBoxesFilter:function(val,maxRange,maxLength,minRange){
      let valArr = val.split("");

        if (isNaN(val)) {
          valArr = valArr.filter((ch) => !isNaN(ch));
        }
        // if (Number(valArr.join("")) > maxRange) {
          while(Number(valArr.join("")) > maxRange){
            valArr.pop();
          }

          if(minRange){
            while(Number(valArr.join("")) < minRange){
              valArr.pop();
            }
          }
          
          
        // }
        if (valArr.length > maxLength) {
          if (valArr[valArr.length - 1] == " ") {
            valArr = valArr.join("").trim().split("");
          } else {
            valArr.pop();
          }
        }
        val = valArr.join("");
  
        return val;
    }
  }
});

Vue.component("progress-panel", {
  props: ["progressData"],
  data: function () {
    return {
      submitStatus: false,
      badgStatus:0, //0 for not started //1 for in progess and 2 for completed
      badgeText:"Not started"
    };
  },
  template: `<div class='progress-panel'>
        <div class='progress-panel-inner'>
        <h2 class="ques-heading" v-html='progressData.heading'></h2>
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
                    <div class='btn-item pre' v-html='progressData.saveTxt' @click=savePage()>Save</div>
                    <div class='btn-item frw' :class="submitStatus == false?'disable':''" @click=checkSubmitStatus(submitStatus) v-html='progressData.submitTxt' >Submit</div>
            </div>
        </div>
    
    </div>`,

  mounted: function () {
    document.querySelector("#ttl-attmpt").value = this.progressData.answrdQues;
    document.querySelector("#cur-prcntge").value = this.progressData.percentge;
    document.querySelector("#cur-state").value = this.getBadgeIconValue(this.progressData.answrdQues,this.progressData.totalQues);

    this.updateProgresbar(this.progressData.answrdQues); // this  is called from questions above on every question attempt
  },
  methods: {
    nextPage: function (forwardBtnVal) {
      //console.log("called");
      document.getElementById("left-panel-menu-slctn").value = forwardBtnVal;
      document.getElementById("forwardbutton").click();
    },
    savePage: function () {
      this.$parent.setScrollHeight(); //calling parent
      document.getElementById("forwardbutton").click();
    },
    updateProgresbar: function (ttlAttempt) {
      //console.log("update progress bar called");
      //console.log(ttlAttempt);
      this.progressData.answrdQues = ttlAttempt;
      var percentage = parseInt(
        (ttlAttempt / Number(this.progressData.totalQues)) * 100
      );
      this.progressData.percentge = percentage;

      document.querySelector("#ttl-attmpt").value = ttlAttempt;
      document.querySelector("#cur-prcntge").value = percentage;
      document.querySelector("#cur-state").value = this.getBadgeIconValue(Number(ttlAttempt),Number(this.progressData.totalQues));

      if(Number(ttlAttempt) == 0){
          this.badgeText = this.progressData.notstarted;
          this.badgStatus = 0;
      }else if(Number(ttlAttempt) > 0 && Number(ttlAttempt)<Number(this.progressData.totalQues)){
        this.badgeText = this.progressData.inprogress;
        this.badgStatus = 1;
      }else if(Number(ttlAttempt) == Number(this.progressData.totalQues)){
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
    getBadgeIconValue:function(initialQAnsd,ttlQAnsd){

      if(initialQAnsd == 0){
        return 0;
      }
      else if(initialQAnsd > 0 && initialQAnsd < ttlQAnsd){
        return 1;
      }
      else if(initialQAnsd == ttlQAnsd){
        return 2;
      }

    },
  }

});

/*{
   <input v-for="option of question.options" type="radio" :name="qType+'_'+quesIndex" :id="option.ddId" /> 
}*/