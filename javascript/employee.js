// take array of objects.each object contains emp id, emp name, emp company, emp salary and emp address where emp addressis again an object which contains emp city, emp area. And print all those values on the UI in the form of table.
let users = [
    {
        emp_id: 1,
        emp_name:"Sam",
        emp_company: "wipro",
        emp_salary: 10000,
        emp_address:{
            emp_city: "hyderabad",
            emp_area:"dulapally"
        }
    },
    {
        emp_id: 2,
        emp_name:"ram",
        emp_company: "wipro",
        emp_salary: 25000,
        emp_address:{
            emp_city: "chennai",
            emp_area:"chennai area"
        }
    },
    {
        emp_id: 3,
        emp_name:"ravi",
        emp_company: "wipro",
        emp_salary: 20000,
        emp_address:{
            emp_city: "bengaluru",
            emp_area:"bengaluru area"
        }
    },
    {
        emp_id: 4,
        emp_name:"anthony",
        emp_company: "wipro",
        emp_salary: 15000,
        emp_address:{
            emp_city: "kolkata",
            emp_area:"kolkata area"
        }
    }
];
users.map((user)=>{
    console.log(user);
})
// console.log(typeof(users));