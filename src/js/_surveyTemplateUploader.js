Vue.component('survey-template-uploader', {
    props:["JsonData"],
    data: function () {
        return {
          showUploadDownload: true,
          forwardbtnVal : ""
        };
    },
    template:`<div class="assessment-intro">  

    <!--popup code here-->
    <div class="popup-layer" style="display:none">
    <div class="popup-layer__popup-model">
        <div class="close-popup">
            <div class="close"></div>
        </div>
           <div class="model-header">heading title</div> 
              <div class="popup-model-body">                       
                  <div class="">
                   <label for="" class="text-label">Please provide file name.</label>
                   <input id="downloadInput" placeholder="File name" class="cst-form-control">
                  </div>              
              </div>
              <div class="popup-btn-inner">
                  <div class="btn-item frw">Back</div>
                  <div class="btn-item frw">Next</div>
              </div>
          </div>
     </div>
    <!--popup code end-->
    <div class="cst-container">  
     <div class="survey-intro ">
        <div class="survey-template-inner">

             <div class="survey-template">
                 <div class="introduction-title" v-html="JsonData.heading"></div>
                 
                   <div class="data-btn-row clearfix">
                        <div class="data-btn-col clearfix">
                            <div class="data-btn-wrapper">
                                <div class="btn-template">
                                    <div class="btn-template-title">Input Data Using <br/> Input From</div>
                                </div>
                              </div>
                        </div>
                        <div class="data-btn-col clearfix" @click="showHideUploadDownload">
                            <div class="data-btn-wrapper data-btn-active">
                                <div class="btn-template">
                                <div class="btn-template-title">Input Data Using <br/> Input Template</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
             </div>  
            <div class="divider" v-if="showUploadDownload">&nbsp;</div>

            <div class="survey-template" v-if="showUploadDownload">
            
              <div class="data-btn-row clearfix">
                   <div class="data-btn-col clearfix" >
                       <div class="data-btn-wrapper">
                           <div class="btn-template">
                           <i class="fas fa-cloud-download-alt"></i>
                               <div class="btn-template-title browse-title" v-html="JsonData.templateData.templateOptions[0].inputText">Download Template</div>
                           </div>
                         </div>
                    </div>
                    <div class="data-btn-col clearfix">
                        <div class="data-btn-wrapper">
                            <div class="btn-template">
                            <i class="fas fa-cloud-upload-alt"></i>
                            <div class="btn-template-title browse-title" v-html="JsonData.templateData.templateOptions[1].inputText">Upload Template</div>
                            </div>
                        </div>
                    </div>
               </div>
            </div> 
                 
        </div>
     </div>
     <div class="survey-begin txt-center">
         <div class="btn-item frw" @click="handleForward" v-html="JsonData.frdBtnTxt">cscavae</div>
     </div>
     </div>
   </div>    
    `,
    methods:{
        handleForward:function(){
            document.getElementById('forwardbutton').click();
        },
        showHideUploadDownload:function(){
            showUploadDownload = true;
        }
        
    }
}) 