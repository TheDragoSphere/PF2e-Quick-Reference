data_cloakanddagger = [
    {
        title: "Seek",
        icon: "one-action",
        subtitle: "Perception (secret)",
        description: "- Locate creatures and *objects within an area (a 30' cone; or a 15' burst within LOS).",
        reference: "Core Rulebook pg 471.",
        bullets: [
            "You scan an area for signs of creatures or objects. If you're looking for creatures, choose an area you're scanning. If precision is necessary, the GM can have you select a 30-foot cone or a 15-foot burst within line of sight. You might take a penalty if you choose an area that's far away.",
            "If you're using Seek to search for objects (including secret doors and hazards), you search up to a 10-foot square adjacent to you. The GM might determine you need to Seek as an activity, taking more actions or even minutes or hours if you're searching a particularly cluttered area.",
            "The GM attempts a single secret Perception check for you and compares the result to the Stealth DCs of any undetected or hidden creatures in the area or the DC to detect each object in the area (as determined by the GM or by someone Concealing the Object). A creature you detect might remain hidden, rather than becoming observed, if you're using an imprecise sense or if an effect (such as invisibility) prevents the subject from being observed.",
            "<b>Critical Success:</b> If you were searching for creatures, any undetected or hidden creature you critically succeeded against becomes observed by you. If you were searching for an object, you learn its location.",
            "<b>Success:</b> If you were searching for creatures, any undetected creature you succeeded against becomes hidden from you instead of undetected, and any hidden creature you succeeded against becomes observed by you. If you were searching for an object, you learn its location or get a clue to its whereabouts, as determined by the GM."
        ]
    },
    {
        title: "Point Out",
        icon: "one-action",
        subtitle: "Perception (secret)",
        description: "Indicate the location of a creature to your allies.",
        reference: "Core Rulebook pg 472.",
        bullets: [
            "Requirements: A creature is undetected by one or more of your allies but isn’t undetected by you.",
            "You indicate a creature that you can see to one or more allies, gesturing in a direction and describing the distance verbally. That creature is hidden to your allies, rather than undetected. This works only for allies who can see you and are in a position where they could potentially detect the target. If your allies can't hear or understand you, they must succeed at a Perception check against the creature's Stealth DC or they misunderstand and believe the target is in a different location.",
        ]
    },
    {
        title: "Hide",
        icon: "one-action",
        subtitle: "Stealth (secret)",
        description: "Use cover or concealment to become hidden.",
        reference: "Core Rulebook pg 251.",
        bullets: [
            "You huddle behind cover, greater cover or deeper into concealment to become hidden, rather than observed. The GM rolls your Stealth check in secret and compares the result to the Perception DC of each creature you’re observed by but that you have cover or greater cover against or are concealed from. You gain the circumstance bonus from cover or greater cover to your check.",
            "Success If the creature could see you, you’re now hidden from it instead of observed. If you were hidden from or undetected by the creature, you retain that condition.",
            "If you successfully become hidden to a creature but then cease to have cover or greater cover against it or be concealed from it, you become observed again. You cease being hidden if you do anything except Hide, Sneak, or Step. If you attempt to Strike a creature, the creature remains flat-footed against that attack, and you then become observed. If you do anything else, you become observed just before you act unless the GM determines otherwise. The GM might allow you to perform a particularly unobtrusive action without being noticed, possibly requiring another Stealth check.",
            "If a creature uses Seek to make you observed by it, you must successfully Hide to become hidden from it again."
        ]
    },
    {
        title: "Sneak",
        icon: "one-action",
        subtitle: "Stealth (secret)",
        description: "Move at half speed while being undetected.",
        reference: "Core Rulebook pg 252.",
        bullets: [
            "You can attempt to move to another place while becoming or staying undetected. Stride up to half your Speed. (You can use Sneak while Burrowing, Climbing, Flying, or Swimming if you have the corresponding movement type)",
            "If you’re undetected by a creature and it’s impossible for that creature to observe you (if you're invisible, the observer is blinded, or you’re in darkness and the creature can’t see in darkness), for any critical failure you roll on a check to Sneak, you get a failure instead. You also continue to be undetected if you lose cover or greater cover against or are no longer concealed from such a creature.",
            "If you have cover or greater cover from the creature throughout your Stride, you gain the +2 circumstance bonus from cover (or +4 from greater cover) to your Stealth check. Because you’re moving, the bonus increase from Taking Cover doesn’t apply. You don’t get to roll against a creature if, at the end of your movement, you neither are concealed from it nor have cover or greater cover against it. You automatically become observed by such a creature.",
            "Success You’re undetected by the creature during your movement and remain undetected by the creature at the end of it.",
            "You become observed as soon as you do anything other than Hide, Sneak, or Step. If you attempt to Strike a creature, the creature remains flat-footed against that attack, and you then become observed. If you do anything else, you become observed just before you act unless the GM determines otherwise. The GM might allow you to perform a particularly unobtrusive action without being noticed, possibly requiring another Stealth check. If you speak or make a deliberate loud noise, you become hidden instead of undetected.",
            "If a creature uses Seek and you become hidden to it as a result, you must Sneak if you want to become undetected by that creature again.",
            "Failure A telltale sound or other sign gives your position away, though you still remain unseen. You’re hidden from the creature throughout your movement and remain so.",
            "Critical Failure You’re spotted! You’re observed by the creature throughout your movement and remain so. If you’re invisible and were hidden from the creature, instead of being observed you’re hidden throughout your movement and remain so.",
        ]
    },
    {
        title: "Conceal an Object",
        icon: "one-action",
        subtitle: "Stealth (secret)",
        description: "Hide an object of light bulk.",
        reference: "Core Rulebook pg 251.",
        bullets: [
            "You hide a small object on your person (such as a weapon of light Bulk). When you try to sneak a concealed object past someone who might notice it, the GM rolls your Stealth check and compares it to this passive observer’s Perception DC. Once the GM rolls your check for a concealed object, that same result is used no matter how many passive observers you try to sneak it past. If a creature is specifically searching you for an item, it can attempt a Perception check against your Stealth DC (finding the object on success).",
            "You can also conceal an object somewhere other than your person, such as among undergrowth or in a secret compartment within a piece of furniture. In this case, characters Seeking in an area compare their Perception check results to your Stealth DC to determine whether they find the object.",
            "Success The object remains undetected.",
            "Failure The searcher finds the object.",
        ]
    },
    {
        title: "Palm an Object",
        icon: "one-action",
        subtitle: "Thievery (secret)",
        description: "Palm an unattended object of negligible bulk.",
        reference: "Core Rulebook pg 253.",
        bullets: [
            "Palming a small, unattended object without being noticed requires you to roll a single Thievery check against the Perception DCs of all creatures who are currently observing you. You take the object whether or not you successfully conceal that you did so. You can typically only Palm Objects of negligible Bulk, though the GM might determine otherwise depending on the situation.",
            "Success The creature does not notice you Palming the Object.",
            "Failure The creature notices you Palming the Object, and the GM determines the creature’s response.",
        ]
    },
    {
        title: "Steal",
        icon: "one-action",
        subtitle: "Thievery (secret)",
        description: "Steal an object of negligible bulk from a creature.",
        reference: "Core Rulebook pg 253.",
        bullets: [
            "You try to take a small object from another creature without being noticed. Typically, you can Steal only an object of negligible Bulk, and you automatically fail if the creature who has the object is in combat or on guard.",
            "Attempt a Thievery check to determine if you successfully Steal the object. The DC to Steal is usually the Perception DC of the creature wearing the object. This assumes the object is worn but not closely guarded (like a loosely carried pouch filled with coins, or an object within such a pouch). If the object is in a pocket or similarly protected, you take a –5 penalty to your Thievery check. The GM might increase the DC of your check if the nature of the object makes it harder to steal (such as a very small item in a large pack, or a sheet of parchment mixed in with other documents).",            
            "You might also need to compare your Thievery check result against the Perception DCs of observers other than the person wearing the object. The GM may increase the Perception DCs of these observers if they’re distracted.",            
            "Success You steal the item without the bearer noticing, or an observer doesn’t see you take or attempt to take the item.",
            "Failure The item’s bearer notices your attempt before you can take the object, or an observer sees you take or attempt to take the item. The GM determines the response of any creature that notices your theft."
        ]
    },
    {
        title: "Lie",
        icon: "three-action-plus",
        subtitle: "Deception (secret)",
        description: "Fool someone with an untruth.",
        reference: "Core Rulebook pg 246.",
        bullets: [
            "You try to fool someone with an untruth. Doing so takes at least 1 round, or longer if the lie is elaborate. You roll a single Deception check and compare it against the Perception DC of every creature you are trying to fool. The GM might give them a circumstance bonus based on the situation and the nature of the lie you are trying to tell. Elaborate or highly unbelievable lies are much harder to get a creature to believe than simpler and more believable lies, and some lies are so big that it’s impossible to get anyone to believe them.",
            "At the GM’s discretion, if a creature initially believes your lie, it might attempt a Perception check later to Sense Motive against your Deception DC to realize it’s a lie. This usually happens if the creature discovers enough evidence to counter your statements.",
            "Success: The target believes your lie.",
            "Failure: The target doesn’t believe your lie and gains a +4 circumstance bonus against your attempts to Lie for the duration of your conversation. The target is also more likely to be suspicious of you in the future."
        ]
    },
    {
        title: "Sense Motive",
        icon: "one-action",
        subtitle: "Perception (secret)",
        description: "Detect abnormal behavior.",
        reference: "Core Rulebook pg 246.",
        bullets: [
            "You try to tell whether a creature's behavior is abnormal. Choose one creature, and assess it for odd body language, signs of nervousness, and other indicators that it might be trying to deceive someone. The GM attempts a single secret Perception check for you and compares the result to the Deception DC of the creature, the DC of a spell affecting the creature's mental state, or another appropriate DC determined by the GM. You typically can't try to Sense the Motive of the same creature again until the situation changes significantly.",
            "Critical Success: You determine the creature’s true intentions and get a solid idea of any mental magic affecting it.",
            "Success: You can tell whether the creature is behaving normally, but you don’t know its exact intentions or what magic might be affecting it.",
            "Failure: You detect what a deceptive creature wants you to believe. If they’re not being deceptive, you believe they’re behaving normally.",
            "Critical Failure: You get a false sense of the creature’s intentions."
        ]
    },
]
