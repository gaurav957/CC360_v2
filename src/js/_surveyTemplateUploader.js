Vue.component('survey-template-uploader', {
    props:["JsonData"],
    data: function () {
        return {
          showDownload: false,
          forwardbtnVal : "",
          messageText:"",
          showPopup:false,
          showClose:false,
          showPreloader:false,
          recordAvailable:false,
          enableDigitalForm:true,
          showSubmit:false,
          historyArr:[
            // {
            //     fileName:"abc.xls",
            //     date:"28.05.2021",
            //     time:"10:00PM",
            //     downloadLink:"https://cc360admin-dev.intranet.mckinsey.com/api/d/Download/DownloadSurveyDataHistoryFile?filePath=~/Upload/SurveyData/p27334778/Jangir_V2.xlsm"
            // },
          ]
        };
    },
    template:`<div class="assessment-intro">  
    <!--preloader-->
    <div class="pre-loading-panel" id="pre-loading-panel" v-if="showPreloader">
    <div class="loading-animation">
      <img :src="JsonData.preloaderImg" alt="" class="logo">
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
                        <div class="data-btn-col clearfix"  @click="enableDigitalForm==false?'':[showHideUploadDownload(true,false,JsonData.inputData.inputOptions[0].frdBtnValue),redirect()]">
                            <div class="data-btn-wrapper" :class="enableDigitalForm==false?'disable':''">
                                <div class="btn-template">
                                    <div class="btn-template-title" v-html="JsonData.inputData.inputOptions[0].inputText">Input Data Using <br/> Input From</div>
                                </div>
                              </div>
                        </div>
                        <div class="data-btn-col clearfix" @click="showHideUploadDownload(false,true,JsonData.inputData.inputOptions[1].frdBtnValue)">
                            <div class="data-btn-wrapper data-btn-active">
                                <div class="btn-template">
                                <div class="btn-template-title" v-html="JsonData.inputData.inputOptions[1].inputText">Input Data Using <br/> Input Template</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
             </div>  
            <div class="divider" v-if="showDownload">&nbsp;</div>

            <div  v-if="showDownload">

            <div class="inst">
                <div class="inst-title" v-html="JsonData.inst.title">Instructions:</div>
                <ol>
                    <li class="inst-list" v-for="(inst,index) in JsonData.inst.list" v-html="inst"></li>
                </ol>
            </div>
            <div class="survey-template">
              <div class="data-btn-row clearfix">
                <div class="clearfix">
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
                        <input type="file" ref="input" id="imgupload" style="display:none" accept=".xls,.xlsx,.xlsm" @change="uploadTemplate(JsonData.templateData.templateOptions[1].targetUrl)"/>
                        <div class="data-btn-wrapper" @click="openUploader()">
                            <div class="btn-template">
                            <span class="cloud-icon cloud-upload-icon"></span>
                            <div class="btn-template-title browse-title" v-html="JsonData.templateData.templateOptions[1].inputText">Upload Template</div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="prev-uploads" v-if="recordAvailable">
                        <div class="prev-title">Previous Uploads</div>
                        <div class="prev-data">
                            <ol>
                                <li v-for="(history,historyIndex) in historyArr">
                                    <div class="prev-left">
                                        <span v-html="history.fileName">CC360_v1</span>
                                    </div>
                                    <div class="prev-right">
                                        <span v-html="history.date">28.05.2021</span>
                                        <span v-html="history.time">10:00PM</span>
                                        <a class="download_history" :href="history.downloadLink"></a>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div class="submit-setup txt-center" v-if="showSubmit">
                        <div class="btn-item frw" v-html="JsonData.submitTxt" @click="handleForward">Submit</div>
                    </div>
               </div>
            </div> 
            </div>
                 
        </div>
     </div>
     <div class="survey-begin txt-center" v-if="1!=1">
         <div class="btn-item frw" @click="handleForward" v-html="JsonData.frdBtnTxt">cscavae</div>
     </div>
     </div>
   </div>    
    `,
    mounted:function(){
        this.getHistory();
    },
    methods:{

        digitalFormClick:function(enableDigitalForm){

            console.log(enableDigitalForm)

            // enableDigitalForm == true?'':showHideUploadDownload(true,false,JsonData.inputData.inputOptions[0].frdBtnValue),redirect()

        },
        digitalFormClick2:function(enableDigitalForm){

            console.log(enableDigitalForm)

            // enableDigitalForm == true?'':showHideUploadDownload(true,false,JsonData.inputData.inputOptions[0].frdBtnValue),redirect()

        },

        
        handleForward:function(){
            document.getElementById('forwardbutton').click();
        },
        hidePopup:function(){
            this.showPopup = false;
            this.showClose = false;
        },
        showHideUploadDownload:function(nxtBtn,showDownload,frdBtnValue){
            console.log("itit");
            this.showDownload = showDownload;
            this.forwardbtnVal = frdBtnValue;
            document.getElementById("navText").value = frdBtnValue;
        },
        redirect:function(){
            this.showPopup = true;
            this.messageText = this.JsonData.firstOptionMessage;
            setTimeout(()=>{
                this.handleForward();
            },2000)
            
        },
        downloadlink:function(link){
            this.$refs.download.click();           

        },
        openUploader:function(){
            this.$refs.input.click();
        },
        prependZero:function(number){
            if(parseInt(number)<=9){
                return "0"+number;
            }else{
                return number;
            }
        },
        uploadTemplate:function(link){
           
            this.showPreloader = true;
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
            $("#imgupload").val("");
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
                        
                        if(successData.DataObject.Data==false){
                            this.messageText = successData.ResultCode.MessageText;
                            this.showClose = true;
                           
                        }else{
                            this.messageText = this.JsonData.successText;
                           
                            setTimeout(()=>{
                                this.showPopup=false;
                                this.getHistory();
                                
                                //this.handleForward();
                            },2000)
                        }
                        this.showPopup=true;
                        
                    },
                    complete:()=>{
                        this.showPreloader=false;
                    }
                });
            })
        },
        getHistory:function(){

            this.showPreloader = true;
           

            $.ajax({
                url: this.JsonData.history.getHistoryUrl,
                type:"GET",
                data:{
                    'pid':this.JsonData.pId,
                    'respid':this.JsonData.respId
                }, 
                success: (result)=>{
                    
                    if(result.DataObject.Data != null){
                        
                        const dataObject = result.DataObject.Data;
                        const createdData = [];

                        dataObject.forEach(element => {

                            let dateObj = new Date(element.CreatedDate);
                            let date = dateObj.getDate();
                            let month = dateObj.getMonth()+1;
                            let year = dateObj.getFullYear();
                            date = [this.prependZero(date),this.prependZero(month),this.prependZero(year)].join('.');

                            let hours  = dateObj.getHours();
                            let minutes  = dateObj.getMinutes();
                            let ampm = "";

                            if(hours>12){
                                hours = hours-12;
                                ampm = "PM";
                            }else{
                                ampm = "AM";
                            }

                            let time = [this.prependZero(hours),":",this.prependZero(minutes),ampm].join('');

                            let dataObj = {
                                fileName:element.FileName,
                                date,
                                time,
                                downloadLink:this.JsonData.history.downloadFileUrl+"?filepath="+element.FilePath

                            }

                            createdData.push(dataObj);
                            
                        });


                        this.historyArr = createdData;
                        this.enableDigitalForm = false;
                        this.showSubmit=true;
                        this.recordAvailable = true;
                        document.getElementById("navText").value = this.JsonData.submitVal;

                    }else{

                    }
                

                },
                complete:()=>{
                    this.showPreloader=false;
                }
            });

           

        }
        
    }
}) 