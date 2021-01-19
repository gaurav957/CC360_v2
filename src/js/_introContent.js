Vue.component('intro-content', {
    props:["JsonData"],
    template:`<div class="assessment-intro">  
               <div class="cst-container">  
                <div class="survey-intro">
                    <div class="introduction-title" v-html="JsonData.heading">
                    </div>
                    <div class="intro-panel" v-html="JsonData.content"></div>
                    <div class="offering-panel">
                        <div class="col-3" v-for="offer of JsonData.offerings">
                            <div class="offering-inner-block">
                                <div class="offering-head" v-html="offer.offeringHeading">offering</div>
                                <p v-html="offer.content">kfsdkfj</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="survey-begin txt-center">
                    <div class="btn-item frw" @click="handleForward" v-html="JsonData.frdBtnTxt"></div>
                </div>
                </div>
            </div>    
    `,
    methods:{
        handleForward:function(){
            document.getElementById('forwardbutton').click();
        }
    }
}) 