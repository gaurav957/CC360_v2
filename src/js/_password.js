Vue.component("password", {
  props: ["JsonData"],
  data: function () {
    return {
      isInvalid: false,
      inputVal : ""
    };
  },
  template: `<div class="assessment-intro">  
  <div class="cst-container">  
   <div class="survey-intro center-align">
   <div class="introduction-title" v-html="JsonData.heading"></div>   
        <div class="intro-panel" v-html="JsonData.content"></div>
              <div class="password-inner clearfix">
              <div :style="[JsonData.isInvalid==true ?{'visibility':'visible'}:{'visibility':'hidden'}]" class="validated-error"  v-html="JsonData.Error">There is an error</div>
                 <div v-for="(input, index) in JsonData.inputFields" class="">                
                   <label class="lbl-control" :for="'qual_'+ index" v-html="input.label"></label> 
                   <input class="cst-form-control" v-if="input.inputType=='text'" :id="'qual_'+ index"
                     @input="handleInput(input.inputId,index, $event)" 
                   :placeholder="input.placeholder" type="password"/>                    
                   </div>
              </div>
       
          <div class="survey-begin txt-center">
              <div class="btn-item frw" @click="handleForward" v-html="JsonData.frdBtnTxt"></div>
           </div>
           <div class="email-inner">
              <div class="email-instruction" v-html="JsonData.emailInstruct">  </div>                      
              <div class="email-url"> 
              <a :href="JsonData.emailUrl" v-html="JsonData.emailUrlText"></a>
              </div> 
            </div>
      </div>
   </div>
</div>`,

mounted: function () {
  //if(JsonData.isInvalid==true){
    //this.isInvalid=true
  //}
  this.passValue=document.getElementById("passwordCompare").value;
  document.getElementById("Clink").value = document.getElementById("__continuelink").getAttribute("href");
  console.log();
},
methods: {
  handleSelect: function (index, e) {
    this.JsonData.inputFields[index].selectedId = e.target.value;
    document.querySelector("#" + e.target.value).click();
  },
  handleForward: function () {
    if(this.JsonData.inputFields[0].inputVal == this.inputVal){
      this.isInvalid = false;
      document.getElementById("forwardbutton").click();
    }else{
      this.isInvalid = true;
        //console.log("error");
        if(document.getElementById("qual_0").value == this.passValue && this.passValue!=""){
          //console.log("dd");
          document.getElementById("urlcontinuelink").click();
        }
        else{
          document.getElementById("forwardbutton").click();
        }
    }

  },
  handleInput: function (id, index, e) {
    this.inputVal = e.target.value;
    document.getElementById(id).value = e.target.value;
  },
},
});
