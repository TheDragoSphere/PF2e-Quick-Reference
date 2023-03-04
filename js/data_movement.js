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
        title: "Sneak",
        icon: "one-action",
        subtitle: "Cost: half your speed",
        description: "Stealth (secret)",
        reference: "Core Rulebook pg. 252.",
        bullets: [
            "You can attempt to move to another place while becoming or staying undetected. Stride up to half your Speed. (You can use Sneak while Burrowing, Climbing, Flying, or Swimming)",
            "If you’re undetected by a creature for any critical failure you roll on a check to Sneak, you get a failure instead. You also continue to be undetected if you lose cover or greater cover against or are no longer concealed from such a creature.",
            "If you have cover or greater cover from the creature throughout your Stride, you gain the +2 circumstance bonus from cover (or +4 from greater cover) to your Stealth check. Because you’re moving, the bonus increase from Taking Cover doesn’t apply. You don’t get to roll against a creature if, at the end of your movement, you neither are concealed from it nor have cover or greater cover against it. You automatically become observed by such a creature.",
            "Success: You’re undetected by the creature during your movement and remain undetected by the creature at the end of it.",
            "You become observed as soon as you do anything other than Hide, Sneak, or Step. If you attempt to Strike a creature, the creature remains flat-footed against that attack, and you then become observed. If you do anything else, you become observed just before you act unless the GM determines otherwise.",
            "If a creature uses Seek and you become hidden to it as a result, you must Sneak if you want to become undetected by that creature again.",
            "<b>Failure:</b> A telltale sound or other sign gives your position away, though you still remain unseen. You’re hidden from the creature throughout your movement and remain so.",
            "<b>Critical Failure:</b> You’re spotted! You’re observed by the creature throughout your movement and remain so. If you’re invisible and were hidden from the creature, instead of being observed you’re hidden throughout your movement and remain so.",
        ]
    },
    {
        title: "Leap",
        icon: "one-action",
        subtitle: "Cost: 10ft per action",
        description: "Movement cost: 10 feet (15 feet if your speed is 30 or more)",
        reference: "Core Rulebook pg. 470.",
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
        description: "Req: your speed is 10+",
        reference: "Core Rulebook pg. 252.",
        bullets: [
            "You move 5 feet by crawling and continue to stay prone."
        ]
    },
    {
        title: "Stand",
        icon: "one-action",
        subtitle: "Req: you are prone",
        description: "Movement cost: 0ft",
        reference: "Core Rulebook pg. 471.",
        bullets: [
            "You stand up from prone"
        ]
    },
    {
        title: "Mount",
        icon: "one-action",
        subtitle: "Mount an allied creature",
        description: "Creature size must be =/> your size",
        reference: "Core Rulebook pg. 472.",
        bullets: [
            "You get on an allied animal one size larger than you to ride it",
            "If you’re already mounted, you can instead use this action to dismount, moving off the mount into a space adjacent to it."
        ]
    },
    {
        title: "Grab an Edge",
        icon: "react",
        subtitle: "Trigger: You fall past a handhold",
        description: "Requirement: you are not restained",
        reference: "Core Rulebook pg. 472.",
        bullets: [
            "When you fall off or past an edge or other handhold, you can try to grab it, potentially stopping your fall. You must succeed at a Reflex save, usually at the Climb DC. If you grab the edge or handhold, you can then Climb up using Athletics.",
            "<b>Critical Success:</b> You grab the edge or handhold, whether or not you have a hand free, typically by using a suitable held item to catch yourself (catching a battle axe on a ledge, for example). You still take damage from the distance fallen so far, but you treat the fall as though it were 30 feet shorter.",
            "<b>Success:</b> If you have at least one hand free, you grab the edge or handhold, stopping your fall. You still take damage from the distance fallen so far, but you treat the fall as though it were 20 feet shorter. If you have no hands free, you continue to fall as if you had failed the check.",
            "<b>Critical Failure:</b> You continue to fall, and if you’ve fallen 20 feet or more before you use this reaction, you take 10 bludgeoning damage from the impact for every 20 feet fallen."
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
            "<b>Success</b> You fall gently, taking no damage from the fall."
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
            "<b>Critical Success:</b> You move up to your Speed.",
            "<b>Success:</b> You move up to your Speed, treating it as difficult terrain (every 5 feet costs 10 feet of movement).",
            "<b>Failure:</b> You must remain stationary to keep your balance (wasting the action) or you fall. If you fall, your turn ends.",
            "<b>Critical Failure:</b> You fall and your turn ends."
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
            "<b>Success:</b> You move through the enemy’s space, treating the squares in its space as difficult terrain (every 5 feet costs 10 feet of movement). If you don’t have enough Speed to move all the way through its space, you get the same effect as a failure.",
            "<b>Failure:</b> Your movement ends, and you trigger reactions as if you had moved out of the square you started in."
        ]
    },
    {
        title: "Maneuver In Flight",
        icon: "one-action",
        subtitle: "Req: Fly speed",
        description: "Acrobatics (Trained)",
        reference: "Core Rulebook pg. 240.",
        bullets: [
            "You try a difficult maneuver while flying. Attempt an Acrobatics check. The GM determines what maneuvers are possible, but they rarely allow you to move farther than your fly Speed.",
            "<b>Success:</b> You succeed at the maneuver.",
            "<b>Failure:</b> Your maneuver fails. The GM chooses if you simply can’t move or if some other detrimental effect happens. The outcome should be appropriate for the maneuver you attempted (for instance, being blown off course if you were trying to fly against a strong wind).",
            "<b>Critical Failure:</b> As failure, but the consequence is more dire."
        ]
    },
    {
        title: "Climb",
        icon: "one-action",
        subtitle: "Athletics",
        description: "Move up or down along an inclune",
        reference: "Core Rulebook pg. 240.",
        bullets: [
            "Unless it’s particularly easy, you must attempt an Athletics check. The GM determines the DC based on the nature of the incline and environmental circumstances. You’re flat-footed unless you have a climb Speed.",
            "<b>Critical Success:</b> You move up, across, or safely down the incline for 5 feet plus 5 feet per 20 feet of your land Speed (a total of 10 feet for most PCs).",
            "<b>Success:</b> You move up, across, or safely down the incline for 5 feet per 20 feet of your land Speed (a total of 5 feet for most PCs, minimum 5 feet if your Speed is below 20 feet).",
            "<b>Critical Failure:</b> You fall. If you began the climb on stable ground, you fall and land prone."
        ]
    },
    {
        title: "High Jump",
        icon: "two-actions",
        subtitle: "Athletics vs DC30",
        description: "Stride 10' then leap vertically 5'(8'/3')",
        reference: "Core Rulebook pg. 242.",
        bullets: [
            "You Stride, then make a vertical Leap and attempt a DC 30 Athletics check to increase the height of your jump. If you didn’t Stride at least 10 feet, you automatically fail your check.",
            "<b>Critical Success:</b> Increase the maximum vertical distance to 8 feet, or increase the maximum vertical distance to 5 feet and maximum horizontal distance to 10 feet.",
            "<b>Success:</b> Increase the maximum vertical distance to 5 feet.",
            "<b>Failure:</b> You Leap normally.",
            "<b>Critical Failure:</b> You don’t Leap at all, and instead you fall prone in your space."
        ]
    },
    {
        title: "Long Jump",
        icon: "two-actions",
        subtitle: "Athletics vs Distance in feet",
        description: "Stride 10' then leap the desired distance",
        reference: "Core Rulebook pg. 242.",
        bullets: [
            "You Stride, then make a horizontal Leap and attempt an Athletics check to increase the length of your jump. The DC of the Athletics check is equal to the total distance in feet you’re attempting to move during your Leap (so you’d need to succeed at a DC 20 check to Leap 20 feet). You can’t Leap farther than your Speed.",
            "If you didn’t Stride at least 10 feet, or if you attempt to jump in a different direction than your Stride, you automatically fail your check.",
            "<b>Success:</b> Increase the maximum horizontal distance you Leap to the desired distance.",
            "<b>Failure:</b> You Leap normally.",
            "<b>Critical Failure:</b> You Leap normally, but then fall and land prone."
        ]
    },
    {
        title: "Swim",
        icon: "one-action",
        subtitle: "Athletics",
        description: "Drag or carry the grappled creature with you",
        reference: "Core Rulebook pg 243 & 463.",
        bullets: [
            "You propel yourself through water. In most calm water, you succeed at the action without needing to attempt a check. If you must breathe air and you’re submerged in water, you must hold your breath each round. If you fail to hold your breath, you begin to drown. If the water you are swimming in is turbulent or otherwise dangerous, you might have to attempt an Athletics check to Swim.",
            "If you end your turn in water and haven’t succeeded at a Swim action that turn, you sink 10 feet or get moved by the current, as determined by the GM. However, if your last action on your turn was to enter the water, you don’t sink or move with the current that turn.",
            "<b>Critical Success:</b> You move through the water 10 feet, plus 5 feet per 20 feet of your land Speed (a total of 15 feet for most PCs).",
            "<b>Success:</b> You move through the water 5 feet, plus 5 feet per 20 feet of your land Speed (a total of 10 feet for most PCs).",
            "<b>Critical Failure:</b> You make no progress, and if you’re holding your breath, you lose 1 round of air."
        ]
    },

]
