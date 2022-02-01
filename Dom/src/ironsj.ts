const spanTop = document.getElementById("insertHere")

const h1 = document.createElement("h1")
h1.innerText = "Using TypeScript and HTML"
spanTop.appendChild(h1)

const h2 = document.createElement("h2")
h2.innerText = "About me"
h2.setAttribute("class", "subheaders")
spanTop.appendChild(h2)

const personalInfo = {
   name: "Jake Irons",
   email: "ironsj@mail.gvsu.edu",
   numberSiblings: 3,
   hobby: ["Disc Golf", "Coding", "Video Games"],
   csMajor: true,
}

const table = document.createElement("table")
table.setAttribute("id", "infoTable")
for (const key in personalInfo) {
    const row = document.createElement("tr")
    const k = document.createElement("td")
    k.innerText = key
    row.appendChild(k)
    if(typeof personalInfo[key] === "object"){
        const data = document.createElement("td")
        row.appendChild(data)
        const list = document.createElement("ul")
        data.appendChild(list)
        for (const value of personalInfo[key]){
            const item = document.createElement("li")
            item.innerText = value
            list.appendChild(item)
        }
    }
    else{
        const data = document.createElement("td")
        data.innerText = personalInfo[key]
        row.appendChild(data)
    }
    table.appendChild(row)
}
spanTop.appendChild(table)


type Course = {
    code: string,
    name: string,
    credits: number
}

type CompletedCourse = Course & {
    semesterCompleted: string
}

type OngoingCourse = Course & {
    classTimes: Array<string>
}

const onGoing: Array<OngoingCourse> = [
    {
        code: "CS371-02",
        name: "Web Application Development",
        credits: 3,
        classTimes: ["Mon 10-11a", "Wed 10-11a", "Fri 10-11a"]
    },
    {
        code: "CS443-01",
        name: "Software Development Tools",
        credits: 3,
        classTimes: ["Mon 11-noon", "Wed 11-noon", "Fri 11-noon"]
    },
    {
        code: "CS365-01",
        name: "Applied Artificial Intelligence",
        credits: 3,
        classTimes: ["Tue 8:30-9:45a", "Thu 8:30-9:45a"]
    },
    {
        code: "CS457-30",
        name: "Data Communications",
        credits: 4,
        classTimes: ["Mon 8-9a", "Tue 10-noon", "Wed 8-9a", "Fri 8-9a"]
    }
]

const numList = document.createElement("ol")
for (const course of onGoing){
    const item = document.createElement("li")
    item.innerText = `${course.code} ${course.name} (${course.credits} credits)`
    const timeList = document.createElement("ul")
    for(const time in course.classTimes){
        const day = document.createElement("li")
        day.innerText = course.classTimes[time]
        timeList.appendChild(day)
    }
    item.appendChild(timeList)
    numList.appendChild(item)
}

const completed: Array<CompletedCourse> = [
    {
        code: "MTH408",
        name: "Advanced Calculus I",
        credits: 3,
        semesterCompleted: "Winter 2019"
    },
    {
        code: "MTH350",
        name: "Modern Algebra I",
        credits: 3,
        semesterCompleted: "Fall 2018"
    },
    {
        code: "MTH315",
        name: "Discrete Mathematics",
        credits: 3,
        semesterCompleted: "Fall 2019"
    },
    {
        code: "MTH304",
        name: "Analysis of Differential Equations",
        credits: 3,
        semesterCompleted: "Winter 2019"
    },
    {
        code: "CIS357",
        name: "Mobile Application Development",
        credits: 3,
        semesterCompleted: "Fall 2021"
    },
    {
        code: "CIS452",
        name: "Operating Systems Concepts",
        credits: 4,
        semesterCompleted: "Fall 2021"
    },
    {
        code: "CIS 351",
        name: "Computer Organization & Assembly",
        credits: 4,
        semesterCompleted: "Winter 2021"
    }
]

const courseTable = document.createElement("table")
courseTable.id = "courseTable"
const headerRow = document.createElement("tr")
courseTable.appendChild(headerRow)

const course = document.createElement("th")
course.innerText = "Course"
headerRow.appendChild(course)

const credit = document.createElement("th")
credit.innerText = "Credit"
headerRow.appendChild(credit)

const complete = document.createElement("th")
complete.innerText = "Completed"
headerRow.appendChild(complete)

for(const finished of completed){
    const row = document.createElement("tr")
    courseTable.appendChild(row)
    
    const firstItem = document.createElement("td")
    firstItem.innerText = `${finished.code} ${finished.name}`
    row.appendChild(firstItem)

    const secondItem = document.createElement("td")
    secondItem.innerText = `${finished.credits}`
    row.appendChild(secondItem)

    const thirdItem = document.createElement("td")
    thirdItem.innerText = `${finished.semesterCompleted}`
    row.appendChild(thirdItem)
}


const h3 = document.createElement("h2")
h3.innerText = "Courses in Progress"
h3.setAttribute("class", "subheaders")
spanTop.appendChild(h3)
spanTop.appendChild(numList)

const h4 = document.createElement("h2")
h4.innerText = "Courses Completed"
h4.setAttribute("class", "subheaders")
spanTop.appendChild(h4)
spanTop.appendChild(courseTable)

const link = document.createElement("a")
link.setAttribute("href", "https://www.linkedin.com/in/jacob-irons/")
link.innerText = "Connect with me on LinkedIn!"
spanTop.appendChild(link)

