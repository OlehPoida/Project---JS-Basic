/*
1. Прийняти від користувача імена людей для набору до команди. Імена прийняти та зберегти в новому масиві. Кількість імен має
відповідати кількості посад. Масив з посадами - ['Junior developer', 'Middle developer', 'Senior developer', 'Junior QA',
'Middle QA', 'Senior QA', 'Project manager'].

2. Створити об'єкт team у якому зберігатимуться нові об'єкти-співробітники з параметрами name і position, дані цих властивостей
додаємо з масивів.

3. Додати працівникам зарплати (властивість salary) за допомогою методу Math.random(), який видаватиме довільне число
у проміжку між N1 та N2 виходячи з принципу:
якщо на посаді є слово "junior", сума буде від 500 до 1000;
якщо на посаді є слово "middle", сума буде від 1500 до 2000;
якщо на посаді є слово "senior", сума буде від 2500 до 3000;
для решти - від 4000 до 4500;
Для визначення того чи є слово в імені посади, використовуйте метод str.indexOf('частина рядка для пошуку'). Наприклад:
    var name = 'Junior developer';
    name.indexOf('Junior');
    //в даному випадку поверне 0, якщо такий рядок відсутній поверне -1.
    //Регістр має значення, тому рядок "junior" поверне -1

4. Додати кожному співробітнику метод tellAboutYourSelf(), який повідомлятиме інформацію про користувача
        (наприклад "Мене звуть John і я - Project manager. Я заробляю 4863 $.").
          
5. Додати об'єкту team метод showTeam(), який виводитиме інформацію про всіх співробітників у консоль у форматі:
        "John - Project manager. Зарплата - 4863 $."*
        Для зручності створіть по порядку всі необхідні функції та наприкінці зробити виклик цих функцій у логічному порядку. 
        Наприклад:
getNames();
createTeam();
setSalary();
створення циклу для встановлення методу tellAboutYourSelf();
створення team.showTeam = function() {...};
виклик методу showTeam();
*/

let positionEmpl = ['Junior developer', 'Middle developer', 'Senior developer', 'Junior QA', 'Middle QA', 'Senior QA', 'Project manager'];

function getNames() {
    let nameEmpl = [];
    
    for (let i = 0; i < positionEmpl.length; i++) {
        let validInput = false;
        
        while (!validInput) {
            nameEmpl[i] = prompt("Enter the employee's name - " + positionEmpl[i]);
            
            if (nameEmpl[i] === null) {
                alert("Error! It is impossible to cancel the entry of the specified information!\nThis field is mandatory!");
            } else if (!/^[\p{L}\s()"-'.,]+$/u.test(nameEmpl[i].trim())) {
                alert('Error!\nName can contain: letters of any language, spaces, dashes, quotes, periods, commas, and parentheses. Please try again.');
            } else {
                validInput = true;
            }
        }
    }
    return nameEmpl;
}

function createTeam(nameEmpl) {
    let team = {}; 
    for (let i = 0; i < positionEmpl.length; i++) {
        let name = nameEmpl[i];
        let position = positionEmpl[i];
        team[i] = {
            name: name,
            position: position,
            salary: 0,
            tellAboutYourSelf: function() {
                console.log("My name is - " + this.name  + " and I am - " + this.position + '. I earn - ' + this.salary + ' $');
                document.write("My name is - " + this.name  + " and I am - " + this.position + '. I earn  - ' + this.salary + ' $<br/><br/>');  
            }
        }
    }
    return team;
}

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setSalary(team) {
    for (let i = 0; i < positionEmpl.length; i++) {
    let position = team[i].position;
    let salary;
    if (position.indexOf('Junior') > -1) {
        salary = getRandomIntInclusive(500, 1000);
    } else if (position.indexOf('Middle') > -1) {
        salary = getRandomIntInclusive(1500, 2000);
    } else if (position.indexOf('Senior') > -1) {
        salary = getRandomIntInclusive(2500, 3000);
    } else {
        salary = getRandomIntInclusive(4000, 4500);
    }
    team[i].salary = salary;
    }
}

function everyEmployeeTellAboutHimself(team) {

    console.log('Every Employee Tell About Himself:');
    document.write('<span style =\"background-color:yellow\">Every Employee Tell About Himself:</span><br/><br/>');
    
    for (let key in team) {
        team[key].tellAboutYourSelf();
    }
}

function showTeam(team) {
team.showTeam = function() {
    console.log('Show Team:');
    document.write('<br/><span style =\"background-color:yellow\">Show Team:</span><br/><br/>');
    for (let key in team) {
        if (typeof team[key] !== 'function' && team.hasOwnProperty(key)) {
            console.log(team[key].name + " - " + team[key].position + '. Salary - ' + team[key].salary + ' $<br/><br/>');  
            document.write(team[key].name + " - " + team[key].position + '. Salary - ' + team[key].salary + ' $<br/><br/>');  
        }
    }   
}  
team.showTeam();
} 

function runTeam() {
    let nameEmpl = getNames();
    let team = createTeam(nameEmpl);
    setSalary(team);
    everyEmployeeTellAboutHimself(team);
    showTeam(team);
}
runTeam();

 


