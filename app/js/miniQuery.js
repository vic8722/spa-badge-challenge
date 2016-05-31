/*!
 * minQuery
 */


var miniQuery = function (selector, context){
    console.log("I'm in miniQuery")
    console.log(selector);
    console.log("context: ")
    console.log(context);
      if (selector == null) return;
      if (selector.constructor == String) {

        var re = RegExp("[^a-zA-Z0-9_-]");
        if ( !re.test(selector) ) {
          var context = ((context && context.documentElement) || document);
          if ( context.getElementsByTagName(selector).length == 0) {

          }
        }
      }

      var curobj = miniQuery.Select(selector,context)[0]

      // curobj.Select = miniQuery.Select


      var getMethods = function(elm){

        var methods = Object.keys(elm)
        for(var key in methods){
          var method = methods[key];
          curobj[method] = (function(method){
            return function(parameter, optional_3rd){
              return elm[method](selector, parameter, optional_3rd)
            }
          })(method)
        }

      }

      getMethods(DOM)
      getMethods(EventDispatcher)

      // var methods = Object.keys(DOM)
      // for(var key in methods){
      //   var method = methods[key];
      //   curobj[method] = (function(method){
      //     return function(parameter){
      //       return DOM[method](selector, parameter)
      //     }
      //   })(method)
      // }

      // var methods = EventDispatcher.keys(DOM)
      // for(var key in methods){
      //   var method = methods[key];
      //   curobj[method] = (function(method){
      //     return function(parameter){
      //       return EventDispatcher[method](selector, parameter)
      //     }
      //   })(method)
      // }
      curobj.isElement = true;

      return curobj;
        // curobj.select = function(i) {
        //   console.log("this is: ");
        //   console.log(this);
        //         if (i == null) {
        //           if (curobj.constructor === HTMLCollection && curobj.length === 1){
        //             return curobj[0];
        //           }
        //           return curobj;
        //         } else {
        //           return curobj[i];
        //         }
        //         return curobj;
        //       }

};

var $ = miniQuery

miniQuery.Select = function( t, context ) {
    console.log("I'm in miniQuery.Select")

  if (t[0] === "#") {
    return_id = [document.getElementById(t.substr(1,t.length-1))]
    return return_id
  } else if (t[0] === ".") {
    return document.getElementsByClassName(t.substr(1,t.length-1))
  } else {
    return document.getElementsByTagName(t)
  }
}

var DOM = (function () {
  // miniQuery.Select(selector)
  // var curobj = miniQuery(selector).select();
    var that = this;
    // console.log(this);

  return {
    hide: function(selector){
      var curobj = miniQuery.Select(selector)[0];
      curobj.style.display = 'none';
    },
    show: function(selector){
      var curobj = miniQuery.Select(selector)[0];
      curobj.style.display = 'block';
    },
    addClass: function(selector, newClass){
      var curobj = miniQuery.Select(selector)[0];
      if(this.isElement){
        if(newClass)this.className += " " + newClass;
        if(!newClass) this.className += " " + selector;
      }else{
        DOM.removeClass(selector, newClass);
        curobj.className += " " + newClass;
      }
    },
    removeClass: function(selector, oldClass){
      var curobj = miniQuery.Select(selector)[0];
      var ret = "";
      var c = oldClass;
      var s = curobj.className.split( " " );
      for ( var i = 0; i < s.length; i++ )
        if ( s[i] != c )
          ret += ( ret.length > 0 ? " " : "" ) + s[i];
        curobj.className = ret;
      }
    }
  })();

var EventDispatcher = (function() {
  var t = {};
  return {
    on: function(selector, trigga, functionVar){
      console.log("I got into the on of EventDispatcher")
      console.log(selector)
      console.log(trigga)
      console.log(functionVar)

      t[trigga] = functionVar;
    },
    trigger: function(selector, trigga) {
      t[trigga]();
    }
  }
})();

miniQuery.ajax = function() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', "/", true);
  xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
  xhr.onload = function() {
      if (xhr.status === 200) {
          alert('User\'s name is ' + xhr.responseText);
      }
      else {
          alert('Request failed.  Returned status of ' + xhr.status);
      }
  };
  xhr.send();
}


miniQuery.ready = function(callback){
    document.onreadystatechange = function () {
    if (document.readyState === "complete") {
      callback();
    }
  }
}



