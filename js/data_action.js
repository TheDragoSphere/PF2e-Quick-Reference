data_action = [
    {
        title: "Strike",
        icon: "one-action",
        subtitle: "Weapon/Unarmed attack",
        description: "Perform a melee or ranged attack with your weapon",
        reference: "Core Rulebook pg. 471.",
        bullets: [
            "You attack with a weapon you're wielding or with an unarmed attack, targeting one creature within your reach (for a melee attack) or within range (for a ranged attack). Roll the attack roll for the weapon or unarmed attack you are using, and compare the result to the target creature's AC to determine the effect. See Attack Rolls and Damage for details on calculating your attack and damage rolls.",
            "<b>Critical Success:</b> As success, but you deal double damage.",
            "<b>Success:</b> You deal damage according to the weapon or unarmed attack, including any modifiers, bonuses, and penalties you have to damage."
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
            "<b>Critical Success:</b> You get free and remove the grabbed, immobilized, and restrained conditions imposed by your chosen target. You can then Stride up to 5 feet.",
            "<b>Success:</b> You get free and remove the grabbed, immobilized, and restrained conditions imposed by your chosen target.",
            "<b>Critical Failure:</b> You don’t get free, and you can’t attempt to Escape again until your next turn.",
        ]
    },

    {
        title: "Feint",
        icon: "one-action",
        subtitle: "Deception (Trained)",
        description: "Target is flat footed aginst your next melee attack this turn",
        reference: "Core Rulebook pg. 246.",
        bullets: [
            "Requirements You are within melee reach of the opponent you attempt to Feint.",
            "With a misleading flourish, you leave an opponent unprepared for your real attack. Attempt a Deception check against that opponent’s Perception DC.","Critical Success: You throw your enemy’s defenses against you entirely off. The target is flat-footed against melee attacks that you attempt against it until the end of your next turn.",
            "<b>Success:</b> Your foe is fooled, but only momentarily. The target is flat-footed against the next melee attack that you attempt against it before the end of your current turn.",
            "<b>Critical Failure:</b> Your feint backfires. You are flat-footed against melee attacks the target attempts against you until the end of your next turn."
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
            "<b>Critical Success:</b> Your target is restrained until the end of your next turn unless you move or your target Escapes.",
            "<b>Success:</b> Your target is grabbed until the end of your next turn unless you move or your target Escapes.",
            "<b>Failure:</b> You fail to grab your target. If you already had the target grabbed or restrained using a Grapple, those conditions on that creature or object end.",
            "<b>Critical Failure:</b> If you already had the target grabbed or restrained, it breaks free. Your target can either grab you, as if it succeeded at using the Grapple action against you, or force you to fall and land prone."
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
            "<b>Critical Success:</b> You push your target up to 10 feet away from you. You can Stride after it, but you must move the same distance and in the same direction.",
            "<b>Success:</b> You push your target back 5 feet. You can Stride after it, but you must move the same distance and in the same direction.",
            "<b>Critical Failure:</b> You lose your balance, fall, and land prone."
        ]
    },
    {
        title: "Trip",
        icon: "one-action",
        subtitle: "Athletics vs Reflex",
        description: "knock an opponent prone",
        reference: "Core Rulebook pg. 243.",
        bullets: [
            "Requirements You have at least one hand free. Your target can’t be more than one size larger than you.",
            "You try to knock a creature to the ground. Attempt an Athletics check against the target’s Reflex DC.",
            "<b>Critical Success:</b> The target falls and lands prone and takes 1d6 bludgeoning damage.",
            "Success: The target falls and lands prone.",
            "Critical Failure: You lose your balance and fall and land prone."
        ]
    },

    {
        title: "Disarm",
        icon: "one-action",
        subtitle: "Athletics vs Reflex (Trained)",
        description: "Knock something out of an opponent's grasp",
        reference: "Core Rulebook pg. 243.",
        bullets: [
            "Requirements You have at least one hand free. The target can’t be more than one size larger than you.",
            "You try to knock something out of a creature’s grasp. Attempt an Athletics check against the target’s Reflex DC.",
            "Critical Success: You knock the item out of the target's grasp. It falls to the ground in the target's space.",
            "Success: You weaken your target's grasp on the item. Until the start of that creature's turn, attempts to Disarm the target of that item gain a +2 circumstance bonus, and the target takes a –2 circumstance penalty to attacks with the item or other checks requiring a firm grasp on the item.",
            "Critical Failure: You lose your balance and become flat-footed until the start of your next turn."
        ]
    },

]

