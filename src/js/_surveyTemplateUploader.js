Vue.component('survey-template-uploader', {
    props:["JsonData"],
    data: function () {
        return {
          showDownload: false,
          forwardbtnVal : "",
          showNext:false,
          messageText:"",
          showPopup:false,
          showClose:false,
        };
    },
    template:`<div class="assessment-intro">  
    <!--preloader-->
    <div class="pre-loading-panel" id="pre-loading-panel">
    <div class="loading-animation">
      <img src=https://e2eresearch.com/swteam/McKinsey/Assessment-app/v2/mck-logo.svg alt="" class="logo">
      <svg viewBox="-25 -25 110 70" preserveAspectRatio>
          <circle fill="#fff" stroke="none" cx="6" cy="25" r="6">
          <animateTransform 
             attributeName="transform" 
             dur="1s" 
             type="translate" 
             values="0 15 ; 0 -15; 0 15" 
             repeatCount="indefinite" 
             begin="0.1"/>
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.1"/>  
        </circle>
        <circle fill="#fff" stroke="none" cx="30" cy="25" r="6">
          <animateTransform 
             attributeName="transform" 
             dur="1s" 
             type="translate" 
             values="0 10 ; 0 -10; 0 10" 
             repeatCount="indefinite" 
             begin="0.2"/>
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite" 
            begin="0.2"/>  
        </circle>
        <circle fill="#fff" stroke="none" cx="54" cy="25" r="6">
          <animateTransform 
             attributeName="transform" 
             dur="1s" 
             type="translate" 
             values="0 5 ; 0 -5; 0 5" 
             repeatCount="indefinite" 
             begin="0.3"/>
              <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite" 
            begin="0.3"/>
        </circle>
      </svg>
    </div>
  </div>
  <!--preloader end-->



    <!--popup code here-->
    <div class="popup-layer" v-if="showPopup">
    <div class="popup-layer__popup-model">
        <div class="close-popup" v-if="showClose" @click="hidePopup()">
            <div class="close"></div>
        </div>
           <div class="model-header" style="display:none;">heading title</div> 
              <div class="popup-model-body">                       
                  <div class="">
                   <label for="" class="text-label" v-html="messageText">Please provide file name.</label>
                   <input id="downloadInput" placeholder="File name" style="display:none" class="cst-form-control">
                  </div>              
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
                        <div class="data-btn-col clearfix" @click="showHideUploadDownload(true,false,JsonData.inputData.inputOptions[0].frdBtnValue);redirect()">
                            <div class="data-btn-wrapper">
                                <div class="btn-template">
                                    <div class="btn-template-title" v-html="JsonData.inputData.inputOptions[0].inputText">Input Data Using <br/> Input From</div>
                                </div>
                              </div>
                        </div>
                        <div class="data-btn-col clearfix" @click="showHideUploadDownload(false,true,JsonData.inputData.inputOptions[1].frdBtnValue)">
                            <div class="data-btn-wrapper data-btn-active">
                                <div class="btn-template">
                                <div class="btn-template-title">Input Data Using <br/> Input Template</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
             </div>  
            <div class="divider" v-if="showDownload">&nbsp;</div>

            <div class="survey-template" v-if="showDownload">
            
              <div class="data-btn-row clearfix">
                   <div class="data-btn-col clearfix" >
                        <a  :href="JsonData.templateData.templateOptions[0].targetUrl" ref="download" />
                       <div class="data-btn-wrapper" @click="downloadlink(JsonData.templateData.templateOptions[0].targetUrl)">
                           <div class="btn-template">
                           <span class="cloud-icon cloud-download-icon"></span>
                               <div class="btn-template-title browse-title" v-html="JsonData.templateData.templateOptions[0].inputText" >Download Template</div>
                           </div>
                         </div>
                    </div>
                    <div class="data-btn-col clearfix">
                        <input type="file" ref="input" id="imgupload" style="display:none" accept=".xls,.xlsx,.xlsm" @change="somethingcalled(JsonData.templateData.templateOptions[1].targetUrl)"/>
                        <div class="data-btn-wrapper" @click="openUploader()">
                            <div class="btn-template">
                            <span class="cloud-icon cloud-upload-icon"></span>
                            <div class="btn-template-title browse-title" v-html="JsonData.templateData.templateOptions[1].inputText">Upload Template</div>
                            </div>
                        </div>
                    </div>
               </div>
            </div> 
                 
        </div>
     </div>
     <div class="survey-begin txt-center" v-if="showNext">
         <div class="btn-item frw" @click="handleForward" v-html="JsonData.frdBtnTxt">cscavae</div>
     </div>
     </div>
   </div>    
    `,
    methods:{
        handleForward:function(){
            document.getElementById('forwardbutton').click();
        },
        hidePopup:function(){
            this.showPopup = false;
            this.showClose = false;
        },
        showHideUploadDownload:function(nxtBtn,showDownload,frdBtnValue){
            //console.log(nxtBtn)
            //this.showNext = nxtBtn;
            this.showDownload = showDownload;
            this.forwardbtnVal = frdBtnValue;
            document.getElementById("navText").value = frdBtnValue;
        },
        redirect:function(){
            console.log("called");
            this.showPopup = true;
            this.messageText = this.JsonData.firstOptionMessage;
            setTimeout(()=>{
                this.handleForward();
            },2000)
            
        },
        downloadlink:function(link){
            this.$refs.download.click();
            // $(document).ready(function(){
            //     $.ajax({url: link,type:"GET", success: function(){
            //         console.log("kar diya call");
            //         //$("#div1").html(result);
            //     }});
            // })
            

        },
        openUploader:function(){
            this.$refs.input.click();
        },
        somethingcalled:function(link){
            // console.log($('#imgupload')[0].files[0]);
            // console.log(this.JsonData);
            var data = new FormData();
            //data.append('File',$('#imgupload')[0].files[0]);
            var fileUpload = $("#imgupload").get(0);
            var files = fileUpload.files;

            //var fileData = new FormData();
            for (var i = 0; i < files.length; i++) {
                data.append(files[i].name, files[i]);
            }
            // data.append('PId',this.JsonData.pId);
            // data.append('RespId',this.JsonData.respId);
            data.append('PId',this.JsonData.pId);
            data.append('RespId',this.JsonData.respId);
            $(document).ready(()=>{
                
                $.ajax({
                    url: link,
                    type:"POST",
                    enctype: 'multipart/form-data',
                    processData: false,
                    contentType: false,
                    cache: false,
                    timeout: 600000,
                    data:data,
                    success: (successData)=>{
                        console.log(successData)
                        console.log(successData.DataObject.Data)
                        if(successData.DataObject.Data==false){
                            this.messageText = successData.ResultCode.MessageText;
                            this.showClose = true;
                            // setTimeout(()=>{
                            //     this.showPopup=false;
                            // },2000)
                        }else{
                            this.messageText = this.JsonData.successText;
                            //console.log(this.JsonData.successText);
                            setTimeout(()=>{
                                this.showPopup=false;
                                this.handleForward();
                            },2000)
                        }
                        this.showPopup=true;
                    }
                });
            })
        }
        
    }
}) 