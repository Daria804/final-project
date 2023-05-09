const quiz = [
    {
        "q": "1.В последние две недели, вы испытывали: Отсутствие интереса к происходящим событиям?",
        "a": {
            "0":"1.Никогда",
            "1":"2.Не каждый день",
            "2":"3.Несколько дней",
            "3":"4.Более чем в половине дней",
            "4":"5.Почти каждый день",
        }
    },
    {
        "q": "2.В последние две недели, вы испытывали: Безразличие, подавленность?",
        "a": {
            "0":"1.Никогда",
            "1":"2.Не каждый день",
            "2":"3.Несколько дней",
            "3":"4.Более чем в половине дней",
            "4":"5.Почти каждый день",
        }
    },
    {
        "q": "3.В последние две недели, вы испытывали:Проблемы с засыпанием, бессонница, наоборот спали слишком много? ",
        "a": {
            "0":"1.Никогда",
            "1":"2.Не каждый день",
            "2":"3.Несколько дней",
            "3":"4.Более чем в половине дней",
            "4":"5.Почти каждый день",
        }
    },
    {
        "q": "4.В последние две недели, вы испытывали:Чувство усталости или упадок сил?",
        "a": {
            "0": "1.Никогда",
            "1":"2.Не каждый день",
            "2":"3.Несколько дней",
            "3":"4.Более чем в половине дней",
            "4": "5.Почти каждый день",
        }
    },
    {
        "q": "5.В последние две недели, вы испытывали: Отсутствие аппетита или переедание?",
        "a": {
            "0": "1.Никогда",
            "1":"2.Не каждый день",
            "2":"3.Несколько дней",
            "3":"4.Более чем в половине дней",
            "4": "5.Почти каждый день",
        }
    },
    {
        "q": "6.В последние две недели, вы испытывали:Чувствуете себя неудачником, вините за то, что тяготите свою семью?",
        "a": {
            "0": "1.Никогда",
            "1":"2.Не каждый день",
            "2":"3.Несколько дней",
            "3":"4.Более чем в половине дней",
            "4": "5.Почти каждый день",
        }
    },
    {
        "q": "7.В последние две недели, вы испытывали:Трудно сосредоточиться на чтение или просмотре телевизора?",
        "a": {
            "0": "1.Никогда",
            "1":"2.Не каждый день",
            "2":"3.Несколько дней",
            "3":"4.Более чем в половине дней",
            "4": "5.Почти каждый день",
        }
    },
    {
        "q": "8.В последние две недели, вы испытывали:Двигаетесь или говорите необыкновенно медленно (заторможенность), или наоборот, возбуждены, двигаетесь больше, чем обычно?",
        "a": {
            "0": "1.Никогда",
            "1":"2.Не каждый день",
            "2":"3.Несколько дней",
            "3":"4.Более чем в половине дней",
            "4": "5.Почти каждый день",
        }
    },
    {
        "q": "9.В последние две недели, вы испытывали:Мысли о самоубийстве, или причинении себе вреда?",
        "a": {
            "0": "1.Никогда",
            "1":"2.Не каждый день",
            "2":"3.Несколько дней",
            "3":"4.Более чем в половине дней",
            "4": "5.Почти каждый день",
        }
    },
] 
let answers = {
    "0": {
        "description":"Отсутсвие признаков депрессии"},
    "1": {
        "description":"Минимальная депрессия"
    },
    "2" : {
        "description":"Легкая депрессия"
    },
    "3" : {
        "description": "Умеренная депрессия"
    },
    "4" : {
        "description": "Тяжелая/крайне тяжелая депрессия"
    },
}