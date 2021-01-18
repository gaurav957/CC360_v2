Vue.component('feedback-content', {
    props:["JsonData"],
    template:`<div class="assessment-intro">  
               <div class="cst-container">  
                    <div class="survey-intro">
                        <div class="feedback-banner">
                            <div v-html="JsonData.content" class="feedbacks-content"></div>
                            <div class="star-icon-block">
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                    viewBox="0 0 203 38.8" style="enable-background:new 0 0 203 38.8;" xml:space="preserve">
                                <g id="star" transform="translate(0.513 0.75)">
                                    <path id="star1" class="st0" d="M32.8,33.3l-2.2-9.9c-0.1-0.3,0-0.6,0.3-0.8l7.3-6.7c0.2-0.2,0.3-0.6,0.2-0.9
                                        c-0.1-0.3-0.4-0.5-0.7-0.6l-9.6-0.9c-0.3,0-0.6-0.2-0.7-0.5l-3.8-9.3c-0.2-0.4-0.6-0.6-1-0.5c-0.2,0.1-0.4,0.2-0.5,0.5l-3.8,9.3
                                        c-0.1,0.3-0.4,0.5-0.7,0.5l-9.6,0.9c-0.3,0-0.6,0.3-0.7,0.6c-0.1,0.3,0,0.7,0.2,0.9l7.3,6.7c0.2,0.2,0.3,0.5,0.3,0.8L13,33.3
                                        c-0.1,0.3,0,0.7,0.3,0.9c0.3,0.2,0.6,0.2,0.9,0l8.3-5.2c0.3-0.2,0.6-0.2,0.8,0l8.3,5.2c0.3,0.2,0.6,0.2,0.9,0
                                        C32.7,34,32.8,33.7,32.8,33.3L32.8,33.3z"/>
                                    <path id="star2" class="st0" d="M71.5,33.3l-2.2-9.9c-0.1-0.3,0-0.6,0.3-0.8l7.3-6.7c0.2-0.2,0.3-0.6,0.2-0.9
                                        c-0.1-0.3-0.4-0.5-0.7-0.6l-9.6-0.9c-0.3,0-0.6-0.2-0.7-0.5l-3.8-9.3c-0.2-0.4-0.6-0.6-1-0.5c-0.2,0.1-0.4,0.2-0.5,0.5l-3.8,9.3
                                        c-0.1,0.3-0.4,0.5-0.7,0.5l-9.6,0.9c-0.3,0-0.6,0.3-0.7,0.6c-0.1,0.3,0,0.7,0.2,0.9l7.3,6.7c0.2,0.2,0.3,0.5,0.3,0.8l-2.2,9.9
                                        c-0.1,0.3,0,0.7,0.3,0.9c0.3,0.2,0.6,0.2,0.9,0l8.3-5.2c0.3-0.2,0.6-0.2,0.8,0l8.3,5.2c0.3,0.2,0.6,0.2,0.9,0
                                        C71.4,34,71.5,33.7,71.5,33.3L71.5,33.3z"/>
                                    <path id="star3" class="st0" d="M111.5,33.3l-2.2-9.9c-0.1-0.3,0-0.6,0.3-0.8l7.3-6.7c0.2-0.2,0.3-0.6,0.2-0.9
                                        c-0.1-0.3-0.4-0.5-0.7-0.6l-9.6-0.9c-0.3,0-0.6-0.2-0.7-0.5l-3.8-9.3c-0.2-0.4-0.6-0.6-1-0.5c-0.2,0.1-0.4,0.2-0.5,0.5l-3.8,9.3
                                        c-0.1,0.3-0.4,0.5-0.7,0.5l-9.6,0.9c-0.3,0-0.6,0.3-0.7,0.6c-0.1,0.3,0,0.7,0.2,0.9l7.3,6.7c0.2,0.2,0.3,0.5,0.3,0.8l-2.2,9.9
                                        c-0.1,0.3,0,0.7,0.3,0.9c0.3,0.2,0.6,0.2,0.9,0l8.3-5.2c0.3-0.2,0.6-0.2,0.8,0l8.3,5.2c0.3,0.2,0.6,0.2,0.9,0
                                        C111.4,34,111.5,33.7,111.5,33.3L111.5,33.3z"/>
                                    <path id="star4" class="st0" d="M150.5,33.3l-2.2-9.9c-0.1-0.3,0-0.6,0.3-0.8l7.3-6.7c0.2-0.2,0.3-0.6,0.2-0.9
                                        c-0.1-0.3-0.4-0.5-0.7-0.6l-9.6-0.9c-0.3,0-0.6-0.2-0.7-0.5l-3.8-9.3c-0.2-0.4-0.6-0.6-1-0.5c-0.2,0.1-0.4,0.2-0.5,0.5l-3.8,9.3
                                        c-0.1,0.3-0.4,0.5-0.7,0.5l-9.6,0.9c-0.3,0-0.6,0.3-0.7,0.6c-0.1,0.3,0,0.7,0.2,0.9l7.3,6.7c0.2,0.2,0.3,0.5,0.3,0.8l-2.2,9.9
                                        c-0.1,0.3,0,0.7,0.3,0.9c0.3,0.2,0.6,0.2,0.9,0l8.3-5.2c0.3-0.2,0.6-0.2,0.8,0l8.3,5.2c0.3,0.2,0.6,0.2,0.9,0
                                        C150.4,34,150.5,33.7,150.5,33.3L150.5,33.3z"/>
                                    <path id="star5" class="st0" d="M189.5,33.3l-2.2-9.9c-0.1-0.3,0-0.6,0.3-0.8l7.3-6.7c0.2-0.2,0.3-0.6,0.2-0.9
                                        c-0.1-0.3-0.4-0.5-0.7-0.6l-9.6-0.9c-0.3,0-0.6-0.2-0.7-0.5l-3.8-9.3c-0.2-0.4-0.6-0.6-1-0.5c-0.2,0.1-0.4,0.2-0.5,0.5l-3.8,9.3
                                        c-0.1,0.3-0.4,0.5-0.7,0.5l-9.6,0.9c-0.3,0-0.6,0.3-0.7,0.6c-0.1,0.3,0,0.7,0.2,0.9l7.3,6.7c0.2,0.2,0.3,0.5,0.3,0.8l-2.2,9.9
                                        c-0.1,0.3,0,0.7,0.3,0.9c0.3,0.2,0.6,0.2,0.9,0l8.3-5.2c0.3-0.2,0.6-0.2,0.8,0l8.3,5.2c0.3,0.2,0.6,0.2,0.9,0
                                        C189.4,34,189.5,33.7,189.5,33.3L189.5,33.3z"/>
                                </g>
                                </svg>
                            </div>

                            <div class="feedback-block">
                                <textarea id="feedback_comment" name="feedback_comment" class="feedback-input" rows="4" cols="20"></textarea>
                            </div>

                            <div class="feedback-submit-block">
                                <div class="btn_submit-now">Submit</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
    `,
    mounted: function () {
        // console.log(this.isInvalid);
      },
      methods: {
        handleSelect: function (index, e) {
          this.JsonData.inputFields[index].selectedId = e.target.value;
          document.querySelector("#" + e.target.value).click();
        },
        handleForward: function () {
    
          if(this.JsonData.inputFields[0].inputVal == this.inputVal){
            this.isInvalid = false;
            console.log("filled")
            document.getElementById("forwardbutton").click();
          }else{
            this.isInvalid = true;
            console.log("error")
          }
    
        },
        handleInput: function (id, index, e) {    
          this.inputVal = e.target.value;
          console.log(this.inputVal)
        },
      },
}) 