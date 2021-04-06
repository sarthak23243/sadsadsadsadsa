Webcam.set({
width:360,
height:300,
image_format:"png",
png_quality:90
});
Webcam.attach(
    "#camera_show"
);
function take_snap_shot(){
    Webcam.snap(function(data_uri){
    document.getElementById("your_selfok").innerHTML='<img id="img_show1" src='+data_uri+'>';
    });
}
console.log("ml 5 ver    -    "+ml5.version);
clasifyer=ml5.imageClassifier["https://teachablemachine.withgoogle.com/models/CzotMvaCV/model.json",modelloded()];

function modelloded(){
    console.log("MOdelLoded");

        
}

function speak(){
    var synth=window.speechSynthesis;


    speakdata1="The First Predtion Is "+predction1;
    speakdata2="The Second  Predtion Is "+predction2;
    var utterthis=new SpeechSynthesisUtterance(speakdata1+speakdata2);
    synth.speak(utterthis);

}

function show_the_image_ok(){

    var img_store=document.getElementById("img_show1");

    clasifyer.classify(img_store , gotresualt);

}

function gotresualt(error,results){

if(error) { 
    console.error(error);

}
else{

console.log(results);

 }

  }
