data_movement = [
    {
        title: "Stride",
        icon: "one-action",
        subtitle: "Cost: 5ft per 5ft",
        description: "Movement cost: 5ft per 5ft moved",
        reference: "Core Rulebook pg. 471.",
        bullets: [
            "If you have more than one speed, such as your walking speed and a flying speed, you can switch back and forth between your speeds during your move. Whenever you switch, subtract the distance you've already moved from the new speed.",
            "You can move through a nonhostile creature's space.",
            "You can move through a hostile creature's space only if the creature is at least two sizes larger or smaller than you.",
            "Another creature's space is difficult terrain for you, You can attempt to Tumble through it with an Acrobatics check",
            "Whether a creature is a friend or an enemy, you can't willingly end your move in its space."
        ]
    },
    {
        title: "Step",
        icon: "one-action",
        subtitle: "Req: speed of at least 10 feet",
        description: "Movement cost: 5ft per 5ft",
        reference: "Core Rulebook pg. 471.",
        bullets: [
            "You carefully move 5 feet. Unlike most types of movement, Stepping doesn't trigger reactions, such as Attacks of Opportunity, that can be triggered by move actions or upon leaving or entering a square.",
            "You can't Step into difficult terrain, and you can't Step using a Speed other than your land Speed."
        ]
    },
    {
        title: "Leap",
        icon: "one-action",
        subtitle: "Cost: 10ft per action",
        description: "Movement cost: 10 feet (15 feet if your speed is 30 or more)",
        reference: "PHB, pg. 182.",
        bullets: [
            "You take a careful, short jump. You can Leap up to 10 feet horizontally if your Speed is at least 15 feet, or up to 15 feet horizontally if your Speed is at least 30 feet. You land in the space where your Leap ends (meaning you can typically clear a 5-foot gap, or a 10-foot gap if your Speed is 30 feet or more).",
            "If you Leap vertically, you can move up to 3 feet vertically and 5 feet horizontally onto an elevated surface.",
            "Jumping a greater distance requires using the Athletics skill."
        ]
    },
    {
        title: "Drop prone",
        icon: "one-action",
        subtitle: "Cost: 0ft",
        description: "Movement cost: 0ft",
        reference: "Core Rulebook pg. 621.",
        bullets: [
            "You fall prone",
            "You're lying on the ground. You are flat-footed and take a –2 circumstance penalty to attack rolls.", 
            "The only move actions you can use while you're prone are Crawl and Stand.",
            "Standing up ends the prone condition. You can Take Cover while prone to hunker down and gain greater cover against ranged attacks, even if you don't have an object to get behind, gaining a +4 circumstance bonus to AC against ranged attacks (but you remain flat-footed).",
            "If you would be knocked prone while you're Climbing or Flying, you fall (see Falling for the rules on falling). You can't be knocked prone when Swimming."
        ]
    },
    {
        title: "Crawl",
        icon: "one-action",
        subtitle: "Cost: 5ft while prone",
        description: "Movement cost: 5ft",
        reference: "PHB, pg. 182.",
        bullets: [
            "You move 5 feet by crawling and continue to stay prone."
        ]
    },
    {
        title: "Stand",
        icon: "one-action",
        subtitle: "Cost: one action",
        description: "Movement cost: 0ft",
        reference: "PHB, pg. 190-191.",
        bullets: [
            "You stand up from prone"
        ]
    },
    {
        title: "Mount",
        icon: "one-action",
        subtitle: "Cost: one action",
        description: "Creature size must be =/> your size",
        
        reference: "PHB, pg. 182.",
        bullets: [
            "You get on an allied animal one size larger than you to ride it",
            "If you’re already mounted, you can instead use this action to dismount, moving off the mount into a space adjacent to it."
        ]
    },
    {
        title: "Grab an Edge",
        icon: "react",
        subtitle: "Trigger: You fall from or past an edge or handhold",
        description: "Requirement: you are not restained",
        reference: "Core Rulebook pg. 472.",
        bullets: [
            "When you fall off or past an edge or other handhold, you can try to grab it, potentially stopping your fall. You must succeed at a Reflex save, usually at the Climb DC. If you grab the edge or handhold, you can then Climb up using Athletics.",
            "Critical Success: You grab the edge or handhold, whether or not you have a hand free, typically by using a suitable held item to catch yourself (catching a battle axe on a ledge, for example). You still take damage from the distance fallen so far, but you treat the fall as though it were 30 feet shorter.",
            "Success: If you have at least one hand free, you grab the edge or handhold, stopping your fall. You still take damage from the distance fallen so far, but you treat the fall as though it were 20 feet shorter. If you have no hands free, you continue to fall as if you had failed the check.",
            "Critical Failure: You continue to fall, and if you’ve fallen 20 feet or more before you use this reaction, you take 10 bludgeoning damage from the impact for every 20 feet fallen."
        ]
    },
    {
        title: "Arrest A Fall",
        icon: "react",
        subtitle: "Acrobatics vs DC15",
        description: "Requirement: You have a fly speed",
        reference: "Core Rulebook pg. 472.",
        bullets: [
            "You attempt an Acrobatics check to slow your fall. The DC is typically 15, but it might be higher due to air turbulence or other circumstances.",
            "Success You fall gently, taking no damage from the fall."
        ]
    },
    {
        title: "Balance",
        icon: "one-action",
        subtitle: "Acrobatics",
        reference: "Core Rulebook pg. 240.",
        description: "Move accross a narrow surface or uneaven ground",
        bullets: [
            "You move across a narrow surface or uneven ground, attempting an Acrobatics check against its Balance DC. You are flat-footed while on a narrow surface or uneven ground.",
            "Critical Success You move up to your Speed.",
            "Success You move up to your Speed, treating it as difficult terrain (every 5 feet costs 10 feet of movement).",
            "Failure You must remain stationary to keep your balance (wasting the action) or you fall. If you fall, your turn ends.",
            "Critical Failure You fall and your turn ends."
        ]
    },
    {
        title: "Tumble Through",
        icon: "one-action",
        subtitle: "Acrobatics vs Reflex",
        description: "Move through the space of one enemy",
        reference: "Core Rulebook pg. 240.",
        bullets: [
            "You Stride up to your Speed. During this movement, you can try to move through the space of one enemy. Attempt an Acrobatics check against the enemy’s Reflex DC as soon as you try to enter its space. You can Tumble Through using Climb, Fly, Swim, or another action instead of Stride in the appropriate environment.",
            "Success You move through the enemy’s space, treating the squares in its space as difficult terrain (every 5 feet costs 10 feet of movement). If you don’t have enough Speed to move all the way through its space, you get the same effect as a failure.",
            "Failure Your movement ends, and you trigger reactions as if you had moved out of the square you started in."
        ]
    },
    {
        title: "Maneuver In Flight",
        icon: "one-action",
        subtitle: "Modifier: speed halved",
        description: "Drag or carry the grappled creature with you",
        reference: "PHB, pg. 195.",
        bullets: [
            "If you move while grappling another creature, your speed is halved, unless the creature is two or more sizes smaller than you.",
            "See the attack action for how to grapple a creature."
        ]
    },
    {
        title: "Climb",
        icon: "one-action",
        subtitle: "Modifier: speed halved",
        description: "Drag or carry the grappled creature with you",
        reference: "PHB, pg. 195.",
        bullets: [
            "If you move while grappling another creature, your speed is halved, unless the creature is two or more sizes smaller than you.",
            "See the attack action for how to grapple a creature."
        ]
    },
    {
        title: "High Jump",
        icon: "two-actions",
        subtitle: "Modifier: speed halved",
        description: "Drag or carry the grappled creature with you",
        reference: "PHB, pg. 195.",
        bullets: [
            "If you move while grappling another creature, your speed is halved, unless the creature is two or more sizes smaller than you.",
            "See the attack action for how to grapple a creature."
        ]
    },
    {
        title: "Long Jump",
        icon: "two-actions",
        subtitle: "Modifier: speed halved",
        description: "Drag or carry the grappled creature with you",
        reference: "PHB, pg. 195.",
        bullets: [
            "If you move while grappling another creature, your speed is halved, unless the creature is two or more sizes smaller than you.",
            "See the attack action for how to grapple a creature."
        ]
    },
    {
        title: "Swim",
        icon: "one-action",
        subtitle: "Modifier: speed halved",
        description: "Drag or carry the grappled creature with you",
        reference: "PHB, pg. 195.",
        bullets: [
            "If you move while grappling another creature, your speed is halved, unless the creature is two or more sizes smaller than you.",
            "See the attack action for how to grapple a creature."
        ]
    },
    {
        title: "Sneak",
        icon: "one-action",
        subtitle: "Modifier: speed halved",
        description: "Drag or carry the grappled creature with you",
        reference: "PHB, pg. 195.",
        bullets: [
            "If you move while grappling another creature, your speed is halved, unless the creature is two or more sizes smaller than you.",
            "See the attack action for how to grapple a creature."
        ]
    }
]