data_magical_actions = [

    {
        title: "Cast A Spell",
        icon: "action-plus-test",
        subtitle: "Cast a prepared spell",
        description: "You cast a spell you have prepared. As soon as the spellcasting actions are complete, the spell effect occurs.",
        reference: "Core Rulebook pg. 302.",
        bullets: [
            "Some spells are cast as a reaction or free action. In those cases, you Cast the Spell as a reaction or free action (as appropriate) instead of as an activity. Such cases will be noted in the spell's stat block—for example, verbal.",
            "Some spells take minutes or hours to cast. The Cast a Spell activity for these spells includes a mix of the listed spell components, but it's not necessary to break down which one you're providing at a given time. You can't use other actions or reactions while casting such a spell, though at the GM's discretion, you might be able to speak a few sentences. As with other activities that take a long time, these spells have the exploration trait, and you can't cast them in an encounter. If combat breaks out while you're casting one, your spell is disrupted.",
            "Spell Components: Each spell lists the spell components required to cast it after the action icons or text, such as material, somatic, verbal. The spell components, described in detail below, add traits and requirements to the Cast a Spell activity. If you can't provide the components, you fail to Cast the Spell.",
            "Material (manipulate)",
            "Somatic (manipulate)",
            "Verbal (concentrate)",
            "Focus (manipulate)",
            "Disrupted and Lost Spells Some abilities and spells can disrupt a spell, causing it to have no effect and be lost. When you lose a spell, you've already expended the spell slot, spent the spell's costs and actions, and used the Cast a Spell activity. If a spell is disrupted during a Sustain a Spell action, the spell immediately ends. The full rules for disrupting actions appear here."
        ]
    },
    {
        title: "Dismiss",
        icon: "one-action",
        subtitle: "End one spell or effect",
        description: "",
        reference: "Core Rulebook pg. 305.",
        bullets: [
            "You end one spell effect or magic item effect. This must be an effect you are allowed to dismiss, as defined by the spell or item. Dismissal might end the effect entirely or might end it just for a certain target or targets, depending on the spell or item."
        ]
    },
    {
        title: "Sustain",
        icon: "one-action",
        subtitle: "Extend a spell/effect",
        description: "Extend one spell or item effect until the end of your next turn",
        reference: "Core Rulebook pg. 304 & 534.",
        bullets: [
            "Requirements: You have at least one spell/magic item active with a sustained duration, and you are not fatigued.",
            "Choose one spell or magic item with a sustained duration you have in effect. The duration of that spell/effect continues until the end of your next turn. Some spells might have slightly different or expanded effects if you sustain them. Sustaining a Spell/effect for more than 10 minutes (100 rounds) ends the spell and makes you fatigued unless the spell lists a different maximum duration (such as “sustained up to 1 minute” or “sustained up to 1 hour”).",
            "If your Sustain action is disrupted, the spell immediately ends."
        ]
    },
    {
        title: "Identify a Spell",
        icon: "one-action",
        subtitle: "Tradition (secret)",
        description: "Identify a spell that you witnessed being cast",
        reference: "Core Rulebook pg. 305.",
        bullets: [
            "If you notice a spell being cast and have the same spell prepared or in your repertoire, you automatically identify it and the level it's cast at.",
            "Sometimes you need to identify a spell, especially if its effects are not obvious right away. If you notice a spell being cast, and you have prepared that spell or have it in your repertoire, you automatically know what the spell is, including the level to which it is heightened.",
            "If you want to identify a spell but don’t have it prepared or in your repertoire, you must spend an action on your turn to attempt to identify it using Recall Knowledge. You typically notice a spell being cast by seeing its visual manifestations or hearing its verbal casting components. Identifying long-lasting spells that are already in place requires using Identify Magic instead of Recall Knowledge because you don’t have the advantage of watching the spell being cast."
        ]
    },
    {
        title: "Recognize a Spell",
        icon: "react",
        subtitle: "Tradition (secret)[FEAT]",
        description: "Identify a spell being cast",
        reference: "Core Rulebook pg. 305.",
        bullets: [
            "If you notice a spell being cast and have the same spell prepared or in your repertoire, you automatically identify it and the level it's cast at.",
            "Prerequisites trained in Arcana, Nature, Occultism, or Religion",
            "Trigger: A creature within line of sight casts a spell that you don’t have prepared or in your spell repertoire, or a trap or similar object casts such a spell. You must be aware of the casting.",
            "If you are trained in the appropriate skill for the spell’s tradition and it’s a common spell of 2nd level or lower, you automatically identify it (you still roll to attempt to get a critical success, but can’t get a worse result than success). The highest level of spell you automatically identify increases to 4 if you’re an expert, 6 if you’re a master, and 10 if you’re legendary. The GM rolls a secret Arcana, Nature, Occultism, or Religion check, whichever corresponds to the tradition of the spell being cast. If you’re not trained in the skill, you can’t get a result better than failure.",
            "Critical Success: You correctly recognize the spell and gain a +1 circumstance bonus to your saving throw or your AC against it.",
            "Success: You correctly recognize the spell.",
            "Failure: You fail to recognize the spell.",
            "Critical Failure: You misidentify the spell as another spell entirely, of the GM’s choice."
        ]
    },
]

