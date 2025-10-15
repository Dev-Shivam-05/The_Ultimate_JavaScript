class NES {
    constructor(university_name) {
        this.university_name = university_name;
    }
    manageUniversities(){
        console.log("Current List Of University Is :- ");
        this.displayUniversity();
        let new_university = "Vidhyadeep University"; // For Dynamic program take new_university from user
        let removed_university = "Vidhyadeep University"; // For Dynamic program take new_university from user
        let choice = 1; // For Dynamic program take choice from user
        switch (choice) {
            case 1:
                this.university_name.push(new_university);
                console.log("List updated successfully");
                break;
        
            case 2:
                removed_university = this.university_name.remove(new_university);
                console.log("List updated successfully");
                break;
        
            default:
                console.log("Wrong Choice");
                break;
        }
        return 0;
    }

    displayUniversity()
    {
        for (const i in this.university_name) {
            console.log(this.university_name[i]);
        }
    }
}

