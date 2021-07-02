document.body.classList.remove('hidden');
document.body.classList.add('visible');

var d = new Date();

var currentYear = new Date().getFullYear();

var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

var form = document.getElementById("edit-pet"); 

if(form){

    for(m = 0; m <= 11; m++) {
        var optn = document.createElement("OPTION");
        optn.text = monthNames[m];
        optn.value = (m+1);
    
        document.getElementById('month').options.add(optn);
    }

    for(var i = 1; i <= 31; i++) {
        var optn = document.createElement("OPTION");
        optn.text = i;
        optn.value = i;
    
        document.getElementById('date').options.add(optn);
    }

    for(var j = 1950; j <= currentYear; j++) {
        var optn = document.createElement("OPTION");
        optn.text = j;
        optn.value = j;
    
        document.getElementById('year').options.add(optn);
    }
  }