data_defensive_actions = [
    {
        title: "Avert Gaze",
        icon: "one-action",
        subtitle: "+Bonus against visual abilites",
        description: "You get a +2 circumstance bonus avainst visual abilites",
        reference: "Core Rulebook pg. 472.",
        bullets: [
            "You avert your gaze from danger. You gain a +2 circumstance bonus to saves against visual abilities that require you to look at a creature or object, such as a medusa's petrifying gaze. Your gaze remains averted until the start of your next turn."
        ]
    },
    {
        title: "Take Cover",
        icon: "one-action",
        subtitle: "Gain Cover",
        description: "Gain cover +2, or get greater cover +4 if you have cover.",
        reference: "Core Rulebook pg. 471.",
        bullets: [
            "Requirements You are benefiting from cover, are near a feature that allows you to take cover, or are prone.",
            "You press yourself against a wall or duck behind an obstacle to take better advantage of cover. If you would have standard cover, you instead gain greater cover, which provides a +4 circumstance bonus to AC; to Reflex saves against area effects; and to Stealth checks to Hide, Sneak, or otherwise avoid detection. Otherwise, you gain the benefits of standard cover (a +2 circumstance bonus instead). This lasts until you move from your current space, use an attack action, become unconscious, or end this effect as a free action."
        ]
    },
    {
        title: "Raise Shield/Parry",
        icon: "one-action",
        subtitle: "+Bonus to AC",
        description: "Put up a shield (or parry weapon) to get its bonus to AC.",
        reference: "Core Rulebook pg. 472  & 238.",
        bullets: [
            "Requirements You are wielding a shield or a weapon with the parry trait",
            "You position your shield/weapon to protect yourself.",
            "When you have Raised a Shield, you gain its listed circumstance bonus to AC. Your shield remains raised until the start of your next turn."
        ]
    },
    {
        title: "Shield Block",
        icon: "react",
        subtitle: "(Feat)",
        description: "Reduces damage of a physical attack by the raised shield's Hardness. Both you and the shield take any remaining damage",
        reference: "Core Rulebook pg. 266.",
        bullets: [
            "Trigger While you have your shield raised, you would take damage from a physical attack.",
            "You snap your shield in place to ward off a blow. Your shield prevents you from taking an amount of damage up to the shield’s Hardness. You and the shield each take any remaining damage, possibly breaking or destroying the shield."
        ]
    },

]

