var  vm = new Vue({
    el: '#vue_det',
    data: {
       firstname : "Dr. Muhammad",
       lastname  : "Nauman",
       htmlcontent : "<div><h1>Vue Js Template</h1></div>",
       object: {
         Site: " Geeks for Geeks ",
         Framework: " Vue ",
         Type: " Article ",
         Subject: " v-for on a <template> ",
       },
       myEmp : [
			{
				ID: '101',
				Name: 'Ali',
            Email: 'ali@gmail.com'
			},
			{
				ID: '102',
				Name: 'Khan',
            Email: 'khan@gmail.com'
			},
         {
            ID:'103',
            Name:'Alizay',
            Email:"a@gmail.com"
         }
		],
      salaryItems : [
			{
				ID: '101',
				Name: 'Basic Pay Scale'
            
			},
			{
				ID: '102',
				Name: 'Allownces'
            
			},
         {
            ID:'103',
            Name:'Decttions'
            
         }
		],
    },
    methods: {
       mydetails : function() {
          return "I am "+this.firstname +" "+ this.lastname;
       }
    }
 })