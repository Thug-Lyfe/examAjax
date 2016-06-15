
$(document).ready(function(){
var es = document.getElementsByTagName("path");
    var formerId = "";
for (var i = 0; i<es.length;i++)(function(i){
        var id = es[i].id.toString();
        es[i].onclick = function() {
        
        var xhttp = new XMLHttpRequest();
        $.ajax({url: "api/generic/city/"+id, success: function(result){
                //non proxy selution link
                //"http://restcountries.eu/rest/v1/alpha?codes=" + id
                if(formerId !== ""){
                    $("#"+formerId).css("fill","c0c0c0");
                }
                formerId = id;
                $("#res1").html("name: " + result[0].name);
            $("#res2").html("population: "+result[0].population);
            $("#res3").html("area: "+result[0].area);
            var border = "";
                    for (var k = 0; k < result[0].borders.length; k++) {
                        if(k === result[0].borders.length-1){
                            border = border + result[0].borders[k];
                        }else{
                            border = border + result[0].borders[k] + ",";
                        }
                    
                    }
            $("#res4").html("borders: "+border);
            $("#"+id).css("fill","ff0000");
        }});
    };
})(i);



$("#res1").html(es.length);
});