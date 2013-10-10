'use strict';

angular.module('multiDimensionPlotApp')
  .controller('MainCtrl', function ($scope, $http) {
    var sortableEle;
    
    $scope.dragStart = function(e, ui) {
        ui.item.data('start', ui.item.index());
    }
    $scope.dragEnd = function(e, ui) {
      var start = ui.item.data('start');
      var end = ui.item.index();
      
      $scope.questions.splice(end, 0, $scope.questions.splice(start, 1)[0]);
      
      $scope.$apply();

      $scope.ranking = ''+$scope.questions[0].id;
      for (var i=1; i<$scope.questions.length; i++) {
        $scope.ranking+="/"+$scope.questions[i].id;
      }
    }
        
    sortableEle = $('#sortable').sortable({
        start: $scope.dragStart,
        update: $scope.dragEnd
    });
    $scope.questions = [
      { 
        id: 0,
        text: "Q1: Your age"
      },
      { 
        id: 1,
        text: "Q2: Your shoe size (in US sizes)"
      },
      { 
        id: 2,
        text: "Q3: how many siblings do you have?"
      },
      { 
        id: 3,
        text: "Q4: How many miles is Blacksburg from where you were born"
      },
      { 
        id: 4,
        text: "Q5: At what time do you typically go to bed? in 4-digit 2400 military time."
      },
      { 
        id: 5,
        text: "Q6: are you a pet lover? 1 = get that beast away from me; 100 = i have 12 cats; 50 = whatever dont care"
      },
      { 
        id: 6,
        text: "Q7: where are you on this scale: 1 = introvert; 100 = extrovert"
      },
      { 
        id: 7,
        text: "Q8: do you like to cook? 1 = i'd rather starve; 100 = i will be on the next Chef Wars TV show"
      },
      { 
        id: 8,
        text: "Q9: What is your financial tendency: 1 = money saver 100 = money spender"
      }, 
      { 
        id: 9,
        text: "Q10: On average how many phone minutes do you use per month? or much time do you spend talking on the phone"
      },
      { 
        id: 10,
        text: "Q11: how many apps are on your phone?"
      },
      { 
        id: 11,
        text: "Q12: how many digital photos have you taken this year?"
      },
      { 
        id: 12,
        text: "Q13: How many FaceBook Friends and/or Google+ friends do you have? 0 = i dont use Facebook/google+"
      },
      { 
        id: 13,
        text: "Q14: Where are you on the PC vs Mac scale: 1 = \"I'm a PC\"; 100 = Mac fan-boy/girl"
      },
      { 
        id: 14,
        text: "Q15: How / much do you love Computer Science? 1=hate; 100=love; 50=ok or don't care"
      },
      { 
        id: 15,
        text: "Q16: How have you felt about Virginia Tech so far? 1=hate; 100=love; 50=ok or don't care"
      },
      { 
        id: 16,
        text: "Q17: how many countries have you visited?"
      },
      { 
        id: 17,
        text: "Q18: how many US states have you visited?"
      },
      { 
        id: 18,
        text: "Q19: how many places have you lived?"
      },
      { 
        id: 19,
        text: "Q20: what temperature (in Fahrenheit) do you prefer outdoors?"
      },
      { 
        id: 20,
        text: "Q21: How spicy do you like your food: 1 = mild; 100 = spicy from hell"
      },
      { 
        id: 21,
        text: "Q22: how many total years of job experience do you have?"
      },
      { 
        id: 22,
        text: "Q23: how many times have you gone camping?"
      },
      { 
        id: 23,
        text: "Q24: on how many publications are you an author?"
      },
      { 
        id: 24,
        text: "Q25: how many different restaurants have you eaten at nearby?"
      },
      { 
        id: 25,
        text: "Q26: How many non-academic books have you read in the last year?"
      },
      { 
        id: 26,
        text: "Q27: How many miles are on your car/vehicle odometer? 0 = don't have a car."
      }
    ];

    $scope.up = function(idx, qid) {
      if (idx == 0) {
        alert("can't go up any farther!");
        return;
      }
      console.log(idx, qid);
      $scope.questions[idx-1] = $scope.questions.splice(idx, 1, $scope.questions[idx-1])[0];
    };

    $scope.down = function(idx, qid) {
      console.log(idx, qid);
      if (idx == $scope.questions.length-1) {
        alert("can't go down any farther!");
        return;
      }
      $scope.questions[idx+1] = $scope.questions.splice(idx, 1, $scope.questions[idx+1])[0];
    };

    $scope.asyncdata = [{'y': 3.312789266467273e+27, 'x': 3.269778708971034e+27}, {'y': 2.885827056848518e+27, 'x': 3.961128025973743e+27}, {'y': 2.712716964574901e+27, 'x': 3.037097569306172e+27}, {'y': 2.985722054180735e+27, 'x': 4.678252939268711e+27}, {'y': 1.0315257720238416e+28, 'x': 3.1403171163880956e+27}, {'y': 2.7000060250818153e+27, 'x': 6.896437031880224e+27}, {'y': 1.375477418164824e+27, 'x': 2.9848734790459543e+27}, {'y': 2.089798510087633e+27, 'x': 2.7383214939962707e+27}, {'y': 2.113454316003759e+27, 'x': 2.542534005117367e+27}, {'y': 2.5163896071005497e+27, 'x': 3.6489708789402643e+27}, {'y': 2.548849277897651e+27, 'x': 2.551568339221874e+27}, {'y': 2.924389299544018e+27, 'x': 2.6957714577270414e+27}, {'y': 3.026795913763838e+27, 'x': 2.4465202736004376e+27}, {'y': 2.3901643830631757e+27, 'x': 3.2585994782751477e+27}, {'y': 2.785298132904815e+27, 'x': 2.590354891615317e+27}, {'y': 2.741895094570931e+27, 'x': 3.0476096656406313e+27}, {'y': 3.4664211440045347e+27, 'x': 2.830122361660076e+27}, {'y': 2.601012855784291e+27, 'x': 2.7437486190593234e+27}, {'y': 3.4156022328694547e+27, 'x': 3.44823295668701e+27}, {'y': 2.2780274833140561e+27, 'x': 2.5774413657089084e+27}, {'y': 3.0334980694283316e+27, 'x': 3.1869012212537147e+27}, {'y': 2.680881052549701e+27, 'x': 2.4458713480735238e+27}, {'y': 3.585596243984192e+27, 'x': 2.630410728094289e+27}];
    $scope.asyncPolarData = [{'y': 2.9489713868041665e+27, 'x': -1.4124519692543863e+27}, {'y': 1.1703822844075759e+27, 'x': -3.784275432166579e+27}, {'y': 2.5988770506970095e+27, 'x': -1.5715596459714375e+27}, {'y': -4.674756441744668e+27, 'x': 1.8083908356067042e+26}, {'y': -6.93634402585046e+26, 'x': -3.062754137541982e+27}, {'y': 6.74376055907204e+27, 'x': -1.4430998775529296e+27}, {'y': -4.4570067021809584e+26, 'x': -2.951409933994097e+27}, {'y': -2.4340191571599056e+27, 'x': 1.2545737710714947e+27}, {'y': -2.150167321543805e+26, 'x': -2.5334259357778375e+27}, {'y': -3.621330961528431e+27, 'x': -4.48275074513019e+26}, {'y': -2.503156289813427e+27, 'x': -4.946812898088523e+26}, {'y': -1.347644856939941e+27, 'x': -2.3347456160916337e+27}, {'y': 2.4327098483532023e+27, 'x': -2.5958475082966456e+26}, {'y': 3.008369580783091e+27, 'x': -1.252271146850407e+27}, {'y': -4.8268412538622606e+26, 'x': -2.5449861491991533e+27}, {'y': -1.5638469155490993e+27, 'x': -2.6157804760403287e+27}, {'y': 9.175707260104374e+26, 'x': 2.677247942335017e+27}, {'y': 2.7339200408298454e+27, 'x': -2.3202951307727887e+26}, {'y': 2.59179296868953e+27, 'x': 2.2744053576779035e+27}, {'y': -2.455033296524951e+27, 'x': 7.848665533842262e+26}, {'y': 2.37298151645721e+27, 'x': 2.1272748098402464e+27}, {'y': -2.283217162337045e+27, 'x': -8.770439218970555e+26}, {'y': 9.15221852551863e+26, 'x': 2.4660554655329763e+27}];

    $scope.ranking = ''+$scope.questions[0].id;
    for (var i=1; i<$scope.questions.length; i++) {
      $scope.ranking+="/"+$scope.questions[i].id;
    }

    $scope.replot = function() {
      console.log('replot!');
      // $scope.ranking = ''+$scope.questions[0].id;
      // for (var i=1; i<$scope.questions.length; i++) {
      //   $scope.ranking+="/"+$scope.questions[i].id;
      // }
      // console.log(ranking);
      // $scope.ranking = ranking;

      $http.get("/plotter/"+$scope.ranking).success(function(data){
        console.log('success');
        // console.log(data);
        console.log(data['2D']);
        console.log(data['polar']);
        $scope.asyncdata = data['2D']['pts'];
        $scope.asyncPolarData = data['polar']['pts'];
        $scope.asyncdataTable = data['2D']['table'];
        $scope.asyncPolarDataTable = data['polar']['table'];
      });
    };

    

  });
