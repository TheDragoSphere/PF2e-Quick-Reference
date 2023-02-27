data_action = [
    {
        title: "Strike",
        icon: "one-action",
        subtitle: "Weapon/Unarmed attack",
        description: "Perform a melee or ranged attack with your weapon",
        reference: "Core Rulebook pg. 471.",
        bullets: [
            "You attack with a weapon you're wielding or with an unarmed attack, targeting one creature within your reach (for a melee attack) or within range (for a ranged attack). Roll the attack roll for the weapon or unarmed attack you are using, and compare the result to the target creature's AC to determine the effect. See Attack Rolls and Damage for details on calculating your attack and damage rolls.",
            "Critical Success As success, but you deal double damage.",
            "Success You deal damage according to the weapon or unarmed attack, including any modifiers, bonuses, and penalties you have to damage."
        ]
    },

    {
        title: "Escape",
        icon: "one-action",
        subtitle: "Attempt to free yourself",
        description: "Attempt to get free when grabbed, restrained or immobilized",
        reference: "Core Rulebook pg. 470.",
        bullets: [
            "You attempt to escape from being grabbed, immobilized, or restrained. Choose one creature, object, spell effect, hazard, or other impediment imposing any of those conditions on you. Attempt a check using your unarmed attack modifier against the DC of the effect. This is typically the Athletics DC of a creature grabbing you, the Thievery DC of a creature who tied you up, the spell DC for a spell effect, or the listed Escape DC of an object, hazard, or other impediment. You can attempt an Acrobatics or Athletics check instead of using your attack modifier if you choose (but this action still has the attack trait).",
            "Critical Success: You get free and remove the grabbed, immobilized, and restrained conditions imposed by your chosen target. You can then Stride up to 5 feet.",
            "Success: You get free and remove the grabbed, immobilized, and restrained conditions imposed by your chosen target.",
            "Critical Failure: You don’t get free, and you can’t attempt to Escape again until your next turn.",
        ]
    },

    {
        title: "Force Open",
        icon: "one-action",
        subtitle: "Athletics",
        description: "Break open a door, window or container",
        reference: "Core Rulebook pg. 242.",
        bullets: [
            "Using your body, a lever, or some other tool, you attempt to forcefully open a door, window, container or heavy gate. With a high enough result, you can even smash through walls. Without a crowbar, prying something open takes a –2 item penalty to the Athletics check to Force Open.",
            "Critical Success: You open the door, window, container, or gate and can avoid damaging it in the process.",
            "Success: You break the door, window, container, or gate open, and the door, window, container, or gate gains the broken condition. If it’s especially sturdy, the GM might have it take damage but not be broken.",
            "Critical Failure Your attempt jams the door, window, container, or gate shut, imposing a –2 circumstance penalty on future attempts to Force it Open.",
        ]
    },
]

data_combat_maneuvers = [
    {
        title: "Grapple",
        icon: "one-action",
        subtitle: "Athletics vs Fortitude",
        description: "Requirements You have at least one free hand or have your target grappled or restrained. Your target isn't more than one size larger than you.",
        reference: "Core Rulebook pg. 242.",
        bullets: [
            "You attempt to grab a creature or object with your free hand. Attempt an Athletics check against the target's Fortitude DC. You can Grapple a target you already have grabbed or restrained without having a hand free.",
            "Critical Success: Your target is restrained until the end of your next turn unless you move or your target Escapes.",
            "Success: Your target is grabbed until the end of your next turn unless you move or your target Escapes.",
            "Failure: You fail to grab your target. If you already had the target grabbed or restrained using a Grapple, those conditions on that creature or object end.",
            "Critical Failure: If you already had the target grabbed or restrained, it breaks free. Your target can either grab you, as if it succeeded at using the Grapple action against you, or force you to fall and land prone."
        ]
    },

    {
        title: "Shove",
        icon: "one-action",
        subtitle: "Athletics vs Fortitude",
        description: "Push an opponent 5 (10 on crit) feet away from you. You can follow",
        reference: "Core Rulebook pg. 243.",
        bullets: [
            "Requirements You have at least one hand free. The target can’t be more than one size larger than you.",
            "You push a creature away from you. Attempt an Athletics check against your target's Fortitude DC.",
            "Critical Success: You push your target up to 10 feet away from you. You can Stride after it, but you must move the same distance and in the same direction.",
            "Success You push your target back 5 feet. You can Stride after it, but you must move the same distance and in the same direction.",
            "Critical Failure You lose your balance, fall, and land prone."
        ]
    },

]