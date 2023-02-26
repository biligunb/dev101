project = {
    timeRange : {
        min: 4,
        max: 9,
        type: "month"
    },
    milestones : {
        requirements_n_design: {
            min: 2,
            max: 4,
            type: "week"
        },
        planning_architecture_n_development: {
            min: 3,
            max: 6,
            type: "month"
        },
        testing: {
            min: 3,
            max: 6,
            type: "week"
        }
    },
    type: ["agile", "waterfall"],
    scope: "all",
    sprint: {
        scope: "requirment",
        milestones : ["planning", "development", "testing","deployment"],
        timeRange:{
            min: 1,
            max: 4,
            type: "week"
        },
        scrum: "every day"
    }
}
pizza = {
    slice: 8
}

team = {// 2 pizza team
    pizza: 2,
    maxMembers: floor(team.pizza * pizza.slice / developer.eatSlice),
    roles: ["frontend","backend","infra","sem","pm"],
}

developer = {
    eatSlice: 3,
    minRole: 2
}
    

