const Day=require('./models/day.model');
const daysArray=[
    {
      dayOfWeek: "653089cb007023efd8394e22",
      weekMealPlan:"65331f1b888a581815077bb5"
    },
    {
      dayOfWeek: "653089cb007023efd8394e23",
      weekMealPlan: "65331f1b888a581815077bb5"
    },
    {
  dayOfWeek: "653089cb007023efd8394e24",
      weekMealPlan: "65331f1b888a581815077bb5"
    },
    {
  dayOfWeek: "653089cb007023efd8394e25",
      weekMealPlan: "65331f1b888a581815077bb5"
    },
    {
  dayOfWeek: "653089cb007023efd8394e26",
      weekMealPlan: "65331f1b888a581815077bb5"
    },
    {
  dayOfWeek: "653089cb007023efd8394e27",
      weekMealPlan: "65331f1b888a581815077bb5"
    }
  ];
  module.exports= function importDays(){
    for(let i=0;i<daysArray.length;i++){
        let thisNewDay=daysArray[i];
        let thisRecordToAdd=new Day(thisNewDay);
        thisRecordToAdd.save()
            .then()
            .catch(err=>{console.log(err)})
    };
}