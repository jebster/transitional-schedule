function initDatabase() {

    Parse.initialize("qqtjAFr5OVw8sYeFvUGz0lTUNIe3XqLFLzLPxq3f", "6j9wTBiVgGyuyt3fV6rnokv1VskgGNkpoVyVo24Q");
    
    var WordDef = Parse.Object.extend("wordDef");
    var wordDef = new WordDef();

    /*
      wordDef.save({foo: "bar"}, {
      success: function(object) {
        $(".success").show();
      },
      error: function(model, error) {
        $(".error").show();
      }
    });*/
    var wordDef = Parse.Object.extend("wordDef");


  // Ensure all sets are loaded before loading
    var numSets = 4;
    var numLoaded = 0;

    function setLoaded() {
        numLoaded++;
        if (numLoaded === numSets) {
        window.init();
        }
    }

    // Get Set A down
    var queryA = new Parse.Query(wordDef);
    queryA.equalTo("set", "A");
    queryA.find({
      success: function(results) {
        alert("Successfully retrieved " + results.length + " scores.");
        
        localStorage.SetA = JSON.stringify(results);
        setLoaded();
      },
      error: function(error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });


    // Get Set B
    var queryB = new Parse.Query(wordDef);
    queryB.equalTo("set", "B");
    queryB.find({
      success: function(results) {
        alert("Successfully retrieved " + results.length + " scores.");
        localStorage.SetB = JSON.stringify(results);
        setLoaded();
      },
      error: function(error) {
        alert("Error: " + error.code + " " + error.message);
      }
    }); 

    // Get Set C
    var queryC = new Parse.Query(wordDef);
    queryC.equalTo("set", "C");
    queryC.find({
      success: function(results) {
        alert("Successfully retrieved " + results.length + " scores.");
        localStorage.SetC = JSON.stringify(results);
        setLoaded();
      },
      error: function(error) {
        alert("Error: " + error.code + " " + error.message);
      }
    }); 

    // Get Set X
    var queryX = new Parse.Query(wordDef);
    queryX.equalTo("set", "X");
    queryX.find({
      success: function(results) {
        alert("Successfully retrieved " + results.length + " scores.");
        localStorage.SetX = JSON.stringify(results);
        setLoaded();
      },
      error: function(error) {
        alert("Error: " + error.code + " " + error.message);
      }
    }); 

}

function init() {


}
