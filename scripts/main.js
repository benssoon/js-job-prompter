/*
console.log(departments);
console.log("De afdeling Sales heeft " + departments.sales.numberOfEmployees + " medewerkers.");
console.log("Marketing is een leuke afdeling om te werken. " + departments.marketing.description);
console.log("De afdeling Customer Service heeft " + departments["customer-service"].numberOfEmployees + " medewerkers.");
let salesManager = departments.sales.jobs[1];
console.log("Sales is een uitdagende afdeling om te werken als " + salesManager.title + ". " + salesManager.description);
*/

const getDepartment = prompt("Over welke afdeling wil je meer informatie? Kies uit: [marketing / sales / customer-service]")
/*console.log(getDepartment.charAt(0).toUpperCase() + getDepartment.slice(1) + ": " + departments[getDepartment].description);*/

let chosenDepartmentFormatted = "";
let description = "";
let departmentMessage = ""
let errorMessage = "Ongeldige keuze. Probeer het opnieuw door de pagina te verversen."
let isError = false;
switch(getDepartment) {
    case 'marketing':
        chosenDepartmentFormatted = 'marketing';
        description = departments.marketing.description;
        break;
    case 'sales':
        chosenDepartmentFormatted = 'sales';
        description = departments.sales.description;
        break;
    case 'customer-service':
        chosenDepartmentFormatted = 'customer service';
        description = departments["customer-service"].description;
        break;
    default:
        console.error(errorMessage);
        document.getElementById('error-message').textContent = errorMessage;
        isError = true;
}
if (!isError) {
    departmentMessage = `Je koos ${chosenDepartmentFormatted}. ${departments[getDepartment].description}`;
    console.log(departmentMessage);
    let chosenDepartment = departments[getDepartment];

    let numOptions = departments[getDepartment].jobs.length;
    let jobs = departments[getDepartment].jobs;
    let jobTitles = "";
    for (let i = 0; i < numOptions; i++) { // A for loop to show all the options, independent of how many total jobs a department has.
        jobTitles = jobTitles.concat(`${(i + 1)}: ${departments.marketing.jobs[i].title}\n`); // Adds all the job titles plus a menu number into one variable, to be printed later.
    }
    const getJob = prompt(`Je koos ${chosenDepartmentFormatted}. Over welke functie wil je meer weten? Voer een getal tussen 1 en ${numOptions} in.\n${jobTitles}`); // Here the list of job titles we made before is printed, after a newline.
    const chosenJob = jobs[getJob - 1];
    console.log(`${chosenJob.title}: ${chosenJob.description}`);
    document.getElementById('role-title').textContent = chosenJob.title;
    document.getElementById('department-description').textContent = chosenDepartment.description;
    document.getElementById('role-description').textContent = chosenJob.description;

}

