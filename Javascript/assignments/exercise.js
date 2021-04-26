var employee = {
    name : "Shalini Dixit",
    job:"Software developer",
    age:29,

    nameLength: function() {
        return employee.name.length;
    },

    getLastName: function() {
        var name = employee.name.split(" ");
        return name[1]
    },

    getKeyValues: function(){
        for(key in employee){
            console.log(key + " is " + employee[key]);
        }
    }
    
};


for(key in employee){
    console.log(key + " is " + employee[key]);
}
employee.getKeyValues();
console.log(employee.nameLength());
console.log(employee.getLastName());
