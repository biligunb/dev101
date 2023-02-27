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
    routine:{
        meeting: {
            every: "monday",
            timeRange:{
                min: 30,
                max: 60,
                type: "minute"
            }
        },
        scrum: {
            every: "morning",
            timeRange:{
                min: 10,
                max: 15,
                type: "minute"
            }
        },
        dailyReport: {
            every: "day",
            note: "did"
        },
        weeklyReview: {
            every: "friday"
        },
        monthlyKPT: {
            every: "month",
            note: "good or bad"
        }
    }
}
developer = {
    eatSlice: 3,
    minRole: 2,
    oneDay: {
        shiftTime: "morning",
        issues: ["todo","doing","done"],
        issue: ["research", "coding", "testing"],
        review: "merge request",
        documentation: "wiki",
        meeting: "pin point"
    }
}
    

