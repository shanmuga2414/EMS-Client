const employees = [
  {
    id: "1",
    name: "Sheik",
    mobile: "8784467839",
    email: "sheikabb@gmail.com",
    qualification: "MCA",
    profile: "",
    dob:"",
    joiningDate: "",
    basicSalary: "",
    pf:"",
    address:"",
    gpay:"",
    phonePay:""
  },
  {
    id: "2",
    name: "Nirmal",
    mobile: "9597786919",
    email: "snirmal2589@gmail.com",
    qualification: "MCA",
    profile: "",
    dob:"",
    joiningDate: "",
    basicSalary: "",
    pf:"",
    address:"",
    gpay:"",
    phonePay:""
  },
  {
    id: "3",
    name: "Krishna",
    mobile: "9894478638",
    email: "krrishfx@gmail.com",
    qualification: "Design Animation",
    profile: "",
    dob:"",
    joiningDate: "",
    basicSalary: "",
    pf:"",
    address:"",
    gpay:"",
    phonePay:""
  },
  {
    id: "4",
    name: "Dhanraj",
    mobile: "9746678274",
    email: "webrobotic@gmail.com",
    qualification: "",
    profile: "",
    dob:"",
    joiningDate: "",
    basicSalary: "",
    pf:"",
    address:"",
    gpay:"",
    phonePay:""
  },
  {
    id: "5",
    name: "Deva",
    mobile: "9897754378",
    email: "devarajan@gmail.com",
    qualification: "",
    profile: "",
    dob:"",
    joiningDate: "",
    basicSalary: "",
    pf:"",
    address:"",
    gpay:"",
    phonePay:""
  },
  {
    id: "6",
    name: "Deepen",
    mobile: "9847783567",
    email: "deepen@SpeechGrammarList.com",
    qualification: "BBA",
    profile: "",
    dob:"",
    joiningDate: "",
    basicSalary: "",
    pf:"",
    address:"",
    gpay:"",
    phonePay:""
  },
];

export function getEmployees() {
  return employees;
}

export function getEmployees(id) {
  return employees.find((m) => m.id === id);
}

export function deleteEmployees(id) {
  let employeesInDb = employees.find((m) => m._id === id);
  employees.splice(employees.indexOf(employeesInDb), 1);
  return employeesInDb;
}

export default employees;
