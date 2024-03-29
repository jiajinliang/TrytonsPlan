class Section {

    constructor(sectionID, courseID, startingTime, endingTime, day, location, professor, finalTime, finalEndTime, finalDate,
                disArr) {
        this.sectionID = sectionID;
        this.courseID = courseID;
        /*this.year = year;
        this.quarter = quarter;*/
        this.startingTime = startingTime;
        this.endingTime = endingTime;
        this.day = day;
        this.location = location;
        this.professor = professor;
        this.finalTime = finalTime;
        this.finalEndTime = finalEndTime;
        this.finalDate = finalDate;
    }

    get getSectionID() {
        return this.sectionID;
    }

    set setSectionID(sectionID) {
        this.sectionID = sectionID;
    }

    get getCourseID() {
        return this.courseID;
    }

    set setCourseID(courseID) {
        this.courseID = courseID;
    }
/*
    get getYear() {
        return this.year;
    }

    set setYear(year) {
        this.year = year;
    }

    get getQuarter() {
        return this.quarter;
    }

    set setQuarter(quarter) {
        this.quarter = quarter;
    }
*/
    get getStartingTime() {
        return this.startingTime;
    }

    set setStartingTime(startingTime) {
        this.startingTime = startingTime;
    }

    get getEndingTime() {
        return this.endingTime;
    }

    set setEndingTime(endingTime) {
        this.endingTime = endingTime;
    }

    get getDay() {
        return this.day;
    }

    set setDay(day) {
        this.day = day;
    }

    get getLocation() {
        return this.location;
    }

    set setLocation(location) {
        this.location = location;
    }

    get getProfessor() {
        return this.professor;
    }

    set setProfessor(professor) {
        this.professor = professor;
    }

    get getFinalTime() {
        return this.finalTime;
    }

    set setFinalTime(finalTime) {
        this.finalTime = finalTime;
    }

    get getFinalEndTime() {
        return this.finalEndTime;
    }

    set setFinalEndTime(finalEndTime) {
        this.finalEndTime = finalEndTime;
    }

    get getFinalDate() {
        return this.finalDate;
    }

    set setFinalDate(finalDate) {
        this.finalDate = finalDate;
    }

    get getDisArr(){
        return this.disArr;
    }

    set setDisArr (disArr){
        this.disArr = disArr;
    }
}

module.exports = Section;