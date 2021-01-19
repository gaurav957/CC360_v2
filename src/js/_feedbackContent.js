Vue.component('feedback-content', {
    props: ["JsonData"],
    data: function () {
        return {
        ratedValue: "",
        inputVal : "",
        };
    },
    template:`<div class="assessment-intro">  
               <div class="cst-container">  
                    <div class="survey-intro">
                        <div class="feedback-banner">
                            <div v-html="JsonData.content" class="feedbacks-content"></div>
                            <div class="star-icon-block rating">
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                    viewBox="0 0 203 38.8" style="enable-background:new 0 0 203 38.8;" xml:space="preserve">
                                <g id="star" transform="translate(0.513 0.75)">
                                    <path id="star_1" :data-info="JsonData.ratingScaleID[0]" class="iconstar" d="M32.8,33.3l-2.2-9.9c-0.1-0.3,0-0.6,0.3-0.8l7.3-6.7c0.2-0.2,0.3-0.6,0.2-0.9
                                        c-0.1-0.3-0.4-0.5-0.7-0.6l-9.6-0.9c-0.3,0-0.6-0.2-0.7-0.5l-3.8-9.3c-0.2-0.4-0.6-0.6-1-0.5c-0.2,0.1-0.4,0.2-0.5,0.5l-3.8,9.3
                                        c-0.1,0.3-0.4,0.5-0.7,0.5l-9.6,0.9c-0.3,0-0.6,0.3-0.7,0.6c-0.1,0.3,0,0.7,0.2,0.9l7.3,6.7c0.2,0.2,0.3,0.5,0.3,0.8L13,33.3
                                        c-0.1,0.3,0,0.7,0.3,0.9c0.3,0.2,0.6,0.2,0.9,0l8.3-5.2c0.3-0.2,0.6-0.2,0.8,0l8.3,5.2c0.3,0.2,0.6,0.2,0.9,0
                                        C32.7,34,32.8,33.7,32.8,33.3L32.8,33.3z"/>
                                    <path id="star_2" :data-info="JsonData.ratingScaleID[1]" class="iconstar" d="M71.5,33.3l-2.2-9.9c-0.1-0.3,0-0.6,0.3-0.8l7.3-6.7c0.2-0.2,0.3-0.6,0.2-0.9
                                        c-0.1-0.3-0.4-0.5-0.7-0.6l-9.6-0.9c-0.3,0-0.6-0.2-0.7-0.5l-3.8-9.3c-0.2-0.4-0.6-0.6-1-0.5c-0.2,0.1-0.4,0.2-0.5,0.5l-3.8,9.3
                                        c-0.1,0.3-0.4,0.5-0.7,0.5l-9.6,0.9c-0.3,0-0.6,0.3-0.7,0.6c-0.1,0.3,0,0.7,0.2,0.9l7.3,6.7c0.2,0.2,0.3,0.5,0.3,0.8l-2.2,9.9
                                        c-0.1,0.3,0,0.7,0.3,0.9c0.3,0.2,0.6,0.2,0.9,0l8.3-5.2c0.3-0.2,0.6-0.2,0.8,0l8.3,5.2c0.3,0.2,0.6,0.2,0.9,0
                                        C71.4,34,71.5,33.7,71.5,33.3L71.5,33.3z"/>
                                    <path id="star_3" :data-info="JsonData.ratingScaleID[2]" class="iconstar" d="M111.5,33.3l-2.2-9.9c-0.1-0.3,0-0.6,0.3-0.8l7.3-6.7c0.2-0.2,0.3-0.6,0.2-0.9
                                        c-0.1-0.3-0.4-0.5-0.7-0.6l-9.6-0.9c-0.3,0-0.6-0.2-0.7-0.5l-3.8-9.3c-0.2-0.4-0.6-0.6-1-0.5c-0.2,0.1-0.4,0.2-0.5,0.5l-3.8,9.3
                                        c-0.1,0.3-0.4,0.5-0.7,0.5l-9.6,0.9c-0.3,0-0.6,0.3-0.7,0.6c-0.1,0.3,0,0.7,0.2,0.9l7.3,6.7c0.2,0.2,0.3,0.5,0.3,0.8l-2.2,9.9
                                        c-0.1,0.3,0,0.7,0.3,0.9c0.3,0.2,0.6,0.2,0.9,0l8.3-5.2c0.3-0.2,0.6-0.2,0.8,0l8.3,5.2c0.3,0.2,0.6,0.2,0.9,0
                                        C111.4,34,111.5,33.7,111.5,33.3L111.5,33.3z"/>
                                    <path id="star_4" :data-info="JsonData.ratingScaleID[3]" class="iconstar" d="M150.5,33.3l-2.2-9.9c-0.1-0.3,0-0.6,0.3-0.8l7.3-6.7c0.2-0.2,0.3-0.6,0.2-0.9
                                        c-0.1-0.3-0.4-0.5-0.7-0.6l-9.6-0.9c-0.3,0-0.6-0.2-0.7-0.5l-3.8-9.3c-0.2-0.4-0.6-0.6-1-0.5c-0.2,0.1-0.4,0.2-0.5,0.5l-3.8,9.3
                                        c-0.1,0.3-0.4,0.5-0.7,0.5l-9.6,0.9c-0.3,0-0.6,0.3-0.7,0.6c-0.1,0.3,0,0.7,0.2,0.9l7.3,6.7c0.2,0.2,0.3,0.5,0.3,0.8l-2.2,9.9
                                        c-0.1,0.3,0,0.7,0.3,0.9c0.3,0.2,0.6,0.2,0.9,0l8.3-5.2c0.3-0.2,0.6-0.2,0.8,0l8.3,5.2c0.3,0.2,0.6,0.2,0.9,0
                                        C150.4,34,150.5,33.7,150.5,33.3L150.5,33.3z"/>
                                    <path id="star_5" :data-info="JsonData.ratingScaleID[4]" class="iconstar" d="M189.5,33.3l-2.2-9.9c-0.1-0.3,0-0.6,0.3-0.8l7.3-6.7c0.2-0.2,0.3-0.6,0.2-0.9
                                        c-0.1-0.3-0.4-0.5-0.7-0.6l-9.6-0.9c-0.3,0-0.6-0.2-0.7-0.5l-3.8-9.3c-0.2-0.4-0.6-0.6-1-0.5c-0.2,0.1-0.4,0.2-0.5,0.5l-3.8,9.3
                                        c-0.1,0.3-0.4,0.5-0.7,0.5l-9.6,0.9c-0.3,0-0.6,0.3-0.7,0.6c-0.1,0.3,0,0.7,0.2,0.9l7.3,6.7c0.2,0.2,0.3,0.5,0.3,0.8l-2.2,9.9
                                        c-0.1,0.3,0,0.7,0.3,0.9c0.3,0.2,0.6,0.2,0.9,0l8.3-5.2c0.3-0.2,0.6-0.2,0.8,0l8.3,5.2c0.3,0.2,0.6,0.2,0.9,0
                                        C189.4,34,189.5,33.7,189.5,33.3L189.5,33.3z"/>
                                </g>
                                </svg>
                            </div>

                            <div class="feedback-block">
                                <textarea id="feedback_comment" name="feedback_comment" :data-info="JsonData.feedbackID" @input="handleInput(JsonData.feedbackID, $event)" class="feedback-input" rows="4" cols="20"></textarea>
                            </div>

                            <div class="feedback-submit-block">
                                <div class="btn_submit-now" @click="handleForward">Submit</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
    `,
    mounted: function () {
        //console.log(this.isInvalid);
        //ratedValue="";
        this.feedbackrating();
      },
      methods: { 
        feedbackrating: function(){
            var vuethis=this;
            $('.rating .iconstar').hover(function() {
                $(this).addClass('to_rate');
                $(this).parent().find('.iconstar:lt(' + $(this).index() + ')').addClass('to_rate');
                $(this).parent().find('.iconstar:gt(' + $(this).index() + ')').addClass('no_to_rate');
              }).mouseout(function() {
                $(this).parent().find('.iconstar').removeClass('to_rate');
                $(this).parent().find('.iconstar:gt(' + $(this).index() + ')').removeClass('no_to_rate');
              }).click(function() {
                $(this).removeClass('to_rate').addClass('rated');
                $(this).parent().find('.iconstar:lt(' + $(this).index() + ')').removeClass('to_rate').addClass('rated');
                $(this).parent().find('.iconstar:gt(' + $(this).index() + ')').removeClass('no_to_rate').removeClass('rated');

                    vuethis.ratedValue = $(this).attr("id").split("_")[1];
                    var propVal =$(this).attr("data-info");
                    $("#"+propVal).prop("checked", true);
                    //console.log(vuethis.ratedValue)
              });


        },       
        handleForward: function () {
            //console.log(this.ratedValue)
          if(this.ratedValue != ""){
            console.log("filled")
            document.getElementById("forwardbutton").click();
          }else{
            //this.isInvalid = true;
            console.log("error")
          }
    
        },
        handleInput:function(id, e){
            
            document.getElementById(id).value = e.target.value;
            //this.JsonData.inputFields[index].inputVal = e.target.value;
        }
      },
}) 