data_more_conflict_actions = [
    {
        title: "Delay",
        icon: "free",
        subtitle: "Delay your turn",
        description: "Delay the start of your turn; start your turn later after another creature's turn ends.",
        reference: "Core Rulebook pg. 470.",
        bullets: [
            "You wait for the right moment to act. The rest of your turn doesn’t happen yet. Instead, you’re removed from the initiative order. You can return to the initiative order as a free action triggered by the end of any other creature’s turn. This permanently changes your initiative to the new position. You can’t use reactions until you return to the initiative order. If you Delay an entire round without returning to the initiative order, the actions from the Delayed turn are lost, your initiative doesn’t change, and your next turn occurs at your original position in the initiative order.",
            "When you Delay, any persistent damage or other negative effects that normally occur at the start or end of your turn occur immediately when you use the Delay action. Any beneficial effects that would end at any point during your turn also end. The GM might determine that other effects end when you Delay as well. Essentially, you can’t Delay to avoid negative consequences that would happen on your turn or to extend beneficial effects that would end on your turn.",
        ]
    },
    {
        title: "Ready",
        icon: "two-action-react",
        subtitle: "Prepare an action/free action",
        description: "Prepare to take a single/free action as a reaction with a given trigger.",
        reference: "Core Rulebook pg. 470.",
        bullets: [
            "You prepare to use an action that will occur outside your turn. Choose a single action or free action you can use, and designate a trigger. Your turn then ends. If the trigger you designated occurs before the start of your next turn, you can use the chosen action as a reaction (provided you still meet the requirements to use it). You can’t Ready a free action that already has a trigger.",
            "If you have a multiple attack penalty and your readied action is an attack action, your readied attack takes the multiple attack penalty you had at the time you used Ready. This is one of the few times the multiple attack penalty applies when it’s not your turn."
        ]
    },
    {
        title: "Create Diversion",
        icon: "one-action",
        subtitle: "Deception",
        description: "Use a diversion to temporarily become hidden.",
        reference: "Core Rulebook pg. 245.",
        bullets: [
            "With a gesture, a trick, or some distracting words, you can create a diversion that draws creatures' attention elsewhere. If you use a gesture or trick, this action gains the manipulate trait. If you use distracting words, it gains the auditory and linguistic traits.",
            "Attempt a single Deception check and compare it to the Perception DCs of the creatures whose attention you're trying to divert. Whether or not you succeed, creatures you attempt to divert gain a +4 circumstance bonus to their Perception DCs against your attempts to Create a Diversion for 1 minute.",
            "Success You become hidden to each creature whose Perception DC is less than or equal to your result. (The hidden condition allows you to Sneak away.) This lasts until the end of your turn or until you do anything except Step or use the Hide or the Sneak action of the Stealth skill. If you Strike a creature, the creature remains flat-footed against that attack, and you then become observed. If you do anything else, you become observed just before you act unless the GM determines otherwise.",
            "Failure You don’t divert the attention of any creatures whose Perception DC exceeds your result, and those creatures are aware you were trying to trick them."
        ]
    },
    {
        title: "Bon Mot",
        icon: "one-action",
        subtitle: "Diplomacy vs Will (feat)",
        description: "Distract a foe with a witty quip.",
        reference: "Advanced Player's Guide pg. 203.",
        bullets: [
            "Prerequisites trained in Diplomacy",
            "You launch an insightful quip at a foe, distracting them. Choose a foe within 30 feet and roll a Diplomacy check against the target's Will DC.",
            "Critical Success: The target is distracted and takes a –3 status penalty to Perception and Will saves for 1 minute. The target can end the effect early with a retort to your Bon Mot. This can either be a single action that has the concentrate trait or an appropriate skill action to frame their retort. The GM determines which skill actions qualify, though they must take at least 1 action. Typically, the retort needs to use a linguistic Charisma-based skill action.",
            "Success: As critical success, but the penalty is –2.",
            "Critical Failure: Your quip is atrocious. You take the same penalty an enemy would take had you succeeded. This ends after 1 minute or if you issue another Bon Mot and succeed.",
            "Traits are as follows:",
            "Auditory: Auditory actions and effects rely on sound. An action with the auditory trait can be successfully performed only if the creature using the action can speak or otherwise produce the required sounds. A spell or effect with the auditory trait has its effect only if the target can hear it. This applies only to sound-based parts of the effect, as determined by the GM. This is different from a sonic effect, which still affects targets who can't hear it (such as deaf targets) as long as the effect itself makes sound.",
            "Concentrate: An action with this trait requires a degree of mental concentration and discipline.",
            "Emotion: This effect alters a creature's emotions. Effects with this trait always have the mental trait as well. Creatures with special training or that have mechanical or artificial intelligence are immune to emotion effects.",
            "General: A type of feat that any character can select, regardless of ancestry and class, as long as they meet the prerequisites. You can select a feat with this trait when your class grants a general feat.",
            "Linguistic: An effect with this trait depends on language comprehension. A linguistic effect that targets a creature works only if the target understands the language you are using.","Mental: A mental effect can alter the target's mind. It has no effect on an object or a mindless creature.",
            "Skill: A general feat with the skill trait improves your skills and their actions or gives you new actions for a skill. A feat with this trait can be selected when a class grants a skill feat or general feat. Archetype feats with the skill trait can be selected in place of a skill feat if you have that archetype's dedication feat."
        ]
    },
    {
        title: "Demoralize",
        icon: "one-action",
        subtitle: "Intimidation vs Will",
        description: "Shake an enemy's resolve.",
        reference: "Core Rulebook pg. 247.",
        bullets: [
            "With a sudden shout, a well-timed taunt, or a cutting putdown, you can shake an enemy's resolve. Choose a creature within 30 feet of you who you're aware of. Attempt an Intimidation check against that target's Will DC. If the target does not understand the language you are speaking, or you're not speaking a language, you take a –4 circumstance penalty to the check. Regardless of your result, the target is temporarily immune to your attempts to Demoralize it for 10 minutes.","Critical Success The target becomes frightened 2.",
            "Success The target becomes frightened 1."
        ]
    },
]
