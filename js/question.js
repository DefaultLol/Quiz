const quiz=[
    {
        id: 1,
        q: "How old are you ?",
        type:"normal"
          ,
        options: [
          "18-30","31-45","46-60","61+"
        ]
      },{
        id: 2,
        q: "I am",
        type:"normal"
          ,
        options: [ "Female","Male","Other,Prefer not to identify"
          
        ]
      },{
        id: 3,
        q: "Are you happy with your current weight?",
        type:"normal"
          ,
        options: ["No, I want to lose a lot of weight" ,
        "Yes, Ijust want to maintain   my actual weight",
        "Kind of , but i want to take a few pounds",
          "Yes , but i want to gain muscle"
        ]
      },{
        id: 4,
        q: "What is your body type?",
        type:"normal"
          ,
        options: [ "Apple","Hourglass","Pear","Rectangle","inverted Pyramid"
          
        ]
      },{
        id: 5,
        q: "How many times a week do you exercise?",
        type:"normal"
          ,
        options: [ "1-2 times a week" ,"3-4 times a week",
        "5-7 times a week","Sometimes i go for a walk at lunchtime","Never , i dont have time to go to the gym"
          
        ]
      },{
        id: 6,
        q: "How long do you usually workout for?*",
        type:"normal"
          ,
        options: ["Less the 20 minutes" ,"20-40 minutes","40-60 minutes", "Depends on how much time i have for the moment"
          
        ]
      },{
        id: 7,
        q: "How intense do you like your workouts?",
        type:"normal"
          ,
        options: ["Extreme Intesity-heart racing,sweat dripping intense",
        "High intensity-high intensity interval training with breaks",
        "Moderate intensity- jog or weight lifting session",
        "Low intensity -yoga or a walk around the block","No Intensity-does eating count?"
          
        ]
      },{
        id: 8,
        q: "How would you rate your fitness level? (1 being lowest and 5 being extremely*",
        type:"normal"
          ,
        options: ["1","2","3","4","5"
          
        ]
      },{
        id: 9,
        q: "How do you feel when you wake up?*",
        type:"normal"
          ,
        options: [ "Tired","Energised","Sore","Excited to start the day","Stressed"
          
        ]
      },{
        id: 10,
        q: "How do you feel when you go to sleep?*",
        type:"normal"
          ,
        options: ["Tired","Energised","Sore","Ready to go to sleep ","Stressed"
          
        ]
      },{
        id: 11,
        q: "How many hours do you generally sleep each night?*",
        type:"normal"
          ,
        options: ["less than 5","5-6","I need a solid 9 hours","More then 9 hours"
          
        ]
      },{
        id: 12,
        q: "When do you feel your best?*",
        type:"normal"
          ,
        options: ["In the morning ,after a big sleep","after a workout , because Endrophins","after i meditate","following a catch up with friends"
          
        ]
      },{
        id: 13,
        q: "How would you rate your mental health?*",
        type:"normal"
          ,
        options: ["Poor, I don't prioritise myself or my mental health","Good,but i want to prioritise myself more" ,"Great , i put myself first everyday and want to continue doing so"
          
        ]
      },{
        id: 14,
        q: "How is your appetite?*",
        type:"normal"
          ,
        options: ["I have a great appetite and enjoy food",
        "Iam very picky about food and genrally have areduced appetite","I havea great appetite but eat too quick to enjoy food ", "I ambusy to eat and don't notice when im hungry"
         
        ]
      },{
        id: 15,
        q: "How would you rate your health?*",
        type:"normal"
          ,
        options: [ "Amazing ","Great","Average","Poor"
          
        ]
      },{
        id: 16,
        q: "You are going through a tough time, how do you cope?*",
        type:"normal"
          ,
        options: ["Exercise","Meditate and write down all my thoughts","Speak to a professional" ,"Keep it to myself , i will get through it"
          
        ]
      },{
        id: 17,
        q: "What's your main health goal?*",
        type:"normal"
          ,
        options: ["Tone up" ,"Lose weight G" ,"Increase general fitness and wellbeing-I want to feel happy, healthy and beautiful every day","become Stonger","Train for a personnal health goal",
        "Stop dieting and live a balanced life","Increase wellbeing and learn to meditate"
          
        ]
    },{
        id: 18,
        q: "Do you have other fitness goals? (Select all that apply)",
        type:"normal"
          ,
        options: ["Tone up","Stop Dieting and live a balanced life","Increase wellbeing and learn to meditate","Become stronger",
        "Increase general fitness and wellbeing-I want to feel happy,healthy and beautiful everyday","Lose weight "
          
        ]
      },{
        id: 19,
        q: "Do you have other fitness goals? (Select all that apply)",
        type:"normal"
          ,
        options: ["Lose Fat","Gain Muscle","Tone up","Train(gain strenght and endurance","Recover or strengthen","Maintain and optimize","Improve cardioVascular Health"
        ]
      },
      {
        id: 20,
        q: "Do you want to lose weight?",
        type:"normal"
          ,
        options: ["Yes","No","Maybe"]
      },
      {
          id :21 ,
          q:"What is your main go-to exercise?" ,
          options:["a walk around the block","Weight Training","HIIT Training","Pilates or yoga",
          "Running , cycling or other form of cardio",
          " A group fitness class or exercising with friends"]
          ,type:"image"
          ,image:["walking.jpg","WeightTraining.jpg","HIITTraining.jpg","yoga.jpg","cardio.jpg","Friends.jpg"]
      },
      {
        id :22 ,
        q:"What are your favorite ways to exercise on your own? (Select all that apply)" ,
        options:["Yoga","Pilates","Weight Lifting/Crossfit","Body Weight exercises","Cardio(i.e. boxing,running,cycling,swimming)"]
        ,type:"image"
        ,image:["yoga.jpg","Pilates.jpg","Crossfit.jpg","BodyWeightexercises.jpg","cardio1.jpg"]
    },
    {
        id :23 ,
        q:"What kind of cardio workouts do you prefer? (Select all that apply)" ,
        options:["Running","Swimming","Cycling","Walking","Other sports(boxing,Basketball,tennis,etc","None , I hate cardio"]
        ,type:"image"
        ,image:["Running.jpg","Swimming.jpg","Cycling.jpg","walking.jpg","Basketball.jpg","anticardio.jpg"]
    },
    {
        id :24 ,
        q:"What kind of cardio workouts do you prefer? (Select all that apply)" ,
        options:["At home","Outside(in my yard, on the street ,on the street or at a park","In a swimming pool or in the ocean","At Gym"]
        ,type:"normal"
    },
    {
        id :25 ,
        q:"How do you prefer to exercise? (You may select up to three options)" ,
        options:["Alone","With my partner or friend","With a small group of friends ",
        "At a Gym","i need a personal trainer","An exercise class with lots of other people(even if it's online!)"]
        ,type:"normal"
    },{
        id :26 ,
        q:"Would you like to focus on improving specific body areas? (Select all that apply)" ,
        options:["Legs;thigs and gluts","Abs and core","Back and shoulder","Arms and chest","No i want a full body balanced approach"]
        ,type:"image"
        ,image:["legs.jpg","abs.jpg","younes.jpg","Back.jpg","arms.jpg","fullbody.jpg"]
    },  {
        id :27 ,
        q:"Have you suffered any recent sport-related injuries or had any recent surgeries? (Past 12 months only)" ,
        options:["yes","No"]
        ,type:"normal"
    }, {
        id :28 ,
        q:"Previous injuries or areas of concern with which to exercise caution for your fitness routine? (Select all that apply)" ,
        options:[" Knees","Back,Shoulders or arms","Hips","Ankles,Achilles or calves"," Core or abs","None"]
        ,type:"normal"
    },{
        id :29 ,
        q:"Do you have access to basic exercise equipment?" ,
        options:["yes","No","I have acces but prefer body weight based exercises"]
        ,type:"image"
        ,image:["TrainEqui.jpg","no.png","BodyWeightexercises.jpg"]
    },{
        id :30 ,
        q:"Do you want us to include cardio in your weekly fitness routine?" ,
        options:["Yes","No","Sometimes"]
        ,type:"normal"
    },{
        id :31 ,
        q:"Desired workout frequency?" ,
        options:["5-7 Workouts a week","1-2 Workouts a week","3-4 Workouts a week"," more than 7 Workouts a week"]
        ,type:"normal"
    },{
        id :32   ,
        q:"Desired time length of each workout" ,
        options:["5-10 Sessions(Highest frequency)","10-25 minutes sessions(high frequency","25-40 minutes sessions(average)","40-60 minutes(above average)",">60 minutes(power moves)"]
        ,type:"normal"
    },{
        id :33 ,
        q:"Would you like us to include wellness advice?" ,
        options:["No , Lets just stick to fitness","Brdigin the mind and the body","Healthy cooking ideas","Balance and inner strengh",
        "Stretching and lenghtining","Stress Relief"]
        ,type:"image"
        ,image:["fitness.jpg","bridge.jpg","cook.jpg","balance.jpg","yoga.jpg","stress.jpg"]
    },{
        id :34   ,
        q:"Are you interested in incorporating meditations to your fitness routine?" ,
        options:["Yes, a few times a week","Sometimes ,once a week" ,"no ,Not intrested","Seldom,once or twice a month"]
        ,type:"normal"  
    }
]
